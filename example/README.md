# OAuth example

This Express server connects a StreamVi project and reads its information with SDK Axios. It validates a single-use state, uses PKCE and stores the connection in a server session. Passport is not required.

## Start locally

```bash
git clone https://github.com/StreamVi/streamvi-sdk.git
cd streamvi-sdk
npm install
cp .env.example .env
```

Create an OAuth application in StreamVi, allow `project:read` and configure the exact callback URL `http://localhost:3000/auth/streamvi/callback`. Fill in `.env`:

```dotenv
STREAMVI_CLIENT_ID=YOUR_CLIENT_ID
CALLBACK_URL=http://localhost:3000/auth/streamvi/callback
SESSION_SECRET=YOUR_RANDOM_SESSION_SECRET
PORT=3000
```

Generate a session secret with `node -e "console.log(require('node:crypto').randomBytes(32).toString('hex'))"` and keep `.env` out of Git. This PKCE flow uses a server-held verifier rather than an application secret.

```bash
npm run example
```

Open http://localhost:3000 and connect your test project. The welcome page confirms server startup; complete OAuth and verify the displayed project to check the integration. Requesting project information requires `project:read`.

## Files

- `config/oauth.ts` creates state and PKCE, validates the callback and exchanges its code.
- `config/session.ts` configures the server session used during OAuth.
- `routes/index.ts` consumes the OAuth transaction before exchange, stores the connection and queries the project.

The transaction expires after ten minutes. Starting another connection replaces it. Failed or repeated callbacks require starting again. Tokens stay on the server and are not displayed on the page or logged. The example does not refresh tokens; reconnect if access is revoked.

These server dependencies are development dependencies, not runtime requirements of the SDK. Session storage is in memory for local use and is lost on restart. Before deployment, configure persistent storage, HTTPS and secure cookies and associate connections with your application's authenticated users.
