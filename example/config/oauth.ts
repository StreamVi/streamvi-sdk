import { createHash, randomBytes } from 'node:crypto';

export interface OAuthTransaction {
  clientId: string;
  redirectUri: string;
  state: string;
  codeVerifier: string;
  expiresAt: number;
}

export function beginOAuth(clientId: string, redirectUri: string) {
  const transaction: OAuthTransaction = {
    clientId, redirectUri,
    state: randomBytes(32).toString('base64url'),
    codeVerifier: randomBytes(32).toString('base64url'),
    expiresAt: Date.now() + 10 * 60 * 1000,
  };
  const url = new URL('https://streamvi.io/cabinet/oauth');
  url.search = new URLSearchParams({
    client_id: clientId, redirect_uri: redirectUri,
    response_type: 'code', scope: 'project:read', state: transaction.state,
    code_challenge: createHash('sha256').update(transaction.codeVerifier).digest('base64url'),
    code_challenge_method: 'S256',
  }).toString();
  return { url: url.toString(), transaction };
}

// The caller must consume and save the session transaction before calling this function.
export async function finishOAuth(params: URLSearchParams, transaction?: OAuthTransaction) {
  if (!transaction || transaction.expiresAt <= Date.now()
      || params.getAll('state').length !== 1 || params.get('state') !== transaction.state
      || params.has('error') || params.getAll('code').length !== 1 || !params.get('code')) {
    throw new Error('Invalid or expired OAuth callback');
  }
  const response = await fetch('https://api-v2.streamvi.io/site/oauth/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'authorization_code', client_id: transaction.clientId,
      redirect_uri: transaction.redirectUri, code: params.get('code')!,
      code_verifier: transaction.codeVerifier,
    }),
    signal: AbortSignal.timeout(15000),
  });
  if (!response.ok) throw new Error('OAuth code exchange failed');
  const data = await response.json() as { access_token?: unknown; project_id?: unknown };
  const projectId = Number(data?.project_id);
  if (typeof data?.access_token !== 'string' || !data.access_token
      || !Number.isSafeInteger(projectId) || projectId <= 0) {
    throw new Error('Invalid OAuth token response');
  }
  return { accessToken: data.access_token, projectId };
}
