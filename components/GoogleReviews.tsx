"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";

export default function GoogleReviews() {
    useEffect(() => {
        // Load Elfsight script
        const script = document.createElement("script");
        script.src = "https://static.elfsight.com/platform/platform.js";
        script.setAttribute("data-use-service-core", "");
        script.defer = true;
        document.body.appendChild(script);

        return () => {
            // Cleanup script on unmount if needed, though for Elfsight it's usually fine to leave it
            if (document.body.contains(script)) {
                document.body.removeChild(script);
            }
        };
    }, []);

    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <div className="inline-block mb-4">
                        <div className="px-4 py-1.5 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/5">
                            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#D4AF37]">
                                Patient Stories
                            </span>
                        </div>
                    </div>
                    <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        What Our Patients <span className="text-[#E11D74]">Say</span>
                    </h2>
                    <p className="font-serif text-lg text-gray-500 max-w-2xl mx-auto italic">
                        "Real experiences from real smiles"
                    </p>
                </motion.div>

                {/* Elfsight Widget Container */}
                <div
                    className="elfsight-app-cf57c7ed-de86-4937-a3fb-36fb757e0afa"
                    data-elfsight-app-lazy
                />
            </div>
        </section>
    );
}
