"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 md:py-6 mix-blend-difference"
        >
            <Link href="/" className="text-xl font-bold tracking-tight text-white">
                Tanmay Aggarwal
            </Link>

            <div className="flex items-center gap-6 text-sm font-medium text-white/80">
                <Link href="#work" className="hover:text-white transition-colors">Work</Link>
                <Link href="#about" className="hover:text-white transition-colors">About</Link>
                <Link href="#contact" className="hover:text-white transition-colors">Contact</Link>
            </div>
        </motion.nav>
    );
}
