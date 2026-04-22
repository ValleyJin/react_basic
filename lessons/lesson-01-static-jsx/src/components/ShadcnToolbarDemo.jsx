import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'

/**
 * D열 전용 "SaaS 툴바" 데모.
 *
 * 왜 넣었나?
 * - shadcn의 시그니처는 단일 Card보다 "여러 조립 컴포넌트의 일관성"에서 더 강하게 보인다.
 * - Button/Input/Badge/Dropdown을 한 영역에 배치하면, 디자인 시스템 톤을 빠르게 체감할 수 있다.
 */
export default function ShadcnToolbarDemo() {
  return (
    <div className="mt-3 rounded-xl border border-zinc-200/80 bg-white/90 p-3 shadow-[0_14px_30px_-26px_rgba(37,99,235,0.75)]">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <Badge variant="info">Live</Badge>
          <Badge variant="secondary">v1.0</Badge>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm">
              보기 옵션
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>카드 밀도: Compact</DropdownMenuItem>
            <DropdownMenuItem>가격 표시: 원화</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>테마 리셋</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="mt-3 flex items-center gap-2">
        <Input placeholder="메뉴 검색 (예: 플랫화이트)" />
        <Button>검색</Button>
      </div>
    </div>
  )
}
