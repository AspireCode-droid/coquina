"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

import { Switch } from "@/components/ui/switch"
import {
  ChefHat,
  ArrowRight,
  Check,
  X,
  Star,
  Users,
  Zap,
  Shield,
  Crown,
} from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Cta } from "@/components/cta"

// Pricing data structure
const pricingData = {
  monthly: {
    starter: { price: 9, yearlyPrice: 7, savings: 22 },
    professional: { price: 19, yearlyPrice: 15, savings: 25 },
    family: { price: 29, yearlyPrice: 23, savings: 21 },
    enterprise: { price: 49, yearlyPrice: 39, savings: 20 },
  },
  features: {
    starter: [
      "Basic ingredient tracking",
      "Up to 50 recipes per month",
      "Mobile app access",
      "Email support",
      "Basic nutrition info",
      "Shopping lists",
    ],
    professional: [
      "Advanced ingredient tracking",
      "Unlimited recipes",
      "Personalized meal planning",
      "Detailed nutrition analysis",
      "Priority email support",
      "Smart shopping lists",
      "Expiration alerts",
      "Dietary preference filters",
    ],
    family: [
      "Everything in Professional",
      "Up to 6 family members",
      "Family meal planning",
      "Shared shopping lists",
      "Kid-friendly recipes",
      "Family nutrition tracking",
      "Multiple dietary preferences",
      "Family cooking challenges",
    ],
    enterprise: [
      "Everything in Family",
      "Unlimited family members",
      "Advanced analytics dashboard",
      "Custom integrations",
      "Dedicated account manager",
      "Phone support",
      "Custom meal plans",
      "API access",
    ],
  },
}

// Comparison table data
const comparisonFeatures = [
  {
    category: "Core Features",
    items: [
      {
        name: "Ingredient Tracking",
        starter: "Basic",
        professional: "Advanced",
        family: "Advanced",
        enterprise: "Advanced",
      },
      {
        name: "Recipe Access",
        starter: "50/month",
        professional: "Unlimited",
        family: "Unlimited",
        enterprise: "Unlimited",
      },
      { name: "Meal Planning", starter: false, professional: true, family: true, enterprise: true },
      { name: "Mobile App", starter: true, professional: true, family: true, enterprise: true },
    ],
  },
  {
    category: "Nutrition & Health",
    items: [
      {
        name: "Nutrition Information",
        starter: "Basic",
        professional: "Detailed",
        family: "Detailed",
        enterprise: "Advanced",
      },
      { name: "Dietary Preferences", starter: false, professional: true, family: "Multiple", enterprise: "Custom" },
      { name: "Health Goal Tracking", starter: false, professional: true, family: true, enterprise: true },
    ],
  },
  {
    category: "Collaboration",
    items: [
      { name: "Family Members", starter: "1", professional: "1", family: "6", enterprise: "Unlimited" },
      { name: "Shared Lists", starter: false, professional: false, family: true, enterprise: true },
      { name: "Family Challenges", starter: false, professional: false, family: true, enterprise: true },
    ],
  },
  {
    category: "Support & Advanced",
    items: [
      {
        name: "Support",
        starter: "Email",
        professional: "Priority Email",
        family: "Email + Chat",
        enterprise: "Phone + Dedicated",
      },
      { name: "API Access", starter: false, professional: false, family: false, enterprise: true },
      { name: "Analytics", starter: false, professional: "Basic", family: "Advanced", enterprise: "Custom" },
    ],
  },
]

// Pricing card component
const PricingCard = ({
  title,
  description,
  monthlyPrice,
  yearlyPrice,
  savings,
  features,
  isPopular = false,
  isYearly = false,
  icon: Icon,
  buttonText = "Get Started",
}: {
  title: string
  description: string
  monthlyPrice: number
  yearlyPrice: number
  savings: number
  features: string[]
  isPopular?: boolean
  isYearly?: boolean
  icon: React.ElementType
  buttonText?: string
}) => {
  const currentPrice = isYearly ? yearlyPrice : monthlyPrice

  return (
    <Card
      className={`relative h-full ${isPopular ? "border-2 border-blue-500 shadow-xl" : "border shadow-lg"} bg-white dark:bg-gray-900`}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <Badge className="bg-blue-500 text-white px-4 py-1 text-sm font-medium">
            <Star className="w-3 h-3 mr-1" />
            Most Popular
          </Badge>
        </div>
      )}

      <CardHeader className="text-center pb-8 pt-8">
        <div
          className={`w-12 h-12 mx-auto mb-4 rounded-xl flex items-center justify-center ${
            isPopular ? "bg-blue-500" : "bg-gray-100 dark:bg-gray-800"
          }`}
        >
          <Icon className={`w-6 h-6 ${isPopular ? "text-white" : "text-gray-600 dark:text-gray-400"}`} />
        </div>

        <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">{title}</CardTitle>
        <CardDescription className="text-gray-600 dark:text-gray-400 mt-2">{description}</CardDescription>

        <div className="mt-6">
          <div className="flex items-baseline justify-center">
            <span className="text-4xl font-bold text-gray-900 dark:text-white">${currentPrice}</span>
            <span className="text-gray-600 dark:text-gray-400 ml-1">/month</span>
          </div>

          {isYearly && (
            <div className="mt-2">
              <span className="text-sm text-gray-500 dark:text-gray-400 line-through">${monthlyPrice}/month</span>
              <Badge
                variant="secondary"
                className="ml-2 bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
              >
                Save {savings}%
              </Badge>
            </div>
          )}
        </div>
      </CardHeader>

      <CardContent className="px-6 pb-8">
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700 dark:text-gray-300 text-sm">{feature}</span>
            </li>
          ))}
        </ul>

        <Button
          className={`w-full ${
            isPopular
              ? "bg-blue-500 hover:bg-blue-600 text-white"
              : "bg-gray-900 hover:bg-gray-800 text-white dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
          }`}
        >
          {buttonText}
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </CardContent>
    </Card>
  )
}

// Comparison table component
const ComparisonTable = ({ isYearly }: { isYearly: boolean }) => {
  const prices = isYearly
    ? { starter: 7, professional: 15, family: 23, enterprise: 39 }
    : { starter: 9, professional: 19, family: 29, enterprise: 49 }

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-200 dark:border-gray-700">
            <th className="text-left py-4 px-6 font-medium text-gray-900 dark:text-white">Features</th>
            <th className="text-center py-4 px-6">
              <div className="flex flex-col items-center">
                <span className="font-medium text-gray-900 dark:text-white">Starter</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">${prices.starter}/mo</span>
              </div>
            </th>
            <th className="text-center py-4 px-6">
              <div className="flex flex-col items-center">
                <div className="flex items-center">
                  <span className="font-medium text-gray-900 dark:text-white">Professional</span>
                  <Star className="w-4 h-4 text-blue-500 ml-1" />
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">${prices.professional}/mo</span>
              </div>
            </th>
            <th className="text-center py-4 px-6">
              <div className="flex flex-col items-center">
                <span className="font-medium text-gray-900 dark:text-white">Family</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">${prices.family}/mo</span>
              </div>
            </th>
            <th className="text-center py-4 px-6">
              <div className="flex flex-col items-center">
                <span className="font-medium text-gray-900 dark:text-white">Enterprise</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">${prices.enterprise}/mo</span>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {comparisonFeatures.map((category, categoryIndex) => (
            <>
              <tr key={`category-${categoryIndex}`} className="bg-gray-50 dark:bg-gray-800/50">
                <td
                  colSpan={5}
                  className="py-3 px-6 font-medium text-sm text-gray-700 dark:text-gray-300 uppercase tracking-wide"
                >
                  {category.category}
                </td>
              </tr>
              {category.items.map((item, itemIndex) => (
                <tr
                  key={`item-${categoryIndex}-${itemIndex}`}
                  className="border-b border-gray-100 dark:border-gray-800"
                >
                  <td className="py-4 px-6 text-gray-700 dark:text-gray-300">{item.name}</td>
                  <td className="py-4 px-6 text-center">
                    {typeof item.starter === "boolean" ? (
                      item.starter ? (
                        <Check className="w-5 h-5 text-green-500 mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-gray-300 mx-auto" />
                      )
                    ) : (
                      <span className="text-sm text-gray-600 dark:text-gray-400">{item.starter}</span>
                    )}
                  </td>
                  <td className="py-4 px-6 text-center">
                    {typeof item.professional === "boolean" ? (
                      item.professional ? (
                        <Check className="w-5 h-5 text-green-500 mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-gray-300 mx-auto" />
                      )
                    ) : (
                      <span className="text-sm text-gray-600 dark:text-gray-400">{item.professional}</span>
                    )}
                  </td>
                  <td className="py-4 px-6 text-center">
                    {typeof item.family === "boolean" ? (
                      item.family ? (
                        <Check className="w-5 h-5 text-green-500 mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-gray-300 mx-auto" />
                      )
                    ) : (
                      <span className="text-sm text-gray-600 dark:text-gray-400">{item.family}</span>
                    )}
                  </td>
                  <td className="py-4 px-6 text-center">
                    {typeof item.enterprise === "boolean" ? (
                      item.enterprise ? (
                        <Check className="w-5 h-5 text-green-500 mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-gray-300 mx-auto" />
                      )
                    ) : (
                      <span className="text-sm text-gray-600 dark:text-gray-400">{item.enterprise}</span>
                    )}
                  </td>
                </tr>
              ))}
            </>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default function ProfessionalPricingPage() {
  const [mounted, setMounted] = useState(false)

  const [isYearly, setIsYearly] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
        {/* Navigation */}
            <Header />

        {/* Hero Section */}
        <section className="py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
                Simple, Transparent Pricing
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                Choose the perfect plan for your cooking journey. Start with our free trial, then select the plan that
                fits your needs.
                </p>

                {/* Billing Toggle */}
                <div className="flex items-center justify-center gap-4 mb-12">
                <span
                    className={`text-sm font-medium ${!isYearly ? "text-gray-900 dark:text-white" : "text-gray-500 dark:text-gray-400"}`}
                >
                    Monthly
                </span>
                <Switch checked={isYearly} onCheckedChange={setIsYearly} />
                <span
                    className={`text-sm font-medium ${isYearly ? "text-gray-900 dark:text-white" : "text-gray-500 dark:text-gray-400"}`}
                >
                    Yearly
                </span>
                <Badge className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300 ml-2">
                    Save up to 25%
                </Badge>
                </div>
            </div>
            </div>
        </section>

        {/* Pricing Cards */}
        <section className="pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <PricingCard
                title="Starter"
                description="Perfect for individuals getting started"
                monthlyPrice={pricingData.monthly.starter.price}
                yearlyPrice={pricingData.monthly.starter.yearlyPrice}
                savings={pricingData.monthly.starter.savings}
                features={pricingData.features.starter}
                isYearly={isYearly}
                icon={Zap}
                />

                <PricingCard
                title="Professional"
                description="Ideal for serious home cooks"
                monthlyPrice={pricingData.monthly.professional.price}
                yearlyPrice={pricingData.monthly.professional.yearlyPrice}
                savings={pricingData.monthly.professional.savings}
                features={pricingData.features.professional}
                isPopular={true}
                isYearly={isYearly}
                icon={Crown}
                />

                <PricingCard
                title="Family"
                description="Great for families cooking together"
                monthlyPrice={pricingData.monthly.family.price}
                yearlyPrice={pricingData.monthly.family.yearlyPrice}
                savings={pricingData.monthly.family.savings}
                features={pricingData.features.family}
                isYearly={isYearly}
                icon={Users}
                />

                <PricingCard
                title="Enterprise"
                description="For large families and professionals"
                monthlyPrice={pricingData.monthly.enterprise.price}
                yearlyPrice={pricingData.monthly.enterprise.yearlyPrice}
                savings={pricingData.monthly.enterprise.savings}
                features={pricingData.features.enterprise}
                isYearly={isYearly}
                icon={Shield}
                buttonText="Contact Sales"
                />
            </div>
            </div>
        </section>

        {/* Feature Comparison */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Compare All Features</h2>
                <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                See exactly what&apos;s included in each plan to make the best choice for your needs.
                </p>
            </div>

            <Card className="overflow-hidden">
                <ComparisonTable isYearly={isYearly} />
            </Card>
            </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h2>
                <p className="text-xl text-gray-600 dark:text-gray-400">
                Everything you need to know about our pricing and plans.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Can I change plans anytime?</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                    Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.
                    </p>
                </div>

                <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Is there a free trial?</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                    We offer a 14-day free trial for all plans. No credit card required to start.
                    </p>
                </div>

                <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    What payment methods do you accept?
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                    We accept all major credit cards and PayPal. All payments are processed securely.
                    </p>
                </div>
                </div>

                <div className="space-y-6">
                <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Can I cancel anytime?</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                    Yes, you can cancel your subscription at any time with no cancellation fees.
                    </p>
                </div>

                <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Do you offer refunds?</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                    We offer a 30-day money-back guarantee if you&apos;re not satisfied with our service.
                    </p>
                </div>

                <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Is my data secure?</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                    Yes, we use enterprise-grade security and encryption to protect your data.
                    </p>
                </div>
                </div>
            </div>
            </div>
        </section>

        <Cta />

        {/* Footer */}
        <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid md:grid-cols-4 gap-8">
                <div className="space-y-4">
                <Link href="/" className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                    <ChefHat className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-xl font-semibold text-gray-900 dark:text-white">Culina AI</span>
                </Link>
                <p className="text-gray-600 dark:text-gray-400">
                    Your intelligent kitchen assistant for smarter cooking and healthier eating.
                </p>
                </div>

                <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Product</h3>
                <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <Link href="/features" className="block hover:text-gray-900 dark:hover:text-white">
                    Features
                    </Link>
                    <Link href="/benefits" className="block hover:text-gray-900 dark:hover:text-white">
                    Benefits
                    </Link>
                    <Link href="/pricing" className="block hover:text-gray-900 dark:hover:text-white">
                    Pricing
                    </Link>
                </div>
                </div>

                <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Company</h3>
                <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <Link href="/about" className="block hover:text-gray-900 dark:hover:text-white">
                    About
                    </Link>
                    <Link href="/blog" className="block hover:text-gray-900 dark:hover:text-white">
                    Blog
                    </Link>
                    <Link href="/careers" className="block hover:text-gray-900 dark:hover:text-white">
                    Careers
                    </Link>
                </div>
                </div>

                <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Support</h3>
                <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <Link href="/help" className="block hover:text-gray-900 dark:hover:text-white">
                    Help Center
                    </Link>
                    <Link href="/contact" className="block hover:text-gray-900 dark:hover:text-white">
                    Contact
                    </Link>
                    <Link href="/privacy" className="block hover:text-gray-900 dark:hover:text-white">
                    Privacy
                    </Link>
                </div>
                </div>
            </div>

            <div className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-8 text-center text-sm text-gray-600 dark:text-gray-400">
                © 2024 Culina AI. All rights reserved.
            </div>
            </div>
        </footer>
    </div>
  )
}
