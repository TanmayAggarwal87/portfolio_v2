"use client";

import { motion, useScroll, useTransform, useMotionValue, useAnimationFrame } from "framer-motion";
import { useRef, useState, useEffect } from "react";

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
        tools: ["MongoDB", "PostgreSQL", "Database Design", "Vercel", "Docker", "AWS"],
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
        tools: ["C","C++", "Python", "Java", "Typescript", "JavaScript"],
        bgColor: "bg-[#0D0D0D]",
    },
];

export default function Skills() {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-85%"]);

    return (
        <section ref={targetRef} className="relative h-[400vh] bg-[#0D0D0D]">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">

                {/* Fixed Left side title with background to hide scrolling items */}
                <div className="w-[45vw] md:w-1/3 h-full shrink-0 relative z-20 flex items-center bg-[#0D0D0D] px-6 md:px-12 border-r border-neutral-900 shadow-[20px_0_40px_-15px_rgba(0,0,0,0.8)]">
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

                {/* Increase padding so the items have room to scroll further left, pulling the final item more center */}
                <motion.div style={{ x }} className="flex pl-[10vw] pr-[20vw] md:pr-[10vw] items-stretch relative z-10 h-full py-24 md:py-32">
                    {skills.map((skill) => (
                        <SkillCard key={skill.id} skill={skill} />
                    ))}
                </motion.div>

            </div>
        </section>
    );
}

// Extracted Skill Component to handle per-card depth effect calculation
function SkillCard({ skill }: { skill: typeof skills[0] }) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [blur, setBlur] = useState(0);
    const [scale, setScale] = useState(1);
    const [opacity, setOpacity] = useState(1);

    useAnimationFrame(() => {
        if (!cardRef.current) return;

        const rect = cardRef.current.getBoundingClientRect();
        const cardCenter = rect.left + rect.width / 2;

        const focusPoint = window.innerWidth * 0.65;

        // Calculate raw distance from the focus point
        const distance = Math.abs(cardCenter - focusPoint);

        const safeZone = 200;

        const effectiveDistance = Math.max(0, distance - safeZone);

        const maxDist = 800;

        // Normalize 0 to 1 based on effective distance
        const normalizedDist = Math.min(effectiveDistance / maxDist, 1);
        const maxBlur = 10;
        setBlur(normalizedDist * maxBlur);

        const minScale = 0.85;
        setScale(1 - (1 - minScale) * normalizedDist);

        setOpacity(Math.max(1 - (normalizedDist * 0.5), 0.3));
    });

    return (
        <motion.div
            ref={cardRef}
            style={{
                scale,
                opacity,
                filter: `blur(${blur}px)`,
                transformOrigin: "center center"
            }}
            className={`flex flex-col gap-4 md:gap-6 shrink-0 w-[85vw] md:w-[600px] justify-center px-10 md:px-20 mx-2 md:mx-4 border border-neutral-800 rounded-3xl ${skill.bgColor}`}
        >
            <div className="flex items-center gap-4 text-sm font-mono text-neutral-500">
                <span>{skill.id}</span>
                <span className="w-8 md:w-12 h-[1px] bg-neutral-800"></span>
            </div>

            <h3 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-white/90 font-sans tracking-tight leading-tight shrink-0">{skill.title}</h3>

            <div className="flex flex-wrap gap-2 md:gap-3 mt-2 md:mt-4">
                {skill.tools.map((tool, i) => (
                    <span
                        key={i}
                        className="px-4 py-2 md:px-5 md:py-3 rounded-full border border-neutral-700 bg-neutral-900/50 text-sm md:text-base font-medium text-neutral-300 shadow-sm"
                    >
                        {tool}
                    </span>
                ))}
            </div>
        </motion.div>
    );
}
