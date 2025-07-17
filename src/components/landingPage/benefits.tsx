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
      className="py-20 bg-gradient-to-b from-coquina-start to-coquina-end dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold">
            Why Home Cooks Trust Coquina
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Reduce waste, save time, and eat smarter with AI-powered precision built for everyday kitchens.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 auto-rows-[minmax(180px,_auto)]">
          {/* Hero Card */}
          <div className="bg-orange-100/70 dark:bg-orange-500/20 rounded-2xl p-10 shadow-md hover:shadow-lg transition
                          flex flex-col justify-center items-center
                          md:col-span-3 md:row-span-2">
            <p className="text-2xl font-semibold mb-4 text-orange-900 dark:text-orange-100 text-center">
              Trusted by thousands of home cooks
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full transition">
              Discover the Difference →
            </button>
          </div>

          {/* Benefit Cards */}
          {benefits.map((benefit, i) => (
            <div
              key={i}
              className={`
                bg-white/90 dark:bg-gray-800/90 rounded-2xl p-6 shadow-md hover:shadow-lg transition
                ${i === 0 ? 'md:col-span-3' : 'md:col-span-2'}
              `}
            >
              <h3 className="text-xl font-semibold">{benefit.title}</h3>
              <p className="mt-3 text-gray-600 dark:text-gray-400">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
