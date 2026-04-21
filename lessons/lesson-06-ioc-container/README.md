# 6강 — IoC(제어의 역전)와 작은 서비스 컨테이너

5강 **라우팅 완성본**을 바탕으로, 메뉴 저장·알림 같은 “부가 기능”을 **컴포넌트 밖에서 조립**해 주입하는 패턴을 코드로 구현합니다.

자세한 개념·파일 맵·자습 과제는 **`강의.md`** 를 참고하세요.

## 실행

```bash
cd lesson-06-ioc-container
npm install
npm run dev
```

## 핵심 폴더

| 경로 | 역할 |
|------|------|
| `src/ioc/ServiceContainer.js` | 교육용 IoC 컨테이너 (`register` / `resolve`) |
| `src/ioc/createAppContainer.js` | 앱 시작 시 서비스 등록(조립 루트) |
| `src/ioc/AppServicesContext.jsx` | React Context + `useAppServices()` |
| `src/services/createMenuRepository.js` | localStorage 기반 메뉴 저장 |
| `src/services/createNotifier.js` | 콘솔 알림(교체 가능) |
