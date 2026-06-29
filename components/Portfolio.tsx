"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "AttendAI",
    tags: ["React", "Python", "Face Recognition", "MongoDB"],
    desc: "An automated attendance system using AI-powered face recognition. Features a real-time dashboard for student registration, attendance tracking trends, and detailed reporting statistics.",
    github: "https://github.com/aman00077777/Attend_AI-Attendance_System",
    image: "/project-attendai.png",
  },
  {
    title: "CareFlow Portal",
    tags: ["Next.js", "Django", "PostgreSQL", "Tailwind"],
    desc: "A digital health record and patient management portal. Redefines hospital workflows with automated bookings, interactive patient timelines, and digital prescriptions.",
    github: "https://github.com/aman00077777/Patient-Appointment-Health-Record-System-CARE_FLOW-",
    image: "/project-careflow.png",
  },
  {
    title: "PCOS Tracker",
    tags: ["React", "Node.js", "MongoDB", "OAuth"],
    desc: "A hormonal health tracking and empowerment application. Features Google OAuth authentication, personalized health tracking dashboard, and secure medical data logging.",
    github: "https://github.com/aman00077777/PCOS_Tracker",
    image: "/project-pcos.png",
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
              {/* Graphic Screenshot Image */}
              <div className="relative h-52 w-full overflow-hidden border-b border-white/5 bg-[#111111] flex items-center justify-center">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
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

                {/* CTA Link Button */}
                <div className="mt-8">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-white/5 border border-white/10 py-3 text-xs font-semibold uppercase tracking-wider text-white hover:bg-primary hover:border-primary hover:text-white shadow-glow transition-all duration-300"
                  >
                    View Project <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
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
