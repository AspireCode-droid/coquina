'use client';

import { Trash2, UserCheck, Heart, Clock, ArrowRight } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion, Easing } from "framer-motion";
import { useInView } from "react-intersection-observer";

export function WhyChooseUs() {
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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const cardTransition = {
    duration: 0.6,
    ease: [0.25, 0.1, 0.25, 1] as Easing,
  };

  const benefits = [
    {
      title: "Zero Waste",
      description: "AI minimizes waste by tracking ingredients with precision.",
      icon: Trash2,
    },
    {
      title: "Hyper-Personalized",
      description: "Custom recipes tailored to your preferences and lifestyle.",
      icon: UserCheck,
    },
    {
      title: "Nutrition Smart",
      description: "Health-focused guidance from AI and culinary experts.",
      icon: Heart,
    },
    {
      title: "Time Saver",
      description: "Instant meal plans to simplify your cooking routine.",
      icon: Clock,
    },
  ];

  return (
    <section
      id="why-choose-us"
      className="py-16 bg-gradient-to-b from-coquina-start to-coquina-end dark:from-gray-900 dark:via-gray-900/95 dark:to-gray-800 relative overflow-hidden"
      style={{
        backgroundImage:
          "radial-gradient(circle at 10% 10%, rgba(255, 165, 0, 0.05) 0%, transparent 70%)",
        backgroundSize: "100% 100%",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-4xl lg:text-5xl font-bold tracking-tight mb-3 bg-gradient-to-r from-gray-900 via-orange-500 to-gray-900 bg-clip-text text-transparent dark:from-white dark:via-orange-500 dark:to-white"
          >
            Why Home Cooks Trust Coquina
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto leading-relaxed"
          >
            From waste reduction to wellness, Coquina blends AI with cooking to transform your kitchen into a smart, personalized experience.
          </motion.p>
        </div>

        {/* Animated Grid of Benefits */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
        >
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              variants={cardVariants}
              transition={{ ...cardTransition, delay: i * 0.15 }}
              className="group"
            >
              <Card className="bg-white/95 dark:bg-gray-800/95 border-0 rounded-2xl shadow-sm hover:shadow-[0_0_25px_-5px_rgba(255,165,0,0.3)] transition-all duration-300 h-full flex flex-col justify-between">
                <div>
                  <CardHeader className="text-center py-8">
                    <div className="flex justify-center mb-5">
                      <benefit.icon className="w-12 h-12 text-orange-500 group-hover:scale-105 transition-transform duration-300" />
                    </div>
                    <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">
                      {benefit.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center px-6 pb-8">
                    <p className="text-base text-gray-600 dark:text-gray-400 leading-snug">
                      {benefit.description}
                    </p>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <div className="text-center mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p className="text-md text-gray-600 dark:text-gray-400 mb-6">
              Trusted by <span className="font-bold text-orange-500">5,000+ home cooks</span> worldwide
            </p>
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-10 py-3 transition-all duration-300"
              onClick={() =>
                window.scrollTo({
                  top: document.getElementById("features")?.offsetTop || 0,
                  behavior: "smooth",
                })
              }
            >
              Discover the Coquina Difference <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
