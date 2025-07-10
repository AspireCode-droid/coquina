
import {Check} from 'lucide-react'
import {Card, CardHeader, CardTitle, CardContent} from '@/components/ui/card'
import { Button } from '../ui/button'
import { Badge } from '../ui/badge'

export function PricingSection(){
    return(
        <section id="pricing" className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-muted-foreground">Choose the plan that works best for your cooking needs.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 border-gray-200 dark:border-gray-700">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl">Starter</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$9</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-green-500" />
                  <span>Basic ingredient tracking</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-green-500" />
                  <span>Recipe suggestions</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-green-500" />
                  <span>Chat support</span>
                </div>
                <Button className="w-full mt-8 bg-transparent" variant="outline">
                  Get Started
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-500 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-orange-500 text-white">Most Popular</Badge>
              </div>
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl">Professional</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$19</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-green-500" />
                  <span>Advanced ingredient tracking</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-green-500" />
                  <span>Personalized recipes</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-green-500" />
                  <span>Nutrition guidance</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-green-500" />
                  <span>Shopping lists</span>
                </div>
                <Button className="w-full mt-8 bg-orange-500 hover:bg-orange-600">Get Started</Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200 dark:border-gray-700">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl">Enterprise</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$39</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-green-500" />
                  <span>Everything in Professional</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-green-500" />
                  <span>Family meal planning</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-green-500" />
                  <span>Priority support</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-green-500" />
                  <span>Custom integrations</span>
                </div>
                <Button className="w-full mt-8 bg-transparent" variant="outline">
                  Get Started
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    )
}