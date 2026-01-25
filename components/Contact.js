"use client";

import { motion } from "framer-motion";

export default function Contact() {
    return (
        <div id="contact" className="w-full py-32 px-4 md:px-20 bg-black text-white border-t border-white/10 flex flex-col items-center justify-center text-center">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-8xl font-bold tracking-tighter mb-8"
            >
                Let's Connect
            </motion.h2>
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-white/60 max-w-lg mb-12"
            >
                Open for collaborations, opportunities, and discussions.
            </motion.p>

            <div className="flex flex-wrap gap-6 justify-center">
                <a
                    href="mailto:rapheljohnson.rap123@gmail.com"
                    className="px-8 py-4 rounded-full border border-white/20 bg-white/5 hover:bg-white hover:text-black transition-all font-medium text-lg"
                >
                    Email Me
                </a>
                <a
                    href="https://www.linkedin.com/in/raphel-johnson-0a50a9349"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 rounded-full border border-white/20 bg-white/5 hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all font-medium text-lg"
                >
                    LinkedIn
                </a>
                <a
                    href="https://github.com/raphelj"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 rounded-full border border-white/20 bg-white/5 hover:bg-white/20 transition-all font-medium text-lg"
                >
                    GitHub
                </a>
            </div>
        </div>
    );
}
