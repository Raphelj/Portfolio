"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const navItems = [
    { name: "Projects", href: "#projects" },
    { name: "Tech Stack", href: "#tech-stack" },
    { name: "Education", href: "#education" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
];

export default function Header() {
    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between bg-white/5 backdrop-blur-md border-b border-white/10 shadow-lg"
        >
            <div className="text-xl font-bold text-white tracking-tight">
                Raphel Johnson
            </div>

            <nav className="hidden md:flex gap-6">
                {navItems.map((item) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        className="text-sm font-bold text-white/70 hover:text-white transition-colors"
                    >
                        {item.name}
                    </Link>
                ))}
            </nav>

            {/* Mobile Menu Icon Placeholder (Optional for now) */}
            <div className="md:hidden text-white/70">
                Menu
            </div>
        </motion.header>
    );
}
