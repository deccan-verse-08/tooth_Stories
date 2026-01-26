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
    image: "/d1.jpg",
  },
  {
    name: "Dr. Snehal Kulkarni",
    role: "Cosmetic Dentist & Co-Founder",
    education: "BDS, MDS - Conservative",
    image: "/d2.jpg",
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />

      <main className="bg-[#FFFCFA] min-h-screen">
        {/* ---------- HERO ---------- */}
        <section className="pt-32 pb-8 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#C21E56] mb-3 block">
                The Hands Behind The Craft
              </span>

              <h1 className="text-4xl md:text-6xl font-serif text-gray-900 leading-tight">
                Excellence{" "}
                <span className="font-light text-[#D4AF37]">Meets Empathy</span>
              </h1>
            </motion.div>
          </div>
        </section>

        {/* ---------- DOCTORS ---------- */}
        <section className="pb-16 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {doctors.map((doc, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-[40px] p-6 border border-gray-100 shadow-[0_15px_50px_-15px_rgba(0,0,0,0.04)] flex flex-col items-center group"
                >
                  {/* IMAGE */}
                  <div className="relative w-64 h-64 md:w-72 md:h-72 mb-6 flex items-center justify-center">
                    <div className="absolute inset-0 rounded-full border border-dashed border-[#D4AF37]/25" />

                    <div className="relative w-[92%] h-[92%] rounded-full overflow-hidden bg-[#FDF8F4] border-4 border-white shadow-md">
                      <Image
                        src={doc.image}
                        alt={doc.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  </div>

                  {/* TEXT */}
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2 text-[#D4AF37] mb-2">
                      <GraduationCap size={14} />
                      <span className="text-[9px] font-bold uppercase tracking-widest">
                        {doc.education}
                      </span>
                    </div>

                    <h3 className="text-2xl font-serif text-gray-900 mb-1">
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

        {/* ---------- PHILOSOPHY ---------- */}
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

              <div className="flex gap-10">
                {[
                  { icon: <Heart size={18} />, label: "Patient First" },
                  { icon: <Award size={18} />, label: "Expertise" },
                  { icon: <Sparkles size={18} />, label: "Precision" },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center gap-2">
                    <div className="text-[#D4AF37]">{item.icon}</div>
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
