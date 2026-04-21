# 스타일 두 갈래 — 보조 예시 (참고용)

## 메인 실습: `src/App.jsx`에서 네 방식 비교

같은 **`Header`·`MenuCard`** 컴포넌트에 `variant`만 바꿔 **일반 CSS / CSS Modules / Tailwind(웜톤) / shadcn/ui Card 컴포넌트** 를 **한 화면에 나란히** 보여 주는 것이 1강 기본 동작이다. `npm run dev` 로 확인한다.

| 방식 | 코드 위치 |
|------|-----------|
| 일반 CSS | `src/index.css` 의 `.muted`, `.menu-grid`, `.card` 등 + `variant="default"` |
| CSS Modules | `src/components/Header.module.css`, `MenuCard.module.css`, `CompareLayout.module.css` |
| Tailwind (C열) | `Header.jsx` / `MenuCard.jsx` 의 `variant === 'tailwind'` 분기 + `vite.config.js` 의 `@tailwindcss/vite` |
| shadcn (D열) | `src/components/ui/card.jsx` + `src/lib/utils.js`를 import해 `variant === 'shadcn'` 분기에서 사용 |

**`variant`가 무엇인지** — React 내장 prop이 아니라, 이 레슨에서만 쓰는 문자열 스위치다. 설명은 **`강의.md`** 의 「코드로 보는 스타일 두 갈래」 아래 **「`variant` prop」** 절을 본다.

---

## 이 `examples/` 폴더 (추가 스니펫)

아래는 강의 문서 **「코드로 보는 스타일 두 갈래」** 를 읽을 때 **에디터에서 구조만** 보기 좋게 둔 **짧은 스니펫**이다. 메인 비교 UI와는 별개다.

| 내용 | 위치 |
|------|------|
| CSS Modules 버튼 한 조각 | `css-modules/Button.example.jsx` |
| Tailwind 카드 한 조각 | `tailwind-concept/Card.example.jsx` |

Tailwind는 프로젝트에 `tailwindcss` + `@tailwindcss/vite` 가 설치되어 있어야 유틸 클래스가 스타일로 적용된다. 설치 절차는 **`강의.md`** 의 Tailwind 설치 절을 따른다.
