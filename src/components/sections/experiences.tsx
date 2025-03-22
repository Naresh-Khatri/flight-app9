import { Card, CardContent } from "@/components/ui/card";
import FadeIn from "../animations/fade-in";
import { 
  Utensils, 
  Waves, 
  Music, 
  Sparkles, 
  Palmtree, 
  GlassWater 
} from "lucide-react";

const experiences = [
  {
    title: "Culinary Journey",
    description: "Experience world-class dining with our celebrity chefs",
    icon: "🍽️",
    color: "bg-amber-50"
  },
  {
    title: "Wellness & Spa",
    description: "Rejuvenate your body and mind with premium treatments",
    icon: "💆‍♀️",
    color: "bg-blue-50"
  },
  {
    title: "Entertainment",
    description: "Broadway-style shows and live performances",
    icon: "🎭",
    color: "bg-purple-50"
  },
  {
    title: "Adventure Sports",
    description: "Rock climbing, surfing, and more exciting activities",
    icon: "🏃‍♂️",
    color: "bg-green-50"
  }
];

export function ExperiencesSection() {
  return (
    <section className="py-24">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Onboard Experiences</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Create lasting memories with our curated selection of onboard activities and experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className={`${exp.color} rounded-2xl p-6 hover:scale-105 transition duration-300`}
            >
              <div className="text-4xl mb-4">{exp.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{exp.title}</h3>
              <p className="text-gray-600">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 