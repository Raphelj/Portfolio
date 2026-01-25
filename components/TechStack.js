"use client";

import { motion } from "framer-motion";

const skills = [
    { name: "JavaScript", category: "Frontend" },
    { name: "React / Next.js", category: "Frontend" },
    { name: "Tailwind CSS", category: "Frontend" },
    { name: "Node.js", category: "Backend" },
    // Add more from resume
];

export default function TechStack() {
    return (
        <div id="tech-stack" className="w-full py-20 px-4 md:px-20 bg-black text-white">
            <h2 className="text-4xl md:text-6xl font-bold mb-12 tracking-tight">
                Technological <br /> Arsenal
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {skills.map((skill, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="p-6 border border-white/10 rounded-lg bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors"
                    >
                        <p className="text-sm text-white/50 mb-2">{skill.category}</p>
                        <h3 className="text-xl font-bold">{skill.name}</h3>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
