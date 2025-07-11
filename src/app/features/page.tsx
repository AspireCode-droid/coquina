"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  MessageCircle,
  Scan,
  Users,
  Utensils,
  Leaf,
  Clock,
  TrendingUp,
  Camera,
  Heart,
  Zap,
  CheckCircle,
  BarChart3,
  Bell,
  Settings,
} from "lucide-react"
import { Header } from "@/components/header"
import Footer from "@/components/footer"
import { Cta } from "@/components/cta"

// Mock screenshot components
const ScreenshotMockup = ({ title, children }: { title: string; children: React.ReactNode }) => {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border overflow-hidden">
      <div className="bg-gray-100 dark:bg-gray-800 px-4 py-3 flex items-center gap-2">
        <div className="flex gap-2">
          <div className="w-3 h-3 bg-red-400 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
          <div className="w-3 h-3 bg-green-400 rounded-full"></div>
        </div>
        <div className="flex-1 text-center">
          <span className="text-sm text-muted-foreground">{title}</span>
        </div>
      </div>
      <div className="p-6">{children}</div>
    </div>
  )
}

const FeatureCard = ({
  icon: Icon,
  title,
  description,
  benefits,
  color,
}: {
  icon: React.ElementType
  title: string
  description: string
  benefits: string[]
  color: string
}) => {
  return (
    <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="pb-4">
        <div className={`w-16 h-16 ${color} rounded-2xl flex items-center justify-center mb-4`}>
          <Icon className="w-8 h-8 text-white" />
        </div>
        <CardTitle className="text-2xl">{title}</CardTitle>
        <CardDescription className="text-base leading-relaxed">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
              <span className="text-sm text-muted-foreground">{benefit}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default function FeaturesPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-background">
        <Header />

        {/* Hero Section */}
        <section className="py-16 lg:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
                <Badge variant="secondary" className="bg-orange-50 text-orange-700 border-orange-200 mb-6">
                Powerful Features
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
                Everything You Need for
                <span className="text-orange-500"> Smart Cooking</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Discover how Culina AI transforms your kitchen experience with intelligent features designed to simplify
                meal planning, reduce waste, and promote healthier eating habits.
                </p>
            </div>
            </div>
        </section>

        {/* Core Features Grid */}
        <section className="py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                <FeatureCard
                icon={Scan}
                title="Smart Tracking"
                description="Automatically track your ingredients with AI-powered scanning and intelligent inventory management."
                benefits={[
                    "Barcode and visual scanning",
                    "Expiration date tracking",
                    "Automatic inventory updates",
                    "Low stock notifications",
                ]}
                color="bg-blue-500"
                />
                <FeatureCard
                icon={Utensils}
                title="Recipe Magic"
                description="Get personalized recipe suggestions based on what's actually available in your kitchen."
                benefits={[
                    "Ingredient-based recommendations",
                    "Dietary preference filtering",
                    "Difficulty level matching",
                    "Cooking time optimization",
                ]}
                color="bg-green-500"
                />
                <FeatureCard
                icon={Users}
                title="Expert Nutritionist"
                description="Access professional nutrition advice and meal planning tailored to your health goals."
                benefits={[
                    "Personalized meal plans",
                    "Nutritional analysis",
                    "Health goal tracking",
                    "Expert consultations",
                ]}
                color="bg-purple-500"
                />
                <FeatureCard
                icon={MessageCircle}
                title="Interactive Guides"
                description="Step-by-step cooking guidance through an intelligent chat interface that adapts to you."
                benefits={[
                    "Real-time cooking assistance",
                    "Technique explanations",
                    "Timing coordination",
                    "Troubleshooting help",
                ]}
                color="bg-orange-500"
                />
            </div>
            </div>
        </section>

        {/* Detailed Feature Sections */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Tabs defaultValue="tracking" className="w-full">
                <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">Explore Features in Detail</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                    Dive deeper into each feature and see how Culina AI can transform your cooking experience.
                </p>
                <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-2 lg:grid-cols-4">
                    <TabsTrigger value="tracking">Tracking</TabsTrigger>
                    <TabsTrigger value="recipes">Recipes</TabsTrigger>
                    <TabsTrigger value="nutrition">Nutrition</TabsTrigger>
                    <TabsTrigger value="guidance">Guidance</TabsTrigger>
                </TabsList>
                </div>

                <TabsContent value="tracking" className="space-y-12">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                        <Scan className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-3xl font-bold">Smart Ingredient Tracking</h3>
                    </div>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        Never lose track of your ingredients again. Our AI-powered scanning technology automatically
                        identifies and catalogs your food items, tracking expiration dates and quantities to help you stay
                        organized and reduce waste.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="flex items-start gap-3">
                        <Camera className="w-5 h-5 text-blue-500 mt-1" />
                        <div>
                            <h4 className="font-semibold mb-1">Visual Recognition</h4>
                            <p className="text-sm text-muted-foreground">
                            Simply point your camera at ingredients for instant identification
                            </p>
                        </div>
                        </div>
                        <div className="flex items-start gap-3">
                        <Bell className="w-5 h-5 text-blue-500 mt-1" />
                        <div>
                            <h4 className="font-semibold mb-1">Smart Alerts</h4>
                            <p className="text-sm text-muted-foreground">
                            Get notified before ingredients expire or run low
                            </p>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="relative">
                    <ScreenshotMockup title="Ingredient Scanner">
                        <div className="space-y-4">
                        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border-2 border-dashed border-blue-200 dark:border-blue-800 text-center">
                            <Camera className="w-12 h-12 text-blue-500 mx-auto mb-2" />
                            <p className="text-sm text-muted-foreground">Point camera at ingredient</p>
                        </div>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                            <div className="w-10 h-10 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center">
                                🥕
                            </div>
                            <div className="flex-1">
                                <p className="font-medium">Carrots</p>
                                <p className="text-sm text-muted-foreground">Expires in 5 days</p>
                            </div>
                            <Badge variant="secondary">Fresh</Badge>
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                            <div className="w-10 h-10 bg-yellow-100 dark:bg-yellow-900/20 rounded-lg flex items-center justify-center">
                                🍅
                            </div>
                            <div className="flex-1">
                                <p className="font-medium">Tomatoes</p>
                                <p className="text-sm text-muted-foreground">Expires in 2 days</p>
                            </div>
                            <Badge variant="outline" className="border-yellow-500 text-yellow-600">
                                Use Soon
                            </Badge>
                            </div>
                        </div>
                        </div>
                    </ScreenshotMockup>
                    </div>
                </div>
                </TabsContent>

                <TabsContent value="recipes" className="space-y-12">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                        <Utensils className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-3xl font-bold">Personalized Recipe Recommendations</h3>
                    </div>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        Get recipe suggestions tailored to your available ingredients, dietary preferences, and cooking
                        skill level. Our AI learns your preferences over time to provide increasingly personalized
                        recommendations.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="flex items-start gap-3">
                        <Zap className="w-5 h-5 text-green-500 mt-1" />
                        <div>
                            <h4 className="font-semibold mb-1">Instant Matching</h4>
                            <p className="text-sm text-muted-foreground">Find recipes based on what you have right now</p>
                        </div>
                        </div>
                        <div className="flex items-start gap-3">
                        <Heart className="w-5 h-5 text-green-500 mt-1" />
                        <div>
                            <h4 className="font-semibold mb-1">Preference Learning</h4>
                            <p className="text-sm text-muted-foreground">AI adapts to your taste and dietary needs</p>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="relative">
                    <ScreenshotMockup title="Recipe Recommendations">
                        <div className="space-y-4">
                        <div className="text-center mb-4">
                            <h4 className="font-semibold mb-2">Based on your ingredients:</h4>
                            <div className="flex gap-2 justify-center flex-wrap">
                            <Badge variant="secondary">🥕 Carrots</Badge>
                            <Badge variant="secondary">🍅 Tomatoes</Badge>
                            <Badge variant="secondary">🧄 Garlic</Badge>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <Card className="p-4">
                                <div className="flex gap-3">
                                    <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg flex items-center justify-center text-2xl">
                                    🍝
                                    </div>
                                    <div className="flex-1">
                                    <h5 className="font-semibold">Roasted Vegetable Pasta</h5>
                                    <p className="text-sm text-muted-foreground mb-2">25 min • Easy • 4 servings</p>
                                    <div className="flex gap-2">
                                        <Badge variant="outline" className="text-xs">
                                        Vegetarian
                                        </Badge>
                                        <Badge variant="outline" className="text-xs">
                                        Quick
                                        </Badge>
                                    </div>
                                    </div>
                                </div>
                            </Card>
                            <Card className="p-4">
                                <div className="flex gap-3">
                                    <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-lg flex items-center justify-center text-2xl">
                                    🥗
                                    </div>
                                    <div className="flex-1">
                                    <h5 className="font-semibold">Garden Fresh Salad</h5>
                                    <p className="text-sm text-muted-foreground mb-2">10 min • Easy • 2 servings</p>
                                    <div className="flex gap-2">
                                        <Badge variant="outline" className="text-xs">
                                        Healthy
                                        </Badge>
                                        <Badge variant="outline" className="text-xs">
                                        Raw
                                        </Badge>
                                    </div>
                                    </div>
                                </div>
                            </Card>
                        </div>
                        </div>
                    </ScreenshotMockup>
                    </div>
                </div>
                </TabsContent>

                <TabsContent value="nutrition" className="space-y-12">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
                        <Users className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-3xl font-bold">Expert Nutrition Guidance</h3>
                    </div>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        Access professional nutrition advice and personalized meal planning. Our certified nutritionists
                        help you achieve your health goals through tailored recommendations and ongoing support.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="flex items-start gap-3">
                        <BarChart3 className="w-5 h-5 text-purple-500 mt-1" />
                        <div>
                            <h4 className="font-semibold mb-1">Nutritional Analysis</h4>
                            <p className="text-sm text-muted-foreground">
                            Detailed breakdown of calories, macros, and nutrients
                            </p>
                        </div>
                        </div>
                        <div className="flex items-start gap-3">
                        <TrendingUp className="w-5 h-5 text-purple-500 mt-1" />
                        <div>
                            <h4 className="font-semibold mb-1">Goal Tracking</h4>
                            <p className="text-sm text-muted-foreground">Monitor progress towards your health objectives</p>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="relative">
                    <ScreenshotMockup title="Nutrition Dashboard">
                        <div className="space-y-4">
                        <div className="text-center mb-4">
                            <h4 className="font-semibold mb-2">Today&apos;s Nutrition</h4>
                            <div className="grid grid-cols-3 gap-4">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-blue-500">1,847</div>
                                <div className="text-xs text-muted-foreground">Calories</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-green-500">89g</div>
                                <div className="text-xs text-muted-foreground">Protein</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-orange-500">45g</div>
                                <div className="text-xs text-muted-foreground">Fiber</div>
                            </div>
                            </div>
                        </div>
                        <Card className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20">
                            <div className="flex items-center gap-3 mb-3">
                            <Users className="w-5 h-5 text-purple-500" />
                            <span className="font-semibold">Nutritionist Tip</span>
                            </div>
                            <p className="text-sm text-muted-foreground">
                            Great job on your protein intake today! Consider adding more leafy greens to boost your iron
                            levels.
                            </p>
                        </Card>
                        <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                            <span>Daily Goal Progress</span>
                            <span className="text-green-500">78%</span>
                            </div>
                            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                            <div className="bg-green-500 h-2 rounded-full" style={{ width: "78%" }}></div>
                            </div>
                        </div>
                        </div>
                    </ScreenshotMockup>
                    </div>
                </div>
                </TabsContent>

                <TabsContent value="guidance" className="space-y-12">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center">
                            <MessageCircle className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-3xl font-bold">Interactive Cooking Guidance</h3>
                        </div>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Get real-time cooking assistance through our intelligent chat interface. From basic techniques to
                            complex recipes, our AI guide adapts to your skill level and provides personalized support.
                        </p>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="flex items-start gap-3">
                            <Clock className="w-5 h-5 text-orange-500 mt-1" />
                            <div>
                                <h4 className="font-semibold mb-1">Perfect Timing</h4>
                                <p className="text-sm text-muted-foreground">
                                Coordinate multiple cooking tasks with smart timing
                                </p>
                            </div>
                            </div>
                            <div className="flex items-start gap-3">
                            <Settings className="w-5 h-5 text-orange-500 mt-1" />
                            <div>
                                <h4 className="font-semibold mb-1">Technique Tips</h4>
                                <p className="text-sm text-muted-foreground">Learn proper cooking methods and techniques</p>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="relative">
                        <ScreenshotMockup title="Cooking Assistant">
                            <div className="space-y-4">
                            <div className="space-y-3">
                                <div className="flex justify-end">
                                <div className="bg-orange-500 text-white p-3 rounded-2xl rounded-br-sm max-w-[80%]">
                                    <p className="text-sm">How do I know when the chicken is properly cooked?</p>
                                </div>
                                </div>
                                <div className="flex justify-start">
                                <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-2xl rounded-bl-sm max-w-[80%]">
                                    <p className="text-sm">
                                    The internal temperature should reach 165°F (74°C). You can also check that the juices run
                                    clear when pierced with a fork. Would you like me to set a timer?
                                    </p>
                                </div>
                                </div>
                                <div className="flex justify-end">
                                <div className="bg-orange-500 text-white p-3 rounded-2xl rounded-br-sm max-w-[80%]">
                                    <p className="text-sm">Yes, please set a 15-minute timer</p>
                                </div>
                                </div>
                                <div className="flex justify-start">
                                <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-2xl rounded-bl-sm max-w-[80%]">
                                    <div className="flex items-center gap-2">
                                    <Clock className="w-4 h-4 text-orange-500" />
                                    <span className="text-sm">Timer set for 15 minutes ✓</span>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <input
                                type="text"
                                placeholder="Ask me anything about cooking..."
                                className="flex-1 px-3 py-2 bg-gray-50 dark:bg-gray-800 rounded-full text-sm border focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                                readOnly
                                />
                                <Button size="sm" className="rounded-full bg-orange-500 hover:bg-orange-600">
                                <MessageCircle className="w-4 h-4" />
                                </Button>
                            </div>
                            </div>
                        </ScreenshotMockup>
                        </div>
                    </div>
                </TabsContent>
            </Tabs>
            </div>
        </section>

        {/* Benefits Summary */}
        <section className="py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why Choose Culina AI?</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Our features work together to create a comprehensive kitchen assistant that transforms how you cook.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                <Card className="text-center p-8 border-0 shadow-lg">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Leaf className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Reduce Food Waste</h3>
                <p className="text-muted-foreground leading-relaxed">
                    Smart tracking and recipe suggestions help you use every ingredient efficiently, reducing waste by up to
                    95%.
                </p>
                </Card>

                <Card className="text-center p-8 border-0 shadow-lg">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Clock className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Save Time</h3>
                <p className="text-muted-foreground leading-relaxed">
                    Automated meal planning and smart suggestions save hours of planning time each week.
                </p>
                </Card>

                <Card className="text-center p-8 border-0 shadow-lg">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <TrendingUp className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Eat Healthier</h3>
                <p className="text-muted-foreground leading-relaxed">
                    Professional nutrition guidance and balanced meal suggestions help you achieve your health goals.
                </p>
                </Card>
            </div>
            </div>
        </section>

        <Cta />
        <Footer />
    </div>
  )
}
