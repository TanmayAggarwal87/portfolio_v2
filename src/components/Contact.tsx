"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="relative py-32 px-6 md:px-12 bg-[#0D0D0D] overflow-hidden">

            {/* Decorative large background text mapping */}
            <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-bold text-white/5 whitespace-nowrap select-none pointer-events-none tracking-tighter mix-blend-screen">
                Let&apos;s Connect Let&apos;s Connect
            </h1>

            <div className="max-w-6xl mx-auto flex flex-col items-center justify-center text-center gap-12 relative z-10">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-lg text-neutral-400 font-mono tracking-widest uppercase"
                >
                    Let&apos;s build something cool together!
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    <a href="mailto:tanmayagg.2005@gmail.com" className="group text-[12vw] sm:text-6xl md:text-8xl font-bold tracking-tighter text-white hover:text-neutral-300 transition-colors flex flex-wrap items-center justify-center gap-2 md:gap-4">
                        <span className="text-center">Get in touch</span>
                        <ArrowUpRight className="w-10 h-10 sm:w-12 sm:h-12 md:w-20 md:h-20 opacity-0 -translate-x-4 translate-y-4 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 shrink-0" />
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4 md:gap-16 mt-12 md:mt-16 text-base sm:text-lg md:text-xl font-medium text-neutral-300"
                >
                    <Link href="/Resume.pdf" target="_blank" className="hover:text-white transition-colors underline decoration-neutral-600 underline-offset-4 decoration-2">View Resume</Link>
                    <Link href="https://twitter.com/gernnonimo" target="_blank" className="hover:text-white transition-colors">Twitter (X)</Link>
                    <Link href="https://www.linkedin.com/in/tanmay-aggarwal-2aa95632a/" target="_blank" className="hover:text-white transition-colors">LinkedIn</Link>
                    <Link href="https://github.com/TanmayAggarwal87" target="_blank" className="hover:text-white transition-colors">GitHub</Link>
                </motion.div>
            </div>

            {/* Footer Bottom Line */}
            <div className="max-w-6xl mx-auto mt-24 md:mt-32 pt-8 border-t border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-500 font-mono relative z-10">
                <p className="text-center md:text-left">© 2026 Tanmay Aggarwal. All rights reserved.</p>

            </div>
        </section>
    );
}
