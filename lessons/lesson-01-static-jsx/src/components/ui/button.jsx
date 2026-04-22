import * as React from 'react'

import { cn } from '@/lib/utils'

/**
 * shadcn 스타일 Button의 단순 학습 버전.
 *
 * 학습 포인트:
 * - variant/size로 시각 규칙을 토큰처럼 분리
 * - className을 마지막에 병합해 호출부에서 덮어쓰기 가능
 */
const buttonVariants = {
  variant: {
    default:
      'bg-zinc-900 text-zinc-50 shadow-sm hover:bg-zinc-800 focus-visible:ring-zinc-400',
    secondary:
      'border border-zinc-200 bg-white text-zinc-900 hover:bg-zinc-100 focus-visible:ring-zinc-300',
    outline:
      'border border-zinc-300 bg-transparent text-zinc-800 hover:bg-zinc-100 focus-visible:ring-zinc-300',
  },
  size: {
    default: 'h-9 px-3 py-2',
    sm: 'h-8 rounded-md px-2.5',
  },
}

export const Button = React.forwardRef(
  ({ className, variant = 'default', size = 'default', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-lg text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
          buttonVariants.variant[variant],
          buttonVariants.size[size],
          className
        )}
        {...props}
      />
    )
  }
)

Button.displayName = 'Button'
