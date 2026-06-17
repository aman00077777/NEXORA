"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Services", href: "#services" },
  { name: "Work", href: "#work" },
  { name: "Process", href: "#process" },
  { name: "Pricing", href: "#pricing" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? "bg-black/60 backdrop-blur-md border-b border-white/5 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-2.5 group"
          >
            <img
              src="/nexora_logo.png"
              alt="Nexora Icon"
              className="h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <span className="font-serif text-xl md:text-2xl font-normal tracking-[0.08em] uppercase bg-gradient-to-b from-white via-neutral-100 to-neutral-400 bg-clip-text text-transparent drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] select-none">
              Nexora
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="text-sm font-medium text-muted hover:text-white transition-colors duration-300 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, "#contact")}
              className="rounded-full bg-primary px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white shadow-glow hover:bg-primary-light hover:shadow-glow-lg transition-all duration-300"
            >
              Get a Free Mockup
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-1 hover:text-primary transition-colors duration-300"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-black/95 border-b border-white/5 backdrop-blur-lg overflow-hidden"
          >
            <div className="flex flex-col gap-6 px-6 py-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className="text-lg font-medium text-muted hover:text-white transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, "#contact")}
                className="inline-block text-center rounded-full bg-primary py-3 text-sm font-semibold uppercase tracking-wider text-white shadow-glow hover:bg-primary-light transition-all duration-300"
              >
                Get a Free Mockup
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
