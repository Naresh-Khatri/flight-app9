import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import FadeIn from "../animations/fade-in";
import { Anchor, ArrowRight, Palmtree, Waves } from "lucide-react";
import Link from "next/link";
import { destinations, getAllDestinations } from "@/config/destinations";
import { get } from "http";

export function DestinationsSection() {
  // const destinations = [
  //   {
  //     name: "Greek Islands",
  //     description: "Ancient ruins and crystal waters",
  //     image: "/destinations/greek-islands.jpg",
  //     rating: 4.9,
  //     trips: 24,
  //   },
  //   {
  //     name: "Norwegian Fjords",
  //     description: "Dramatic landscapes and northern lights",
  //     image: "/destinations/norwegian-fjords.jpg",
  //     rating: 4.8,
  //     trips: 18,
  //   },
  //   {
  //     name: "Caribbean Islands",
  //     description: "Tropical paradise and white beaches",
  //     image: "/destinations/caribbean.jpg",
  //     rating: 4.9,
  //     trips: 32,
  //   },
  //   {
  //     name: "Asian Wonders",
  //     description: "Cultural heritage and modern marvels",
  //     image: "/destinations/asian-wonders.jpg",
  //     rating: 4.7,
  //     trips: 15,
  //   },
  // ];

  return (
    <section className="py-24">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Popular Destinations</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our most sought-after cruise destinations, each offering
            unique experiences and unforgettable memories
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((dest, index) => (
            <Link href={`/destinations/${dest.slug}`} key={dest.slug}>
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-xl mb-4">
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-[300px] object-cover transition duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{dest.name}</h3>
                <p className="text-gray-600 mb-3">{dest.description}</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="flex items-center gap-1">
                    ⭐ {dest.rating.score} rating
                  </span>
                  <span>{dest.trips.length * 12} trips available</span>
                </div>
                <Button variant="outline" className="w-full mt-4" size="sm">
                  View Details
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </Link>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <Link href="/destinations">
            <Button>
              View Destinations
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
