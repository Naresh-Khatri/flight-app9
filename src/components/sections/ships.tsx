import { Card, CardContent } from "@/components/ui/card";
import FadeIn from "../animations/fade-in";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Ship, Anchor, Users, Waves, Calendar, Star } from "lucide-react";
import Link from "next/link";

export function ShipsSection() {
  const ships = [
    {
      name: "Royal Voyager",
      class: "Luxury Class",
      capacity: "2,800 guests",
      features: ["5 Star Dining", "Spa & Wellness", "Theater", "Casino"],
      image: "/ships/royal-voyager.png",
    },
    {
      name: "Crystal Serenity",
      class: "Premium Class",
      capacity: "3,200 guests",
      features: ["Adventure Sports", "Kids Club", "Shopping Mall", "Pool Deck"],
      image: "/ships/crystal-serenity.jpg",
    },
    {
      name: "Ocean Majesty",
      class: "Elite Class",
      capacity: "2,400 guests",
      features: ["Fine Dining", "Golf Simulator", "Cinema", "Luxury Suites"],
      image: "/ships/ocean-majesty.jpg",
    },
  ];

  return (
    <section className="py-24">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Luxury Fleet</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our world-class ships, each designed to provide the
            ultimate cruising experience
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {ships.map((ship, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition"
            >
              <div className="relative h-[300px]">
                <img
                  src={ship.image}
                  alt={ship.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{ship.name}</h3>
                <p className="text-primary font-semibold mb-3">{ship.class}</p>
                <p className="text-gray-600 mb-4">{ship.capacity}</p>
                <div className="grid grid-cols-2 gap-3">
                  {ship.features.map((feature, i) => (
                    <span
                      key={i}
                      className="text-sm bg-gray-100 rounded-full px-3 py-1 text-center"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
