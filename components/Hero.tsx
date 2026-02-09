"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

/* ---------- DESKTOP SLIDES ---------- */
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

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [index, setIndex] = useState(0);

  /* ---------- DETECT MOBILE ---------- */
  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  /* ---------- VIDEO SPEED ---------- */
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75;
    }
  }, [isMobile]);

  /* ---------- SLIDESHOW TIMER ---------- */
  useEffect(() => {
    if (!isMobile) {
      const timer = setInterval(() => {
        setIndex((prev) => (prev + 1) % slides.length);
      }, 8500); // slow luxury

      return () => clearInterval(timer);
    }
  }, [isMobile]);

  return (
    <section className="relative w-full min-h-[calc(100svh-80px)] overflow-hidden bg-[#FFFCFA]">
      {/* ---------- MOBILE : VIDEO ---------- */}
      {isMobile && (
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
      )}

      {/* ---------- DESKTOP : SLIDESHOW ---------- */}
      {!isMobile && (
        <AnimatePresence initial={false}>
          <motion.div
            key={index}
            initial={{ x: "100%" }}
            animate={{ x: "0%" }}
            exit={{ x: "-100%" }}
            transition={{
              duration: 2.8,
              ease: "easeInOut",
            }}
            className="absolute inset-0"
          >
            <Image
              src={slides[index]}
              alt="Tooth Stories Clinic"
              fill
              priority
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
      )}

      {/* subtle polish */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/5 via-transparent to-transparent" />
    </section>
  );
}
