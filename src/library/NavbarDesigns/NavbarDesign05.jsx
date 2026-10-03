import React, { useState } from "react";
import { Link } from "react-router-dom";

// import framer-motions
import { motion, AnimatePresence } from "framer-motion";

// import react-icons
import { HiShoppingBag } from "react-icons/hi2";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { SiCodechef } from "react-icons/si";
import { IoMdRestaurant } from "react-icons/io";
import { IoIosRestaurant } from "react-icons/io";
import { TbTruckDelivery } from "react-icons/tb";
// < />
// < />

export default function NavbarDesign05() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const closeMenu = () => setMobileMenuOpen(false);

  const navLinks = [
    { label: "Menu", href: "#menu" },
    { label: "Chefs", href: "#chefs" },
    { label: "Locations", href: "#locations" },
    { label: "Reviews", href: "#reviews" },
  ];

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 px-4 lg:px-8 pt-4 z-50 font-baloo">
      {/* Floating island navbar container */}
      <nav className="w-full max-w-7xl mx-auto bg-slate-950/85 backdrop-blur-xl border border-amber-500/20 rounded-2xl md:rounded-full shadow-2xl shadow-amber-950/30 px-5 py-3 text-white">
        <div className="flex items-center justify-between">
          {/* 1. brand & kitchen live status */}
          <Link
            to="/"
            className="flex items-center space-x-3 cursor-pointer group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-orange-500 p-0.5 flex items-center justify-center shadow-lg shadow-amber-500/20">
              <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center">
                <span className="text-amber-400">
                  <SiCodechef className="w-6 h-6" />
                </span>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center space-x-1">
                <span className="text-xl font-bold font-bricolage tracking-wide text-white">
                  Flavor<span className="text-amber-400">Craft</span>
                </span>
                <span className="hidden md:block text-[9px] font-bricolage px-0.5 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20 uppercase">
                  Gourmet
                </span>
              </div>

              <p className="hidden text-[10px] text-emerald-400 md:flex items-center space-x-1.5 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Kitchen Open • 12m Delivery</span>
              </p>
            </div>
          </Link>

          {/* 2. Desktop navigation Links */}
          <div className="hidden lg:flex items-center space-x-1 bg-slate-900/60 px-4 py-1.5 rounded-full border border-slate-800 text-sm text-slate-300 font-medium">
            {navLinks?.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="px-4 py-1.5 hover:text-amber-400 hover:bg-slate-800/60 rounded-full transition-all">
                {link.label}
              </a>
            ))}
          </div>

          {/* 3. Right side cart & Pop CTA button */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* cart icons with badge */}
            <button className="relative p-2.5 rounded-xl bg-slate-900/80 border-2 border-slate-800 text-slate-300 hover:text-amber-500 hover:border-amber-500/30 transition-all cursor-pointer">
              <HiShoppingBag className="w-5 h-5" />
              <span className="absolute -top-2.5 -right-1.5 w-5 h-5 rounded-full bg-amber-500 text-slate-950 font-bold text-[10px] flex items-center justify-center shadow-md">
                3
              </span>
            </button>

            {/* pop color order online button */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: [-1.5, 1.5, -1.5, 0] }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 500, damping: 10 }}
              className="px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-bold text-sm rounded-xl hover:from-amber-400 hover:to-orange-400 shadow-lg shadow-amber-500/25 transition-all cursor-pointer flex justify-center items-center gap-2 ">
              <TbTruckDelivery className="w-5 h-5 text-slate-700 " />
              Order Online
            </motion.button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center space-x-3">
            <button className="relative p-2 rounded-lg bg-slate-900 text-slate-300">
              <HiShoppingBag className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-amber-500 text-slate-950 text-[9px] flex items-center justify-center">
                3
              </span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-300 hover:text-white p-2 focus:outline-none">
              {mobileMenuOpen ? (
                <IoMdRestaurant className="w-7 h-7 text-amber-400" />
              ) : (
                <IoIosRestaurant className="w-9 h-9 -rotate-90" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown (Safe mapped) */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: 15 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="mt-3 pt-3 pb-4 border-t border-slate-800 flex flex-col space-y-2 lg:hidden text-center font-medium">
              {navLinks?.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  onClick={closeMenu}
                  className="text-slate-300 hover:text-amber-400 py-2 rounded-lg hover:bg-slate-900 hover:border-l-4 hover:border-l-amber-400 hover:rounded-r-none transition-all duration-100">
                  {link.label}
                </a>
              ))}

              <div className="pt-2 pb-2 border-b border-b-slate-100/20">
                <button
                  className="w-full py-2.5 bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-bold rounded-xl shadow-md flex justify-center items-center gap-2"
                  onClick={closeMenu}>
                  <TbTruckDelivery className="w-5 h-5 text-slate-600 " />
                  Order Online
                </button>
              </div>

              <p className="text-[10px] text-emerald-400 flex lg:hidden items-center space-x-1.5 pt-3.5 text-center mx-auto ">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                <span>Kitchen Open • 12m Delivery</span>
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}

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
