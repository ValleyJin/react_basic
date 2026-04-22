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
    <div className="mt-4 rounded-xl border border-blue-200/70 bg-linear-to-br from-white via-slate-50 to-blue-50 p-3 shadow-[0_14px_30px_-26px_rgba(37,99,235,0.9)]">
      <p className="m-0 text-xs font-semibold uppercase tracking-[0.14em] text-blue-600">Radix Interaction Demo</p>
      <p className="m-0 mt-1 text-sm text-slate-600">
        아래 버튼을 누르면 Radix Dialog가 열립니다. (ESC, 바깥 클릭, 닫기 버튼으로 종료)
      </p>

      <Dialog>
        {/* asChild: 기존 button 태그를 Trigger 역할로 확장 */}
        <DialogTrigger asChild>
          <button
            type="button"
            className="mt-3 inline-flex h-9 items-center justify-center rounded-lg border border-blue-300 bg-blue-600 px-3 text-sm font-medium text-white shadow-sm transition hover:bg-blue-500"
          >
            원두 로스팅 노트 열기
          </button>
        </DialogTrigger>

        {/*
          DialogContent가 열리면 내부적으로 다음이 동시에 동작한다.
          - 포커스가 모달 내부로 이동
          - ESC/외부 클릭으로 닫기 가능
          - aria 속성 기반으로 접근성 관계 연결
          이 동작은 Radix Primitive가 담당한다.
        */}
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
                className="inline-flex h-9 items-center justify-center rounded-lg border border-slate-300 bg-white px-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
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
