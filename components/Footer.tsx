"use client";

// No Lucide imports needed for socials

export default function Footer() {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-background border-t border-white/5 py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          
          {/* Logo & Info */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="flex items-center"
            >
              <img
                src="/nexora_logo.png"
                alt="Nexora Icon"
                className="h-8 w-auto object-contain"
              />
            </a>
            <p className="text-sm text-muted max-w-sm mt-2 leading-relaxed">
              Design. Build. Automate. Premium digital experiences engineered for growth.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">Quick Links</h4>
            <div className="flex flex-col gap-3">
              <a
                href="#services"
                onClick={(e) => handleScrollTo(e, "#services")}
                className="text-sm text-muted hover:text-white transition-colors duration-300 w-fit"
              >
                Services
              </a>
              <a
                href="#work"
                onClick={(e) => handleScrollTo(e, "#work")}
                className="text-sm text-muted hover:text-white transition-colors duration-300 w-fit"
              >
                Work
              </a>
              <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, "#contact")}
                className="text-sm text-muted hover:text-white transition-colors duration-300 w-fit"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-5 flex flex-col gap-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">Contact Info</h4>
            <p className="text-sm text-muted">
              📞 +91 96998 65990 <span className="mx-2 text-white/5">|</span> 📞 +91 97307 93157
            </p>
            <p className="text-sm text-muted">
              📧 <a href="mailto:Dropxloop@gmail.com" className="hover:text-white transition-colors duration-300">Dropxloop@gmail.com</a>
            </p>
            <p className="text-sm text-muted mt-2">
              📍 Maharashtra, India
            </p>
          </div>

        </div>

        {/* Divider & Copyright */}
        <div className="mt-12 md:mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-xs text-muted">
            &copy; 2025 Nexora Digital Agency | <a href="https://nexora.in" className="hover:text-white transition-colors duration-300">nexora.in</a>
          </p>

          <p className="text-xs text-muted flex items-center gap-1">
            Made with <span className="text-red-500">&hearts;</span> in India
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/buildwithnexora?igsh=MXR4Y21jd2I3eG4zdQ==&utm_source=ig_contact_invite"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-white transition-colors duration-300"
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
              className="text-muted hover:text-white transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <svg className="h-4 w-4 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a
              href="https://github.com/dropxloop"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-white transition-colors duration-300"
              aria-label="GitHub"
            >
              <svg className="h-4 w-4 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
