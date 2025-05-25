import express from 'express';
import passport from 'passport';
import { StreamViStrategy } from 'passport-streamvi';
import dotenv from 'dotenv';
import path from 'path';
import type { Request } from 'express';
import { configurePassport } from './config/passport';
import { getSessionMiddleware } from './config/session';
import routes from './routes';

// Loading environment variables
const result = dotenv.config({ path: path.resolve(__dirname, '../.env') });

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

// Passport setup
configurePassport({
  clientID: process.env.STREAMVI_CLIENT_ID!,
  clientSecret: process.env.STREAMVI_CLIENT_SECRET!,
  callbackURL: process.env.CALLBACK_URL!,
});

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(getSessionMiddleware());

app.use(routes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});