import { cn } from '@/lib/utils'

/**
 * Badge는 상태/카테고리 라벨을 짧게 보여 주는 컴포넌트.
 */
export function Badge({ className, variant = 'default', ...props }) {
  const variants = {
    default: 'bg-zinc-900 text-zinc-50',
    secondary: 'bg-zinc-100 text-zinc-700',
    info: 'bg-blue-100 text-blue-700',
  }

  return (
    <div
      className={cn(
        'inline-flex items-center rounded-md px-2 py-0.5 text-xs font-semibold transition-colors',
        variants[variant],
        className
      )}
      {...props}
    />
  )
}
