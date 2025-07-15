"use client"

import { ChefHat } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar"
import { MenuItems } from "./menuItems"

export function AppSidebar() {
  const { open } = useSidebar()

  return (
    <Sidebar collapsible="icon" className="transition-all duration-200">
      <SidebarHeader className="flex items-start py-4">
        <div className={`flex items-center space-x-2 px-2 ${open ? 'px-3' : 'px-0' }`}>
          <ChefHat className="w-5 h-5 text-orange-600 flex-shrink-0" />
          <div
            className={`
              overflow-hidden transition-all duration-300 
              ${open ? 'w-auto opacity-100' : 'w-0 opacity-0'}
            `}
          >
            <span className="text-xl tracking-tight font-semibold text-orange-600 whitespace-nowrap">
              Coquina
            </span>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <MenuItems />
      </SidebarContent>
      <SidebarFooter>
        {/* Footer links or version info here */}
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
