"use client";

import { motion } from "framer-motion";
import { Globe, ShoppingBag, Layout, MessageSquare, Cpu, Palette } from "lucide-react";

const services = [
  {
    name: "Business Website",
    icon: Globe,
    price: "Rs.8,000 – Rs.35,000",
    desc: "Static or dynamic websites for shops, clinics, restaurants, coaches, and real estate agents. Mobile responsive, SEO-ready, and Google Maps integrated.",
  },
  {
    name: "E-Commerce Store",
    icon: ShoppingBag,
    price: "Rs.20,000 – Rs.60,000",
    desc: "Online stores for product-based businesses. Includes payment gateways (Razorpay/UPI), inventory, order management, and WhatsApp alerts.",
  },
  {
    name: "Web App / SaaS MVP",
    icon: Layout,
    price: "Rs.40,000 – Rs.1,50,000+",
    desc: "Custom web dashboards, booking systems, admin panels, custom CRM systems, and database-backed internal tools for your business operations.",
  },
  {
    name: "AI Chatbot",
    icon: MessageSquare,
    price: "Rs.10,000 – Rs.30,000",
    desc: "WhatsApp & website chatbots for lead capture, automated customer support, and FAQ automation. Powered by Google Gemini AI.",
  },
  {
    name: "AI Agents & Automation",
    icon: Cpu,
    price: "Rs.15,000 – Rs.75,000",
    desc: "Workflows on autopilot: automated lead routing, invoice generation, follow-up emails, and social media posting. Built using n8n + AI.",
  },
  {
    name: "Brand Identity & UI/UX",
    icon: Palette,
    price: "Rs.8,000 – Rs.25,000",
    desc: "Design guidelines, logo assets, curated color palettes, custom typography, and high-fidelity Figma UI mockups for your web products.",
  },
];

export default function Services() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 80, damping: 15 },
    },
  };

  return (
    <section id="services" className="relative bg-background py-24 md:py-32">
      {/* Decorative radial lighting */}
      <div className="absolute top-1/2 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-6 md:px-8">
        {/* Header */}
        <div className="text-center md:text-left mb-16 md:mb-24 max-w-3xl">
          <h2 className="font-serif text-4xl font-normal leading-tight text-white md:text-5xl">
            What We Build
          </h2>
          <p className="mt-4 text-base text-muted md:text-lg">
            High-converting websites, software systems, and AI automation tailored specifically for the Indian market.
          </p>
        </div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.name}
                variants={cardVariants}
                className="group relative rounded-2xl bg-[#111111]/80 p-8 border border-white/5 hover:border-primary/30 transition-all duration-500 hover:shadow-glow"
                whileHover={{ y: -5 }}
              >
                {/* Neon blur indicator top-left */}
                <div className="absolute top-0 left-0 h-10 w-10 rounded-tl-2xl border-t border-l border-primary/0 group-hover:border-primary/50 group-hover:h-16 group-hover:w-16 transition-all duration-500" />
                
                {/* Icon wrapper */}
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <IconComponent className="h-6 w-6" />
                </div>

                {/* Service Name */}
                <h3 className="mt-6 text-xl font-semibold text-white group-hover:text-primary-light transition-colors duration-300">
                  {service.name}
                </h3>

                {/* Pricing range badge */}
                <div className="mt-3 inline-block rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs font-medium text-accent">
                  {service.price}
                </div>

                {/* Description */}
                <p className="mt-4 text-sm leading-relaxed text-muted group-hover:text-white/80 transition-colors duration-300">
                  {service.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
