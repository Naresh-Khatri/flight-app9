"use client";

import { Phone } from "lucide-react";
import { siteConfig } from "@/config/data";
import { motion } from "framer-motion";
import { useMediaQuery } from "@/hooks/use-media-query";

export function BottomBanner() {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) return null;

  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="fixed bottom-0 left-0 right-0 z-50 bg-primary text-primary-foreground shadow-lg"
    >
      <a
        href={`tel:${siteConfig.contact.phone.value}`}
        className="flex items-center justify-between px-4 py-3"
      >
        <div className="flex items-center gap-3">
          <div className="bg-primary-foreground/10 p-2 rounded-full">
            <Phone className="w-4 h-4" />
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-medium opacity-80">
              Need Help? Call Now
            </span>
            <span className="text-sm font-bold">
              {siteConfig.contact.phone.display}
            </span>
          </div>
        </div>
        <div className="bg-primary-foreground/10 px-3 py-1.5 rounded-full text-xs font-medium">
          24/7 Available
        </div>
      </a>
    </motion.div>
  );
}
