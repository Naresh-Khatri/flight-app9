import { Button } from "@/components/ui/button";
import FadeIn from "../animations/fade-in";
import { Phone, Calendar, ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/data";

export function CTASection() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background with pattern and gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-darker">
        <div className="absolute inset-0 bg-[linear-gradient(30deg,#ffffff12_1px,transparent_1px)] bg-[length:20px_20px]" />
      </div>

      <div className="md:container relative">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div className="px-8 text-white space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                  Begin Your Journey to
                  <span className="block mt-2">Extraordinary Adventures</span>
                </h2>
                <p className="text-white/80 text-lg">
                  Book now and receive exclusive perks:
                </p>
                <ul className="space-y-4">
                  {[
                    "Premium cabin upgrades",
                    "Complimentary beverage package",
                    "Flexible booking options",
                    "24/7 concierge service",
                  ].map((perk, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <span className="h-2 w-2 rounded-full bg-white/80" />
                      <span className="text-white/90">{perk}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            {/* Right content - CTA Card */}
            <FadeIn delay={0.2}>
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold mb-6">
                  Start Planning Your Cruise
                </h3>

                <div className="space-y-4">
                  <Button
                    size="lg"
                    className="w-full bg-gradient-to-r from-primary to-primary-darker hover:from-primary-darker hover:to-primary-darkest text-base"
                    asChild
                  >
                    <a
                      href="/contact"
                      className="flex items-center justify-center gap-2"
                    >
                      <Calendar className="w-5 h-5" />
                      Book Your Consultation
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                  </Button>

                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-200" />
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-white text-gray-500">
                        or call us directly
                      </span>
                    </div>
                  </div>

                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full text-base border-2"
                    asChild
                  >
                    <a
                      href={`tel:${siteConfig.contact.phone.value}`}
                      className="flex items-center justify-center gap-2"
                    >
                      <Phone className="w-5 h-5" />
                      {siteConfig.contact.phone.display}
                    </a>
                  </Button>
                </div>

                <p className="text-sm text-gray-500 text-center mt-6">
                  Our cruise experts are available 24/7 to assist you
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
