"use client";

import { useState } from "react";
import { Phone, Mail, MessageSquare } from "lucide-react";


export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    business: "",
    service: "Business Website",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct pre-filled message
    const intro = `Hi Nexora! I'm ${formData.name || "[Name]"}`;
    const businessStr = formData.business ? ` from ${formData.business}` : "";
    const interest = `. I'm interested in ${formData.service}.`;
    const note = formData.message ? ` Message: ${formData.message}` : "";
    
    const fullMessage = `${intro}${businessStr}${interest}${note}`;
    const encodedMessage = encodeURIComponent(fullMessage);
    
    // Redirect to WhatsApp
    const whatsappUrl = `https://wa.me/919699865990?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="relative bg-background py-24 md:py-32 border-t border-white/5 overflow-hidden">
      {/* Subtle purple gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/10 blur-[150px]" />

      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          
          {/* Text & Contact Details */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <h2 className="font-serif text-4xl font-normal leading-tight text-white md:text-5xl">
              Ready to Build Something Great?
            </h2>
            <p className="mt-4 text-base text-muted md:text-lg">
              Let&apos;s talk about your project. Claim your free homepage design mockup with zero commitments.
            </p>

            {/* Direct Contact List */}
            <div className="mt-12 space-y-6">
              <div className="flex items-center gap-4 text-muted hover:text-white transition-colors duration-300">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#111] border border-white/5">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-muted/60 font-semibold block">Call Us</span>
                  <a href="tel:+919699865990" className="text-sm md:text-base font-semibold">+91 96998 65990</a>
                  <span className="mx-2 text-muted/30">|</span>
                  <a href="tel:+919730793157" className="text-sm md:text-base font-semibold">+91 97307 93157</a>
                </div>
              </div>

              <div className="flex items-center gap-4 text-muted hover:text-white transition-colors duration-300">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#111] border border-white/5">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-muted/60 font-semibold block">Email Us</span>
                  <a href="mailto:Dropxloop@gmail.com" className="text-sm md:text-base font-semibold">Dropxloop@gmail.com</a>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA Link */}
            <div className="mt-10">
              <a
                href="https://wa.me/919699865990"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full bg-[#25D366] px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white shadow-[0_4px_15px_rgba(37,211,102,0.3)] hover:bg-[#20ba5a] transition-all duration-300"
              >
                Chat on WhatsApp <MessageSquare className="h-4 w-4 fill-current" />
              </a>
            </div>

            {/* Social handles */}
            <div className="mt-10 flex items-center gap-4">
              <a
                href="https://www.instagram.com/buildwithnexora?igsh=MXR4Y21jd2I3eG4zdQ==&utm_source=ig_contact_invite"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 text-muted hover:text-white hover:border-white/20 transition-all duration-300"
                aria-label="Instagram"
              >
                <svg className="h-4 w-4 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 text-muted hover:text-white hover:border-white/20 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <svg className="h-4 w-4 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>

          {/* Contact Form card */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-[#111111]/90 p-8 md:p-10 border border-white/5 shadow-2xl relative">
              <h3 className="text-xl font-bold text-white mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-muted mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Rahul Sharma"
                      required
                      className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3.5 text-sm text-white placeholder-muted/40 focus:border-primary focus:outline-none transition-colors duration-300"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="business" className="block text-xs font-semibold uppercase tracking-wider text-muted mb-2">
                      Business Name
                    </label>
                    <input
                      type="text"
                      id="business"
                      name="business"
                      value={formData.business}
                      onChange={handleInputChange}
                      placeholder="e.g. Nexora Sweets"
                      className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3.5 text-sm text-white placeholder-muted/40 focus:border-primary focus:outline-none transition-colors duration-300"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-xs font-semibold uppercase tracking-wider text-muted mb-2">
                    Service Needed
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full rounded-xl bg-[#181818] border border-white/10 px-4 py-3.5 text-sm text-white focus:border-primary focus:outline-none transition-colors duration-300"
                  >
                    <option value="Business Website">Business Website</option>
                    <option value="E-Commerce Store">E-Commerce Store</option>
                    <option value="Web App / SaaS MVP">Web App / SaaS MVP</option>
                    <option value="AI Chatbot">AI Chatbot</option>
                    <option value="AI Agents & Automation">AI Agents &amp; Automation</option>
                    <option value="Brand Identity & UI/UX">Brand Identity &amp; UI/UX</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-muted mb-2">
                    Message / Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="Tell us about your project features, timeline, and goals..."
                    className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3.5 text-sm text-white placeholder-muted/40 focus:border-primary focus:outline-none transition-colors duration-300 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-primary py-4 text-xs font-semibold uppercase tracking-wider text-white shadow-glow hover:bg-primary-light transition-all duration-300"
                >
                  Send Inquiry via WhatsApp &rarr;
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
