'use client';

import { Check } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { motion } from 'framer-motion';

export function PricingSection() {
  const plans = [
    {
      name: "Starter",
      price: "$9",
      note: "/month",
      features: [
        "Basic ingredient tracking",
        "Recipe suggestions",
        "Chat support",
      ],
      ctaStyle: "outline",
      highlight: false,
    },
    {
      name: "Professional",
      price: "$19",
      note: "/month",
      features: [
        "Advanced ingredient tracking",
        "Personalized recipes",
        "Nutrition guidance",
        "Shopping lists",
      ],
      ctaStyle: "filled",
      highlight: true,
      badge: "Most Popular",
    },
    {
      name: "Enterprise",
      price: "$39",
      note: "/month",
      features: [
        "Everything in Professional",
        "Family meal planning",
        "Priority support",
        "Custom integrations",
      ],
      ctaStyle: "outline",
      highlight: false,
    },
  ];

  return (
    <section
      id="pricing"
      className="py-16 bg-[#f9f5f0] dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl lg:text-5xl font-bold tracking-tight mb-4"
          >
            Simple, Transparent Pricing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            No hidden fees. No contracts. Just smarter cooking with every plan.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className={`relative rounded-2xl transition-all duration-300 ${
                plan.highlight ? 'border-2 border-orange-500 shadow-xl' : 'border border-gray-200 dark:border-gray-700'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-orange-500 text-white">{plan.badge}</Badge>
                </div>
              )}
              <Card className="h-full bg-white/95 dark:bg-gray-800/95 rounded-2xl">
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl font-semibold">
                    {plan.name}
                  </CardTitle>
                  <div className="mt-4 text-gray-900 dark:text-white">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.note}</span>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4 px-6 pb-8">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <Check className="w-4 h-4 text-green-500" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}

                  <Button
                    className={`w-full mt-8 rounded-full px-6 py-3 ${
                      plan.ctaStyle === 'filled'
                        ? 'bg-orange-500 hover:bg-orange-600 text-white'
                        : 'border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`}
                    variant={plan.ctaStyle === 'filled' ? 'default' : 'outline'}
                  >
                    {plan.highlight ? "Start Cooking Smarter" : "Get Started"}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
