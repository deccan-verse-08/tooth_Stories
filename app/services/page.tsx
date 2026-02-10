"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Shield,
  HeartPulse,
  Stethoscope,
  Wand2,
  Coffee,
  Microscope,
  ArrowRight,
  X,
  CalendarCheck,
  Check,
  Scan,
  Syringe,
  Sun,
  Activity,
  Crown,
  Smile,
  Baby,
} from "lucide-react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";
import dynamic from 'next/dynamic';

const Service3D = dynamic(() => import('@/components/Service3D'), {
  ssr: false,
  loading: () => <div className="w-full h-[600px] flex items-center justify-center">Loading...</div>
});

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

/* ================= DATA ================= */

const categories = [
  "All",
  "General",
  "Cosmetic",
  "Restorative",
  "Orthodontics",
  "Pediatric",
];

const services = [
  {
    id: "check-ups",
    title: "Routine Check-ups",
    category: "General",
    description: "Thorough examinations to monitor and maintain your oral health foundation.",
    details: "Regular dental check-ups are essential for maintaining healthy teeth and gums. Our comprehensive examinations allow us to detect improper oral hygiene habits, cavities, and gum disease early. We use advanced diagnostic technology to catch issues before they become major problems, ensuring your smile stays bright and healthy year-round.",
    image: "/Routne_checkup.jpg",
    icon: Stethoscope,
    gradient: "from-emerald-500 to-teal-600",
    bgGradient: "from-emerald-50 to-teal-50",
    shadow: "emerald-500/20",
  },
  {
    id: "x-rays",
    title: "Digital X-Rays",
    category: "General",
    description: "High-precision imaging for accurate diagnosis and effective treatment planning.",
    details: "Our state-of-the-art digital X-ray technology provides detailed images of your teeth and jaw with minimal radiation exposure. These images are crucial for detecting decay between teeth, bone loss, and other issues not visible to the naked eye, allowing for precise and effective treatment planning.",
    image: "/Digital_xray.jpg",
    icon: Scan,
    gradient: "from-cyan-500 to-sky-600",
    bgGradient: "from-cyan-50 to-sky-50",
    shadow: "cyan-500/20",
  },
  {
    id: "teeth-cleaning",
    title: "Teeth Cleaning",
    category: "General",
    description: "Professional hygiene sessions to remove plaque and polish your smile.",
    details: "Even with diligent brushing and flossing, plaque can harden into tartar. Our professional cleaning services remove these stubborn deposits, preventing gum disease and cavities. We polish your teeth to remove surface stains, leaving your mouth feeling incredibly fresh and clean.",
    image: "/Tooth_whitening.jpg",
    icon: Sparkles,
    gradient: "from-purple-500 to-fuchsia-600",
    bgGradient: "from-purple-50 to-fuchsia-50",
    shadow: "purple-500/20",
  },
  {
    id: "tooth-filling",
    title: "Tooth Filling",
    category: "Restorative",
    description: "Restore damaged teeth with durable, tooth-colored composite fillings.",
    details: "Cavities don't just compromise your tooth's structure; they can lead to pain and infection. We use high-quality, tooth-colored composite resins to fill cavities, restoring the tooth's shape and function while maintaining a natural appearance. Our fillings are durable and designed to blend seamlessly with your smile.",
    image: "/five.jpg",
    icon: Syringe,
    gradient: "from-[#D4AF37] to-[#C4A030]",
    bgGradient: "from-[#D4AF37]/5 to-[#C4A030]/5",
    shadow: "[#D4AF37]/20",
  },
  {
    id: "teeth-whitening",
    title: "Teeth Whitening",
    category: "Cosmetic",
    description: "Brighten your smile safely and effectively with our professional whitening options.",
    details: " stains from coffee, tea, and aging can dull your smile. Our professional teeth whitening treatments penetrate deep into the enamel to break up stains and discoloration. Whether you choose an in-office treatment for immediate results or a take-home kit for convenience, you'll achieve a visibly brighter, more radiant smile.",
    image: "/185.jpg",
    icon: Sun,
    gradient: "from-rose-500 to-pink-600",
    bgGradient: "from-rose-50 to-pink-50",
    shadow: "rose-500/20",
  },
  {
    id: "root-canal",
    title: "Root Canal Treatment",
    category: "Restorative",
    description: "Save infected teeth and eliminate pain with our gentle endodontic therapy.",
    details: "Root canal therapy is a tooth-saving procedure used to treat infection at the center of a tooth. Contrary to popular belief, modern root canals are relatively painless and extremely effective. We remove the infected pulp, clean the root canals, and seal them to prevent reinfection, allowing you to keep your natural tooth.",
    image: "/RC.jpg",
    icon: Activity,
    gradient: "from-emerald-500 to-teal-600",
    bgGradient: "from-emerald-50 to-teal-50",
    shadow: "emerald-500/20",
  },
  {
    id: "tooth-extraction",
    title: "Tooth Extraction",
    category: "General",
    description: "Safe and comfortable removal of problematic or damaged teeth.",
    details: "While we strive to save every tooth, there are times when extraction is necessary for your overall health—such as with severe decay, infection, or impacted wisdom teeth. Our team ensures the procedure is as comfortable as possible, and we provide comprehensive aftercare instructions and replacement options.",
    image: "/ToothExt.jpg",
    icon: Syringe,
    gradient: "from-cyan-500 to-sky-600",
    bgGradient: "from-cyan-50 to-sky-50",
    shadow: "cyan-500/20",
  },
  {
    id: "crowns-bridges",
    title: "Crowns and Bridges",
    category: "Restorative",
    description: "Strengthen damaged teeth or replace missing ones with custom prosthetics.",
    details: "Crowns 'cap' a damaged tooth to restore its shape and strength, while bridges replace one or more missing teeth by anchoring to adjacent natural teeth. Both are custom-crafted in a lab to match the color and contour of your natural teeth, providing a durable and aesthetic restoration.",
    image: "/dental-crowns-vs-bridges.jpg",
    icon: Crown,
    gradient: "from-[#D4AF37] to-[#C4A030]",
    bgGradient: "from-[#D4AF37]/5 to-[#C4A030]/5",
    shadow: "[#D4AF37]/20",
  },
  {
    id: "cosmetic-treatment",
    title: "Cosmetic Treatment",
    category: "Cosmetic",
    description: "A comprehensive range of procedures to enhance the aesthetics of your smile.",
    details: "From veneers to bonding and gum contouring, our cosmetic treatments are designed to address your specific aesthetic concerns. We work with you to design a treatment plan that harmonizes with your facial features, creating a smile that looks naturally beautiful and boosts your self-confidence.",
    image: "/ten.jpg",
    icon: Wand2,
    gradient: "from-purple-500 to-fuchsia-600",
    bgGradient: "from-purple-50 to-fuchsia-50",
    shadow: "purple-500/20",
  },
  {
    id: "dental-implants",
    title: "Dental Implants",
    category: "Restorative",
    description: "The gold standard for permanent tooth replacement.",
    details: "Dental implants provide a foundation for replacement teeth that look, feel, and function like natural teeth. Implants prevent bone loss and preserve facial structure. Our precise placement techniques ensure long-lasting results, giving you the freedom to eat, laugh, and smile without worry.",
    image: "/7438298_32619.jpg",
    icon: HeartPulse,
    gradient: "from-rose-500 to-pink-600",
    bgGradient: "from-rose-50 to-pink-50",
    shadow: "rose-500/20",
  },
  {
    id: "pediatric-treatment",
    title: "Pediatric Treatment",
    category: "Pediatric",
    description: "Gentle, friendly dental care specialized for children of all ages.",
    details: "We believe in creating positive dental experiences from an early age. Our pediatric services focus on prevention, education, and gentle treatment. We create a fun and safe environment where children feel comfortable, helping them establish a lifetime of healthy oral hygiene habits.",
    image: "/pd.jpg",
    icon: Baby,
    gradient: "from-cyan-500 to-sky-600",
    bgGradient: "from-cyan-50 to-sky-50",
    shadow: "cyan-500/20",
  },
  {
    id: "orthodontic-treatment",
    title: "Orthodontic Treatment",
    category: "Orthodontics",
    description: "Straighten your smile with modern braces and aligner solutions.",
    details: "A straight smile is a healthy smile. Our orthodontic treatments correct misalignment and bite issues, improving both aesthetics and function. We offer traditional braces as well as clear aligners, tailoring the treatment to your lifestyle and needs for optimal results.",
    image: "/orthodontic.jpg",
    icon: Smile,
    gradient: "from-purple-500 to-fuchsia-600",
    bgGradient: "from-purple-50 to-fuchsia-50",
    shadow: "purple-500/20",
  },
];

const processes = [
  {
    step: "01",
    title: "Consultation",
    desc: "A relaxed conversation to understand your goals and assess your dental health with advanced diagnostics.",
    icon: Coffee,
    gradient: "from-rose-500 to-pink-600",
  },
  {
    step: "02",
    title: "Digital Scan",
    desc: "Using high-precision 3D imaging technology to create your personalized treatment roadmap.",
    icon: Microscope,
    gradient: "from-[#D4AF37] to-[#C4A030]",
  },
  {
    step: "03",
    title: "Treatment",
    desc: "Precise execution using minimally invasive techniques in our spa-like treatment rooms.",
    icon: Sparkles,
    gradient: "from-[#C21E56] to-[#A01845]",
  },
];

/* ================= COMPONENT ================= */

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState("All");
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const filteredServices = services.filter(
    (s) => activeTab === "All" || s.category === activeTab,
  );

  const selectedService = services.find((s) => s.id === selectedId);

  return (
    <>
      <Header />
      <div className="bg-gradient-to-b from-[#FFFCFA] via-white to-[#FFF5F0] min-h-screen overflow-hidden">
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
                      Our Services
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Main Heading */}
              <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
                Excellence in Every
                <br />
                <span className="font-light bg-gradient-to-r from-[#C21E56] via-[#D4AF37] to-[#C21E56] bg-clip-text text-transparent">
                  Treatment We Offer
                </span>
              </h1>

              {/* Subheading */}
              <p className="font-serif text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
                Curated dental treatments designed to restore function and
                enhance your natural beauty with precision and care
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

        {/* ================= 3D INTERACTIVE SECTION ================= */}
        <section className="relative py-12 px-6">
          <div className="max-w-[1400px] mx-auto">
            <Service3D />
          </div>
        </section>

        {/* ================= FILTER TABS ================= */}
        <section className="relative py-12 px-6">
          <div className="max-w-[1400px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 overflow-x-auto pb-2 md:pb-0 md:overflow-visible md:flex-wrap md:justify-center bg-white/60 backdrop-blur-xl p-2 md:rounded-full rounded-2xl border-2 border-white/60 shadow-xl shadow-gray-200/50 md:w-fit mx-auto scrollbar-hide"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {categories.map((cat) => (
                <motion.button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-8 py-3 rounded-full text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 whitespace-nowrap flex-shrink-0 ${activeTab === cat
                    ? "bg-gradient-to-r from-[#C21E56] to-[#A01845] text-white shadow-lg shadow-[#C21E56]/30"
                    : "bg-transparent text-gray-500 hover:text-gray-900"
                    }`}
                >
                  {cat}
                </motion.button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ================= SERVICES GRID ================= */}
        <section className="relative py-16 lg:py-24 px-6">
          <div className="max-w-[1400px] mx-auto">
            <motion.div
              className="grid md:grid-cols-2 gap-8 lg:gap-10"
            >
              {filteredServices.map((service, idx) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={service.id}
                    onClick={() => setSelectedId(service.id)}
                    className="group relative cursor-pointer"
                  >
                    {/* Card */}
                    <div className="relative h-full rounded-3xl bg-white border border-gray-100/60 shadow-sm hover:shadow-2xl hover:shadow-[#C21E56]/10 transition-all duration-500 overflow-hidden">
                      {/* Image Section */}
                      <div className="relative aspect-[16/10] overflow-hidden rounded-t-3xl">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        {/* Overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

                        {/* Floating Icon */}
                        <motion.div
                          whileHover={floatingAnimation}
                          className="absolute top-6 right-6 z-10"
                        >
                          <div className="relative">
                            <div
                              className={`absolute inset-0 bg-gradient-to-br ${service.gradient} blur-xl opacity-50 rounded-2xl`}
                            />
                            <div
                              className={`relative p-4 rounded-2xl bg-gradient-to-br ${service.gradient} shadow-lg shadow-${service.shadow} group-hover:shadow-xl group-hover:scale-110 transition-all duration-500`}
                            >
                              <Icon
                                size={28}
                                className="text-white"
                                strokeWidth={2.5}
                              />
                            </div>
                          </div>
                        </motion.div>

                        {/* Category Badge */}
                        <div className="absolute bottom-6 left-6 z-10">
                          <div className="px-4 py-2 bg-white/95 backdrop-blur-sm rounded-full">
                            <span className="text-xs font-bold tracking-wider uppercase text-gray-700">
                              {service.category}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="relative p-8 lg:p-10">
                        {/* Animated background gradient on hover */}
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                        />

                        <div className="relative z-10">
                          <div className="flex justify-between items-start mb-4">
                            <h3 className="text-2xl lg:text-3xl font-semibold text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-700 group-hover:bg-clip-text transition-all duration-300">
                              {service.title}
                            </h3>
                            <div className="flex-shrink-0 w-10 h-10 rounded-full border-2 border-gray-200 flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-[#C21E56] group-hover:to-[#A01845] group-hover:border-transparent group-hover:text-white transition-all duration-500">
                              <ArrowRight size={18} />
                            </div>
                          </div>

                          <p className="text-gray-500 text-sm leading-relaxed font-light mb-6">
                            {service.description}
                          </p>

                          {/* Bottom accent line */}
                          <div className="pt-6 border-t border-gray-100">
                            <div
                              className={`h-1 w-0 group-hover:w-16 bg-gradient-to-r ${service.gradient} rounded-full transition-all duration-500`}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Corner decoration */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/50 to-transparent rounded-bl-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>

                    {/* Floating number badge */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 + idx * 0.1, duration: 0.5 }}
                      className="absolute -top-4 -left-4 z-20"
                    >
                      <div
                        className={`w-12 h-12 rounded-full bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-xl shadow-${service.shadow} group-hover:scale-110 transition-transform duration-300`}
                      >
                        <span className="text-white font-bold text-lg">
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* ================= THE PROCESS SECTION ================= */}
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
                      Our Process
                    </span>
                  </div>
                </div>
              </motion.div>

              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Crafting Your
                <br />
                <span className="font-light bg-gradient-to-r from-[#D4AF37] via-white to-[#D4AF37] bg-clip-text text-transparent">
                  Perfect Experience
                </span>
              </h2>

              <p className="font-serif text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light">
                A seamless three-step methodology designed for comfort,
                precision, and exceptional results
              </p>
            </motion.div>

            {/* Process Steps */}
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              className="grid md:grid-cols-3 gap-8 lg:gap-12"
            >
              {processes.map((process, idx) => {
                const Icon = process.icon;
                return (
                  <motion.div
                    key={process.step}
                    variants={item}
                    className="group relative"
                  >
                    <div className="relative h-full p-8 lg:p-10 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden">
                      {/* Glow effect */}
                      <div
                        className={`absolute -inset-1 bg-gradient-to-r ${process.gradient} opacity-0 group-hover:opacity-20 blur-2xl transition-all duration-500 rounded-3xl`}
                      />

                      <div className="relative z-10">
                        {/* Step Number */}
                        <div className="text-6xl lg:text-7xl font-serif italic text-[#D4AF37]/20 group-hover:text-[#D4AF37]/40 transition-all duration-500 mb-8">
                          {process.step}
                        </div>

                        {/* Icon */}
                        <motion.div
                          className="mb-8 inline-block"
                          whileHover={floatingAnimation}
                        >
                          <div className="relative">
                            <div
                              className={`absolute inset-0 bg-gradient-to-br ${process.gradient} blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 rounded-2xl`}
                            />
                            <div
                              className={`relative p-4 rounded-2xl bg-gradient-to-br ${process.gradient} shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-500`}
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
                        <h3 className="text-2xl lg:text-3xl font-semibold text-white mb-4">
                          {process.title}
                        </h3>

                        {/* Description */}
                        <p className="text-gray-400 text-sm leading-relaxed font-light">
                          {process.desc}
                        </p>

                        {/* Bottom accent line */}
                        <div className="mt-6 pt-6 border-t border-white/10">
                          <div
                            className={`h-1 w-0 group-hover:w-12 bg-gradient-to-r ${process.gradient} rounded-full transition-all duration-500`}
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
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                    Ready to Transform Your Smile?
                  </h3>
                  <p className="text-gray-500 mb-8 max-w-2xl mx-auto font-light">
                    Schedule your consultation today and discover how our expert
                    team can help you achieve the smile of your dreams
                  </p>
                  <Link href="/contact">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="group px-10 py-4 bg-gradient-to-r from-[#C21E56] to-[#A01845] text-white rounded-full font-bold text-xs tracking-[0.3em] uppercase shadow-2xl shadow-[#C21E56]/30 hover:shadow-[#C21E56]/50 transition-all duration-300"
                    >
                      <span className="flex items-center gap-3">
                        Book Your Appointment
                        <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                      </span>
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ================= MODAL ================= */}
        <AnimatePresence>
          {selectedId && selectedService && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedId(null)}
                className="absolute inset-0 bg-black/70 backdrop-blur-md"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
                className="w-full max-w-5xl bg-white rounded-3xl overflow-hidden shadow-2xl relative z-10 max-h-[90vh] flex flex-col md:flex-row"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedId(null)}
                  className="absolute top-6 right-6 z-20 p-3 bg-white/90 backdrop-blur-md rounded-full text-gray-900 hover:bg-white transition-all duration-300 shadow-lg"
                >
                  <X size={20} />
                </button>

                {/* Image Side */}
                <div className="w-full md:w-2/5 h-64 md:h-auto relative">
                  <Image
                    src={selectedService.image}
                    alt={selectedService.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/60 via-black/30 to-transparent" />

                  {/* Floating Icon in Modal */}
                  <div className="absolute bottom-6 left-6">
                    <div className="relative">
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${selectedService.gradient} blur-xl opacity-60 rounded-2xl`}
                      />
                      <div
                        className={`relative p-4 rounded-2xl bg-gradient-to-br ${selectedService.gradient} shadow-2xl`}
                      >
                        <selectedService.icon
                          size={32}
                          className="text-white"
                          strokeWidth={2.5}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="w-full md:w-3/5 p-8 lg:p-12 overflow-y-auto">
                  {/* Category Badge */}
                  <div className="inline-block mb-6">
                    <div
                      className={`px-4 py-2 bg-gradient-to-r ${selectedService.bgGradient} rounded-full border border-gray-100`}
                    >
                      <span className="text-xs font-bold tracking-wider uppercase text-gray-700">
                        {selectedService.category}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-4 leading-tight">
                    {selectedService.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-gray-600 text-lg font-medium leading-relaxed mb-6 pb-6 border-b border-gray-100">
                    {selectedService.description}
                  </p>

                  {/* Detailed Description */}
                  <div className="prose prose-gray mb-8">
                    <p className="text-gray-600 leading-relaxed">
                      {selectedService.details}
                    </p>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-10">
                    <div className="flex items-start gap-3">
                      <div
                        className={`mt-1 p-1 rounded-full bg-gradient-to-r ${selectedService.gradient}`}
                      >
                        <Check size={14} className="text-white" />
                      </div>
                      <span className="text-sm text-gray-600">
                        Personalized treatment planning
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div
                        className={`mt-1 p-1 rounded-full bg-gradient-to-r ${selectedService.gradient}`}
                      >
                        <Check size={14} className="text-white" />
                      </div>
                      <span className="text-sm text-gray-600">
                        State-of-the-art technology and materials
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div
                        className={`mt-1 p-1 rounded-full bg-gradient-to-r ${selectedService.gradient}`}
                      >
                        <Check size={14} className="text-white" />
                      </div>
                      <span className="text-sm text-gray-600">
                        Comfortable, spa-like environment
                      </span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Link href="/contact" className="block">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full py-4 bg-gradient-to-r ${selectedService.gradient} text-white rounded-full font-bold tracking-wide shadow-xl shadow-${selectedService.shadow} hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2`}
                    >
                      <CalendarCheck size={20} />
                      Schedule Consultation
                    </motion.div>
                  </Link>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
      <Footer />
    </>
  );
}
