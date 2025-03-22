"use client";
import { motion } from "framer-motion";
import FadeIn from "../animations/fade-in";
import { Ship, Users, Globe2, Trophy } from "lucide-react";
import NumberTicker from "../animations/number-ticker";

const stats = [
  {
    label: "Cruise Ships",
    value: "50+",
    icon: Ship,
    description: "Premium vessels",
  },
  {
    label: "Happy Travelers",
    value: "100K+",
    icon: Users,
    description: "Satisfied guests",
  },
  {
    label: "Destinations",
    value: "400+",
    icon: Globe2,
    description: "Ports of call",
  },
  {
    label: "Awards Won",
    value: "25+",
    icon: Trophy,
    description: "Industry recognition",
  },
];

export function StatsSection() {
  const stats = [
    { number: "500K+", label: "Happy Travelers" },
    { number: "100+", label: "Destinations" },
    { number: "15+", label: "Luxury Ships" },
    { number: "98%", label: "Satisfaction Rate" },
  ];

  return (
    <section className="py-16 bg-white/80 backdrop-blur-md">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
