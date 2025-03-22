"use client";
import Image from "next/image";
import { Anchor, Shield, Sparkles } from "lucide-react";
import FadeIn from "../animations/fade-in";
import { siteConfig } from "@/config/data";
import { motion } from "framer-motion";
import { CruiseSearchForm } from "../cruise-search-form";

const items = [
  <div
    className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-4 py-2.5 rounded-full shadow-sm border border-gray-100/50"
    key={1}
  >
    <Shield className="w-5 h-5 text-primary" />
    <span className="text-sm font-medium">Secure Booking</span>
  </div>,
  <div
    className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-4 py-2.5 rounded-full shadow-sm border border-gray-100/50"
    key={2}
  >
    <Anchor className="w-5 h-5 text-primary" />
    <span className="text-sm font-medium">Premium Cruise Lines</span>
  </div>,
  <div
    className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-4 py-2.5 rounded-full shadow-sm border border-gray-100/50"
    key={3}
  >
    <Sparkles className="w-5 h-5 text-primary" />
    <span className="text-sm font-medium">Best Deals</span>
  </div>,
];

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center">
      <div className="absolute inset-0 bg-[url('/hero.jpg')] bg-cover bg-center">
        <Image
          src="/hero.jpg"
          alt="hero"
          fill
          className="object-cover rounded-2xl overflow-hidden"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40" />
      </div>

      <div className="container relative z-10 py-20 mx-auto flex justify-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in max-w-2xl text-white text-center">
          Discover Luxury at Sea
        </h1>
      </div>
      <CruiseSearchForm />
    </section>
  );
}
