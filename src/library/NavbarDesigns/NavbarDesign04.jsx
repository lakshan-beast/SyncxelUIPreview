import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const menuLinks = [
  { name: 'The Menu', href: '#menu', sub: '01' },
  { name: 'Atelier', href: '#atelier', sub: '02' },
  { name: 'Reservations', href: '#reservations', sub: '03' },
  { name: 'Private Dining', href: '#private', sub: '04' },
  { name: 'Journal', href: '#journal', sub: '05' },
];

export default function RestaurantNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Handle glass blur on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when immersive menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
  }, [isOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
          scrolled
            ? 'bg-[#121110]/80 backdrop-blur-2xl border-b border-amber-900/20 py-4 shadow-[0_10px_30px_rgba(0,0,0,0.6)]'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Left: Brand / Logo with Botanical Accent */}
          <a 
            href="#" 
            className="group flex items-center gap-3 text-white focus:outline-none"
          >
            <div className="w-8 h-8 rounded-full border border-amber-500/40 flex items-center justify-center bg-amber-950/30 group-hover:border-amber-400 transition-colors duration-500">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-base md:text-lg tracking-[0.3em] font-light uppercase text-neutral-100 group-hover:text-amber-200 transition-colors">
                Verdant & Vine
              </span>
              <span className="text-[9px] tracking-[0.4em] text-amber-500/80 uppercase font-sans">
                Culinary Atelier
              </span>
            </div>
          </a>

          {/* Center: Navigation Links with Magnetic Pill */}
          <nav 
            className="hidden md:flex items-center p-1.5 rounded-full bg-neutral-900/50 backdrop-blur-xl border border-white/[0.06] relative"
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {menuLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onMouseEnter={() => setHoveredIndex(index)}
                className="relative px-5 py-2 text-[11px] uppercase tracking-[0.25em] text-neutral-300 hover:text-white transition-colors duration-300 z-10 focus:outline-none"
              >
                {hoveredIndex === index && (
                  <motion.div
                    layoutId="restaurant-pill"
                    className="absolute inset-0 bg-amber-500/15 rounded-full backdrop-blur-md border border-amber-500/30 shadow-inner"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </a>
            ))}
          </nav>

          {/* Right: Reserve CTA & Custom Cloche Menu Button */}
          <div className="flex items-center gap-4">
            <a
              href="#reserve"
              className="hidden sm:inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-amber-500 text-neutral-950 font-sans text-[11px] uppercase tracking-[0.2em] font-medium hover:bg-amber-400 transition-all duration-300 shadow-[0_0_20px_rgba(245,158,11,0.2)]"
            >
              <span>Book Table</span>
              <svg className="w-3 h-3 -rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>

            {/* Custom Animated Gourmet Cloche (Serving Dome) to 'X' Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
              className="relative w-12 h-12 flex items-center justify-center rounded-full border border-amber-500/30 bg-neutral-900/80 text-white focus:outline-none backdrop-blur-md group hover:border-amber-400 transition-all duration-500 shadow-xl"
            >
              <svg
                className="w-5 h-5 text-amber-200 group-hover:text-amber-400 transition-colors"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {/* Cloche Dome Arc */}
                <motion.path
                  d="M4 17C4 12.5817 7.58172 9 12 9C16.4183 9 20 12.5817 20 17H4Z"
                  animate={isOpen ? { scale: 0.8, opacity: 0, y: -4 } : { scale: 1, opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Cloche Handle / Knob */}
                <motion.path
                  d="M12 5V9"
                  animate={isOpen ? { scale: 0, opacity: 0 } : { scale: 1, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />

                {/* Base Plate Line */}
                <motion.path
                  d="M2 20H22"
                  animate={isOpen ? { scaleX: 0.7, opacity: 0, y: 4 } : { scaleX: 1, opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Left X Stroke */}
                <motion.path
                  d="M7 7L17 17"
                  initial={false}
                  animate={
                    isOpen
                      ? { pathLength: 1, opacity: 1, rotate: 0 }
                      : { pathLength: 0, opacity: 0 }
                  }
                  transition={{ duration: 0.3, delay: 0.1 }}
                />

                {/* Right X Stroke */}
                <motion.path
                  d="M17 7L7 17"
                  initial={false}
                  animate={
                    isOpen
                      ? { pathLength: 1, opacity: 1, rotate: 0 }
                      : { pathLength: 0, opacity: 0 }
                  }
                  transition={{ duration: 0.3, delay: 0.15 }}
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Immersive Fullscreen Culinary Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: 'circle(0% at 90% 8%)' }}
            animate={{ opacity: 1, clipPath: 'circle(150% at 90% 8%)' }}
            exit={{ opacity: 0, clipPath: 'circle(0% at 90% 8%)' }}
            transition={{ duration: 0.7, ease: [0.77, 0, 0.175, 1] }}
            className="fixed inset-0 z-40 bg-[#0d0c0b] flex flex-col justify-between px-8 md:px-20 py-24 md:py-28 overflow-y-auto"
          >
            {/* Ambient Warm Glow */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-amber-600/10 rounded-full blur-[150px] pointer-events-none" />

            {/* Header in Drawer */}
            <div className="flex items-center justify-between border-b border-amber-900/30 pb-6 max-w-7xl mx-auto w-full">
              <span className="text-[10px] tracking-[0.4em] text-amber-500 uppercase font-sans">
                Gastronomy Index
              </span>
              <span className="text-[10px] tracking-[0.4em] text-neutral-400 uppercase font-sans">
                [ Tasting Room & Cellar ]
              </span>
            </div>

            {/* Menu Links */}
            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8 my-auto py-12">
              <div className="flex flex-col space-y-6 md:space-y-8">
                {menuLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.08 + 0.2, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="group flex items-baseline gap-6 focus:outline-none"
                  >
                    <span className="text-xs font-mono text-amber-500/70 tracking-widest">
                      {link.sub}
                    </span>
                    <span className="font-serif text-4xl md:text-6xl lg:text-7xl font-light text-neutral-200 group-hover:text-amber-300 group-hover:translate-x-4 transition-all duration-500 tracking-wider">
                      {link.name}
                    </span>
                  </motion.a>
                ))}
              </div>

              {/* Right Side Info */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="flex flex-col justify-between border-t md:border-t-0 md:border-l border-amber-900/30 pt-8 md:pt-0 md:pl-16 space-y-8"
              >
                <div>
                  <h4 className="text-[11px] uppercase tracking-[0.3em] text-amber-400 mb-4 font-sans">
                    Hours & Location
                  </h4>
                  <p className="text-neutral-400 font-serif text-lg md:text-xl leading-relaxed mb-4">
                    Tuesdays through Sundays<br />
                    Dinner seating from 6:00 PM onwards.<br />
                    Colombo 07, Sri Lanka.
                  </p>
                  <a 
                    href="tel:+94112345678" 
                    className="text-amber-200 text-sm tracking-[0.2em] uppercase border-b border-amber-500/40 pb-1 hover:border-amber-400 transition-colors inline-block"
                  >
                    +94 11 234 5678
                  </a>
                </div>

                <div className="pt-6 border-t border-amber-900/30 flex flex-col sm:flex-row gap-4">
                  <a
                    href="#reserve"
                    onClick={() => setIsOpen(false)}
                    className="px-8 py-4 rounded-full bg-amber-500 text-neutral-950 font-sans text-xs uppercase tracking-[0.25em] font-medium text-center hover:bg-amber-400 transition-all shadow-lg shadow-amber-500/20"
                  >
                    Reserve Tasting Table
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Footer */}
            <div className="max-w-7xl mx-auto w-full flex flex-col sm:flex-row items-center justify-between border-t border-amber-900/30 pt-6 text-[10px] tracking-[0.3em] text-neutral-500 uppercase">
              <p>Crafted for Fine Dining Experiences</p>
              <div className="flex gap-6 mt-4 sm:mt-0">
                <a href="#" className="hover:text-amber-400 transition-colors">Menu Guide</a>
                <a href="#" className="hover:text-amber-400 transition-colors">Wine List</a>
                <a href="#" className="hover:text-amber-400 transition-colors">Private Events</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}