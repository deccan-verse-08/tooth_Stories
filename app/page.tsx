"use client";
import React, { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";

import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";
import Gallery from "@/components/GallarySection";
import CTA from "@/components/CTASection";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />

      <WhyChooseUs />
      <Gallery />
      <Stats />
      <CTA />
      <Footer />
    </>
  );
}
