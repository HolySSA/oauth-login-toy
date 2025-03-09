import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { Strategy as KakaoStrategy } from "passport-kakao";

// 사용자 정보를 세션에 저장
passport.serializeUser((user, done) => {
  done(null, user);
});

// 세션에서 사용자 정보를 복원
passport.deserializeUser((user, done) => {
  done(null, user);
});

// Google 전략 설정
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:3000/auth/google/callback",
      scope: ["profile", "email"],
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        // DB 저장/조회 로직 추가
        const user = {
          id: profile.id,
          email: profile.emails[0].value,
          name: profile.displayName,
          provider: "google",
        };
        return done(null, user);
      } catch (error) {
        return done(error, null);
      }
    }
  )
);

// Kakao 전략 설정
passport.use(
  new KakaoStrategy(
    {
      clientID: process.env.KAKAO_CLIENT_ID,
      clientSecret: process.env.KAKAO_CLIENT_SECRET,
      callbackURL: "http://localhost:3000/auth/kakao/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const user = {
          id: profile.id,
          email: profile._json?.kakao_account?.email,
          name: profile.displayName || profile._json?.properties?.nickname,
          provider: "kakao",
        };
        return done(null, user);
      } catch (error) {
        return done(error, null);
      }
    }
  )
);
