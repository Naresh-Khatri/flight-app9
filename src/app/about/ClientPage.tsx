"use client";
import { siteConfig } from "@/config/data";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Users,
  Globe2,
  HeartHandshake,
  Ship,
  Clock,
  Shield,
  Phone,
  CheckCircle2,
  Headphones,
  Compass,
  Sparkles,
  Anchor,
  Star,
  Award,
  Heart,
  ArrowRight,
} from "lucide-react";
import { BrandLogoWithText } from "@/assets/logo";
import NumberTicker from "@/components/animations/number-ticker";

const stats = [
  { label: "Years Experience", value: "15", pre: "", post: "+", icon: Clock },
  {
    label: "Global Destinations",
    value: "500",
    pre: "",
    post: "+",
    icon: Globe2,
  },
  { label: "Satisfied Guests", value: "75", pre: "", post: "K+", icon: Heart },
  { label: "Luxury Ships", value: "25", pre: "", post: "+", icon: Ship },
];

const values = [
  {
    icon: Star,
    title: "Luxury Experience",
    description:
      "Curated high-end cruise experiences with premium amenities and personalized service.",
  },
  {
    icon: Award,
    title: "Expert Knowledge",
    description:
      "Our seasoned cruise specialists bring decades of industry expertise to your vacation planning.",
  },
  {
    icon: Shield,
    title: "Peace of Mind",
    description:
      "Comprehensive support and insurance options for worry-free travel adventures.",
  },
];

const features = [
  {
    icon: CheckCircle2,
    title: "VIP Treatment",
    description:
      "Exclusive access to premium ship amenities and private events",
  },
  {
    icon: Compass,
    title: "Bespoke Itineraries",
    description: "Custom-designed cruise packages tailored to your preferences",
  },
  {
    icon: HeartHandshake,
    title: "Loyalty Rewards",
    description: "Special perks and upgrades for our returning guests",
  },
];

export default function AboutClientPage() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.0, 1]);

  return (
    <div className="relative min-h-screen">
      {/* Hero Section - Full screen with parallax */}
      <motion.div
        style={{ opacity, scale }}
        className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-b from-primary/5 via-white to-transparent"
      >
        <div className="absolute inset-0 bg-[url('/images/pattern-bg.png')] opacity-5" />
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <BrandLogoWithText className="w-40 h-40 mx-auto mb-8" />
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/80 to-primary/60 text-transparent bg-clip-text">
                Elevating Your Journey at Sea
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Welcome to a world of refined cruise experiences with{" "}
                {siteConfig.name}. We specialize in crafting extraordinary
                voyages that combine luxury, adventure, and impeccable service.
              </p>
              <motion.div
                className="flex gap-4 justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Link href="/search">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 group"
                  >
                    Explore Voyages
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Stats Section - Floating Cards */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl transform rotate-3 group-hover:rotate-0 transition-transform" />
              <div className="relative p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all">
                <div className="flex items-center justify-between mb-4">
                  <stat.icon className="w-8 h-8 text-primary" />
                  <div className="text-3xl font-bold text-primary">
                    {stat.pre}
                    <NumberTicker
                      value={parseInt(stat.value)}
                      className="inline"
                    />
                    {stat.post}
                  </div>
                </div>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Values Section - Overlapping Cards */}
      <div className="bg-gradient-to-b from-white via-primary/5 to-white py-32">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            The <span className="text-primary">{siteConfig.name}</span>{" "}
            Experience
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8 relative">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-primary/10 rounded-2xl transform -rotate-3 group-hover:rotate-0 transition-all" />
                <div className="relative p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all">
                  <div className="bg-primary/10 p-4 rounded-full w-fit mb-6 group-hover:bg-primary/20 transition-colors">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section - Horizontal Scroll Cards */}
      <div className="py-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Exclusive Benefits
          </motion.h2>
          <div className="flex flex-nowrap gap-8 overflow-x-auto pb-8 snap-x">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="flex-none w-[300px] snap-center"
              >
                <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all border border-primary/10">
                  <div className="bg-primary/10 p-4 rounded-full w-fit mb-6">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section - Full Width with Pattern */}
      <div className="relative py-32 bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern-bg.png')] opacity-10" />
        <motion.div
          className="container mx-auto px-4 relative"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Begin Your Luxury Voyage
            </h2>
            <p className="text-xl mb-12 text-white/90">
              Let our expert cruise consultants craft your perfect journey with
              exclusive perks and VIP treatment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/search">
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 transition-colors group"
                >
                  View Luxury Cruises
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href={`tel:${siteConfig.contact.phone.value}`}>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white bg-transparent"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Speak with an Expert
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
