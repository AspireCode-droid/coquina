import Image from "next/image"
import { Leaf, Clock, TrendingUp, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const benefits = [
  {
    title: "Reduce Food Waste",
    description: "Use every ingredient efficiently with smart suggestions that prevent spoilage and maximize your grocery budget.",
    icon: Leaf,
    bg: "bg-green-100 dark:bg-green-900/20",
    color: "text-green-600",
  },
  {
    title: "Save Time",
    description: "Eliminate meal planning stress with instant recipe suggestions and automated shopping lists.",
    icon: Clock,
    bg: "bg-blue-100 dark:bg-blue-900/20",
    color: "text-blue-600",
  },
  {
    title: "Eat Healthier",
    description: "Get personalized nutrition guidance and balanced meal suggestions tailored to your dietary needs.",
    icon: TrendingUp,
    bg: "bg-purple-100 dark:bg-purple-900/20",
    color: "text-purple-600",
  },
]


export function Benefits() {
  return (
    <section id="benefits" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div className="space-y-10">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why Choose Culina AI?</h2>
              <p className="text-lg text-muted-foreground max-w-xl">
                Transform your relationship with food and cooking through intelligent automation and personalized guidance.
              </p>
            </div>

            <div className="space-y-6">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="flex gap-4 items-start">
                  <div className={`w-12 h-12 ${benefit.bg} rounded-full flex items-center justify-center p-2`}>
                    <benefit.icon className={`w-6 h-6 ${benefit.color}`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{benefit.title}</h3>
                    <p className="text-muted-foreground text-sm">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
                Start Your Free Trial
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative w-full h-[450px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/whyUs.jpeg"
              alt="Culina AI helping in the kitchen"
              fill
              className="object-cover"
              priority
            />
          </div>
          
        </div>
      </div>
    </section>
  )
}

