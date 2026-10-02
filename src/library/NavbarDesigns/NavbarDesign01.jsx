// import React from "react";

// const brandData = {
//   brand: {
//     name: "VoltFleet AI",
//     version: "EV Core 3.0",
//     statusText: "Telemtry Active",
//   },
// };

// export default function NavbarDesign03() {
//   return (
//     <header className="flex" id="header">
//       <div className="bg-slate-500">
//         <h2>{brandData.name}</h2>
//       </div>
//     </header>
//   );
// }

import React, { useState } from "react";
// import {  FaX } from "react-icons/fa";
// import { FaMenu } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";
// < />

import { AiOutlineMenu } from "react-icons/ai";
// < />
import { IoClose } from "react-icons/io5";
// < />

export default function NavbarStyle1() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-950/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-500 to-violet-500 flex items-center justify-center shadow-lg shadow-indigo-500/30">
              <HiSparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white tracking-tight">
              Sync<span className="text-indigo-400">Xel</span>
            </span>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#components"
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
              Components
            </a>
            <a
              href="#packs"
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
              UI Packs
            </a>
            <a
              href="#pricing"
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
              Pricing
            </a>
            <a
              href="#docs"
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
              Docs
            </a>
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <button className="text-sm font-medium text-slate-300 hover:text-white px-3 py-2 transition-colors">
              Sign In
            </button>
            <button className="text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-500 px-4 py-2 rounded-lg shadow-lg shadow-indigo-600/20 transition-all">
              Get Access
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white p-2 focus:outline-none">
              {isOpen ? (
                <IoClose className="w-6 h-6" />
              ) : (
                <AiOutlineMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden border-b border-white/10 bg-slate-950/95 backdrop-blur-lg px-4 pt-2 pb-6 space-y-3">
          <a
            href="#components"
            className="block text-base font-medium text-slate-300 hover:text-white py-2">
            Components
          </a>
          <a
            href="#packs"
            className="block text-base font-medium text-slate-300 hover:text-white py-2">
            UI Packs
          </a>
          <a
            href="#pricing"
            className="block text-base font-medium text-slate-300 hover:text-white py-2">
            Pricing
          </a>
          <a
            href="#docs"
            className="block text-base font-medium text-slate-300 hover:text-white py-2">
            Docs
          </a>
          <div className="pt-4 flex flex-col gap-3 border-t border-white/10">
            <button className="w-full text-center text-sm font-medium text-slate-300 hover:text-white py-2">
              Sign In
            </button>
            <button className="w-full text-center text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-500 py-2.5 rounded-lg shadow-lg shadow-indigo-600/20">
              Get Access
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
