
"use client";

import React from "react";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import {
  ShieldCheck,
  Clock,
  Heart,
  UserCheck,
  Stethoscope,
  Sparkles,
} from "lucide-react";

/* ================= VARIANTS ================= */

const container: Variants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
};

const floatingAnimation = {
  y: [0, -10, 0],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: [0.42, 0, 0.58, 1] as const,
  },
};

/* ================= COMPONENT ================= */

export default function WhyChooseUs() {
  const points = [
    {
      title: "Medical-Grade Sterilization",
      desc: "International safety protocols ensure 100% instrument sterilization and a pristine, germ-free environment at every visit.",
      icon: ShieldCheck,
      gradient: "from-emerald-500 to-teal-600",
      bgGradient: "from-emerald-50 to-teal-50",
      shadow: "emerald-500/20",
    },
    {
      title: "Elite Dental Specialists",
      desc: "Board-certified experts with decades of combined experience, handling everything from preventive care to complex restorative procedures.",
      icon: UserCheck,
      gradient: "from-[#C21E56] to-[#A01845]",
      bgGradient: "from-[#C21E56]/5 to-[#A01845]/5",
      shadow: "[#C21E56]/20",
    },
    {
      title: "Cutting-Edge Technology",
      desc: "State-of-the-art digital equipment and advanced imaging systems deliver faster, safer, and more precise treatments.",
      icon: Stethoscope,
      gradient: "from-purple-500 to-fuchsia-600",
      bgGradient: "from-purple-50 to-fuchsia-50",
      shadow: "purple-500/20",
    },
    {
      title: "Spa-Like Comfort",
      desc: "Thoughtfully designed spaces with ambient lighting and calming aesthetics transform dental visits into relaxing experiences.",
      icon: Heart,
      gradient: "from-rose-500 to-pink-600",
      bgGradient: "from-rose-50 to-pink-50",
      shadow: "rose-500/20",
    },
    {
      title: "Zero Wait Guarantee",
      desc: "Streamlined scheduling and efficient workflows ensure you're seen promptly, respecting your valuable time.",
      icon: Clock,
      gradient: "from-[#D4AF37] to-[#C4A030]",
      bgGradient: "from-[#D4AF37]/10 to-[#C4A030]/10",
      shadow: "[#D4AF37]/20",
    },
    {
      title: "Transparent Premium Care",
      desc: "World-class materials and expert craftsmanship at honest prices—luxury dentistry without the markup.",
      icon: Sparkles,
      gradient: "from-cyan-500 to-sky-600",
      bgGradient: "from-cyan-50 to-sky-50",
      shadow: "cyan-500/20",
    },
  ];

  return (
    <section
      id="why-choose-us"
      className="relative py-32 lg:py-40 bg-gradient-to-b from-[#FFFCFA] via-white to-[#FFF5F0] overflow-hidden"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated gradient orbs with brand colors */}
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-[#C21E56]/15 to-[#D4AF37]/15 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-40 right-20 w-[500px] h-[500px] bg-gradient-to-br from-[#D4AF37]/20 to-[#C21E56]/10 rounded-full blur-3xl"
        />

        {/* Decorative geometric shapes */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 -left-20 w-80 h-80 border border-[#D4AF37]/20 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 -right-20 w-96 h-96 border border-[#C21E56]/20 rounded-full"
        />

        {/* Elegant radial pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:48px_48px] opacity-[0.02]" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-center mb-20 lg:mb-28"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block mb-6"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#C21E56]/30 to-[#D4AF37]/30 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500" />
              <div className="relative px-6 py-2.5 bg-white/90 backdrop-blur-sm border-2 border-[#D4AF37]/30 rounded-full shadow-lg">
                <span className="text-xs font-bold tracking-[0.3em] uppercase bg-gradient-to-r from-[#C21E56] to-[#D4AF37] bg-clip-text text-transparent">
                  Why Tooth Stories
                </span>
              </div>
            </div>
          </motion.div>

          {/* Main Heading */}
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Comprehensive Dental Care
            <br />
            <span className="font-light bg-gradient-to-r from-[#C21E56] via-[#D4AF37] to-[#C21E56] bg-clip-text text-transparent">
              You Can Trust
            </span>
          </h2>

          {/* Subheading */}
          <p className="font-serif text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            Six pillars of dental excellence that set us apart and ensure your
            smile receives nothing but the best
          </p>

          {/* Decorative line */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "5rem" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-10 rounded-full"
          />
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
        >
          {points.map((point, idx) => {
            const Icon = point.icon;
            return (
              <motion.div key={idx} variants={item} className="group relative">
                {/* Card */}
                <div className="relative h-full p-8 lg:p-10 rounded-3xl bg-white border border-gray-100/60 shadow-sm hover:shadow-xl hover:shadow-[#C21E56]/10 transition-all duration-500 overflow-hidden">
                  {/* Animated background gradient on hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${point.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  {/* Glow effect */}
                  <div
                    className={`absolute -inset-1 bg-gradient-to-r ${point.gradient} opacity-0 group-hover:opacity-20 blur-2xl transition-all duration-500 rounded-3xl`}
                  />

                  <div className="relative z-10">
                    {/* Icon */}
                    <motion.div
                      className="mb-8 inline-block"
                      whileHover={floatingAnimation}
                    >
                      <div className="relative">
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${point.gradient} blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 rounded-2xl`}
                        />
                        <div
                          className={`relative p-4 rounded-2xl bg-gradient-to-br ${point.gradient} shadow-lg shadow-${point.shadow} group-hover:shadow-xl group-hover:scale-110 transition-all duration-500`}
                        >
                          <Icon
                            size={32}
                            className="text-white"
                            strokeWidth={2.5}
                          />
                        </div>
                      </div>
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-700 group-hover:bg-clip-text transition-all duration-300">
                      {point.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-500 text-sm leading-relaxed font-light">
                      {point.desc}
                    </p>

                    {/* Bottom accent line */}
                    <div className="mt-6 pt-6 border-t border-gray-100">
                      <div
                        className={`h-1 w-0 group-hover:w-12 bg-gradient-to-r ${point.gradient} rounded-full transition-all duration-500`}
                      />
                    </div>
                  </div>

                  {/* Corner decoration */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/50 to-transparent rounded-bl-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Floating number badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + idx * 0.1, duration: 0.5 }}
                  className="absolute -top-4 -right-4 z-20"
                >
                  <div
                    className={`w-12 h-12 rounded-full bg-gradient-to-br ${point.gradient} flex items-center justify-center shadow-xl shadow-${point.shadow} group-hover:scale-110 transition-transform duration-300`}
                  >
                    <span className="text-white font-bold text-lg">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 lg:mt-28 text-center"
        >
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-[#C21E56]/20 to-[#D4AF37]/20 blur-3xl" />
            <div className="relative bg-white/90 backdrop-blur-xl p-10 lg:p-14 rounded-3xl border-2 border-[#D4AF37]/20 shadow-2xl">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                Ready to Experience the Difference?
              </h3>
              <p className="text-gray-500 mb-8 max-w-2xl mx-auto font-light">
                Join thousands of satisfied patients who've chosen excellence
                for their dental care
              </p>

              <Link href="/contact" className="inline-block">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group px-10 py-4 bg-gradient-to-r from-[#C21E56] to-[#A01845] text-white rounded-full font-bold text-xs tracking-[0.3em] uppercase shadow-2xl shadow-[#C21E56]/30 hover:shadow-[#C21E56]/50 transition-all duration-300"
                >
                  <span className="flex items-center gap-3">
                    Schedule Your Visit
                    <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                  </span>
                </motion.div>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
