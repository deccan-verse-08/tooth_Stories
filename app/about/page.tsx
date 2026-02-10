"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";

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
  Shield,
  Lightbulb,
  Smile,
  TrendingUp,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/* ================= VARIANTS ================= */
/* ================= VARIANTS ================= */

const container: Variants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 60, scale: 0.95, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  },
};

const scaleIn: Variants = {
  hidden: { scale: 0.9, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
};

/* Floating animation (NOT a variant) */

const floatingAnimation = {
  y: [0, -12, 0],
  transition: {
    duration: 3.5,
    repeat: Infinity,
    ease: "easeInOut" as const,
  },
};

/* ================= DATA ================= */

const doctors = [
  {
    name: "Dr. Vaibhav Harkare",
    role: "Co-Founder & Clinical Strategy Lead",
    credentials: "BDS | Hospital Administration Specialist",
    experience: "19+ Years",
    patients: "10,000+",
    image: "/d1.jpg",
    gradient: "from-[#C21E56] via-[#D4536A] to-[#C21E56]",
    accentColor: "#C21E56",
    expertise: [
      "Clinical Dentistry",
      "Healthcare Management",
      "Strategic Planning",
    ],
    bio: [
      "With a rare blend of clinical mastery and healthcare leadership, Dr. Vaibhav Harkare brings over 19 years of distinguished experience in dentistry and hospital administration.",
      "His approach combines precision-driven clinical care with a deep understanding of patient experience, making every treatment journey seamless, transparent, and reassuring.",
      "Dr. Vaibhav earned his Bachelor of Dental Surgery (BDS) from Sharad Pawar Dental College, Wardha, affiliated with MUHS in 2008. He advanced his expertise with a specialization in Hospital Administration from IIHMR, Bangalore in 2009.",
      "In 2013, Dr. Vaibhav co-founded Shree Dental Clinic, Bhosari, which became known for ethical practice and strong patient trust. Today, he shapes Tooth Stories Dental Clinic as the most sought-after premium dental destination in Moshi.",
      "For Dr. Vaibhav, dentistry is about trust, experience, and long-term wellness, delivered with quiet excellence.",
    ],
    highlights: [
      { icon: GraduationCap, text: "MUHS Certified" },
      { icon: Award, text: "Hospital Admin Expert" },
      { icon: Shield, text: "Ethical Practice" },
    ],
  },
  {
    name: "Dr. Snehal Kulkarni (Harkare)",
    role: "Founder & Clinical Director",
    credentials: "BDS | Fellowship in Orthodontics",
    experience: "15+ Years",
    patients: "5,000+",
    image: "/d2.jpg",
    gradient: "from-[#D4AF37] via-[#E4C157] to-[#D4AF37]",
    accentColor: "#D4AF37",
    expertise: ["Orthodontics", "Aesthetic Dentistry", "Smile Design"],
    bio: [
      "Where science meets artistry, Dr. Snehal Kulkarni brings over 15 years of refined clinical excellence to premium dental care. Known for meticulous attention to detail and aesthetic sensibility, she has crafted confident smiles for more than 5,000 patients.",
      "Dr. Snehal completed her BDS from CSMSS Dental College, Sambhaji Nagar under MUHS in 2010. Driven by passion for advanced smile design, she completed a Fellowship in Orthodontics in 2019.",
      "Her entrepreneurial journey began with Shree Dental Clinic – Bhosari (2013), followed by expansion to Triveni Nagar, Pune (2015). Both centers became synonymous with high-quality care and patient loyalty.",
      "With an elevated vision, Dr. Snehal founded Tooth Stories Dental Clinic — where luxury, technology, comfort, and clinical mastery converge, delivering an exclusive dental experience.",
      "For Dr. Snehal, dentistry is an art of creating confidence. Every treatment enhances natural beauty, restores function, and delivers long-lasting wellness.",
    ],
    highlights: [
      { icon: Sparkles, text: "Aesthetic Excellence" },
      { icon: Award, text: "Fellowship Trained" },
      { icon: Smile, text: "5000+ Smiles" },
    ],
  },
];

const achievements = [
  {
    number: "34+",
    label: "Combined Experience",
    icon: Star,
    gradient: "from-[#C21E56] to-[#A01845]",
  },
  {
    number: "15,000+",
    label: "Happy Patients",
    icon: Users,
    gradient: "from-[#D4AF37] to-[#C4A030]",
  },
  {
    number: "99%",
    label: "Success Rate",
    icon: CheckCircle2,
    gradient: "from-[#C21E56] to-[#D4AF37]",
  },
  {
    number: "3",
    label: "Clinic Locations",
    icon: Award,
    gradient: "from-[#D4AF37] to-[#C21E56]",
  },
];

const values = [
  {
    icon: Heart,
    title: "Patient First",
    desc: "Your comfort, trust, and wellbeing are at the heart of everything we do. Every treatment is designed around you.",
    gradient: "from-rose-500 to-pink-600",
  },
  {
    icon: Award,
    title: "Clinical Excellence",
    desc: "Decades of expertise combined with continuous learning, advanced training, and commitment to the highest standards.",
    gradient: "from-[#D4AF37] to-[#C4A030]",
  },
  {
    icon: Sparkles,
    title: "Aesthetic Precision",
    desc: "Where artistry meets science. Every smile is crafted with meticulous attention to detail and natural beauty.",
    gradient: "from-purple-500 to-fuchsia-600",
  },
  {
    icon: Shield,
    title: "Ethical Practice",
    desc: "Transparent communication, honest recommendations, and integrity in every interaction. Your trust is our foundation.",
    gradient: "from-cyan-500 to-sky-600",
  },
  {
    icon: Lightbulb,
    title: "Innovation & Technology",
    desc: "State-of-the-art equipment and cutting-edge techniques ensuring accuracy, comfort, and superior outcomes.",
    gradient: "from-amber-500 to-orange-600",
  },
  {
    icon: TrendingUp,
    title: "Continuous Growth",
    desc: "Committed to staying at the forefront of dental science through ongoing education and skill enhancement.",
    gradient: "from-emerald-500 to-teal-600",
  },
];

/* ================= COMPONENT ================= */

export default function AboutPagePremium() {
  return (
    <>
      <Header />

      <main className="bg-gradient-to-b from-[#FFFCFA] via-white to-[#FFF5F0] min-h-screen overflow-hidden">
        {/* ================= HERO SECTION ================= */}
        <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-32 overflow-hidden">
          {/* Luxury Background Elements */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Animated gradient orbs */}
            <motion.div
              animate={{
                x: [0, 80, 0],
                y: [0, -50, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-20 -left-20 w-[600px] h-[600px] bg-gradient-to-br from-[#C21E56]/15 via-[#D4AF37]/10 to-transparent rounded-full blur-3xl"
            />
            <motion.div
              animate={{
                x: [0, -60, 0],
                y: [0, 70, 0],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-40 -right-20 w-[700px] h-[700px] bg-gradient-to-tl from-[#D4AF37]/20 via-[#C21E56]/10 to-transparent rounded-full blur-3xl"
            />

            {/* Elegant grid pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.03)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

            {/* Decorative circles */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/4 -left-32 w-96 h-96 border border-[#D4AF37]/20 rounded-full"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
              className="absolute bottom-1/3 -right-32 w-[500px] h-[500px] border border-[#C21E56]/15 rounded-full"
            />

            {/* Floating particles */}
            {[
              { left: 10, top: 20, duration: 6, delay: 0 },
              { left: 85, top: 15, duration: 7, delay: 1.5 },
              { left: 25, top: 70, duration: 5.5, delay: 3 },
              { left: 70, top: 40, duration: 8, delay: 0.8 },
              { left: 45, top: 85, duration: 6.5, delay: 2.2 },
              { left: 90, top: 60, duration: 7.5, delay: 4 },
            ].map((particle, i) => (
              <motion.div
                key={i}
                className="absolute w-1.5 h-1.5 bg-[#D4AF37]/30 rounded-full"
                style={{
                  left: `${particle.left}%`,
                  top: `${particle.top}%`,
                }}
                animate={{
                  y: [0, -80, 0],
                  opacity: [0, 0.8, 0],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: particle.duration,
                  repeat: Infinity,
                  delay: particle.delay,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          <div className="relative max-w-[1400px] mx-auto px-6 lg:px-16">
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="text-center"
            >
              {/* Premium Badge */}
              <motion.div variants={scaleIn} className="inline-block mb-8">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#C21E56]/30 to-[#D4AF37]/30 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500" />
                  <div className="relative px-6 py-3 bg-white/90 backdrop-blur-sm border-2 border-[#D4AF37]/30 rounded-full shadow-lg">
                    <span className="text-xs font-bold tracking-[0.25em] uppercase bg-gradient-to-r from-[#C21E56] to-[#D4AF37] bg-clip-text text-transparent">
                      About Tooth Stories
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                variants={fadeUp}
                className="font-serif text-5xl md:text-6xl lg:text-8xl font-bold leading-[1.1] mb-8"
              >
                <span className="block text-gray-900">Where Excellence</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#C21E56] via-[#D4AF37] to-[#C21E56] bg-[length:200%_auto] animate-shimmer">
                  Meets Empathy
                </span>
              </motion.h1>

              {/* Subheading */}
              <motion.p
                variants={fadeUp}
                className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light mb-10"
              >
                Meet the passionate dental experts dedicated to crafting
                beautiful, healthy smiles through precision, care, and artistry
              </motion.p>

              {/* Decorative divider */}
              <motion.div
                variants={scaleIn}
                className="flex items-center justify-center gap-3 mb-12"
              >
                <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#D4AF37]" />
                <Sparkles className="w-5 h-5 text-[#D4AF37]" />
                <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#D4AF37]" />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ================= ACHIEVEMENTS SECTION ================= */}
        <section className="relative py-16 lg:py-20 px-6">
          <div className="max-w-[1400px] mx-auto">
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
            >
              {achievements.map((achievement, idx) => {
                const Icon = achievement.icon;
                return (
                  <motion.div
                    key={idx}
                    variants={item}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="group relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />

                    <div className="relative h-full p-8 lg:p-10 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-2xl hover:border-[#D4AF37]/30 transition-all duration-500 overflow-hidden text-center">
                      {/* Gradient overlay on hover */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${achievement.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                      />

                      <div className="relative z-10">
                        {/* Icon */}
                        <motion.div
                          className="mb-6 inline-block"
                          animate={floatingAnimation}
                        >
                          <div className="relative">
                            <div
                              className={`absolute inset-0 bg-gradient-to-br ${achievement.gradient} blur-xl opacity-30 rounded-2xl`}
                            />
                            <div
                              className={`relative p-4 rounded-2xl bg-gradient-to-br ${achievement.gradient} shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-500`}
                            >
                              <Icon
                                size={28}
                                className="text-white"
                                strokeWidth={2.5}
                              />
                            </div>
                          </div>
                        </motion.div>

                        {/* Number */}
                        <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
                          {achievement.number}
                        </h3>

                        {/* Label */}
                        <p className="text-gray-500 text-sm font-medium uppercase tracking-wider">
                          {achievement.label}
                        </p>

                        {/* Accent line */}
                        <div className="mt-6 pt-6 border-t border-gray-100">
                          <div
                            className={`h-1 w-0 group-hover:w-12 bg-gradient-to-r ${achievement.gradient} rounded-full transition-all duration-500 mx-auto`}
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

        {/* ================= DOCTORS SECTION ================= */}
        <section className="relative py-16 lg:py-20 px-6">
          <div className="max-w-[1400px] mx-auto">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
              className="text-center mb-12 lg:mb-16"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="inline-block mb-8"
              >
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#C21E56]/30 to-[#D4AF37]/30 rounded-full blur-xl" />
                  <div className="relative px-6 py-3 bg-white/90 backdrop-blur-sm border-2 border-[#D4AF37]/30 rounded-full shadow-lg">
                    <span className="text-xs font-bold tracking-[0.25em] uppercase bg-gradient-to-r from-[#C21E56] to-[#D4AF37] bg-clip-text text-transparent">
                      Meet Our Experts
                    </span>
                  </div>
                </div>
              </motion.div>

              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                The Visionaries Behind
                <br />
                <span className="font-light bg-gradient-to-r from-[#C21E56] via-[#D4AF37] to-[#C21E56] bg-clip-text text-transparent">
                  Your Perfect Smile
                </span>
              </h2>

              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
                Our founders bring together decades of experience, advanced
                training, and genuine care for transformative dental excellence
              </p>
            </motion.div>

            {/* Doctors Profiles - Compact Layout */}
            <div className="space-y-20">
              {doctors.map((doc, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  className={`grid lg:grid-cols-5 gap-8 lg:gap-10 items-start ${
                    index % 2 === 1 ? "lg:grid-flow-dense" : ""
                  }`}
                >
                  {/* Doctor Image - More Compact */}
                  <motion.div
                    className={`lg:col-span-2 relative group ${index % 2 === 1 ? "lg:col-start-4" : ""}`}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="relative sticky top-24">
                      {/* Decorative background */}
                      <div
                        className={`absolute -inset-4 bg-gradient-to-br ${doc.gradient} opacity-20 rounded-3xl blur-2xl group-hover:opacity-30 transition-opacity duration-500`}
                      />

                      {/* Main image container */}
                      <div className="relative rounded-3xl overflow-hidden border-4 border-white shadow-2xl">
                        <div className="aspect-[3/4] relative">
                          <Image
                            src={doc.image}
                            alt={doc.name}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                          />

                          {/* Gradient overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        </div>

                        {/* Floating stats badges */}
                        <motion.div
                          className="absolute top-4 left-4"
                          whileHover={floatingAnimation}
                        >
                          <div className="relative">
                            <div
                              className={`absolute inset-0 bg-gradient-to-br ${doc.gradient} blur-xl opacity-60`}
                            />
                            <div
                              className={`relative px-3 py-1.5 rounded-lg bg-gradient-to-br ${doc.gradient} shadow-xl`}
                            >
                              <div className="text-white text-xs font-bold">
                                {doc.experience}
                              </div>
                              <div className="text-white/80 text-[10px]">
                                Experience
                              </div>
                            </div>
                          </div>
                        </motion.div>

                        <motion.div
                          className="absolute top-4 right-4"
                          whileHover={floatingAnimation}
                        >
                          <div className="relative">
                            <div
                              className={`absolute inset-0 bg-gradient-to-br ${doc.gradient} blur-xl opacity-60`}
                            />
                            <div
                              className={`relative px-3 py-1.5 rounded-lg bg-gradient-to-br ${doc.gradient} shadow-xl`}
                            >
                              <div className="text-white text-xs font-bold">
                                {doc.patients}
                              </div>
                              <div className="text-white/80 text-[10px]">
                                Patients
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      </div>

                      {/* Corner decoration */}
                      <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-[#D4AF37] to-[#C21E56] rounded-full opacity-10 blur-2xl" />
                    </div>
                  </motion.div>

                  {/* Doctor Info - More Compact */}
                  <div
                    className={`lg:col-span-3 ${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}
                  >
                    {/* Name & Role */}
                    <motion.div
                      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className="mb-6"
                    >
                      <h3 className="font-serif text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                        {doc.name}
                      </h3>
                      <p
                        className={`text-base font-bold uppercase tracking-wider mb-1`}
                        style={{ color: doc.accentColor }}
                      >
                        {doc.role}
                      </p>
                      <p className="text-gray-600 font-medium text-sm">
                        {doc.credentials}
                      </p>
                    </motion.div>

                    {/* Expertise Tags */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                      className="flex flex-wrap gap-2 mb-6"
                    >
                      {doc.expertise.map((skill, i) => (
                        <div
                          key={i}
                          className="px-3 py-1.5 bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-full shadow-sm hover:shadow-md transition-shadow"
                        >
                          <span className="text-xs font-semibold text-gray-700 uppercase tracking-wide">
                            {skill}
                          </span>
                        </div>
                      ))}
                    </motion.div>

                    {/* Bio - More Compact */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                      className="space-y-3 mb-6"
                    >
                      {doc.bio.map((paragraph, i) => (
                        <p
                          key={i}
                          className="text-gray-600 leading-relaxed font-light text-sm"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </motion.div>

                    {/* Highlights */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                      className="grid grid-cols-3 gap-3"
                    >
                      {doc.highlights.map((highlight, i) => {
                        const Icon = highlight.icon;
                        return (
                          <div
                            key={i}
                            className="p-3 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-lg hover:border-[#D4AF37]/30 transition-all duration-300 text-center group"
                          >
                            <Icon
                              className="mx-auto mb-1.5 group-hover:scale-110 transition-transform"
                              size={20}
                              style={{ color: doc.accentColor }}
                            />
                            <p className="text-[10px] font-semibold text-gray-700 leading-tight">
                              {highlight.text}
                            </p>
                          </div>
                        );
                      })}
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= VALUES SECTION ================= */}
        <section className="relative py-32 lg:py-40 overflow-hidden">
          {/* Subtle gradient background */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#FFFCFA] via-[#FFF8F0] to-[#FFFCFA]" />

          {/* Background elements */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              animate={{
                x: [0, 50, 0],
                y: [0, -30, 0],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-[#C21E56]/10 to-transparent rounded-full blur-3xl"
            />
            <motion.div
              animate={{
                x: [0, -40, 0],
                y: [0, 40, 0],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-gradient-to-tl from-[#D4AF37]/10 to-transparent rounded-full blur-3xl"
            />
          </div>

          <div className="relative max-w-[1400px] mx-auto px-6 lg:px-16">
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
                className="inline-block mb-8"
              >
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#C21E56]/30 to-[#D4AF37]/30 rounded-full blur-xl" />
                  <div className="relative px-6 py-3 bg-white/90 backdrop-blur-sm border-2 border-[#D4AF37]/30 rounded-full shadow-lg">
                    <span className="text-xs font-bold tracking-[0.25em] uppercase bg-gradient-to-r from-[#C21E56] to-[#D4AF37] bg-clip-text text-transparent">
                      Our Philosophy
                    </span>
                  </div>
                </div>
              </motion.div>

              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
                Values That Define
                <br />
                <span className="font-light bg-gradient-to-r from-[#C21E56] via-[#D4AF37] to-[#C21E56] bg-clip-text text-transparent">
                  Our Excellence
                </span>
              </h2>

              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
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
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
            >
              {values.map((value, idx) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={idx}
                    variants={item}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="group relative"
                  >
                    <div className="absolute inset-0 bg-white rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />

                    <div className="relative h-full p-10 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-2xl hover:border-[#D4AF37]/30 transition-all duration-500 overflow-hidden">
                      {/* Subtle gradient overlay on hover */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                      />

                      <div className="relative z-10">
                        {/* Icon */}
                        <motion.div
                          className="mb-6 inline-block"
                          whileHover={floatingAnimation}
                        >
                          <div className="relative">
                            <div
                              className={`absolute inset-0 bg-gradient-to-br ${value.gradient} blur-xl opacity-30 rounded-2xl`}
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
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                          {value.title}
                        </h3>

                        {/* Description */}
                        <p className="text-gray-600 leading-relaxed font-light">
                          {value.desc}
                        </p>

                        {/* Accent line */}
                        <div className="mt-8 pt-8 border-t border-gray-100">
                          <div
                            className={`h-1 w-0 group-hover:w-16 bg-gradient-to-r ${value.gradient} rounded-full transition-all duration-500`}
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
        <section className="relative py-24 lg:py-32 px-6">
          <div className="max-w-[1200px] mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#C21E56]/20 to-[#D4AF37]/20 blur-3xl rounded-3xl" />

              <div className="relative bg-white/95 backdrop-blur-xl p-12 lg:p-16 rounded-3xl border-2 border-[#D4AF37]/20 shadow-2xl text-center overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#D4AF37]/10 to-transparent rounded-full blur-2xl" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-[#C21E56]/10 to-transparent rounded-full blur-2xl" />

                <div className="relative z-10">
                  <motion.div
                    animate={floatingAnimation}
                    className="inline-block mb-8"
                  >
                    <Stethoscope className="w-16 h-16 text-[#C21E56]" />
                  </motion.div>

                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                    Experience the Tooth Stories Difference
                  </h3>

                  <p className="text-gray-600 text-lg mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                    Let our expert team transform your smile with personalized
                    care, cutting-edge technology, and uncompromising excellence
                  </p>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group px-10 py-5 bg-gradient-to-r from-[#C21E56] to-[#A01845] text-white rounded-full font-bold text-sm tracking-[0.2em] uppercase shadow-2xl shadow-[#C21E56]/30 hover:shadow-[#C21E56]/50 transition-all duration-300"
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

      <style jsx global>{`
        @keyframes shimmer {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }
        .animate-shimmer {
          animation: shimmer 8s linear infinite;
        }
      `}</style>
    </>
  );
}
