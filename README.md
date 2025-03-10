# OAuth(Google, Kakao)를 활용한 소셜 로그인 구현

## 프로젝트 소개

이 프로젝트는 OAuth 2.0 프로토콜을 활용하여 Google과 Kakao 소셜 로그인을 구현한 예제입니다. 현대 웹 서비스에서 필수적인 소셜 로그인 기능을 직접 구현해보며 OAuth의 동작 방식을 이해하고자 합니다.

### OAuth란?

OAuth는 사용자가 다른 웹사이트나 애플리케이션의 기능을 사용할 때, 비밀번호를 제공하지 않고도 권한을 부여할 수 있는 개방형 표준 인증 프로토콜입니다.

- 사용자는 안전하게 계정 정보를 공유할 수 있습니다
- 서비스 제공자는 보안 위험 없이 사용자 인증을 구현할 수 있습니다
- 별도의 회원가입 없이 기존 계정으로 서비스 이용이 가능합니다

### Google과 Kakao를 선택한 이유

1. **Google**

   - 전 세계적으로 가장 보편적인 소셜 로그인 서비스
   - 안정적인 개발자 문서와 지원
   - OAuth 2.0의 표준적인 구현 예시

2. **Kakao**
   - 국내에서 높은 사용률을 보이는 플랫폼
   - 간편한 개발자 환경 제공
   - 무료로 사용 가능한 다양한 API 제공

## 주요 기능

- Google/Kakao 계정으로 로그인
- 사용자 프로필 정보 조회
- 로그아웃
- 인증된 사용자만 접근 가능한 보호된 라우트

## 기술 스택

- Node.js
- Express.js
- Passport.js
- express-session

## 시작하기

### 필수 요구사항

- Node.js
- npm
- Google OAuth 클라이언트 ID와 시크릿
- Kakao OAuth 앱 키

### 설치 및 실행

1. 저장소 클론

```bash
git clone [repository-url]
cd oauth-login-toy
```

2. 의존성 설치

```bash
npm install
```

3. 환경 변수 설정
   `.env` 파일을 생성하고 다음 정보를 입력

```
PORT=3000
SESSION_SECRET=your_session_secret
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
KAKAO_CLIENT_ID=your_kakao_client_id
```

4. 서버 실행

```bash
npm run dev
```

## 프로젝트 구조

```
oauth-login-toy/
├── src/
│   ├── app.js              # 애플리케이션 진입점
│   ├── config/             # 설정 파일
│   │   └── passport.js     # Passport 전략 설정
│   ├── middlewares/        # 미들웨어
│   │   └── auth.middleware.js
│   └── routes/            # 라우트 핸들러
│       └── auth.js        # 인증 관련 라우트
├── .env                   # 환경 변수
└── package.json
```

## 블로그

[Holy-s OAuth](https://holy-s.tistory.com/entry/Nodejs%EC%97%90%EC%84%9C-OAuth-20%EC%9C%BC%EB%A1%9C-%EC%86%8C%EC%85%9C-%EB%A1%9C%EA%B7%B8%EC%9D%B8-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0)

## 라이선스

ISC
