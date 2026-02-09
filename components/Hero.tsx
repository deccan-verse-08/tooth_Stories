"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, ShieldCheck, Star, Award } from "lucide-react";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.16 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100svh-80px)] bg-[#FFFCFA] overflow-hidden font-sans">
      {/* Ultra subtle grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:36px_36px] opacity-[0.018]" />

      <div className="relative max-w-7xl mx-auto px-6 pt-12 pb-28 grid lg:grid-cols-2 gap-20 items-center">
        {/* ================= LEFT ================= */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-10"
        >
          {/* Trust row */}
          <motion.div variants={item} className="flex items-center gap-5">
            <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-[#C21E56]">
              Trusted Dental Studio
            </span>
            <div className="flex gap-1.5">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  size={13}
                  className="fill-[#D4AF37] text-[#D4AF37]"
                />
              ))}
            </div>
          </motion.div>

          {/* BIG SEXY HEADING */}
          <motion.h1
            variants={item}
            className="text-4xl sm:text-5xl md:text-6xl xl:text-[82px] font-extrabold tracking-tight text-gray-900 leading-[1.02]"
          >
            Dentistry Crafted
            <br />
            <span className="text-[#C21E56] font-bold">
              With Precision and Care
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={item}
            className="max-w-xl text-base md:text-lg text-gray-600 leading-relaxed font-medium"
          >
            At Tooth Stories, we combine advanced dental science and a calm,
            patient-first philosophy to deliver confident smiles that look
            natural and feel effortless.
          </motion.p>

          {/* CTA */}
          <motion.div variants={item} className="flex flex-wrap gap-6 pt-4">
            <Link
              href="/contact"
              className="px-12 py-5 rounded-full bg-[#C21E56] text-white text-[11px] font-bold tracking-[0.3em] uppercase hover:bg-[#A01845] transition-all shadow-xl"
            >
              Book Consultation
            </Link>

            <Link
              href="/services"
              className="flex items-center gap-3 px-12 py-5 rounded-full border-2 border-gray-200 text-gray-900 text-[11px] font-bold tracking-[0.3em] uppercase hover:bg-gray-50 transition-all group"
            >
              View Treatments
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            variants={item}
            className="flex gap-10 pt-6 text-gray-500"
          >
            <div className="flex items-center gap-3">
              <ShieldCheck size={18} className="text-[#D4AF37]" />
              <span className="text-[11px] uppercase tracking-widest font-bold">
                Certified and Safe
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Award size={18} className="text-[#D4AF37]" />
              <span className="text-[11px] uppercase tracking-widest font-bold">
                Expert Dentists
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* ================= RIGHT IMAGE ================= */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative"
        >
          <div className="relative w-full max-w-[540px] mx-auto aspect-[3/4] overflow-hidden rounded-[2.8rem] border border-gray-200 shadow-[0_60px_140px_-40px_rgba(0,0,0,0.22)]">
            <Image
              src="/hero.jpg"
              alt="Tooth Stories Dental Clinic"
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* Floating promise card */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-xl p-6 rounded-2xl border border-gray-100 shadow-xl"
          >
            <p className="text-[11px] uppercase tracking-[0.35em] font-bold text-[#C21E56]">
              Patient Promise
            </p>
            <p className="mt-3 text-base text-gray-700 leading-relaxed font-medium">
              Gentle treatments.
              <br />
              Honest guidance.
              <br />
              Lasting results.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
