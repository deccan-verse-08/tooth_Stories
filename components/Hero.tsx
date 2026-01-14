
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, ShieldCheck, Star, Award } from "lucide-react";

/* ================= VARIANTS ================= */

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

/* ================= COMPONENT ================= */

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] bg-[#FFFCFA] overflow-hidden">
      {/* Soft background grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.04]" />

      <div className="relative max-w-7xl mx-auto px-6 py-28 grid lg:grid-cols-2 gap-20 items-center">
        {/* ================= LEFT CONTENT ================= */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-10"
        >
          <motion.div variants={item} className="flex items-center gap-4">
            <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-[#C21E56]">
              Trusted Dental Studio
            </span>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  size={12}
                  className="fill-[#D4AF37] text-[#D4AF37]"
                />
              ))}
            </div>
          </motion.div>

          <motion.h1
            variants={item}
            className="text-5xl md:text-6xl lg:text-[78px] font-serif text-gray-900 leading-[1.05]"
          >
            Dentistry Crafted
            <br />
            <span className="italic text-[#C21E56] font-light">
              With Precision & Care
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="max-w-md text-lg text-gray-500 font-light leading-relaxed"
          >
            At Tooth Stories, we combine advanced dental science with a calm,
            patient-first approach — delivering smiles that feel as good as they
            look.
          </motion.p>

          <motion.div variants={item} className="flex items-center gap-8">
            <Link
              href="/contact"
              className="px-10 py-5 rounded-full bg-[#C21E56] text-white text-[11px] font-bold tracking-widest uppercase hover:bg-[#A01845] hover:shadow-xl hover:shadow-[#C21E56]/30 transition-all"
            >
              Book Consultation
            </Link>

            <Link
              href="/services"
              className="flex items-center gap-3 text-gray-900 text-[11px] font-bold tracking-widest uppercase group"
            >
              View Treatments
              <span className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 group-hover:bg-[#C21E56] group-hover:text-white group-hover:border-[#C21E56] transition-all">
                <ArrowRight size={16} />
              </span>
            </Link>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            variants={item}
            className="flex items-center gap-10 pt-6 text-gray-400"
          >
            <div className="flex items-center gap-3">
              <ShieldCheck size={18} className="text-[#D4AF37]" />
              <span className="text-[10px] uppercase tracking-widest font-bold">
                Certified & Safe
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Award size={18} className="text-[#D4AF37]" />
              <span className="text-[10px] uppercase tracking-widest font-bold">
                Expert Dentists
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* ================= RIGHT IMAGE ================= */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative"
        >
          {/* Rectangular Image */}
          <div className="relative w-full max-w-[520px] aspect-[3/4] overflow-hidden rounded-2xl border border-gray-200 shadow-[0_40px_90px_-30px_rgba(0,0,0,0.15)]">
            <Image
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09"
              alt="Dental Clinic"
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* Floating stat card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="absolute -bottom-10 -left-10 bg-white/90 backdrop-blur-xl p-6 rounded-2xl border border-gray-100 shadow-xl"
          >
            <p className="text-[10px] uppercase tracking-widest font-bold text-[#C21E56]">
              Patient Promise
            </p>
            <p className="mt-2 text-sm text-gray-700 font-light">
              Gentle treatments. <br />
              Honest guidance. <br />
              Lasting results.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
