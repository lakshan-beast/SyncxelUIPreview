import React from "react";
import {
  FiCheck,
  FiHeart,
  FiGift,
  FiArrowRight,
  FiClock,
  FiImage,
} from "react-icons/fi";
import { HiSparkles } from "react-icons/hi2";
import { motion } from "framer-motion";

export default function ServicesPackages() {
  const packages = [
    {
      id: "birthday",
      title: "Birthday Celebrations",
      tagline: "Freezing joy, laughter & milestone moments.",
      price: "Starting from LKR 25,000",
      icon: <FiGift className="w-5 h-5 text-amber-400" />,
      popular: false,
      features: [
        "Up to 3 Hours Event Coverage",
        "40+ High-Resolution Retouched Photos",
        "Color-Graded Digital Gallery Access",
        "Cake Smash & Party Setup Coverage",
        "All Original Files Provided",
      ],
      ctaText: "Book Birthday Shoot",
    },
    {
      id: "couple",
      title: "Intimate Couple Session",
      tagline: "Romantic, candid, and cinematic storytelling for two.",
      price: "Starting from LKR 35,000",
      icon: <FiHeart className="w-5 h-5 text-rose-400" />,
      popular: true, // Highlights this card
      features: [
        "3 - 4 Hours Location Shooting",
        "60+ High-Resolution Retouched Photos",
        "Private Luxury Online Gallery",
        "2 Outfit Changes Included",
        "Cinematic Editorial Color Grading",
        "Complimentary Desk Photo Frame",
      ],
      ctaText: "Book Couple Session",
    },
    {
      id: "baby",
      title: "Baby & Family Milestones",
      tagline: "Gentle & patient sessions for your precious little ones.",
      price: "Starting from LKR 30,000",
      icon: <HiSparkles className="w-5 h-5 text-emerald-400" />,
      popular: false,
      features: [
        "Flexible Timeline (No Rush for Babies)",
        "40+ High-Resolution Retouched Photos",
        "Infant-Safe Soft Lighting Environment",
        "Parents & Sibling Portraits Included",
        "Private Gallery with Download Access",
      ],
      ctaText: "Book Baby Shoot",
    },
  ];

  return (
    <section
      id="services"
      className="bg-neutral-950 text-white py-24 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* section header with framer motion */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs text-neutral-400 font-body tracking-wider uppercase">
            <FiClock className="w-3.5 h-3.5 text-neutral-300" />
            <span>Investment & Packages</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Tailored Experiences For Every Chapter.
          </h2>

          <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
            Transparent collections designed to preserve your memories with
            uncompromised artistic quality. Choose a package or request a custom
            quote.
          </p>
        </motion.div>

        {/* pricing cards grid */}
        <div className="flex flex-col lg:flex-row items-center justify-center mt-2 pt-7 pb-10 gap-8 lg:gap-0">
          {packages.map((pckg, index) => {
            let positionStyles = "";
            if (index === 0) {
              positionStyles =
                "z-10 lg:-rotate-2 lg:translate-x-3 origin-bottom-right lg:hover:rotate-0 lg:hover:z-30 lg:hover:scale-105";
            } else if (index === 1) {
              positionStyles =
                "z-20 lg:rotate-0 lg:scale-105 lg:hover:z-30 lg:hover:scale-110";
            } else if (index === 2) {
              positionStyles =
                "z-10 lg:rotate-2 lg:-translate-x-3 origin-bottom-left lg:hover:rotate-0 lg:hover:z-30 lg:hover:scale-105";
            }

            return (
              <motion.div
                key={pckg.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2,
                  ease: "easeOut",
                }}
                className={`relative rounded-3xl p-8 transition-all duration-300 flex flex-col justify-between w-full lg:w-[400px] min-h-[580px] ${positionStyles} ${
                  pckg.popular
                    ? "bg-neutral-900 border-2 border-rose-400 shadow-2xl shadow-rose-950/30"
                    : "bg-neutral-900/40 border border-neutral-800 hover:border-neutral-600"
                }`}>
                {/* most popular badge */}
                {pckg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-1 rounded-full bg-rose-500 text-white text-[10px] font-bold tracking-widest uppercase shadow-md">
                    Most Requested
                  </div>
                )}

                <div className="space-y-6 flex-1 flex flex-col justify-between">
                  {/* header info */}
                  <div className="space-y-4">
                    <div className="w-10 h-10 rounded-2xl bg-neutral-950 border border-neutral-800 flex items-center justify-center">
                      {pckg.icon}
                    </div>
                    <h3 className="text-2xl font-bold">{pckg.title}</h3>
                    <p className="text-xs text-neutral-400 leading-relaxed font-body">
                      {pckg.tagline}
                    </p>

                    {/* price display */}
                    <div className="pt-2 border-t border-neutral-800/60">
                      <span className="text-2xl md:text-3xl font-extrabold tracking-tight text-white">
                        {pckg.price}
                      </span>
                    </div>

                    {/* features deliverable list  */}
                    <ul className="space-y-3.5 pt-2">
                      {pckg.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-xs text-neutral-300">
                          <FiCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* action button */}
                  <div className="pt-6 border-t border-neutral-800/40">
                    <a
                      href="#contact"
                      className={`w-full py-3.5 px-6 rounded-full font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-all cursor-pointer ${
                        pckg.popular
                          ? "bg-rose-500 text-white hover:bg-rose-600"
                          : "bg-neutral-950 text-white border border-neutral-800 hover:bg-neutral-900 hover:border-neutral-700"
                      }`}>
                      <span>{pckg.ctaText}</span>
                      <FiArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* custom package banner */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="rounded-3xl bg-neutral-900/80 border border-neutral-800 p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h4 className="text-xl font-bold flex items-center justify-center md:justify-start gap-2">
              <FiImage className="text-amber-400" />
              <span>Need Something Fully Customized?</span>
            </h4>
            <p className="text-neutral-400 text-xs md:text-sm max-w-xl">
              Planning a multi-day event, travel shoot, or need custom album
              prints? Let's design a bespoke collection tailored to your exact
              vision.
            </p>
          </div>

          <a
            href="https://wa.me/9**********?text=Hi%20Lakshan%2C%20I%27d%20like%20to%20discuss%20a%20custom%20photography%20package."
            target="_blank"
            rel="noreferrer"
            className="whitespace-nowrap bg-neutral-950 border border-neutral-700 hover:border-white text-white font-medium px-6 py-3.5 rounded-full text-xs tracking-wider uppercase transition-all flex items-center gap-2 cursor-pointer">
            <span>Request Custom Quote</span>
            <FiArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
