"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Award, Heart, Sparkles, GraduationCap } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/* ================= DATA ================= */

const doctors = [
  {
    name: "Dr. Vaibhav Harkare",
    role: "Lead Implantologist & Founder",
    education: "MDS - Oral Surgery",
    image: "/d1.jpeg",
  },
  {
    name: "Dr. Snehal Kulkarni",
    role: "Cosmetic Dentist & Co-Founder",
    education: "BDS, MDS - Conservative",
    image: "/d2.jpeg",
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="bg-[#FFFCFA] min-h-screen">
        {/* --- 1. COMPACT HERO --- */}
        <section className="pt-32 pb-8 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#C21E56] mb-3 block">
                The Hands Behind The Craft
              </span>
              <h1 className="text-4xl md:text-6xl font-serif text-gray-900 leading-tight ">
                Excellence{" "}
                <span className="font-light text-[#D4AF37]">
                  Meets Empathy
                </span>
              </h1>
            </motion.div>
          </div>
        </section>

        {/* --- 2. FULL-VIEW DOCTOR PROFILES --- */}
        <section className="pb-16 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {doctors.map((doc, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-[40px] p-8 border border-gray-100 shadow-[0_15px_50px_-15px_rgba(0,0,0,0.03)] flex flex-col items-center group"
                >
                  {/* Container designed to show FULL image */}
                  <div className="relative w-56 h-56 mb-8 flex items-center justify-center">
                    {/* Decorative Rings */}
                    <div className="absolute inset-0 rounded-full border border-dashed border-[#D4AF37]/20 group-hover:rotate-45 transition-transform duration-1000" />

                    {/* The Image Container */}
                    <div className="relative w-[90%] h-[90%] rounded-full overflow-hidden bg-[#FDF8F4] flex items-center justify-center border-4 border-white shadow-md">
                      <Image
                        src={doc.image}
                        alt={doc.name}
                        fill
                        // object-contain ensures the image is NOT cropped
                        className="object-contain p-2 transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2 text-[#D4AF37] mb-2">
                      <GraduationCap size={14} />
                      <span className="text-[9px] font-bold uppercase tracking-widest">
                        {doc.education}
                      </span>
                    </div>
                    <h3 className="text-2xl font-serif text-gray-900 mb-1 tracking-tight">
                      {doc.name}
                    </h3>
                    <p className="text-[#C21E56] font-bold text-[9px] uppercase tracking-[0.2em]">
                      {doc.role}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* --- 3. PHILOSOPHY ROW --- */}
        <section className="py-12 px-6 bg-white border-y border-gray-50">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="text-center md:text-left">
                <h2 className="text-3xl font-serif text-gray-900 mb-2">
                  Beyond Dentistry
                </h2>
                <p className="text-gray-400 font-light text-xs leading-relaxed max-w-xs">
                  Providing a boutique experience with a focus on surgical
                  precision and patient peace.
                </p>
              </div>

              <div className="flex gap-8 lg:gap-16">
                {[
                  { icon: <Heart size={18} />, label: "Patient First" },
                  { icon: <Award size={18} />, label: "Expertise" },
                  { icon: <Sparkles size={18} />, label: "Precision" },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center gap-2">
                    <div className="text-[#D4AF37] mb-1">{item.icon}</div>
                    <span className="text-[8px] font-bold uppercase tracking-widest text-gray-400">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
