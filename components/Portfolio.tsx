"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "SplitPe",
    tags: ["FastAPI", "Docker", "Streamlit"],
    desc: "UPI-based bill splitting app solving the real Indian problem of group payments via GPay/PhonePe/Paytm. Integrated deep links for seamless instant payments.",
    github: "https://github.com/dropxloop/SplitPe", // Placeholder GitHub repo link
    bgGradient: "from-purple-900/60 to-violet-950/60",
    svgPattern: (
      <svg className="absolute inset-0 h-full w-full opacity-20" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="splitpe-grid" width="30" height="30" patternUnits="userSpaceOnUse">
            <circle cx="15" cy="15" r="1.5" fill="#a855f7" />
            <path d="M0 15h30M15 0v30" stroke="#7c3aed" strokeWidth="0.5" strokeDasharray="2 4" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#splitpe-grid)" />
      </svg>
    ),
  },
  {
    title: "RoomFinder",
    tags: ["FastAPI", "MongoDB", "Leaflet.js"],
    desc: "Hyperlocal no-brokerage room rental platform for Indian students and workers. Features interactive local mapping and a unique scratch-card mechanic to reveal owner contacts.",
    github: "https://github.com/dropxloop/RoomFinder", // Placeholder GitHub repo link
    bgGradient: "from-violet-950/60 to-fuchsia-950/60",
    svgPattern: (
      <svg className="absolute inset-0 h-full w-full opacity-20" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="roomfinder-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M0 40L40 0M0 0l40 40" stroke="#a855f7" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#roomfinder-grid)" />
      </svg>
    ),
  },
  {
    title: "Sourciify",
    tags: ["Next.js", "Supabase", "Architecture"],
    desc: "Shopify-style B2B eCommerce platform. Includes comprehensive system architecture diagrams, dev roadmap, costing spreadsheets, and Indian growth projections.",
    github: "https://github.com/dropxloop/Sourciify", // Placeholder GitHub repo link
    bgGradient: "from-fuchsia-950/60 to-purple-900/60",
    svgPattern: (
      <svg className="absolute inset-0 h-full w-full opacity-20" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="sourciify-circles" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="20" cy="20" r="10" stroke="#7c3aed" strokeWidth="0.5" fill="none" />
            <circle cx="20" cy="20" r="16" stroke="#a855f7" strokeWidth="0.5" strokeDasharray="3 3" fill="none" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#sourciify-circles)" />
      </svg>
    ),
  },
];

export default function Portfolio() {
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
    <section id="work" className="relative bg-background py-24 md:py-32 border-t border-white/5">
      <div className="absolute top-0 right-0 -z-10 h-[400px] w-[400px] rounded-full bg-accent/5 blur-[100px]" />

      <div className="mx-auto max-w-7xl px-6 md:px-8">
        {/* Header */}
        <div className="text-center md:text-left mb-16 md:mb-24 max-w-3xl flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="font-serif text-4xl font-normal leading-tight text-white md:text-5xl">
              Our Work
            </h2>
            <p className="mt-4 text-base text-muted md:text-lg">
              Check out some of our recent projects designed to solve real problems in the Indian ecosystem.
            </p>
          </div>
        </div>

        {/* 3-Column Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              className="group relative flex flex-col overflow-hidden rounded-2xl bg-[#111111]/90 border border-white/5 transition-colors duration-500"
              whileHover={{ 
                scale: 1.02, 
                y: -5,
                borderColor: "rgba(168, 85, 247, 0.3)",
                boxShadow: "0 0 25px rgba(124, 58, 237, 0.25)"
              }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
            >
              {/* Graphic Placeholder Image (No stock photos) */}
              <div className={`relative h-52 w-full bg-gradient-to-br ${project.bgGradient} overflow-hidden border-b border-white/5 flex items-center justify-center`}>
                {project.svgPattern}
                {/* Floating Title on cover */}
                <div className="relative font-serif text-3xl font-bold tracking-wider text-white/40 group-hover:text-white group-hover:scale-105 transition-all duration-500">
                  {project.title.toUpperCase()}
                </div>
              </div>

              {/* Card Details */}
              <div className="flex flex-1 flex-col p-8">
                {/* Project Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded bg-primary/10 border border-primary/20 px-2 py-0.5 text-xs font-medium text-primary-light"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="mt-4 text-2xl font-bold text-white group-hover:text-primary-light transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm leading-relaxed text-muted flex-1 group-hover:text-white/80 transition-colors duration-300">
                  {project.desc}
                </p>

                {/* CTA Links */}
                <div className="mt-8 flex items-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-5 py-2 text-xs font-semibold uppercase tracking-wider text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                  >
                    <svg className="h-4 w-4 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg> GitHub
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-auto inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-primary group-hover:text-primary-light transition-colors duration-300"
                  >
                    View Project <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
