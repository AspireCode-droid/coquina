import { ChefHat, Play, ArrowRight, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { StatsMarquee } from "../ui/statsMarquee"

export function LandingHero() {
  return (
    <section className="py-12 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex flex-col items-center text-center gap-12">

          {/* Heading Section */}
          <div className="space-y-6 max-w-3xl">
            <Badge variant="secondary" className="bg-orange-500 text-white border-orange-200 dark:border-white mx-auto px-2 ">
              AI-Powered Kitchen Assistant
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-b from-foreground to-orange-400  bg-clip-text text-transparent">
              Your Smart Kitchen Assistant
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto">
                <strong>Track smarter,</strong> Cook better. Personalized recipes made just for you.<strong> Eat well, Waste less. Live fully.</strong>
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
                Start Free Trial
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button size="lg" variant="outline">
                <Play className="w-4 h-4 mr-2" />
                Watch Demo
              </Button>
            </div>
          </div>
          <StatsMarquee />
          <div className="relative w-full px-8 h-64 sm:h-80 md:h-96 lg:h-[500px] overflow-hidden rounded-xl">

            <div className="block lg:hidden absolute inset-0">
              <Image
                src="/hero.png"
                alt="Person cooking with Coquina assistant overlays"
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
            </div>

            {/* Desktop Image */}
            <div className="hidden lg:block absolute inset-0">
              <Image
                src="/heroDesktop.jpeg"
                alt="Person cooking with Coquina assistant overlays"
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
