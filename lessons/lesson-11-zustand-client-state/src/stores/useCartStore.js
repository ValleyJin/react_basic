/**
 * 장바구니 — “같은 메뉴를 몇 잔 담았는지”만 전역으로 관리한다.
 *
 * 서버에 주문을 보내지 않는 교육용 데모이므로 상태는 클라이언트에만 존재한다.
 * persist 로 새로고침 후에도 카트가 남도록 해 “전역 상태가 저장된다”는 체감을 준다.
 *
 * Redux와 비교하면 보일러플레이트 없이 create 한 번으로 스토어가 만들어진다.
 */
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useCartStore = create(
  persist(
    (set, get) => ({
      lines: [],

      addLine: (product) =>
        set((state) => {
          const idx = state.lines.findIndex((l) => l.id === product.id)
          if (idx >= 0) {
            const next = [...state.lines]
            next[idx] = { ...next[idx], quantity: next[idx].quantity + 1 }
            return { lines: next }
          }
          return {
            lines: [...state.lines, { ...product, quantity: 1 }],
          }
        }),

      decrementLine: (id) =>
        set((state) => {
          const next = state.lines
            .map((l) =>
              l.id === id ? { ...l, quantity: l.quantity - 1 } : l,
            )
            .filter((l) => l.quantity > 0)
          return { lines: next }
        }),

      removeLine: (id) =>
        set((state) => ({
          lines: state.lines.filter((l) => l.id !== id),
        })),

      clear: () => set({ lines: [] }),

      totalItems: () => get().lines.reduce((sum, l) => sum + l.quantity, 0),
    }),
    {
      name: 'beanlog-cart-v1',
      partialize: (state) => ({ lines: state.lines }),
    },
  ),
)
