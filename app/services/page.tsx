"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import {
  Sparkles,
  Stethoscope,
  Wand2,
  Coffee,
  Microscope,
  ArrowRight,
  Scan,
  Syringe,
  Sun,
  Activity,
  Crown,
  Smile,
  Baby,
  HeartPulse,
} from "lucide-react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";
import dynamic from "next/dynamic";

const Service3D = dynamic(() => import("@/components/Service3D"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[600px] flex items-center justify-center">
      Loading...
    </div>
  ),
});

/* ================= VARIANTS ================= */

const container = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
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
    ease: [0.42, 0, 0.58, 1],
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
    description:
      "Thorough examinations to monitor and maintain your oral health foundation.",
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
    description:
      "High-precision imaging for accurate diagnosis and effective treatment planning.",
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
    description:
      "Professional hygiene sessions to remove plaque and polish your smile.",
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
    description:
      "Restore damaged teeth with durable, tooth-colored composite fillings.",
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
    description:
      "Brighten your smile safely and effectively with our professional whitening options.",
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
    description:
      "Save infected teeth and eliminate pain with our gentle endodontic therapy.",
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
    description:
      "Safe and comfortable removal of problematic or damaged teeth.",
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
    description:
      "Strengthen damaged teeth or replace missing ones with custom prosthetics.",
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
    description:
      "A comprehensive range of procedures to enhance the aesthetics of your smile.",
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
    description:
      "Gentle, friendly dental care specialized for children of all ages.",
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
    description:
      "Straighten your smile with modern braces and aligner solutions.",
    image: "/orthodontic.jpg",
    icon: Smile,
    gradient: "from-purple-500 to-fuchsia-600",
    bgGradient: "from-purple-50 to-fuchsia-50",
    shadow: "purple-500/20",
  },
  {
    id: "periodontal-treatment",
    title: "Gum Care & Periodontics",
    category: "Periodontics",
    description:
      "Protect the foundation of your teeth with expert gum disease treatment.",
    image: "/Gum_Care.png",
    icon: Activity,
    gradient: "from-rose-500 to-red-600",
    bgGradient: "from-rose-50 to-red-50",
    shadow: "rose-500/20",
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
  const router = useRouter();

  const filteredServices = services.filter(
    (s) => activeTab === "All" || s.category === activeTab,
  );

  return (
    <>
      <Header />
      <div className="bg-gradient-to-b from-[#FFFCFA] via-white to-[#FFF5F0] min-h-screen overflow-hidden">
        {/* ================= HERO SECTION ================= */}
        <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-28 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              animate={{ x: [0, 50, 0], y: [0, -30, 0], scale: [1, 1.1, 1] }}
              transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-[#C21E56]/15 to-[#D4AF37]/15 rounded-full blur-3xl"
            />
            <div className="absolute inset-0 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:48px_48px] opacity-[0.02]" />
          </div>

          <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="inline-block mb-6 relative px-6 py-2.5 bg-white/90 backdrop-blur-sm border-2 border-[#D4AF37]/30 rounded-full shadow-lg">
                <span className="text-xs font-bold tracking-[0.3em] uppercase bg-gradient-to-r from-[#C21E56] to-[#D4AF37] bg-clip-text text-transparent">
                  Our Services
                </span>
              </div>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
                Excellence in Every <br />
                <span className="font-light bg-gradient-to-r from-[#C21E56] via-[#D4AF37] to-[#C21E56] bg-clip-text text-transparent">
                  Treatment We Offer
                </span>
              </h1>
              <p className="font-serif text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
                Curated dental treatments designed to restore function and
                enhance your natural beauty with precision and care.
              </p>
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
          <div className="max-w-[1400px] mx-auto flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 overflow-x-auto pb-2 md:flex-wrap bg-white/60 backdrop-blur-xl p-2 rounded-full border-2 border-white/60 shadow-xl"
            >
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`px-8 py-3 rounded-full text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 ${
                    activeTab === cat
                      ? "bg-gradient-to-r from-[#C21E56] to-[#A01845] text-white shadow-lg"
                      : "text-gray-500 hover:text-gray-900"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ================= SERVICES GRID ================= */}
        <section className="relative py-16 lg:py-24 px-6">
          <div className="max-w-[1400px] mx-auto">
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="grid md:grid-cols-2 gap-8 lg:gap-10"
            >
              {filteredServices.map((service, idx) => (
                <motion.div
                  key={service.id}
                  variants={item}
                  onClick={() => router.push(`/services/${service.id}`)}
                  className="group relative cursor-pointer"
                >
                  <div className="relative h-full rounded-3xl bg-white border border-gray-100/60 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden">
                    <div className="relative aspect-[16/10] overflow-hidden rounded-t-3xl">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />

                      <div className="absolute top-6 right-6 z-10">
                        <div
                          className={`p-4 rounded-2xl bg-gradient-to-br ${service.gradient} shadow-lg text-white`}
                        >
                          <service.icon size={28} strokeWidth={2.5} />
                        </div>
                      </div>
                    </div>

                    <div className="relative p-8 lg:p-10">
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                      />
                      <div className="relative z-10">
                        <div className="flex justify-between items-start mb-4">
                          <h3 className="text-2xl lg:text-3xl font-semibold text-gray-900">
                            {service.title}
                          </h3>
                          <div className="w-10 h-10 rounded-full border-2 border-gray-200 flex items-center justify-center group-hover:bg-[#C21E56] group-hover:text-white group-hover:border-transparent transition-all">
                            <ArrowRight size={18} />
                          </div>
                        </div>
                        <p className="text-gray-500 text-sm leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ================= THE PROCESS SECTION ================= */}
        <section className="relative py-32 lg:py-40 bg-gray-900 overflow-hidden">
          <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="text-center mb-20">
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Crafting Your{" "}
                <span className="font-light text-[#D4AF37]">
                  Perfect Experience
                </span>
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
              {processes.map((p) => (
                <div
                  key={p.step}
                  className="p-10 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
                >
                  <div className="text-6xl font-serif italic text-[#D4AF37]/20 mb-8">
                    {p.step}
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    {p.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= CTA SECTION ================= */}
        <section className="relative py-20 lg:py-28 px-6 text-center">
          <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-xl p-10 lg:p-14 rounded-3xl border-2 border-[#D4AF37]/20 shadow-2xl">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8">
              Ready to Transform Your Smile?
            </h3>
            <Link href="/contact">
              <button className="px-10 py-4 bg-gradient-to-r from-[#C21E56] to-[#A01845] text-white rounded-full font-bold uppercase tracking-widest shadow-xl hover:scale-105 transition-all">
                Book Your Appointment
              </button>
            </Link>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
