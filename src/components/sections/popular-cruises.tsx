"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import FadeIn from "../animations/fade-in";
import { getAllCruisers } from "@/config/cruisers";

export function PopularCruises() {
  const cruises = [
    {
      title: "Mediterranean Dream",
      duration: "7 nights",
      price: "From $1,299",
      image: "/destinations/mediterranean.jpg",
    },
    {
      title: "Caribbean Paradise",
      duration: "10 nights",
      price: "From $1,499",
      image: "/destinations/caribbean.jpg",
    },
    {
      title: "Alaska Adventure",
      duration: "12 nights",
      price: "From $1,899",
      image: "/destinations/alaska.jpg",
    },
  ];

  return (
    <section className="pb-20">
      <div className="container">
        <h2 className="text-4xl font-bold text-center mb-32">
          Popular Cruise Packages
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cruises.map((cruise, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl"
            >
              <img
                src={cruise.image}
                alt={cruise.title}
                className="w-full h-[400px] object-cover transition group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{cruise.title}</h3>
                <p className="text-white/90 mb-2">{cruise.duration}</p>
                <p className="text-xl font-semibold">{cruise.price}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-16">
          <Link href="/cruisers">
            <Button>
              View All Cruisers
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
