// app/layout.tsx
'use client'

import { ThemeProvider } from "@/components/theme-provider"
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/dashboard/app-sidebar"
import { TopBar } from "@/components/dashboard/topbar"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
      <SidebarProvider>
        <div className="flex h-screen w-screen overflow-hidden bg-background">
          <AppSidebar />
          <div className="flex flex-col flex-1">
            <TopBar />
            <main className="flex-1 overflow-y-auto px-4 py-4">
              {children}
            </main>
          </div>
        </div>
      </SidebarProvider>
    </ThemeProvider>
  )
}
