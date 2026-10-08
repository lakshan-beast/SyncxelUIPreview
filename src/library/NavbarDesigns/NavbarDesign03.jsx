// import React from "react";
// import { href } from "react-router-dom";
// import { GiElectricWhip } from "react-icons/gi";

// // data object
// export const NavbarDesignData03 = {
//   // brand name / other details
//   brand: {
//     name: "VoltFleet AI",
//     version: "EV Core 3.0",
//     statusText: "Telemtry Active",
//   },

//   // navLinks details
//   navLinks: [
//     { label: "Fleet Map", href: "#map", badge: "Live" },
//     { label: "Charging Grid", href: "#charging", badge: null },
//     { label: "Battery Health", href: "#battery", badge: "98%" },
//     { label: "Analytics", href: "#analytics", badge: null },
//   ],

//   // actions details
//   actions: {
//     primaryText: "Track Fleet",
//     activeVehicles: "48 EVs Online",
//   },
// };

// export default function NavbarDesign03() {
//   return (
//     <header
//       className="fixed top-0 left-0 w-full z-50 bg-[#090d16]/70 backdrop-blur-md border-b border-slate-800/20"
//       id="header">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex justify-between items-center">
//         {/* A. barnd logo & status */}
//         <div className="flex items-center space-x-3">
//           <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-emerald-400 p-0.5 flex items-center justify-center shadow-lg shadow-cyan-500/20">
//             <div className="w-full h-full bg-[#090d16] rounded-[11px] flex items-center justify-center">
//               <span className="text-cyan-400">
//                 <GiElectricWhip className="w-6 h-6" />
//               </span>
//             </div>
//           </div>
//           <div>
//             <div className="flex items-center space-x-2">
//               <span className="text-white font-semibold tracking-wide text-base">
//                 {" "}
//                 {NavbarDesignData03.brand.name}
//               </span>
//               <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
//                 {NavbarDesignData03.brand.version}
//               </span>
//             </div>

//             <p className="text-xs text-slate-400 flex items-center space-x1.5 mt-0.5">
//               <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
//               <span>{NavbarDesignData03.brand.statusText}</span>
//             </p>
//           </div>
//         </div>

//         {/* B. Navigation Links with .map() */}
//         <nav className="hidden md:flex items-center space-x-1 bg-slate-900/50 p-1.5 rounded-full border border-slate-800/80">
//           {NavbarDesignData03.navLinks.map((link, index) => (
//             <a
//               href={link.href}
//               key={link.index}
//               className="px-4 py-2 text-sm font-medium hover:text-white hover:bg-slate-800/60 rounded-full transition-all duration-200 flex items-center space-x-2">
//               <span>{link.label}</span>
//               {link.badge && (
//                 <span className="font-mono text-[10px] px-1.5 py-0.2 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
//                   {link.badge}
//                 </span>
//               )}
//             </a>
//           ))}
//         </nav>

//         {/* C. Right side actions & Live Status */}
//         <div className="flex items-center space-x-4">
//           {/* active vehicles */}
//           <div className="hidden lg:flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 tetx-xs font-mono text-slate-300">
//             <span className="w-3 h-3 rounded-full bg-emerald-400"></span>
//             <span>{NavbarDesignData03.actions.activeVehicles}</span>
//           </div>

//           <button
//             type="button"
//             className="px-5 py-2.5 rounded-xl font-medium text-sm text-slate-950 bg-gradient-to-r from-vyan-400 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 shadow-lg shadow-cyan-500/25 transition-all duration-300 transform hover:-translate-y-0.5">
//             {NavbarDesignData03.actions.primaryText}
//           </button>
//         </div>
//       </div>
//     </header>
//   );
// }

// import React from "react";
// import { motion } from "framer-motion";
// import { GiElectricWhip } from "react-icons/gi";

// // 1. Data Object
// export const evMobilityNavData = {
//   brand: {
//     name: "VoltFleet AI",
//     version: "EV Core 3.0",
//     statusText: "Telemetry Active",
//   },
//   navLinks: [
//     { label: "Fleet Map", href: "#map", badge: "Live" },
//     { label: "Charging Grid", href: "#charging", badge: null },
//     { label: "Battery Health", href: "#battery", badge: "98%" },
//     { label: "Analytics", href: "#analytics", badge: null },
//   ],
//   actions: {
//     primaryText: "Track Fleet",
//     activeVehicles: "48 EVs Online",
//   },
// };

// // 2. Main Navbar Component එක
// export default function NavbarDesign03() {
//   return (
//     <motion.header
//       initial={{ y: -50, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.6, ease: "easeOut" }}
//       className="fixed top-0 left-0 w-full z-50 bg-[#05070E] backdrop-blur-md border-b border-slate-800/80">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
//         {/* A. Brand Logo and Status Badge */}
//         <div className="flex items-center space-x-3">
//           <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-emerald-400 p-0.5 flex items-center justify-center shadow-lg shadow-cyan-500/20">
//             <div className="w-full h-full bg-[#090d16] rounded-[11px] flex items-center justify-center">
//               <span className="text-cyan-400 font-bold text-lg">
//                 <GiElectricWhip className="w-6 h-6" />
//               </span>
//             </div>
//           </div>
//           <div>
//             <div className="flex items-center space-x-2">
//               <span className="text-white font-semibold tracking-wide text-base ">
//                 {evMobilityNavData.brand.name}
//               </span>
//               <span className="hidden md:block text-[10px] font-mono px-1.5 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
//                 {evMobilityNavData.brand.version}
//               </span>
//             </div>
//             <p className="text-xs text-slate-400 flex items-center space-x-1.5 mt-0.5">
//               <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
//               <span>{evMobilityNavData.brand.statusText}</span>
//             </p>
//           </div>
//         </div>

//         {/* B. Navigation Links (.map එක හරහා) */}
//         <nav className="hidden md:flex items-center space-x-1 bg-slate-900/50 p-1.5 rounded-full border border-slate-800/80">
//           {evMobilityNavData.navLinks.map((link, index) => (
//             <a
//               key={index}
//               href={link.href}
//               className="px-4 py-2 text-sm font-bricolage font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 rounded-full transition-all duration-200 flex items-center space-x-2">
//               <span>{link.label}</span>
//               {link.badge && (
//                 <span className="relative -top-3.5 right-2  text-[10px] font-mono px-1.5 py-0.2 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
//                   {link.badge}
//                 </span>
//               )}
//             </a>
//           ))}
//         </nav>

//         {/* C. Right Side Actions & Live Status */}
//         <div className="flex items-center space-x-4">
//           <div className="hidden lg:flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs font-mono text-slate-300">
//             <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
//             <span>{evMobilityNavData.actions.activeVehicles}</span>
//           </div>

//           <motion.button
//             whileHover={{ scale: 1.02 }}
//             whileTap={{ scale: 0.95 }}
//             transition={{ duration: 0.6, ease: "easeIn" }}
//             className="px-5 py-2.5 font-sansation rounded-xl font-medium text-sm text-slate-950 bg-gradient-to-r from-[#00F2FE] to-[#4FACFE] hover:from-cyan-600 hover:to-emerald-600 shadow-lg shadow-cyan-500/25 transition-all duration-200 transform hover:-translate-y-0.5">
//             {evMobilityNavData.actions.primaryText}
//           </motion.button>
//         </div>
//       </div>
//     </motion.header>
//   );
// }

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GiElectricWhip } from "react-icons/gi";

// 1. Data Object (Preserved exactly as requested)
export const evMobilityNavData = {
  brand: {
    name: "VoltFleet AI",
    version: "EV Core 3.0",
    statusText: "Telemetry Active",
  },
  navLinks: [
    { label: "Fleet Map", href: "#map", badge: "Live" },
    { label: "Charging Grid", href: "#charging", badge: null },
    { label: "Battery Health", href: "#battery", badge: "98%" },
    { label: "Analytics", href: "#analytics", badge: null },
  ],
  actions: {
    primaryText: "Track Fleet",
    activeVehicles: "48 EVs Online",
  },
};

// 2. Main Navbar Component
export default function NavbarDesign03() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 px-4 sm:px-6 pt-4 font-sansation">
      {/* Main Floating HUD Container */}
      <nav className="max-w-7xl mx-auto bg-[#030612]/90 backdrop-blur-xl border border-cyan-500/30 rounded-2xl shadow-[0_8px_32px_rgba(0,242,254,0.1)] px-5 py-3 text-white flex items-center justify-between relative">
        {/* Brand Section */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-emerald-400 p-[1px] shadow-lg shadow-cyan-500/20">
            <div className="w-full h-full bg-[#050914] rounded-[11px] flex items-center justify-center">
              <GiElectricWhip className="w-5 h-5 text-cyan-400 animate-pulse" />
            </div>
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="font-bricolage font-bold text-base tracking-wide text-white">
                {evMobilityNavData.brand.name}
              </span>
              <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                {evMobilityNavData.brand.version}
              </span>
            </div>
            <div className="flex items-center space-x-1.5 text-[11px] text-slate-400 mt-0.5 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              <span>{evMobilityNavData.brand.statusText}</span>
            </div>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center space-x-1 bg-[#060b19] px-3 py-1.5 rounded-full border border-cyan-500/20">
          {evMobilityNavData.navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="px-4 py-1.5 text-sm font-medium text-slate-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-full transition-all flex items-center space-x-2">
              <span>{link.label}</span>
              {link.badge && (
                <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                  {link.badge}
                </span>
              )}
            </a>
          ))}
        </div>

        {/* Right Side Actions */}
        <div className="hidden lg:flex items-center space-x-4">
          <div className="flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-[#060b19] border border-cyan-500/20 text-xs font-mono text-cyan-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>{evMobilityNavData.actions.activeVehicles}</span>
          </div>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="px-5 py-2.5 rounded-xl text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-emerald-400 shadow-lg shadow-cyan-500/25 cursor-pointer font-bricolage">
            {evMobilityNavData.actions.primaryText}
          </motion.button>
        </div>

        {/* Mobile Toggle Button (Cyber Grid Box -> X) */}
        <div className="lg:hidden flex items-center space-x-3">
          <div className="hidden sm:flex items-center space-x-1.5 px-2.5 py-1 rounded-lg bg-[#060b19] border border-cyan-500/20 text-[10px] font-mono text-cyan-300">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            <span>48 Online</span>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
            className="w-11 h-11 rounded-xl bg-[#060b19] border border-cyan-500/30 flex items-center justify-center text-cyan-400 hover:border-cyan-400 transition-colors shadow-md relative focus:outline-none">
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round">
              {/* Cyber Grid Crosshair transforming into X */}
              <motion.rect
                x="3"
                y="3"
                width="7"
                height="7"
                rx="1"
                animate={
                  isOpen ? { scale: 0, opacity: 0 } : { scale: 1, opacity: 1 }
                }
                transition={{ duration: 0.2 }}
              />
              <motion.rect
                x="14"
                y="3"
                width="7"
                height="7"
                rx="1"
                animate={
                  isOpen ? { scale: 0, opacity: 0 } : { scale: 1, opacity: 1 }
                }
                transition={{ duration: 0.2 }}
              />
              <motion.rect
                x="3"
                y="14"
                width="7"
                height="7"
                rx="1"
                animate={
                  isOpen ? { scale: 0, opacity: 0 } : { scale: 1, opacity: 1 }
                }
                transition={{ duration: 0.2 }}
              />
              <motion.rect
                x="14"
                y="14"
                width="7"
                height="7"
                rx="1"
                animate={
                  isOpen ? { scale: 0, opacity: 0 } : { scale: 1, opacity: 1 }
                }
                transition={{ duration: 0.2 }}
              />
              <motion.path
                d="M6 6L18 18"
                initial={false}
                animate={
                  isOpen
                    ? { pathLength: 1, opacity: 1 }
                    : { pathLength: 0, opacity: 0 }
                }
                transition={{ duration: 0.3 }}
              />
              <motion.path
                d="M18 6L6 18"
                initial={false}
                animate={
                  isOpen
                    ? { pathLength: 1, opacity: 1 }
                    : { pathLength: 0, opacity: 0 }
                }
                transition={{ duration: 0.3, delay: 0.05 }}
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Expanded Cyber-Deck Grid Panel (Instead of boring vertical lists) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -10 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -10 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-7xl mx-auto mt-2 bg-[#030612]/95 backdrop-blur-2xl border border-cyan-500/30 rounded-2xl shadow-2xl p-6 lg:hidden text-white overflow-hidden">
            <div className="flex items-center justify-between border-b border-cyan-500/20 pb-3 mb-4">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
                SYSTEM // COMMAND DECK
              </span>
              <span className="text-[10px] font-mono text-emerald-400">
                {evMobilityNavData.actions.activeVehicles}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {evMobilityNavData.navLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="p-3.5 rounded-xl bg-[#060b19] border border-cyan-500/15 hover:border-cyan-400 hover:bg-cyan-500/10 transition-all flex items-center justify-between group">
                  <span className="font-bricolage text-base font-semibold text-slate-200 group-hover:text-cyan-300">
                    {link.label}
                  </span>
                  {link.badge && (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                      {link.badge}
                    </span>
                  )}
                </a>
              ))}
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="w-full py-3.5 rounded-xl text-sm font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-emerald-400 shadow-lg shadow-cyan-500/25 text-center font-bricolage cursor-pointer uppercase tracking-wider">
              {evMobilityNavData.actions.primaryText}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
