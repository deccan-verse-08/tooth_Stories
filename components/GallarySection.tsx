// "use client";

// import Image from "next/image";
// import { motion, Variants } from "framer-motion";
// import { Plus } from "lucide-react";

// /* ================= ANIMATION VARIANTS ================= */
// const container: Variants = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: { staggerChildren: 0.1 },
//   },
// };

// const item: Variants = {
//   hidden: { opacity: 0, scale: 0.95, y: 20 },
//   show: {
//     opacity: 1,
//     scale: 1,
//     y: 0,
//     transition: { duration: 0.6, ease: "easeInOut" as const },
//   },
// };

// /* ================= GALLERY DATA ================= */
// // Replace with your actual Unsplash or local image paths
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
//     src: "/nine.jpg",
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
//     src: "/thirteen.jpg",
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
//     alt: "Kids Dentistry",
//   },
//   {
//     src: "/two.jpg",
//     span: "md:col-span-1 md:row-span-1",
//     alt: "Kids Dentistry",
//   },
// ];

// export default function Gallery() {
//   return (
//     <section className="py-24 bg-[#FFFCFA]">
//       <div className="max-w-7xl mx-auto px-6">
//         {/* Header Section */}
//         <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
//           <div className="max-w-2xl">
//             <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-[#C21E56] block mb-4">
//               Our Gallery
//             </span>
//             <h2 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight">
//               A Legacy of <br />
//               <span className="font-light text-[#D4AF37]">
//                 Confident Smiles
//               </span>
//             </h2>
//           </div>
//           <p className="max-w-xs text-gray-500 font-light text-sm leading-relaxed border-l border-gray-200 pl-6">
//             Take a look inside our studio and see the transformations we've
//             shared with our patient community.
//           </p>
//         </div>

//         {/* Bento Grid */}
//         <motion.div
//           variants={container}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, margin: "-100px" }}
//           className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]"
//         >
//           {images.map((img, index) => (
//             <motion.div
//               key={index}
//               variants={item}
//               className={`relative overflow-hidden rounded-2xl group border border-gray-100 ${img.span}`}
//             >
//               {/* Overlay on Hover */}
//               <div className="absolute inset-0 bg-[#C21E56]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex items-center justify-center backdrop-blur-[2px]">
//                 <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#C21E56] transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
//                   <Plus size={24} />
//                 </div>
//               </div>

//               {/* Image */}
//               <Image
//                 src={img.src}
//                 alt={img.alt}
//                 fill
//                 className="object-cover transition-transform duration-700 group-hover:scale-110"
//               />
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }

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
    alt: "Kids Dentistry",
  },
  {
    src: "/two.jpg",
    span: "md:col-span-1 md:row-span-1",
    alt: "Kids Dentistry",
  },
  {
    src: "/Image1OfBoth.jpeg",
    span: "md:col-span-1 md:row-span-1",
    alt: "Kids Dentistry",
  },
  // I commented out this as they aren't looking well  {
  //   src: "/Image2OfBoth.jpeg",
  //   span: "md:col-span-1 md:row-span-1",
  //   alt: "Kids Dentistry",
  // },
  // {
  //   src: "/Image3OfBoth.jpeg",
  //   span: "md:col-span-1 md:row-span-1",
  //   alt: "Kids Dentistry",
  // },
  // {
  //   src: "/Image4OfBoth.jpeg",
  //   span: "md:col-span-1 md:row-span-1",
  //   alt: "Kids Dentistry",
  // },
];

export default function Gallery() {
  return (
    <section className="py-20 bg-[#FFFCFA]">
      <div className="max-w-7xl mx-auto px-6">
        {/* ---------- HEADER ---------- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-[#C21E56] block mb-3">
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

        {/* ---------- BENTO GRID ---------- */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[180px]"
        >
          {images.map((img, index) => (
            <motion.div
              key={index}
              variants={item}
              className={`relative overflow-hidden rounded-2xl group border border-gray-100 ${img.span}`}
            >
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-[#C21E56]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex items-center justify-center backdrop-blur-[2px]">
                <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center text-[#C21E56] transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <Plus size={22} />
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
