"use client";

import { motion } from "framer-motion";
import { Zap, HelpCircle, Layers, CheckCircle } from "lucide-react";

const tiles = [
  {
    title: "AI-First Approach",
    desc: "Every project we deliver includes smart AI layers: intelligent chatbots, predictive automation, and AI-optimized SEO content strategies.",
    icon: Zap,
  },
  {
    title: "Indian Market Expertise",
    desc: "We build native features tailored to Indian consumer behaviors: UPI checkout flows, WhatsApp Business alerts, and localized SEO setups.",
    icon: HelpCircle,
  },
  {
    title: "Free Mockup First",
    desc: "See a functional mockup of your homepage before signing any contract or paying a single rupee. Complete transparency with zero risk.",
    icon: CheckCircle,
  },
  {
    title: "End-to-End Delivery",
    desc: "We manage the entire lifecycle of your web assets: Wireframing -> Coding -> Performance Tuning -> Deployment -> Maintenance support.",
    icon: Layers,
  },
];

export default function WhyNexora() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const tileVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 80, damping: 15 },
    },
  };

  return (
    <section className="relative bg-[#111111]/70 py-24 md:py-32 border-t border-white/5 overflow-hidden">
      {/* Visual background element */}
      <div className="absolute top-1/2 left-1/3 -z-10 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/5 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-6 md:px-8">
        {/* Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl font-normal leading-tight text-white md:text-5xl">
            Why Businesses Choose Nexora
          </h2>
          <p className="mt-4 text-base text-muted md:text-lg">
            We merge design sophistication with engineering precision to deliver commercial outcomes that matter.
          </p>
        </div>

        {/* 2x2 Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:max-w-4xl lg:mx-auto"
        >
          {tiles.map((tile) => {
            const IconComponent = tile.icon;
            return (
              <motion.div
                key={tile.title}
                variants={tileVariants}
                className="group relative rounded-2xl bg-black/50 p-8 border border-white/5 hover:border-primary/25 transition-all duration-500 hover:shadow-glow"
              >
                {/* Visual outline highlight */}
                <div className="absolute top-0 right-0 h-8 w-8 rounded-tr-2xl border-t border-r border-primary/0 group-hover:border-primary/45 group-hover:h-12 group-hover:w-12 transition-all duration-500" />
                
                {/* Icon */}
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary-light group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <IconComponent className="h-5 w-5" />
                </div>

                {/* Title */}
                <h3 className="mt-5 text-xl font-bold text-white group-hover:text-primary-light transition-colors duration-300">
                  {tile.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm leading-relaxed text-muted group-hover:text-white/80 transition-colors duration-300">
                  {tile.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
