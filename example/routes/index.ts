import { Router } from 'express';
import passport from 'passport';
import { getProjectInfo } from '../helpers/sdk';
import type { Request } from 'express';
import session from 'express-session';

interface SessionData {
  accessToken?: string;
  projectId?: number;
}
interface SessionRequest extends Request {
  session: SessionData & session.Session;
}

const router = Router();

router.get('/', async (req, res) => {
  const sess = (req as SessionRequest).session;
  if (!sess.accessToken) {
    res.send(`
      <h2>StreamVi SDK</h2>
      <a href="/auth/streamvi"><button>Login with StreamVi</button></a>
    `);
    return;
  }
  if (!sess.projectId) {
    res.send(`
      <b>project_id not found in session!</b><br>
      <a href="/auth/streamvi"><button>Login with StreamVi</button></a>
    `);
    return;
  }
  try {
    const project = await getProjectInfo(sess.accessToken, sess.projectId);
    res.send(`
      <h2>StreamVi SDK</h2>
      <form method="POST" action="/logout" style="display:inline;"><button type="submit">Logout from project</button></form>
      <hr>
      <div style="margin-top:16px;">
        <b>Current accessToken:</b>
        <pre style="max-width:600px;white-space:pre-wrap;word-break:break-all;background:#f8f8f8;padding:8px;border-radius:4px;">${sess.accessToken}</pre>
      </div>
      <hr>
      <h3>Project information:</h3>
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
  } catch (e) {
    res.send(`
      <b>Error:</b> <pre>${e instanceof Error ? e.message : JSON.stringify(e)}</pre>
      ${(() => {
        if (e !== null && typeof e === 'object') {
          const err: any = e;
          if ('response' in err && err.response && 'data' in err.response) {
            return `<pre>${JSON.stringify(err.response.data, null, 2)}</pre>`;
          }
        }
        return '';
      })()}
      <p>Try to logout and authorize again.</p>
      <form method="POST" action="/logout" style="display:inline;"><button type="submit">Logout</button></form>
    `);
  }
});

router.post('/logout', (req, res) => {
  (req as SessionRequest).session.destroy(() => {
    res.redirect('/');
  });
});

router.get('/login', (req, res) => {
  const errorMessage = req.query.error ? decodeURIComponent(req.query.error as string) : 'Authentication Error';
  res.send(`
    <h2>Authentication Error</h2>
    <p style="color: red">${errorMessage}</p>
    <p><strong>Request details:</strong> ${JSON.stringify(req.query)}</p>
    <a href="/auth/streamvi">Try again</a>
  `);
});

router.get('/auth/streamvi', passport.authenticate('streamvi'));

router.get('/auth/streamvi/callback', 
  (req, res, next) => {
    if (req.query.error) {
      const errorMessage = req.query.error_description 
        ? decodeURIComponent(req.query.error_description as string) 
        : (req.query.error as string);
      return res.redirect(`/login?error=${encodeURIComponent(errorMessage)}`);
    }
    passport.authenticate('streamvi', (err: any, user: any, info: any) => {
      if (err) {
        return res.redirect(`/login?error=${encodeURIComponent(err.message || 'Server error')}`);
      }
      if (!user) {
        let errorMessage = 'Authentication error';
        if (info) {
          if (typeof info === 'string') {
            errorMessage = info;
          } else if (info.message) {
            errorMessage = info.message;
          } else if (info.toString && info.toString() !== '[object Object]') {
            errorMessage = info.toString();
          }
        }
        return res.redirect(`/login?error=${encodeURIComponent(errorMessage)}`);
      }
      // Сохраняем токены и project_id в сессию пользователя
      const sess = (req as SessionRequest).session;
      sess.accessToken = user.accessToken;
      sess.projectId = user.projectId;
      return res.redirect('/');
    })(req, res, next);
  }
);

export default router; 