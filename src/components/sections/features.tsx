"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Anchor, Ship, Sparkles, Compass, Palmtree, UtensilsCrossed } from "lucide-react";
import FadeIn from "../animations/fade-in";

const features = [
  {
    title: "Luxury Accommodations",
    description: "Elegant suites with ocean views and premium amenities",
    icon: "🏨"
  },
  {
    title: "Fine Dining",
    description: "World-class restaurants and culinary experiences",
    icon: "🍽️"
  },
  {
    title: "Entertainment",
    description: "Shows, activities, and events for all ages",
    icon: "🎭"
  },
  {
    title: "Premium Service",
    description: "24/7 personalized attention to every detail",
    icon: "👑"
  }
];

export function Features() {
  return (
    <section className="py-20">
      <div className="container">
        <h2 className="text-4xl font-bold text-center mb-16">
          Experience Excellence at Sea
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 