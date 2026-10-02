import React, { useState } from "react";
import { Link } from "react-router-dom";

// import framer-motions
import { motion, AnimatePresence } from "framer-motion";

// import react-icons
import { HiShoppingBag } from "react-icons/hi2";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { SiCodechef } from "react-icons/si";

export default function NavbarDesign05() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const cloaseMenu = () => setMobileMenuOpen(false);

  const navLinks = [
    { label: "Menu", href: "#menu" },
    { label: "Chefs", href: "#chefs" },
    { label: "Loctiions", href: "#loactions" },
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
                <span className="text-[9px] font-bricolage px-0.5 py-1 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20 uppercase">
                  Gourmet
                </span>
              </div>

              <p className="text-[10px] text-emerald-400 flex items-center space-x-1.5 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Kitchen Open • 12m Delivery</span>
              </p>
            </div>
          </Link>

          {/* 2. Desktop navigation Links */}
          <div className="hidden lg:flex">
            {navLinks?.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="px-4
            ">
                {link.label}
              </a>
            ))}
          </div>

          {/* 3. Right side cart & Pop CTA button */}
          <div className="hidden lg:flex">
            {/* cart icons with badge */}
            <button>
              <HiShoppingBag className="w-5 h-5" />
              <span className="absolute">3</span>
            </button>

            {/* pop color order online button */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
              className="button">
              Order Online
            </motion.button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex">
            <button className="relative">
              <HiShoppingBag className="w-5 h-5" />
              <span className="absolute">3</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-300">
              {mobileMenuOpen ? (
                <IoClose className="w-7 h-7 text-amber-400" />
              ) : (
                <FaBarsStaggered className="w-7 h-7" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown (Safe mapped) */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div>
              {navLinks?.map((link, index) => (
                <a key={{ index }} href={link.href} onClick={{ cloaseMenu }}>
                  {link.label}
                </a>
              ))}

              <div className="pt-2">
                <button className="w-full" onClick={cloaseMenu}>
                  Order Online
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
