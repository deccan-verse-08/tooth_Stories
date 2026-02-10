"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { ArrowRight, ShieldCheck, Star, Award } from "lucide-react";

const slides = [
  "/thirteen.jpg",
  "/two.jpg",
  "/ten.jpg",
  "/seven.jpg",
  "/six.jpg",
  "/nine.jpg",
  "/d1.jpg",
  "/d2.jpg",
  "/five.jpg",
  "/three.jpg",
];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [index, setIndex] = useState(0);
  // State to control mobile text visibility
  const [showMobileText, setShowMobileText] = useState(true);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 1024);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // Timer to hide mobile text after 15 seconds
  useEffect(() => {
    if (isMobile) {
      const textTimer = setTimeout(() => {
        setShowMobileText(false);
      }, 15000); // 15 seconds
      return () => clearTimeout(textTimer);
    }
  }, [isMobile]);

  useEffect(() => {
    if (!isMobile) {
      const timer = setInterval(() => {
        setIndex((prev) => (prev + 1) % slides.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [isMobile]);

  useEffect(() => {
    if (isMobile && videoRef.current) {
      videoRef.current.playbackRate = 0.75;
    }
  }, [isMobile]);

  return (
    <section className="relative min-h-[calc(100svh-80px)] bg-[#FFFCFA] overflow-hidden font-sans flex items-center justify-center">
      {/* ================= MOBILE VIEW ================= */}
      {isMobile && (
        <div className="absolute inset-0 w-full h-full">
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover"
            src="/hero.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          />
          {/* Overlay fades out with the text for a clean look */}
          <AnimatePresence>
            {showMobileText && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                  className="absolute inset-0 bg-black/40 z-10"
                />
                <div className="relative z-20 h-full flex flex-col justify-end pb-24 px-8 text-white">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col gap-5 max-w-[280px]"
                  >
                    <span className="text-[9px] uppercase tracking-[0.4em] text-white/80 font-medium">
                      Trusted Dental Clinic
                    </span>
                    <h1 className="text-4xl font-bold leading-[1.1]">
                      Beautiful Smiles, <br />
                      <span className="text-white/90">Built With Care</span>
                    </h1>
                    <Link
                      href="/contact"
                      className="w-fit px-7 py-3.5 rounded-full bg-[#C21E56] text-white text-[10px] font-bold tracking-[0.2em] uppercase"
                    >
                      Book Now
                    </Link>
                  </motion.div>
                </div>
              </>
            )}
          </AnimatePresence>
        </div>
      )}

      {/* ================= DESKTOP VIEW ================= */}
      {!isMobile && (
        <>
          <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.015]" />

          <div className="relative max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center w-full">
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="flex flex-col gap-6 z-10 max-w-[480px]"
            >
              <motion.div variants={item} className="flex items-center gap-4">
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#C21E56] font-bold">
                  Trusted Dental Clinic
                </span>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      size={11}
                      className="fill-[#D4AF37] text-[#D4AF37]"
                    />
                  ))}
                </div>
              </motion.div>

              <motion.h1
                variants={item}
                className="text-5xl xl:text-[68px] font-extrabold tracking-tight text-gray-900 leading-[1.1]"
              >
                Beautiful Smiles,
                <br />
                <span className="text-[#C21E56]">Built With Care</span>
              </motion.h1>

              <motion.p
                variants={item}
                className="max-w-md text-base text-gray-600 leading-relaxed font-medium"
              >
                At Tooth Stories, we combine advanced dental science and a calm
                philosophy to deliver natural, effortless smiles.
              </motion.p>

              <motion.div
                variants={item}
                className="flex items-center gap-4 pt-2"
              >
                <Link
                  href="/contact"
                  className="px-8 py-4 rounded-full bg-[#C21E56] text-white text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-[#A01845] transition-all shadow-lg"
                >
                  Book Now
                </Link>

                <Link
                  href="/services"
                  className="flex items-center gap-2 px-8 py-4 rounded-full border border-gray-200 text-gray-900 text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-gray-50 transition-all group"
                >
                  Treatments
                  <ArrowRight
                    size={14}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </motion.div>

              <motion.div
                variants={item}
                className="flex gap-6 pt-4 text-gray-400"
              >
                <div className="flex items-center gap-2">
                  <ShieldCheck size={16} className="text-[#D4AF37]" />
                  <span className="text-[9px] uppercase tracking-widest font-bold">
                    Safe & Certified
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Award size={16} className="text-[#D4AF37]" />
                  <span className="text-[9px] uppercase tracking-widest font-bold">
                    Expert Doctors
                  </span>
                </div>
              </motion.div>
            </motion.div>

            {/* RIGHT SLIDESHOW */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative justify-self-center lg:justify-self-end w-full max-w-[420px]"
            >
              <div className="relative w-full aspect-[4/5] overflow-hidden rounded-[2rem] border border-gray-100 shadow-[0_40px_100px_-30px_rgba(0,0,0,0.15)] bg-gray-50">
                <AnimatePresence initial={false}>
                  <motion.div
                    key={index}
                    initial={{ x: "100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "-100%" }}
                    transition={{
                      x: { type: "tween", duration: 1.2, ease: "easeInOut" },
                    }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <Image
                      src={slides[index]}
                      alt="Clinic"
                      fill
                      priority
                      className="object-cover"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -bottom-6 -left-4 bg-white/95 backdrop-blur-md p-5 rounded-xl border border-gray-50 shadow-xl z-20"
              >
                <p className="text-[9px] uppercase tracking-[0.2em] font-bold text-[#C21E56]">
                  Our Promise
                </p>
                <p className="mt-1.5 text-xs text-gray-700 font-semibold leading-tight">
                  Gentle Care. <br /> Honest Results.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </>
      )}
    </section>
  );
}
