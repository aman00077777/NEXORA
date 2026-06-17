"use client";

import { motion } from "framer-motion";
import { PhoneCall, Edit3, Code, Activity } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Discovery Call",
    desc: "We jump on a brief call to understand your business, target audience, technical requirements, and strategic goals.",
    icon: PhoneCall,
  },
  {
    step: "02",
    title: "Free Mockup",
    desc: "We design and share a functional home-page mockup draft. You get to see the custom design first before paying a single rupee.",
    icon: Edit3,
  },
  {
    step: "03",
    title: "Build & Deliver",
    desc: "We clean code the design using modern tools (Next.js, Tailwind), integrate backend systems, connect analytics, and deploy to production.",
    icon: Code,
  },
  {
    step: "04",
    title: "Ongoing Support",
    desc: "We maintain your website, optimize Core Web Vitals, implement security measures, and upgrade AI capabilities via monthly retainers.",
    icon: Activity,
  },
];

export default function Process() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const stepVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 85, damping: 15 },
    },
  };

  return (
    <section id="process" className="relative bg-background py-24 md:py-32 border-t border-white/5 overflow-hidden">
      {/* Decorative blurred dot */}
      <div className="absolute top-1/2 left-10 -z-10 h-[300px] w-[300px] rounded-full bg-primary/5 blur-[100px]" />

      <div className="mx-auto max-w-7xl px-6 md:px-8">
        {/* Header */}
        <div className="text-center md:text-left mb-20 md:mb-28 max-w-3xl">
          <h2 className="font-serif text-4xl font-normal leading-tight text-white md:text-5xl">
            How We Work
          </h2>
          <p className="mt-4 text-base text-muted md:text-lg">
            Our transparent, zero-risk design and development process keeps you in control from start to finish.
          </p>
        </div>

        {/* Timeline container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4"
        >
          {/* Connecting dotted line (Desktop / Horizontal) */}
          <div className="absolute top-12 left-[10%] right-[10%] hidden h-[2px] bg-gradient-to-r from-primary/30 via-accent/30 to-primary/0 border-t border-dashed border-primary/40 lg:block -z-10" />

          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <motion.div
                key={step.step}
                variants={stepVariants}
                className="group relative flex flex-col items-center text-center lg:items-start lg:text-left"
              >
                {/* Step badge / icon wrapper */}
                <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-[#111111] border border-white/5 group-hover:border-primary/40 group-hover:shadow-glow transition-all duration-500">
                  {/* Number Badge */}
                  <span className="absolute -top-3 -right-3 flex h-7 w-7 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                    {step.step}
                  </span>
                  
                  {/* Icon */}
                  <IconComponent className="h-8 w-8 text-primary-light group-hover:text-white transition-colors duration-500" />
                </div>

                {/* Title */}
                <h3 className="mt-6 text-xl font-bold text-white group-hover:text-primary-light transition-colors duration-300">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm leading-relaxed text-muted group-hover:text-white/80 transition-colors duration-300">
                  {step.desc}
                </p>

                {/* Mobile line indicators */}
                {index < steps.length - 1 && (
                  <div className="mt-8 h-8 w-[2px] bg-dashed bg-gradient-to-b from-primary/40 to-transparent lg:hidden" />
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
