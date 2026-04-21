/**
 * 테마(라이트 / 다크) — 클라이언트 전역 상태의 전형적인 예.
 *
 * Zustand의 `persist` 미들웨어로 **localStorage**에 저장해 새로고침 후에도 유지한다.
 * (10강의 “서버 상태”와 달리, **브라우저 안의 선호 설정**은 서버 없이도 충분한 경우가 많다.)
 */
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useThemeStore = create(
  persist(
    (set) => ({
      mode: 'light',

      toggleMode: () =>
        set((state) => ({
          mode: state.mode === 'light' ? 'dark' : 'light',
        })),
    }),
    {
      name: 'beanlog-theme-v1',
      // 직렬화 가능한 필드만 저장 (함수는 제외)
      partialize: (state) => ({ mode: state.mode }),
    },
  ),
)
