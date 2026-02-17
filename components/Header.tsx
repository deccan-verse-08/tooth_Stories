
"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ChevronDown, ArrowRight } from "lucide-react";
// Import your services data to get the IDs and Titles dynamically
import { services } from "@/lib/servicesData";

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
    { name: "Blogs", href: "/blogs" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-white"
      }`}
    >
      <nav className="max-w-7xl 2xl:max-w-[90rem] mx-auto px-6 h-21 flex justify-between items-center">
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-4 group">
          <div className="relative w-16 h-16 md:w-20 md:h-20 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
            <div className="absolute inset-0 border border-[#D4AF37]/20 rounded-xl rotate-45 group-hover:rotate-90 transition-transform duration-700"></div>
            <img
              src="/logo.png"
              alt="Tooth Stories Logo"
              className="w-full h-full object-contain relative z-10"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] md:text-[12px] uppercase tracking-[0.4em] text-gray-400 font-bold mt-1">
              A story behind <br /> every smile
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-10 items-center">
          <div className="flex gap-8">
            {navItems.map((item) => (
              <div key={item.href} className="relative group py-4">
                {/* Added py-4 to create a hover bridge so the menu doesn't close when moving mouse to dropdown */}
                <Link
                  href={item.href}
                  className={`text-sm font-bold tracking-widest uppercase transition-colors duration-300 flex items-center gap-1 ${
                    pathname.startsWith(item.href) && item.href !== "/"
                      ? "text-[#D4AF37] border-b-2 border-[#D4AF37] pb-1"
                      : "text-gray-500 hover:text-gray-900"
                  }`}
                >
                  {item.name}
                  {item.name === "Services" && (
                    <ChevronDown
                      size={16}
                      className="transition-transform duration-300 group-hover:rotate-180"
                    />
                  )}
                </Link>

                {/* Dropdown for Services */}
                {item.name === "Services" && (
                  <div className="absolute left-0 top-full opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 w-72">
                    <div className="bg-[#FFF8F5] p-4 shadow-2xl rounded-xl border-t-4 border-[#D4AF37] ring-1 ring-black/5 mt-2">
                      <div className="grid grid-cols-1 gap-1 max-h-[60vh] overflow-y-auto custom-scrollbar">
                        {services.map((service) => (
                          <Link
                            key={service.id}
                            href={`/services/${service.id}`}
                            className="px-4 py-3 rounded-lg text-gray-700 hover:bg-[#D4AF37]/10 hover:text-[#C21E56] text-[11px] font-bold tracking-widest uppercase transition-all duration-200 flex items-center justify-between group/item"
                          >
                            {service.title}
                            <ArrowRight
                              size={12}
                              className="opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all"
                            />
                          </Link>
                        ))}
                      </div>

                      {/* View All Button */}
                      <div className="mt-2 pt-2 border-t border-gray-100">
                        <Link
                          href="/services"
                          className="block text-center text-[10px] font-black text-[#D4AF37] hover:text-[#C21E56] transition-colors tracking-[0.2em] uppercase"
                        >
                          View All Services
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex items-center gap-6">
            <a
              href="tel:+917666419396"
              className="hidden xl:flex items-center gap-2 text-xs font-bold tracking-widest text-gray-600 hover:text-[#D4AF37] transition-colors"
            >
              <Phone size={14} className="text-[#D4AF37]" />
              +91 76664 19396
            </a>

            <Link
              href="/contact"
              className="bg-[#111] text-white px-8 py-3 rounded-full font-bold text-[11px] tracking-[0.2em] uppercase hover:bg-[#C21E56] transition-all active:scale-95 flex items-center gap-2 shadow-lg"
            >
              <Phone size={14} />
              Book Now
            </Link>
          </div>
        </div>

        {/* Mobile Actions */}
        <div className="md:hidden flex items-center gap-4">
          <a
            href="tel:+917666419396"
            className="p-2 text-gray-900 hover:text-[#D4AF37] transition-colors"
          >
            <Phone size={24} />
          </a>
          <button
            className="p-2 text-gray-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
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
            <div key={item.href}>
              <Link
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block text-xl font-bold text-gray-800 tracking-tight"
              >
                {item.name}
              </Link>
              {/* Optional: Add mobile sub-links here if needed */}
            </div>
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
