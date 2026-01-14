"use client";
import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const services = [
  {
    title: "Smile Makeover",
    icon: "✨",
    desc: "Complete smile transformation with veneers, bonding, and whitening for your perfect look.",
    color: "from-pink-500/20 to-rose-500/20"
  },
  {
    title: "Dental Implants",
    icon: "🦷",
    desc: "Permanent tooth replacement solutions that look, feel, and function like natural teeth.",
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    title: "Teeth Whitening",
    icon: "💎",
    desc: "Professional-grade whitening for a brilliantly bright smile in just one session.",
    color: "from-amber-500/20 to-yellow-500/20"
  },
  {
    title: "Orthodontics",
    icon: "📏",
    desc: "Invisible aligners and modern braces for beautifully aligned teeth at any age.",
    color: "from-purple-500/20 to-indigo-500/20"
  },
  {
    title: "Oral Surgery",
    icon: "🏥",
    desc: "Expert surgical care including wisdom teeth extraction and jaw procedures.",
    color: "from-teal-500/20 to-emerald-500/20"
  },
  {
    title: "Pediatric Care",
    icon: "👶",
    desc: "Gentle, fun-filled dental experiences that help kids develop healthy habits.",
    color: "from-orange-500/20 to-red-500/20"
  },
];

export default function Services({ onBook }: { onBook: () => void }) {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] text-sm font-bold uppercase tracking-wider mb-4">
            <Sparkles size={14} />
            What We Offer
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Our Premium <span className="text-[#D4AF37]">Services</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            From routine care to complete smile transformations, we offer a full spectrum of
            dental services with a luxury touch.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div
              key={i}
              className="group relative p-8 bg-white border border-gray-100 rounded-3xl hover:border-[#D4AF37] transition-all duration-500 card-hover overflow-hidden"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${s.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`} />

              {/* Content */}
              <div className="relative z-10">
                <div className="text-5xl mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  {s.icon}
                </div>
                <h4 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-[#C21E56] transition-colors duration-300">
                  {s.title}
                </h4>
                <p className="text-gray-500 mb-6 leading-relaxed">
                  {s.desc}
                </p>
                <button
                  onClick={onBook}
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#D4AF37] uppercase tracking-wide group-hover:text-[#C21E56] transition-colors duration-300"
                >
                  Book Now
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[#D4AF37]/10 to-transparent rounded-bl-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-500 mb-4">Can't find what you're looking for?</p>
          <button
            onClick={onBook}
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#C21E56] text-white rounded-full font-bold hover:bg-[#a01845] transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Schedule a Consultation
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}