'use client'

import { Play, ArrowRight, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { useIsMobile } from "@/hooks/use-mobile"
import { motion } from "framer-motion"

export function LandingHero() {
  const isMobile = useIsMobile()

  return (
    <section className="relative w-full h-screen overflow-hidden">

      {/* Background Image with Ambient Motion */}
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 1.05 }}
        transition={{ duration: 20, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" }}
        className="absolute inset-0"
      >
        <Image
          src={isMobile ? "/mobileHero.jpg" : "/desktopHero.jpg"}
          alt="Person using Coquina kitchen assistant"
          fill
          className="object-cover brightness-90"
          priority
        />
      </motion.div>

      {/* Gradient Overlay for Text Contrast */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/40 dark:from-black/80 dark:via-black/60 to-transparent" />

      {/* Content Block */}
      <div className="absolute inset-0 flex items-center justify-start px-6 sm:px-10 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left text-white space-y-6 max-w-[90%] md:max-w-xl"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <Badge className="bg-cta text-white px-4 py-1.5 rounded-full shadow-md">
              AI-Powered Kitchen Assistant
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight"
          >
            Cook Smarter, Live Better
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-md sm:text-xl leading-relaxed text-white/90"
          >
            Effortless cooking powered by AI. <strong>Track your ingredients.</strong> Discover real-time recipes. <strong>Master your meals—without the mess.</strong>
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-col sm:flex-row justify-start gap-6 pt-6 max-w-[14rem] sm:max-w-none"
          >
            <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring" }}>
              <Button
                size="lg"
                className="bg-cta hover:bg-cta/70 text-white rounded-full px-6 py-3"
              >
                Start Free Trial <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring" }}>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-cta hover:bg-white/10 hover:text-white rounded-full px-6 py-3"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Cue */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-20 left-1/2 -translate-x-1/2 text-white opacity-70"
      >
        <ChevronDown className="w-6 h-6 animate-bounce" />
      </motion.div>
    </section>
  )
}
