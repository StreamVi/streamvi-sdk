import passport from 'passport';
import { StreamViStrategy } from 'passport-streamvi';
import { Profile } from 'passport';

export function configurePassport({ clientID, clientSecret, callbackURL }: { clientID: string, clientSecret: string, callbackURL: string }) {
  passport.use(
    new StreamViStrategy(
      {
        clientID,
        clientSecret,
        callbackURL,
      },
      (
        accessToken: string,
        refreshToken: string,
        profile: Profile,
        done: (error: any, user?: any, info?: any) => void
      ) => {
        if (!profile) {
          return done(null, false, { message: 'Failed to get user profile' });
        }
        // You can save tokens and user profile here
        return done(null, { accessToken, refreshToken, profile });
      }
    )
  );
  return passport;
} 