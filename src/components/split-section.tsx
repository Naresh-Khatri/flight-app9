"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "./ui/button";
import { siteConfig } from "@/config/data";
import { Badge } from "./ui/badge";
import { PhoneIcon, ArrowRight, Clock, Shield } from "lucide-react";
import { motion } from "framer-motion";

interface SplitSectionProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  subtitle?: string;
  description: string;
  imageLeft?: boolean;
  className?: string;
  features?: string[];
  ctaText?: string;
  ctaLink?: string;
}

export function SplitSection({
  imageSrc,
  imageAlt,
  title,
  subtitle,
  description,
  imageLeft = true,
  className,
  features = [],
  ctaText = "Contact Us",
  ctaLink,
}: SplitSectionProps) {
  const content = (
    <motion.div
      initial={{ opacity: 0, x: imageLeft ? 20 : -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex flex-col justify-center space-y-6 px-6 lg:px-12 py-12"
    >
      {subtitle && (
        <div className="flex items-center gap-2">
          <div className="h-px w-8 bg-primary/60" />
          <p className="text-sm font-medium text-primary uppercase tracking-wider">
            {subtitle}
          </p>
        </div>
      )}

      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
        {title}
      </h2>

      <p className="text-gray-600 md:text-lg leading-relaxed">{description}</p>

      {features.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2 text-gray-700">
              <Shield className="w-5 h-5 text-primary/70" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      )}

      <div className="flex flex-col sm:flex-row gap-4 pt-4">
        <Button
          size="lg"
          className="group bg-primary hover:bg-primary/90"
          asChild
        >
          <a href={ctaLink || `tel:${siteConfig.contact.phone.value}`}>
            <PhoneIcon className="w-5 h-5 mr-2" />
            {ctaText}
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </Button>
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Clock className="w-4 h-4" />
          <span>No Hold - Call answered in seconds</span>
        </div>
        <Badge variant="outline" className="bg-primary/5 text-primary">
          24/7 Available
        </Badge>
      </div>
    </motion.div>
  );

  const image = (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative h-80 md:h-full group overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, 50vw"
        priority
      />
    </motion.div>
  );

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 bg-white overflow-hidden rounded-2xl shadow-lg",
        className,
      )}
    >
      {imageLeft ? (
        <>
          {image}
          {content}
        </>
      ) : (
        <>
          {content}
          {image}
        </>
      )}
    </div>
  );
}
