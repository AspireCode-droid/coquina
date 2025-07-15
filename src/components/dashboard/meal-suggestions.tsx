
import { Button } from "../ui/button"
import { Card, CardContent } from "../ui/card"
import { Badge } from "../ui/badge"
import { ArrowRight, Clock } from "lucide-react"

export function MealSuggestions(){
    const mealSuggestions = [
      {
        id: 1,
        name: "Mediterranean Bowl",
        time: "25 min",
        difficulty: "Easy",
        image: "/placeholder.svg?height=120&width=200",
        tags: ["Healthy", "Vegetarian"],
      },
      {
        id: 2,
        name: "Spicy Thai Curry",
        time: "35 min",
        difficulty: "Medium",
        image: "/placeholder.svg?height=120&width=200",
        tags: ["Spicy", "Asian"],
      },
      {
        id: 3,
        name: "Classic Pasta Carbonara",
        time: "20 min",
        difficulty: "Easy",
        image: "/placeholder.svg?height=120&width=200",
        tags: ["Italian", "Quick"],
      },
      {
        id: 4,
        name: "Grilled Salmon",
        time: "30 min",
        difficulty: "Medium",
        image: "/placeholder.svg?height=120&width=200",
        tags: ["Healthy", "Protein"],
      },
    ]
    return(
        <div className="">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">Suggested for You</h2>
                <Button variant="ghost" className="text-orange-600 hover:text-orange-700">
                  View All <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
            </div>
            <div className="flex justify-between gap-4 overflow-x-auto pb-4">
                {mealSuggestions.map((meal) => (
                <Card key={meal.id} className="flex-1 min-w-64 max-w-2xs  hover:shadow-lg transition-shadow cursor-pointer pt-6">
                    <div className="aspect-video bg-slate-200 dark:bg-slate-700 px-4 rounded-t-lg mx-2"></div>
                    <CardContent className="px-4 pt-2">
                      <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">{meal.name}</h3>
                      <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 mb-3">
                          <Clock className="h-4 w-4" />
                          <span>{meal.time}</span>
                          <span>•</span>
                          <span>{meal.difficulty}</span>
                      </div>
                      <div className="flex gap-2 flex-wrap">
                          {meal.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                              {tag}
                          </Badge>
                          ))}
                      </div>
                    </CardContent>
                </Card>
                ))}
            </div>
        </div>
    )
}