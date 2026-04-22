import * as React from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'

import { cn } from '@/lib/utils'

/**
 * shadcn/ui의 Dialog는 "Radix Primitive + Tailwind className" 결합 구조를 따른다.
 * 아래 export들은 화면에서 직접 쓰는 조립 블록이고,
 * 기능(열기/닫기, 포커스 이동, ESC 닫기)은 Radix Primitive가 담당한다.
 */

/**
 * Dialog 루트
 * - 내부 open 상태 관리(제어/비제어)
 * - 접근성 속성(aria) 기반 구조 연결
 */
const Dialog = DialogPrimitive.Root

/**
 * DialogTrigger
 * - 버튼 클릭 시 Dialog를 여는 트리거
 * - 보통 asChild를 함께 써서 "원래 버튼 태그"를 그대로 트리거로 승격한다.
 */
const DialogTrigger = DialogPrimitive.Trigger

/**
 * DialogPortal
 * - 모달 레이어를 body 하위로 렌더링해 z-index/overflow 문제를 줄인다.
 */
const DialogPortal = DialogPrimitive.Portal

/**
 * DialogClose
 * - 닫기 버튼 역할을 하는 Primitive
 */
const DialogClose = DialogPrimitive.Close

/**
 * DialogOverlay
 * - 배경 어둡게 처리(backdrop)
 * - 디자인(Tailwind)은 className으로 주고, "모달 바깥 레이어" 역할은 Radix가 유지한다.
 */
const DialogOverlay = React.forwardRef(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      'fixed inset-0 z-50 bg-slate-950/35 backdrop-blur-[2px] data-[state=open]:animate-in data-[state=closed]:animate-out',
      className
    )}
    {...props}
  />
))
DialogOverlay.displayName = 'DialogOverlay'

/**
 * DialogContent
 * - 모달 본문 컨테이너
 * - 접근성 면에서 focus lock, ESC 닫기, 배경 스크롤 제어 등 핵심 기능은 Radix가 담당
 * - 우리는 Tailwind로 위치/크기/색만 입힌다.
 */
const DialogContent = React.forwardRef(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        'fixed left-1/2 top-1/2 z-50 w-[min(92vw,480px)] -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-slate-200/80 bg-white/95 p-5 shadow-[0_28px_60px_-30px_rgba(15,23,42,0.65)] backdrop-blur data-[state=open]:animate-in data-[state=open]:zoom-in-95 data-[state=closed]:animate-out',
        className
      )}
      {...props}
    >
      {children}
    </DialogPrimitive.Content>
  </DialogPortal>
))
DialogContent.displayName = 'DialogContent'

/**
 * DialogHeader / DialogFooter
 * - 모달 내부 레이아웃 편의를 위한 "디자인 조립 블록"
 */
function DialogHeader({ className, ...props }) {
  return <div className={cn('flex flex-col space-y-1.5', className)} {...props} />
}

function DialogFooter({ className, ...props }) {
  return <div className={cn('mt-4 flex items-center justify-end gap-2', className)} {...props} />
}

/**
 * DialogTitle / DialogDescription
 * - Radix Primitive가 접근성 연결(aria-labelledby, aria-describedby)을 돕는다.
 */
const DialogTitle = React.forwardRef(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn('text-base font-semibold leading-none tracking-tight text-zinc-950', className)}
    {...props}
  />
))
DialogTitle.displayName = 'DialogTitle'

const DialogDescription = React.forwardRef(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn('text-sm leading-relaxed text-zinc-600', className)}
    {...props}
  />
))
DialogDescription.displayName = 'DialogDescription'

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
}
