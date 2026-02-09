"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  Sparkles,
  Camera,
  Star,
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
} from "lucide-react";
import { useState } from "react";

/* ================= ANIMATION VARIANTS ================= */
const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

/* ================= GALLERY DATA ================= */
const images = [
  {
    src: "/eight.jpg",
    span: "md:col-span-2 md:row-span-2",
    alt: "Smile Makeover",
  },
  {
    src: "/eleven.jpg",
    span: "md:col-span-1 md:row-span-1",
    alt: "Modern Equipment",
  },
  {
    src: "/five.jpg",
    span: "md:col-span-1 md:row-span-2",
    alt: "Patient Care",
  },
  {
    src: "/thirteen.jpg",
    span: "md:col-span-1 md:row-span-1",
    alt: "Clinic Interior",
  },
  {
    src: "/one.jpg",
    span: "md:col-span-2 md:row-span-1",
    alt: "Detailed Consultation",
  },
  {
    src: "/seven.jpg",
    span: "md:col-span-1 md:row-span-1",
    alt: "Surgical Precision",
  },
  {
    src: "/six.jpg",
    span: "md:col-span-1 md:row-span-1",
    alt: "Professional Team",
  },
  { src: "/ten.jpg", span: "md:col-span-1 md:row-span-2", alt: "Dental Lab" },
  {
    src: "/nine.jpg",
    span: "md:col-span-2 md:row-span-1",
    alt: "Clean Environment",
  },
  {
    src: "/three.jpg",
    span: "md:col-span-1 md:row-span-1",
    alt: "Kids Dentistry",
  },
  {
    src: "/twelve.jpg",
    span: "md:col-span-1 md:row-span-1",
    alt: "Treatment Room",
  },
  { src: "/two.jpg", span: "md:col-span-1 md:row-span-1", alt: "Dental Care" },
  {
    src: "/Image1OfBoth.jpeg",
    span: "md:col-span-1 md:row-span-1",
    alt: "Comprehensive Care",
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "unset";
  };

  return (
    <>
      <section className="relative py-20 bg-[#FFFCFA]">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header Section */}
          <div className="mb-12 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-[#C21E56] font-bold tracking-widest text-xs uppercase mb-3 block">
                Visual Excellence
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Our <span className="text-[#D4AF37]">Smile</span> Gallery
              </h2>
            </div>
            <p className="text-gray-500 max-w-sm text-sm">
              Explore our state-of-the-art facility and successful patient
              transformations.
            </p>
          </div>

          {/* Optimized Grid */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[150px] md:auto-rows-[200px]"
          >
            {images.map((img, index) => (
              <motion.div
                key={index}
                variants={item}
                onClick={() => openLightbox(index)}
                className={`relative overflow-hidden cursor-pointer rounded-2xl group border border-gray-100 ${img.span}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Refined Hover: Minimalist Dark Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-md p-3 rounded-full border border-white/30">
                    <Maximize2 className="text-white w-5 h-5" />
                  </div>
                  <span className="absolute bottom-4 text-white text-xs font-medium tracking-wider uppercase">
                    View Details
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FIXED LIGHTBOX: Full Visibility Fix */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-10"
            onClick={closeLightbox}
          >
            {/* Close UI */}
            <button className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-50">
              <X size={32} />
            </button>

            {/* Image Container: Uses object-contain to ensure the full image is always visible */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="relative w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full max-w-6xl">
                <Image
                  src={images[selectedImage].src}
                  alt={images[selectedImage].alt}
                  fill
                  className="object-contain" // This ensures the whole image is visible regardless of ratio
                  priority
                />
              </div>

              {/* Navigation */}
              <button
                onClick={() =>
                  setSelectedImage(
                    (selectedImage - 1 + images.length) % images.length,
                  )
                }
                className="absolute left-0 p-4 text-white/50 hover:text-white transition-colors"
              >
                <ChevronLeft size={48} strokeWidth={1} />
              </button>
              <button
                onClick={() =>
                  setSelectedImage((selectedImage + 1) % images.length)
                }
                className="absolute right-0 p-4 text-white/50 hover:text-white transition-colors"
              >
                <ChevronRight size={48} strokeWidth={1} />
              </button>

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 py-6 text-center">
                <p className="text-white text-lg font-serif italic">
                  {images[selectedImage].alt}
                </p>
                <p className="text-white/40 text-xs mt-1 uppercase tracking-widest">
                  {selectedImage + 1} / {images.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
