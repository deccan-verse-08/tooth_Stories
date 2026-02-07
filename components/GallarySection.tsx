// "use client";

// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";
// import type { Variants } from "framer-motion";
// import { Plus, Sparkles, Camera, Star, X } from "lucide-react";
// import { useState } from "react";

// /* ================= ANIMATION VARIANTS ================= */
// const container: Variants = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: { staggerChildren: 0.08 },
//   },
// };

// const item: Variants = {
//   hidden: { opacity: 0, scale: 0.85, rotate: -5 },
//   show: {
//     opacity: 1,
//     scale: 1,
//     rotate: 0,
//     transition: {
//       duration: 0.8,
//       ease: [0.25, 0.4, 0.25, 1],
//     },
//   },
// };

// const headerAnimation: Variants = {
//   hidden: { opacity: 0, y: 40 },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 1, ease: [0.25, 0.4, 0.25, 1] },
//   },
// };

// const lightboxVariants: Variants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: { duration: 0.3 },
//   },
//   exit: {
//     opacity: 0,
//     transition: { duration: 0.3 },
//   },
// };

// const imageVariants: Variants = {
//   hidden: { scale: 0.8, opacity: 0, rotate: -10 },
//   visible: {
//     scale: 1,
//     opacity: 1,
//     rotate: 0,
//     transition: {
//       type: "spring",
//       damping: 25,
//       stiffness: 200,
//     },
//   },
//   exit: {
//     scale: 0.8,
//     opacity: 0,
//     rotate: 10,
//     transition: { duration: 0.3 },
//   },
// };

// /* ================= GALLERY DATA ================= */
// const images = [
//   {
//     src: "/eight.jpg",
//     span: "md:col-span-2 md:row-span-2",
//     alt: "Smile Makeover",
//   },
//   {
//     src: "/eleven.jpg",
//     span: "md:col-span-1 md:row-span-1",
//     alt: "Modern Equipment",
//   },
//   {
//     src: "/five.jpg",
//     span: "md:col-span-1 md:row-span-2",
//     alt: "Patient Care",
//   },
//   {
//     src: "/thirteen.jpg",
//     span: "md:col-span-1 md:row-span-1",
//     alt: "Clinic Interior",
//   },
//   {
//     src: "/one.jpg",
//     span: "md:col-span-2 md:row-span-1",
//     alt: "Detailed Consultation",
//   },
//   {
//     src: "/seven.jpg",
//     span: "md:col-span-1 md:row-span-1",
//     alt: "Surgical Precision",
//   },
//   {
//     src: "/six.jpg",
//     span: "md:col-span-1 md:row-span-1",
//     alt: "Professional Team",
//   },
//   {
//     src: "/ten.jpg",
//     span: "md:col-span-1 md:row-span-2",
//     alt: "Dental Lab",
//   },
//   {
//     src: "/nine.jpg",
//     span: "md:col-span-2 md:row-span-1",
//     alt: "Clean Environment",
//   },
//   {
//     src: "/three.jpg",
//     span: "md:col-span-1 md:row-span-1",
//     alt: "Kids Dentistry",
//   },
//   {
//     src: "/twelve.jpg",
//     span: "md:col-span-1 md:row-span-1",
//     alt: "Treatment Room",
//   },
//   {
//     src: "/two.jpg",
//     span: "md:col-span-1 md:row-span-1",
//     alt: "Dental Care",
//   },
//   {
//     src: "/Image1OfBoth.jpeg",
//     span: "md:col-span-1 md:row-span-1",
//     alt: "Comprehensive Care",
//   },
// ];

// export default function Gallery() {
//   const [selectedImage, setSelectedImage] = useState<number | null>(null);

//   const openLightbox = (index: number) => {
//     setSelectedImage(index);
//     document.body.style.overflow = "hidden";
//   };

//   const closeLightbox = () => {
//     setSelectedImage(null);
//     document.body.style.overflow = "unset";
//   };

//   const nextImage = () => {
//     if (selectedImage !== null) {
//       setSelectedImage((selectedImage + 1) % images.length);
//     }
//   };

//   const prevImage = () => {
//     if (selectedImage !== null) {
//       setSelectedImage((selectedImage - 1 + images.length) % images.length);
//     }
//   };

//   return (
//     <>
//       <section className="relative py-20 lg:py-32 bg-gradient-to-b from-[#FFFCFA] via-white to-[#FFF5F0] overflow-hidden">
//         {/* Background Elements */}
//         <div className="absolute inset-0 pointer-events-none">
//           {/* Animated gradient orbs */}
//           <motion.div
//             animate={{
//               x: [0, 60, 0],
//               y: [0, -40, 0],
//               scale: [1, 1.2, 1],
//             }}
//             transition={{
//               duration: 20,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//             className="absolute top-40 left-20 w-96 h-96 bg-gradient-to-br from-[#C21E56]/15 to-[#D4AF37]/15 rounded-full blur-3xl"
//           />
//           <motion.div
//             animate={{
//               x: [0, -50, 0],
//               y: [0, 60, 0],
//               scale: [1, 1.15, 1],
//             }}
//             transition={{
//               duration: 25,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//             className="absolute bottom-40 right-20 w-[500px] h-[500px] bg-gradient-to-br from-[#D4AF37]/20 to-[#C21E56]/10 rounded-full blur-3xl"
//           />

//           {/* Elegant radial pattern */}
//           <div className="absolute inset-0 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:48px_48px] opacity-[0.02]" />
//         </div>

//         <div className="relative max-w-7xl mx-auto px-6">
//           {/* ---------- HEADER ---------- */}
//           <motion.div
//             variants={headerAnimation}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true }}
//             className="mb-12 lg:mb-16"
//           >
//             <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
//               {/* Left Side */}
//               <div className="max-w-2xl">
//                 {/* Badge */}
//                 <div className="inline-block mb-6">
//                   <div className="relative group">
//                     <div className="absolute inset-0 bg-gradient-to-r from-[#C21E56]/30 to-[#D4AF37]/30 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500" />
//                     <div className="relative flex items-center gap-3 px-5 py-2.5 bg-white/90 backdrop-blur-sm border-2 border-[#D4AF37]/30 rounded-full shadow-lg">
//                       <Camera
//                         className="w-4 h-4 text-[#C21E56]"
//                         strokeWidth={2.5}
//                       />
//                       <span className="text-xs font-bold tracking-[0.3em] uppercase bg-gradient-to-r from-[#C21E56] to-[#D4AF37] bg-clip-text text-transparent">
//                         Our Gallery
//                       </span>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Heading */}
//                 <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
//                   A Legacy of
//                   <br />
//                   <span className="font-light bg-gradient-to-r from-[#C21E56] via-[#D4AF37] to-[#C21E56] bg-clip-text text-transparent">
//                     Confident Smiles
//                   </span>
//                 </h2>

//                 {/* Decorative line */}
//                 <motion.div
//                   initial={{ width: 0 }}
//                   whileInView={{ width: "5rem" }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 1, delay: 0.3 }}
//                   className="h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent rounded-full"
//                 />
//               </div>

//               {/* Right Side */}
//               <div className="max-w-xs">
//                 <div className="relative pl-6 border-l border-gray-200">
//                   <p className="font-serif text-sm lg:text-base text-gray-500 leading-relaxed font-light">
//                     Click any image to view it in full size. Browse through our
//                     collection of smile transformations.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </motion.div>

//           {/* ---------- UNIQUE ORGANIC GRID - DESKTOP VIEW ---------- */}
//           <motion.div
//             variants={container}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true, margin: "-100px" }}
//             className="hidden md:grid md:grid-cols-4 gap-4 auto-rows-[200px]"
//           >
//             {images.map((img, index) => {
//               const getBorderRadius = (idx: number) => {
//                 const mod = idx % 3;
//                 if (mod === 0) return "60% 40% 40% 60% / 50% 50% 50% 50%";
//                 if (mod === 1) return "40% 60% 60% 40% / 60% 40% 60% 40%";
//                 return "2rem";
//               };

//               return (
//                 <motion.div
//                   key={index}
//                   variants={item}
//                   whileHover={{
//                     scale: 1.03,
//                     rotate: index % 2 === 0 ? 2 : -2,
//                     zIndex: 10,
//                   }}
//                   onClick={() => openLightbox(index)}
//                   className={`relative overflow-hidden group cursor-pointer ${img.span}`}
//                   style={{
//                     borderRadius: getBorderRadius(index),
//                   }}
//                 >
//                   {/* Image Container */}
//                   <div className="absolute inset-0">
//                     <Image
//                       src={img.src}
//                       alt={img.alt}
//                       fill
//                       className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-90"
//                     />
//                   </div>

//                   {/* Gradient overlay */}
//                   <div className="absolute inset-0 bg-gradient-to-br from-[#C21E56]/10 via-transparent to-[#D4AF37]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

//                   {/* Hover Overlay */}
//                   <div className="absolute inset-0 bg-gradient-to-br from-[#C21E56]/60 via-[#C21E56]/50 to-[#D4AF37]/40 opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-sm flex items-center justify-center">
//                     <motion.div
//                       initial={false}
//                       whileHover={{ scale: 1.1, rotate: 90 }}
//                       className="w-16 h-16 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-2xl shadow-[#C21E56]/40"
//                     >
//                       <Plus
//                         size={28}
//                         className="text-[#C21E56]"
//                         strokeWidth={2.5}
//                       />
//                     </motion.div>
//                   </div>

//                   {/* Decorative border */}
//                   <div
//                     className="absolute inset-0 border-4 border-transparent group-hover:border-[#D4AF37]/50 transition-all duration-500"
//                     style={{
//                       borderRadius: getBorderRadius(index),
//                     }}
//                   />

//                   {/* Index number */}
//                   <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gradient-to-br from-[#C21E56] to-[#D4AF37] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 shadow-lg">
//                     <span className="text-white font-bold text-sm">
//                       {String(index + 1).padStart(2, "0")}
//                     </span>
//                   </div>
//                 </motion.div>
//               );
//             })}
//           </motion.div>

//           {/* ---------- CREATIVE GRID - MOBILE VIEW ---------- */}
//           <motion.div
//             variants={container}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true, margin: "-100px" }}
//             className="grid md:hidden grid-cols-2 gap-3"
//           >
//             {images.map((img, index) => {
//               let className = "relative overflow-hidden group cursor-pointer ";

//               if (index === 0 || index === 4 || index === 8) {
//                 className += "col-span-2 h-[280px] rounded-[3rem]";
//               } else if (index === 2 || index === 7) {
//                 className += "row-span-2 h-[380px] rounded-[2rem]";
//               } else if (index % 2 === 0) {
//                 className += "h-[180px] rounded-tl-[4rem] rounded-br-[4rem]";
//               } else {
//                 className += "h-[180px] rounded-tr-[4rem] rounded-bl-[4rem]";
//               }

//               return (
//                 <motion.div
//                   key={index}
//                   variants={item}
//                   onClick={() => openLightbox(index)}
//                   className={className}
//                 >
//                   {/* Image Container */}
//                   <div className="absolute inset-0">
//                     <Image
//                       src={img.src}
//                       alt={img.alt}
//                       fill
//                       className="object-cover transition-all duration-700 group-hover:scale-110"
//                     />
//                   </div>

//                   {/* Subtle gradient overlay */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent" />

//                   {/* Hover Overlay */}
//                   <div className="absolute inset-0 bg-gradient-to-br from-[#C21E56]/70 via-[#C21E56]/60 to-[#D4AF37]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-[2px] flex items-center justify-center">
//                     <motion.div
//                       initial={false}
//                       whileTap={{ scale: 0.9 }}
//                       className="w-16 h-16 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-2xl shadow-[#C21E56]/30"
//                     >
//                       <Plus
//                         size={28}
//                         className="text-[#C21E56]"
//                         strokeWidth={2.5}
//                       />
//                     </motion.div>
//                   </div>

//                   {/* Index badge */}
//                   <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#C21E56] flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//                     <span className="text-white font-bold text-xs">
//                       {index + 1}
//                     </span>
//                   </div>
//                 </motion.div>
//               );
//             })}
//           </motion.div>

//           {/* ---------- BOTTOM CTA ---------- */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8, delay: 0.3 }}
//             className="mt-12 lg:mt-16 text-center"
//           >
//             <div className="inline-block relative">
//               <div className="absolute inset-0 bg-gradient-to-r from-[#C21E56]/20 to-[#D4AF37]/20 blur-3xl" />
//               <div className="relative bg-white/90 backdrop-blur-xl px-8 py-6 rounded-3xl border-2 border-[#D4AF37]/20 shadow-2xl">
//                 <div className="flex flex-col sm:flex-row items-center gap-6">
//                   <div className="flex items-center gap-4">
//                     <div className="flex -space-x-3">
//                       {[1, 2, 3, 4].map((i) => (
//                         <div
//                           key={i}
//                           className="w-11 h-11 rounded-full bg-gradient-to-br from-[#C21E56] to-[#D4AF37] border-2 border-white shadow-lg flex items-center justify-center"
//                         >
//                           <Star
//                             size={14}
//                             className="fill-white text-white"
//                             strokeWidth={0}
//                           />
//                         </div>
//                       ))}
//                     </div>
//                     <div className="text-left">
//                       <div className="text-sm font-bold text-gray-900">
//                         5,000+ Patients
//                       </div>
//                       <div className="text-xs text-gray-500 tracking-wide">
//                         Trust our expertise
//                       </div>
//                     </div>
//                   </div>

//                   <div className="w-px h-10 bg-gray-200 hidden sm:block" />

//                   <p className="text-xs text-gray-600 font-light italic">
//                     Click any image to view full size
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* ---------- LIGHTBOX MODAL ---------- */}
//       <AnimatePresence>
//         {selectedImage !== null && (
//           <motion.div
//             variants={lightboxVariants}
//             initial="hidden"
//             animate="visible"
//             exit="exit"
//             className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4"
//             onClick={closeLightbox}
//           >
//             {/* Close Button */}
//             <motion.button
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               exit={{ opacity: 0, scale: 0.8 }}
//               onClick={closeLightbox}
//               className="absolute top-6 right-6 z-60 w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border-2 border-white/20 flex items-center justify-center text-white hover:bg-[#C21E56] hover:border-[#C21E56] transition-all duration-300 group"
//             >
//               <X
//                 size={24}
//                 strokeWidth={2.5}
//                 className="group-hover:rotate-90 transition-transform duration-300"
//               />
//             </motion.button>

//             {/* Image Counter */}
//             <motion.div
//               initial={{ opacity: 0, y: -20 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="absolute top-6 left-6 px-6 py-3 rounded-full bg-gradient-to-r from-[#C21E56] to-[#D4AF37] text-white font-bold text-sm shadow-2xl"
//             >
//               {selectedImage + 1} / {images.length}
//             </motion.div>

//             {/* Navigation Buttons */}
//             <motion.button
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               onClick={(e) => {
//                 e.stopPropagation();
//                 prevImage();
//               }}
//               className="absolute left-6 w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border-2 border-white/20 flex items-center justify-center text-white hover:bg-[#D4AF37] hover:border-[#D4AF37] transition-all duration-300"
//             >
//               <svg
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2.5"
//               >
//                 <path d="M15 18l-6-6 6-6" />
//               </svg>
//             </motion.button>

//             <motion.button
//               initial={{ opacity: 0, x: 20 }}
//               animate={{ opacity: 1, x: 0 }}
//               onClick={(e) => {
//                 e.stopPropagation();
//                 nextImage();
//               }}
//               className="absolute right-6 w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border-2 border-white/20 flex items-center justify-center text-white hover:bg-[#D4AF37] hover:border-[#D4AF37] transition-all duration-300"
//             >
//               <svg
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2.5"
//               >
//                 <path d="M9 18l6-6-6-6" />
//               </svg>
//             </motion.button>

//             {/* Image */}
//             <motion.div
//               variants={imageVariants}
//               initial="hidden"
//               animate="visible"
//               exit="exit"
//               onClick={(e) => e.stopPropagation()}
//               className="relative max-w-5xl max-h-[85vh] w-full"
//             >
//               <div className="relative w-full h-full rounded-2xl overflow-hidden border-4 border-[#D4AF37]/30 shadow-2xl">
//                 <Image
//                   src={images[selectedImage].src}
//                   alt={images[selectedImage].alt}
//                   width={1200}
//                   height={800}
//                   className="w-full h-full object-contain"
//                   priority
//                 />
//               </div>

//               {/* Image caption */}
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.2 }}
//                 className="absolute -bottom-16 left-0 right-0 text-center"
//               >
//                 <p className="text-white/80 font-light text-sm">
//                   {images[selectedImage].alt}
//                 </p>
//               </motion.div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }

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
