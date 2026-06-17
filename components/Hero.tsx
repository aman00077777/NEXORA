"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 100, damping: 20 },
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
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background pt-20">
      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      {/* Floating Animated Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 -z-10 h-72 w-72 rounded-full bg-primary/20 blur-[100px] animate-orb-float" />
      <div className="absolute bottom-1/4 right-1/4 -z-10 h-96 w-96 rounded-full bg-accent/10 blur-[120px] animate-orb-float [animation-delay:4s]" />

      <div className="relative mx-auto max-w-5xl px-6 py-20 text-center md:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center justify-center"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="mb-6 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-light"
          >
            Nagpur&apos;s Premium AI & Web Studio
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="font-serif text-5xl font-normal leading-[1.1] tracking-tight text-white md:text-7xl lg:text-8xl"
          >
            We Build Digital
            <br />
            <span className="bg-gradient-to-r from-primary-light to-accent bg-clip-text text-transparent font-serif font-normal italic">
              Experiences
            </span>{" "}
            That Scale.
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="mt-8 max-w-2xl text-base text-muted md:text-lg lg:text-xl leading-relaxed"
          >
            AI-powered websites, web apps &amp; automation for Indian businesses —
            from Nagpur to the world.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <button
              onClick={(e) => handleScrollTo(e, "#work")}
              className="w-full sm:w-auto rounded-full bg-primary px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white shadow-glow hover:bg-primary-light hover:shadow-glow-lg transition-all duration-300"
            >
              See Our Work
            </button>
            <a
              href="https://wa.me/919699865990"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            >
              Book a Free Call
            </a>
          </motion.div>

          {/* Trust Stats divider */}
          <motion.div
            variants={itemVariants}
            className="w-full max-w-3xl mt-20 border-t border-white/5 pt-8"
          >
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/5 text-center">
              <div className="flex flex-col items-center justify-center px-4 py-2">
                <span className="text-3xl font-serif font-semibold text-white">10+</span>
                <span className="mt-1 text-xs uppercase tracking-widest text-muted">Projects Delivered</span>
              </div>
              <div className="flex flex-col items-center justify-center px-4 py-2">
                <span className="text-3xl font-serif font-semibold text-white">3+</span>
                <span className="mt-1 text-xs uppercase tracking-widest text-muted">Cities Served</span>
              </div>
              <div className="flex flex-col items-center justify-center px-4 py-2">
                <span className="text-3xl font-serif font-semibold text-white">100%</span>
                <span className="mt-1 text-xs uppercase tracking-widest text-muted">Client Satisfaction</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
