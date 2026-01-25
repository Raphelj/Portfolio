"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

function ProjectCard({ title, category, year }) {
    const ref = useRef(null);

    // Mouse physics
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
    const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-15deg", "15deg"]);

    const handleMouseMove = (e) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            className="relative w-full h-[400px] rounded-xl border border-white/10 bg-white/5 backdrop-blur-[40px] overflow-hidden group cursor-pointer"
        >
            <div
                style={{ transform: "translateZ(50px)" }}
                className="absolute inset-0 flex flex-col justify-end p-8"
            >
                <div className="mb-2 text-white/40 text-sm font-mono uppercase tracking-wider">{category} — {year}</div>
                <h3 className="text-3xl font-bold text-white group-hover:text-white/90 transition-colors">{title}</h3>
            </div>

            {/* Light leakage effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </motion.div>
    );
}

export default function Projects() {
    return (
        <div id="projects" className="relative z-20 w-full min-h-screen flex flex-col items-center justify-center py-20 px-4 md:px-20 pointer-events-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
                <ProjectCard title="JusBuy E-Commerce Platform" year="2024" />
                <ProjectCard title="AI-Powered Career Platform" year="2025" />
                <ProjectCard title="To-Do List App" year="2025" />
            </div>
        </div>
    );
}
