import * as React from 'react'

import { cn } from '@/lib/utils'

/**
 * Card 계열은 "정적 레이아웃" 중심의 shadcn 조립 컴포넌트다.
 * - Radix Primitive 없이도 충분한 영역이라 Tailwind + cn()만으로 구현한다.
 * - 공통 규칙(둥근 모서리, 테두리, 여백)을 중앙화해 재사용한다.
 */
const Card = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    // 기본 카드 룩 + 호출부에서 전달한 className을 병합
    className={cn('rounded-xl border border-zinc-200 bg-white text-zinc-950 shadow-sm', className)}
    {...props}
  />
))
Card.displayName = 'Card'

const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
  // 제목/설명 블록이 주로 오는 상단 영역
  <div ref={ref} className={cn('flex flex-col space-y-1.5 p-5', className)} {...props} />
))
CardHeader.displayName = 'CardHeader'

const CardTitle = React.forwardRef(({ className, ...props }, ref) => (
  // 카드 제목의 타이포 기본값
  <h3 ref={ref} className={cn('text-base font-semibold leading-none tracking-tight', className)} {...props} />
))
CardTitle.displayName = 'CardTitle'

const CardDescription = React.forwardRef(({ className, ...props }, ref) => (
  // 부가 설명 텍스트
  <p ref={ref} className={cn('text-sm text-zinc-500', className)} {...props} />
))
CardDescription.displayName = 'CardDescription'

const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  // 카드 본문 영역(본문 텍스트, 버튼, 가격 등)
  <div ref={ref} className={cn('px-5 pb-5 pt-0', className)} {...props} />
))
CardContent.displayName = 'CardContent'

export { Card, CardContent, CardDescription, CardHeader, CardTitle }
