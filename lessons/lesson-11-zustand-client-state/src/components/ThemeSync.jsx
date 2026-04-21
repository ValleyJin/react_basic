import { useEffect } from 'react'
import { useThemeStore } from '../stores/useThemeStore.js'

/**
 * HTML 루트에 data-theme 을 맞춰 CSS 변수가 테마에 따라 바뀌게 한다.
 */
export default function ThemeSync() {
  const mode = useThemeStore((s) => s.mode)

  useEffect(() => {
    document.documentElement.dataset.theme = mode
  }, [mode])

  return null
}
