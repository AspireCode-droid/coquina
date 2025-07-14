
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem, } from "../ui/sidebar"
  import {
  FlaskRoundIcon as Flask,
  Home,
  Settings,
  BookOpen,
  Package,
  TrendingUp,
  ShoppingCart,
  User,
  Bot,
} from "lucide-react"
import Link from "next/link"

const sidebarItems = [
  { name: "Dashboard", icon: Home, href: "/" },
  { name: "Recipes", icon: BookOpen, href: "/recipes" },
  { name: "Pantry", icon: Package, href: "/pantry" },
  { name: "Insights", icon: TrendingUp, href: "/insights" },
  { name: "Shopping", icon: ShoppingCart, href: "/shopping" },
  { name: "Profile", icon: User, href: "/profile" },
  { name: "AI Assistant", icon: Bot, href: "/ai" },
  { name: "Settings", icon: Settings, href: "/settings" },
  { name: "Labs", icon: Flask, href: "/labs" },
]

export function MenuItems(){
  return(
    <SidebarMenu className="space-y-1">
      {sidebarItems.map((item) => (
        <SidebarMenuItem key={item.name}>
          <SidebarMenuButton asChild>
            <Link href={item.href} className="group flex items-center gap-3 px-3 py-2 rounded-lg text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors">
              <item.icon className="w-5 h-5 text-gray-500 group-hover:text-orange-600 transition" />
              <span className="text-sm font-medium">{item.name}</span>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
)
}