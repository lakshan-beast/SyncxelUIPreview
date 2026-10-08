// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// const menuLinks = [
//   { name: 'The Menu', href: '#menu', sub: '01' },
//   { name: 'Atelier', href: '#atelier', sub: '02' },
//   { name: 'Reservations', href: '#reservations', sub: '03' },
//   { name: 'Private Dining', href: '#private', sub: '04' },
//   { name: 'Journal', href: '#journal', sub: '05' },
// ];

// export default function RestaurantNavbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [hoveredIndex, setHoveredIndex] = useState(null);

//   // Handle glass blur on scroll
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 30);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Lock body scroll when immersive menu is open
//   useEffect(() => {
//     document.body.style.overflow = isOpen ? 'hidden' : 'unset';
//   }, [isOpen]);

//   return (
//     <>
//       <header
//         className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
//           scrolled
//             ? 'bg-[#121110]/80 backdrop-blur-2xl border-b border-amber-900/20 py-4 shadow-[0_10px_30px_rgba(0,0,0,0.6)]'
//             : 'bg-transparent py-6'
//         }`}
//       >
//         <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">

//           {/* Left: Brand / Logo with Botanical Accent */}
//           <a
//             href="#"
//             className="group flex items-center gap-3 text-white focus:outline-none"
//           >
//             <div className="w-8 h-8 rounded-full border border-amber-500/40 flex items-center justify-center bg-amber-950/30 group-hover:border-amber-400 transition-colors duration-500">
//               <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
//             </div>
//             <div className="flex flex-col">
//               <span className="font-serif text-base md:text-lg tracking-[0.3em] font-light uppercase text-neutral-100 group-hover:text-amber-200 transition-colors">
//                 Verdant & Vine
//               </span>
//               <span className="text-[9px] tracking-[0.4em] text-amber-500/80 uppercase font-sans">
//                 Culinary Atelier
//               </span>
//             </div>
//           </a>

//           {/* Center: Navigation Links with Magnetic Pill */}
//           <nav
//             className="hidden md:flex items-center p-1.5 rounded-full bg-neutral-900/50 backdrop-blur-xl border border-white/[0.06] relative"
//             onMouseLeave={() => setHoveredIndex(null)}
//           >
//             {menuLinks.map((link, index) => (
//               <a
//                 key={link.name}
//                 href={link.href}
//                 onMouseEnter={() => setHoveredIndex(index)}
//                 className="relative px-5 py-2 text-[11px] uppercase tracking-[0.25em] text-neutral-300 hover:text-white transition-colors duration-300 z-10 focus:outline-none"
//               >
//                 {hoveredIndex === index && (
//                   <motion.div
//                     layoutId="restaurant-pill"
//                     className="absolute inset-0 bg-amber-500/15 rounded-full backdrop-blur-md border border-amber-500/30 shadow-inner"
//                     transition={{ type: 'spring', stiffness: 400, damping: 30 }}
//                   />
//                 )}
//                 <span className="relative z-10">{link.name}</span>
//               </a>
//             ))}
//           </nav>

//           {/* Right: Reserve CTA & Custom Cloche Menu Button */}
//           <div className="flex items-center gap-4">
//             <a
//               href="#reserve"
//               className="hidden sm:inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-amber-500 text-neutral-950 font-sans text-[11px] uppercase tracking-[0.2em] font-medium hover:bg-amber-400 transition-all duration-300 shadow-[0_0_20px_rgba(245,158,11,0.2)]"
//             >
//               <span>Book Table</span>
//               <svg className="w-3 h-3 -rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
//               </svg>
//             </a>

//             {/* Custom Animated Gourmet Cloche (Serving Dome) to 'X' Toggle */}
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               aria-label="Toggle Menu"
//               className="relative w-12 h-12 flex items-center justify-center rounded-full border border-amber-500/30 bg-neutral-900/80 text-white focus:outline-none backdrop-blur-md group hover:border-amber-400 transition-all duration-500 shadow-xl"
//             >
//               <svg
//                 className="w-5 h-5 text-amber-200 group-hover:text-amber-400 transition-colors"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="1.5"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               >
//                 {/* Cloche Dome Arc */}
//                 <motion.path
//                   d="M4 17C4 12.5817 7.58172 9 12 9C16.4183 9 20 12.5817 20 17H4Z"
//                   animate={isOpen ? { scale: 0.8, opacity: 0, y: -4 } : { scale: 1, opacity: 1, y: 0 }}
//                   transition={{ duration: 0.3 }}
//                 />

//                 {/* Cloche Handle / Knob */}
//                 <motion.path
//                   d="M12 5V9"
//                   animate={isOpen ? { scale: 0, opacity: 0 } : { scale: 1, opacity: 1 }}
//                   transition={{ duration: 0.2 }}
//                 />

//                 {/* Base Plate Line */}
//                 <motion.path
//                   d="M2 20H22"
//                   animate={isOpen ? { scaleX: 0.7, opacity: 0, y: 4 } : { scaleX: 1, opacity: 1, y: 0 }}
//                   transition={{ duration: 0.3 }}
//                 />

//                 {/* Left X Stroke */}
//                 <motion.path
//                   d="M7 7L17 17"
//                   initial={false}
//                   animate={
//                     isOpen
//                       ? { pathLength: 1, opacity: 1, rotate: 0 }
//                       : { pathLength: 0, opacity: 0 }
//                   }
//                   transition={{ duration: 0.3, delay: 0.1 }}
//                 />

//                 {/* Right X Stroke */}
//                 <motion.path
//                   d="M17 7L7 17"
//                   initial={false}
//                   animate={
//                     isOpen
//                       ? { pathLength: 1, opacity: 1, rotate: 0 }
//                       : { pathLength: 0, opacity: 0 }
//                   }
//                   transition={{ duration: 0.3, delay: 0.15 }}
//                 />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </header>

//       {/* Immersive Fullscreen Culinary Drawer */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, clipPath: 'circle(0% at 90% 8%)' }}
//             animate={{ opacity: 1, clipPath: 'circle(150% at 90% 8%)' }}
//             exit={{ opacity: 0, clipPath: 'circle(0% at 90% 8%)' }}
//             transition={{ duration: 0.7, ease: [0.77, 0, 0.175, 1] }}
//             className="fixed inset-0 z-40 bg-[#0d0c0b] flex flex-col justify-between px-8 md:px-20 py-24 md:py-28 overflow-y-auto"
//           >
//             {/* Ambient Warm Glow */}
//             <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-amber-600/10 rounded-full blur-[150px] pointer-events-none" />

//             {/* Header in Drawer */}
//             <div className="flex items-center justify-between border-b border-amber-900/30 pb-6 max-w-7xl mx-auto w-full">
//               <span className="text-[10px] tracking-[0.4em] text-amber-500 uppercase font-sans">
//                 Gastronomy Index
//               </span>
//               <span className="text-[10px] tracking-[0.4em] text-neutral-400 uppercase font-sans">
//                 [ Tasting Room & Cellar ]
//               </span>
//             </div>

//             {/* Menu Links */}
//             <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8 my-auto py-12">
//               <div className="flex flex-col space-y-6 md:space-y-8">
//                 {menuLinks.map((link, index) => (
//                   <motion.a
//                     key={link.name}
//                     href={link.href}
//                     onClick={() => setIsOpen(false)}
//                     initial={{ opacity: 0, y: 30 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: index * 0.08 + 0.2, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
//                     className="group flex items-baseline gap-6 focus:outline-none"
//                   >
//                     <span className="text-xs font-mono text-amber-500/70 tracking-widest">
//                       {link.sub}
//                     </span>
//                     <span className="font-serif text-4xl md:text-6xl lg:text-7xl font-light text-neutral-200 group-hover:text-amber-300 group-hover:translate-x-4 transition-all duration-500 tracking-wider">
//                       {link.name}
//                     </span>
//                   </motion.a>
//                 ))}
//               </div>

//               {/* Right Side Info */}
//               <motion.div
//                 initial={{ opacity: 0, x: 20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ delay: 0.4, duration: 0.6 }}
//                 className="flex flex-col justify-between border-t md:border-t-0 md:border-l border-amber-900/30 pt-8 md:pt-0 md:pl-16 space-y-8"
//               >
//                 <div>
//                   <h4 className="text-[11px] uppercase tracking-[0.3em] text-amber-400 mb-4 font-sans">
//                     Hours & Location
//                   </h4>
//                   <p className="text-neutral-400 font-serif text-lg md:text-xl leading-relaxed mb-4">
//                     Tuesdays through Sundays<br />
//                     Dinner seating from 6:00 PM onwards.<br />
//                     Colombo 07, Sri Lanka.
//                   </p>
//                   <a
//                     href="tel:+94112345678"
//                     className="text-amber-200 text-sm tracking-[0.2em] uppercase border-b border-amber-500/40 pb-1 hover:border-amber-400 transition-colors inline-block"
//                   >
//                     +94 11 234 5678
//                   </a>
//                 </div>

//                 <div className="pt-6 border-t border-amber-900/30 flex flex-col sm:flex-row gap-4">
//                   <a
//                     href="#reserve"
//                     onClick={() => setIsOpen(false)}
//                     className="px-8 py-4 rounded-full bg-amber-500 text-neutral-950 font-sans text-xs uppercase tracking-[0.25em] font-medium text-center hover:bg-amber-400 transition-all shadow-lg shadow-amber-500/20"
//                   >
//                     Reserve Tasting Table
//                   </a>
//                 </div>
//               </motion.div>
//             </div>

//             {/* Footer */}
//             <div className="max-w-7xl mx-auto w-full flex flex-col sm:flex-row items-center justify-between border-t border-amber-900/30 pt-6 text-[10px] tracking-[0.3em] text-neutral-500 uppercase">
//               <p>Crafted for Fine Dining Experiences</p>
//               <div className="flex gap-6 mt-4 sm:mt-0">
//                 <a href="#" className="hover:text-amber-400 transition-colors">Menu Guide</a>
//                 <a href="#" className="hover:text-amber-400 transition-colors">Wine List</a>
//                 <a href="#" className="hover:text-amber-400 transition-colors">Private Events</a>
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  RiSearchLine,
  RiMapPinLine,
  RiHeart3Line,
  RiArrowRightLine,
  RiBuilding2Line,
  RiCompass3Line,
  RiGlobalLine,
  RiVipCrownLine,
} from "react-icons/ri";

// 1. Data Object with Bento Grid Content for each Tab
export const realEstateNavData = {
  brand: {
    name: "AURA // ESTATES",
    subtitle: "Private Architectural Sanctuaries",
  },
  searchPlaceholder: "Search sanctuary, penthouse, Colombo 07...",
  navLinks: [
    {
      label: "Sanctuaries",
      href: "#sanctuaries",
      bentoCards: [
        {
          title: "The Glass Monolith",
          location: "Colombo 07",
          price: "$4.5M",
          tag: "Penthouse",
          img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=400&q=80",
        },
        {
          title: "Kandy Hillside Villa",
          location: "Kandy Highlands",
          price: "$2.8M",
          tag: "Private Estate",
          img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80",
        },
      ],
    },
    {
      label: "Horizons",
      href: "#horizons",
      bentoCards: [
        {
          title: "Southern Coastal Cliff",
          location: "Galle Fort",
          price: "$6.2M",
          tag: "Oceanfront",
          img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=400&q=80",
        },
        {
          title: "Jungle Pavilion",
          location: "Sigiriya",
          price: "$1.9M",
          tag: "Eco Sanctuary",
          img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=400&q=80",
        },
      ],
    },
    {
      label: "Masterplans",
      href: "#masterplans",
      bentoCards: [
        {
          title: "Smart Eco-City District",
          location: "Port City",
          price: "Investment",
          tag: "Commercial",
          img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=400&q=80",
        },
        {
          title: "Private Island Reserve",
          location: "Maldives Outpost",
          price: "$12.0M",
          tag: "Exclusive",
          img: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=400&q=80",
        },
      ],
    },
    {
      label: "Concierge",
      href: "#concierge",
      bentoCards: [
        {
          title: "VIP Private Tours",
          location: "Helicopter Service",
          price: "On Request",
          tag: "Service",
          img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=400&q=80",
        },
        {
          title: "Architectural Advisory",
          location: "Global Studio",
          price: "Consultation",
          tag: "Advisory",
          img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=400&q=80",
        },
      ],
    },
  ],
  actions: {
    primaryText: "Schedule Tour",
    savedCount: "2",
  },
};

// 2. Main Luxury Navbar Component
export default function LuxuryRealEstateNavbar() {
  const [activeHoverTab, setActiveHoverTab] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 px-4 sm:px-8 pt-5 font-sans text-white select-none">
      {/* Floating Island Command & Bento Container */}
      <nav className="max-w-7xl mx-auto bg-[#07080c]/90 backdrop-blur-2xl border border-amber-500/30 rounded-3xl shadow-[0_10px_50px_rgba(0,0,0,0.7)] px-6 py-4 flex items-center justify-between relative">
        {/* A. Brand Logo */}
        <a href="#" className="flex flex-col group focus:outline-none">
          <span className="font-serif font-bold text-lg tracking-[0.25em] text-neutral-100 group-hover:text-amber-300 transition-colors">
            {realEstateNavData.brand.name}
          </span>
          <span className="text-[9px] tracking-[0.3em] text-amber-500/80 uppercase font-mono">
            {realEstateNavData.brand.subtitle}
          </span>
        </a>

        {/* B. Center Command Search Bar (Layout 2 Integration) */}
        <div className="hidden xl:flex items-center space-x-2 bg-neutral-900/80 px-4 py-2 rounded-full border border-neutral-800 w-80 shadow-inner group focus-within:border-amber-500/50 transition-all">
          <RiSearchLine className="text-amber-500 w-4 h-4" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={realEstateNavData.searchPlaceholder}
            className="bg-transparent text-xs text-neutral-200 placeholder-neutral-500 focus:outline-none w-full font-sans"
          />
          <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-neutral-800 text-neutral-400 border border-neutral-700">
            ⌘K
          </span>
        </div>

        {/* C. Center Navigation Links with Bento-Grid Dropdown (Layout 4 Integration) */}
        <div
          className="hidden lg:flex items-center space-x-2 bg-neutral-900/50 p-1.5 rounded-full border border-neutral-800/80 relative"
          onMouseLeave={() => setActiveHoverTab(null)}>
          {realEstateNavData.navLinks.map((link, idx) => (
            <div
              key={idx}
              className="relative"
              onMouseEnter={() => setActiveHoverTab(idx)}>
              <a
                href={link.href}
                className="px-5 py-2 text-xs font-medium uppercase tracking-[0.2em] text-neutral-300 hover:text-white hover:bg-neutral-800/80 rounded-full transition-all flex items-center space-x-1.5">
                <span>{link.label}</span>
              </a>

              {/* Bento-Grid Preview Card Dropdown */}
              <AnimatePresence>
                {activeHoverTab === idx && (
                  <motion.div
                    initial={{ opacity: 0, y: 15, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[520px] bg-[#0c0e14]/95 backdrop-blur-2xl border border-amber-500/30 rounded-3xl shadow-2xl p-4 z-50 grid grid-cols-2 gap-4">
                    {link.bentoCards.map((card, cIdx) => (
                      <a
                        key={cIdx}
                        href="#"
                        className="group/card relative rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 hover:border-amber-500/50 transition-all duration-300 block p-3">
                        <div className="relative h-28 rounded-xl overflow-hidden mb-3">
                          <img
                            src={card.img}
                            alt={card.title}
                            className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-500"
                          />
                          <span className="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-neutral-950/80 backdrop-blur-md text-[9px] font-mono text-amber-300 border border-amber-500/20 uppercase">
                            {card.tag}
                          </span>
                        </div>
                        <div className="flex items-start justify-between">
                          <div>
                            <h4 className="font-serif font-medium text-sm text-white group-hover/card:text-amber-300 transition-colors">
                              {card.title}
                            </h4>
                            <p className="text-[10px] text-neutral-400 flex items-center space-x-1 mt-0.5">
                              <RiMapPinLine className="text-amber-500 w-3 h-3" />
                              <span>{card.location}</span>
                            </p>
                          </div>
                          <span className="font-mono text-xs font-semibold text-amber-400">
                            {card.price}
                          </span>
                        </div>
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* D. Right Side Actions (Wishlist & CTA Button) */}
        <div className="flex items-center space-x-4">
          <button className="relative p-2.5 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-amber-400 hover:border-amber-500/30 transition-all">
            <RiHeart3Line className="w-4 h-4" />
            <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-amber-500 text-neutral-950 font-bold text-[9px] flex items-center justify-center">
              {realEstateNavData.actions.savedCount}
            </span>
          </button>

          <motion.button
            whileHover={{
              scale: 1.03,
              boxShadow: "0 0 25px rgba(245,158,11,0.3)",
            }}
            whileTap={{ scale: 0.96 }}
            className="hidden sm:inline-flex px-6 py-2.5 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 text-neutral-950 font-semibold text-xs uppercase tracking-[0.2em] shadow-lg shadow-amber-500/20 cursor-pointer">
            {realEstateNavData.actions.primaryText}
          </motion.button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
            className="lg:hidden relative w-11 h-11 flex items-center justify-center rounded-full border border-amber-500/30 bg-neutral-900 text-amber-400 focus:outline-none hover:border-amber-400 transition-colors shadow-lg">
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round">
              <motion.circle
                cx="12"
                cy="12"
                r="9"
                animate={
                  mobileMenuOpen
                    ? { scale: 0.8, opacity: 0 }
                    : { scale: 1, opacity: 1 }
                }
                transition={{ duration: 0.25 }}
              />
              <motion.path
                d="M7 7L17 17"
                initial={false}
                animate={
                  mobileMenuOpen
                    ? { pathLength: 1, opacity: 1 }
                    : { pathLength: 0, opacity: 0 }
                }
                transition={{ duration: 0.3, delay: 0.1 }}
              />
              <motion.path
                d="M17 7L7 17"
                initial={false}
                animate={
                  mobileMenuOpen
                    ? { pathLength: 1, opacity: 1 }
                    : { pathLength: 0, opacity: 0 }
                }
                transition={{ duration: 0.3, delay: 0.15 }}
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Immersive Drawer with Bento Grid Elements */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at 90% 8%)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 90% 8%)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 90% 8%)" }}
            transition={{ duration: 0.6, ease: [0.77, 0, 0.175, 1] }}
            className="fixed inset-0 z-40 bg-[#05060a] flex flex-col justify-between px-6 py-24 overflow-y-auto lg:hidden">
            <div className="max-w-md mx-auto w-full space-y-6">
              <div className="relative bg-neutral-900 px-4 py-3 rounded-2xl border border-neutral-800 flex items-center space-x-3 mb-6">
                <RiSearchLine className="text-amber-500 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search sanctuaries, villas..."
                  className="bg-transparent text-sm text-white placeholder-neutral-500 focus:outline-none w-full"
                />
              </div>

              {realEstateNavData.navLinks.map((link, idx) => (
                <div
                  key={idx}
                  className="space-y-3 pb-4 border-b border-neutral-800/80">
                  <span className="font-serif text-xl text-amber-300 font-medium">
                    {link.label}
                  </span>
                  <div className="grid grid-cols-2 gap-2">
                    {link.bentoCards.map((card, cIdx) => (
                      <div
                        key={cIdx}
                        className="p-2 rounded-xl bg-neutral-900/60 border border-neutral-800">
                        <p className="text-xs font-medium text-white">
                          {card.title}
                        </p>
                        <p className="text-[10px] text-amber-400 font-mono mt-0.5">
                          {card.price}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              <button
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-4 rounded-full bg-amber-500 text-neutral-950 font-bold text-xs uppercase tracking-[0.2em] shadow-xl text-center">
                Schedule Tour
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
