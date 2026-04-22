import { AppSidebar } from "@/components/app-sidebar"
import { ChartAreaInteractive } from "@/components/chart-area-interactive"
import { DataTable } from "@/components/data-table"
import { SectionCards } from "@/components/section-cards"
import { SiteHeader } from "@/components/site-header"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"

import data from "./data.json"

export default function Page() {
  return (
    // SidebarProvider는 사이드바의 열림/닫힘 상태와 CSS 변수를 하위로 전달한다.
    // 여기서 준 width/height 변수는 Sidebar, Header 컴포넌트가 공통으로 참조한다.
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      {/* variant="inset": 콘텐츠가 사이드바 바깥으로 분리되어 보이는 레이아웃 프리셋 */}
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              {/* 상단 KPI 카드 영역 */}
              <SectionCards />
              <div className="px-4 lg:px-6">
                {/* 기간 선택이 가능한 인터랙티브 차트 */}
                <ChartAreaInteractive />
              </div>
              {/* 드래그 정렬/필터/페이지네이션이 들어간 데이터 테이블 */}
              <DataTable data={data} />
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
