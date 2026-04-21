/**
 * React에서 “밖에서 조립한 서비스 객체”를 트리 아래로 전달하기 위한 Context.
 *
 * - props로 menuRepository를 계속 넘기면 중간 레이아웃이 props를 알 필요가 생긴다(프롭 드릴링).
 * - Context는 “앱 전역에서 공유해도 되는 의존성”을 내려보낼 때 자주 쓴다.
 *
 * 주의: 어떤 값이든 Context에 넣을 수 있지만, “무엇을 Context에 올릴지”는 설계 문제다.
 *       이 강의에서는 **앱 수명과 같이 긴 서비스**만 올렸다.
 */
import { createContext, useContext } from 'react'

/**
 * createAppServices()가 만든 { menuRepository, notifier } 를 담는다.
 * (정확한 타입은 TypeScript가 아닌 이상 여기서는 생략하고, 강의.md에서 설명한다.)
 */
export const AppServicesContext = createContext(null)

export function AppServicesProvider({ value, children }) {
  return <AppServicesContext.Provider value={value}>{children}</AppServicesContext.Provider>
}

/**
 * 등록된 서비스 묶음(menuRepository, notifier)을 꺼낸다.
 * Provider 밖에서 호출하면 에러를 내서 실수를 빨리 발견하게 한다.
 */
export function useAppServices() {
  const ctx = useContext(AppServicesContext)
  if (!ctx) {
    throw new Error('useAppServices()는 <AppServicesProvider> 안에서만 사용할 수 있습니다.')
  }
  return ctx
}
