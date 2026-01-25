"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import {
  ShieldCheck,
  Clock,
  Heart,
  UserCheck,
  Stethoscope,
  Sparkle,
} from "lucide-react";

/* ================= VARIANTS (FIXED) ================= */

const container: Variants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

/* ================= COMPONENT ================= */

export default function WhyChooseUs() {
  const points = [
    {
      title: "Strict Sterilization",
      desc: "We follow international safety protocols to ensure 100% sterilized instruments and a germ-free environment.",
      icon: ShieldCheck,
    },
    {
      title: "Experienced Doctors",
      desc: "Our team of specialists brings years of clinical expertise to handle everything from routine checkups to complex cases.",
      icon: UserCheck,
    },
    {
      title: "Modern Equipment",
      desc: "We use the latest dental chairs and tools to ensure your treatment is faster, safer, and more accurate.",
      icon: Stethoscope,
    },
    {
      title: "Comfortable Environment",
      desc: "Our clinic is designed to be calm and welcoming, helping you feel relaxed and at ease during your visit.",
      icon: Heart,
    },
    {
      title: "Timely Appointments",
      desc: "We respect your busy schedule. We strive to minimize waiting time so you can get back to your day quickly.",
      icon: Clock,
    },
    {
      title: "Affordable Premium Care",
      desc: "Get high-quality dental treatment using the best materials at honest and transparent prices.",
      icon: Sparkle,
    },
  ];

  return (
    <section
      id="why-choose-us"
      className="relative py-28 bg-[#FFFCFA] overflow-hidden"
    >
      {/* Decorative rings */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] border border-[#D4AF37]/10 rounded-full" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] border border-[#C21E56]/10 rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-[#D4AF37] font-bold tracking-[0.3em] text-[11px] uppercase mb-4">
            Why Tooth Stories
          </p>
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight">
            Comprehensive Dental Care <br />
            <span className="text-[#C21E56]">You Can Trust</span>
          </h2>
          <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-8" />
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {points.map((point, idx) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={idx}
                variants={item}
                whileHover={{ y: -6 }}
                className="group relative p-10 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-[#C21E56]/10 transition-all duration-300"
              >
                {/* Soft glow */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#C21E56]/5 to-[#D4AF37]/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative z-10">
                  <div className="mb-6 flex justify-center lg:justify-start">
                    <div className="p-4 rounded-2xl bg-[#C21E56]/10 group-hover:bg-[#C21E56] transition-colors duration-300">
                      <Icon
                        size={32}
                        className="text-[#C21E56] group-hover:text-white transition-colors"
                      />
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center lg:text-left">
                    {point.title}
                  </h3>

                  <p className="text-gray-500 text-sm leading-relaxed text-center lg:text-left font-light">
                    {point.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
