"use client";
import { useEffect, useState } from "react";
import { useMediaQuery } from "@/hooks/use-media-query";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/data";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Drawer, DrawerContent, DrawerTitle } from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Phone, Clock, Star, Sparkles, X, Anchor } from "lucide-react";
import { DialogTitle } from "@radix-ui/react-dialog";
import { usePathname } from "next/navigation";

export function StartPopup() {
  const [open, setOpen] = useState(false);
  const [showCloseButton, setShowCloseButton] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const pathname = usePathname();
  const cruiseLine = pathname?.includes("carnival")
    ? "Carnival"
    : pathname?.includes("royal-caribbean")
      ? "Royal Caribbean"
      : pathname?.includes("norwegian")
        ? "Norwegian"
        : pathname?.includes("princess")
          ? "Princess"
          : pathname?.includes("celebrity")
            ? "Celebrity"
            : pathname?.includes("virgin")
              ? "Virgin Voyages"
              : pathname?.includes("msc")
                ? "MSC"
                : "Cruise";

  useEffect(() => {
    const popupTimer = setTimeout(() => setOpen(true), 1500);
    const popupCloseTimer = setTimeout(() => setShowCloseButton(true), 11500);
    return () => {
      clearTimeout(popupTimer);
      clearTimeout(popupCloseTimer);
    };
  }, []);

  const Content = (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-lightest to-primary-light opacity-50" />

      <div className="relative space-y-6 p-6">
        {showCloseButton && (
          <>
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              onClick={() => setOpen(false)}
              className="absolute top-2 right-2 p-1.5 rounded-full hover:bg-primary-light text-primary hover:text-primary-dark transition-colors"
            >
              <X className="w-4 h-4" />
            </motion.button>
          </>
        )}

        <div className="text-center space-y-3">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="inline-flex items-center gap-2 bg-primary-light text-primary-dark px-4 py-1 rounded-full text-sm font-medium"
          >
            <Anchor className="w-4 h-4" />
            Exclusive Cruise Deals
          </motion.div>

          <h2 className="text-2xl font-bold bg-gradient-to-r from-primary-dark to-primary-darkest text-transparent bg-clip-text">
            Save Up To 65% On {cruiseLine} Cruises
          </h2>
        </div>

        <div className="flex justify-center gap-1">
          {[1, 2, 3, 4, 5].map((_, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            </motion.div>
          ))}
        </div>

        <div className="bg-white p-4 rounded-xl shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-gray-100 pb-3">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary-dark" />
              <span className="text-sm font-medium text-gray-600">
                24/7 Cruise Experts
              </span>
            </div>
            <div className="text-sm font-medium text-primary-dark">
              Book Now
            </div>
          </div>

          <div className="space-y-2">
            <div className="text-center">
              <div className="text-sm text-gray-500">
                Get Exclusive Rates & Onboard Credit
              </div>
              <div className="text-lg font-bold text-gray-900">
                {siteConfig.contact.phone.display}
              </div>
            </div>

            <a href={`tel:${siteConfig.contact.phone.value}`}>
              <Button
                className="w-full bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary-dark text-white shadow-lg shadow-primary-light"
                size="lg"
              >
                <Phone className="w-5 h-5 mr-2 animate-pulse" />
                <span className="font-medium">Call For Best Rates</span>
              </Button>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 text-sm">
          {[
            "Price Match Guarantee",
            "24/7 Support",
            "Onboard Credits",
            "Flexible Payments",
          ].map((text, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-2"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-primary-dark" />
              <span className="text-gray-600">{text}</span>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-xs text-gray-400">
            Best Price Guarantee • Expert Advice • Free Perks
          </p>
        </div>

        <div className="pb-14" />
      </div>
    </div>
  );

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={showCloseButton ? setOpen : undefined}>
        <DialogTitle className="sr-only">Cruise Booking</DialogTitle>
        <DialogContent className="sm:max-w-[400px] p-0" closeButton={false}>
          {Content}
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={showCloseButton ? setOpen : undefined}>
      <DrawerTitle className="sr-only">Cruise Booking</DrawerTitle>
      <DrawerContent className="p-0">{Content}</DrawerContent>
    </Drawer>
  );
}
