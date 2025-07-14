
import { Card,CardContent } from "../ui/card"
import { Clock, Leaf, Star } from "lucide-react"

export function StatsCards(){
    return(
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 border-orange-200 dark:border-orange-800">
                <CardContent className="p-6">
                <div className="flex items-center justify-between">
                    <div>
                    <p className="text-sm font-medium text-orange-600 dark:text-orange-400">Hours Saved</p>
                    <p className="text-3xl font-bold text-orange-900 dark:text-orange-100">24.5</p>
                    <p className="text-xs text-orange-600 dark:text-orange-400">This month</p>
                    </div>
                    <Clock className="h-8 w-8 text-orange-500" />
                </div>
                </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900/20 dark:to-emerald-800/20 border-emerald-200 dark:border-emerald-800">
                <CardContent className="p-6">
                <div className="flex items-center justify-between">
                    <div>
                    <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400">Food Waste Reduced</p>
                    <p className="text-3xl font-bold text-emerald-900 dark:text-emerald-100">85%</p>
                    <p className="text-xs text-emerald-600 dark:text-emerald-400">vs last month</p>
                    </div>
                    <Leaf className="h-8 w-8 text-emerald-500" />
                </div>
                </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border-blue-200 dark:border-blue-800">
                <CardContent className="p-6">
                <div className="flex items-center justify-between">
                    <div>
                    <p className="text-sm font-medium text-blue-600 dark:text-blue-400">New Recipes Tried</p>
                    <p className="text-3xl font-bold text-blue-900 dark:text-blue-100">12</p>
                    <p className="text-xs text-blue-600 dark:text-blue-400">This week</p>
                    </div>
                    <Star className="h-8 w-8 text-blue-500" />
                </div>
                </CardContent>
            </Card>
        </div>
    )
}