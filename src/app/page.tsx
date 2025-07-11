"use client"


import { LandingHero } from "@/components/landingPage/landingHero"
import { Features } from "@/components/landingPage/features"
import { Benefits } from "@/components/landingPage/benefits"
import { Testimonials } from "@/components/landingPage/testimonials"
import { PricingSection } from "@/components/landingPage/pricing"
import {Cta} from "@/components/cta"
import Footer from "@/components/footer"
import { Header } from "@/components/header"

export default function CulinaAILanding() {


  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <LandingHero />

      <Features />

      <Benefits />

      <Testimonials />

      <PricingSection />

      <Cta />

      <Footer />

    </div>
  )
}
