# 10강 — React 관리자 UI (로그인 · 보호 라우트 · 메뉴 CRUD)

**상세 강의(이론·단계별 실습·API 대응·트러블슈팅):** 이 폴더 루트의 **`강의.md`** 를 연다. (6강 문서에는 연결용 요약만 있다.)

9강 Spring API(`http://localhost:8080` 가정)를 호출하는 **Vite + React** 클라이언트이다.

- **중앙 HTTP** (`src/api/httpClient.js`): 베이스 URL·JSON·`Authorization: Bearer`
- **TanStack Query**: 메뉴 목록은 `useQuery`, 로그인·추가·삭제는 `useMutation` + 캐시 무효화
- JWT는 **`sessionStorage`** (`httpClient` 경유)

6강에서 다룬 **조립 루트** 개념과의 연결은 **6강 `강의.md` 8절** 과 본 폴더 **`강의.md`** 를 함께 본다(8절은 요약, 본문은 **`강의.md`**).

## 선행

- `lesson-09-spring-menu-crud`를 띄울 수 있어야 한다(같은 PC에서 포트 8080).

## 설정

- 개발 기본값은 **`.env.development`**의 `VITE_API_BASE=http://localhost:8080` 이다.
- 다른 주소를 쓰려면 `.env.example`을 참고해 `.env` 또는 `.env.local`을 만든다.

## 실행

터미널 **두 개**가 편하다(백엔드 하나, 프론트 하나).

```bash
# 터미널 A — 9강 폴더에서
cd ../lesson-09-spring-menu-crud
docker compose up -d
mvn spring-boot:run
```

```bash
# 터미널 B — 이 폴더에서
npm install
npm run dev
```

브라우저에서 `http://localhost:5173` — 홈은 공개 메뉴 조회, **관리자 로그인** 후 `/admin/menus`에서 추가·삭제를 시험한다.

## 검증

1. 로그인 없이 `/`에서 메뉴 목록이 보인다.
2. `/login`에서 9강 시드 계정(기본 `admin` / `admin1234`)으로 로그인 → `/admin/menus`로 이동.
3. 메뉴 추가·삭제 후 `/`를 새로고침해 반영 여부 확인.
4. 로그아웃 후 `/admin/menus` 직접 입력 시 로그인 화면으로 돌아가는지 확인.

자세한 설명은 **`강의.md`** 참고.
