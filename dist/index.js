"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const passport_1 = __importDefault(require("passport"));
const passport_streamvi_1 = require("passport-streamvi");
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
const api2_1 = require("./generated/api2");
const streamvi_sdk_config_1 = require("./streamvi-sdk-config");
const express_session_1 = __importDefault(require("express-session"));
// Loading environment variables
const result = dotenv_1.default.config({ path: path_1.default.resolve(__dirname, '../.env') });
if (result.error) {
    console.error('Error loading .env file:', result.error);
    process.exit(1);
}
// Check for required variables
const requiredEnvVars = ['STREAMVI_CLIENT_ID', 'STREAMVI_CLIENT_SECRET', 'CALLBACK_URL'];
const missingEnvVars = requiredEnvVars.filter(envVar => !process.env[envVar]);
if (missingEnvVars.length > 0) {
    console.error('Missing required environment variables:', missingEnvVars.join(', '));
    process.exit(1);
}
const app = (0, express_1.default)();
// Setting up StreamVi strategy
passport_1.default.use(new passport_streamvi_1.StreamViStrategy({
    clientID: process.env.STREAMVI_CLIENT_ID,
    clientSecret: process.env.STREAMVI_CLIENT_SECRET,
    callbackURL: process.env.CALLBACK_URL,
}, (accessToken, refreshToken, profile, done) => {
    console.log('Strategy received profile:', profile);
    if (!profile) {
        console.log('Profile not received');
        return done(null, false, { message: 'Failed to get user profile' });
    }
    // Here you can save tokens and profile to the database
    return done(null, { accessToken, refreshToken, profile });
}));
// Middleware
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(passport_1.default.initialize());
app.use((0, express_session_1.default)({
    secret: 'streamvi_example_secret', // замените на свой секрет в реальном проекте
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false } // для http, если https — используйте true
}));
// Главная страница
app.get('/', async (req, res) => {
    const sess = req.session;
    if (!sess.accessToken) {
        res.send(`
      <h2>StreamVi SDK</h2>
      <a href="/auth/streamvi"><button>Войти через StreamVi</button></a>
    `);
        return;
    }
    if (!sess.projectId) {
        res.send(`
      <b>project_id не найден в сессии!</b><br>
      <a href="/auth/streamvi"><button>Войти через StreamVi</button></a>
    `);
        return;
    }
    try {
        const sdkConfig = new streamvi_sdk_config_1.StreamViSdkConfig({ accessToken: sess.accessToken });
        const userProjectApi = new api2_1.UserProjectApi(sdkConfig.configuration);
        const response = await userProjectApi.siteUserProjectControllerGetProjectInfo1(api2_1.SiteUserProjectControllerGetProjectInfo1VEnum._1, api2_1.SiteUserProjectControllerGetProjectInfo1LanguageEnum.Ru, sess.projectId);
        const project = response.data;
        res.send(`
      <h2>StreamVi SDK</h2>
      <form method="POST" action="/logout" style="display:inline;"><button type="submit">Выйти из проекта</button></form>
      <hr>
      <div style="margin-top:16px;">
        <b>Текущий accessToken:</b>
        <pre style="max-width:600px;white-space:pre-wrap;word-break:break-all;background:#f8f8f8;padding:8px;border-radius:4px;">${sess.accessToken}</pre>
      </div>
      <hr>
      <h3>Информация о проекте:</h3>
      <div style="display:flex;align-items:center;gap:16px;">
        <img src="${project.data.photo_100 || project.data.photo_50 || ''}" alt="avatar" style="width:64px;height:64px;border-radius:50%;border:1px solid #ccc;object-fit:cover;">
        <div>
          <div><b>${project.data.name}</b></div>
          <div>ID: ${project.data.project_id}</div>
          <div>External ID: ${project.data.external_id}</div>
        </div>
      </div>
      <pre style="margin-top:8px;background:#f8f8f8;padding:8px;border-radius:4px;">${JSON.stringify(project, null, 2)}</pre>
    `);
    }
    catch (e) {
        res.send(`
      <b>Ошибка:</b> <pre>${e instanceof Error ? e.message : JSON.stringify(e)}</pre>
      ${(() => {
            if (e !== null && typeof e === 'object') {
                const err = e;
                if ('response' in err && err.response && 'data' in err.response) {
                    return `<pre>${JSON.stringify(err.response.data, null, 2)}</pre>`;
                }
            }
            return '';
        })()}
      <p>Попробуйте <b>выйти</b> и авторизоваться заново.</p>
      <form method="POST" action="/logout" style="display:inline;"><button type="submit">Выйти</button></form>
    `);
    }
});
// POST /logout
app.post('/logout', (req, res) => {
    req.session.destroy(() => {
        res.redirect('/');
    });
});
app.get('/login', (req, res) => {
    const errorMessage = req.query.error ? decodeURIComponent(req.query.error) : 'Authentication Error';
    console.log('/login page received error:', errorMessage);
    console.log('All request parameters:', req.query);
    res.send(`
    <h2>Authentication Error</h2>
    <p style="color: red">${errorMessage}</p>
    <p><strong>Request details:</strong> ${JSON.stringify(req.query)}</p>
    <a href="/auth/streamvi">Try again</a>
  `);
});
app.get('/auth/streamvi', passport_1.default.authenticate('streamvi'));
app.get('/auth/streamvi/callback', (req, res, next) => {
    console.log('Received callback from StreamVi');
    console.log('Request parameters:', req.query);
    if (req.query.error) {
        const errorMessage = req.query.error_description
            ? decodeURIComponent(req.query.error_description)
            : req.query.error;
        console.log('OAuth error detected in URL:', errorMessage);
        return res.redirect(`/login?error=${encodeURIComponent(errorMessage)}`);
    }
    passport_1.default.authenticate('streamvi', (err, user, info) => {
        console.log('Authentication result:');
        console.log('- Error:', err);
        console.log('- User:', user);
        console.log('- Info:', info);
        if (err) {
            console.log('Server error:', err.message);
            return res.redirect(`/login?error=${encodeURIComponent(err.message || 'Server error')}`);
        }
        if (!user) {
            let errorMessage = 'Authentication error';
            if (info) {
                if (typeof info === 'string') {
                    errorMessage = info;
                }
                else if (info.message) {
                    errorMessage = info.message;
                }
                else if (info.toString && info.toString() !== '[object Object]') {
                    errorMessage = info.toString();
                }
            }
            console.log('Authentication error:', errorMessage);
            return res.redirect(`/login?error=${encodeURIComponent(errorMessage)}`);
        }
        // Сохраняем токены и project_id в сессию пользователя
        const sess = req.session;
        sess.accessToken = user.accessToken;
        sess.projectId = user.projectId;
        return res.redirect('/');
    })(req, res, next);
});
// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
// Экспорт сгенерированного API
// export * from './generated/api2';
