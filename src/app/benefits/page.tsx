"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ChefHat,
  ArrowRight,
  Moon,
  Sun,
  CheckCircle,
  Menu,
  X,
  Star,
} from "lucide-react"
import { useTheme } from "next-themes"
import Link from "next/link"
import { BenefitsSection } from "@/components/benefitPage/BenesitSection"
import Footer from "@/components/footer"


const StatCard = ({ number, label, description }: { number: string; label: string; description: string }) => {
  return (
    <Card className="text-center p-6 border-0 shadow-lg">
      <div className="text-3xl lg:text-4xl font-bold text-orange-500 mb-2">{number}</div>
      <div className="text-lg font-semibold mb-2">{label}</div>
      <div className="text-sm text-muted-foreground">{description}</div>
    </Card>
  )
}

export default function BenefitsPage() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-background">
        {/* Navigation */}
        <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <Link href="/" className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                        <ChefHat className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-xl font-bold text-orange-500">Culina AI</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                    <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                        Home
                    </Link>
                    <Link href="/features" className="text-muted-foreground hover:text-foreground transition-colors">
                        Features
                    </Link>
                    <Link href="/benefits" className="text-foreground font-medium">
                        Benefits
                    </Link>
                    <Link href="/pricing" className="text-muted-foreground hover:text-foreground transition-colors">
                        Pricing
                    </Link>
                    </div>

                    <div className="hidden md:flex items-center space-x-4">
                    <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                        {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                    </Button>
                    <Button variant="ghost">Sign In</Button>
                    <Button className="bg-orange-500 hover:bg-orange-600">Get Started</Button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center space-x-2">
                    <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                        {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                    </Button>
                    <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                        {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
                    </Button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {mobileMenuOpen && (
                    <div className="md:hidden border-t py-4">
                    <div className="flex flex-col space-y-4">
                        <Link href="/" className="text-muted-foreground hover:text-foreground">
                        Home
                        </Link>
                        <Link href="/features" className="text-muted-foreground hover:text-foreground">
                        Features
                        </Link>
                        <Link href="/benefits" className="text-foreground font-medium">
                        Benefits
                        </Link>
                        <Link href="/pricing" className="text-muted-foreground hover:text-foreground">
                        Pricing
                        </Link>
                        <div className="flex flex-col space-y-2 pt-4 border-t">
                        <Button variant="ghost" className="justify-start">
                            Sign In
                        </Button>
                        <Button className="bg-orange-500 hover:bg-orange-600 justify-start">Get Started</Button>
                        </div>
                    </div>
                </div>
            )}
            </div>
        </nav>

        {/* Hero Section */}
        <section className="py-16 lg:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
                <Badge variant="secondary" className="bg-orange-50 text-orange-700 border-orange-200 mb-6">
                Transform Your Kitchen Experience
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
                The Benefits of
                <span className="text-orange-500"> Smart Cooking</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Discover how Culina AI transforms your relationship with food, cooking, and nutrition. From reducing waste
                to improving health, see the real impact on your daily life.
                </p>
            </div>
            </div>
        </section>

        {/* Key Statistics */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4">Real Results from Real Users</h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    See the measurable impact Culina AI has on thousands of kitchens worldwide.
                    </p>
                </div>

                <div className="grid md:grid-cols-4 gap-8">
                    <StatCard
                    number="95%"
                    label="Less Food Waste"
                    description="Average reduction in food waste reported by users"
                    />
                    <StatCard
                    number="5 Hours"
                    label="Time Saved Weekly"
                    description="Average time saved on meal planning and prep"
                    />
                    <StatCard number="$200" label="Monthly Savings" description="Average grocery budget reduction" />
                    <StatCard number="4.9/5" label="User Satisfaction" description="Average rating from 50,000+ active users" />
                </div>
            </div>
        </section>

        <BenefitsSection />

        {/* Testimonial Section */}
        <section className="py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">What Our Users Say</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Real stories from people who&apos;ve transformed their kitchens with Culina AI.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                <Card className="p-6 border-0 shadow-lg">
                <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                    &ldquo;I&apos;ve cut my food waste by 90% and discovered so many new recipes. My grocery bill has never been lower,
                    and my family is eating healthier than ever!&rdquo;
                </p>
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                    S
                    </div>
                    <div>
                    <p className="font-semibold">Sarah Johnson</p>
                    <p className="text-sm text-muted-foreground">Mother of 3, Seattle</p>
                    </div>
                </div>
                </Card>

                <Card className="p-6 border-0 shadow-lg">
                <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                    &ldquo;As a busy professional, Culina AI has been a game-changer. I save hours each week on meal planning and
                    actually enjoy cooking again!&rdquo;
                </p>
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-white font-semibold">
                    M
                    </div>
                    <div>
                    <p className="font-semibold">Michael Chen</p>
                    <p className="text-sm text-muted-foreground">Software Engineer, San Francisco</p>
                    </div>
                </div>
                </Card>

                <Card className="p-6 border-0 shadow-lg">
                <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                    &ldquot;The nutrition guidance has helped me manage my diabetes better. I know exactly what I&apos;m eating and how
                    it affects my health goals.&rdquot;
                </p>
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center text-white font-semibold">
                    E
                    </div>
                    <div>
                    <p className="font-semibold">Emily Rodriguez</p>
                    <p className="text-sm text-muted-foreground">Nurse, Austin</p>
                    </div>
                </div>
                </Card>
            </div>
            </div>
        </section>

        {/* How It Works */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">How Culina AI Delivers These Benefits</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Simple steps that lead to transformative results in your kitchen.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Track Your Ingredients</h3>
                <p className="text-muted-foreground">
                    Scan and catalog your food items with AI-powered recognition. Get automatic expiration tracking and
                    inventory management.
                </p>
                </div>

                <div className="text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Get Smart Suggestions</h3>
                <p className="text-muted-foreground">
                    Receive personalized recipe recommendations based on your available ingredients, dietary preferences,
                    and health goals.
                </p>
                </div>

                <div className="text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Cook with Confidence</h3>
                <p className="text-muted-foreground">
                    Follow interactive cooking guides and get real-time assistance. Learn new techniques while creating
                    delicious, healthy meals.
                </p>
                </div>
            </div>
            </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-orange-500 to-red-500">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-3xl mx-auto space-y-8">
                <h2 className="text-3xl lg:text-5xl font-bold text-white">Ready to Experience These Benefits?</h2>

                <p className="text-xl text-orange-100 max-w-2xl mx-auto">
                Join thousands of home cooks who&apos;ve already transformed their kitchens. Start your free trial today and
                see the difference Culina AI can make.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
                <Button size="lg" className="bg-white text-orange-500 hover:bg-gray-100">
                    Start Your Free Trial
                    <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-orange-500 bg-transparent"
                >
                    Explore Features
                </Button>
                </div>

                <div className="flex items-center justify-center gap-8 pt-8 text-sm text-orange-100">
                <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    14-day free trial
                </div>
                <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    No credit card required
                </div>
                <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    Cancel anytime
                </div>
                </div>
            </div>
            </div>
        </section>

        <Footer />
    </div>
  )
}
