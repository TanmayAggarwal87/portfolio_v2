"use client";

import { motion } from "framer-motion";

const experiences = [
    {
        company: "Open Source Contributor",
        role: "GSSoC & SWoC",
        duration: "Jan 2025 - Present",
    },
    {
        company: "Maharaja Agarsen Institute of Technology",
        role: "B.Tech in CSE",
        duration: "2024 - 2028",
    }
];

export default function Experience() {
    return (
        <section id="about" className="py-24 px-6 md:px-12 bg-[#1A1A1A]">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24">

                {/* Left side massive text */}
                <div className="w-full md:w-1/2">
                    <motion.h2
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white leading-tight"
                    >
                        I build real-time collaborative apps and enjoy working on developer tools and scalable systems.
                    </motion.h2>
                </div>

                {/* Right side table layout */}
                <div className="w-full md:w-1/2 flex flex-col">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="border-b border-neutral-800 pb-4 mb-8 flex text-xs font-mono text-neutral-500"
                    >
                        <span className="w-1/3">Company</span>
                        <span className="w-1/3">Role</span>
                        <span className="w-1/3 text-right">Date</span>
                    </motion.div>

                    <div className="flex flex-col">
                        {experiences.map((exp, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="group flex flex-col md:flex-row border-b border-neutral-800 py-6 last:border-0 hover:border-white/20 transition-colors cursor-default gap-2 md:gap-0"
                            >
                                <div className="w-full md:w-1/3 text-xl font-semibold text-white group-hover:pl-2 transition-all">{exp.company}</div>
                                <div className="w-full md:w-1/3 text-neutral-400">{exp.role}</div>
                                <div className="w-full md:w-1/3 md:text-right font-mono text-sm text-neutral-500">{exp.duration}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
