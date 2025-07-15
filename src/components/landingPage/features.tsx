'use client';

import Image from "next/image";
import { Scan, Utensils, Users, MessageCircle } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const features = [
  {
    title: "Smart Tracking",
    description: "AI scans and tracks ingredients in real time for zero waste and full control.",
    icon: Scan,
    image: "/smartTracking.png",
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
];

export function Features() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="features" className="py-20 bg-[#f9f5f0] dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Everything You Need to Cook Smarter
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Discover the powerful tools that make your cooking smarter, healthier, and more intuitive.
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={cardVariants}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="group overflow-hidden border-0 pt-0 rounded-2xl"
            >
              <Card className="bg-white/90 dark:bg-gray-800/90 pt-0 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="relative h-48 w-full">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover rounded-t-2xl transition-transform duration-500 group-hover:scale-105"
                  />
                  <motion.div
                    className="absolute top-4 left-4 bg-white/90 dark:bg-black/70 backdrop-blur-md rounded-full p-3 shadow-md"
                    whileHover={{ scale: 1.15, rotate: 3 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <feature.icon className="w-6 h-6 text-orange-500" />
                  </motion.div>
                </div>
                <CardHeader className="text-center pt-4 px-4">
                  <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center px-4 pb-6">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button Below Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-14 text-center"
        >
          <Button size="lg" className="bg-cta hover:bg-cta/70 text-white rounded-full px-6 py-3">
            Explore Coquina Features
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
