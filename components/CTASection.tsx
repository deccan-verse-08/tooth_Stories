"use client";

import { motion } from "framer-motion";
import { Calendar, Phone, Mail, MapPin, Clock, Sparkles } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative py-16 sm:py-20 md:py-28 bg-gradient-to-b from-[#FFFCFA] via-white to-[#FFF5F0] overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated gradient orbs */}
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
            y: [0, 40, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-gradient-to-br from-[#D4AF37]/20 to-[#C21E56]/10 rounded-full blur-3xl"
        />

        {/* Radial pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:48px_48px] opacity-[0.02]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-white/80 backdrop-blur-sm border-2 border-[#D4AF37]/20 rounded-[2.5rem] shadow-[0_50px_100px_-20px_rgba(194,30,86,0.15)] overflow-hidden"
        >
          {/* Decorative gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#C21E56]/[0.02] via-transparent to-[#D4AF37]/[0.02] pointer-events-none" />

          <div className="grid lg:grid-cols-5 items-stretch">
            {/* --- Content Area --- */}
            <div className="lg:col-span-3 p-8 sm:p-10 md:p-14 lg:p-20 relative">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {/* Premium Badge */}
                <div className="inline-block mb-6">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#C21E56]/30 to-[#D4AF37]/30 rounded-full blur-lg group-hover:blur-xl transition-all duration-500" />
                    <div className="relative flex items-center gap-2 px-4 py-2 bg-white border-2 border-[#D4AF37]/30 rounded-full shadow-lg">
                      <Sparkles
                        className="w-3.5 h-3.5 text-[#D4AF37]"
                        strokeWidth={2.5}
                      />
                      <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.3em] text-[#C21E56]">
                        Ready for your story?
                      </span>
                    </div>
                  </div>
                </div>

                {/* Main Heading */}
                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 leading-[1.1] mb-6 md:mb-8">
                  Start Your Journey to a <br className="hidden sm:block" />
                  <span className="font-light bg-gradient-to-r from-[#C21E56] via-[#D4AF37] to-[#C21E56] bg-clip-text text-transparent">
                    Radiant New Smile
                  </span>
                </h2>

                {/* Decorative line */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-[2px] w-16 bg-gradient-to-r from-[#C21E56] via-[#D4AF37] to-transparent rounded-full" />
                  <div className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                </div>

                {/* Description */}
                <p className="font-serif text-gray-600 text-sm sm:text-base md:text-lg font-light mb-8 md:mb-10 max-w-lg leading-relaxed">
                  Join thousands of happy patients who trusted us with their
                  smiles. Book your initial consultation today and experience
                  dentistry redefined.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.a
                    href="/contact"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative overflow-hidden flex items-center justify-center gap-3 px-8 md:px-10 py-4 md:py-5 rounded-full bg-gradient-to-r from-[#C21E56] to-[#A01845] text-white text-[10px] sm:text-[11px] font-bold tracking-[0.3em] uppercase shadow-2xl shadow-[#C21E56]/30 hover:shadow-[#C21E56]/50 transition-all"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] to-[#C21E56] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <Calendar className="relative w-4 h-4" strokeWidth={2.5} />
                    <span className="relative whitespace-nowrap">
                      Book Appointment
                    </span>
                  </motion.a>

                  <motion.a
                    href="tel:+918793151502"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className="group flex items-center justify-center gap-3 px-8 md:px-10 py-4 md:py-5 rounded-full border-2 border-[#D4AF37]/40 bg-white text-gray-900 text-[10px] sm:text-[11px] font-bold tracking-[0.3em] uppercase hover:border-[#D4AF37] hover:bg-[#D4AF37]/5 transition-all shadow-lg"
                  >
                    <Phone
                      className="w-4 h-4 text-[#D4AF37] group-hover:rotate-12 transition-transform duration-300"
                      strokeWidth={2.5}
                    />
                    <span className="whitespace-nowrap">Call Clinic</span>
                  </motion.a>
                </div>

                {/* Trust Indicators */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="flex flex-wrap items-center gap-6 mt-10 pt-8 border-t-2 border-[#D4AF37]/10"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#C21E56]/10 to-[#C21E56]/20 rounded-full flex items-center justify-center">
                      <Sparkles
                        className="w-5 h-5 text-[#C21E56]"
                        strokeWidth={2.5}
                      />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-gray-900 tracking-wide uppercase">
                        5,000+
                      </div>
                      <div className="text-[10px] text-gray-500 tracking-wider uppercase">
                        Happy Patients
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/30 rounded-full flex items-center justify-center">
                      <div className="text-sm font-bold text-[#D4AF37]">
                        15+
                      </div>
                    </div>
                    <div>
                      <div className="text-xs font-bold text-gray-900 tracking-wide uppercase">
                        Years
                      </div>
                      <div className="text-[10px] text-gray-500 tracking-wider uppercase">
                        Experience
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* --- Visual/Info Area --- */}
            <div className="lg:col-span-2 relative min-h-[400px] sm:min-h-[450px] md:min-h-[500px] bg-gradient-to-br from-[#C21E56] to-[#A01845] flex flex-col justify-center p-8 sm:p-10 md:p-12 lg:p-16">
              {/* Decorative pattern overlay */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,_rgba(212,175,55,0.1)_0%,_transparent_50%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.05]" />

              {/* Floating gold accent */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-8 right-8 w-20 h-20 border-2 border-[#D4AF37]/30 rounded-full"
              />

              <div className="relative z-10 space-y-8 md:space-y-10">
                {/* Location */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="space-y-3"
                >
                  <div className="flex items-center gap-2">
                    <MapPin
                      className="w-4 h-4 text-[#D4AF37]"
                      strokeWidth={2.5}
                    />
                    <h4 className="text-white/70 text-[10px] uppercase tracking-[0.3em] font-bold">
                      Location
                    </h4>
                  </div>
                  <p className="text-white text-base md:text-lg font-light leading-relaxed pl-6 border-l-2 border-[#D4AF37]/30">
                    Tooth Stories <br />
                    Barcode, Rama Group Commercial Mall, Pune
                  </p>
                </motion.div>

                {/* Hours */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="space-y-3"
                >
                  <div className="flex items-center gap-2">
                    <Clock
                      className="w-4 h-4 text-[#D4AF37]"
                      strokeWidth={2.5}
                    />
                    <h4 className="text-white/70 text-[10px] uppercase tracking-[0.3em] font-bold">
                      Hours
                    </h4>
                  </div>
                  <div className="text-white text-sm md:text-base font-light space-y-2 pl-6">
                    <div className="flex justify-between items-center pb-2 border-b border-white/10">
                      <span>Mon — Fri</span>
                      <span className="text-[#D4AF37] font-medium">
                        9:00 - 10:00
                      </span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-white/10">
                      <span>Saturday</span>
                      <span className="text-[#D4AF37] font-medium">
                        10:00 - 15:00
                      </span>
                    </div>
                    <div className="flex justify-between items-center pb-2">
                      <span>Sunday</span>
                      <span className="text-[#D4AF37] font-medium">
                        On Appointment
                      </span>
                    </div>
                  </div>
                </motion.div>

                {/* Email */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="pt-4"
                >
                  <a
                    href="mailto:hello@toothstories.com"
                    className="group flex items-center gap-4 text-white"
                  >
                    <div className="relative">
                      <div className="absolute inset-0 bg-[#D4AF37] blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-300 rounded-full" />
                      <div className="relative w-12 h-12 rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-white group-hover:border-white group-hover:text-[#C21E56] group-hover:scale-110 transition-all duration-300">
                        <Mail className="w-5 h-5" strokeWidth={2.5} />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="text-[10px] text-white/60 uppercase tracking-[0.2em] font-bold mb-1">
                        Email Us
                      </div>
                      <span className="text-sm tracking-wide font-medium group-hover:text-[#D4AF37] transition-colors">
                        hello@toothstories.com
                      </span>
                    </div>
                  </a>
                </motion.div>
              </div>

              {/* Bottom decorative element */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
