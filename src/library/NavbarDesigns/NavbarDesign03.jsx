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

import React from "react";
import { GiElectricWhip } from "react-icons/gi";

// 1. Data Object එක
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

// 2. Main Navbar Component එක
export default function NavbarDesign03() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#090d16]/80 backdrop-blur-md border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* A. Brand Logo සහ Status Badge එක */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-emerald-400 p-0.5 flex items-center justify-center shadow-lg shadow-cyan-500/20">
            <div className="w-full h-full bg-[#090d16] rounded-[11px] flex items-center justify-center">
              <span className="text-cyan-400 font-bold text-lg">
                <GiElectricWhip className="w-6 h-6" />
              </span>
            </div>
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-white font-semibold tracking-wide text-base ">
                {evMobilityNavData.brand.name}
              </span>
              <span className="hidden md:block text-[10px] font-mono px-1.5 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                {evMobilityNavData.brand.version}
              </span>
            </div>
            <p className="text-xs text-slate-400 flex items-center space-x-1.5 mt-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>{evMobilityNavData.brand.statusText}</span>
            </p>
          </div>
        </div>

        {/* B. Navigation Links (.map එක හරහා) */}
        <nav className="hidden md:flex items-center space-x-1 bg-slate-900/50 p-1.5 rounded-full border border-slate-800/80">
          {evMobilityNavData.navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="px-4 py-2 text-sm font-bricolage font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 rounded-full transition-all duration-200 flex items-center space-x-2">
              <span>{link.label}</span>
              {link.badge && (
                <span className="relative -top-3.5 right-2  text-[10px] font-mono px-1.5 py-0.2 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  {link.badge}
                </span>
              )}
            </a>
          ))}
        </nav>

        {/* C. Right Side Actions & Live Status */}
        <div className="flex items-center space-x-4">
          <div className="hidden lg:flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs font-mono text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>{evMobilityNavData.actions.activeVehicles}</span>
          </div>

          <button className="px-5 py-2.5 font-sansation rounded-xl font-medium text-sm text-slate-950 bg-gradient-to-r from-cyan-400 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 shadow-lg shadow-cyan-500/25 transition-all duration-200 transform hover:-translate-y-0.5">
            {evMobilityNavData.actions.primaryText}
          </button>
        </div>
      </div>
    </header>
  );
}
