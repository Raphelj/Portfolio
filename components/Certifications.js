"use client";

import { motion } from "framer-motion";

const certs = [
    {
        title: "AWS Certified Cloud Practitioner",
        issuer: "Amazon Web Services",
        date: "2024",
        link: "#"
    },
    // Add more from resume
];

export default function Certifications() {
    return (
        <div id="certifications" className="w-full py-20 px-4 md:px-20 bg-black text-white border-t border-white/10">
            <h2 className="text-4xl md:text-6xl font-bold mb-12 tracking-tight">
                Certifications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certs.map((cert, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="p-8 border border-white/10 rounded-xl bg-gradient-to-br from-white/5 to-transparent hover:border-white/30 transition-all group"
                    >
                        <h3 className="text-xl font-bold leading-tight group-hover:text-cyan-400 transition-colors">{cert.title}</h3>
                        <p className="mt-2 text-white/60">{cert.issuer}</p>
                        <p className="mt-4 text-sm font-mono text-white/40">{cert.date}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
