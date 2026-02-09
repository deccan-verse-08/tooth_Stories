"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  Sparkles,
  Clock,
  Navigation,
  MessageCircle,
  Calendar,
  Award,
} from "lucide-react";

/* ================= VARIANTS ================= */

const container = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40, scale: 0.95, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease: [0.25, 0.4, 0.25, 1] as const,
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

export default function ContactPage() {
  const contactMethods = [
    {
      icon: Phone,
      label: "Call Us",
      value: "+91 76664 19396",
      action: "tel:+917666419396",
      gradient: "from-emerald-500 to-teal-600",
      bgGradient: "from-emerald-50 to-teal-50",
      shadow: "emerald-500/20",
      desc: "Speak with our team",
    },
    {
      icon: Mail,
      label: "Email Us",
      value: "hello@toothstories.com",
      action: "mailto:hello@toothstories.com",
      gradient: "from-[#C21E56] to-[#A01845]",
      bgGradient: "from-[#C21E56]/5 to-[#A01845]/5",
      shadow: "[#C21E56]/20",
      desc: "Send us a message",
    },
    {
      icon: MapPin,
      label: "Visit Us",
      value: "ToothStories Clinic",
      action: "#map-section",
      gradient: "from-[#D4AF37] to-[#C4A030]",
      bgGradient: "from-[#D4AF37]/10 to-[#C4A030]/10",
      shadow: "[#D4AF37]/20",
      desc: "Find us on the map",
    },
  ];

  const hours = [
    { day: "Mon - Sat (Morning)", time: "9:00 AM - 5:00 PM", status: "open" },
    { day: "Mon - Sat (Evening)", time: "6:00 PM - 9:00 PM", status: "open" },
    { day: "Sunday", time: "By Appointment", status: "appointment" },
  ];

  const features = [
    {
      icon: Calendar,
      title: "Flexible Scheduling",
      desc: "Book at your convenience",
    },
    {
      icon: Award,
      title: "Expert Care",
      desc: "Certified specialists",
    },
    {
      icon: MessageCircle,
      title: "Quick Response",
      desc: "Reply within 24 hours",
    },
  ];

  return (
    <>
      <Header />
      <main className="bg-gradient-to-b from-[#FFFCFA] via-white to-[#FFF5F0] min-h-screen overflow-hidden relative">
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

        {/* ================= HERO SECTION ================= */}
        <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-28">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
              className="text-center mb-20 lg:mb-28"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="inline-block mb-6"
              >
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#C21E56]/30 to-[#D4AF37]/30 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500" />
                  <div className="relative px-6 py-2.5 bg-white/90 backdrop-blur-sm border-2 border-[#D4AF37]/30 rounded-full shadow-lg flex items-center gap-2">
                    <Sparkles size={14} className="text-[#C21E56]" />
                    <span className="text-xs font-bold tracking-[0.3em] uppercase bg-gradient-to-r from-[#C21E56] to-[#D4AF37] bg-clip-text text-transparent">
                      Get In Touch
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Main Heading */}
              <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
                Let's Create Your
                <br />
                <span className="font-light bg-gradient-to-r from-[#C21E56] via-[#D4AF37] to-[#C21E56] bg-clip-text text-transparent">
                  Perfect Smile Journey
                </span>
              </h1>

              {/* Subheading */}
              <p className="font-serif text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
                A calm, private dental experience — crafted with precision,
                empathy, and modern aesthetics
              </p>

              {/* Decorative line */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "5rem" }}
                transition={{ duration: 1, delay: 0.5 }}
                className="h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-10 rounded-full"
              />
            </motion.div>

            {/* Contact Methods Grid */}
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-20"
            >
              {contactMethods.map((method, idx) => {
                const Icon = method.icon;
                return (
                  <motion.a
                    key={idx}
                    variants={item}
                    href={method.action}
                    onClick={(e) => {
                      if (method.action.startsWith("#")) {
                        e.preventDefault();
                        const element = document.getElementById(
                          method.action.substring(1),
                        );
                        if (element) {
                          element.scrollIntoView({ behavior: "smooth" });
                        }
                      }
                    }}
                    className="group relative block"
                  >
                    {/* Card */}
                    <div className="relative h-full p-8 rounded-3xl bg-white border border-gray-100/60 shadow-sm hover:shadow-xl hover:shadow-[#C21E56]/10 transition-all duration-500 overflow-hidden">
                      {/* Animated background gradient on hover */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${method.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                      />

                      {/* Glow effect */}
                      <div
                        className={`absolute -inset-1 bg-gradient-to-r ${method.gradient} opacity-0 group-hover:opacity-20 blur-2xl transition-all duration-500 rounded-3xl`}
                      />

                      <div className="relative z-10">
                        {/* Icon */}
                        <motion.div
                          className="mb-6 inline-block"
                          whileHover={floatingAnimation}
                        >
                          <div className="relative">
                            <div
                              className={`absolute inset-0 bg-gradient-to-br ${method.gradient} blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 rounded-2xl`}
                            />
                            <div
                              className={`relative p-4 rounded-2xl bg-gradient-to-br ${method.gradient} shadow-lg shadow-${method.shadow} group-hover:shadow-xl group-hover:scale-110 transition-all duration-500`}
                            >
                              <Icon
                                size={28}
                                className="text-white"
                                strokeWidth={2.5}
                              />
                            </div>
                          </div>
                        </motion.div>

                        {/* Label */}
                        <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
                          {method.label}
                        </p>

                        {/* Value */}
                        <h3 className="text-xl lg:text-2xl font-serif text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-700 group-hover:bg-clip-text transition-all duration-300">
                          {method.value}
                        </h3>

                        {/* Description */}
                        <p className="text-gray-500 text-sm font-light">
                          {method.desc}
                        </p>

                        {/* Bottom accent line */}
                        <div className="mt-6 pt-6 border-t border-gray-100">
                          <div
                            className={`h-1 w-0 group-hover:w-12 bg-gradient-to-r ${method.gradient} rounded-full transition-all duration-500`}
                          />
                        </div>
                      </div>
                    </div>
                  </motion.a>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* ================= FORM & MAP SECTION ================= */}
        <section className="relative py-16 lg:py-20">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
              {/* FORM SECTION */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="lg:col-span-7"
              >
                <div className="relative h-full p-8 lg:p-12 rounded-3xl bg-white border border-gray-100/60 shadow-xl shadow-gray-200/50 overflow-hidden">
                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#D4AF37]/10 to-transparent rounded-bl-[100px]" />

                  <div className="relative z-10">
                    {/* Header */}
                    <div className="mb-10">
                      <div className="inline-block mb-4">
                        <div className="px-4 py-2 bg-gradient-to-r from-[#C21E56]/5 to-[#D4AF37]/5 rounded-full border border-[#D4AF37]/20">
                          <span className="text-xs font-bold tracking-wider uppercase text-gray-700">
                            Send a Message
                          </span>
                        </div>
                      </div>
                      <h3 className="text-3xl lg:text-4xl font-serif text-gray-900 mb-3">
                        Start Your Journey
                      </h3>
                      <p className="text-gray-500 font-light leading-relaxed">
                        Fill out the form below and we'll get back to you within
                        24 hours to schedule your consultation.
                      </p>
                    </div>

                    {/* Form */}
                    <form className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">
                            Full Name
                          </label>
                          <input
                            type="text"
                            className="w-full bg-gray-50 border-2 border-transparent rounded-2xl px-6 py-4 outline-none focus:bg-white focus:border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/10 transition-all text-gray-900 placeholder:text-gray-400"
                            placeholder="John Doe"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">
                            Email Address
                          </label>
                          <input
                            type="email"
                            className="w-full bg-gray-50 border-2 border-transparent rounded-2xl px-6 py-4 outline-none focus:bg-white focus:border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/10 transition-all text-gray-900 placeholder:text-gray-400"
                            placeholder="john@example.com"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          className="w-full bg-gray-50 border-2 border-transparent rounded-2xl px-6 py-4 outline-none focus:bg-white focus:border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/10 transition-all text-gray-900 placeholder:text-gray-400"
                          placeholder="+91 XXXXX XXXXX"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">
                          Your Message
                        </label>
                        <textarea
                          rows={5}
                          className="w-full bg-gray-50 border-2 border-transparent rounded-2xl px-6 py-4 outline-none focus:bg-white focus:border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/10 transition-all text-gray-900 placeholder:text-gray-400 resize-none"
                          placeholder="How can we help you smile today?"
                        />
                      </div>

                      <motion.button
                        type="submit"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full py-5 bg-gradient-to-r from-[#C21E56] to-[#A01845] text-white rounded-2xl font-bold tracking-widest uppercase shadow-xl shadow-[#C21E56]/30 hover:shadow-2xl hover:shadow-[#C21E56]/40 transition-all flex items-center justify-center gap-3 group mt-8"
                      >
                        Send Your Request
                        <Send
                          size={18}
                          className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                        />
                      </motion.button>
                    </form>

                    {/* Features */}
                    <div className="grid grid-cols-3 gap-4 mt-10 pt-10 border-t border-gray-100">
                      {features.map((feature, idx) => {
                        const Icon = feature.icon;
                        return (
                          <div key={idx} className="text-center">
                            <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-[#C21E56]/5 to-[#D4AF37]/5 text-[#C21E56] mb-3">
                              <Icon size={20} strokeWidth={2.5} />
                            </div>
                            <p className="text-xs font-bold text-gray-900 mb-1">
                              {feature.title}
                            </p>
                            <p className="text-[10px] text-gray-500">
                              {feature.desc}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* MAP & INFO SECTION */}
              <div
                className="lg:col-span-5 flex flex-col gap-8"
                id="map-section"
              >
                {/* Map Card */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="relative h-[450px] lg:h-full min-h-[450px] rounded-3xl overflow-hidden shadow-2xl border-2 border-white group"
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3779.7346473322173!2d73.8303667751955!3d18.67589978244808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b70992f06de9%3A0x1be893f6ff686be3!2sBARCODE%20By%20Rama%20Group%20Commercial%20Mall!5e0!3m2!1sen!2sin!4v1769167649114!5m2!1sen!2sin"
                    className="w-full h-full grayscale-[0.3] opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                    loading="lazy"
                    style={{ border: 0 }}
                    referrerPolicy="no-referrer-when-downgrade"
                  />

                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

                  {/* Floating Location Card */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/95 backdrop-blur-xl border-2 border-white/60 p-6 rounded-3xl shadow-2xl">
                      <div className="flex items-start gap-4 mb-4">
                        <motion.div
                          whileHover={floatingAnimation}
                          className="flex-shrink-0"
                        >
                          <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37] to-[#C4A030] blur-lg opacity-40 rounded-2xl" />
                            <div className="relative bg-gradient-to-br from-[#D4AF37] to-[#C4A030] p-3 rounded-2xl text-white shadow-lg">
                              <MapPin size={24} strokeWidth={2.5} />
                            </div>
                          </div>
                        </motion.div>
                        <div className="flex-1">
                          <p className="text-gray-900 font-serif text-xl font-semibold mb-1">
                            ToothStories Clinic
                          </p>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            B 319, Barcode,
                            Borate-Jambhulkar Chowk,<br />
                            Shiv Rd, Bhoradewadi, Moshi,
                            Pimpri-Chinchwad, Maharashtra.<br />
                          </p>
                        </div>
                      </div>

                      <a
                        href="https://maps.app.goo.gl/RWk3p71UPWVTgeLz7"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="flex items-center justify-center gap-2 w-full py-3 bg-gray-900 text-white text-xs font-bold uppercase tracking-widest rounded-xl hover:bg-black transition-colors shadow-lg"
                        >
                          <Navigation size={14} />
                          Get Directions
                        </motion.div>
                      </a>
                    </div>
                  </div>
                </motion.div>

                {/* Hours Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="relative p-6 rounded-3xl bg-gradient-to-br from-gray-900 to-black text-white overflow-hidden border-2 border-white/10 shadow-2xl"
                >
                  {/* Background pattern */}
                  <div className="absolute inset-0 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.03]" />

                  {/* Decorative orb */}
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#D4AF37]/30 to-transparent rounded-full blur-3xl"
                  />

                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex items-center gap-3 mb-5">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37] to-[#C4A030] blur-lg opacity-40 rounded-xl" />
                        <div className="relative bg-gradient-to-br from-[#D4AF37] to-[#C4A030] p-2.5 rounded-xl shadow-lg">
                          <Clock
                            size={20}
                            className="text-white"
                            strokeWidth={2.5}
                          />
                        </div>
                      </div>
                      <h4 className="text-xl font-serif font-semibold">
                        Opening Hours
                      </h4>
                    </div>

                    {/* Hours List */}
                    <div className="divide-y divide-white/10">
                      {hours.map((hour, idx) => (
                        <div
                          key={idx}
                          className="flex justify-between items-center py-2.5"
                        >
                          <span className="text-gray-300 text-sm font-medium">
                            {hour.day}
                          </span>
                          <span
                            className={`font-bold text-sm ${hour.status === "open"
                              ? "text-[#D4AF37]"
                              : "text-[#C21E56]"
                              }`}
                          >
                            {hour.time}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Bottom accent */}
                    <div className="mt-4 pt-4 border-t border-white/10">
                      <div className="flex items-center justify-center gap-2 text-[#D4AF37] text-xs">
                        <Sparkles size={14} />
                        <span className="font-medium tracking-wide">
                          Walk-ins Welcome
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= BOTTOM CTA ================= */}
        <section className="relative py-20 lg:py-28 px-6">
          <div className="max-w-[1400px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-gradient-to-r from-[#C21E56]/20 to-[#D4AF37]/20 blur-3xl" />
                <div className="relative bg-white/90 backdrop-blur-xl p-10 lg:p-14 rounded-3xl border-2 border-[#D4AF37]/20 shadow-2xl max-w-3xl">
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                    Have Questions?
                  </h3>
                  <p className="text-gray-500 mb-8 font-light leading-relaxed">
                    Our friendly team is here to answer any questions you may
                    have about our services, treatments, or scheduling
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <motion.a
                      href="tel:+917666419396"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 bg-gradient-to-r from-[#C21E56] to-[#A01845] text-white rounded-full font-bold text-xs tracking-[0.2em] uppercase shadow-xl shadow-[#C21E56]/30 hover:shadow-[#C21E56]/50 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <Phone size={16} />
                      Call Now
                    </motion.a>
                    <motion.a
                      href="mailto:hello@toothstories.com"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 bg-white text-gray-900 rounded-full font-bold text-xs tracking-[0.2em] uppercase shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 border-2 border-gray-200"
                    >
                      <Mail size={16} />
                      Send Email
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
