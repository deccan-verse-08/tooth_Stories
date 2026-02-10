"use client";

import React, { useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

// Transformation showcase data with real stock images
const transformations = [
    {
        id: "whitening",
        title: "Teeth Whitening",
        description: "Professional brightening that removes years of stains",
        // Free stock images (Unsplash/Pexels style URLs)
        before: "/before_teethWhitening.png",
        after: "/after_teethWhitening.png",
    },
    {
        id: "smile",
        title: "Smile Makeover",
        description: "Complete transformation for a confident, radiant smile",
        before: "/before_sm.png",
        after: "after_sm.png",
    },
    {
        id: "care",
        title: "Dental Care",
        description: "Routine care that keeps your smile healthy",
        before: "/before_dt.png",
        after: "/after_dt.png",
    },
];

// Image placeholders with actual dental-themed gradients
const ImageWithFallback = ({
    src,
    alt,
    className,
}: {
    src: string;
    alt: string;
    className?: string;
}) => {
    const [hasError, setHasError] = useState(false);

    if (hasError) {
        return (
            <div
                className={`bg-gradient-to-br from-[#FFF5EE] to-[#FFE4D6] flex items-center justify-center ${className}`}
            >
                <div className="text-center p-4">
                    <span className="text-4xl">😁</span>
                    <p className="text-xs text-gray-400 mt-2">{alt}</p>
                </div>
            </div>
        );
    }

    return (
        <img
            src={src}
            alt={alt}
            className={className}
            onError={() => setHasError(true)}
            loading="lazy"
        />
    );
};

// Comparison slider component
const ComparisonSlider = ({
    beforeImage,
    afterImage,
}: {
    beforeImage: string;
    afterImage: string;
}) => {
    const [sliderPosition, setSliderPosition] = useState(50);
    const containerRef = useRef<HTMLDivElement>(null);
    const isDragging = useRef(false);

    const handleMove = useCallback((clientX: number) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = clientX - rect.left;
        const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
        setSliderPosition(percentage);
    }, []);

    const handleMouseDown = () => {
        isDragging.current = true;
    };

    const handleMouseUp = () => {
        isDragging.current = false;
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (isDragging.current) {
            handleMove(e.clientX);
        }
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        handleMove(e.touches[0].clientX);
    };

    const handleClick = (e: React.MouseEvent) => {
        handleMove(e.clientX);
    };

    return (
        <div
            ref={containerRef}
            className="relative w-full aspect-[4/3] md:aspect-[16/10] rounded-2xl overflow-hidden cursor-ew-resize select-none bg-gray-100 shadow-inner"
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            onTouchStart={handleMouseDown}
            onTouchEnd={handleMouseUp}
            onClick={handleClick}
        >
            {/* After Image (Full - Background) */}
            <div className="absolute inset-0">
                <ImageWithFallback
                    src={afterImage}
                    alt="After treatment"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Before Image (Clipped - Foreground) */}
            <div
                className="absolute inset-0 overflow-hidden"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
                <ImageWithFallback
                    src={beforeImage}
                    alt="Before treatment"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Slider Handle */}
            <div
                className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_10px_rgba(0,0,0,0.3)] z-10"
                style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
            >
                {/* Handle Grip */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center border-2 border-[#D4AF37] hover:scale-110 transition-transform">
                    <div className="flex items-center gap-1">
                        <svg className="w-3 h-3 text-[#D4AF37] rotate-180" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L10 4.414l6.293 6.293a1 1 0 001.414-1.414l-7-7z" />
                        </svg>
                        <div className="w-0.5 h-5 bg-[#D4AF37] rounded-full" />
                        <svg className="w-3 h-3 text-[#D4AF37]" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L10 4.414l6.293 6.293a1 1 0 001.414-1.414l-7-7z" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Labels */}
            <div className="absolute top-4 left-4 px-3 py-1.5 bg-black/70 backdrop-blur-sm rounded-full">
                <span className="text-xs font-bold text-white uppercase tracking-wider">Before</span>
            </div>
            <div className="absolute top-4 right-4 px-3 py-1.5 bg-[#D4AF37] rounded-full shadow-lg">
                <span className="text-xs font-bold text-white uppercase tracking-wider">After</span>
            </div>

            {/* Instruction hint */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/50 backdrop-blur-sm rounded-full">
                <span className="text-[10px] text-white/80">← Drag to compare →</span>
            </div>
        </div>
    );
};

export default function Service3D() {
    const [activeIndex, setActiveIndex] = useState(0);
    const activeTransform = transformations[activeIndex];

    return (
        <div className="w-full bg-gradient-to-br from-white via-[#FFFBF8] to-[#FFF5EE] rounded-[2rem] md:rounded-[3rem] border border-[#D4AF37]/15 shadow-xl overflow-hidden p-5 md:p-8">

            {/* Header */}
            <div className="text-center mb-6">
                <span className="inline-block px-3 py-1 bg-[#C21E56]/10 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] text-[#C21E56] mb-3">
                    ✨ Real Results
                </span>
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-gray-900">
                    See the Transformation
                </h3>
                <p className="text-sm text-gray-500 mt-2 max-w-md mx-auto">
                    Drag the slider to compare before and after results from our treatments
                </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-6">
                {/* Slider */}
                <div className="w-full lg:w-2/3">
                    <ComparisonSlider
                        beforeImage={activeTransform.before}
                        afterImage={activeTransform.after}
                    />
                </div>

                {/* Treatment Selector */}
                <div className="w-full lg:w-1/3 flex flex-col">
                    <p className="text-xs text-gray-400 uppercase tracking-widest mb-3">Select Treatment</p>

                    <div className="space-y-2 mb-5">
                        {transformations.map((t, i) => (
                            <motion.button
                                key={t.id}
                                onClick={() => setActiveIndex(i)}
                                whileHover={{ x: 4 }}
                                whileTap={{ scale: 0.98 }}
                                className={`w-full p-4 rounded-xl text-left transition-all duration-300 border-2 ${activeIndex === i
                                        ? "bg-gradient-to-r from-[#C21E56]/10 to-[#D4AF37]/10 border-[#D4AF37] shadow-md"
                                        : "bg-white border-gray-100 hover:border-[#D4AF37]/40"
                                    }`}
                            >
                                <p className="font-bold text-gray-900 text-sm">{t.title}</p>
                                <p className="text-xs text-gray-500 mt-0.5">{t.description}</p>
                            </motion.button>
                        ))}
                    </div>

                    {/* Trust indicators */}
                    <div className="flex items-center justify-center gap-4 mb-5 py-3 border-y border-gray-100">
                        <div className="text-center">
                            <p className="text-lg font-bold text-[#C21E56]">500+</p>
                            <p className="text-[10px] text-gray-400">Happy Smiles</p>
                        </div>
                        <div className="w-px h-8 bg-gray-200" />
                        <div className="text-center">
                            <p className="text-lg font-bold text-[#D4AF37]">10+</p>
                            <p className="text-[10px] text-gray-400">Years Experience</p>
                        </div>
                        <div className="w-px h-8 bg-gray-200" />
                        <div className="text-center">
                            <p className="text-lg font-bold text-emerald-600">4.9★</p>
                            <p className="text-[10px] text-gray-400">Rating</p>
                        </div>
                    </div>

                    {/* CTA */}
                    <Link href="/contact" className="mt-auto">
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full py-4 bg-gradient-to-r from-[#C21E56] to-[#A01845] text-white text-xs font-bold uppercase tracking-widest rounded-xl shadow-lg shadow-[#C21E56]/20 hover:shadow-xl transition-all"
                        >
                            Book Consultation
                        </motion.button>
                    </Link>

                    <p className="text-[10px] text-gray-400 text-center mt-3">
                        • Get a custom treatment plan • No obligation, just advice
                    </p>
                </div>
            </div>
        </div>
    );
}