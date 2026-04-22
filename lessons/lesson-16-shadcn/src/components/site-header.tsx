import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"

export function SiteHeader() {
  return (
    // group-has-data[...] 유틸은 사이드바 상태(data attribute)에 반응해 헤더 높이를 조정한다.
    <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        {/* SidebarTrigger는 모바일/좁은 화면에서 사이드바 토글 버튼 역할 */}
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mx-2 h-4 data-vertical:self-auto"
        />
        {/* 페이지 컨텍스트 제목 */}
        <h1 className="text-base font-medium">Documents</h1>
      </div>
    </header>
  )
}
