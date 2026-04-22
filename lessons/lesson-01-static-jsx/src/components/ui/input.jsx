import * as React from 'react'

import { cn } from '@/lib/utils'

/**
 * Input 기본 조립 컴포넌트.
 * - 크기/테두리/포커스 링을 공통화해 폼 UI의 일관성을 유지한다.
 */
export const Input = React.forwardRef(({ className, type = 'text', ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        'flex h-9 w-full rounded-lg border border-zinc-200 bg-white px-3 py-1 text-sm text-zinc-900 shadow-sm transition placeholder:text-zinc-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-300 disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      ref={ref}
      {...props}
    />
  )
})

Input.displayName = 'Input'
