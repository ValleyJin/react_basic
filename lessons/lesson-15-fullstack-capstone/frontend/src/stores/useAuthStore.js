import { create } from 'zustand'
import { persist } from 'zustand/middleware'

/**
 * 인증 상태 — 10강은 sessionStorage 를 직접 다뤘고, 15강은 Zustand persist 로 같은 목적을 달성한다.
 *
 * - accessToken: 로그인 후 받은 JWT. 관리자 전용 API 에 Authorization 헤더로 실어 보낸다.
 * - persist: 브라우저를 새로고침해도 토큰이 남는다(세션 탭을 닫으면 브라우저 설정에 따라 다름 — storage: sessionStorage 로 바꿀 수 있음).
 *
 * 11강 장바구니와 달리 여기서는 "서버와 약속한 자격 증명"을 담는다는 점이 다르다.
 */
export const useAuthStore = create(
  persist(
    (set) => ({
      accessToken: null,
      /** 로그인 직후 화면에 이름을 보여 주기 위한 최소 정보 (JWT 디코딩 없이) */
      username: null,

      loginSuccess: (accessToken, username) =>
        set({
          accessToken,
          username,
        }),

      logout: () =>
        set({
          accessToken: null,
          username: null,
        }),
    }),
    {
      name: 'beanlog-lesson15-auth',
      partialize: (state) => ({
        accessToken: state.accessToken,
        username: state.username,
      }),
    },
  ),
)
