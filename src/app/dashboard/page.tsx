
import { HeroSection } from "@/components/dashboard/heroSection"
import { MealSuggestions } from "@/components/dashboard/meal-suggestions"
import {
  SidebarInset,

} from "@/components/ui/sidebar"
import { StatsCards } from "@/components/dashboard/statsCards"
import Insights from "@/components/dashboard/insights"
import { WidgetGrid } from "@/components/dashboard/widgetgrid"

export default function Page() {
  return (
    <SidebarInset>
      <div className="flex flex-1 flex-col gap-6 px-4 py-2">
        <HeroSection />
        <MealSuggestions />
        <StatsCards />
        <WidgetGrid />
        <Insights />
      </div>
    </SidebarInset>

  )
}
