import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Marquee from "react-fast-marquee"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Home Cook",
    image: "/avatars/sarah.jpg", 
    quote:
      "Culina AI has completely changed how I cook. I waste so much less food now and discover new recipes every week!",
  },
  {
    name: "Michael Chen",
    role: "Father of 3",
    image: "/avatars/michael.jpg",
    quote:
      "The nutrition advice is spot-on. I've improved my family's eating habits significantly since using Culina AI.",
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Manager",
    image: "/avatars/emily.jpg",
    quote:
      "As a busy professional, Culina AI saves me hours of meal planning. The chat interface is so intuitive!",
  },
  {
  name: "Daniel Okafor",
  role: "Fitness Enthusiast",
  image: "/avatars/daniel.jpg", 
  quote:
    "Culina AI helps me stay on track with my macros and meal timing. It’s like having a personal chef and nutritionist in one app.",   
  },
  {
  name: "Tomiwa Adeyemi",
  role: "Software Developer",
  image: "/avatars/tomiwa.jpg",
  quote:
    "Meal planning used to feel like a chore. Now it’s fun. Culina AI’s suggestions are spot on and help me stay productive.",
  }
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Thousands of home cooks trust Culina AI to transform their kitchen experience.
          </p>
        </div>
        <Marquee gradient={false} speed={40} pauseOnHover>
            <Carousel>
                <CarouselContent className="-ml-1">
                    {testimonials.map((testimonial, index) => (
                    <CarouselItem
                        key={index}
                        className="md:basis-1/2 lg:basis-1/3 pl-4 md:pl-6 w-full max-w-sm"
                    >
                        <Card className="h-full shadow-xl border-0">
                            <CardContent className="p-6 flex flex-col h-full justify-between">
                                <div className="mb-4 space-y-3">
                                    <div className="flex gap-1">
                                        {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className="w-5 h-5 text-yellow-400 fill-yellow-300"
                                        />
                                        ))}
                                    </div>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        `&apos;`{testimonial.quote}`&apos;`
                                    </p>
                                </div>

                                <div className="flex items-center gap-3 pt-4 mt-auto">
                                    <div className="relative w-10 h-10 rounded-full overflow-hidden bg-gray-200">
                                        <Image
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        fill
                                        className="object-cover"
                                        />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-sm">{testimonial.name}</p>
                                        <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </Marquee>
      </div>
    </section>
  )
}
