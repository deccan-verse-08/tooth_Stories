"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-white"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-24 flex justify-between items-center">
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-4 group">
          {/* Logo Image Container - Increased Size & No Pink BG */}
          <div className="relative w-16 h-16 md:w-20 md:h-20 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
            {/* Minimal Gold Border Accent (Optional) */}
            <div className="absolute inset-0 border border-[#D4AF37]/20 rounded-xl rotate-45 group-hover:rotate-90 transition-transform duration-700"></div>

            <img
              src="/logo.png"
              alt="Tooth Stories Logo"
              className="w-full h-full object-contain relative z-10"
            />
          </div>

          <div className="flex flex-col">
            <h1 className="text-2xl md:text-3xl font-serif font-black tracking-tighter text-gray-900 leading-none">
              TOOTH<span className="text-[#D4AF37]">STORIES</span>
            </h1>
            <span className="text-[10px] md:text-[12px] uppercase tracking-[0.4em] text-gray-400 font-bold mt-1">
              Dental Excellence
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-10 items-center">
          <div className="flex gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-bold tracking-widest uppercase transition-colors duration-300 ${
                  pathname === item.href
                    ? "text-[#D4AF37] border-b-2 border-[#D4AF37] pb-1"
                    : "text-gray-500 hover:text-gray-900"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <Link
            href="/contact"
            className="bg-[#111] text-white px-8 py-3 rounded-full font-bold text-[11px] tracking-[0.2em] uppercase hover:bg-[#C21E56] transition-all active:scale-95 flex items-center gap-2 shadow-lg"
          >
            <Phone size={14} />
            Book Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-gray-900"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`absolute top-full left-0 right-0 bg-white border-t transition-all duration-500 overflow-hidden ${
          isMenuOpen
            ? "max-h-screen opacity-100 shadow-xl"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="p-8 space-y-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="block text-xl font-bold text-gray-800 tracking-tight"
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setIsMenuOpen(false)}
            className="block w-full bg-[#111] text-white py-5 rounded-2xl text-center font-bold tracking-widest uppercase"
          >
            Book Appointment
          </Link>
        </div>
      </div>
    </header>
  );
}
