"use client";

import { motion } from "framer-motion";

const educationData = [
    {
        degree: "Bachelor of Technology in Computer Science",
        school: "Muthoot Institute of Technology and Science",
        year: "2022 - 2026",
        description: "Computer Science Engineer"
    },
    // Add more from resume
];

export default function Education() {
    return (
        <div id="education" className="w-full py-20 px-4 md:px-20 bg-black text-white border-t border-white/10">
            <h2 className="text-4xl md:text-6xl font-bold mb-12 tracking-tight">
                Academic <br /> Foundation
            </h2>
            <div className="space-y-8 max-w-4xl">
                {educationData.map((edu, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="group relative pl-8 border-l border-white/20"
                    >
                        <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 bg-white rounded-full group-hover:scale-150 transition-transform" />
                        <h3 className="text-2xl font-bold">{edu.degree}</h3>
                        <p className="text-xl text-white/70 mt-1">{edu.school}</p>
                        <p className="text-sm text-white/40 mt-1 font-mono">{edu.year}</p>
                        <p className="mt-4 text-white/60 leading-relaxed max-w-2xl">{edu.description}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
