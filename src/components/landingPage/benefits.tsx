'use client';
import React from "react";

export function WhyChooseUs() {
  const benefits = [
    { title: "Zero Waste", desc: "AI minimizes waste by tracking ingredients precisely." },
    { title: "Personalized Meals", desc: "Custom recipes based on your tastes and life." },
    { title: "Smart Nutrition", desc: "Health‑focused guidance from AI and experts." },
    { title: "Time Saver", desc: "Instant meal plans to simplify your routine." }
  ];

  return (
    <section
      id="why-choose-us"
      className="py-16 bg-gradient-to-b from-coquina-start to-coquina-end dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-6 space-y-8">
        <div className="text-center mx-auto max-w-xl">
          <h2 className="text-4xl md:text-5xl font-extrabold">
            Why Home Cooks Trust Coquina
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            From waste reduction to wellness, Coquina blends AI with cooking to
            transform your kitchen.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-4 md:grid-rows-3 auto-rows-min">
          {/* Large hero block (2×2) */}
          <div className="bg-white/90 dark:bg-gray-800/90 rounded-2xl p-8 md:col-span-2 md:row-span-2">
            <h3 className="text-xl font-semibold">{benefits[0].title}</h3>
            <p className="mt-3 text-gray-600 dark:text-gray-400">{benefits[0].desc}</p>
          </div>
          {/* Vertical block spanning 2 rows */}
          <div className="bg-white/90 dark:bg-gray-800/90 rounded-2xl p-8 md:row-span-2">
            <h3 className="text-xl font-semibold">{benefits[1].title}</h3>
            <p className="mt-3 text-gray-600 dark:text-gray-400">{benefits[1].desc}</p>
          </div>
          {/* CTA block full width on mobile, 1 column on desktop */}
          <div className="bg-orange-50/40 rounded-2xl p-8 flex flex-col justify-center items-center">
            <p className="text-lg font-medium mb-4">Trusted by thousands of home cooks</p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full">
              Discover the Difference →
            </button>
          </div>
          {/* Overlap style block—use z-index for layering */}
          <div className="bg-white/90 dark:bg-gray-800/90 rounded-2xl p-8 md:mt-[-4rem] z-10">
            <h3 className="text-xl font-semibold">{benefits[2].title}</h3>
            <p className="mt-3 text-gray-600 dark:text-gray-400">{benefits[2].desc}</p>
          </div>
          {/* Small supporting block */}
          <div className="bg-white/90 dark:bg-gray-800/90 rounded-2xl p-8">
            <h3 className="text-xl font-semibold">{benefits[3].title}</h3>
            <p className="mt-3 text-gray-600 dark:text-gray-400">{benefits[3].desc}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
