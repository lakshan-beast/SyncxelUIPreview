// // import React from "react";

// // const brandData = {
// //   brand: {
// //     name: "VoltFleet AI",
// //     version: "EV Core 3.0",
// //     statusText: "Telemtry Active",
// //   },
// // };

// // export default function NavbarDesign03() {
// //   return (
// //     <header className="flex" id="header">
// //       <div className="bg-slate-500">
// //         <h2>{brandData.name}</h2>
// //       </div>
// //     </header>
// //   );
// // }

// import React, { useState } from "react";
// // import {  FaX } from "react-icons/fa";
// // import { FaMenu } from "react-icons/fa";
// import { HiSparkles } from "react-icons/hi2";
// // < />

// import { AiOutlineMenu } from "react-icons/ai";
// // < />
// import { IoClose } from "react-icons/io5";
// // < />

// export default function NavbarStyle1() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-950/80 backdrop-blur-md">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo */}
//           <div className="flex items-center gap-2">
//             <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-500 to-violet-500 flex items-center justify-center shadow-lg shadow-indigo-500/30">
//               <HiSparkles className="w-5 h-5 text-white" />
//             </div>
//             <span className="text-xl font-bold text-white tracking-tight">
//               Sync<span className="text-indigo-400">Xel</span>
//             </span>
//           </div>

//           {/* Desktop Nav Links */}
//           <nav className="hidden md:flex items-center gap-8">
//             <a
//               href="#components"
//               className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
//               Components
//             </a>
//             <a
//               href="#packs"
//               className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
//               UI Packs
//             </a>
//             <a
//               href="#pricing"
//               className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
//               Pricing
//             </a>
//             <a
//               href="#docs"
//               className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
//               Docs
//             </a>
//           </nav>

//           {/* Action Buttons */}
//           <div className="hidden md:flex items-center gap-4">
//             <button className="text-sm font-medium text-slate-300 hover:text-white px-3 py-2 transition-colors">
//               Sign In
//             </button>
//             <button className="text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-500 px-4 py-2 rounded-lg shadow-lg shadow-indigo-600/20 transition-all">
//               Get Access
//             </button>
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden flex items-center">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="text-slate-300 hover:text-white p-2 focus:outline-none">
//               {isOpen ? (
//                 <IoClose className="w-6 h-6" />
//               ) : (
//                 <AiOutlineMenu className="w-6 h-6" />
//               )}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu Dropdown */}
//       {isOpen && (
//         <div className="md:hidden border-b border-white/10 bg-slate-950/95 backdrop-blur-lg px-4 pt-2 pb-6 space-y-3">
//           <a
//             href="#components"
//             className="block text-base font-medium text-slate-300 hover:text-white py-2">
//             Components
//           </a>
//           <a
//             href="#packs"
//             className="block text-base font-medium text-slate-300 hover:text-white py-2">
//             UI Packs
//           </a>
//           <a
//             href="#pricing"
//             className="block text-base font-medium text-slate-300 hover:text-white py-2">
//             Pricing
//           </a>
//           <a
//             href="#docs"
//             className="block text-base font-medium text-slate-300 hover:text-white py-2">
//             Docs
//           </a>
//           <div className="pt-4 flex flex-col gap-3 border-t border-white/10">
//             <button className="w-full text-center text-sm font-medium text-slate-300 hover:text-white py-2">
//               Sign In
//             </button>
//             <button className="w-full text-center text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-500 py-2.5 rounded-lg shadow-lg shadow-indigo-600/20">
//               Get Access
//             </button>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Portfolios", href: "#portfolios", sub: "01" },
  { name: "Galleries", href: "#galleries", sub: "02" },
  { name: "Journal", href: "#journal", sub: "03" },
  { name: "Contact", href: "#contact", sub: "04" },
];

export default function LuxuryNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Handle glass blur intensity on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when full-screen mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
          scrolled
            ? "bg-[#0a0a0a]/75 backdrop-blur-2xl border-b border-white/[0.08] py-4 shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
            : "bg-transparent py-7"
        }`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Left: Brand Name with Editorial Subtext */}
          <a
            href="#"
            className="group flex items-center gap-4 text-white focus:outline-none">
            <div className="relative w-9 h-9 rounded-full border border-white/20 flex items-center justify-center overflow-hidden bg-neutral-900/55 group-hover:border-amber-400/60 transition-colors duration-500">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping absolute" />
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-base md:text-lg tracking-[0.35em] font-light uppercase text-neutral-100 group-hover:text-amber-200 transition-colors duration-300">
                Aura Lens
              </span>
              <span className="text-[9px] tracking-[0.4em] text-neutral-400 uppercase font-sans">
                Fine Art Studio
              </span>
            </div>
          </a>

          {/* Center: Navigation Links with Magnetic Pill Hover */}
          <nav
            className="hidden md:flex items-center p-1.5 rounded-full bg-neutral-900/40 backdrop-blur-xl border border-white/[0.06] relative"
            onMouseLeave={() => setHoveredIndex(null)}>
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onMouseEnter={() => setHoveredIndex(index)}
                className="relative px-6 py-2 text-[11px] uppercase tracking-[0.25em] text-neutral-300 hover:text-white transition-colors duration-300 z-10 focus:outline-none">
                {hoveredIndex === index && (
                  <motion.div
                    layoutId="navbar-pill"
                    className="absolute inset-0 bg-white/10 rounded-full backdrop-blur-md border border-white/10 shadow-inner"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </a>
            ))}
          </nav>

          {/* Right: Action Buttons & Menu Trigger */}
          <div className="flex items-center gap-4">
            <a
              href="#inquire"
              className="hidden sm:inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-white text-neutral-950 font-sans text-[11px] uppercase tracking-[0.2em] font-medium hover:bg-amber-100 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_25px_rgba(251,191,36,0.3)]">
              <span>Inquire</span>
              <svg
                className="w-3 h-3 -rotate-45"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>

            {/* Custom Camera Aperture / Lens Toggle Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Navigation Menu"
              className="relative w-12 h-12 flex items-center justify-center rounded-full border border-white/20 bg-neutral-900/80 text-white focus:outline-none backdrop-blur-md group hover:border-amber-400/80 transition-all duration-500 shadow-xl">
              <svg
                className="w-5 h-5 text-neutral-200 group-hover:text-amber-300 transition-colors"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round">
                {/* Outer Aperture Ring */}
                <motion.circle
                  cx="12"
                  cy="12"
                  r="9"
                  animate={
                    isOpen
                      ? { scale: 0.85, opacity: 0.3 }
                      : { scale: 1, opacity: 1 }
                  }
                  transition={{ duration: 0.4 }}
                />

                {/* Inner Iris Blades / Dot */}
                <motion.circle
                  cx="12"
                  cy="12"
                  r="3.5"
                  animate={
                    isOpen
                      ? { scale: 0, opacity: 0 }
                      : { scale: [1, 1.3, 1], opacity: 1 }
                  }
                  transition={{ duration: 0.4 }}
                />

                {/* Left Line of X */}
                <motion.path
                  d="M6 6L18 18"
                  initial={false}
                  animate={
                    isOpen
                      ? { pathLength: 1, opacity: 1, rotate: 0 }
                      : { pathLength: 0, opacity: 0 }
                  }
                  transition={{ duration: 0.3, delay: 0.1 }}
                />

                {/* Right Line of X */}
                <motion.path
                  d="M18 6L6 18"
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

      {/* Cinematic Fullscreen Immersive Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at 90% 8%)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 90% 8%)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 90% 8%)" }}
            transition={{ duration: 0.7, ease: [0.77, 0, 0.175, 1] }}
            className="fixed inset-0 z-40 bg-[#070707] flex flex-col justify-between px-8 md:px-20 py-24 md:py-28 overflow-y-auto">
            {/* Background Ambient Glow Accent */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

            {/* Menu Header info */}
            <div className="flex items-center justify-between border-b border-white/10 pb-6 max-w-7xl mx-auto w-full">
              <span className="text-[10px] tracking-[0.4em] text-neutral-400 uppercase font-sans">
                Navigation Index
              </span>
              <span className="text-[10px] tracking-[0.4em] text-amber-400 uppercase font-sans">
                [ Aura Lens Studio © 2026 ]
              </span>
            </div>

            {/* Main Navigation Links List */}
            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8 my-auto py-12">
              <div className="flex flex-col space-y-6 md:space-y-8">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: index * 0.1 + 0.2,
                      duration: 0.5,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="group flex items-baseline gap-6 focus:outline-none">
                    <span className="text-xs font-mono text-amber-400/60 tracking-widest">
                      {link.sub}
                    </span>
                    <span className="font-serif text-4xl md:text-6xl lg:text-7xl font-light text-neutral-200 group-hover:text-white group-hover:translate-x-4 transition-all duration-500 tracking-wider">
                      {link.name}
                    </span>
                  </motion.a>
                ))}
              </div>

              {/* Secondary Details inside Drawer */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="flex flex-col justify-between border-t md:border-t-0 md:border-l border-white/10 pt-8 md:pt-0 md:pl-16 space-y-8">
                <div>
                  <h4 className="text-[11px] uppercase tracking-[0.3em] text-amber-400 mb-4 font-sans">
                    Global Inquiries
                  </h4>
                  <p className="text-neutral-400 font-serif text-lg md:text-xl leading-relaxed mb-6">
                    Available for destination weddings, high-end editorial
                    campaigns, and private gallery exhibitions worldwide.
                  </p>
                  <a
                    href="mailto:concierge@auralens.com"
                    className="text-white text-sm tracking-[0.2em] uppercase border-b border-white/30 pb-1 hover:border-amber-400 hover:text-amber-300 transition-colors inline-block">
                    concierge@auralens.com
                  </a>
                </div>

                <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-4">
                  <a
                    href="#inquire"
                    onClick={() => setIsOpen(false)}
                    className="px-8 py-4 rounded-full bg-amber-400 text-neutral-950 font-sans text-xs uppercase tracking-[0.25em] font-medium text-center hover:bg-amber-300 transition-all shadow-lg shadow-amber-400/20">
                    Book Private Session
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Menu Footer */}
            <div className="max-w-7xl mx-auto w-full flex flex-col sm:flex-row items-center justify-between border-t border-white/10 pt-6 text-[10px] tracking-[0.3em] text-neutral-400 uppercase">
              <p>Designed for Luxury Collections</p>
              <div className="flex gap-6 mt-4 sm:mt-0">
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
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
