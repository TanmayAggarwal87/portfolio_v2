"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const skills = [
    {
        id: "01",
        title: "Frontend",
        tools: ["React.js", "Next.js", "Tailwind CSS", "React Native", "NativeWind", "DaisyUI", "Shadcn/UI"],
        bgColor: "bg-[#0D0D0D]",
    },
    {
        id: "02",
        title: "Backend",
        tools: ["Node.js", "Express.js", "RESTful APIs", "Socket.IO", "OAuth 2.0"],
        bgColor: "bg-[#0D0D0D]",
    },
    {
        id: "03",
        title: "Database / Cloud",
        tools: ["MongoDB", "PostgreSQL", "Database Design", "Vercel", "Docker","AWS"],
        bgColor: "bg-[#0D0D0D]",
    },
    {
        id: "04",
        title: "ML / Blockchain",
        tools: ["Scikit-learn", "Pytorch", "TensorFlow", "Ethereum", "Solana", "Hardhat", "Wagmi"],
        bgColor: "bg-[#0D0D0D]",
    },
    {
        id: "05",
        title: "Languages",
        tools: ["C++", "Python", "Java", "Typescript", "JavaScript"],
        bgColor: "bg-[#0D0D0D]",
    },
];

export default function Skills() {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

    return (
        <section ref={targetRef} className="relative h-[300vh] bg-[#0D0D0D]">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden px-6 md:px-12">

                {/* Fixed Left side title */}
                <div className="w-[30vw] md:w-1/3 shrink-0 relative z-20 ">
                    <motion.h2
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white"
                    >
                        Skills <br />& Tools
                    </motion.h2>
                </div>

                {/* Horizontal scrolling skill boxes */}
                <motion.div style={{ x }} className="flex pl-[20vw] items-stretch relative z-10 h-full py-24">
                    {skills.map((skill) => (
                        <div
                            key={skill.id}
                            className={`flex flex-col gap-6 shrink-0 w-[80vw] md:w-[500px] justify-center px-12 md:px-16 border-l border-neutral-800 ${skill.bgColor}`}
                        >
                            <div className="flex items-center gap-4 text-sm font-mono text-neutral-500">
                                <span>{skill.id}</span>
                                <span className="w-12 h-[1px] bg-neutral-800"></span>
                            </div>

                            <h3 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white/90 font-sans tracking-tight leading-tight shrink-0">{skill.title}</h3>

                            <div className="flex flex-wrap gap-3 mt-4">
                                {skill.tools.map((tool, i) => (
                                    <span
                                        key={i}
                                        className="px-5 py-3 rounded-full border border-neutral-700 bg-neutral-900/50 text-base md:text-lg font-medium text-neutral-300 shadow-sm"
                                    >
                                        {tool}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}
