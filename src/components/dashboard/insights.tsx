
import { Card, CardContent, CardTitle, CardHeader } from "../ui/card"
import { TrendingUp, Target, Clock, Calendar } from "lucide-react"

export default function(){
    return(
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-purple-500" />
                Weekly Insights
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                    <div className="flex items-center justify-center w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-full mx-auto mb-3">
                    <Target className="h-6 w-6 text-green-600" />
                    </div>
                    <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-1">Health Score</h3>
                    <p className="text-2xl font-bold text-green-600">8.5/10</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Excellent nutrition balance</p>
                </div>

                <div className="text-center">
                    <div className="flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-full mx-auto mb-3">
                    <Clock className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-1">Time Efficiency</h3>
                    <p className="text-2xl font-bold text-blue-600">92%</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Faster than average</p>
                </div>

                <div className="text-center">
                    <div className="flex items-center justify-center w-12 h-12 bg-orange-100 dark:bg-orange-900/20 rounded-full mx-auto mb-3">
                    <Calendar className="h-6 w-6 text-orange-600" />
                    </div>
                    <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-1">Meal Planning</h3>
                    <p className="text-2xl font-bold text-orange-600">7 days</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Planned ahead</p>
                </div>
                </div>
            </CardContent>
        </Card>
    )
}