import session from 'express-session';
import { SessionOptions } from 'express-session';

export function getSessionMiddleware(): ReturnType<typeof session> {
  const sessionOptions: SessionOptions = {
    secret: 'streamvi_example_secret', // replace with your secret in real project
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }, // for http, if https — use true
  };
  return session(sessionOptions);
} 