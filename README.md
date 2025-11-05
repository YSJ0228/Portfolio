# 포트폴리오 웹사이트

React, TypeScript, Next.js, Tailwind CSS를 활용한 프론트엔드 개발자 포트폴리오

## 주요 기능

- ✨ **모던한 UI/UX**: 깔끔하고 세련된 디자인
- 🎭 **부드러운 애니메이션**: Framer Motion을 활용한 스크롤 애니메이션
- 📱 **반응형 디자인**: 모든 디바이스에 최적화
- ⚡ **빠른 성능**: Next.js의 최적화된 렌더링
- 🎨 **그라디언트 디자인**: 눈에 띄는 색상 조합

## 기술 스택

- **React 19** - UI 라이브러리
- **TypeScript** - 타입 안정성
- **Next.js 16** - React 프레임워크 (App Router)
- **Tailwind CSS 4** - 유틸리티 CSS 프레임워크
- **Framer Motion** - 애니메이션 라이브러리

## 페이지 구성

1. **홈 (/)** - 랜딩 페이지, 전체적인 내용 요약 및 섹션별 프리뷰
2. **소개 (/about)** - 자기소개, 기술 스택, 경험, 개발 철학
3. **프로젝트 (/projects)** - Featured 프로젝트 및 Other 프로젝트
4. **연락처 (/contact)** - 연락 폼 및 연락처 정보

## 시작하기

### 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000) 열기

### 빌드

```bash
npm run build
```

### 프로덕션 실행

```bash
npm start
```

## 커스터마이징

### 개인 정보 수정

1. **소개 페이지**: `app/about/page.tsx`에서 경험, 기술 수준 수정
2. **프로젝트 페이지**: `app/projects/page.tsx`에서 프로젝트 정보 수정
3. **연락처 페이지**: `app/contact/page.tsx`에서 연락처 정보 수정
4. **메타데이터**: `app/layout.tsx`에서 사이트 제목, 설명 수정

### 색상 변경

Tailwind CSS 클래스를 사용하여 색상 변경 가능:
- 현재 그라디언트: `from-blue-600 to-purple-600`
- 다른 색상: `from-green-500 to-teal-600`, `from-red-500 to-pink-600` 등

## 배포

Vercel에 배포하는 것을 권장합니다:

1. [Vercel](https://vercel.com)에 가입
2. GitHub 저장소 연결
3. 자동 배포 완료

또는 Netlify, AWS 등 다른 플랫폼도 사용 가능합니다.

## 라이선스

MIT
