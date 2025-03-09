import "dotenv/config";
import express from "express";
import session from "express-session";
import passport from "passport";
import "./config/passport.js";
import authRoutes from "./routes/auth.js";

const app = express();

// 세션 설정
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

// Passport 초기화
app.use(passport.initialize());
app.use(passport.session());

// 인증 라우트 연결
app.use("/auth", authRoutes);

// 기본 라우트
app.get("/", (req, res) => {
  res.send(`
    <h1>OAuth 로그인 테스트</h1>
    <div style="margin-bottom: 10px;">
      <a href="/auth/google" style="display: inline-block; padding: 10px 20px; background-color: #4285f4; color: white; text-decoration: none; border-radius: 5px;">Google로 로그인</a>
    </div>
    <div style="margin-bottom: 10px;">
      <a href="/auth/kakao" style="display: inline-block; padding: 10px 20px; background-color: #FEE500; color: #000000; text-decoration: none; border-radius: 5px;">Kakao로 로그인</a>
    </div>
    ${
      req.user
        ? `
      <div style="margin-top: 20px;">
        <p>환영합니다 ${req.user.name}님! (${req.user.provider} 계정)</p>
        <a href="/auth/profile">프로필 보기</a>
        <br>
        <a href="/auth/logout">로그아웃</a>
      </div>
    `
        : ""
    }
  `);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`서버가 포트 ${PORT}에서 실행 중입니다.`);
});
