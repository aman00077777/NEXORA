"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How long does it take to build a website?",
    answer: "Normally, standard business websites are delivered within 10-15 days. Custom web applications and complex SaaS MVP solutions take around 3 to 6 weeks depending on the project scope and features.",
  },
  {
    question: "Do we need to pay any advance amount?",
    answer: "Yes, we follow a standard 50% advance setup to initiate the design phase. Once the initial homepage mockup is approved, we proceed with development, and the remaining 50% is paid after final delivery and domain/hosting deployment.",
  },
  {
    question: "Can you redesign or upgrade my existing website?",
    answer: "Absolutely! We can redesign legacy or slow-loading websites and migrate them to a super-fast Next.js architecture, including modern UI layout modifications and AI chatbot integrations.",
  },
  {
    question: "Do you provide support after the website is delivered?",
    answer: "Yes, every package comes with 1 month of free post-launch support and performance tuning. After that, you can opt for our flexible monthly retainers to keep content updated, SEO optimized, and system backups managed.",
  },
  {
    question: "Can the payment be split into installments?",
    answer: "Yes. For larger projects like Premium Websites or custom SaaS developments, we offer a milestone-based payment structure split into 3 or 4 easy installments.",
  },
  {
    question: "What technology stack do you use?",
    answer: "We build all high-performance projects using Next.js (React), Node.js, and Tailwind CSS for the frontend/backend. For AI chatbots and automation setups, we use Google Gemini API, n8n, and custom Python integrations.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (idx: number) => {
    setActiveIndex(activeIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="relative bg-background py-24 md:py-32 border-t border-white/5 overflow-hidden">
      {/* Decorative radial orb */}
      <div className="absolute bottom-0 right-10 -z-10 h-[350px] w-[350px] rounded-full bg-primary/5 blur-[100px]" />

      <div className="mx-auto max-w-4xl px-6 md:px-8">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="font-serif text-4xl font-normal leading-tight text-white md:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base text-muted md:text-lg">
            Got questions? We have answers. Clear all your doubts about our design and development workflow.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = activeIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border bg-[#111111]/70 transition-all duration-300 ${
                  isOpen
                    ? "border-primary/40 shadow-[0_0_20px_rgba(124,58,237,0.1)]"
                    : "border-white/5 hover:border-white/10"
                }`}
              >
                {/* Question Trigger */}
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="flex w-full items-center justify-between p-6 text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`text-base font-semibold transition-colors duration-300 ${
                      isOpen ? "text-primary-light" : "text-white"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    className={`shrink-0 ml-4 p-1 rounded-full ${
                      isOpen ? "text-primary-light bg-primary/10" : "text-muted bg-white/5"
                    }`}
                  >
                    <ChevronDown className="h-5 w-5" />
                  </motion.div>
                </button>

                {/* Answer Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-0 border-t border-white/5 mt-1 text-sm leading-relaxed text-muted/90">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
