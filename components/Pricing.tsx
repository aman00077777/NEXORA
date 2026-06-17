"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Basic Website",
    price: "Rs.8,000",
    desc: "Perfect for local businesses, shops, and startups needing an online presence.",
    features: [
      "1 Page High-Converting Layout",
      "100% Mobile Responsive",
      "Direct WhatsApp Chat Integration",
      "Contact & Lead Capture Form",
      "Free Domain & Hosting Setup Support",
    ],
    popular: false,
    ctaText: "Start Basic Project",
  },
  {
    name: "Standard Website",
    price: "Rs.18,000",
    desc: "Ideal for growing service providers, clinics, restaurants, and coaches.",
    features: [
      "Up to 5 Custom Pages",
      "Premium Design System Integration",
      "Local SEO Optimization & Metadata",
      "Google Business Profile Setup",
      "Enhanced Animations & Load Speeds",
      "AI Copywriting Support",
    ],
    popular: true,
    ctaText: "Get Free Mockup First",
  },
  {
    name: "Premium Website",
    price: "Rs.35,000",
    desc: "For brands wanting to dominate search results and integrate custom features.",
    features: [
      "Unlimited Custom Pages",
      "Next.js Advanced Performance Core",
      "Full CMS/Blog Integration",
      "Interactive Dynamic UI Animations",
      "Advanced Search Console & Schema Setup",
      "1 Month Free Support & Optimization",
    ],
    popular: false,
    ctaText: "Hire For Premium Build",
  },
];

export default function Pricing() {
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

  const handleScrollTo = (e: React.MouseEvent<HTMLButtonElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="pricing" className="relative bg-background py-24 md:py-32 border-t border-white/5">
      {/* Background glow orb */}
      <div className="absolute top-1/3 right-10 -z-10 h-[400px] w-[400px] rounded-full bg-primary/5 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-6 md:px-8">
        {/* Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl font-normal leading-tight text-white md:text-5xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-base text-muted md:text-lg">
            High-value design and engineering at competitive pricing, structured specifically for the Indian market.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 items-stretch"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={cardVariants}
              className={`relative flex flex-col rounded-3xl bg-[#111111]/90 p-8 border ${
                plan.popular
                  ? "border-primary shadow-glow ring-1 ring-primary"
                  : "border-white/5"
              } hover:border-primary/40 transition-all duration-500`}
            >
              {/* Highlight Badge */}
              {plan.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-bold uppercase tracking-wider text-white">
                  Most Popular
                </span>
              )}

              {/* Package Meta */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed min-h-[40px]">{plan.desc}</p>
                <div className="mt-5 flex items-baseline">
                  <span className="text-4xl font-bold tracking-tight text-white">{plan.price}</span>
                  <span className="ml-1 text-sm font-medium text-muted">/one-time</span>
                </div>
              </div>

              {/* Feature List */}
              <ul className="space-y-4 mb-8 flex-1 border-t border-white/5 pt-6">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-muted">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="group-hover:text-white transition-colors duration-300">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Action Button */}
              <button
                onClick={(e) => handleScrollTo(e, "#contact")}
                className={`w-full rounded-full py-4 text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                  plan.popular
                    ? "bg-primary text-white shadow-glow hover:bg-primary-light hover:shadow-glow-lg"
                    : "bg-white/5 border border-white/10 text-white hover:bg-white/10"
                }`}
              >
                {plan.ctaText}
              </button>
            </motion.div>
          ))}
        </motion.div>

        {/* Retainer and Custom Box */}
        <div className="mt-16 flex flex-col items-center text-center gap-6">
          <p className="text-sm text-muted italic">
            * Custom pricing packages available for custom Web Applications, AI Agents, n8n automation flow integrations &amp; complex SaaS MVP solutions.
          </p>

          <motion.div
            className="w-full max-w-3xl rounded-2xl bg-gradient-to-r from-primary/10 to-accent/5 border border-primary/20 p-8 hover:border-primary/40 transition-all duration-500"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-left">
              <div>
                <h4 className="text-lg font-bold text-white">Monthly Retainer &amp; Support</h4>
                <p className="mt-2 text-sm text-muted max-w-xl">
                  Keep your digital assets secure, SEO rankings high, and content updated with custom AI support retainers.
                </p>
              </div>
              <div className="text-center sm:text-right shrink-0">
                <span className="text-xs uppercase tracking-wider text-primary-light font-semibold">Starts From</span>
                <div className="text-2xl font-bold text-white mt-1">Rs.5,000/month</div>
                <button
                  onClick={(e) => handleScrollTo(e, "#contact")}
                  className="mt-3 text-xs font-bold uppercase tracking-wider text-primary hover:text-primary-light transition-colors duration-300"
                >
                  Learn More &rarr;
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
