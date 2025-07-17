'use client';
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Play, ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { useIsMobile } from "@/hooks/use-mobile";

gsap.registerPlugin(ScrollTrigger);

export function LandingHero() {
  const container = useRef<HTMLDivElement>(null);
  const bg = useRef<HTMLDivElement>(null);
  const text = useRef<HTMLDivElement>(null);
  const scrollCue = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  useGSAP(() => {
    const ctx = gsap.context(() => {
      // Fade-in for the heading/text
      gsap.fromTo(
        text.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 2, delay: 0.5, ease: "power2.out" }
      );

      // Scroll-triggered timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: isMobile ? "+=200" : "+=500",
          scrub: 1.5,
          anticipatePin: 1,
        },
      });
      tl.fromTo(bg.current, { scale: 1 }, { scale: 1.05, ease: "none" });
      tl.to(
        text.current,
        { y: -50, opacity: 0.5, duration: 2, ease: "power2.out", },
        0
      );

      // Scroll cue animation
      gsap.to(scrollCue.current, {
        y: 10,
        duration: 1.2,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
      });
    }, container);

    return () => {
      ScrollTrigger.getAll()
        .filter(st => st.trigger === container.current)
        .forEach(st => st.kill());
      ctx.revert();
    };
  }, { scope: container });

  return (
    <section
      ref={container}
      className="relative w-full h-screen overflow-hidden"
    >
      <div ref={bg} className="absolute inset-0 transform-gpu">
        <Image
          src={isMobile ? "/mobileHero.jpg" : "/desktopHero.jpg"}
          alt="Coquina kitchen assistant"
          fill
          className="object-cover brightness-90"
          priority
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/40 to-transparent" />
      <div className="absolute top-32 flex items-center px-6 sm:px-10 lg:px-20">
        <div ref={text} className="space-y-6 max-w-xl text-white transform-gpu">
          <Badge className="bg-cta text-white px-4 py-1.5 rounded-full shadow-md">
            AI‑Powered Kitchen Assistant
          </Badge>
          <h1 className="text-5xl font-bold">Cook Smarter, Live Better</h1>
          <p className="text-xl leading-relaxed text-white/90">
            Effortless cooking powered by AI. <strong>Track your ingredients.</strong> Discover real‑time recipes. <strong>Master your meals—without the mess.</strong>
          </p>
          <div className="flex gap-6 pt-6">
            <Button className="bg-cta text-white rounded-full px-6 py-3">
              Start Free Trial <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="outline" className="border-white text-orange-500 rounded-full px-6 py-3">
              <Play className="w-5 h-5 mr-2" /> Watch Demo
            </Button>
          </div>
        </div>
      </div>
      <div ref={scrollCue} className="absolute bottom-20 left-1/2 -translate-x-1/2 opacity-70 text-white transform-gpu">
        <ChevronDown className="w-6 h-6" />
      </div>
    </section>
  );
}
