import Image from "next/image"
import { Scan, Utensils, Users, MessageCircle } from "lucide-react"
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card"
const features = [
  {
    title: "Smart Tracking",
    description: "AI scans and tracks ingredients in real time for zero waste and full control.",
    icon: Scan,
    image: "/smartTracking.png"
  },
  {
    title: "Recipe Suggestions",
    description: "Get real-time recipe ideas based on your kitchen inventory.",
    icon: Utensils,
    image: "/recipeSuggestions.png", 
  },
  {
    title: "Expert Nutritionist",
    description: "Tailored nutrition advice and plans from AI-powered experts.",
    icon: Users,
    image: "/nutrition.png",
  },
  {
    title: "Interactive Guides",
    description: "Step-by-step guides that adapt to your skills, time, and taste.",
    icon: MessageCircle,
    image: "/interactiveGuides.png",
  },
]

export function Features() {
  return (
    <section id="features" className="py-16 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Everything You Need for Smarter Cooking</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From ingredient tracking to personalized nutrition advice, Coquina brings intelligence to every aspect
            of your kitchen.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <Card key={feature.title} className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300 pt-0 pb-6">
              <div className="relative h-56 w-full">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover transform hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-white/80 dark:bg-black/60 backdrop-blur-md rounded-full p-2 shadow">
                  <feature.icon className="w-6 h-6 text-orange-500" />
                </div>
              </div>
              <CardHeader className="pt-2 text-center">
                <CardTitle className="text-2xl font-semibold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm text-center">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}


