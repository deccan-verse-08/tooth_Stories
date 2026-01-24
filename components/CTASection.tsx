"use client";

import { motion } from "framer-motion";
import { Calendar, Phone, Mail } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative py-12 sm:py-16 md:py-24 bg-[#FFFCFA] overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#C21E56]/[0.02] rounded-l-[100px] hidden lg:block" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-white border border-gray-100 rounded-2xl sm:rounded-3xl md:rounded-[40px] shadow-[0_20px_50px_-10px_rgba(0,0,0,0.06)] sm:shadow-[0_50px_100px_-20px_rgba(0,0,0,0.06)] overflow-hidden">
          <div className="grid lg:grid-cols-5 items-center">
            {/* --- Content Area --- */}
            <div className="lg:col-span-3 p-6 sm:p-8 md:p-12 lg:p-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.3em] sm:tracking-[0.4em] text-[#D4AF37] block mb-4 sm:mb-6">
                  Ready for your story to begin?
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif text-gray-900 leading-[1.15] sm:leading-[1.1] mb-5 sm:mb-6 md:mb-8">
                  Start Your Journey to a <br className="hidden sm:block" />
                  <span className="italic font-light text-[#C21E56]">
                    Radiant New Smile
                  </span>
                </h2>
                <p className="text-gray-500 text-sm sm:text-base md:text-lg font-light mb-6 sm:mb-8 md:mb-10 max-w-md leading-relaxed">
                  Join hundreds of happy patients who trusted us with their
                  smiles. Book your initial consultation today and experience
                  dentistry redefined.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-5">
                  <a
                    href="/contact"
                    className="flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 md:px-10 py-3.5 sm:py-4 md:py-5 rounded-full bg-[#C21E56] text-white text-[10px] sm:text-[11px] font-bold tracking-wider sm:tracking-widest uppercase hover:bg-[#A01845] hover:shadow-xl hover:shadow-[#C21E56]/30 transition-all group"
                  >
                    <Calendar size={14} className="sm:w-4 sm:h-4" />
                    <span className="whitespace-nowrap">Schedule Appointment</span>
                  </a>
                  <a
                    href="tel:+918793151502"
                    className="flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 md:px-10 py-3.5 sm:py-4 md:py-5 rounded-full border border-gray-200 text-gray-900 text-[10px] sm:text-[11px] font-bold tracking-wider sm:tracking-widest uppercase hover:bg-gray-50 transition-all"
                  >
                    <Phone size={14} className="sm:w-4 sm:h-4 text-[#D4AF37]" />
                    <span className="whitespace-nowrap">Call Our Clinic</span>
                  </a>
                </div>
              </motion.div>
            </div>

            {/* --- Visual/Info Area --- */}
            <div className="lg:col-span-2 relative h-full min-h-[300px] sm:min-h-[350px] md:min-h-[400px] bg-[#C21E56] flex flex-col justify-center p-6 sm:p-8 md:p-12 lg:p-16">
              {/* Subtle pattern overlay */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_black_100%)] opacity-10" />

              <div className="relative z-10 space-y-6 sm:space-y-8 md:space-y-10">
                <div className="space-y-1.5 sm:space-y-2">
                  <h4 className="text-white/60 text-[9px] sm:text-[10px] uppercase tracking-[0.25em] sm:tracking-[0.3em] font-bold">
                    Location
                  </h4>
                  <p className="text-white text-sm sm:text-base md:text-lg font-light leading-relaxed">
                    Tooth Stories <br /> Barcode, Rama Group Commercial Mall, Pune
                  </p>
                </div>

                <div className="space-y-1.5 sm:space-y-2">
                  <h4 className="text-white/60 text-[9px] sm:text-[10px] uppercase tracking-[0.25em] sm:tracking-[0.3em] font-bold">
                    Hours
                  </h4>
                  <div className="text-white text-sm sm:text-base font-light space-y-1">
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

                <div className="pt-4 sm:pt-6">
                  <a
                    href="mailto:hello@toothstories.com"
                    className="flex items-center gap-3 sm:gap-4 text-white group"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-[#C21E56] transition-all flex-shrink-0">
                      <Mail size={18} className="sm:w-5 sm:h-5" />
                    </div>
                    <span className="text-xs sm:text-sm tracking-wider font-medium uppercase break-all sm:break-normal">
                      hello@toothstories.com
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}