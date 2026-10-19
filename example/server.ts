import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { getSessionMiddleware } from './config/session';
import routes from './routes';

dotenv.config({ path: path.resolve(__dirname, '../.env') });
const required = ['STREAMVI_CLIENT_ID', 'CALLBACK_URL', 'SESSION_SECRET'];
const missing = required.filter(name => !process.env[name]);
if (missing.length) {
  console.error('Missing required environment variables:', missing.join(', '));
  process.exit(1);
}

const app = express();
app.use(getSessionMiddleware());
app.use(routes);
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Example server started on port ${port}`));
