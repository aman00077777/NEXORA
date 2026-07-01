"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Rahul Mehta",
    role: "Owner, Mehta Electronics",
    content: "Nexora built our e-commerce site and integrated local payment gateways smoothly. Our sales have increased by 40% in just two months!",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Founder, FitLife Coaching",
    content: "The AI lead capturing bot Nexora integrated on our site has automated our booking process. It answers client queries day & night flawlessly!",
    rating: 5,
  },
  {
    name: "Aakash Joshi",
    role: "Director, Joshi Real Estate",
    content: "Outstanding team and superfast execution! They delivered our property listing platform within 3 weeks. Extremely responsive and highly recommended.",
    rating: 5,
  },
];

export default function Testimonials() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 70, damping: 15 },
    },
  };

  return (
    <section id="testimonials" className="relative bg-background py-24 md:py-32 border-t border-white/5 overflow-hidden">
      {/* Subtle backdrop glow */}
      <div className="absolute top-1/2 left-1/4 -z-10 h-[400px] w-[400px] rounded-full bg-primary/5 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-6 md:px-8">
        {/* Header */}
        <div className="text-center md:text-left mb-16 md:mb-24 max-w-3xl">
          <h2 className="font-serif text-4xl font-normal leading-tight text-white md:text-5xl">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-base text-muted md:text-lg">
            Hear from the business owners and founders who scaled their operations with Nexora.
          </p>
        </div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={cardVariants}
              className="relative rounded-2xl bg-white/[0.02] backdrop-blur-md p-8 border border-white/5 hover:border-primary/30 hover:bg-white/[0.04] transition-all duration-500 flex flex-col justify-between"
              whileHover={{ 
                scale: 1.02, 
                y: -5,
                boxShadow: "0 0 25px rgba(124, 58, 237, 0.15)"
              }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
            >
              {/* Card Accent Top Line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

              <div>
                {/* Top Info */}
                <div className="flex justify-between items-start mb-6">
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  {/* Quote Icon */}
                  <Quote className="h-8 w-8 text-primary/20 shrink-0" />
                </div>

                {/* Content */}
                <p className="text-sm leading-relaxed text-muted hover:text-white/95 transition-colors duration-300">
                  &ldquo;{t.content}&rdquo;
                </p>
              </div>

              {/* Client Info */}
              <div className="mt-8 pt-6 border-t border-white/5">
                <h4 className="text-base font-semibold text-white">{t.name}</h4>
                <p className="text-xs text-muted/80 mt-1">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
