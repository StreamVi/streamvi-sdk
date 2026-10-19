import { Router } from 'express';
import type { Request } from 'express';
import type { Session } from 'express-session';
import { beginOAuth, finishOAuth, OAuthTransaction } from '../config/oauth';
import { ProjectApi, StreamViSdkConfig } from '../../src';

interface SessionRequest extends Request {
  session: Session & { accessToken?: string; projectId?: number; oauth?: OAuthTransaction };
}

async function getProjectInfo(accessToken: string, projectId: number) {
  const config = new StreamViSdkConfig({ accessToken, basePath: 'https://api-v2.streamvi.io' });
  const api = new ProjectApi(config.configuration);
  const response = await api.userProjectGetProjectInfoV1({ language: 'ru', project_id: projectId });
  return response.data;
}

function escapeHtml(value: unknown): string {
  return String(value ?? '').replace(/[&<>"']/g, char => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  }[char]!));
}

const router = Router();
router.get('/', async (req, res) => {
  const sess = (req as SessionRequest).session;
  if (!sess.accessToken || !sess.projectId) {
    res.send('<h2>StreamVi SDK</h2><a href="/auth/streamvi">Connect a project</a>');
    return;
  }
  try {
    const project = await getProjectInfo(sess.accessToken, sess.projectId);
    res.send(`<h2>Connected project</h2>
      <p>${escapeHtml(project.data.name)}</p><p>ID: ${escapeHtml(project.data.project_id)}</p>
      <form method="POST" action="/logout"><button>Disconnect</button></form>`);
  } catch {
    res.status(502).send('<p>Could not read the project. Check its access and permissions.</p><a href="/auth/streamvi">Connect again</a>');
  }
});

router.post('/logout', (req, res) => {
  (req as SessionRequest).session.destroy(() => res.redirect('/'));
});
router.get('/login', (_req, res) => {
  res.status(400).send('<p>Connection failed.</p><a href="/auth/streamvi">Try again</a>');
});
router.get('/auth/streamvi', (req, res) => {
  const { url, transaction } = beginOAuth(process.env.STREAMVI_CLIENT_ID!, process.env.CALLBACK_URL!);
  const sess = (req as SessionRequest).session;
  sess.oauth = transaction;
  sess.save(error => res.redirect(error ? '/login' : url));
});
router.get('/auth/streamvi/callback', async (req, res) => {
  const sess = (req as SessionRequest).session;
  const transaction = sess.oauth;
  delete sess.oauth;
  try {
    // Consume the transaction even when validation or code exchange fails.
    await new Promise<void>((resolve, reject) => sess.save(error => error ? reject(error) : resolve()));
    const params = new URL(req.originalUrl, 'http://localhost').searchParams;
    const connection = await finishOAuth(params, transaction);
    await new Promise<void>((resolve, reject) => sess.regenerate(error => error ? reject(error) : resolve()));
    const nextSession = (req as SessionRequest).session;
    Object.assign(nextSession, connection);
    await new Promise<void>((resolve, reject) => nextSession.save(error => error ? reject(error) : resolve()));
    res.redirect('/');
  } catch {
    res.redirect('/login');
  }
});

export default router;
