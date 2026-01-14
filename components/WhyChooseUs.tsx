"use client";
import React from "react";
import {
  ShieldCheck,
  Clock,
  Heart,
  UserCheck,
  Stethoscope,
  Sparkle,
} from "lucide-react";

export default function WhyChooseUs() {
  const points = [
    {
      title: "Strict Sterilization",
      desc: "We follow international safety protocols to ensure 100% sterilized instruments and a germ-free environment.",
      icon: <ShieldCheck className="text-[#C21E56]" size={32} />,
    },
    {
      title: "Experienced Doctors",
      desc: "Our team of specialists brings years of clinical expertise to handle everything from routine checkups to complex cases.",
      icon: <UserCheck className="text-[#C21E56]" size={32} />,
    },
    {
      title: "Modern Equipment",
      desc: "We use the latest dental chairs and tools to ensure your treatment is faster, safer, and more accurate.",
      icon: <Stethoscope className="text-[#C21E56]" size={32} />,
    },
    {
      title: "Comfortable Environment",
      desc: "Our clinic is designed to be calm and welcoming, helping you feel relaxed and at ease during your visit.",
      icon: <Heart className="text-[#C21E56]" size={32} />,
    },
    {
      title: "Timely Appointments",
      desc: "We respect your busy schedule. We strive to minimize waiting time so you can get back to your day quickly.",
      icon: <Clock className="text-[#C21E56]" size={32} />,
    },
    {
      title: "Affordable Premium Care",
      desc: "Get high-quality dental treatment using the best materials at honest and transparent prices.",
      icon: <Sparkle className="text-[#C21E56]" size={32} />,
    },
  ];

  return (
    <section id="why-choose-us" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-[#D4AF37] font-bold tracking-[0.2em] text-xs uppercase mb-3">
            Why Tooth Stories
          </h2>
          <h3 className="text-3xl md:text-5xl font-serif text-gray-900 leading-tight">
            Comprehensive Dental Care <br />
            <span className="italic text-[#C21E56]">You Can Trust</span>
          </h3>
          <div className="w-16 h-1 bg-[#D4AF37] mx-auto mt-6"></div>
        </div>

        {/* 3-Column Simple Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">
          {points.map((item, idx) => (
            <div
              key={idx}
              className="group p-8 rounded-2xl border border-transparent hover:border-gray-100 hover:bg-[#FFFCFA] transition-all duration-300"
            >
              <div className="mb-6 flex justify-center lg:justify-start">
                <div className="p-3 rounded-xl bg-[#C21E56]/5 group-hover:bg-[#C21E56] group-hover:text-white transition-colors duration-300">
                  {React.cloneElement(item.icon as React.ReactElement<any>, {
                    className: "group-hover:text-white transition-colors",
                  })}
                </div>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3 text-center lg:text-left">
                {item.title}
              </h4>
              <p className="text-gray-500 text-sm leading-relaxed text-center lg:text-left font-light">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
