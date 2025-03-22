"use client";
import { siteConfig } from "@/config/data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Ship, Anchor, Clock, MapPin, Calendar, Shield, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import NumberTicker from "@/components/animations/number-ticker";

const ClientContactPage = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(
      "Thank you! Our luxury cruise specialists will be in touch shortly.",
      { description: "We typically respond within 2 hours during business hours." }
    );
  };

  const stats = [
    {
      label: "Luxury Voyages",
      value: "75",
      pre: "",
      post: "K+",
      icon: Ship,
      description: "Successfully Planned"
    },
    {
      label: "Expert Response",
      value: "2",
      pre: "<",
      post: "hrs",
      icon: Clock,
      description: "Average Response Time"
    },
    {
      label: "Destinations",
      value: "150",
      pre: "",
      post: "+",
      icon: MapPin,
      description: "Worldwide Ports"
    },
  ];

  const benefits = [
    "Personalized luxury cruise planning",
    "Exclusive VIP amenities and upgrades",
    "24/7 concierge support service",
    "Best price guarantee on all bookings",
    "Complimentary travel insurance consultation",
    "Priority boarding arrangements"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 via-white to-white">
      {/* Hero Section */}
      <div className="relative py-20">
        <div className="absolute inset-0 bg-[url('/images/pattern-bg.png')] opacity-5" />
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
              Let's Plan Your Perfect Voyage
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Connect with our luxury cruise specialists for personalized assistance 
              and exclusive perks.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Stats Section with Floating Cards */}
      <div className="container mx-auto px-4 -mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl transform rotate-2 group-hover:rotate-0 transition-all" />
              <Card className="relative p-6 backdrop-blur-sm border-primary/20 hover:shadow-lg transition-all">
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary">
                    {stat.pre}<NumberTicker value={parseInt(stat.value)} className="inline" />{stat.post}
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900">{stat.label}</h3>
                <p className="text-sm text-gray-600">{stat.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 pb-20">
          {/* Contact Form Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-3xl transform -rotate-1" />
            <Card className="relative p-8 backdrop-blur-sm border-primary/20">
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-3">Start Your Journey</h2>
                <p className="text-gray-600">Tell us about your dream cruise experience</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Full Name</label>
                    <Input 
                      placeholder="Enter your name"
                      className="border-primary/20 focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Phone Number</label>
                    <Input 
                      type="tel"
                      placeholder="Your contact number"
                      className="border-primary/20 focus:border-primary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Email Address</label>
                  <Input 
                    type="email"
                    placeholder="your@email.com"
                    className="border-primary/20 focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Your Dream Cruise</label>
                  <Textarea 
                    placeholder="Tell us about your preferred destinations, dates, and any special requirements..."
                    className="h-32 border-primary/20 focus:border-primary"
                  />
                </div>

                <Button size="lg" className="w-full group">
                  Schedule Consultation
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </Card>
          </motion.div>

          {/* Contact Info & Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            {/* Quick Contact Cards */}
            <Card className="p-8 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
              <h3 className="text-2xl font-bold mb-6">Connect Instantly</h3>
              <div className="grid gap-4">
                {[
                  {
                    icon: Phone,
                    title: "Call Our Cruise Experts",
                    content: siteConfig.contact.phone.display,
                    subtext: `Available ${siteConfig.contact.hours}`,
                  },
                  {
                    icon: Mail,
                    title: "Email Enquiries",
                    content: siteConfig.contact.email,
                    subtext: "We aim to respond within 2 hours",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="group p-4 rounded-xl hover:bg-white/50 transition-colors border border-primary/10"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{item.title}</h4>
                        <p className="text-primary font-medium">{item.content}</p>
                        <p className="text-sm text-gray-600">{item.subtext}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>

            {/* Benefits List */}
            <Card className="p-8 border-primary/20">
              <h3 className="text-2xl font-bold mb-6">
                The {siteConfig.name} Advantage
              </h3>
              <div className="grid gap-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary/5 transition-colors"
                  >
                    <Shield className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ClientContactPage;
