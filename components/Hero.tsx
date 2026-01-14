"use client";
import React from "react";
import { ArrowRight, ShieldCheck, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-[calc(100vh-80px)] min-h-[650px] flex items-center bg-[#FFFCFA] overflow-hidden">
      {/* Background Subtle Accents */}
      <div className="absolute top-0 right-0 w-[40%] h-full bg-[#C21E56]/[0.02] hidden lg:block" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full border border-[#D4AF37]/10" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: Text Content */}
        <div className="flex flex-col space-y-8 lg:space-y-12">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#C21E56]">
                Premium Dental Care
              </span>
              <div className="flex -space-x-1">
                {[1, 2, 3].map((s) => (
                  <Star
                    key={s}
                    size={10}
                    className="fill-[#D4AF37] text-[#D4AF37]"
                  />
                ))}
              </div>
            </div>

            <h1 className="text-6xl md:text-7xl lg:text-[90px] font-serif text-gray-900 leading-[0.95] tracking-tight">
              Design your <br />
              <span className="italic font-light text-[#C21E56]">
                Perfect Smile.
              </span>
            </h1>

            <p className="text-lg text-gray-500 font-light leading-relaxed max-w-md">
              Experience the harmony of medical precision and artistic beauty at
              Tooth Stories. Your journey to a confident smile starts here.
            </p>
          </div>

          {/* Action Area */}
          <div className="flex flex-wrap items-center gap-8">
            <a
              href="/contact"
              className="bg-[#C21E56] text-white px-10 py-5 rounded-full font-bold text-[11px] tracking-widest uppercase transition-all hover:bg-[#A01845] hover:shadow-2xl hover:shadow-[#C21E56]/30 active:scale-95"
            >
              Book Appointment
            </a>

            <a
              href="/services"
              className="flex items-center gap-3 text-gray-900 font-bold text-[11px] tracking-widest uppercase group"
            >
              Our Services
              <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-[#C21E56] group-hover:border-[#C21E56] group-hover:text-white transition-all duration-300">
                <ArrowRight size={16} />
              </div>
            </a>
          </div>

          {/* Minimal Trust Bar */}
          <div className="flex items-center gap-10 pt-4 opacity-70">
            <div className="flex items-center gap-3">
              <ShieldCheck size={20} className="text-[#D4AF37]" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                FDA Approved
              </span>
            </div>
            <div className="h-6 w-px bg-gray-200" />
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 font-bold">
                100% Painless
              </span>
            </div>
          </div>
        </div>

        {/* Right: Modern Framed Image */}
        <div className="relative hidden lg:flex justify-center items-center">
          {/* Main Image with Modern Arch Shape */}
          <div className="relative w-full aspect-[4/5] max-w-[480px] rounded-t-full rounded-b-2xl overflow-hidden border-[1px] border-gray-100 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)]">
            <img
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1500"
              className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-1000"
              alt="Premium Dental Studio"
            />
          </div>

          {/* Decorative Floating Element */}
          <div className="absolute -bottom-8 -left-8 bg-white/90 backdrop-blur-xl p-6 rounded-2xl shadow-xl border border-white max-w-[200px]">
            <p className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-widest mb-2">
              Philosophy
            </p>
            <p className="text-sm font-serif italic text-gray-800">
              "Every smile is a masterpiece waiting to be told."
            </p>
          </div>

          {/* Minimal Gold Ring */}
          <div className="absolute -top-10 -right-10 w-40 h-40 border border-[#D4AF37]/20 rounded-full -z-10" />
        </div>
      </div>
    </section>
  );
}
