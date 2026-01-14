"use client";
import React, { useEffect, useState, useRef } from 'react';
import { Award, Users, Clock, Heart } from 'lucide-react';

interface StatItemProps {
    icon: React.ReactNode;
    value: number;
    suffix: string;
    label: string;
    delay: number;
}

function StatItem({ icon, value, suffix, label, delay }: StatItemProps) {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        const duration = 2000;
        const steps = 60;
        const increment = value / steps;
        let current = 0;

        const timer = setTimeout(() => {
            const interval = setInterval(() => {
                current += increment;
                if (current >= value) {
                    setCount(value);
                    clearInterval(interval);
                } else {
                    setCount(Math.floor(current));
                }
            }, duration / steps);

            return () => clearInterval(interval);
        }, delay);

        return () => clearTimeout(timer);
    }, [isVisible, value, delay]);

    return (
        <div
            ref={ref}
            className={`text-center group transition-all duration-500 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
            style={{ animationDelay: `${delay}ms` }}
        >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#D4AF37]/20 to-[#C21E56]/10 mb-4 group-hover:scale-110 transition-transform duration-300">
                <div className="text-[#D4AF37]">{icon}</div>
            </div>
            <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                {count.toLocaleString()}<span className="text-[#D4AF37]">{suffix}</span>
            </div>
            <div className="text-gray-500 font-medium">{label}</div>
        </div>
    );
}

export default function Stats() {
    const stats = [
        { icon: <Award size={28} />, value: 15, suffix: '+', label: 'Years Experience', delay: 0 },
        { icon: <Users size={28} />, value: 10000, suffix: '+', label: 'Happy Smiles', delay: 150 },
        { icon: <Clock size={28} />, value: 50, suffix: '+', label: 'Expert Dentists', delay: 300 },
        { icon: <Heart size={28} />, value: 98, suffix: '%', label: 'Patient Satisfaction', delay: 450 },
    ];

    return (
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-1 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] text-sm font-bold uppercase tracking-wider mb-4">
                        Our Achievements
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900">
                        Numbers That <span className="text-[#C21E56]">Speak</span>
                    </h2>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                    {stats.map((stat, index) => (
                        <StatItem key={index} {...stat} />
                    ))}
                </div>

                {/* Bottom Accent */}
                <div className="mt-16 flex justify-center">
                    <div className="h-1 w-24 bg-gradient-to-r from-[#C21E56] via-[#D4AF37] to-[#C21E56] rounded-full" />
                </div>
            </div>
        </section>
    );
}
