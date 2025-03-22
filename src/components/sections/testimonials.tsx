"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import FadeIn from "../animations/fade-in";
import Image from "next/image";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "First-time Cruiser",
    image: "https://randomuser.me/api/portraits/women/75.jpg",
    content:
      "The most amazing vacation experience! The staff was incredible and the destinations were breathtaking.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Frequent Cruiser",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    content:
      "I've been on many cruises, but this company consistently delivers the best service and value.",
    rating: 5,
  },
  {
    name: "Emma Thompson",
    role: "Family Traveler",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    content:
      "Perfect for families! Activities for all ages and the kids' programs were exceptional.",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Guests Say
          </h2>
          <p className="text-gray-600">
            Real experiences from our valued travelers
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <Card className="h-full">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-0.5">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 italic">
                    "{testimonial.content}"
                  </p>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
