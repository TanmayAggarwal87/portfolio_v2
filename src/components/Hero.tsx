"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-24 pb-12 overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="max-w-6xl mx-auto w-full flex flex-col gap-6 md:gap-12"
      >
        {/* Top Profile Intro */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6"
        >
          <div className="w-16 h-16 rounded-full bg-neutral-800 overflow-hidden shrink-0">
            {/* Placeholder for Profile Image */}
            <div className="w-full h-full bg-neutral-700" />
          </div>
          <p className="text-lg md:text-xl text-neutral-400 max-w-2xl font-medium leading-relaxed">
            I&apos;m a full-stack developer with hands-on experience in web and
            mobile development. Currently diving deeper into full-stack
            architectures, advanced backend patterns, and building real-time,
            scalable applications using Next.js, React Native, and modern
            backend stacks.
          </p>
        </motion.div>

        
        <motion.div
          variants={itemVariants}
          className="w-full relative h-36 md:h-40 mt-8 mb-4"
        >
          <img
            src="/backdrop.avif"
            alt="backdrop"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Massive Headline */}
        <motion.div variants={itemVariants} className="flex flex-col gap-2">
          <h1 className="text-3xl md:text-4xl lg:text-[7rem] font-bold tracking-tighter leading-[0.9] text-white">
            Software{" "}
            <span className="text-neutral-500 font-normal italic">and</span>
          </h1>
          <h1 className="text-3xl md:text-4xl lg:text-[7rem] font-bold tracking-tighter leading-[0.9] text-white">
            Full-Stack Engineer
          </h1>
        </motion.div>

        {/* Bottom Status Bar */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 mt-12 md:mt-24 text-sm font-mono text-neutral-400"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse relative">
              <div className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-75"></div>
            </div>
            OPEN TO WORK
          </div>
          <div className="hidden sm:block w-1 h-1 rounded-full bg-neutral-700"></div>
          <div>DELHI, INDIA</div>
          <div className="hidden sm:block w-1 h-1 rounded-full bg-neutral-700"></div>
          <div>IST (UTC+05:30)</div>
          <div className="hidden sm:block w-1 h-1 rounded-full bg-neutral-700"></div>
          <a
            href="/Resume.pdf"
            target="_blank"
            className="underline hover:text-white transition-colors"
          >
            VIEW RESUME
          </a>
        </motion.div>
      </motion.div>

     
    </section>
  );
}
