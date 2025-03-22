import Link from "next/link";
import { Facebook, Twitter, Instagram, Youtube, Linkedin } from "lucide-react";
import { siteConfig } from "@/config/data";
import { footerLinks } from "@/config/footer";
import { TransitionLink } from "./page-transition";

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-primary text-lg font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.href}>
                  <TransitionLink
                    href={link.href}
                    className="hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </TransitionLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Destinations */}
          <div>
            <h3 className="text-primary text-lg font-semibold mb-4">
              Popular Destinations
            </h3>
            <ul className="space-y-2">
              {footerLinks.popularDestinations.map((link) => (
                <li key={link.href}>
                  <TransitionLink
                    href={link.href}
                    className="hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </TransitionLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Cruise Lines */}
          <div>
            <h3 className="text-primary text-lg font-semibold mb-4">
              Popular Cruise Lines
            </h3>
            <ul className="space-y-2">
              {footerLinks.cruiseLines.map((link) => (
                <li key={link.href}>
                  <TransitionLink
                    href={link.href}
                    className="hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </TransitionLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-primary text-lg font-semibold mb-4">
              Contact Us
            </h3>
            <ul className="space-y-2">
              <li>
                <strong>24/7 Support:</strong>{" "}
                <a
                  href={`tel:${siteConfig.contact.phone.value}`}
                  className="hover:text-primary transition-colors duration-200"
                >
                  {siteConfig.contact.phone.display}
                </a>
              </li>
              <li>
                <strong>Email:</strong>{" "}
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-primary transition-colors duration-200"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-sm text-gray-400">
            Disclaimer: {siteConfig.name} is an independent cruise booking
            agency. We work with multiple cruise lines to offer you the best
            deals and experiences. While we strive to provide accurate
            information, all cruise details, prices, and availability are
            subject to change. We recommend confirming all details with our
            cruise specialists before booking. Your cruise vacation is protected
            by our best price guarantee and comprehensive travel protection
            options.
          </p>
        </div>

        {/* Payment Methods */}
        <div className="mt-8">
          <div className="flex flex-wrap gap-4 items-center justify-center">
            {footerLinks.paymentMethods.map((method) => (
              <div key={method.name}>{method.logo}</div>
            ))}
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-8 flex justify-center space-x-6">
          {Object.entries(siteConfig.contact.social).map(([platform, url]) => (
            <Link
              key={platform}
              href={url}
              className="hover:text-primary"
              aria-label={platform}
            >
              {platform === "facebook" && <Facebook className="h-6 w-6" />}
              {platform === "twitter" && <Twitter className="h-6 w-6" />}
              {platform === "instagram" && <Instagram className="h-6 w-6" />}
              {platform === "youtube" && <Youtube className="h-6 w-6" />}
              {platform === "linkedin" && <Linkedin className="h-6 w-6" />}
            </Link>
          ))}
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="text-center text-sm">
            <p>
              © {new Date().getFullYear()} {siteConfig.company.name}. All
              rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
