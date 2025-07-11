// src/data/benefits.ts
import {
  Leaf,
  Clock,
  Heart,
  DollarSign,
  Zap,
  TrendingUp,
  Users,
  Target,
  Shield,
  Lightbulb,
} from "lucide-react"

export const primaryBenefits = [
  {
    icon: Leaf,
    title: "Reduce Food Waste",
    description:
      "Smart ingredient tracking and recipe suggestions help you use every item in your kitchen efficiently. Never let fresh produce go bad again with intelligent expiration alerts and creative recipe ideas.",
    imagesrc: "/reduce-waste.jpeg",
    stats: "95% Less Waste",
    color: "bg-gradient-to-br from-green-400 to-emerald-500",
  },
  {
    icon: Clock,
    title: "Save Precious Time",
    description:
      "Eliminate hours of meal planning with AI-powered suggestions. Get instant recipes based on your available ingredients and automatically generated shopping lists for efficient grocery trips.",
    imagesrc: "/save-time.jpeg",
    stats: "5 Hours/Week",
    color: "bg-gradient-to-br from-blue-400 to-cyan-500",
  },
  {
    icon: Heart,
    title: "Eat Healthier",
    description:
      "Access professional nutrition guidance and balanced meal suggestions tailored to your dietary needs. Track your nutritional goals and get expert advice to improve your overall health.",
    imagesrc: "/eat-healthier.jpeg",
    stats: "Better Nutrition",
    color: "bg-gradient-to-br from-pink-400 to-rose-500",
  },
  {
    icon: DollarSign,
    title: "Save Money",
    description:
      "Reduce grocery expenses by using ingredients more efficiently and avoiding duplicate purchases. Smart shopping lists and inventory tracking help you stick to your budget while eating better.",
    imagesrc: "/save-money.jpeg",
    stats: "$200/Month",
    color: "bg-gradient-to-br from-yellow-400 to-orange-500",
  },
  {
    icon: Zap,
    title: "Reduce Stress",
    description:
      "Say goodbye to the daily 'what's for dinner?' dilemma. Culina AI takes the guesswork out of meal planning, making cooking enjoyable rather than stressful.",
    imagesrc: "/reduce-stress.jpeg",
    stats: "Less Stress",
    color: "bg-gradient-to-br from-purple-400 to-indigo-500",
  },
  {
    icon: TrendingUp,
    title: "Improve Cooking Skills",
    description:
      "Learn new techniques and expand your culinary repertoire with interactive cooking guides. Get step-by-step instructions and tips that help you become a better cook.",
    imagesrc: "/improve-skill.jpeg",
    stats: "Skill Growth",
    color: "bg-gradient-to-br from-teal-400 to-green-500",
  },
]

export const secondaryBenefits = [
  {
    icon: Users,
    title: "Family Bonding",
    description:
      "Bring your family together around healthy, home-cooked meals. Create lasting memories while teaching kids about nutrition and cooking.",
    imagesrc: undefined,
    color: "bg-gradient-to-br from-amber-400 to-orange-500",
  },
  {
    icon: Target,
    title: "Achieve Health Goals",
    description:
      "Whether you're trying to lose weight, build muscle, or manage a health condition, get personalized meal plans that support your specific objectives.",
    imagesrc: undefined,
    color: "bg-gradient-to-br from-red-400 to-pink-500",
  },
  {
    icon: Shield,
    title: "Food Safety",
    description:
      "Stay safe with expiration tracking and food safety tips. Get alerts about recalls and learn proper food storage techniques to protect your family.",
    imagesrc: undefined,
    color: "bg-gradient-to-br from-blue-400 to-indigo-500",
  },
  {
    icon: Lightbulb,
    title: "Discover New Cuisines",
    description:
      "Expand your palate with recipes from around the world. Learn about different cooking techniques and ingredients to diversify your meals.",
    imagesrc: undefined,
    color: "bg-gradient-to-br from-violet-400 to-purple-500",
  },
]
