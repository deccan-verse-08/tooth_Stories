"use client";
import React from "react";
import Link from "next/link";
import { Phone, Instagram, Facebook, Linkedin, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#0A0A0A] text-white pt-16 pb-8 overflow-hidden">
      {/* Subtle Top Glow Line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 pb-12">
          {/* Brand & Mission */}
          <div className="max-w-sm space-y-6">
            <Link href="/" className="flex items-center gap-4 group">
              {/* Logo with White Background - Matching Header Style */}
              <div className="relative w-14 h-14 flex items-center justify-center bg-white rounded-xl shadow-lg transform transition-transform group-hover:scale-105">
                <img
                  src="/logo.png"
                  alt="Tooth Stories Logo"
                  className="w-10 h-10 object-contain"
                />
                {/* Small gold accent border around the white box */}
                <div className="absolute inset-0 border border-[#D4AF37]/20 rounded-xl"></div>
              </div>

              <div className="flex flex-col">
                <h3 className="text-xl font-serif font-black tracking-tighter leading-none">
                  TOOTH<span className="text-[#D4AF37]">STORIES</span>
                </h3>
                <p className="text-[9px] uppercase tracking-[0.3em] text-gray-500 mt-1">
                  Dental Excellence
                </p>
              </div>
            </Link>

            <p className="text-sm text-gray-400 font-light leading-relaxed">
              Experience the harmony of medical precision and artistic beauty.
              Redefining luxury dental care for a confident you.
            </p>

            <div className="flex gap-5 pt-2">
              {[Instagram, Facebook, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="text-gray-500 hover:text-[#D4AF37] transform hover:-translate-y-1 transition-all duration-300"
                >
                  <Icon size={20} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links & Contact info */}
          <div className="flex flex-wrap gap-x-16 gap-y-8">
            <div className="space-y-5">
              <h4 className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#D4AF37]">
                Navigate
              </h4>
              <ul className="flex flex-col gap-3 text-sm text-gray-400">
                <li>
                  <Link
                    href="/services"
                    className="hover:text-white transition-colors"
                  >
                    Expertise
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="hover:text-white transition-colors"
                  >
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-white transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-5">
              <h4 className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#D4AF37]">
                The Studio
              </h4>
              <div className="text-sm text-gray-400 space-y-3">
                <p className="leading-relaxed">
                  123 Elegance Blvd,
                  <br />
                  Manhattan, NY 10001
                </p>
                <a
                  href="tel:+1555786GOLD"
                  className="flex items-center gap-2 hover:text-white font-bold transition-colors pt-1"
                >
                  <Phone size={14} className="text-[#D4AF37]" /> +1 (555)
                  786-GOLD
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="text-[10px] text-gray-600 uppercase tracking-[0.3em]">
            © {new Date().getFullYear()} TOOTHSTORIES • ALL RIGHTS RESERVED
          </p>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 hover:text-white transition-all"
          >
            Back to top
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#D4AF37] group-hover:bg-[#D4AF37]/5 transition-all">
              <ArrowUp size={16} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
