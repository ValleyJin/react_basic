import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

/**
 * D열(shadcn)에서만 보이는 Radix + Tailwind 결합 데모.
 *
 * 학습 포인트:
 * 1) 기능: Dialog의 열기/닫기/포커스/ESC는 Radix Primitive가 담당한다.
 * 2) 디자인: 버튼/패널의 시각 요소는 Tailwind className으로 입힌다.
 * 3) 결합: "기능 Primitive + 스타일 className"이 shadcn 패턴의 핵심이다.
 */
export default function ShadcnDialogDemo() {
  return (
    <div className="mt-4 rounded-lg border border-dashed border-zinc-300 bg-zinc-50/70 p-3">
      <p className="m-0 text-xs font-medium uppercase tracking-wide text-zinc-500">Radix 기능 데모</p>
      <p className="m-0 mt-1 text-sm text-zinc-600">
        아래 버튼을 누르면 Radix Dialog가 열립니다. (ESC, 바깥 클릭, 닫기 버튼으로 종료)
      </p>

      <Dialog>
        {/* asChild: 기존 button 태그를 Trigger 역할로 확장 */}
        <DialogTrigger asChild>
          <button
            type="button"
            className="mt-3 inline-flex h-9 items-center justify-center rounded-md border border-zinc-300 bg-white px-3 text-sm font-medium text-zinc-900 shadow-sm transition hover:bg-zinc-100"
          >
            원두 로스팅 노트 열기
          </button>
        </DialogTrigger>

        <DialogContent>
          <DialogHeader>
            <DialogTitle>오늘의 로스팅 메모</DialogTitle>
            <DialogDescription>
              에티오피아 예가체프: 재스민 향, 베르가못, 살구의 산뜻한 산미.
            </DialogDescription>
          </DialogHeader>

          <p className="m-0 mt-3 text-sm leading-relaxed text-zinc-700">
            이 모달의 열림/닫힘 동작은 Radix가 제공하고, 색/여백/타이포는 Tailwind 유틸 클래스가 담당합니다.
          </p>

          <DialogFooter>
            <DialogClose asChild>
              <button
                type="button"
                className="inline-flex h-9 items-center justify-center rounded-md border border-zinc-300 bg-white px-3 text-sm font-medium text-zinc-900 transition hover:bg-zinc-100"
              >
                닫기
              </button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
