"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  ExternalLink,
  Sparkles,
  Clock,
  Navigation,
} from "lucide-react";


export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="bg-[#FFFCFA] text-[#111] min-h-screen pt-28 pb-20 overflow-hidden relative">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#C21E56]/5 rounded-full blur-[100px] pointer-events-none" />

        {/* HERO */}
        <section className="relative max-w-7xl mx-auto px-6 mb-24 lg:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col lg:flex-row gap-16 lg:items-center justify-between"
          >
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 text-xs tracking-[0.3em] font-bold uppercase text-[#C21E56] mb-8 bg-pink-50 px-4 py-2 rounded-full">
                <Sparkles size={14} /> Let's Talk
              </span>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-gray-900 leading-[0.9] tracking-tight mb-8">
                Designed for <br />
                <span className="text-[#D4AF37] italic font-light">Human Smiles</span>
              </h1>

              <p className="text-xl text-gray-500 font-light max-w-xl leading-relaxed border-l-2 border-[#D4AF37]/30 pl-6">
                A calm, private dental experience — crafted with precision, empathy, and modern aesthetics.
              </p>
            </div>

            {/* Contact Cards - Vertical Stack */}
            <div className="flex flex-col gap-4 w-full lg:w-auto min-w-[350px]">
              {[
                {
                  icon: <Phone size={20} />,
                  label: "Call",
                  value: "+91 87931 51502",
                  action: "tel:+918793151502"
                },
                {
                  icon: <Mail size={20} />,
                  label: "Email",
                  value: "hello@toothstories.com",
                  action: "mailto:hello@toothstories.com"
                },
                {
                  icon: <MapPin size={20} />,
                  label: "Visit",
                  value: "ToothStories Clinic",
                  action: "#map-section"
                },
              ].map((item, i) => (
                <motion.a
                  href={item.action}
                  key={i}
                  onClick={(e) => {
                    if (item.action.startsWith('#')) {
                      e.preventDefault();
                      const element = document.getElementById(item.action.substring(1));
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }
                  }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="flex items-center gap-5 bg-white p-5 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-all cursor-pointer block"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#C21E56]/5 text-[#C21E56] flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1">{item.label}</p>
                    <p className="text-gray-900 font-serif text-xl">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </section>

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 lg:gap-20">

          {/* FORM SECTION */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="bg-white rounded-[40px] p-8 md:p-12 shadow-xl shadow-gray-100/50 border border-gray-100 h-full"
            >
              <div className="mb-10">
                <h3 className="text-3xl font-serif text-gray-900 mb-2">Send a Message</h3>
                <p className="text-gray-500">Fill out the form below and we'll get back to you within 24 hours.</p>
              </div>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Full Name</label>
                    <input
                      className="w-full bg-gray-50 border border-transparent rounded-2xl px-6 py-4 outline-none focus:bg-white focus:border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/5 transition-all text-gray-900 placeholder:text-gray-400"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Email</label>
                    <input
                      className="w-full bg-gray-50 border border-transparent rounded-2xl px-6 py-4 outline-none focus:bg-white focus:border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/5 transition-all text-gray-900 placeholder:text-gray-400"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Phone Number</label>
                  <input
                    className="w-full bg-gray-50 border border-transparent rounded-2xl px-6 py-4 outline-none focus:bg-white focus:border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/5 transition-all text-gray-900 placeholder:text-gray-400"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Message</label>
                  <textarea
                    rows={4}
                    className="w-full bg-gray-50 border border-transparent rounded-2xl px-6 py-4 outline-none focus:bg-white focus:border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/5 transition-all text-gray-900 placeholder:text-gray-400 resize-none"
                    placeholder="How can we help you smile today?"
                  />
                </div>

                <button className="w-full py-5 bg-[#C21E56] text-white rounded-2xl font-bold tracking-widest uppercase hover:bg-[#a01845] transition-all shadow-lg hover:shadow-[#C21E56]/30 flex items-center justify-center gap-3 group mt-4">
                  Send Request
                  <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </motion.div>
          </div>

          {/* MAP & INFO SECTION */}
          <div className="lg:col-span-5 flex flex-col gap-8" id="map-section">
            {/* Map Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="relative h-[400px] lg:h-full min-h-[400px] rounded-[40px] overflow-hidden shadow-2xl border-4 border-white isolate group"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3779.7346473322173!2d73.8303667751955!3d18.67589978244808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b70992f06de9%3A0x1be893f6ff686be3!2sBARCODE%20By%20Rama%20Group%20Commercial%20Mall!5e0!3m2!1sen!2sin!4v1769167649114!5m2!1sen!2sin"
                className="w-full h-full grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                loading="lazy"
                style={{ border: 0 }}
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

              {/* Floating Location Card */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/90 backdrop-blur-xl border border-white/50 p-6 rounded-3xl shadow-lg">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-gray-900 font-serif text-xl mb-1">ToothStories Clinic</p>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        BARCODE, Rama Group Commercial Mall,<br />Pune, Maharashtra
                      </p>
                    </div>
                    <div className="bg-[#D4AF37]/10 p-2 rounded-xl text-[#D4AF37]">
                      <MapPin size={24} />
                    </div>
                  </div>

                  <a
                    href="https://maps.app.goo.gl/RWk3p71UPWVTgeLz7"
                    target="_blank"
                    className="flex items-center justify-center gap-2 w-full py-3 bg-gray-900 text-white text-xs font-bold uppercase tracking-widest rounded-xl hover:bg-black transition-colors"
                  >
                    <Navigation size={14} /> Get Directions
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Hours Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-[#1A1A1A] p-8 rounded-[40px] text-white relative overflow-hidden"
            >
              <div className="absolute top-8 right-8 text-white/10">
                <Clock size={40} />
              </div>

              <h4 className="text-2xl font-serif mb-6 relative z-10">Opening Hours</h4>
              <div className="space-y-4 relative z-10">
                <div className="flex justify-between items-center border-b border-white/10 pb-3">
                  <span className="text-gray-400 text-sm tracking-wide">Monday - Friday</span>
                  <span className="font-medium text-[#D4AF37]">9:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/10 pb-3">
                  <span className="text-gray-400 text-sm tracking-wide">Saturday</span>
                  <span className="font-medium text-[#D4AF37]">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm tracking-wide">Sunday</span>
                  <span className="font-medium text-[#C21E56]">By Appointment</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}
