"use client";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/data";
import { Menu, Phone, Ship } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { motion } from "framer-motion";
import { Home, Info, Shield, Mail } from "lucide-react";
import { useState } from "react";
import { TransitionLink } from "./page-transition";
import { BrandLogoWithText } from "@/assets/logo";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { cruisers } from "@/config/cruisers";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const MENU_LINKS = [
  { href: "/", label: "Home", icon: Home },
  {
    label: "Cruisers",
    icon: Ship,
    subItems: Object.entries(cruisers).map(([name, info]) => ({
      href: `/cruisers/${name}`,
      label: info.name,
      image: info.logo,
    })),
  },
  { href: "/destinations", label: "Destinations", icon: Ship },
  { href: "/about", label: "About", icon: Info },
  { href: "/contact", label: "Contact Us", icon: Mail },
];
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close sheet when pathname changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { x: 20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
      },
    },
  };

  const bottomSectionVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 300,
        damping: 24,
      },
    },
  };

  // Function to handle link clicks
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <BrandLogoWithText className="w-44" />
              <span className="ml-2 text-xl font-bold text-gray-800">
                <span className="hidden">{siteConfig.name}</span>
              </span>
            </Link>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {MENU_LINKS.map((link, idx) =>
                link.subItems ? (
                  <HoverCard openDelay={0} closeDelay={0} key={idx}>
                    <HoverCardTrigger className="flex items-center" asChild>
                      <span className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                        Cruisers
                      </span>
                    </HoverCardTrigger>
                    <HoverCardContent className="grid grid-cols-3 gap-5 w-[500px]">
                      {link.subItems.map((subItem, idx) => (
                        <TransitionLink
                          key={idx}
                          href={subItem.href}
                          className="group relative p-2 rounded-lg hover:bg-primary/5 transition-all duration-200"
                          onClick={handleLinkClick}
                        >
                          <motion.div
                            className="flex flex-col items-center"
                            variants={{
                              hidden: { opacity: 0, y: 20 },
                              visible: { opacity: 1, y: 0 },
                            }}
                            animate="visible"
                            initial="hidden"
                            transition={{
                              type: "spring",
                              stiffness: 100,
                              damping: 15,
                              delay: 0.05 * idx,
                            }}
                            whileHover={{
                              scale: 1.02,
                              transition: { delay: 0 },
                            }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <div className="relative w-32 h-20 rounded-lg overflow-hidden mb-2">
                              <Image
                                src={subItem.image}
                                alt={subItem.label}
                                width={128}
                                height={128}
                                className="object-cover transition-transform duration-300 group-hover:scale-110"
                                sizes="128px"
                              />
                              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                            </div>

                            <div className="flex flex-col items-center space-y-0.5">
                              <span className="text-sm font-medium text-gray-900 group-hover:text-primary transition-colors line-clamp-1">
                                {subItem.label}
                              </span>
                            </div>
                          </motion.div>
                        </TransitionLink>
                      ))}
                    </HoverCardContent>
                  </HoverCard>
                ) : (
                  <Link
                    href={link.href}
                    key={idx}
                    className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                  >
                    {link.label}
                  </Link>
                ),
              )}
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <Link href={`tel:${siteConfig.contact.phone.value}`}>
              <Button className="flex items-center space-x-2 bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-full shadow-lg transition-all duration-300 ease-in-out">
                <Phone className="w-5 h-5" />
                <span>Call Us: {siteConfig.contact.phone.display}</span>
              </Button>
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <Sheet open={isOpen} onOpenChange={setIsOpen} modal>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="relative group"
                  aria-label="Open main menu"
                >
                  <Menu className="h-10 w-10 text-primary" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-full sm:w-[400px] bg-white"
                onCloseAutoFocus={(e) => e.preventDefault()}
              >
                <SheetHeader className="border-b pb-6">
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <SheetTitle className="text-2xl font-bold text-primary">
                      Menu
                    </SheetTitle>
                  </motion.div>
                </SheetHeader>

                <motion.div
                  className="mt-8 flex flex-col gap-6"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {MENU_LINKS.filter((item) => item.href).map((item, index) => (
                    <motion.div
                      key={item.href}
                      variants={itemVariants}
                      whileHover={{ x: 10 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <TransitionLink
                        href={item.href || "#"}
                        onClick={handleLinkClick}
                        className="group flex items-center py-2 text-lg font-medium text-gray-600 hover:text-primary transition-colors"
                      >
                        <motion.div
                          className="mr-3"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.7 + index * 0.1 }}
                        >
                          <item.icon className="h-5 w-5" />
                        </motion.div>
                        <span className="relative">
                          {item.label}
                          <motion.span
                            className="absolute -bottom-1 left-0 h-0.5 bg-primary"
                            initial={{ width: 0 }}
                            whileHover={{ width: "100%" }}
                            transition={{ duration: 0.3 }}
                          />
                        </span>
                      </TransitionLink>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Contact Info Section */}
                <motion.div
                  variants={bottomSectionVariants}
                  initial="hidden"
                  animate="visible"
                  className="absolute bottom-0 left-0 right-0 border-t"
                >
                  <motion.div
                    className="p-6 bg-gray-50"
                    whileHover={{ backgroundColor: "#f8fafc" }}
                  >
                    <motion.h3
                      className="font-semibold text-gray-900 mb-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6 }}
                    >
                      Get in Touch
                    </motion.h3>
                    <div className="space-y-4">
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <TransitionLink
                          href={`tel:${siteConfig.contact.phone.value}`}
                          onClick={handleLinkClick}
                          className="flex items-center gap-2 text-primary hover:text-primary-dark"
                        >
                          <motion.div
                            animate={{ rotate: [0, -10, 10, -10, 10, 0] }}
                            transition={{ duration: 0.5, delay: 1 }}
                          >
                            <Phone className="h-4 w-4" />
                          </motion.div>
                          <span>{siteConfig.contact.phone.display}</span>
                        </TransitionLink>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                        className="text-sm text-gray-500"
                      >
                        Available {siteConfig.contact.hours}
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
