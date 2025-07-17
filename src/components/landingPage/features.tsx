'use client';

import Image from "next/image";
import { Scan, Utensils, Users, MessageCircle } from "lucide-react";
import { Card} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    title: "Smart Tracking",
    description: "Tracks ingredients in real time for zero waste and full control.",
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

  return (
    <section id="features" className="py-20 bg-[#f9f5f0] dark:bg-gray-900">
      {/* Heading */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <h2 className="features-heading text-5xl font-bold mb-4">
          Cook Smarter. Stand Out.
        </h2>
        <p className="max-w-2xl mb-16">Dynamic tools, reimagined—personalized for your kitchen style.</p>

        <div className="features-grid grid gap-6" style={{
          display: 'grid',
          gridTemplateAreas: `
            "cardA cardA cardB"
            "cardC cardD cardB"
          `,
          gridTemplateColumns: '2fr 2fr 1fr',
          gridAutoRows: 'minmax(200px, auto)'
        }}>
          {features.map((f, i) => (
            <div key={f.title}
                className={`feature-card group`}
                style={{
                  gridArea: i === 0 ? 'cardA'
                  : i === 1 ? 'cardB'
                  : i === 2 ? 'cardC'
                  : 'cardD'
                }}>
              <Card className="h-full overflow-hidden relative">
              </Card>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <Button size="lg" className="bg-cta px-6 py-3 rounded-full">Explore Features</Button>
        </div>
      </div>
    </section>
  );
}