"use client";
import { HeroSection } from "@/components/sections/hero";
import { StatsSection } from "@/components/sections/stats";
import { Features } from "@/components/sections/features";
import { PopularCruises } from "@/components/sections/popular-cruises";
import { BenefitsSection } from "@/components/sections/benefits";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { NewsletterSection } from "@/components/sections/newsletter";
import { DestinationsSection } from "@/components/sections/destinations";
import { ShipsSection } from "@/components/sections/ships";
import { ExperiencesSection } from "@/components/sections/experiences";
import { CTASection } from "@/components/sections/cta";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Enhanced transform values
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.15], [1, 0.85]);
  const heroY = useTransform(scrollYProgress, [0, 0.15], [0, -100]);

  // Parallax effects
  const parallaxY = useTransform(scrollYProgress, [0, 1], [-10, 200]);
  const reverseParallaxY = useTransform(scrollYProgress, [0, 1], [0, -300]);

  // Rotation effects
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const skewX = useTransform(scrollYProgress, [0, 1], [0, 15]);
  const skewY = useTransform(scrollYProgress, [0, 1], [0, -15]);

  return (
    <main className="relative overflow-hidden " ref={containerRef}>
      {/* Hero Section with Enhanced Parallax */}
      <motion.div
        style={{
          opacity: heroOpacity,
          scale: heroScale,
          y: heroY,
        }}
        className="relative bg-gradient-to-b from-slate-50/80 via-white to-transparent"
      >
        <motion.div
          animate={{
            scale: [0.95, 1],
            opacity: [0, 1],
          }}
          transition={{
            duration: 1.2,
            ease: "easeOut",
          }}
        >
          <HeroSection />
        </motion.div>
      </motion.div>

      {/* Stats Section with Enhanced Animation */}
      <motion.div
        initial={{ opacity: 0, y: 100, scale: 0.8 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          type: "spring",
          bounce: 0.4,
        }}
        className="relative z-10 -mt-8 bg-white/80 backdrop-blur-lg"
      >
        <StatsSection />
      </motion.div>

      {/* Features Section with 3D Transform */}
      <motion.div
        initial={{ opacity: 0, rotateX: 45 }}
        whileInView={{ opacity: 1, rotateX: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, type: "spring" }}
        className="py-12 bg-gradient-to-r from-slate-50 via-white to-slate-50"
        style={{
          transformPerspective: "1000px",
          transformStyle: "preserve-3d",
        }}
      >
        <Features />
      </motion.div>

      {/* Popular Cruises with Enhanced Parallax */}
      <motion.div className="relative" style={{ y: parallaxY }}>
        <motion.div
          className="absolute inset-0 bg-slate-50/50 -z-10"
          style={{
            skewY: useTransform(scrollYProgress, [0, 1], [6, 0]),
            scale: useTransform(scrollYProgress, [0, 1], [1.1, 1]),
          }}
        />
        <PopularCruises />
      </motion.div>

      {/* Destinations with Enhanced Grid Animation */}
      <div
        // initial={{ opacity: 0, scale: 0.8, rotateY: 45 }}
        // whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
        // viewport={{ once: true }}
        // transition={{ duration: 1, type: "spring" }}
        className="relative bg-white [background-image:radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"
        style={
          {
            // transformPerspective: "2000px",
            // transformStyle: "preserve-3d",
          }
        }
      >
        <DestinationsSection />
      </div>

      {/* Ships and Experiences with Enhanced Reveal */}
      <div className="relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-slate-50/80 to-white -z-10"
          style={{
            opacity: useTransform(scrollYProgress, [0.5, 1], [0, 1]),
            scale: useTransform(scrollYProgress, [0.5, 1], [0.95, 1.05]),
          }}
        />
        <motion.div
          initial={{ opacity: 0, x: -100, rotateZ: -5 }}
          whileInView={{ opacity: 1, x: 0, rotateZ: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            type: "spring",
            bounce: 0.4,
          }}
        >
          <ShipsSection />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100, rotateZ: 5 }}
          whileInView={{ opacity: 1, x: 0, rotateZ: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            type: "spring",
            bounce: 0.4,
          }}
        >
          <ExperiencesSection />
        </motion.div>
      </div>

      {/* CTA Section with Enhanced Animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 100 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          type: "spring",
          bounce: 0.5,
        }}
        className="relative bg-gradient-to-b from-white to-slate-50/80"
      >
        <CTASection />
      </motion.div>

      {/* Enhanced Scroll Progress Indicator */}
      <motion.div
        className="fixed bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-primary/80 to-primary origin-left z-50"
        style={{
          scaleX: scrollYProgress,
          filter: "drop-shadow(0 0 0.5rem rgba(var(--primary), 0.3))",
        }}
      />
    </main>
  );
}
