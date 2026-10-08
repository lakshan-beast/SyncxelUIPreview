import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeModal, setActiveModal] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  // Handle scroll detection for glassmorphism navbar intensity
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const portfolios = [
    {
      title: "Ethereal Silhouettes",
      category: "High Fashion",
      image:
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Monochrome Solitude",
      category: "Architectural Noir",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Ephemeral Velvet",
      category: "Portraiture",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Alpine Silence",
      category: "Landscape Noir",
      image:
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <div className="bg-[#080808] text-[#f5f5f5] font-sans antialiased selection:bg-[#d4af37] selection:text-black min-h-screen">
      {}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 md:px-12 py-5 flex items-center justify-between ${
          isScrolled
            ? "bg-black/70 backdrop-blur-xl border-b border-white/10 shadow-2xl py-4"
            : "bg-gradient-to-b from-black/80 via-black/40 to-transparent"
        }`}>
        {/* Left: Brand Name */}
        <a href="#" className="group flex items-center space-x-3">
          <span className="font-serif tracking-[0.3em] text-lg md:text-xl font-medium text-white group-hover:text-[#d4af37] transition-colors duration-300">
            AURA LENS
          </span>
          <span className="hidden sm:inline-block w-8 h-[1px] bg-[#d4af37]/60"></span>
          <span className="hidden sm:inline-block text-[10px] tracking-[0.4em] uppercase text-neutral-400">
            Atelier
          </span>
        </a>

        {/* Center: Desktop Links */}
        <div className="hidden md:flex items-center space-x-10">
          {["Portfolio", "Galleries", "Journal", "Contact"].map((item, idx) => (
            <a
              key={idx}
              href={`#${item.toLowerCase()}`}
              className="text-xs tracking-[0.25em] uppercase text-neutral-300 hover:text-white transition-all duration-300 relative py-1 group">
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#d4af37] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Right: CTA and Mobile Toggle */}
        <div className="flex items-center space-x-6">
          <button
            onClick={() => setActiveModal("book")}
            className="hidden lg:inline-flex items-center px-6 py-2.5 rounded-full border border-white/20 text-xs tracking-[0.2em] uppercase text-white hover:bg-white hover:text-black transition-all duration-500 backdrop-blur-sm">
            Book Session
          </button>

          {/* Custom Camera Lens / X Morphing Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden relative w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white focus:outline-none hover:border-[#d4af37] transition-colors"
            aria-label="Toggle Menu">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              {/* Outer Camera Ring */}
              <motion.circle
                cx="12"
                cy="12"
                r="9"
                stroke="currentColor"
                strokeWidth="1.5"
                animate={{
                  scale: mobileMenuOpen ? 0.9 : 1,
                  opacity: mobileMenuOpen ? 0.4 : 1,
                }}
                transition={{ duration: 0.3 }}
              />
              {/* Lens Aperture Blade 1 -> Becomes X Line 1 */}
              <motion.path
                d="M12 6V18"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                animate={{
                  rotate: mobileMenuOpen ? 45 : 0,
                  pathLength: mobileMenuOpen ? 1 : 0.8,
                }}
                style={{ originX: "12px", originY: "12px" }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              />
              {/* Lens Aperture Blade 2 -> Becomes X Line 2 */}
              <motion.path
                d="M6 12H18"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                animate={{
                  rotate: mobileMenuOpen ? -45 : 0,
                  opacity: mobileMenuOpen ? 1 : 0.7,
                }}
                style={{ originX: "12px", originY: "12px" }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              />
              {/* Center Aperture Iris Dot */}
              <motion.circle
                cx="12"
                cy="12"
                r="2"
                fill="#d4af37"
                animate={{ scale: mobileMenuOpen ? 0 : 1 }}
                transition={{ duration: 0.2 }}
              />
            </svg>
          </button>
        </div>
      </nav>

      {}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl flex flex-col justify-center px-8 md:hidden pt-24 pb-12">
            <div className="flex flex-col space-y-8 items-center text-center">
              <span className="text-[10px] tracking-[0.5em] text-[#d4af37] uppercase">
                Navigation
              </span>
              {["Portfolio", "Galleries", "Journal", "Contact"].map(
                (item, idx) => (
                  <motion.a
                    key={idx}
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setMobileMenuOpen(false)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 + 0.1 }}
                    className="font-serif text-3xl tracking-[0.2em] text-white hover:text-[#d4af37] transition-colors">
                    {item}
                  </motion.a>
                ),
              )}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="pt-6 w-full max-w-xs">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setActiveModal("book");
                  }}
                  className="w-full py-4 rounded-full bg-[#d4af37] text-black font-medium tracking-[0.25em] text-xs uppercase hover:bg-white transition-colors">
                  Book Session
                </button>
              </motion.div>
            </div>
            <div className="mt-auto text-center text-neutral-500 text-[10px] tracking-[0.3em]">
              © 2026 AURA LENS ATELIER. PARIS / TOKYO / NEW YORK
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {}
      <header className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Background Moody Image with Gradient Vignette */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2000&auto=format&fit=crop"
            alt="Cinematic Moody Photography"
            className="w-full h-full object-cover object-center scale-105 animate-pulse duration-[10000ms]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-black/50 to-black/70"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/40 to-[#080808]"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto mt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}>
            <span className="inline-block py-1.5 px-5 rounded-full bg-white/5 border border-white/10 text-[10px] md:text-xs tracking-[0.4em] uppercase text-[#d4af37] mb-6 backdrop-blur-md">
              Exhibition No. 04 / The Silent Realm
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[0.15em] font-normal text-white uppercase leading-[1.1] mb-8">
            Light &amp;{" "}
            <span className="italic font-light text-neutral-400">Shadow</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-neutral-400 text-sm md:text-base tracking-[0.2em] max-w-xl mx-auto font-light mb-12">
            Capturing the unspoken poetry between moments, sculpted by
            uncompromising contrast and cinematic atmosphere.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <a
              href="#portfolio"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-black font-medium text-xs tracking-[0.25em] uppercase hover:bg-[#d4af37] transition-all duration-300 shadow-2xl">
              Explore Galleries
            </a>
            <button
              onClick={() => setActiveModal("book")}
              className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/20 text-white font-medium text-xs tracking-[0.25em] uppercase hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
              Inquire Availability
            </button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 hidden md:flex flex-col items-center space-y-2">
          <span className="text-[9px] tracking-[0.4em] uppercase text-neutral-500">
            Scroll
          </span>
          <div className="w-[1px] h-10 bg-gradient-to-b from-[#d4af37] to-transparent animate-bounce"></div>
        </div>
      </header>

      {}
      <section id="portfolio" className="py-28 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-white/10 pb-8">
          <div>
            <span className="text-[10px] tracking-[0.4em] text-[#d4af37] uppercase block mb-3">
              Selected Works
            </span>
            <h2 className="font-serif text-3xl md:text-5xl tracking-[0.1em] text-white">
              Curated Series
            </h2>
          </div>
          <p className="text-neutral-400 text-xs tracking-[0.15em] max-w-xs mt-4 md:mt-0 font-light">
            Each frame is treated as an archival fine-art piece, printed on
            Japanese handmade cotton rag.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {portfolios.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(item)}
              className="group relative cursor-pointer overflow-hidden rounded-2xl bg-neutral-900 border border-white/5 aspect-[4/5]">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

              <div className="absolute bottom-0 left-0 right-0 p-8 flex justify-between items-end transform translate-y-2 group-hover:translate-y-0 transition-transform">
                <div>
                  <span className="text-[10px] tracking-[0.3em] uppercase text-[#d4af37] block mb-2">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-2xl md:text-3xl tracking-[0.1em] text-white">
                    {item.title}
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M1 13L13 1M13 1H3M13 1V11"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {}
      <section
        id="journal"
        className="py-24 bg-neutral-950 border-t border-white/5 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[10px] tracking-[0.4em] text-[#d4af37] uppercase block mb-3">
              The Journal
            </span>
            <h2 className="font-serif text-3xl md:text-4xl tracking-[0.1em] text-white">
              Behind the Lens
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "The Aesthetics of Shadows in Tokyo",
                date: "October 2026",
                read: "4 min read",
              },
              {
                title: "Analog Grain in the Digital Epoch",
                date: "September 2026",
                read: "6 min read",
              },
              {
                title: "Styling High Fashion for Monochrome",
                date: "August 2026",
                read: "5 min read",
              },
            ].map((art, idx) => (
              <div
                key={idx}
                className="group p-8 rounded-2xl bg-black/40 border border-white/10 hover:border-[#d4af37]/50 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center text-[10px] tracking-[0.2em] text-neutral-400 mb-4">
                    <span>{art.date}</span>
                    <span>{art.read}</span>
                  </div>
                  <h3 className="font-serif text-xl tracking-[0.05em] text-white group-hover:text-[#d4af37] transition-colors mb-4">
                    {art.title}
                  </h3>
                  <p className="text-neutral-400 text-xs tracking-wider font-light leading-relaxed mb-6">
                    Exploring the philosophical intersections of minimalist
                    negative space and dramatic chiaroscuro lighting techniques.
                  </p>
                </div>
                <a
                  href="#read"
                  className="inline-flex items-center text-xs tracking-[0.2em] uppercase text-white group-hover:text-[#d4af37] transition-colors">
                  Read Article <span className="ml-2">→</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {}
      <footer
        id="contact"
        className="py-24 px-6 md:px-12 bg-black border-t border-white/10 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="text-[10px] tracking-[0.4em] text-[#d4af37] uppercase block mb-4">
            Inquiries &amp; Commissions
          </span>
          <h2 className="font-serif text-4xl md:text-6xl tracking-[0.1em] text-white mb-6">
            Let's Create Together
          </h2>
          <p className="text-neutral-400 text-sm tracking-[0.2em] font-light mb-10 max-w-lg mx-auto">
            Available worldwide for editorial commissions, private portraiture,
            and gallery exhibitions.
          </p>
          <button
            onClick={() => setActiveModal("book")}
            className="px-10 py-4 rounded-full bg-[#d4af37] text-black font-medium text-xs tracking-[0.3em] uppercase hover:bg-white transition-colors shadow-2xl">
            Initiate Consultation
          </button>

          <div className="mt-20 pt-10 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs tracking-[0.2em] text-neutral-500">
            <span>© 2026 AURA LENS ATELIER</span>
            <div className="flex space-x-6 mt-4 sm:mt-0">
              <a href="#" className="hover:text-white transition-colors">
                Instagram
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Behance
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Vogue Portfolio
              </a>
            </div>
          </div>
        </div>
      </footer>

      {}
      <AnimatePresence>
        {activeModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="bg-neutral-950 border border-white/10 rounded-2xl p-8 max-w-lg w-full relative shadow-2xl">
              <button
                onClick={() => setActiveModal(null)}
                className="absolute top-6 right-6 text-neutral-400 hover:text-white text-lg">
                ✕
              </button>

              <span className="text-[10px] tracking-[0.4em] text-[#d4af37] uppercase block mb-2">
                Private Atelier
              </span>
              <h3 className="font-serif text-2xl tracking-[0.1em] text-white mb-6">
                Book Session / Inquire
              </h3>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setActiveModal(null);
                  alert(
                    "Inquiry sent successfully. Our studio manager will contact you within 24 hours.",
                  );
                }}
                className="space-y-4">
                <div>
                  <label className="block text-[10px] tracking-[0.2em] uppercase text-neutral-400 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#d4af37]"
                    placeholder="e.g., Alistair Vance"
                  />
                </div>
                <div>
                  <label className="block text-[10px] tracking-[0.2em] uppercase text-neutral-400 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#d4af37]"
                    placeholder="alistair@example.com"
                  />
                </div>
                <div>
                  <label className="block text-[10px] tracking-[0.2em] uppercase text-neutral-400 mb-2">
                    Project Scope / Session Type
                  </label>
                  <select className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#d4af37]">
                    <option>High Fashion Editorial</option>
                    <option>Architectural Noir</option>
                    <option>Private Portraiture</option>
                    <option>Exhibition Commission</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full mt-4 py-4 rounded-xl bg-white text-black font-medium text-xs tracking-[0.25em] uppercase hover:bg-[#d4af37] transition-colors">
                  Submit Inquiry
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-lg flex items-center justify-center p-6 cursor-zoom-out">
            <div className="relative max-w-4xl max-h-[90vh]">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="rounded-xl max-h-[80vh] object-contain mx-auto shadow-2xl"
              />
              <div className="text-center mt-4">
                <span className="text-[10px] tracking-[0.3em] uppercase text-[#d4af37] block mb-1">
                  {selectedImage.category}
                </span>
                <h4 className="font-serif text-xl text-white tracking-[0.1em]">
                  {selectedImage.title}
                </h4>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
