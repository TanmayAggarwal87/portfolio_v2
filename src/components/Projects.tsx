"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Mentora",
    category: " AI-Powered Personalized Learning Platform",
    year: "2026",
    image: "/mentora.PNG", // Placeholder for actual image
    url: "https://tanmayaggarwal87.github.io/mentora/",
  },
  {
    id: 2,
    title: "Nexis",
    category: "QR-Based P2P File Sharing App",
    year: "2025",
    image: "/Nexis.png", // Placeholder for actual image
    url: "https://nexis-share.netlify.app/",
  },
  {
    id: 3,
    title: "LumaLife",
    category: "AI-powered lifestyle coaching app",
    year: "2025",
    image: "/lumalife.png", // Placeholder for actual image
    url: "https://github.com/TanmayAggarwal87/LumaLife",
  },
];

export default function Projects() {
  return (
    <section id="work" className="py-24 px-6 md:px-12 bg-[#0D0D0D]">
      <div className="max-w-6xl mx-auto flex flex-col gap-12 sm:gap-24 relative pb-[10vh]">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
            className="sticky bg-[#0D0D0D] py-8 sm:py-12 group flex flex-col md:flex-row items-center gap-12 md:gap-24 rounded-3xl border border-neutral-900/50 shadow-2xl"
            style={{ top: `calc(10vh + ${index * 40}px)`, zIndex: index + 10 }}
          >
            {/* Left side text */}
            <div className="w-full md:w-1/2 flex flex-col gap-6 md:gap-12 order-2 md:order-1 px-8 sm:px-12">
              <div className="flex items-center gap-4 text-s font-mono text-neutral-400">
                <span>0{index + 1}</span>
                <span className="w-8 h-px bg-neutral-700"></span>
                <span>{project.category}</span>
              </div>

              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white group-hover:text-neutral-300 transition-colors">
                {project.title}
              </h2>
              <a href={`${project.url}`} target="_blank">
                <button className="flex cursor-pointer items-center gap-2 w-max px-6 py-3 rounded-full bg-neutral-900 border border-neutral-800 text-sm font-medium text-white hover:bg-white hover:text-black transition-all">
                  View Project
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </a>
            </div>

            {/* Right side Image / Mockup */}
            <div className="w-full md:w-1/2 order-1 md:order-2 px-8 sm:px-12">
              <motion.div
                whileHover={{ scale: 1.02, rotate: -1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={`w-full aspect-4/3 rounded-2xl relative overflow-hidden ring-1 ring-white/10`}
              >
                <Image
                  alt={`${project.title}`}
                  src={`${project.image}`}
                  fill
                  className="object-cover rounded-xl"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority
                  draggable={false}
                  onDragStart={(e) => e.preventDefault()}
                />
                {/* Decorative overlay to simulate mockup glass/glare */}
                <div className="absolute inset-0 bg-linear-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
