// import { useState } from "react";
// import { motion } from "framer-motion";

// export default function PremiumFooterOne() {
//   const [email, setEmail] = useState("");

//   const handleSubscribe = (e) => {
//     e.preventDefault();
//     if (email) {
//       alert([SUCCESS]`Email registered to telemetry core: ${email}`);
//       setEmail("");
//     }
//   };

//   return (
//     <footer className="w-full bg-white text-neutral-900 border-t border-neutral-100 px-6 md:px-16 py-12 font-sans relative overflow-hidden selection:bg-neutral-100">
//       {/* 1. LEFT-ALIGNED TINY SYNTAX COMMENT */}
//       <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10">
//         <div className="space-y-4 max-w-xs">
//           <div className="space-y-1">
//             <span className="font-mono text-[10px] text-neutral-400 block tracking-wider uppercase select-none">
//               {"// end_of_file / system_footer"}
//             </span>
//             <h3 className="font-mono text-sm font-bold tracking-tight text-black">
//               syncxel.core
//             </h3>
//           </div>
//           <p className="text-xs text-neutral-500 leading-relaxed">
//             A precise front-end engineering collective delivering
//             production-grade components without the visual noise.
//           </p>
//         </div>

//         {/* 2. LINKS PACK (CLEAN NAVIGATION) */}
//         <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 md:gap-16">
//           <div className="space-y-3">
//             <span className="font-mono text-[9px] text-neutral-400 uppercase select-none">
//               {"// resources"}
//             </span>
//             <ul className="space-y-2 text-xs text-neutral-600 font-medium">
//               <li className="hover:text-black cursor-pointer transition-colors">
//                 Documentation
//               </li>
//               <li className="hover:text-black cursor-pointer transition-colors">
//                 Architecture
//               </li>
//               <li className="hover:text-black cursor-pointer transition-colors">
//                 Changelog
//               </li>
//             </ul>
//           </div>
//           <div className="space-y-3">
//             <span className="font-mono text-[9px] text-neutral-400 uppercase select-none">
//               {"// legal"}
//             </span>
//             <ul className="space-y-2 text-xs text-neutral-600 font-medium">
//               <li className="hover:text-black cursor-pointer transition-colors">
//                 Privacy Policy
//               </li>
//               <li className="hover:text-black cursor-pointer transition-colors">
//                 Terms of Service
//               </li>
//               <li className="hover:text-black cursor-pointer transition-colors">
//                 License
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* 3. CLEAN NEWSLETTER INPUT WITH SPRING PHYSICS BUTTON */}
//         <div className="space-y-3 w-full md:w-auto">
//           <span className="font-mono text-[9px] text-neutral-400 uppercase select-none">
//             {"// subscribe_to_telemetry"}
//           </span>
//           <form
//             onSubmit={handleSubscribe}
//             className="flex flex-col sm:flex-row gap-2 max-w-md w-full relative">
//             <div className="relative flex-1">
//               <input
//                 type="email"
//                 required
//                 placeholder="developer@domain.com"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="w-full bg-white text-black font-mono text-xs border border-neutral-200 px-3 py-2.5 rounded focus:outline-none focus:border-black transition-colors min-w-[200px]"
//               />
//             </div>

//             <motion.button
//               whileTap={{ scale: 0.92 }}
//               transition={{ type: "spring", stiffness: 400, damping: 15 }}
//               type="submit"
//               className="bg-black text-white font-mono text-xs border border-black px-4 py-2.5 rounded hover:bg-neutral-900 transition-colors duration-200 text-center whitespace-nowrap">
//               {/* PC Screen View */}
//               <span className="hidden lg:inline-block">
//                 <span className="text-sky-400">return</span> sub();
//               </span>
//               {/* Mobile/Tablet View */}
//               <span className="inline-block lg:hidden font-sans font-medium">
//                 Subscribe
//               </span>
//             </motion.button>
//           </form>
//         </div>
//       </div>

//       {/* 4. BOTTOM METADATA BAR */}
//       <div className="max-w-7xl mx-auto border-t border-neutral-100 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
//         <span className="font-mono text-[9px] text-neutral-400">
//           &copy; {new Date().getFullYear()} SyncXel. All rights reserved.
//         </span>
//         <div className="font-mono text-[9px] text-neutral-400 tracking-tight space-x-3 select-none">
//           <span className="text-emerald-600 font-bold">[ONLINE]</span>
//           <span>[SHARDS: 01-A]</span>
//         </div>
//       </div>
//     </footer>
//   );
// }

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const socialLinks = [
  { name: "X / Twitter", href: "#" },
  { name: "Instagram", href: "#" },
  { name: "LinkedIn", href: "#" },
  { name: "GitHub", href: "#" },
];

const legalLinks = [
  { name: "Privacy Policy", href: "#" },
  { name: "Terms of Service", href: "#" },
  { name: "Cookie Settings", href: "#" },
];

export default function LuxuryFooter() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setEmail("");
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1000);
  };

  return (
    <footer className="relative bg-[#09090b] text-zinc-300 border-t border-zinc-800/60 overflow-hidden font-sans">
      {/* Subtle ambient background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-gradient-to-tr from-amber-500/5 via-indigo-500/5 to-transparent blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-20 pb-12 relative z-10">
        {/* Main Split Grid (Design 3: Left Info, Right Newsletter) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pb-16 border-b border-zinc-800/80">
          {/* Left Column: Brand & Info (Span 6) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 space-y-6">
            {/* Logo / Brand Mark (Custom Inline SVG Star/Diamond) */}
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-zinc-100 to-zinc-400 flex items-center justify-center text-zinc-950 font-bold shadow-lg shadow-white/5">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
                </svg>
              </div>
              <span className="text-xl font-semibold tracking-wider text-white uppercase font-mono">
                Aether<span className="text-amber-400">.</span>
              </span>
            </div>

            {/* Description */}
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-md font-light">
              Crafting uncompromising digital experiences, minimalist
              interfaces, and high-performance engineering systems for visionary
              brands worldwide.
            </p>

            {/* Social Nav Links */}
            <div className="pt-2 flex flex-wrap gap-x-8 gap-y-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs uppercase tracking-widest text-zinc-400 hover:text-white transition-colors duration-300 relative group py-1">
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-amber-400 transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Newsletter Integration (Span 6) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 lg:pl-8 lg:border-l lg:border-zinc-800/80 space-y-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-amber-400/90 mb-2 block">
                [ Stay Updated ]
              </span>
              <h3 className="text-xl md:text-2xl font-light text-white tracking-tight">
                Subscribe to our newsletter
              </h3>
              <p className="text-zinc-400 text-sm mt-1.5 font-light">
                Receive curated insights, design engineering notes, and early
                releases. No spam.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="relative max-w-md">
              <div className="relative flex items-center bg-zinc-900/80 border border-zinc-800 rounded-2xl p-1.5 transition-all duration-300 focus-within:border-amber-400/50 focus-within:ring-2 focus-within:ring-amber-400/10 shadow-2xl">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full bg-transparent px-4 py-3 text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none"
                />

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isLoading}
                  type="submit"
                  className="flex items-center justify-center px-6 py-3 bg-zinc-100 hover:bg-white text-zinc-950 text-xs font-medium uppercase tracking-wider rounded-xl transition-colors duration-200 disabled:opacity-50 shrink-0">
                  {isLoading ? (
                    <span className="w-4 h-4 border-2 border-zinc-950 border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Join</span>
                      {/* Inline Arrow Right SVG */}
                      <svg
                        className="w-3.5 h-3.5 ml-2 stroke-current"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2.5">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 12h14M12 5l7 7-7 7"
                        />
                      </svg>
                    </>
                  )}
                </motion.button>
              </div>

              {/* Success Notification Animation */}
              <AnimatePresence>
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute -bottom-10 left-0 flex items-center space-x-2 text-emerald-400 text-xs font-mono">
                    {/* Inline Checkmark SVG */}
                    <svg
                      className="w-4 h-4 stroke-current"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M20 6L9 17l-5-5"
                      />
                    </svg>
                    <span>
                      You have successfully subscribed to the inner circle.
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 font-light gap-4">
          <p>
            © {new Date().getFullYear()} Aether Studio. All rights reserved.
          </p>

          <div className="flex items-center space-x-6">
            {legalLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="hover:text-zinc-300 transition-colors duration-200">
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
