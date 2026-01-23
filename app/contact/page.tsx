"use client";

import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  ExternalLink,
  Sparkles,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="bg-[#0E0E11] text-white min-h-screen pt-28 overflow-hidden">
        {/* HERO */}
        <section className="relative max-w-7xl mx-auto px-6 mb-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <div>
              <span className="inline-flex items-center gap-2 text-xs tracking-[0.35em] uppercase text-[#D4AF37] mb-6">
                <Sparkles size={14} /> Let’s Talk
              </span>
              <h1 className="text-6xl md:text-8xl font-serif leading-[0.95]">
                Designed for
                <span className="block italic font-light text-[#C21E56]">
                  Human Smiles
                </span>
              </h1>
              <p className="text-gray-400 max-w-md mt-8 leading-relaxed">
                A calm, private dental experience — crafted with precision,
                empathy, and modern aesthetics.
              </p>
            </div>

            {/* Floating Contact Cards */}
            <div className="space-y-6">
              {[
                {
                  icon: <Phone size={18} />,
                  title: "Call",
                  value: "+91 98765 43210",
                },
                {
                  icon: <Mail size={18} />,
                  title: "Email",
                  value: "hello@toothstories.com",
                },
                {
                  icon: <MapPin size={18} />,
                  title: "Visit",
                  value: "BARCODE, Rama Group Commercial Mall, Pune",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.03 }}
                  className="flex items-center gap-5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#C21E56]/20 text-[#C21E56] flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-gray-400">
                      {item.title}
                    </p>
                    <p className="font-medium">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* FORM SECTION */}
        <section className="max-w-6xl mx-auto px-6 mb-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-[48px] bg-gradient-to-br from-[#1A1A22] to-[#0E0E11] border border-white/10 p-10 md:p-16"
          >
            <h3 className="text-4xl font-serif mb-4">Book a Consultation</h3>
            <p className="text-gray-400 max-w-lg mb-12">
              Share your concerns — we’ll respond personally within 24 hours.
            </p>

            <form className="grid md:grid-cols-2 gap-10">
              <input
                className="bg-transparent border-b border-white/20 py-4 outline-none focus:border-[#D4AF37] placeholder:text-gray-600"
                placeholder="Full Name"
              />
              <input
                className="bg-transparent border-b border-white/20 py-4 outline-none focus:border-[#D4AF37] placeholder:text-gray-600"
                placeholder="Email Address"
              />
              <input
                className="bg-transparent border-b border-white/20 py-4 outline-none focus:border-[#D4AF37] placeholder:text-gray-600 md:col-span-2"
                placeholder="Phone Number"
              />
              <textarea
                rows={4}
                className="bg-transparent border-b border-white/20 py-4 outline-none focus:border-[#D4AF37] placeholder:text-gray-600 md:col-span-2 resize-none"
                placeholder="How can we help you?"
              />

              <div className="md:col-span-2">
                <button className="group inline-flex items-center gap-4 text-xs uppercase tracking-[0.35em] text-[#D4AF37]">
                  Send Request
                  <span className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[#D4AF37] group-hover:text-black transition">
                    <Send size={16} />
                  </span>
                </button>
              </div>
            </form>
          </motion.div>
        </section>

        {/* MAP */}
        <section className="relative h-[520px] grayscale hover:grayscale-0 transition">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3779.7346473322173!2d73.8303667751955!3d18.67589978244808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b70992f06de9%3A0x1be893f6ff686be3!2sBARCODE%20By%20Rama%20Group%20Commercial%20Mall!5e0!3m2!1sen!2sin!4v1769167649114!5m2!1sen!2sin"
            className="w-full h-full"
            loading="lazy"
            style={{ border: 0 }}
            referrerPolicy="no-referrer-when-downgrade"
          />

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur-xl px-8 py-6 rounded-3xl border border-white/10">
            <p className="text-sm text-gray-300">102, Luxury Plaza, MG Road</p>
            <a
              href="https://maps.google.com"
              target="_blank"
              className="mt-3 inline-flex items-center gap-2 text-xs tracking-widest uppercase text-[#D4AF37]"
            >
              Open in Maps <ExternalLink size={12} />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
