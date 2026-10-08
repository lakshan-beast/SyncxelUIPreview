// import React, { useState, useEffect, useRef } from "react";
// import {
//   FaCrown,
//   FaGem,
//   FaChevronRight,
//   FaCompass,
//   FaKey,
//   FaExternalLinkAlt,
// } from "react-icons/fa";

// export default function UltraLuxuryCarHero() {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [isHovered, setIsHovered] = useState(false);
//   const heroRef = useRef(null);

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       if (heroRef.current) {
//         const rect = heroRef.current.getBoundingClientRect();
//         setMousePosition({
//           x: e.clientX - rect.left,
//           y: e.clientY - rect.top,
//         });
//       }
//     };

//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   return (
//     <div
//       ref={heroRef}
//       className="relative min-h-screen w-full bg-[#08090C] text-[#E5E5E5] overflow-hidden font-sans selection:bg-[#C5A059]/30 selection:text-[#F3E5AB]">
//       {/* Subtle Warm Ambient Gold Spotlight */}
//       <div
//         className="pointer-events-none absolute -inset-px opacity-30 transition-opacity duration-500"
//         style={{
//           background: `radial-gradient(900px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(197, 160, 89, 0.1), transparent 65%)`,
//         }}
//       />

//       {/* Minimalist Fine Grid / Pinstripe Pattern */}
//       <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

//       {/* Ultra-Luxury Header */}
//       <header className="relative z-50 flex items-center justify-between px-8 lg:px-24 py-8 border-b border-[#C5A059]/10 backdrop-blur-md">
//         <div className="flex items-center gap-3 group cursor-pointer">
//           <div className="relative flex items-center justify-center w-11 h-11 rounded-none border border-[#C5A059]/40 bg-gradient-to-br from-[#C5A059]/10 to-transparent group-hover:border-[#C5A059] transition-colors duration-500">
//             <FaCrown className="w-5 h-5 text-[#C5A059] transition-transform duration-500 group-hover:scale-110" />
//           </div>
//           <span className="text-2xl font-serif tracking-[0.3em] font-light bg-gradient-to-r from-white via-[#F3E5AB] to-[#C5A059] bg-clip-text text-transparent">
//             VANDERBILT
//           </span>
//         </div>

//         <nav className="hidden md:flex items-center gap-12 text-xs font-medium tracking-[0.25em] uppercase text-[#A3A3A3]">
//           <a
//             href="#atelier"
//             className="hover:text-[#C5A059] transition-colors duration-300">
//             Atelier
//           </a>
//           <a
//             href="#bespoke"
//             className="hover:text-[#C5A059] transition-colors duration-300">
//             Bespoke
//           </a>
//           <a
//             href="#heritage"
//             className="hover:text-[#C5A059] transition-colors duration-300">
//             Heritage
//           </a>
//           <a
//             href="#commission"
//             className="hover:text-[#C5A059] transition-colors duration-300">
//             Commission
//           </a>
//         </nav>

//         <div className="flex items-center gap-5">
//           <button className="hidden sm:inline-flex items-center gap-2 px-6 py-2.5 rounded-none text-xs font-medium tracking-[0.2em] uppercase bg-transparent hover:bg-[#C5A059]/10 text-[#E5E5E5] border border-[#C5A059]/30 transition-all duration-300">
//             <span>Configurator</span>
//             <FaCompass className="w-3.5 h-3.5 text-[#C5A059]" />
//           </button>
//           <button className="relative group px-7 py-2.5 rounded-none text-xs font-semibold tracking-[0.2em] uppercase overflow-hidden bg-[#C5A059] text-[#08090C] transition-all duration-300 hover:bg-[#F3E5AB] hover:shadow-[0_0_30px_rgba(197,160,89,0.3)]">
//             <span className="relative z-10 flex items-center gap-2 font-bold">
//               Inquire
//               <FaExternalLinkAlt className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
//             </span>
//           </button>
//         </div>
//       </header>

//       {/* Hero Content Section */}
//       <main className="relative z-10 max-w-7xl mx-auto px-6 lg:px-24 pt-20 pb-32 flex flex-col items-center lg:items-start">
//         {/* Bespoke Series Badge */}
//         <div className="inline-flex items-center gap-3 px-5 py-2 rounded-none bg-[#12141A]/85 border border-[#C5A059]/30 backdrop-blur-xl mb-8 shadow-2xl">
//           <span className="relative flex h-2 w-2">
//             <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C5A059] opacity-75"></span>
//             <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C5A059]"></span>
//           </span>
//           <span className="text-[11px] font-medium tracking-[0.25em] uppercase text-[#F3E5AB]">
//             Coachbuilt Series 2026 — Allocation Open
//           </span>
//         </div>

//         {/* Main Headline & Description */}
//         <div className="grid lg:grid-cols-12 gap-12 items-center w-full">
//           <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
//             <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-light tracking-wide leading-[1.15] mb-6">
//               SILENT GRACE. <br />
//               <span className="bg-gradient-to-r from-[#F3E5AB] via-[#C5A059] to-[#9A7B38] bg-clip-text text-transparent italic font-normal">
//                 Uncompromising
//               </span>{" "}
//               <br />
//               CRAFT.
//             </h1>

//             <p className="text-[#A3A3A3] text-sm sm:text-base lg:text-lg max-w-xl font-light leading-relaxed mb-10 tracking-wide font-sans">
//               The absolute zenith of bespoke automotive artistry. Hand-hammered
//               aluminum coachwork, peerless artisanal leatherwork, and effortless
//               silent propulsion.
//             </p>

//             {/* Action Buttons */}
//             <div className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto">
//               <button
//                 onMouseEnter={() => setIsHovered(true)}
//                 onMouseLeave={() => setIsHovered(false)}
//                 className="w-full sm:w-auto group relative px-8 py-4 rounded-none font-medium text-xs tracking-[0.25em] uppercase bg-[#C5A059] text-[#08090C] transition-all duration-300 hover:bg-[#F3E5AB] hover:shadow-[0_0_40px_rgba(197,160,89,0.3)] flex items-center justify-center gap-3">
//                 <span>Reserve Commission</span>
//                 <FaChevronRight
//                   className={`w-3.5 h-3.5 transition-transform duration-300 ${isHovered ? "translate-x-1" : ""}`}
//                 />
//               </button>

//               <button className="w-full sm:w-auto px-8 py-4 rounded-none font-medium text-xs tracking-[0.25em] uppercase bg-[#12141A]/60 hover:bg-[#1A1D24] text-[#E5E5E5] border border-white/10 hover:border-[#C5A059]/40 transition-all duration-300 backdrop-blur-md flex items-center justify-center gap-3 group">
//                 <div className="w-5 h-5 rounded-none bg-[#C5A059]/20 flex items-center justify-center text-[#C5A059]">
//                   <FaKey className="w-2.5 h-2.5" />
//                 </div>
//                 <span>Private Viewing</span>
//               </button>
//             </div>
//           </div>

//           {/* Bespoke Vehicle Showcase Card */}
//           <div className="lg:col-span-5 relative flex justify-center items-center">
//             <div className="relative w-full max-w-md aspect-[4/5] rounded-none bg-gradient-to-b from-[#12141A] to-[#0A0B0E] border border-[#C5A059]/20 p-8 shadow-2xl backdrop-blur-2xl group overflow-hidden">
//               {/* Subtle corner luxury ornament */}
//               <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#C5A059]/15 to-transparent pointer-events-none" />

//               <div className="relative z-10 flex flex-col justify-between h-full">
//                 <div className="flex justify-between items-start">
//                   <div>
//                     <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#C5A059] block mb-1">
//                       Commission #001
//                     </span>
//                     <h3 className="text-xl font-serif tracking-wider text-white">
//                       THE GRAND COUPE
//                     </h3>
//                   </div>
//                   <div className="p-2.5 rounded-none bg-[#C5A059]/10 border border-[#C5A059]/30 text-[#C5A059]">
//                     <FaGem className="w-4 h-4" />
//                   </div>
//                 </div>

//                 {/* Elegant Vehicle Silhouette / Placeholder representation */}
//                 <div className="my-6 relative flex items-center justify-center py-10 border-y border-white/5">
//                   <div className="absolute inset-0 flex items-center justify-center opacity-10 font-serif text-6xl tracking-widest text-[#C5A059]">
//                     V12
//                   </div>
//                   <div className="relative text-center">
//                     <span className="text-xs uppercase tracking-[0.3em] text-[#A3A3A3] block mb-2">
//                       Handcrafted Atelier
//                     </span>
//                     <span className="text-2xl font-serif text-[#F3E5AB] tracking-widest">
//                       BESPOKE SPECIFICATION
//                     </span>
//                   </div>
//                 </div>

//                 {/* Card Specs Footer */}
//                 <div className="grid grid-cols-2 gap-4 pt-2">
//                   <div>
//                     <span className="text-[10px] text-[#737373] tracking-widest uppercase block">
//                       Crafting Hours
//                     </span>
//                     <span className="text-sm font-serif font-light text-white">
//                       450 Hours
//                     </span>
//                   </div>
//                   <div>
//                     <span className="text-[10px] text-[#737373] tracking-widest uppercase block">
//                       Global Allocation
//                     </span>
//                     <span className="text-sm font-serif font-light text-[#C5A059]">
//                       25 Units Only
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Bespoke Ticker / Stats */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full mt-24 pt-12 border-t border-[#C5A059]/15">
//           {[
//             { label: "Hand-Stitched Leather", value: "100%" },
//             { label: "Bespoke Color Palette", value: "Unlimited" },
//             { label: "Acoustic Insulation", value: "Zero dB" },
//             { label: "Atelier Heritage", value: "1924" },
//           ].map((stat, index) => (
//             <div key={index} className="flex flex-col">
//               <span className="text-2xl sm:text-3xl font-serif font-light tracking-wide text-[#F3E5AB] mb-1">
//                 {stat.value}
//               </span>
//               <span className="text-xs uppercase tracking-[0.2em] text-[#737373] font-medium">
//                 {stat.label}
//               </span>
//             </div>
//           ))}
//         </div>
//       </main>
//     </div>
//   );
// }

import React, { useState, useEffect, useRef } from "react";
import {
  FaBolt,
  FaTachometerAlt,
  FaShieldAlt,
  FaPlay,
  FaChevronRight,
  FaCompass,
  FaFire,
} from "react-icons/fa";

export default function CinematicSupercarHero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [mode, setMode] = useState("track");
  const heroRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const modeData = {
    gt: {
      speed: "340 km/h",
      power: "1,200 HP",
      torque: "1,450 Nm",
      accel: "2.4s",
      desc: "Optimized for cross-continental luxury touring with active damping.",
    },
    track: {
      speed: "390 km/h",
      power: "1,650 HP",
      torque: "1,780 Nm",
      accel: "1.9s",
      desc: "Unleashed downforce, aggressive aero-vectoring, and rigid suspension.",
    },
    vmax: {
      speed: "445 km/h",
      power: "2,020 HP",
      torque: "2,100 Nm",
      accel: "1.7s",
      desc: "Low-drag monocoque configuration for absolute top-speed velocity.",
    },
  };

  const current = modeData[mode];

  return (
    <div
      ref={heroRef}
      className="relative min-h-screen w-full bg-[#060709] text-white overflow-hidden font-sans selection:bg-rose-500/30 selection:text-rose-200 flex flex-col justify-between px-6 lg:px-20 py-10">
      {/* Cinematic Ambient Glow */}
      <div
        className="pointer-events-none absolute -inset-px opacity-30 transition-opacity duration-500"
        style={{
          background: `radial-gradient(1000px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(244, 63, 94, 0.15), transparent 65%)`,
        }}
      />

      {/* Carbon Grid Texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Top Floating Hero Badge (No Navbar) */}
      <div className="relative z-20 flex items-center justify-between w-full max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-rose-500/20 to-rose-900/10 border border-rose-500/40 flex items-center justify-center shadow-[0_0_20px_rgba(244,63,94,0.3)]">
            <FaFire className="w-4 h-4 text-rose-500 animate-pulse" />
          </div>
          <span className="text-xs font-mono tracking-[0.3em] uppercase text-zinc-400">
            PROJECT // VULCAN // 2026
          </span>
        </div>

        <div className="hidden sm:flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900/80 border border-white/10 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping"></span>
          <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-rose-400">
            Prototype Aerodynamics Active
          </span>
        </div>
      </div>

      {/* Central Immersive Hero Section */}
      <main className="relative z-20 max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-10 items-center my-auto py-12">
        {/* Left: Aggressive Supercar Typography & Mode Selector */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tighter uppercase leading-[0.95] mb-6">
            APEX <br />
            <span className="bg-gradient-to-r from-rose-400 via-rose-500 to-amber-500 bg-clip-text text-transparent drop-shadow-[0_0_50px_rgba(244,63,94,0.3)]">
              PREDATOR
            </span>
          </h1>

          <p className="text-zinc-400 text-sm sm:text-base max-w-xl font-normal leading-relaxed mb-8 tracking-wide">
            {current.desc}
          </p>

          {/* Interactive Mode Selector (GT / Track / VMAX) */}
          <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-zinc-900/90 border border-white/10 backdrop-blur-xl mb-8 w-full max-w-md">
            {[
              { id: "gt", label: "Grand Tourer" },
              { id: "track", label: "Track Attack" },
              { id: "vmax", label: "VMAX Aero" },
            ].map((m) => (
              <button
                key={m.id}
                onClick={() => setMode(m.id)}
                className={`flex-1 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  mode === m.id
                    ? "bg-gradient-to-r from-rose-500 to-amber-500 text-zinc-950 shadow-[0_0_25px_rgba(244,63,94,0.4)]"
                    : "text-zinc-400 hover:text-white"
                }`}>
                {m.label}
              </button>
            ))}
          </div>

          {/* Action Triggers */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <button className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-xs tracking-[0.2em] uppercase bg-gradient-to-r from-rose-500 to-amber-500 text-zinc-950 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(244,63,94,0.4)] flex items-center justify-center gap-3">
              <span>Secure Allocation</span>
              <FaChevronRight className="w-3.5 h-3.5" />
            </button>

            <button className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-xs tracking-[0.2em] uppercase bg-zinc-900/60 hover:bg-zinc-800 text-zinc-200 border border-white/10 hover:border-rose-500/40 transition-all duration-300 backdrop-blur-md flex items-center justify-center gap-3 group">
              <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-rose-500 group-hover:text-zinc-950 transition-colors">
                <FaPlay className="w-2.5 h-2.5 fill-current ml-0.5" />
              </div>
              <span>Soundtrack Teaser</span>
            </button>
          </div>
        </div>

        {/* Right: Cinematic Supercar Visual & Live Telemetry HUD */}
        <div className="lg:col-span-5 relative flex flex-col items-center">
          <div className="relative w-full aspect-[4/3] rounded-3xl bg-gradient-to-b from-zinc-900/90 to-zinc-950 border border-white/10 overflow-hidden shadow-2xl group flex items-center justify-center">
            {/* Ambient Underglow */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#060709] via-transparent to-transparent z-10" />
            <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-4/5 h-28 bg-rose-500/20 rounded-full blur-3xl pointer-events-none group-hover:bg-rose-500/35 transition-all duration-500" />

            {/* High-End Supercar Image */}
            <img
              src="https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?q=80&w=1200&auto=format&fit=crop"
              alt="Supercar Cinematic View"
              className="relative z-0 w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 opacity-90"
            />

            {/* Floating Live Telemetry Badge */}
            <div className="absolute top-4 right-4 z-20 px-3 py-1.5 rounded-lg bg-black/70 border border-rose-500/30 backdrop-blur-md flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping"></span>
              <span className="text-[10px] font-mono tracking-widest text-rose-400 uppercase">
                Telemetry Linked
              </span>
            </div>
          </div>

          {/* Dynamic Specs Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full mt-4">
            {[
              { label: "Top Speed", value: current.speed },
              { label: "Max Power", value: current.power },
              { label: "Torque", value: current.torque },
              { label: "0-100 km/h", value: current.accel },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-2xl bg-zinc-900/80 border border-white/10 backdrop-blur-xl flex flex-col justify-between hover:border-rose-500/40 transition-all duration-300">
                <span className="text-[10px] uppercase tracking-wider text-zinc-400 font-medium mb-1">
                  {item.label}
                </span>
                <span className="text-base font-extrabold tracking-tight font-mono text-white">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Bottom Minimalist Footer bar inside Hero */}
      <footer className="relative z-20 max-w-7xl mx-auto w-full pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 tracking-wider">
        <span>HANDCRAFTED IN MODENA // CARBON MONOCOQUE CHASSIS</span>
        <span className="font-mono mt-2 sm:mt-0">
          ALLOCATION LIMIT: 30 VEHICLES WORLDWIDE
        </span>
      </footer>
    </div>
  );
}
