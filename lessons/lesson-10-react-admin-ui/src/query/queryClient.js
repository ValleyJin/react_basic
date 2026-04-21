import { QueryClient } from '@tanstack/react-query'

/**
 * 앱 전역에서 하나만 쓰는 QueryClient.
 * 서버에서 가져온 목록의 캐시·재요청 정책은 여기 defaultOptions로 조절할 수 있다.
 */
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 30_000,
    },
  },
})
