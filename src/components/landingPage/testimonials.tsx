'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Home Cook",
    image: "/avatars/sarah.jpg",
    quote:
      "Coquina has completely changed how I cook. I waste so much less food now and discover new recipes every week!",
  },
  {
    name: "Michael Chen",
    role: "Father of 3",
    image: "/avatars/michael.jpg",
    quote:
      "The nutrition advice is spot-on. I've improved my family's eating habits significantly since using Coquina.",
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Manager",
    image: "/avatars/emily.jpg",
    quote:
      "As a busy professional, Coquina saves me hours of meal planning. The chat interface is so intuitive!",
  },
  {
    name: "Daniel Okafor",
    role: "Fitness Enthusiast",
    image: "/avatars/daniel.jpg",
    quote:
      "Coquina helps me stay on track with my macros and meal timing. It’s like having a personal chef and nutritionist in one app.",
  },
  {
    name: "Tomiwa Adeyemi",
    role: "Software Developer",
    image: "/avatars/tomiwa.jpg",
    quote:
      "Meal planning used to feel like a chore. Now it’s fun. Coquina’s suggestions are spot on and help me stay productive.",
  },
];

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-24 bg-[#f9f5f0] dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl lg:text-5xl font-bold tracking-tight bg-gradient-to-r from-gray-900 via-orange-500 to-gray-900 bg-clip-text text-transparent dark:from-white dark:via-orange-500 dark:to-white"
          >
            Real Voices. Real Kitchens
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4"
          >
            Home cooks and families across the world trust Coquina to make
            cooking smarter, healthier, and more joyful.
          </motion.p>
        </div>

        {/* Scrolling Testimonials */}
        <Marquee gradient={false} delay={0.5} speed={35} pauseOnHover>
          <Carousel>
            <CarouselContent className="-ml-1">
              {testimonials.map((testimonial, index) => (
                <CarouselItem
                  key={index}
                  className="md:basis-1/2 lg:basis-1/3 pl-4 md:pl-6 w-full max-w-sm"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    className="h-full pb-4"
                  >
                    <Card className="h-full shadow-lg  border-0 transition-shadow duration-300 rounded-2xl">
                      <CardContent className="p-6 flex flex-col h-full justify-between">
                        <div className="mb-4 space-y-3">
                          <div className="flex gap-1">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star
                                key={i}
                                className="w-5 h-5 text-yellow-400 fill-yellow-300"
                              />
                            ))}
                          </div>
                          <p className="text-muted-foreground text-sm leading-relaxed italic">
                            “{testimonial.quote}”
                          </p>
                        </div>

                        <div className="flex items-center gap-3 pt-4 mt-auto">
                          <div className="relative w-10 h-10 rounded-full overflow-hidden bg-gray-200">
                            <Image
                              src={testimonial.image}
                              alt={`${testimonial.name}'s profile`}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <p className="font-semibold text-sm">
                              {testimonial.name}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {testimonial.role}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </Marquee>
      </div>
    </section>
  );
}
