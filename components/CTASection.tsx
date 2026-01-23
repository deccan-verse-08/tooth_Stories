"use client";

import { motion } from "framer-motion";
import { Calendar, Phone, Mail, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative py-24 bg-[#FFFCFA] overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#C21E56]/[0.02] rounded-l-[100px] hidden lg:block" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="bg-white border border-gray-100 rounded-[40px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.06)] overflow-hidden">
          <div className="grid lg:grid-cols-5 items-center">
            {/* --- Content Area --- */}
            <div className="lg:col-span-3 p-8 md:p-16 lg:p-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-[#D4AF37] block mb-6">
                  Ready for your story to begin?
                </span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-gray-900 leading-[1.1] mb-8">
                  Start Your Journey to a <br />
                  <span className="italic font-light text-[#C21E56]">
                    Radiant New Smile
                  </span>
                </h2>
                <p className="text-gray-500 text-lg font-light mb-10 max-w-md leading-relaxed">
                  Join hundreds of happy patients who trusted us with their
                  smiles. Book your initial consultation today and experience
                  dentistry redefined.
                </p>

                <div className="flex flex-col sm:flex-row gap-5">
                  <Link
                    href="/booking"
                    className="flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-[#C21E56] text-white text-[11px] font-bold tracking-widest uppercase hover:bg-[#A01845] hover:shadow-xl hover:shadow-[#C21E56]/30 transition-all group"
                  >
                    <Calendar size={16} />
                    Schedule Appointment
                  </Link>
                  <Link
                    href="tel:+123456789"
                    className="flex items-center justify-center gap-3 px-10 py-5 rounded-full border border-gray-200 text-gray-900 text-[11px] font-bold tracking-widest uppercase hover:bg-gray-50 transition-all"
                  >
                    <Phone size={16} className="text-[#D4AF37]" />
                    Call Our Studio
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* --- Visual/Info Area --- */}
            <div className="lg:col-span-2 relative h-full min-h-[400px] bg-[#C21E56] flex flex-col justify-center p-12 lg:p-16">
              {/* Subtle pattern overlay */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_black_100%)] opacity-10" />

              <div className="relative z-10 space-y-10">
                <div className="space-y-2">
                  <h4 className="text-white/60 text-[10px] uppercase tracking-[0.3em] font-bold">
                    Location
                  </h4>
                  <p className="text-white text-lg font-light">
                    123 Dental Plaza, <br />
                    Medical District, NY 10012
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="text-white/60 text-[10px] uppercase tracking-[0.3em] font-bold">
                    Hours
                  </h4>
                  <div className="text-white font-light space-y-1">
                    <div className="flex justify-between border-b border-white/10 pb-1">
                      <span>Mon — Fri</span>
                      <span>9:00 - 19:00</span>
                    </div>
                    <div className="flex justify-between border-b border-white/10 pb-1">
                      <span>Saturday</span>
                      <span>10:00 - 15:00</span>
                    </div>
                  </div>
                </div>

                <div className="pt-6">
                  <Link
                    href="mailto:hello@toothstories.com"
                    className="flex items-center gap-4 text-white group"
                  >
                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-[#C21E56] transition-all">
                      <Mail size={20} />
                    </div>
                    <span className="text-sm tracking-wider font-medium uppercase">
                      hello@toothstories.com
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
