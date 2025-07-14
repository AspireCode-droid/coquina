
import {Card, CardHeader, CardContent, CardTitle} from "@/components/ui/card"
import { Package, ShoppingCart, MessageSquare, CheckCircle2, Plus } from "lucide-react"
import { Badge } from "../ui/badge"
import { Button } from "../ui/button"


export function WidgetGrid(){
    const pantryItems = [
    { name: "Tomatoes", quantity: "6 pieces", status: "fresh" },
    { name: "Olive Oil", quantity: "500ml", status: "good" },
    { name: "Pasta", quantity: "2 boxes", status: "good" },
    { name: "Milk", quantity: "1L", status: "expires-soon" },
    ]
    const groceryList = [
      { name: "Fresh Basil", checked: false },
      { name: "Parmesan Cheese", checked: true },
      { name: "Chicken Breast", checked: false },
      { name: "Bell Peppers", checked: false },
    ]
    
    const recentInteractions = [
      { question: "How to make perfect risotto?", time: "2 hours ago" },
      { question: "Substitute for heavy cream?", time: "1 day ago" },
      { question: "Wine pairing for salmon?", time: "2 days ago" },
    ]

    return(
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6">
            <Card className="xl:col-span-2">
                <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Package className="h-5 w-5 text-orange-500" />
                    Pantry Snapshot
                </CardTitle>
                </CardHeader>
                <CardContent>
                <div className="space-y-3">
                    {pantryItems.map((item, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800 rounded-lg"
                    >
                        <div>
                        <p className="font-medium text-slate-900 dark:text-slate-100">{item.name}</p>
                        <p className="text-sm text-slate-600 dark:text-slate-400">{item.quantity}</p>
                        </div>
                        <Badge
                        variant={item.status === "expires-soon" ? "destructive" : "secondary"}
                        className="text-xs"
                        >
                        {item.status === "expires-soon" ? "Expires Soon" : "Fresh"}
                        </Badge>
                    </div>
                    ))}
                </div>
                </CardContent>
            </Card>

            {/* Grocery List */}
            <Card>
                <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <ShoppingCart className="h-5 w-5 text-emerald-500" />
                    Grocery List
                </CardTitle>
                </CardHeader>
                <CardContent>
                <div className="space-y-2">
                    {groceryList.map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                        <CheckCircle2 className={`h-4 w-4 ${item.checked ? "text-emerald-500" : "text-slate-300"}`} />
                        <span
                        className={`text-sm ${item.checked ? "line-through text-slate-500" : "text-slate-900 dark:text-slate-100"}`}
                        >
                        {item.name}
                        </span>
                    </div>
                    ))}
                </div>
                <Button variant="ghost" className="w-full mt-4 text-emerald-600 hover:text-emerald-700">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Item
                </Button>
                </CardContent>
            </Card>

            {/* Recent AI Interactions */}
            <Card>
                <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5 text-blue-500" />
                    Recent AI Chats
                </CardTitle>
                </CardHeader>
                <CardContent>
                <div className="space-y-3">
                    {recentInteractions.map((interaction, index) => (
                    <div key={index} className="p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                        <p className="text-sm font-medium text-slate-900 dark:text-slate-100 mb-1">
                        {interaction.question}
                        </p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">{interaction.time}</p>
                    </div>
                    ))}
                </div>
                </CardContent>
            </Card>
            </div>
    )
}