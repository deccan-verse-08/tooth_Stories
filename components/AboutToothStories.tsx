"use client";

import { motion, type Variants } from "framer-motion";
import {
  Sparkles,
  CheckCircle,
  HeartHandshake,
  ShieldCheck,
  GraduationCap,
  Award,
  Zap,
} from "lucide-react";

/* ================= PREMIUM VARIANTS ================= */

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 60, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 1.4, ease: "easeOut" },
  },
};

const scaleIn: Variants = {
  hidden: { scale: 0.8, opacity: 0, filter: "blur(10px)" },
  show: {
    scale: 1,
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const shimmer: Variants = {
  hidden: { backgroundPosition: "200% 0" },
  show: {
    backgroundPosition: "-200% 0",
    transition: {
      duration: 8,
      ease: "linear",
      repeat: Infinity,
    },
  },
};

/* ================= COMPONENT ================= */

export default function AboutToothStoriesPremium() {
  return (
    <section className="relative py-32 lg:py-48 bg-gradient-to-b from-[#0A0A0A] via-[#1A1A1A] to-[#0A0A0A] overflow-hidden">
      {/* Animated premium background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient orbs */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-24 left-12 w-[600px] h-[600px] bg-gradient-to-br from-[#C21E56]/30 via-[#C21E56]/10 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-24 right-12 w-[700px] h-[700px] bg-gradient-to-tl from-[#D4AF37]/25 via-[#D4AF37]/10 to-transparent rounded-full blur-3xl"
        />

        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

        {/* Floating particles - static positions to avoid hydration errors */}
        {[
          { left: 15, top: 25, duration: 5, delay: 0 },
          { left: 85, top: 15, duration: 6, delay: 1 },
          { left: 45, top: 65, duration: 4, delay: 2 },
          { left: 70, top: 45, duration: 7, delay: 0.5 },
          { left: 25, top: 80, duration: 5.5, delay: 1.5 },
          { left: 90, top: 70, duration: 6.5, delay: 2.5 },
          { left: 35, top: 35, duration: 4.5, delay: 3 },
          { left: 65, top: 90, duration: 5, delay: 0.8 },
          { left: 10, top: 50, duration: 6, delay: 1.2 },
          { left: 95, top: 30, duration: 7, delay: 3.5 },
          { left: 50, top: 10, duration: 5.5, delay: 2.2 },
          { left: 80, top: 85, duration: 4.5, delay: 1.8 },
          { left: 20, top: 40, duration: 6.5, delay: 4 },
          { left: 75, top: 20, duration: 5, delay: 0.3 },
          { left: 40, top: 75, duration: 6, delay: 2.8 },
          { left: 60, top: 55, duration: 7, delay: 1.4 },
          { left: 30, top: 15, duration: 5.5, delay: 3.2 },
          { left: 85, top: 60, duration: 4.5, delay: 0.7 },
          { left: 55, top: 95, duration: 6.5, delay: 4.5 },
          { left: 12, top: 70, duration: 5, delay: 2.1 },
        ].map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#D4AF37]/40 rounded-full"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-16 space-y-32">
        {/* ================= HERO INTRO ================= */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-5xl mx-auto"
        >
          <motion.div variants={fadeUp} className="mb-8">
            <motion.div
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/5 backdrop-blur-sm mb-8"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
              <span className="text-sm text-[#D4AF37] font-light tracking-wider">
                LUXURY DENTISTRY
              </span>
            </motion.div>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[1.1]"
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-200 to-gray-400">
              Tooth Stories
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#C21E56] via-[#D4AF37] to-[#C21E56] bg-[length:200%_auto] animate-shimmer">
              Dental Clinic
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-2xl md:text-3xl font-light text-gray-400 mb-10 tracking-wide"
          >
            Where Luxury Meets Precision Dentistry
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="text-gray-400 font-light leading-relaxed text-lg max-w-3xl mx-auto"
          >
            Dentistry at Tooth Stories is more than treatment — it is an
            experience built on trust, comfort, technology, and artistry.
            Designed as a premium dental destination, we deliver advanced,
            personalized dental solutions in an environment that reflects
            elegance, hygiene, and patient-centric care.
          </motion.p>
        </motion.div>

        {/* ================= STORY SECTION ================= */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="relative max-w-6xl mx-auto"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#C21E56]/10 to-[#D4AF37]/10 rounded-3xl blur-3xl" />
          <div className="relative p-12 md:p-16 rounded-3xl border border-gray-800/50 bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-xl">
            <motion.div
              className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />

            <h3 className="font-serif text-4xl md:text-5xl font-semibold text-white mb-8 text-center">
              Our Story
            </h3>
            <p className="text-gray-300 font-light leading-relaxed text-lg text-center max-w-4xl mx-auto">
              The journey began with Shree Dental Clinic – Bhosari in 2013,
              followed by expansion to Triveni Nagar, Pune in 2015. With growing
              experience, evolving technology, and a vision to create a truly
              premium dental experience, Tooth Stories Dental Clinic was founded
              to bring luxury dentistry with global standards to the local
              community.
            </p>
          </div>
        </motion.div>

        {/* ================= FOUNDERS - PREMIUM CARDS ================= */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-10"
        >
          {[
            {
              name: "Dr. Snehal Kulkarni (Harkare)",
              title:
                "Dental Surgeon | Fellowship Trained in Orthodontics | 15+ Years Experience",
              desc: "Known for her aesthetic precision and patient-first approach, Dr. Snehal has transformed over 5,000 smiles, combining science with artistry to create confident, natural-looking results.",
              gradient: "from-[#C21E56]/20 to-transparent",
            },
            {
              name: "Dr. Vaibhav Harkare",
              title:
                "Dental Surgeon | Healthcare Management Specialist | 19+ Years Experience",
              desc: "Bringing together clinical dentistry and hospital administration, Dr. Vaibhav ensures seamless patient journeys through ethical planning, empathy, and world-class protocols.",
              gradient: "from-[#D4AF37]/20 to-transparent",
            },
          ].map((doc, i) => (
            <motion.div
              key={i}
              variants={scaleIn}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="group relative p-10 rounded-3xl border border-gray-800/50 bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${doc.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
              />

              {/* Animated border */}
              <motion.div
                className="absolute inset-0 rounded-3xl"
                style={{
                  background: `linear-gradient(90deg, transparent, ${
                    i === 0 ? "#C21E56" : "#D4AF37"
                  }, transparent)`,
                  backgroundSize: "200% 100%",
                }}
                variants={shimmer}
                initial="hidden"
                whileHover="show"
              />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <Award className="w-12 h-12 text-[#D4AF37]" />
                  <motion.div
                    className="w-16 h-16 rounded-full bg-gradient-to-br from-[#C21E56] to-[#D4AF37] opacity-20"
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 90, 0],
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </div>

                <h4 className="font-serif text-3xl font-semibold text-white mb-3">
                  {doc.name}
                </h4>
                <p className="text-sm text-[#D4AF37] mb-6 font-medium tracking-wide">
                  {doc.title}
                </p>
                <p className="text-gray-300 font-light leading-relaxed">
                  {doc.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ================= VISION & MISSION - SPLIT DESIGN ================= */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-2 gap-12"
        >
          {/* Vision */}
          <motion.div
            variants={fadeUp}
            className="relative p-12 rounded-3xl border border-gray-800/50 bg-gradient-to-br from-[#C21E56]/10 to-black/50 backdrop-blur-xl overflow-hidden group"
          >
            <motion.div
              className="absolute -top-20 -right-20 w-60 h-60 bg-[#C21E56]/20 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{ duration: 8, repeat: Infinity }}
            />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C21E56]/20 border border-[#C21E56]/30 mb-6">
                <Zap className="w-4 h-4 text-[#C21E56]" />
                <span className="text-xs text-[#C21E56] font-medium tracking-wider">
                  VISION
                </span>
              </div>

              <h3 className="font-serif text-4xl font-semibold mb-6 text-white">
                Our Vision
              </h3>
              <p className="text-gray-300 font-light leading-relaxed text-lg">
                To become the most trusted and sought-after premium dental care
                destination in Moshi and surrounding regions, known for
                delivering world-class dentistry with uncompromising clinical
                quality.
              </p>
            </div>
          </motion.div>

          {/* Mission */}
          <motion.div
            variants={fadeUp}
            className="relative p-12 rounded-3xl border border-gray-800/50 bg-gradient-to-br from-[#D4AF37]/10 to-black/50 backdrop-blur-xl overflow-hidden group"
          >
            <motion.div
              className="absolute -bottom-20 -left-20 w-60 h-60 bg-[#D4AF37]/20 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{ duration: 8, repeat: Infinity, delay: 1 }}
            />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/30 mb-6">
                <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                <span className="text-xs text-[#D4AF37] font-medium tracking-wider">
                  MISSION
                </span>
              </div>

              <h3 className="font-serif text-4xl font-semibold mb-6 text-white">
                Our Mission
              </h3>
              <ul className="space-y-4">
                {[
                  "High-precision treatments using advanced global technologies",
                  "Luxurious, stress-free, patient-friendly environment",
                  "Ethical practice with transparent planning",
                  "Continuous clinical and technological upgrades",
                ].map((m, i) => (
                  <motion.li
                    key={i}
                    variants={fadeUp}
                    className="flex gap-4 items-start group/item"
                  >
                    <CheckCircle
                      className="text-[#D4AF37] mt-1 flex-shrink-0 group-hover/item:scale-110 transition-transform"
                      size={20}
                    />
                    <span className="text-gray-300 font-light">{m}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>

        {/* ================= CORE VALUES - FLOATING CARDS ================= */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          <motion.h3
            variants={fadeUp}
            className="text-center font-serif text-4xl md:text-5xl font-semibold text-white mb-16"
          >
            Core Values
          </motion.h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: HeartHandshake,
                title: "Patient First",
                color: "#C21E56",
              },
              {
                icon: ShieldCheck,
                title: "Clinical Excellence",
                color: "#D4AF37",
              },
              {
                icon: Sparkles,
                title: "Luxury with Purpose",
                color: "#C21E56",
              },
              {
                icon: GraduationCap,
                title: "Continuous Learning",
                color: "#D4AF37",
              },
            ].map((v, i) => (
              <motion.div
                key={i}
                variants={scaleIn}
                whileHover={{ y: -12, scale: 1.05 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800/50 to-black/50 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />

                <div className="relative p-8 rounded-2xl border border-gray-800/50 bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl text-center">
                  <motion.div
                    className="mx-auto mb-6 w-16 h-16 rounded-2xl bg-gradient-to-br from-gray-800 to-black border border-gray-700 flex items-center justify-center"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                  >
                    <v.icon
                      className="text-[#D4AF37] group-hover:scale-110 transition-transform"
                      size={28}
                    />
                  </motion.div>

                  <p className="font-semibold text-white text-lg tracking-wide">
                    {v.title}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ================= PROMISE - GRAND FINALE ================= */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="relative text-center max-w-4xl mx-auto"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#C21E56]/20 via-[#D4AF37]/20 to-transparent rounded-3xl blur-3xl" />

          <div className="relative p-16 rounded-3xl border border-gray-800/50 bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-xl">
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#C21E56]/10 via-[#D4AF37]/10 to-[#C21E56]/10"
            />

            <div className="relative z-10">
              <h3 className="font-serif text-4xl md:text-5xl font-bold mb-8 text-white">
                Our Promise
              </h3>
              <p className="text-gray-300 font-light text-xl leading-relaxed mb-8">
                At Tooth Stories Dental Clinic, we promise not just treatment —
                but an experience defined by precision, comfort, trust, and
                excellence.
              </p>
              <motion.p
                className="font-serif text-2xl md:text-3xl font-light text-transparent bg-clip-text bg-gradient-to-r from-[#C21E56] via-[#D4AF37] to-[#C21E56] bg-[length:200%_auto]"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 8, repeat: Infinity }}
              >
                Because every smile has a story.
                <br />
                And every story deserves perfection.
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>

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
    </section>
  );
}
