import Image from "next/image";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Scan, Utensils, Users, MessageCircle } from "lucide-react";

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
    <section className="px-4 py-12 md:px-6 lg:px-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <div
            key={f.title}
            className={`
              ${i === 0 ? "md:col-span-2" : ""}
              ${i === 1 ? "md:col-span-1" : ""}
              ${i === 2 ? "md:col-span-1" : ""}
              ${i === 3 ? "md:col-span-2" : ""}
            `}
          >
            <Card className="relative group overflow-hidden h-full">
              <CardHeader className="flex items-center gap-2 pb-2">
                <f.icon className="w-5 h-5 text-primary" />
                <CardTitle className="text-lg font-semibold">{f.title}</CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">{f.description}</p>

                <div className="relative w-full h-40 rounded-lg overflow-hidden">
                  <Image
                    src={f.image}
                    alt={f.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="relative transition-opacity duration-300 pt-2">
                  <Button variant="ghost" className="text-sm px-2 bg-coquina-start text-orange-600">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>

  );
}
