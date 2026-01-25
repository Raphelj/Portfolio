"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Overlay() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    // Intro: 0% - 20%
    const introOpacity = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 1, 0]);
    const introScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.2]);
    const introBlur = useTransform(scrollYProgress, [0, 0.2], ["0px", "10px"]);

    // Features: 30% - 60%
    const featuresOpacity = useTransform(scrollYProgress, [0.3, 0.4, 0.5, 0.6], [0, 1, 1, 0]);
    const featuresY = useTransform(scrollYProgress, [0.3, 0.6], ["50px", "-50px"]);

    // Hand-off: 70% - 90% (Before the end)
    const endingOpacity = useTransform(scrollYProgress, [0.7, 0.8, 0.9, 1], [0, 1, 1, 0]);

    return (
        <div ref={containerRef} className="relative z-10 w-full min-h-[500vh] pointer-events-none">
            {/* Scroll Text Layers - Fixed position, varying opacity */}

            {/* INTRO */}
            <motion.div
                style={{ opacity: introOpacity, scale: introScale, filter: `blur(${introBlur})` }}
                className="fixed inset-0 flex flex-col items-center justify-center text-center"
            >
                <h1 className="text-4xl md:text-8xl font-bold tracking-tighter text-white">
                    Raphel Johnson
                </h1>
                <p className="mt-4 text-lg md:text-xl font-mono text-white/70 tracking-wide">
                    Aspiring Software Developer
                </p>
            </motion.div>

            {/* FEATURES */}
            <motion.div
                style={{ opacity: featuresOpacity, y: featuresY }}
                className="fixed inset-0 flex flex-col items-end justify-center px-10 md:px-20 max-w-4xl mx-auto"
            >
                <h2 className="text-4xl md:text-7xl font-bold text-white mb-8">
                    Welcome
                </h2>
            </motion.div>

            {/* PROJECT TITLE / HANDOFF */}
            <motion.div
                style={{ opacity: endingOpacity }}
                className="fixed inset-0 flex flex-col items-center justify-center pt-[10vh]"
            >
                <h2 className="text-5xl md:text-8xl font-bold text-white tracking-tight">
                    To My Portfolio
                </h2>
            </motion.div>
        </div>
    );
}
