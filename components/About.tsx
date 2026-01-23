"use client";
import React from 'react';
import { Shield, Clock, Heart, Award, Users, Sparkles } from 'lucide-react';

const features = [
    { icon: <Shield size={24} />, title: "Advanced Technology", desc: "State-of-the-art equipment for precise, painless treatments" },
    { icon: <Clock size={24} />, title: "Flexible Hours", desc: "Extended hours including evenings and weekends" },
    { icon: <Heart size={24} />, title: "Patient-First Care", desc: "Personalized treatment plans tailored to your needs" },
    { icon: <Award size={24} />, title: "Certified Experts", desc: "Board-certified specialists with decades of experience" },
    { icon: <Users size={24} />, title: "Family Friendly", desc: "Welcoming environment for patients of all ages" },
    { icon: <Sparkles size={24} />, title: "Luxury Experience", desc: "Premium amenities for your comfort and relaxation" },
];

export default function About() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                    {/* Left - Image Collage */}
                    <div className="relative">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-4">
                                <div className="rounded-3xl overflow-hidden shadow-2xl">
                                    <img
                                        src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=600&h=400"
                                        alt="Modern dental clinic"
                                        className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="rounded-3xl overflow-hidden shadow-2xl">
                                    <img
                                        src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=600&h=300"
                                        alt="Dentist with patient"
                                        className="w-full h-36 object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>
                            <div className="space-y-4 pt-8">
                                <div className="rounded-3xl overflow-hidden shadow-2xl">
                                    <img
                                        src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=600&h=300"
                                        alt="Dental equipment"
                                        className="w-full h-36 object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="rounded-3xl overflow-hidden shadow-2xl">
                                    <img
                                        src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&q=80&w=600&h=400"
                                        alt="Happy patient"
                                        className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Floating Badge */}
                        <div className="absolute -bottom-6 -right-4 bg-white rounded-2xl shadow-xl p-6 border-l-4 border-[#D4AF37]">
                            <div className="text-3xl font-bold text-[#C21E56]">15+</div>
                            <div className="text-sm text-gray-500">Years of Excellence</div>
                        </div>
                    </div>

                    {/* Right - Content */}
                    <div className="space-y-8">
                        <span className="inline-block px-4 py-1 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] text-sm font-bold uppercase tracking-wider">
                            About Us
                        </span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 leading-tight">
                            Where Every Smile Gets the{' '}
                            <span className="text-[#C21E56]">Royal Treatment</span>
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            At Tooth Stories, we believe every smile has a unique story to tell. Founded in 2010,
                            our luxury dental clinic combines cutting-edge technology with a warm, welcoming
                            atmosphere to create an unparalleled dental experience.
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Our team of board certified specialists is dedicated to crafting beautiful,
                            healthy smiles while ensuring your complete comfort throughout every visit.
                            From routine cleanings to complex smile makeovers, we treat each patient like royalty.
                        </p>

                        {/* Mission Statement */}
                        <div className="bg-gradient-to-r from-[#C21E56]/5 to-[#D4AF37]/5 rounded-2xl p-6 border-l-4 border-[#D4AF37]">
                            <h4 className="font-bold text-gray-900 mb-2">Our Mission</h4>
                            <p className="text-gray-600 italic">
                                "To transform dental care into a luxury experience, where every patient leaves
                                with a story worth smiling about."
                            </p>
                        </div>
                    </div>
                </div>

                {/* Why Choose Us */}
                <div className="pt-16 border-t border-gray-100">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-serif font-bold text-gray-900">
                            Why Choose <span className="text-[#D4AF37]">ToothStories</span>?
                        </h3>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="group p-6 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-[#D4AF37]/30"
                            >
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#C21E56] to-[#D4AF37] flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                                    {feature.icon}
                                </div>
                                <h4 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h4>
                                <p className="text-gray-500 text-sm">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
