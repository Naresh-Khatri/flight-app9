"use client";
import {
  Shield,
  Sparkles,
  Clock,
  Wallet,
  CheckCircle2,
  Headphones,
  Globe2,
  Plane,
} from "lucide-react";
import FadeIn from "../animations/fade-in";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/data";

const benefits = [
  {
    title: "Best Price Guarantee",
    description:
      "Find a lower cruise fare and we'll match it, plus give you onboard credit",
    icon: Wallet,
    features: [
      "Price match guarantee",
      "No booking fees",
      "Flexible payment plans",
    ],
  },
  {
    title: "Premium Experience",
    description:
      "Enjoy luxury amenities and world-class service on every voyage",
    icon: Sparkles,
    features: [
      "Luxury accommodations",
      "Gourmet dining",
      "Premium entertainment",
    ],
  },
  {
    title: "24/7 Support",
    description:
      "Our cruise experts are here to help you before, during, and after your voyage",
    icon: Headphones,
    features: [
      "Expert cruise advisors",
      "Onboard assistance",
      "Emergency support",
    ],
  },
  {
    title: "Global Destinations",
    description: "Explore over 400+ ports of call across all seven continents",
    icon: Globe2,
    features: [
      "Worldwide itineraries",
      "Exclusive shore excursions",
      "Cultural experiences",
    ],
  },
];

export function BenefitsSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 via-white to-purple-50/30" />
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-24 h-24 bg-orange-400/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-400/10 rounded-full blur-3xl animate-pulse" />

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold text-blue-500 tracking-wider uppercase mb-2 block">
            Why Cruise With Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experience the{" "}
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              {siteConfig.name}
            </span>{" "}
            Difference
          </h2>
          <p className="text-gray-600 mt-4">
            We combine cutting-edge technology with exceptional service to make
            your journey unforgettable
          </p>
        </FadeIn>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <FadeIn key={index} delay={index * 0.1} className="group">
              <div className="relative bg-white rounded-3xl p-6 h-full hover:shadow-xl transition-all duration-300">
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-2xl bg-primary-lightest flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <benefit.icon className={`w-7 h-7 text-primary`} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                  {benefit.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3">
                  {benefit.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-sm text-gray-600"
                    >
                      <CheckCircle2 className={`w-4 h-4 flex-shrink-0`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Decorative Corner */}
                <div
                  className={`absolute top-0 right-0 w-24 h-24 rounded-bl-[64px] -z-10 transition-all duration-300`}
                />
              </div>
            </FadeIn>
          ))}
        </div>

        {/* CTA Section */}
        <FadeIn className="mt-16 text-center">
          <Button
            size="lg"
            className="bg-orange-500 hover:bg-orange-600 text-white"
          >
            Start Your Journey
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}
