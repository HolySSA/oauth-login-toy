import express from "express";
import passport from "passport";
import { isAuthenticated } from "../middlewares/auth.middleware.js";

const router = express.Router();

// Google 로그인 라우트
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// Google 로그인 콜백 라우트
router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: "/",
    failureRedirect: "/",
  })
);

// Kakao 로그인 라우트
router.get("/kakao", passport.authenticate("kakao"));

// Kakao 로그인 콜백 라우트
router.get(
  "/kakao/callback",
  passport.authenticate("kakao", {
    successRedirect: "/",
    failureRedirect: "/",
  })
);

// 로그아웃 라우트
router.get("/logout", (req, res) => {
  req.logout((err) => {
    if (err) {
      return res
        .status(500)
        .json({ error: "로그아웃 중 오류가 발생했습니다." });
    }
    res.redirect("/");
  });
});

// 프로필 페이지 (보호된 라우트)
router.get("/profile", isAuthenticated, (req, res) => {
  res.send(`
    <h1>프로필 페이지</h1>
    <div>
      <h2>사용자 정보</h2>
      <p>이름: ${req.user.name}</p>
      <p>이메일: ${req.user.email}</p>
      <p>ID: ${req.user.id}</p>
      <p>로그인 제공자: ${req.user.provider}</p>
    </div>
    <a href="/">홈으로 돌아가기</a>
    <br>
    <a href="/auth/logout">로그아웃</a>
  `);
});

export default router;
