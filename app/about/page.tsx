"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Award,
  Heart,
  Sparkles,
  GraduationCap,
  Stethoscope,
  Users,
  Target,
  Star,
  CheckCircle2,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
      ease: [0.25, 0.46, 0.45, 0.94] as const,
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

/* ================= DATA ================= */

const doctors = [
  {
    name: "Dr. Vaibhav Harkare",
    role: "Lead Implantologist & Founder",
    education: "MDS - Oral Surgery",
    image: "/d1.jpg",
    gradient: "from-[#C21E56] to-[#A01845]",
    bgGradient: "from-[#C21E56]/5 to-[#A01845]/5",
    shadow: "[#C21E56]/20",
  },
  {
    name: "Dr. Snehal Kulkarni",
    role: "Cosmetic Dentist & Co-Founder",
    education: "BDS, MDS - Conservative",
    image: "/d2.jpg",
    gradient: "from-[#D4AF37] to-[#C4A030]",
    bgGradient: "from-[#D4AF37]/10 to-[#C4A030]/10",
    shadow: "[#D4AF37]/20",
  },
];

const values = [
  {
    icon: Heart,
    title: "Patient First",
    desc: "Your comfort, trust, and wellbeing are at the heart of everything we do.",
    gradient: "from-rose-500 to-pink-600",
    bgGradient: "from-rose-50 to-pink-50",
    shadow: "rose-500/20",
  },
  {
    icon: Award,
    title: "Clinical Excellence",
    desc: "Decades of expertise combined with continuous learning and innovation.",
    gradient: "from-[#D4AF37] to-[#C4A030]",
    bgGradient: "from-[#D4AF37]/10 to-[#C4A030]/10",
    shadow: "[#D4AF37]/20",
  },
  {
    icon: Sparkles,
    title: "Precision Care",
    desc: "State-of-the-art technology ensuring accuracy in every treatment.",
    gradient: "from-purple-500 to-fuchsia-600",
    bgGradient: "from-purple-50 to-fuchsia-50",
    shadow: "purple-500/20",
  },
  {
    icon: Target,
    title: "Personalized Approach",
    desc: "Tailored treatment plans designed specifically for your unique needs.",
    gradient: "from-cyan-500 to-sky-600",
    bgGradient: "from-cyan-50 to-sky-50",
    shadow: "cyan-500/20",
  },
];

const achievements = [
  {
    number: "15+",
    label: "Years Experience",
    icon: Star,
  },
  {
    number: "10,000+",
    label: "Happy Patients",
    icon: Users,
  },
  {
    number: "98%",
    label: "Success Rate",
    icon: CheckCircle2,
  },
  {
    number: "50+",
    label: "Awards Won",
    icon: Award,
  },
];

/* ================= COMPONENT ================= */

export default function AboutPage() {
  return (
    <>
      <Header />

      <main className="bg-gradient-to-b from-[#FFFCFA] via-white to-[#FFF5F0] min-h-screen overflow-hidden">
        {/* ================= HERO SECTION ================= */}
        <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-28 overflow-hidden">
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

          <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
              className="text-center"
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
                  <div className="relative px-6 py-2.5 bg-white/90 backdrop-blur-sm border-2 border-[#D4AF37]/30 rounded-full shadow-lg">
                    <span className="text-xs font-bold tracking-[0.3em] uppercase bg-gradient-to-r from-[#C21E56] to-[#D4AF37] bg-clip-text text-transparent">
                      About Tooth Stories
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Main Heading */}
              <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
                Where Excellence
                <br />
                <span className="font-light bg-gradient-to-r from-[#C21E56] via-[#D4AF37] to-[#C21E56] bg-clip-text text-transparent">
                  Meets Empathy
                </span>
              </h1>

              {/* Subheading */}
              <p className="font-serif text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
                Meet the passionate dental experts dedicated to crafting
                beautiful, healthy smiles through precision, care, and artistry
              </p>

              {/* Decorative line */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "5rem" }}
                transition={{ duration: 1, delay: 0.5 }}
                className="h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-10 rounded-full"
              />
            </motion.div>
          </div>
        </section>

        {/* ================= ACHIEVEMENTS SECTION ================= */}
        <section className="relative py-16 px-6">
          <div className="max-w-[1400px] mx-auto">
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8"
            >
              {achievements.map((achievement, idx) => {
                const Icon = achievement.icon;
                return (
                  <motion.div
                    key={idx}
                    variants={item}
                    className="group relative"
                  >
                    <div className="relative h-full p-6 lg:p-8 rounded-3xl bg-white border border-gray-100/60 shadow-sm hover:shadow-xl hover:shadow-[#C21E56]/10 transition-all duration-500 overflow-hidden text-center">
                      {/* Glow effect */}
                      <div className="absolute -inset-1 bg-gradient-to-r from-[#C21E56] to-[#D4AF37] opacity-0 group-hover:opacity-20 blur-2xl transition-all duration-500 rounded-3xl" />

                      <div className="relative z-10">
                        {/* Icon */}
                        <motion.div
                          className="mb-4 inline-block"
                          whileHover={floatingAnimation}
                        >
                          <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#C21E56] to-[#D4AF37] blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 rounded-2xl" />
                            <div className="relative p-3 rounded-2xl bg-gradient-to-br from-[#C21E56] to-[#A01845] shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-500">
                              <Icon
                                size={24}
                                className="text-white"
                                strokeWidth={2.5}
                              />
                            </div>
                          </div>
                        </motion.div>

                        {/* Number */}
                        <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                          {achievement.number}
                        </h3>

                        {/* Label */}
                        <p className="text-gray-500 text-xs font-light uppercase tracking-wider">
                          {achievement.label}
                        </p>

                        {/* Bottom accent line */}
                        <div className="mt-4 pt-4 border-t border-gray-100">
                          <div className="h-1 w-0 group-hover:w-8 bg-gradient-to-r from-[#C21E56] to-[#D4AF37] rounded-full transition-all duration-500 mx-auto" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* ================= DOCTORS SECTION ================= */}
        <section className="relative py-20 lg:py-28 px-6">
          <div className="max-w-[1400px] mx-auto">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
              className="text-center mb-16 lg:mb-20"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="inline-block mb-6"
              >
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#C21E56]/30 to-[#D4AF37]/30 rounded-full blur-xl" />
                  <div className="relative px-6 py-2.5 bg-white/90 backdrop-blur-sm border-2 border-[#D4AF37]/30 rounded-full shadow-lg">
                    <span className="text-xs font-bold tracking-[0.3em] uppercase bg-gradient-to-r from-[#C21E56] to-[#D4AF37] bg-clip-text text-transparent">
                      Meet Our Experts
                    </span>
                  </div>
                </div>
              </motion.div>

              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                The Hands Behind
                <br />
                <span className="font-light bg-gradient-to-r from-[#C21E56] via-[#D4AF37] to-[#C21E56] bg-clip-text text-transparent">
                  The Craft
                </span>
              </h2>

              <p className="font-serif text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed font-light">
                Our founders bring together decades of experience, advanced
                training, and genuine care
              </p>
            </motion.div>

            {/* Doctors Grid */}
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              className="grid md:grid-cols-2 gap-10 lg:gap-16 max-w-5xl mx-auto"
            >
              {doctors.map((doc, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  className="group relative"
                >
                  <div className="relative h-full p-8 lg:p-10 rounded-3xl bg-white border border-gray-100/60 shadow-sm hover:shadow-2xl hover:shadow-[#C21E56]/10 transition-all duration-500 overflow-hidden">
                    {/* Animated background gradient on hover */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${doc.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    />

                    {/* Glow effect */}
                    <div
                      className={`absolute -inset-1 bg-gradient-to-r ${doc.gradient} opacity-0 group-hover:opacity-20 blur-2xl transition-all duration-500 rounded-3xl`}
                    />

                    <div className="relative z-10 flex flex-col items-center">
                      {/* Doctor Image */}
                      <div className="relative w-56 h-56 lg:w-64 lg:h-64 mb-8 group/img">
                        {/* Decorative circle */}
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 30,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="absolute inset-0 rounded-full border-2 border-dashed border-[#D4AF37]/30"
                        />

                        {/* Image container */}
                        <div className="absolute inset-2 rounded-full overflow-hidden bg-gradient-to-br from-[#FDF8F4] to-white border-4 border-white shadow-xl">
                          <Image
                            src={doc.image}
                            alt={doc.name}
                            fill
                            className="object-cover transition-transform duration-700 group-hover/img:scale-110"
                          />
                        </div>

                        {/* Floating badge */}
                        <motion.div
                          whileHover={floatingAnimation}
                          className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-10"
                        >
                          <div className="relative">
                            <div
                              className={`absolute inset-0 bg-gradient-to-br ${doc.gradient} blur-xl opacity-60 rounded-2xl`}
                            />
                            <div
                              className={`relative px-4 py-2 rounded-2xl bg-gradient-to-br ${doc.gradient} shadow-xl flex items-center gap-2`}
                            >
                              <GraduationCap
                                size={16}
                                className="text-white"
                                strokeWidth={2.5}
                              />
                              <span className="text-white text-xs font-bold uppercase tracking-wider">
                                {doc.education}
                              </span>
                            </div>
                          </div>
                        </motion.div>
                      </div>

                      {/* Doctor Info */}
                      <div className="text-center">
                        <h3 className="text-2xl lg:text-3xl font-serif font-semibold text-gray-900 mb-2">
                          {doc.name}
                        </h3>

                        <p className="text-[#C21E56] font-bold text-xs uppercase tracking-[0.2em] mb-6">
                          {doc.role}
                        </p>

                        {/* Expertise Tags */}
                        <div className="flex flex-wrap gap-2 justify-center">
                          <div className="px-3 py-1.5 bg-gray-50 rounded-full">
                            <span className="text-[10px] font-medium text-gray-600 uppercase tracking-wider">
                              {index === 0 ? "Implantology" : "Cosmetic"}
                            </span>
                          </div>
                          <div className="px-3 py-1.5 bg-gray-50 rounded-full">
                            <span className="text-[10px] font-medium text-gray-600 uppercase tracking-wider">
                              {index === 0 ? "Oral Surgery" : "Restorative"}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Bottom accent line */}
                      <div className="mt-8 pt-8 border-t border-gray-100 w-full">
                        <div
                          className={`h-1 w-0 group-hover:w-16 bg-gradient-to-r ${doc.gradient} rounded-full transition-all duration-500 mx-auto`}
                        />
                      </div>
                    </div>

                    {/* Corner decoration */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/50 to-transparent rounded-bl-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Floating number badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                    className="absolute -top-4 -right-4 z-20"
                  >
                    <div
                      className={`w-12 h-12 rounded-full bg-gradient-to-br ${doc.gradient} flex items-center justify-center shadow-xl shadow-${doc.shadow} group-hover:scale-110 transition-transform duration-300`}
                    >
                      <span className="text-white font-bold text-lg">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ================= VALUES SECTION ================= */}
        <section className="relative py-32 lg:py-40 overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black" />
          <div className="absolute inset-0 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.03]" />

          {/* Animated background orbs */}
          <motion.div
            animate={{
              x: [0, 30, 0],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-[#D4AF37]/20 to-[#C21E56]/10 rounded-full blur-3xl"
          />

          <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
              className="text-center mb-20 lg:mb-28"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="inline-block mb-6"
              >
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#C21E56]/30 to-[#D4AF37]/30 rounded-full blur-xl" />
                  <div className="relative px-6 py-2.5 bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-full">
                    <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#D4AF37]">
                      Our Philosophy
                    </span>
                  </div>
                </div>
              </motion.div>

              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Beyond Dentistry,
                <br />
                <span className="font-light bg-gradient-to-r from-[#D4AF37] via-white to-[#D4AF37] bg-clip-text text-transparent">
                  Creating Experiences
                </span>
              </h2>

              <p className="font-serif text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light">
                Our core values guide every treatment, every interaction, and
                every smile we create
              </p>
            </motion.div>

            {/* Values Grid */}
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10"
            >
              {values.map((value, idx) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={idx}
                    variants={item}
                    className="group relative"
                  >
                    <div className="relative h-full p-8 lg:p-10 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden">
                      {/* Glow effect */}
                      <div
                        className={`absolute -inset-1 bg-gradient-to-r ${value.gradient} opacity-0 group-hover:opacity-20 blur-2xl transition-all duration-500 rounded-3xl`}
                      />

                      <div className="relative z-10">
                        {/* Icon */}
                        <motion.div
                          className="mb-8 inline-block"
                          whileHover={floatingAnimation}
                        >
                          <div className="relative">
                            <div
                              className={`absolute inset-0 bg-gradient-to-br ${value.gradient} blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 rounded-2xl`}
                            />
                            <div
                              className={`relative p-4 rounded-2xl bg-gradient-to-br ${value.gradient} shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-500`}
                            >
                              <Icon
                                size={32}
                                className="text-white"
                                strokeWidth={2.5}
                              />
                            </div>
                          </div>
                        </motion.div>

                        {/* Title */}
                        <h3 className="text-xl lg:text-2xl font-semibold text-white mb-4">
                          {value.title}
                        </h3>

                        {/* Description */}
                        <p className="text-gray-400 text-sm leading-relaxed font-light">
                          {value.desc}
                        </p>

                        {/* Bottom accent line */}
                        <div className="mt-6 pt-6 border-t border-white/10">
                          <div
                            className={`h-1 w-0 group-hover:w-12 bg-gradient-to-r ${value.gradient} rounded-full transition-all duration-500`}
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* ================= CTA SECTION ================= */}
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
                <div className="relative bg-white/90 backdrop-blur-xl p-10 lg:p-14 rounded-3xl border-2 border-[#D4AF37]/20 shadow-2xl">
                  <Stethoscope className="w-12 h-12 text-[#C21E56] mx-auto mb-6" />
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                    Experience the Tooth Stories Difference
                  </h3>
                  <p className="text-gray-500 mb-8 max-w-2xl mx-auto font-light">
                    Let our expert team transform your smile with personalized
                    care and cutting-edge dentistry
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group px-10 py-4 bg-gradient-to-r from-[#C21E56] to-[#A01845] text-white rounded-full font-bold text-xs tracking-[0.3em] uppercase shadow-2xl shadow-[#C21E56]/30 hover:shadow-[#C21E56]/50 transition-all duration-300"
                  >
                    <span className="flex items-center gap-3">
                      Book Your Consultation
                      <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                    </span>
                  </motion.button>
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
