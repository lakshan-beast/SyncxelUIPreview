// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";

// export default function LocalizedMapFooter() {
//   const [time, setTime] = useState("");

//   // Live Colombo/Sri Lanka Time Tracker
//   useEffect(() => {
//     const updateTime = () => {
//       const now = new Date();
//       const options = {
//         timeZone: "Asia/Colombo",
//         hour: "2-digit",
//         minute: "2-digit",
//         second: "2-digit",
//         hour12: true,
//       };
//       setTime(new Intl.DateTimeFormat([], options).format(now));
//     };
//     updateTime();
//     const interval = setInterval(updateTime, 1000);
//     return () => clearInterval(interval);
//   }, []);

//   const scrollTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   return (
//     <footer className="w-full bg-[#050507] text-neutral-300 border-t border-neutral-800/80 px-6 md:px-16 pt-20 pb-12 font-sans relative overflow-hidden selection:bg-neutral-800 selection:text-white">
//       {/* Ambient map glow effect */}
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-gradient-to-r from-emerald-500/5 via-sky-500/5 to-amber-500/5 blur-[150px] pointer-events-none" />

//       <div className="max-w-7xl mx-auto relative z-10 space-y-8">
//         {/* BENTO GRID FOOTER LAYOUT */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
//           {/* 1. MAP & TELEMETRY NODE CARD (Span 5) */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5 }}
//             className="lg:col-span-5 bg-[#0b0b10] border border-neutral-800/80 rounded-3xl p-7 flex flex-col justify-between relative overflow-hidden group shadow-2xl">
//             {/* Simulated Dark Map Grid Background Lines */}
//             <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f2e15_1px,transparent_1px),linear-gradient(to_bottom,#1f1f2e15_1px,transparent_1px)] bg-[size:2rem_2rem] pointer-events-none" />

//             {/* Top Node Status */}
//             <div className="relative z-10 flex items-center justify-between pb-6 border-b border-neutral-800/60">
//               <div className="flex items-center space-x-2.5">
//                 <span className="relative flex h-3 w-3">
//                   <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
//                   <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
//                 </span>
//                 <span className="font-mono text-xs text-emerald-400 font-semibold tracking-wider">
//                   NODE_ACTIVE // LK-08
//                 </span>
//               </div>
//               <span className="font-mono text-xs text-neutral-400 bg-neutral-900 px-3 py-1 rounded-full border border-neutral-800">
//                 {time || "Loading..."}
//               </span>
//             </div>

//             {/* Center: Location Pin & Coordinates Graphic */}
//             <div className="relative z-10 py-10 space-y-3">
//               <div className="inline-flex items-center space-x-2 text-xs font-mono text-sky-400 bg-sky-500/10 px-3 py-1 rounded-lg border border-sky-500/20">
//                 {/* Map Pin SVG */}
//                 <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
//                   <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
//                 </svg>
//                 <span>Kandy, Sri Lanka 🇱🇰</span>
//               </div>
//               <h3 className="text-xl font-bold text-white tracking-tight">
//                 Operating from the Central Highlands
//               </h3>
//               <p className="text-xs text-neutral-400 font-mono">
//                 GPS: 7.2906° N, 80.6337° E | GMT+5:30
//               </p>
//             </div>

//             {/* Bottom Localized Tag */}
//             <div className="relative z-10 pt-4 border-t border-neutral-800/60 flex items-center justify-between text-xs text-neutral-400">
//               <span>Available for global & local projects</span>
//               <span className="font-mono text-neutral-400">2026/2027</span>
//             </div>
//           </motion.div>

//           {/* 2. NAVIGATION & RESOURCES (Span 4) */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5, delay: 0.1 }}
//             className="lg:col-span-4 bg-[#0b0b10] border border-neutral-800/80 rounded-3xl p-7 flex flex-col justify-between shadow-2xl">
//             <div className="space-y-6">
//               <span className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest block">
//                 {"// directory_structure"}
//               </span>

//               <div className="grid grid-cols-2 gap-6">
//                 <div className="space-y-3">
//                   <span className="text-xs font-semibold text-white uppercase tracking-wider block">
//                     Navigation
//                   </span>
//                   <ul className="space-y-2 text-xs text-neutral-400">
//                     <li>
//                       <a
//                         href="#about"
//                         className="hover:text-white transition-colors">
//                         Studio Profile
//                       </a>
//                     </li>
//                     <li>
//                       <a
//                         href="#portfolio"
//                         className="hover:text-white transition-colors">
//                         Selected Works
//                       </a>
//                     </li>
//                     <li>
//                       <a
//                         href="#services"
//                         className="hover:text-white transition-colors">
//                         Capabilities
//                       </a>
//                     </li>
//                     <li>
//                       <a
//                         href="#contact"
//                         className="hover:text-white transition-colors">
//                         Direct Inquiry
//                       </a>
//                     </li>
//                   </ul>
//                 </div>

//                 <div className="space-y-3">
//                   <span className="text-xs font-semibold text-white uppercase tracking-wider block">
//                     Ecosystem
//                   </span>
//                   <ul className="space-y-2 text-xs text-neutral-400">
//                     <li>
//                       <a
//                         href="#"
//                         className="hover:text-white transition-colors">
//                         Design System
//                       </a>
//                     </li>
//                     <li>
//                       <a
//                         href="#"
//                         className="hover:text-white transition-colors">
//                         UI Kit Components
//                       </a>
//                     </li>
//                     <li>
//                       <a
//                         href="#"
//                         className="hover:text-white transition-colors">
//                         Privacy Policy
//                       </a>
//                     </li>
//                     <li>
//                       <a
//                         href="#"
//                         className="hover:text-white transition-colors">
//                         Terms of Service
//                       </a>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>

//             <div className="pt-6 mt-6 border-t border-neutral-800/60 text-xs text-neutral-400 font-mono">
//               <span>SECURE_CONNECTION: TLS_1.3</span>
//             </div>
//           </motion.div>

//           {/* 3. QUICK ACTION & SOCIAL INQUIRY CARD (Span 3) */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             className="lg:col-span-3 bg-[#0b0b10] border border-neutral-800/80 rounded-3xl p-7 flex flex-col justify-between shadow-2xl">
//             <div className="space-y-4">
//               <span className="font-mono text-[10px] text-sky-400 uppercase tracking-widest block">
//                 {"// instant_connect"}
//               </span>
//               <h4 className="text-lg font-semibold text-white tracking-tight">
//                 Let's build your next milestone.
//               </h4>
//               <p className="text-xs text-neutral-400 leading-relaxed font-light">
//                 Direct engagement via secure messaging or studio email channels.
//               </p>
//             </div>

//             <div className="space-y-3 pt-6">
//               <a
//                 href="https://wa.me/94770000000?text=Hi%20Lakshan%2C%20I%27d%20like%20to%20discuss%20a%20project!"
//                 target="_blank"
//                 rel="noreferrer"
//                 className="w-full bg-white hover:bg-neutral-200 text-black text-xs font-semibold py-3 px-4 rounded-xl transition-all flex items-center justify-center space-x-2 shadow-lg">
//                 {/* WhatsApp Chat Icon SVG */}
//                 <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
//                   <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.124-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
//                 </svg>
//                 <span>WhatsApp Inquiry</span>
//               </a>

//               <a
//                 href="mailto:lakshan@domain.com"
//                 className="w-full bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-neutral-300 text-xs font-semibold py-3 px-4 rounded-xl transition-all flex items-center justify-center space-x-2">
//                 {/* Envelope Mail Icon SVG */}
//                 <svg
//                   className="w-4 h-4 stroke-current"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   strokeWidth="2">
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
//                   />
//                 </svg>
//                 <span>lakshan@domain.com</span>
//               </a>
//             </div>
//           </motion.div>
//         </div>

//         {/* BOTTOM METADATA & BACK TO TOP BAR */}
//         <div className="pt-6 border-t border-neutral-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-400">
//           <p>
//             &copy; {new Date().getFullYear()} SyncXel Studio. All rights
//             reserved. Built in Sri Lanka.
//           </p>

//           <div className="flex items-center space-x-6">
//             <span className="text-emerald-400">[SYSTEM_ONLINE]</span>

//             <button
//               onClick={scrollTop}
//               className="flex items-center space-x-2 text-neutral-400 hover:text-white transition-colors group cursor-pointer">
//               <span>BACK_TO_TOP</span>
//               <div className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 group-hover:border-neutral-700 transition-colors">
//                 <svg
//                   className="w-3 h-3 stroke-current transition-transform group-hover:-translate-y-0.5"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   strokeWidth="2.5">
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M5 15l7-7 7 7"
//                   />
//                 </svg>
//               </div>
//             </button>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }


import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function RefinedLocalizedFooter() {
  const [localTime, setLocalTime] = useState("");

  // Live Colombo, Sri Lanka Time Tracker
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: "Asia/Colombo",
        hour: "numeric",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setLocalTime(new Intl.DateTimeFormat([], options).format(now));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#0B0F19] text-slate-300 pt-28 pb-16 px-6 md:px-16 lg:px-24 relative overflow-hidden font-sans border-t border-slate-800/60">
      
      {/* Luxurious Ambient Background Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[300px] bg-gradient-to-br from-amber-500/10 via-indigo-600/10 to-transparent blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[250px] bg-gradient-to-tl from-sky-500/10 via-purple-600/10 to-transparent blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-20">
        
        {/* TOP SECTION: ASYMMETRIC EDITORIAL LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Brand Story & Studio Vision (Span 7) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="inline-flex items-center space-x-2 text-xs font-medium tracking-wide text-amber-400 bg-amber-400/10 px-3.5 py-1.5 rounded-full border border-amber-400/20">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span>Available for select projects worldwide</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light text-white tracking-tight leading-[1.1]">
              Let’s preserve your <br />
              <span className="font-normal italic text-amber-300">finest chapters</span> in time.
            </h2>

            <p className="text-slate-400 text-base sm:text-lg font-light leading-relaxed max-w-xl">
              Rooted in the lush cultural heart of Kandy, Sri Lanka. Crafting cinematic visuals, heartfelt storytelling, and immersive digital experiences with uncompromising attention to detail.
            </p>

            {/* Quick Contact Pill Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="https://wa.me/94770000000?text=Hi%2C%20I%27d%20love%20to%20discuss%20a%20project."
                target="_blank"
                rel="noreferrer"
                className="bg-white hover:bg-slate-100 text-slate-950 font-medium px-7 py-3.5 rounded-full text-sm transition-all shadow-xl shadow-white/5 flex items-center space-x-2.5 group"
              >
                <span>Start a WhatsApp Conversation</span>
                <svg className="w-4 h-4 stroke-current transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>

              <a
                href="mailto:contact@domain.com"
                className="bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 text-slate-200 font-medium px-7 py-3.5 rounded-full text-sm transition-all"
              >
                Send an Email
              </a>
            </div>
          </motion.div>

          {/* Right Column: Interactive Local Map & Time Card (Span 5) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-800/80 rounded-3xl p-8 shadow-2xl backdrop-blur-md relative overflow-hidden group"
          >
            {/* Subtle Grid overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] pointer-events-none" />

            <div className="relative z-10 space-y-6">
              <div className="flex items-center justify-between pb-6 border-b border-slate-800">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-2xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-medium text-sm">Studio Headquarters</h3>
                    <p className="text-slate-400 text-xs font-light">Kandy, Sri Lanka 🇱🇰</p>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-xs font-mono text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
                    {localTime || "Loading..."}
                  </span>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <p className="text-slate-300 text-sm font-light leading-relaxed">
                  Operating from the cultural highlands. Open for island-wide commissions, destination shoots, and international remote collaborations.
                </p>
                <div className="pt-2 flex items-center justify-between text-xs text-slate-400 font-mono">
                  <span>Coordinates: 7.2906° N, 80.6337° E</span>
                  <span>GMT+5:30</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* MIDDLE SECTION: CLEAN NAVIGATION & SOCIAL LINKS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 pt-16 border-t border-slate-800/80">
          
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">Navigation</h4>
            <ul className="space-y-2.5 text-sm text-slate-300 font-light">
              <li><a href="#about" className="hover:text-white transition-colors">Studio Profile</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">Selected Works</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services & Pricing</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Book a Session</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">Social Channels</h4>
            <ul className="space-y-2.5 text-sm text-slate-300 font-light">
              <li><a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Instagram</a></li>
              <li><a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Facebook</a></li>
              <li><a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">YouTube</a></li>
              <li><a href="https://tiktok.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">TikTok</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">Ecosystem</h4>
            <ul className="space-y-2.5 text-sm text-slate-300 font-light">
              <li><a href="#" className="hover:text-white transition-colors">Design System</a></li>
              <li><a href="#" className="hover:text-white transition-colors">UI Kit Components</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">Direct Contact</h4>
            <p className="text-sm text-slate-300 font-light leading-relaxed">
              Kandy, Central Province<br />
              Sri Lanka 20000<br />
              <span className="text-amber-400 font-medium">lakshan@domain.com</span>
            </p>
          </div>

        </div>

        {/* BOTTOM BAR: COPYRIGHT & RETURN TO TOP */}
        <div className="pt-12 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-slate-400 font-light">
          <p>© {new Date().getFullYear()} SyncXel Studio & Lakshan Sandeepa. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center space-x-3 text-slate-400 hover:text-white transition-colors group cursor-pointer"
          >
            <span>Back to top</span>
            <div className="p-2.5 rounded-full bg-slate-900 border border-slate-800 group-hover:border-slate-700 transition-colors">
              <svg className="w-3.5 h-3.5 stroke-current transition-transform group-hover:-translate-y-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
              </svg>
            </div>
          </button>
        </div>

      </div>
    </footer>
  );
}