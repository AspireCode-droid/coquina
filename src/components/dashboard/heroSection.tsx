
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar"
import { Button } from "../ui/button"
import { Plus } from "lucide-react"
export function HeroSection(){
    return(
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
                <Avatar className="h-12 w-12">
                <AvatarImage src="/placeholder.svg?height=48&width=48" />
                <AvatarFallback className="bg-gradient-to-br from-orange-500 to-emerald-500 text-white text-lg">
                    JD
                </AvatarFallback>
                </Avatar>
                <div>
                <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Good morning, Jane! 👋</h1>
                <p className="text-slate-600 dark:text-slate-400">Ready to cook something delicious today?</p>
                </div>
            </div>
            <Button className="bg-gradient-to-r from-orange-500 to-emerald-500 hover:from-orange-600 hover:to-emerald-600 text-white">
                <Plus className="h-4 w-4 mr-2" />
                New Recipe
            </Button>
        </div>
    )
}