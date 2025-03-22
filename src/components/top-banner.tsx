"use client";

import { useState } from "react";
import { X, Phone, Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/config/data";

export function TopBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-primary text-white text-sm py-2 top-0 left-0 w-full h-[60px] md:h-[40px] z-[11]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center space-x-6 md:space-x-8">
          {/* Phone */}
          <div className="flex flex-col items-center">
            <a
              href={`tel:${siteConfig.contact.phone.value}`}
              className="flex items-center gap-1 hover:text-primary-lighter transition-colors leading-3"
            >
              <Phone className="h-6 w-6 md:h-3 md:w-3 mr-3 md:mr-0" />
              <span className="text-xl font-extrabold md:text-sm md:font-bold md:py-0">
                {siteConfig.contact.phone.display}
              </span>
            </a>
            <div className="block md:hidden text-xs text-white/80">
              Available {siteConfig.contact.hours}
            </div>
          </div>
          {/* Divider */}
          <span className="hidden sm:block h-4 w-px bg-primary-light" />
          {/* Email */}
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="hidden sm:flex items-center gap-1 hover:text-primary-lighter transition-colors"
          >
            <Mail className="h-3 w-3" />
            <span>{siteConfig.contact.email}</span>
          </a>
          {/* Divider */}
          {/* <span className="hidden sm:block h-4 w-px bg-primary-light" /> */}
          {/* Address */}
          {/* <div className="hidden md:flex items-center gap-1"> */}
          {/*   <MapPin className="h-3 w-3" /> */}
          {/*   <span>{siteConfig.contact.address}</span> */}
          {/* </div> */}
        </div>

        {/* Close Button */}
        {/* <button */}
        {/*   onClick={() => setIsVisible(false)} */}
        {/*   className="absolute right-2 top-1/2 -translate-y-1/2 p-1 hover:bg-primary-light rounded-full transition-colors" */}
        {/*   aria-label="Close banner" */}
        {/* > */}
        {/*   <X className="h-4 w-4" /> */}
        {/* </button> */}
      </div>
    </div>
  );
}
