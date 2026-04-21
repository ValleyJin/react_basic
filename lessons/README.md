# BeanLog — React·풀스택 입문 시리즈 (~15강)

같은 주제(가상의 카페)로 **기능을 조금씩 붙여** 갑니다. **1~5강**을 마치면 **여러 페이지로 구성된 작은 웹사이트**가 되고, **6강 이후**에는 IoC·서버·DB·관리자 UI·(선택) DB 심화·캡스톤까지 확장할 수 있습니다.

## 강의 폴더

| 폴더 | 내용 |
|------|------|
| `lesson-01-static-jsx` | Vite로 프로젝트 생성 → JSX, 컴포넌트, props (정적 화면). **`강의.md`에 스캐폴딩 절차 포함** |
| `lesson-02-state-events` | `useState`, 이벤트, 조건부 렌더링 |
| `lesson-03-lifting-state` | 리스트(`map`), `key`, state 끌어올리기 |
| `lesson-04-effect-form` | `useEffect`, `localStorage`, 제어 컴포넌트 폼 |
| `lesson-05-router-site` | `react-router-dom`으로 홈/메뉴/문의 페이지 |
| `lesson-06-ioc-container` | 5강 이어서: **IoC(제어의 역전)** · 작은 **서비스 컨테이너** · Context로 주입 |

각 공식 강의 폴더에는 **`강의.md`**(자습용 설명)와, 주석이 달린 **최소 예제 코드**가 들어 있습니다.  
**10강·11강**의 상세 안내도 각각 **`lesson-10-react-admin-ui/강의.md`**, **`lesson-11-zustand-client-state/강의.md`** 에 있으며, 6강 문서의 10·11 연결 문단은 **요약**일 뿐 본문을 대체하지 않습니다.

**이름에 `-copy`가 붙은 폴더**(예: `lesson-01-copy`)는 **수강생이 직접 따라 해 보기 위한 작업 사본**일 뿐이며, **아래 표에 없는 한 시리즈 공식 구성에서 제외**해도 된다.

### Spring Boot · PostgreSQL · 관리자 기능

6강 이후 **서버·DB·관리자 로그인·메뉴 CRUD**를 한 강에 넣지 않고, **lesson-07 ~ lesson-10** 식으로 나누는 기획·강의 목차·`강의.md` 작성 템플릿은 **`BACKEND_SERIES_PLAN.md`** 를 참고합니다.

**JDK·Maven 설치 확인, 버전을 17에 맞추는 방법**(Mac Homebrew로 Maven 설치 시 **`mvn -v`에 JDK 25가 보이는 경우** 등)은 **`lesson-07-spring-db-user/강의.md`** 의 **「개발 환경 (JDK·Maven)」** 절에 정리해 두었습니다(8~13·15강 백엔드 공통).

| 폴더 | 내용 |
|------|------|
| `lesson-07-spring-db-user` | Spring Boot + PostgreSQL + `User` 엔티티·BCrypt·시드·검증용 REST (**Maven + JDK 17**, React 없음) |
| `lesson-08-spring-security-jwt` | Spring Security + JWT 로그인·관리자 전용 API(Postman 검증, Postgres 포트 5433) |
| `lesson-09-spring-menu-crud` | `Menu` CRUD·권한 분리·CORS(프론트 `5173` 허용, Postgres 포트 5434) |
| `lesson-10-react-admin-ui` | Vite React — **TanStack Query** + 중앙 HTTP·JWT(`sessionStorage`)·보호 라우트·메뉴 UI (**9강 서버**와 연동). **상세 강의는 폴더 안 `강의.md`** (6강 8절은 연결 요약) |

### 선택 확장 (프론트만 — 서버 없음)

| 폴더 | 내용 |
|------|------|
| `lesson-11-zustand-client-state` | **Zustand**로 테마·장바구니 **클라이언트 전역 상태** · `persist`/`partialize` — **10강(서버 상태)** 와 대비. **상세 강의는 폴더 안 `강의.md`** |

### PostgreSQL 심화 트랙 (선택 · 12~14강)

앱 개발(7~11)과 별도로, **DB를 직접 다루는 연습**을 세 강으로 나눈다. 각 폴더에 **`강의.md`** 가 있다.

| 폴더 | 스타일 | 내용 |
|------|--------|------|
| `lesson-12-postgresql-sql-deep` | **A** | `psql`·SQL·JOIN·인덱스·`EXPLAIN`·트랜잭션 (Java 없음, 포트 **5435**) |
| `lesson-13-spring-jdbc-native` | **B** | Spring **`JdbcTemplate`** 원시 SQL·`schema.sql` (포트 **5436**) |
| `lesson-14-postgresql-ops` | **C** | `pg_dump` 스크립트·Docker 볼륨·**HikariCP** 예시 YAML (포트 **5437**) |

### 캡스톤 (선택 · 시리즈 마무리)

| 폴더 | 내용 |
|------|------|
| `lesson-15-fullstack-capstone` | PostgreSQL + Spring Boot(JWT·메뉴 API) + Vite React(**Zustand**) — **한 줄로 이어지는** 최종 정리. Postgres **5438**, 프론트 **5174**. **`강의.md`** 가 본문이다. |

---

## 시리즈 구성 요약 (유기적 흐름)

- **1~6강:** 브라우저 중심 — 컴포넌트·상태·라우터·(선택) IoC 로 “화면과 구조”를 익힌다.
- **7~10강:** **DB·API가 진실**이 되고, 10강에서 **TanStack Query** 로 **서버 상태**를 다루는 관리자 UI까지 연결한다.
- **11강(선택):** 서버 없이 **Zustand** 만으로 **클라이언트 전역 상태**를 연습하고, 10강과 **역할을 비교**한다.
- **12~14강(선택):** 앱 코드와 폴더를 나누어 **SQL·JdbcTemplate·운영(백업·풀)** 을 깊게 본다.
- **15강(선택):** 같은 BeanLog 맥락으로 **Docker DB → Spring → React** 를 **한 레포**에서 닫는 **캡스톤**이다.

**의도적으로 다른 두 강 — 10강과 15강**

| 구분 | 10강 | 15강 |
|------|------|------|
| 프론트 포트 | 보통 **5173** | **5174** (10강과 동시 실행 가능) |
| 백엔드 | **9강** 폴더에서 띄운 API에 연동 | **`lesson-15-fullstack-capstone/backend/`** 자체 |
| 데이터·상태 | TanStack Query + `sessionStorage` 등 | Zustand persist + `fetch` + `useState` |

둘은 **서로를 이어 붙여 한 번에 돌리는 강**이 아니라, **각각 완결**된다. **같은 도메인을 “풀스택 한 레포”로만 정리해 보고 싶다면 15강**을 보면 된다.

---

## 문서·실행 유형을 헷갈리지 않기

- **JDK·Maven·`target/` 전후** 등 백엔드 공통 설명은 **`lesson-07-spring-db-user/강의.md`** 「개발 환경 (JDK·Maven)」이 기준이며, **8~13·15강** 백엔드에 동일하게 적용된다.
- **모든 강 폴더가 Vite + React는 아니다.** 7~9·13은 **Spring(Maven)** 만, 12·14는 **SQL/스크립트·Docker** 중심일 수 있다. 아래 **실행 방법**과 **포트 표**를 함께 본다.

---

## 포트·실행 유형 한눈에 (보강)

| 구간 | 대표 폴더 | Postgres(호스트) | 프론트(dev) | Spring API(기본) |
|------|-----------|------------------|-------------|------------------|
| 7강 | `lesson-07-spring-db-user` | **5432** (호스트; 다른 Postgres 와 겹치면 강의·`application.yml` 조정) | — | 8080 |
| 8강 | `lesson-08-spring-security-jwt` | **5433** | — | 8080 |
| 9~10강 | 9 백엔드 + 10 프론트 | **5434** | **5173** | 8080 |
| 12강 | `lesson-12-postgresql-sql-deep` | **5435** | — | — |
| 13강 | `lesson-13-spring-jdbc-native` | **5436** | — | 8080 |
| 14강 | `lesson-14-postgresql-ops` | **5437** | — | — |
| 15강 | `lesson-15-fullstack-capstone` | **5438** | **5174** | 8080 |

연결 거부·CORS 오류가 나면 **어느 포트의 DB·프론트·API를 켰는지**부터 맞춘다.

---

## 교차 참조 (보강)

- **10강을 마친 뒤** “같은 메뉴 도메인을 **한 레포에서** DB까지 한 줄로” 보고 싶다면 → **`lesson-15-fullstack-capstone/강의.md`** (스택은 10강과 다르다는 점은 위 표 참고).
- **11강**에서 배운 Zustand가 **서버와 만나는** 예시를 보고 싶다면 → **15강** 프론트(`Zustand`로 토큰·테마, `fetch` 로 API).

---

## 공통 실행 방법

### Vite + React만 있는 강 (1~6, 10, 11, 15의 `frontend/`)

```bash
cd lesson-01-static-jsx   # 또는 lesson-10-react-admin-ui, lesson-11-…, lesson-15-…/frontend
npm install
npm run dev
```

브라우저 주소는 터미널 안내를 따른다(보통 `http://localhost:5173`, 15강 프론트는 **5174**).

### Spring Boot(Maven)만 있는 강 (7~9, 13 등)

```bash
cd lesson-07-spring-db-user   # 해당 백엔드 폴더
docker compose up -d           # 강의에 DB가 있으면
mvn spring-boot:run
```

상세·DB 포트는 **각 폴더의 `강의.md`** 를 따른다.

### 15강 (DB + 백엔드 + 프론트 한 번에)

루트 `docker-compose.yml` → `backend/` 에서 Maven → `frontend/` 에서 `npm run dev` 순서는 **`lesson-15-fullstack-capstone/강의.md`** 에 정리되어 있다.

---

## 권장 학습 순서

1 → 2 → 3 → 4 → 5 순으로 진행하는 것을 권장합니다.  
**6강**은 5강(라우팅 완성)을 전제로 한 **심화·확장**이며, 원하면 5강 직후에 이어서 보면 됩니다.  
**11강**은 필수 순서 밖의 **선택 확장**으로, **5강 이후**·**10강 전후** 어느 때든 볼 수 있습니다(서버 없이 동작).  
**12~14강**은 **7강 이상**을 본 뒤, PostgreSQL을 깊게 다루고 싶을 때 순서대로(12→13→14) 보면 좋습니다.  
**15강**은 7~11·(선택)12~14를 거친 뒤, **풀스택으로 한 번에 정리**하고 싶을 때 보면 된다.  
이전 강의에서 익힌 컴포넌트 이름(`Header`, `MenuCard` 등)이 이후에도 이어지도록 구성했습니다.

## 선행 지식

HTML/CSS 기본, JavaScript 기본(변수, 함수, 배열, 조건/반복), ES6의 화살표 함수·구조 분해·`map` 정도면 충분합니다.
