"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { Plus } from "lucide-react";

/* ================= ANIMATION VARIANTS ================= */
const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeInOut" as const },
  },
};

/* ================= GALLERY DATA ================= */
// Replace with your actual Unsplash or local image paths
const images = [
  {
    src: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95",
    span: "md:col-span-2 md:row-span-2",
    alt: "Smile Makeover",
  },
  {
    src: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5",
    span: "md:col-span-1 md:row-span-1",
    alt: "Modern Equipment",
  },
  {
    src: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787",
    span: "md:col-span-1 md:row-span-2",
    alt: "Patient Care",
  },
  {
    src: "/2.jpeg",
    span: "md:col-span-1 md:row-span-1",
    alt: "Clinic Interior",
  },
  {
    src: "https://images.unsplash.com/photo-1445527815219-ecbfec67492e",
    span: "md:col-span-2 md:row-span-1",
    alt: "Detailed Consultation",
  },
  {
    src: "/7.jpeg",
    span: "md:col-span-1 md:row-span-1",
    alt: "Surgical Precision",
  },
  {
    src: "https://images.unsplash.com/photo-1579684385127-1ef15d508118",
    span: "md:col-span-1 md:row-span-1",
    alt: "Professional Team",
  },
  {
    src: "https://images.unsplash.com/photo-1551076805-e1869033e561",
    span: "md:col-span-1 md:row-span-2",
    alt: "Dental Lab",
  },
  {
    src: "/1.jpeg",
    span: "md:col-span-2 md:row-span-1",
    alt: "Clean Environment",
  },
  {
    src: "/5.jpeg",
    span: "md:col-span-1 md:row-span-1",
    alt: "Kids Dentistry",
  },
];

export default function Gallery() {
  return (
    <section className="py-24 bg-[#FFFCFA]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-[#C21E56] block mb-4">
              Our Gallery
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight">
              A Legacy of <br />
              <span className="font-light text-[#D4AF37]">
                Confident Smiles
              </span>
            </h2>
          </div>
          <p className="max-w-xs text-gray-500 font-light text-sm leading-relaxed border-l border-gray-200 pl-6">
            Take a look inside our studio and see the transformations we've
            shared with our patient community.
          </p>
        </div>

        {/* Bento Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]"
        >
          {images.map((img, index) => (
            <motion.div
              key={index}
              variants={item}
              className={`relative overflow-hidden rounded-2xl group border border-gray-100 ${img.span}`}
            >
              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-[#C21E56]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex items-center justify-center backdrop-blur-[2px]">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#C21E56] transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <Plus size={24} />
                </div>
              </div>

              {/* Image */}
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
