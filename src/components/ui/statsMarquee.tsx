"use client"

import Marquee from "react-fast-marquee"
import { Users, Utensils, Leaf } from "lucide-react"

export function StatsMarquee() {
  const stats = [
    {
      icon: <Users className="w-5 h-5 text-orange-500" />,
      value: "50,000+",
      label: "Active Users",
    },
    {
      icon: <Utensils className="w-5 h-5 text-orange-500" />,
      value: "1M+",
      label: "Recipes Created",
    },
    {
      icon: <Leaf className="w-5 h-5 text-orange-500" />,
      value: "95%",
      label: "Less Food Waste",
    },
    {
      icon: <Users className="w-5 h-5 text-orange-500" />,
      value: "200+",
      label: "Countries Served",
    },
    {
      icon: <Utensils className="w-5 h-5 text-orange-500" />,
      value: "24/7",
      label: "Kitchen Assistance",
    },
  ]

  return (
    <div className="py-2 px-6 bg-background max-w-screen md:max-w-2xl">
      <Marquee gradient={true} gradientColor={'oklch(0.145 0 0)'} gradientWidth={80} speed={50} pauseOnHover className="overflow-hidden">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 px-8 sm:px-12 border-r border-gray-300 dark:border-white/10"
          >
            {stat.icon}
            <div className="text-lg font-semibold text-foreground">{stat.value}</div>
            <span className="text-sm text-muted-foreground">{stat.label}</span>
          </div>
        ))}
      </Marquee>
    </div>
  )
}
