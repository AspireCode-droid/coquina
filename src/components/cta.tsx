'use client';

import { Check, ArrowRight, Shield, Clock, Heart } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

export function Cta() {
  return (
    <section className="py-20 bg-blue-600 text-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl lg:text-5xl font-bold mb-6"
        >
          Ready to Transform Your Kitchen with AI?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg text-blue-100 max-w-2xl mx-auto mb-10"
        >
          Join thousands of smart home cooks already saving time, reducing waste, and enjoying meals like never before.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
        >
          <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-100 font-semibold rounded-full px-8 py-3">
            Start Free Trial
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-cta hover:bg-white hover:text-blue-600 rounded-full px-8 py-3"
          >
            Contact Sales
          </Button>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6 text-sm text-blue-100">
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4" />
            14-day free trial
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4" />
            No credit card required
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4" />
            Cancel anytime
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
          {[
            {
              icon: <Shield className="w-6 h-6 text-white" />,
              title: "Private & Secure",
              desc: "Bank-grade data encryption & privacy protection.",
              bg: "bg-white/10",
            },
            {
              icon: <Clock className="w-6 h-6 text-white" />,
              title: "No Lock-In",
              desc: "Flexible plans with no contracts or long-term commitments.",
              bg: "bg-white/10",
            },
            {
              icon: <Heart className="w-6 h-6 text-white" />,
              title: "Money-Back Guarantee",
              desc: "100% satisfaction or your money back within 30 days.",
              bg: "bg-white/10",
            },
          ].map((item, i) => (
            <div
              key={i}
              className={`p-6 rounded-xl text-left ${item.bg} backdrop-blur-md transition-transform hover:scale-105 duration-300`}
            >
              <div className="flex items-center mb-4">{item.icon}</div>
              <h4 className="font-semibold mb-1">{item.title}</h4>
              <p className="text-sm text-blue-100/90">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
