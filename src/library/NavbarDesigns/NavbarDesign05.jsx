// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// // import framer-motions
// import { motion, AnimatePresence } from "framer-motion";

// // import react-icons
// import { HiShoppingBag } from "react-icons/hi2";
// import { FaBarsStaggered } from "react-icons/fa6";
// import { IoClose } from "react-icons/io5";
// import { SiCodechef } from "react-icons/si";
// import { IoMdRestaurant } from "react-icons/io";
// import { IoIosRestaurant } from "react-icons/io";
// import { TbTruckDelivery } from "react-icons/tb";
// // < />
// // < />

// export default function NavbarDesign05() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const closeMenu = () => setMobileMenuOpen(false);

//   const navLinks = [
//     { label: "Menu", href: "#menu" },
//     { label: "Chefs", href: "#chefs" },
//     { label: "Locations", href: "#locations" },
//     { label: "Reviews", href: "#reviews" },
//   ];

//   return (
//     <motion.header
//       initial={{ y: -50, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.5, ease: "easeOut" }}
//       className="fixed top-0 left-0 right-0 px-4 lg:px-8 pt-4 z-50 font-baloo">
//       {/* Floating island navbar container */}
//       <nav className="w-full max-w-7xl mx-auto bg-slate-950/85 backdrop-blur-xl border border-amber-500/20 rounded-2xl md:rounded-full shadow-2xl shadow-amber-950/30 px-5 py-3 text-white">
//         <div className="flex items-center justify-between">
//           {/* 1. brand & kitchen live status */}
//           <Link
//             to="/"
//             className="flex items-center space-x-3 cursor-pointer group">
//             <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-orange-500 p-0.5 flex items-center justify-center shadow-lg shadow-amber-500/20">
//               <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center">
//                 <span className="text-amber-400">
//                   <SiCodechef className="w-6 h-6" />
//                 </span>
//               </div>
//             </div>

//             <div className="hidden md:flex flex-col">
//               <div className="flex items-center space-x-1">
//                 <span className="text-xl font-bold font-bricolage tracking-wide text-white">
//                   Flavor<span className="text-amber-400">Craft</span>
//                 </span>
//                 <span className="hidden md:block text-[9px] font-bricolage px-0.5 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20 uppercase">
//                   Gourmet
//                 </span>
//               </div>

//               <p className="hidden text-[10px] text-emerald-400 md:flex items-center space-x-1.5 mt-0.5">
//                 <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
//                 <span>Kitchen Open • 12m Delivery</span>
//               </p>
//             </div>
//           </Link>

//           {/* 2. Desktop navigation Links */}
//           <div className="hidden lg:flex items-center space-x-1 bg-slate-900/60 px-4 py-1.5 rounded-full border border-slate-800 text-sm text-slate-300 font-medium">
//             {navLinks?.map((link, index) => (
//               <a
//                 key={index}
//                 href={link.href}
//                 className="px-4 py-1.5 hover:text-amber-400 hover:bg-slate-800/60 rounded-full transition-all">
//                 {link.label}
//               </a>
//             ))}
//           </div>

//           {/* 3. Right side cart & Pop CTA button */}
//           <div className="hidden lg:flex items-center space-x-4">
//             {/* cart icons with badge */}
//             <button className="relative p-2.5 rounded-xl bg-slate-900/80 border-2 border-slate-800 text-slate-300 hover:text-amber-500 hover:border-amber-500/30 transition-all cursor-pointer">
//               <HiShoppingBag className="w-5 h-5" />
//               <span className="absolute -top-2.5 -right-1.5 w-5 h-5 rounded-full bg-amber-500 text-slate-950 font-bold text-[10px] flex items-center justify-center shadow-md">
//                 3
//               </span>
//             </button>

//             {/* pop color order online button */}
//             <motion.button
//               whileHover={{ scale: 1.1, rotate: [-1.5, 1.5, -1.5, 0] }}
//               whileTap={{ scale: 0.9 }}
//               transition={{ type: "spring", stiffness: 500, damping: 10 }}
//               className="px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-bold text-sm rounded-xl hover:from-amber-400 hover:to-orange-400 shadow-lg shadow-amber-500/25 transition-all cursor-pointer flex justify-center items-center gap-2 ">
//               <TbTruckDelivery className="w-5 h-5 text-slate-700 " />
//               Order Online
//             </motion.button>
//           </div>

//           {/* Mobile Menu Toggle */}
//           <div className="lg:hidden flex items-center space-x-3">
//             <button className="relative p-2 rounded-lg bg-slate-900 text-slate-300">
//               <HiShoppingBag className="w-5 h-5" />
//               <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-amber-500 text-slate-950 text-[9px] flex items-center justify-center">
//                 3
//               </span>
//             </button>
//             <button
//               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//               className="text-slate-300 hover:text-white p-2 focus:outline-none">
//               {mobileMenuOpen ? (
//                 <IoMdRestaurant className="w-7 h-7 text-amber-400" />
//               ) : (
//                 <IoIosRestaurant className="w-9 h-9 -rotate-90" />
//               )}
//             </button>
//           </div>
//         </div>

//         {/* Mobile menu dropdown (Safe mapped) */}
//         <AnimatePresence>
//           {mobileMenuOpen && (
//             <motion.div
//               initial={{ opacity: 0, height: 0, y: 15 }}
//               animate={{ opacity: 1, height: "auto", y: 0 }}
//               exit={{ opacity: 0, height: 0, y: -15 }}
//               transition={{ duration: 0.3 }}
//               className="mt-3 pt-3 pb-4 border-t border-slate-800 flex flex-col space-y-2 lg:hidden text-center font-medium">
//               {navLinks?.map((link, index) => (
//                 <a
//                   key={index}
//                   href={link.href}
//                   onClick={closeMenu}
//                   className="text-slate-300 hover:text-amber-400 py-2 rounded-lg hover:bg-slate-900 hover:border-l-4 hover:border-l-amber-400 hover:rounded-r-none transition-all duration-100">
//                   {link.label}
//                 </a>
//               ))}

//               <div className="pt-2 pb-2 border-b border-b-slate-100/20">
//                 <button
//                   className="w-full py-2.5 bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-bold rounded-xl shadow-md flex justify-center items-center gap-2"
//                   onClick={closeMenu}>
//                   <TbTruckDelivery className="w-5 h-5 text-slate-600 " />
//                   Order Online
//                 </button>
//               </div>

//               <p className="text-[10px] text-emerald-400 flex lg:hidden items-center space-x-1.5 pt-3.5 text-center mx-auto ">
//                 <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
//                 <span>Kitchen Open • 12m Delivery</span>
//               </p>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </nav>
//     </motion.header>
//   );
// }

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";

// // Icons
// import { HiShoppingBag } from "react-icons/hi2";
// import { FaBarsStaggered } from "react-icons/fa6";
// import { SiCodechef } from "react-icons/si";
// import { IoClose } from "react-icons/io5";
// import { TbTruckDelivery } from "react-icons/tb";

// export default function NavbarDesign05() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const closeMenu = () => setMobileMenuOpen(false);

//   const navLinks = [
//     { label: "Menu", href: "#menu" },
//     { label: "Chefs", href: "#chefs" },
//     { label: "Locations", href: "#locations" },
//     { label: "Reviews", href: "#reviews" },
//   ];

//   return (
//     <motion.header
//       initial={{ y: -40, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.5, ease: "easeOut" }}
//       className="fixed top-0 left-0 right-0 px-4 sm:px-8 lg:px-12 pt-4 z-50 font-baloo">
//       {/* Soft Ambient Backlight Glow */}
//       <div className="absolute inset-x-20 top-3 h-12 bg-gradient-to-r from-amber-500/20 via-orange-500/20 to-amber-500/20 blur-2xl -z-10 rounded-full"></div>

//       {/* Clean Floating Island Navbar */}
//       <nav className="w-full max-w-7xl mx-auto bg-slate-950/85 backdrop-blur-2xl border border-amber-500/20 rounded-2xl md:rounded-full shadow-2xl shadow-amber-950/40 px-6 py-3 text-white">
//         <div className="flex items-center justify-between">
//           {/* 1. Brand & Clean Status */}
//           <Link
//             to="/"
//             className="flex items-center space-x-3 cursor-pointer group">
//             <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-orange-500 p-[1.5px] flex items-center justify-center shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
//               <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
//                 <SiCodechef className="w-5 h-5 text-amber-400" />
//               </div>
//             </div>

//             <div className="flex flex-col">
//               <span className="text-xl font-bold font-bricolage tracking-wide text-white">
//                 Flavor<span className="text-amber-400">Craft</span>
//               </span>
//               <div className="flex items-center space-x-1.5 -mt-0.5">
//                 <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
//                 <span className="text-[10px] font-mono text-emerald-400">
//                   Open • 12m Delivery
//                 </span>
//               </div>
//             </div>
//           </Link>

//           {/* 2. Clean Center Navigation Links */}
//           <div className="hidden lg:flex items-center space-x-1 bg-slate-900/60 px-3 py-1 rounded-full border border-slate-800 text-sm text-slate-300 font-medium">
//             {navLinks?.map((link, index) => (
//               <a
//                 key={index}
//                 href={link.href}
//                 className="px-4 py-1.5 hover:text-amber-400 hover:bg-slate-800/80 rounded-full transition-all">
//                 {link.label}
//               </a>
//             ))}
//           </div>

//           {/* 3. Right Side Actions (Cart & CTA) */}
//           <div className="hidden lg:flex items-center space-x-3">
//             {/* Cart Icon */}
//             <button className="relative p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-amber-400 hover:border-amber-500/40 transition-all cursor-pointer">
//               <HiShoppingBag className="w-5 h-5" />
//               <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-amber-500 text-slate-950 font-bold text-[10px] flex items-center justify-center shadow-md">
//                 3
//               </span>
//             </button>

//             {/* Clean Order Button */}
//             <motion.button
//               whileHover={{ scale: 1.03 }}
//               whileTap={{ scale: 0.97 }}
//               className="px-5 py-2.5 bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-bold text-sm rounded-xl hover:from-amber-400 hover:to-orange-400 shadow-lg shadow-amber-500/20 transition-all cursor-pointer flex items-center gap-2">
//               <TbTruckDelivery className="w-4 h-4 text-slate-950" />
//               <span>Order Online</span>
//             </motion.button>
//           </div>

//           {/* Mobile Menu Toggle */}
//           <div className="lg:hidden flex items-center space-x-3">
//             <button className="relative p-2 rounded-xl bg-slate-900 text-slate-300 border border-slate-800">
//               <HiShoppingBag className="w-5 h-5" />
//               <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-amber-500 text-slate-950 text-[9px] font-bold flex items-center justify-center">
//                 3
//               </span>
//             </button>
//             <button
//               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//               className="text-slate-300 hover:text-white p-2 rounded-xl bg-slate-900 border border-slate-800 focus:outline-none">
//               {mobileMenuOpen ? (
//                 <IoClose className="w-6 h-6 text-amber-400" />
//               ) : (
//                 <FaBarsStaggered className="w-5 h-5 text-amber-400" />
//               )}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Dropdown Menu */}
//         <AnimatePresence>
//           {mobileMenuOpen && (
//             <motion.div
//               initial={{ opacity: 0, height: 0, y: 15 }}
//               animate={{ opacity: 1, height: "auto", y: 0 }}
//               exit={{ opacity: 0, height: 0, y: -15 }}
//               transition={{ duration: 0.3 }}
//               className="mt-3 pt-3 pb-4 border-t border-slate-800 flex flex-col space-y-2 lg:hidden text-center font-medium">
//               {navLinks?.map((link, index) => (
//                 <a
//                   key={index}
//                   href={link.href}
//                   onClick={closeMenu}
//                   className="text-slate-300 hover:text-amber-400 py-2 rounded-xl hover:bg-slate-900 transition-all">
//                   {link.label}
//                 </a>
//               ))}

//               <div className="pt-2">
//                 <button
//                   onClick={closeMenu}
//                   className="w-full py-2.5 bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-bold rounded-xl shadow-md flex justify-center items-center gap-2">
//                   <TbTruckDelivery className="w-5 h-5 text-slate-950" />
//                   Order Online
//                 </button>
//               </div>

//               <div className="flex items-center justify-center space-x-1.5 pt-2">
//                 <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
//                 <span className="text-[10px] font-mono text-emerald-400">
//                   Kitchen Open • 12m Delivery
//                 </span>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </nav>
//     </motion.header>
//   );
// }

// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// // import framer-motion
// import { motion, AnimatePresence } from "framer-motion";

// // import react-icons
// import { HiShoppingBag } from "react-icons/hi2";
// import { SiCodechef } from "react-icons/si";
// import { TbTruckDelivery } from "react-icons/tb";

// export default function NavbarDesign05() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const closeMenu = () => setMobileMenuOpen(false);

//   const navLinks = [
//     { label: "Menu", href: "#menu", sub: "01" },
//     { label: "Chefs", href: "#chefs", sub: "02" },
//     { label: "Locations", href: "#locations", sub: "03" },
//     { label: "Reviews", href: "#reviews", sub: "04" },
//   ];

//   // Prevent body scroll when immersive full-screen modal is open
//   useEffect(() => {
//     document.body.style.overflow = mobileMenuOpen ? "hidden" : "unset";
//   }, [mobileMenuOpen]);

//   return (
//     <>
//       <motion.header
//         initial={{ y: -50, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.5, ease: "easeOut" }}
//         className="fixed top-0 left-0 right-0 px-4 lg:px-8 pt-4 z-50 font-baloo">
//         {/* Floating island navbar container */}
//         <nav className="w-full max-w-7xl mx-auto bg-slate-950/85 backdrop-blur-xl border border-amber-500/20 rounded-2xl md:rounded-full shadow-2xl shadow-amber-950/30 px-5 py-3 text-white">
//           <div className="flex items-center justify-between">
//             {/* 1. Brand & Kitchen Live Status */}
//             <Link
//               to="/"
//               className="flex items-center space-x-3 cursor-pointer group">
//               <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-orange-500 p-0.5 flex items-center justify-center shadow-lg shadow-amber-500/20">
//                 <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center">
//                   <span className="text-amber-400">
//                     <SiCodechef className="w-6 h-6" />
//                   </span>
//                 </div>
//               </div>

//               <div className="hidden md:flex flex-col">
//                 <div className="flex items-center space-x-1.5">
//                   <span className="text-xl font-bold font-bricolage tracking-wide text-white">
//                     Flavor<span className="text-amber-400">Craft</span>
//                   </span>
//                   <span className="hidden md:block text-[9px] font-bricolage px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20 uppercase tracking-widest">
//                     Gourmet
//                   </span>
//                 </div>

//                 <p className="hidden text-[10px] text-emerald-400 md:flex items-center space-x-1.5 mt-0.5">
//                   <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
//                   <span>Kitchen Open • 12m Delivery</span>
//                 </p>
//               </div>
//             </Link>

//             {/* 2. Desktop Navigation Links */}
//             <div className="hidden lg:flex items-center space-x-1 bg-slate-900/60 px-4 py-1.5 rounded-full border border-slate-800 text-sm text-slate-300 font-medium">
//               {navLinks?.map((link, index) => (
//                 <a
//                   key={index}
//                   href={link.href}
//                   className="px-4 py-1.5 hover:text-amber-400 hover:bg-slate-800/60 rounded-full transition-all">
//                   {link.label}
//                 </a>
//               ))}
//             </div>

//             {/* 3. Right Side Cart & Pop CTA Button */}
//             <div className="hidden lg:flex items-center space-x-4">
//               {/* Cart icon with badge */}
//               <button className="relative p-2.5 rounded-xl bg-slate-900/80 border-2 border-slate-800 text-slate-300 hover:text-amber-500 hover:border-amber-500/30 transition-all cursor-pointer">
//                 <HiShoppingBag className="w-5 h-5" />
//                 <span className="absolute -top-2.5 -right-1.5 w-5 h-5 rounded-full bg-amber-500 text-slate-950 font-bold text-[10px] flex items-center justify-center shadow-md">
//                   3
//                 </span>
//               </button>

//               {/* Pop color order online button */}
//               <motion.button
//                 whileHover={{ scale: 1.05, rotate: [-1, 1, -1, 0] }}
//                 whileTap={{ scale: 0.95 }}
//                 transition={{ type: "spring", stiffness: 500, damping: 10 }}
//                 className="px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-bold text-sm rounded-xl hover:from-amber-400 hover:to-orange-400 shadow-lg shadow-amber-500/25 transition-all cursor-pointer flex justify-center items-center gap-2">
//                 <TbTruckDelivery className="w-5 h-5 text-slate-900" />
//                 Order Online
//               </motion.button>
//             </div>

//             {/* Mobile Actions: Cart & Custom Cloche Toggle Button */}
//             <div className="lg:hidden flex items-center space-x-3">
//               <button className="relative p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300">
//                 <HiShoppingBag className="w-5 h-5" />
//                 <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-amber-500 text-slate-950 text-[9px] font-bold flex items-center justify-center">
//                   3
//                 </span>
//               </button>

//               {/* Custom Animated Gourmet Cloche to 'X' Toggle */}
//               <button
//                 onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//                 aria-label="Toggle Navigation Modal"
//                 className="relative w-11 h-11 flex items-center justify-center rounded-xl border border-amber-500/30 bg-slate-900 text-amber-300 focus:outline-none hover:border-amber-400 transition-colors shadow-lg">
//                 <svg
//                   className="w-5 h-5"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="1.5"
//                   strokeLinecap="round"
//                   strokeLinejoin="round">
//                   {/* Cloche Dome Arc */}
//                   <motion.path
//                     d="M4 17C4 12.5817 7.58172 9 12 9C16.4183 9 20 12.5817 20 17H4Z"
//                     animate={
//                       mobileMenuOpen
//                         ? { scale: 0.8, opacity: 0, y: -4 }
//                         : { scale: 1, opacity: 1, y: 0 }
//                     }
//                     transition={{ duration: 0.3 }}
//                   />

//                   {/* Cloche Handle / Knob */}
//                   <motion.path
//                     d="M12 5V9"
//                     animate={
//                       mobileMenuOpen
//                         ? { scale: 0, opacity: 0 }
//                         : { scale: 1, opacity: 1 }
//                     }
//                     transition={{ duration: 0.2 }}
//                   />

//                   {/* Base Plate Line */}
//                   <motion.path
//                     d="M2 20H22"
//                     animate={
//                       mobileMenuOpen
//                         ? { scaleX: 0.7, opacity: 0, y: 4 }
//                         : { scaleX: 1, opacity: 1, y: 0 }
//                     }
//                     transition={{ duration: 0.3 }}
//                   />

//                   {/* Left X Stroke */}
//                   <motion.path
//                     d="M7 7L17 17"
//                     initial={false}
//                     animate={
//                       mobileMenuOpen
//                         ? { pathLength: 1, opacity: 1, rotate: 0 }
//                         : { pathLength: 0, opacity: 0 }
//                     }
//                     transition={{ duration: 0.3, delay: 0.1 }}
//                   />

//                   {/* Right X Stroke */}
//                   <motion.path
//                     d="M17 7L7 17"
//                     initial={false}
//                     animate={
//                       mobileMenuOpen
//                         ? { pathLength: 1, opacity: 1, rotate: 0 }
//                         : { pathLength: 0, opacity: 0 }
//                     }
//                     transition={{ duration: 0.3, delay: 0.15 }}
//                   />
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </nav>
//       </motion.header>

//       {/* Immersive Full-Screen Cinematic Modal */}
//       <AnimatePresence>
//         {mobileMenuOpen && (
//           <motion.div
//             initial={{ opacity: 0, clipPath: "circle(0% at 90% 8%)" }}
//             animate={{ opacity: 1, clipPath: "circle(150% at 90% 8%)" }}
//             exit={{ opacity: 0, clipPath: "circle(0% at 90% 8%)" }}
//             transition={{ duration: 0.6, ease: [0.77, 0, 0.175, 1] }}
//             className="fixed inset-0 z-40 bg-[#090a0f] flex flex-col justify-between px-6 sm:px-12 py-24 overflow-y-auto lg:hidden text-white font-baloo">
//             {/* Ambient Glow Accent */}
//             <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

//             {/* Modal Header Index */}
//             <div className="flex items-center justify-between border-b border-slate-800 pb-4 max-w-md mx-auto w-full">
//               <span className="text-[10px] tracking-[0.3em] text-amber-400 uppercase font-bricolage">
//                 Menu Directory
//               </span>
//               <span className="text-[10px] tracking-[0.3em] text-slate-400 uppercase font-bricolage">
//                 [ FlavorCraft Atelier ]
//               </span>
//             </div>

//             {/* Navigation Links in Modal */}
//             <div className="max-w-md mx-auto w-full flex flex-col space-y-6 my-auto py-8">
//               {navLinks?.map((link, index) => (
//                 <motion.a
//                   key={index}
//                   href={link.href}
//                   onClick={closeMenu}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: index * 0.08 + 0.15, duration: 0.4 }}
//                   className="group flex items-baseline gap-4 focus:outline-none">
//                   <span className="text-xs font-mono text-amber-400/60 tracking-widest">
//                     {link.sub}
//                   </span>
//                   <span className="font-bricolage text-3xl sm:text-4xl font-bold text-slate-200 group-hover:text-amber-400 group-hover:translate-x-3 transition-all duration-300">
//                     {link.label}
//                   </span>
//                 </motion.a>
//               ))}

//               {/* Modal Order Online CTA Button */}
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.4, duration: 0.4 }}
//                 className="pt-6">
//                 <button
//                   onClick={closeMenu}
//                   className="w-full py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-bold font-bricolage text-sm uppercase tracking-wider rounded-2xl shadow-xl shadow-amber-500/20 flex justify-center items-center gap-2 cursor-pointer hover:from-amber-400 hover:to-orange-400 transition-all">
//                   <TbTruckDelivery className="w-5 h-5 text-slate-900" />
//                   Order Online (Cart: 3 Items)
//                 </button>
//               </motion.div>
//             </div>

//             {/* Modal Footer Status */}
//             <div className="max-w-md mx-auto w-full flex flex-col items-center justify-center border-t border-slate-800 pt-6 text-center">
//               <p className="text-xs text-emerald-400 flex items-center space-x-2">
//                 <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
//                 <span>Kitchen Open • 12m Delivery Guaranteed</span>
//               </p>
//               <p className="text-[10px] tracking-[0.2em] text-slate-500 uppercase mt-3">
//                 FlavorCraft Gourmet © 2026
//               </p>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }


import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// import framer-motion
import { motion, AnimatePresence } from "framer-motion";

// import react-icons
import { HiShoppingBag } from "react-icons/hi2";
import { SiCodechef } from "react-icons/si";
import { TbTruckDelivery } from "react-icons/tb";

export default function NavbarDesign05() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const closeMenu = () => setMobileMenuOpen(false);

  const navLinks = [
    { label: "Menu", href: "#menu", code: "// 01" },
    { label: "Chefs", href: "#chefs", code: "// 02" },
    { label: "Locations", href: "#locations", code: "// 03" },
    { label: "Reviews", href: "#reviews", code: "// 04" },
  ];

  // Prevent body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : 'unset';
  }, [mobileMenuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 px-4 lg:px-8 pt-4 z-50 font-baloo"
      >
        {/* Neo-Brutalist Floating Cyber Glass Container */}
        <nav className="w-full max-w-7xl mx-auto bg-[#050508]/90 backdrop-blur-2xl border-2 border-amber-500/40 rounded-2xl shadow-[0_0_35px_rgba(245,158,11,0.12)] px-6 py-3.5 text-white">
          <div className="flex items-center justify-between">
            
            {/* 1. Brand & Cyber Status */}
            <Link
              to="/"
              className="flex items-center space-x-3.5 cursor-pointer group"
            >
              <div className="w-10 h-10 rounded-lg bg-amber-500 p-0.5 flex items-center justify-center shadow-[0_0_15px_rgba(245,158,11,0.4)] group-hover:rotate-6 transition-transform duration-300">
                <div className="w-full h-full bg-[#050508] rounded-[6px] flex items-center justify-center">
                  <span className="text-amber-400">
                    <SiCodechef className="w-5 h-5" />
                  </span>
                </div>
              </div>

              <div className="hidden md:flex flex-col">
                <div className="flex items-center space-x-2">
                  <span className="text-xl font-bold font-bricolage tracking-wider text-white">
                    Flavor<span className="text-amber-400">Craft</span>
                  </span>
                  <span className="text-[8px] font-mono px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40 uppercase tracking-widest">
                    SYS.v2
                  </span>
                </div>

                <p className="hidden text-[10px] font-mono text-emerald-400 md:flex items-center space-x-1.5 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                  <span>ONLINE • 12M DELIVERY</span>
                </p>
              </div>
            </Link>

            {/* 2. Desktop Navigation Cyber Pill */}
            <div className="hidden lg:flex items-center space-x-1 bg-[#0a0a0f] px-5 py-1.5 rounded-xl border border-amber-500/20 text-sm text-slate-300 font-medium">
              {navLinks?.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="px-4 py-1.5 hover:text-amber-400 hover:bg-amber-500/10 rounded-lg transition-all flex items-center gap-2"
                >
                  <span className="text-[10px] font-mono text-amber-500/60">{link.code}</span>
                  <span>{link.label}</span>
                </a>
              ))}
            </div>

            {/* 3. Right Side Cart & Cyber Order Button */}
            <div className="hidden lg:flex items-center space-x-4">
              {/* Cart Button */}
              <button className="relative p-2.5 rounded-xl bg-[#0a0a0f] border-2 border-amber-500/20 text-slate-300 hover:text-amber-400 hover:border-amber-500/50 transition-all cursor-pointer">
                <HiShoppingBag className="w-5 h-5" />
                <span className="absolute -top-2 -right-2 w-5 h-5 rounded-md bg-amber-500 text-slate-950 font-bold font-mono text-[10px] flex items-center justify-center shadow-md">
                  3
                </span>
              </button>

              {/* Order Online Cyber CTA */}
              <motion.button
                whileHover={{ scale: 1.04, boxShadow: "0 0 25px rgba(245,158,11,0.4)" }}
                whileTap={{ scale: 0.96 }}
                className="px-6 py-2.5 bg-amber-500 text-slate-950 font-bold font-bricolage text-sm rounded-xl hover:bg-amber-400 transition-all cursor-pointer flex justify-center items-center gap-2 border border-amber-300"
              >
                <TbTruckDelivery className="w-5 h-5 text-slate-900" />
                Order Online
              </motion.button>
            </div>

            {/* Mobile Action Controls */}
            <div className="lg:hidden flex items-center space-x-3">
              <button className="relative p-2.5 rounded-xl bg-[#0a0a0f] border border-amber-500/30 text-slate-300">
                <HiShoppingBag className="w-5 h-5" />
                <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded bg-amber-500 text-slate-950 text-[9px] font-mono font-bold flex items-center justify-center">
                  3
                </span>
              </button>

              {/* Custom Cyber HUD Crosshair to X Morph Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle Menu"
                className="relative w-11 h-11 flex items-center justify-center rounded-xl border border-amber-500/40 bg-[#0a0a0f] text-amber-400 focus:outline-none hover:border-amber-400 transition-colors shadow-lg"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {/* Cyber Reticle Square / Corners */}
                  <motion.path
                    d="M3 7V5C3 3.89543 3.89543 3 5 3H7"
                    animate={mobileMenuOpen ? { scale: 0.5, opacity: 0 } : { scale: 1, opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                  <motion.path
                    d="M17 3H19C20.1046 3 21 3.89543 21 5V7"
                    animate={mobileMenuOpen ? { scale: 0.5, opacity: 0 } : { scale: 1, opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                  <motion.path
                    d="M21 17V19C21 20.1046 20.1046 21 19 21H17"
                    animate={mobileMenuOpen ? { scale: 0.5, opacity: 0 } : { scale: 1, opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                  <motion.path
                    d="M7 21H5C3.89543 21 3 20.1046 3 19V17"
                    animate={mobileMenuOpen ? { scale: 0.5, opacity: 0 } : { scale: 1, opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />

                  {/* Center Dot */}
                  <motion.circle
                    cx="12"
                    cy="12"
                    r="2"
                    animate={mobileMenuOpen ? { scale: 0, opacity: 0 } : { scale: 1, opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />

                  {/* Left X Stroke */}
                  <motion.path
                    d="M6 6L18 18"
                    initial={false}
                    animate={
                      mobileMenuOpen
                        ? { pathLength: 1, opacity: 1, rotate: 0 }
                        : { pathLength: 0, opacity: 0 }
                    }
                    transition={{ duration: 0.3, delay: 0.1 }}
                  />

                  {/* Right X Stroke */}
                  <motion.path
                    d="M18 6L6 18"
                    initial={false}
                    animate={
                      mobileMenuOpen
                        ? { pathLength: 1, opacity: 1, rotate: 0 }
                        : { pathLength: 0, opacity: 0 }
                    }
                    transition={{ duration: 0.3, delay: 0.15 }}
                  />
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Cyberpunk Slide-Over Side Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop Blur Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
              className="fixed inset-0 z-40 bg-black/80 backdrop-blur-md lg:hidden"
            />

            {/* Slide-Over Drawer Container */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-sm bg-[#050508] border-l-2 border-amber-500/40 p-6 flex flex-col justify-between shadow-2xl lg:hidden font-baloo text-white"
            >
              {/* Drawer Top Header */}
              <div>
                <div className="flex items-center justify-between border-b border-amber-500/20 pb-4 mb-8">
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                    <span className="font-mono text-xs text-amber-400 uppercase tracking-widest">
                      NAVIGATOR // MENU
                    </span>
                  </div>
                  <button
                    onClick={closeMenu}
                    className="text-slate-400 hover:text-white font-mono text-xs uppercase border border-amber-500/30 px-2 py-1 rounded"
                  >
                    [ESC]
                  </button>
                </div>

                {/* Cyberpunk Navigation Links List */}
                <div className="flex flex-col space-y-4">
                  {navLinks?.map((link, index) => (
                    <motion.a
                      key={index}
                      href={link.href}
                      onClick={closeMenu}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.08 + 0.1 }}
                      className="group flex items-center justify-between p-3.5 rounded-xl bg-[#0a0a0f] border border-amber-500/10 hover:border-amber-500/40 hover:bg-amber-500/5 transition-all"
                    >
                      <span className="font-bricolage text-xl font-bold text-slate-200 group-hover:text-amber-400">
                        {link.label}
                      </span>
                      <span className="font-mono text-xs text-amber-500/60">
                        {link.code}
                      </span>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Drawer Bottom Actions */}
              <div className="space-y-4 pt-6 border-t border-amber-500/20">
                <button
                  onClick={closeMenu}
                  className="w-full py-3.5 bg-amber-500 text-slate-950 font-bold font-bricolage text-sm uppercase tracking-wider rounded-xl shadow-lg shadow-amber-500/20 flex justify-center items-center gap-2 cursor-pointer hover:bg-amber-400 transition-all"
                >
                  <TbTruckDelivery className="w-5 h-5 text-slate-900" />
                  Order Online (3 Items)
                </button>

                <div className="flex items-center justify-between text-[10px] font-mono text-emerald-400 bg-emerald-950/20 p-2.5 rounded-lg border border-emerald-500/20">
                  <span className="flex items-center space-x-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                    <span>KITCHEN ACTIVE</span>
                  </span>
                  <span>12M ESTIMATE</span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}