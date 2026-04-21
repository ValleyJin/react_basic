import { create } from 'zustand'
import { persist } from 'zustand/middleware'

/**
 * 순수 UI 상태 — 서버와 무관하게 테마만 토글한다 (11강 useThemeStore 와 같은 패턴).
 * document.documentElement 에 data-theme 을 심어 CSS 가 따라가게 한다.
 */
export const useUiStore = create(
  persist(
    (set, get) => ({
      theme: 'light',

      toggleTheme: () =>
        set((s) => {
          const next = s.theme === 'light' ? 'dark' : 'light'
          if (typeof document !== 'undefined') {
            document.documentElement.dataset.theme = next
          }
          return { theme: next }
        }),

      /** App 마운트 시 한 번 호출 — 새로고침 직후에도 테마가 맞게 */
      applyThemeToDocument: () => {
        const t = get().theme
        if (typeof document !== 'undefined') {
          document.documentElement.dataset.theme = t
        }
      },
    }),
    {
      name: 'beanlog-lesson15-ui',
      onRehydrateStorage: () => (state) => {
        if (typeof document !== 'undefined' && state?.theme) {
          document.documentElement.dataset.theme = state.theme
        }
      },
    },
  ),
)
