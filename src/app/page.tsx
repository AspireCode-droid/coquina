"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import {
  ChefHat,
  Moon,
  Sun,
  Menu,
  X,
} from "lucide-react"
import { useTheme } from "next-themes"
import { LandingHero } from "@/components/landingPage/landingHero"
import { Features } from "@/components/landingPage/features"
import { Benefits } from "@/components/landingPage/benefits"
import { Testimonials } from "@/components/landingPage/testimonials"
import { PricingSection } from "@/components/landingPage/pricing"
import {Cta} from "@/components/cta"

export default function CulinaAILanding() {
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
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                <ChefHat className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-orange-500">Coquina </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
                Features
              </a>
              <a href="#benefits" className="text-muted-foreground hover:text-foreground transition-colors">
                Benefits
              </a>
              <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
                Pricing
              </a>
              <a href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">
                Reviews
              </a>
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
                <a href="#features" className="text-muted-foreground hover:text-foreground">
                  Features
                </a>
                <a href="#benefits" className="text-muted-foreground hover:text-foreground">
                  Benefits
                </a>
                <a href="#pricing" className="text-muted-foreground hover:text-foreground">
                  Pricing
                </a>
                <a href="#testimonials" className="text-muted-foreground hover:text-foreground">
                  Reviews
                </a>
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

      <LandingHero />

      <Features />

      <Benefits />

      <Testimonials />

      <PricingSection />

      <Cta />

      {/* Footer */}
      <footer className="bg-gray-50 dark:bg-gray-900 border-t">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                  <ChefHat className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-orange-500">Culina AI</span>
              </div>
              <p className="text-muted-foreground">
                Your intelligent kitchen assistant for smarter cooking, healthier eating, and less food waste.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <a href="#" className="block hover:text-foreground">
                  Features
                </a>
                <a href="#" className="block hover:text-foreground">
                  Pricing
                </a>
                <a href="#" className="block hover:text-foreground">
                  API
                </a>
                <a href="#" className="block hover:text-foreground">
                  Integrations
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <a href="#" className="block hover:text-foreground">
                  About
                </a>
                <a href="#" className="block hover:text-foreground">
                  Blog
                </a>
                <a href="#" className="block hover:text-foreground">
                  Careers
                </a>
                <a href="#" className="block hover:text-foreground">
                  Contact
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <a href="#" className="block hover:text-foreground">
                  Help Center
                </a>
                <a href="#" className="block hover:text-foreground">
                  Privacy Policy
                </a>
                <a href="#" className="block hover:text-foreground">
                  Terms of Service
                </a>
                <a href="#" className="block hover:text-foreground">
                  Status
                </a>
              </div>
            </div>
          </div>

          <div className="border-t mt-12 pt-8 text-center text-sm text-muted-foreground">
            © 2024 Culina AI. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
