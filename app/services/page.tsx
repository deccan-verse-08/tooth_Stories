"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight,
  Sparkles,
  Shield,
  HeartPulse,
  Stethoscope,
  Microscope,
  Wand2,
  Coffee,
  ArrowUpRight,
  X,
  CalendarCheck,
} from "lucide-react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";

/* ================= DATA ================= */

const categories = [
  "All",
  "General",
  "Cosmetic",
  "Restorative",
  "Orthodontics",
];

const services = [
  {
    id: "smile-makeovers",
    title: "Smile Makeovers",
    category: "Cosmetic",
    description:
      "A comprehensive approach to transforming your smile using veneers and bonding.",
    details:
      "Our signature Smile Makeover is a bespoke treatment plan that combines artistry with advanced dental science. Whether you're looking to correct chips, gaps, discoloration, or misalignment, we create a harmonious look that compliments your facial features. We use high-quality porcelain veneers and composite bonding to craft a smile that looks naturally flawless and boosts your confidence.",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95",
    icon: <Wand2 size={24} />,
  },
  {
    id: "routine-checkups",
    title: "Routine Check-ups",
    category: "General",
    description:
      "Examinations and professional cleanings to maintain your long-term oral health.",
    details:
      "Prevention is the foundation of a healthy smile. Our routine check-ups go beyond just a quick look. We use digital imaging and intraoral cameras to detect early signs of decay or gum disease. Our gentle hygienists provide a thorough cleaning to remove plaque and tartar build-up, leaving your teeth feeling polished and fresh. Regular visits ensure your smile stays healthy for life.",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514",
    icon: <Stethoscope size={24} />,
  },
  {
    id: "invisalign",
    title: "Invisalign® Treatment",
    category: "Orthodontics",
    description:
      "Discreetly straighten your teeth with custom-made, clear aligners.",
    details:
      "Achieve the straight smile you've always wanted without the metal wires. Invisalign® uses a series of clear, removable aligners to gradually shift your teeth into place. It's comfortable, virtually invisible, and fits seamlessly into your lifestyle. We use 3D scanning to plan your treatment from start to finish, so you can see your future smile before you even begin.",
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787",
    icon: <Shield size={24} />,
  },
  {
    id: "dental-implants",
    title: "Dental Implants",
    category: "Restorative",
    description:
      "The gold standard for tooth replacement, offering a natural-looking solution.",
    details:
      "Missing teeth can affect your ability to eat, speak, and smile with confidence. Dental implants are the most natural and durable solution for tooth replacement. We place a titanium post that acts as a new root, topped with a custom-crafted porcelain crown that matches your natural teeth perfectly. It's a permanent solution that restores both function and aesthetics.",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09",
    icon: <HeartPulse size={24} />,
  },
];

const processes = [
  {
    step: "01",
    title: "Consultation",
    desc: "A relaxed conversation to understand your goals.",
    icon: <Coffee size={24} />,
  },
  {
    step: "02",
    title: "Digital Scan",
    desc: "Using high-precision 3D imaging for your smile map.",
    icon: <Microscope size={24} />,
  },
  {
    step: "03",
    title: "Treatment",
    desc: "Precise execution using minimally invasive techniques.",
    icon: <Sparkles size={24} />,
  },
];

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState("All");
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const filteredServices = services.filter(
    (s) => activeTab === "All" || s.category === activeTab,
  );

  return (
    <>
      <Header />
      <div className="bg-[#FFFCFA] min-h-screen overflow-hidden relative">
        {/* --- 1. LUXURY HERO SECTION --- */}
        <section className="relative pt-44 pb-24 px-6">
          {/* Background Decorative Text */}
          <div className="absolute top-20 left-0 w-full overflow-hidden pointer-events-none opacity-[0.03] select-none">
            <h1 className="text-[20vw] font-serif whitespace-nowrap leading-none tracking-tighter">
              AESTHETICS • PRECISION • CARE
            </h1>
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full"
            >
              <span className="text-[12px] font-bold uppercase tracking-[0.5em] text-[#C21E56] mb-8 block">
                The Art of Dentistry
              </span>

              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
                <h1 className="text-5xl md:text-7xl lg:text-[110px] font-serif text-gray-900 leading-[0.85] tracking-tight max-w-4xl">
                  Excellence <br />
                  <span className="font-light text-[#D4AF37] relative">
                    In Every Detail
                    <svg
                      className="absolute -bottom-2 left-0 w-full h-2 text-[#D4AF37]/20"
                      viewBox="0 0 100 10"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M0 5 Q 50 10 100 5"
                        stroke="currentColor"
                        fill="transparent"
                        strokeWidth="2"
                      />
                    </svg>
                  </span>
                </h1>

                <p className="text-xl text-gray-500 font-light max-w-sm leading-relaxed border-l border-[#D4AF37] pl-6 mb-4">
                  Curated treatments designed to restore function and enhance
                  natural beauty.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* --- 2. FILTER & GRID --- */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            {/* Elegant Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-20 bg-white/50 backdrop-blur-sm p-2 rounded-full border border-gray-100 w-fit mx-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`px-8 py-3 rounded-full text-[11px] font-bold uppercase tracking-widest transition-all duration-300 ${activeTab === cat
                    ? "bg-[#C21E56] text-white shadow-xl shadow-[#C21E56]/20"
                    : "bg-transparent text-gray-400 hover:text-gray-900"
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Grid with Vertical Layout for "Premium" Feel */}
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
              {filteredServices.map((service, index) => (
                <motion.div
                  layoutId={`card-${service.id}`}
                  key={service.id}
                  onClick={() => setSelectedId(service.id)}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="group relative cursor-pointer"
                >
                  <motion.div layoutId={`image-${service.id}`} className="relative aspect-[16/10] overflow-hidden rounded-[40px] mb-8 shadow-2xl shadow-gray-200">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    {/* Floating Icon */}
                    <motion.div layoutId={`icon-${service.id}`} className="absolute top-8 right-8 w-14 h-14 bg-white/90 backdrop-blur-xl rounded-2xl flex items-center justify-center text-[#C21E56] shadow-lg">
                      {service.icon}
                    </motion.div>
                  </motion.div>

                  <div className="px-4">
                    <div className="flex justify-between items-start mb-4">
                      <motion.h3 layoutId={`title-${service.id}`} className="text-3xl font-serif text-gray-900 tracking-tight">
                        {service.title}
                      </motion.h3>
                      <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-[#C21E56] group-hover:text-white transition-all duration-500">
                        <ArrowUpRight size={18} />
                      </div>
                    </div>
                    <motion.p layoutId={`desc-${service.id}`} className="text-gray-500 font-light text-base leading-relaxed max-w-md">
                      {service.description}
                    </motion.p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* --- 3. THE PROCESS (EDITORIAL LOOK) --- */}
        <section className="py-32 px-6 bg-[#1A1A1A] text-white rounded-t-[60px]">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
              <h2 className="text-5xl md:text-6xl font-serif leading-tight">
                Crafting Your <br />
                <span className="text-[#D4AF37]">
                  Perfect Experience
                </span>
              </h2>
              <p className="text-gray-400 font-light max-w-xs text-sm tracking-wide">
                A seamless three-step methodology designed for comfort and
                surgical precision.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              {processes.map((p) => (
                <div
                  key={p.step}
                  className="group border-l border-white/10 pl-8 pb-12 transition-colors hover:border-[#D4AF37]"
                >
                  <span className="text-[#D4AF37] font-serif text-5xl italic block mb-8 opacity-40 group-hover:opacity-100 transition-opacity">
                    {p.step}
                  </span>
                  <div className="mb-6 text-white/80 group-hover:text-[#D4AF37] transition-colors">
                    {p.icon}
                  </div>
                  <h4 className="text-2xl font-serif mb-4">{p.title}</h4>
                  <p className="text-gray-400 font-light text-sm leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- MODAL --- */}
        <AnimatePresence>
          {selectedId && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedId(null)}
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              />

              {services.map(s => s.id === selectedId && (
                <motion.div
                  layoutId={`card-${s.id}`}
                  key={s.id}
                  className="w-full max-w-4xl bg-white rounded-[40px] overflow-hidden shadow-2xl relative z-10 max-h-[90vh] flex flex-col md:flex-row"
                >
                  <button
                    onClick={() => setSelectedId(null)}
                    className="absolute top-6 right-6 z-20 p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/40 transition-colors"
                  >
                    <X size={24} />
                  </button>

                  <div className="w-full md:w-1/2 h-64 md:h-auto relative">
                    <motion.div layoutId={`image-${s.id}`} className="w-full h-full relative">
                      <Image
                        src={s.image}
                        alt={s.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:bg-gradient-to-r md:from-transparent md:to-black/10" />
                    </motion.div>
                  </div>

                  <div className="w-full md:w-1/2 p-10 md:p-14 overflow-y-auto">
                    <div className="flex items-center gap-4 mb-6">
                      <motion.div layoutId={`icon-${s.id}`} className="text-[#C21E56] bg-pink-50 p-3 rounded-xl">
                        {s.icon}
                      </motion.div>
                      <span className="text-sm font-bold tracking-widest uppercase text-gray-400">{s.category}</span>
                    </div>

                    <motion.h3 layoutId={`title-${s.id}`} className="text-4xl font-serif text-gray-900 mb-6 leading-tight">
                      {s.title}
                    </motion.h3>

                    <motion.p layoutId={`desc-${s.id}`} className="text-gray-500 font-medium text-lg leading-relaxed mb-8">
                      {s.description}
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="prose prose-gray mb-10"
                    >
                      <p className="text-gray-600 leading-relaxed">
                        {s.details}
                      </p>
                    </motion.div>


                    <Link href="/contact" className="w-full">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                        className="w-full py-4 bg-[#C21E56] text-white rounded-full font-bold tracking-wide hover:bg-[#a01845] transition-colors flex items-center justify-center gap-2"
                      >
                        <CalendarCheck size={18} />
                        Book Consultation
                      </motion.div>
                    </Link>

                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </AnimatePresence>
      </div>
      <Footer />
    </>
  );
}
