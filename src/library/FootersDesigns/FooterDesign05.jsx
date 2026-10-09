// import React from "react";
// import { motion } from "framer-motion";
// import { FaRegCopyright, FaArrowUp } from "react-icons/fa";
// import { Link } from "react-router-dom";

// export default function MinimalLegalFooter() {
//   const scrollTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="w-full bg-[#09090b] text-slate-400 py-8 px-6 md:px-16 border-t border-slate-800/80 font-sans relative overflow-hidden">
//       <motion.div
//         initial={{ opacity: 0, y: 10 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
//         className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-xs">
//         {/* Left: Copyright & Brand */}
//         <div className="flex items-center flex-wrap justify-center sm:justify-start gap-1.5">
//           <span className="text-slate-200 font-medium">SyncXel Studio</span>
//           <span>&copy; {currentYear}</span>
//           <span className="text-slate-600">•</span>
//           <span>All rights reserved.</span>
//         </div>

//         {/* Center: Minimal Legal Links */}
//         <div className="flex items-center space-x-6 text-slate-400 font-light">
//           <Link to="/privacy" className="hover:text-white transition-colors">
//             Privacy Policy
//           </Link>
//           <Link to="/terms" className="hover:text-white transition-colors">
//             Terms of Service
//           </Link>
//           <span className="hidden md:inline text-emerald-400 font-mono font-medium">
//             [SYSTEM_ONLINE]
//           </span>
//         </div>

//         {/* Right: Back to Top Trigger */}
//         <button
//           onClick={scrollTop}
//           className="flex items-center space-x-2 text-slate-400 hover:text-white transition-colors group cursor-pointer">
//           <span className="font-mono tracking-widest text-[10px] uppercase">
//             Back to Top
//           </span>
//           <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 group-hover:border-slate-700 transition-colors">
//             <FaArrowUp className="w-3 h-3 transition-transform group-hover:-translate-y-0.5" />
//           </div>
//         </button>
//       </motion.div>
//     </footer>
//   );
// }

// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   ArrowUpRight,
//   Sparkles,
//   CheckCircle2,
//   Mail,
// //   FaGithub,
//   MessageSquare,
//   Heart,
//   ArrowUp,
// } from "lucide-react";
// import {FaGithub } from "react-icons/fa";
// {/* <FaGithub /> */}

// export default function GlassmorphismFooter() {
//   const [email, setEmail] = useState("");
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);

//   const handleSubscribe = (e) => {
//     e.preventDefault();
//     if (!email) return;

//     setIsLoading(true);
//     setTimeout(() => {
//       setIsLoading(false);
//       setIsSubmitted(true);
//       setEmail("");
//       setTimeout(() => setIsSubmitted(false), 5000);
//     }, 1000);
//   };

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   return (
//     <footer className="relative w-full bg-[#030305] text-slate-200 overflow-hidden font-sans border-t border-white/10">
//       {/* --- Ambient Floating Glassmorphic Glow Orbs --- */}
//       <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-cyan-500/10 via-indigo-500/10 to-fuchsia-500/10 rounded-full blur-[140px] pointer-events-none" />
//       <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

//       <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-20 pb-12 relative z-10 space-y-16">
//         {/* 1. TOP FROSTED CTA CARD */}
//         <motion.div
//           initial={{ opacity: 0, y: 25 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
//           className="relative rounded-3xl p-8 md:p-12 bg-white/[0.02] backdrop-blur-2xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] overflow-hidden">
//           {/* Inner subtle glow */}
//           <div className="absolute -right-20 -top-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

//           <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
//             <div className="lg:col-span-7 space-y-4">
//               <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-cyan-300 text-xs font-medium tracking-wide">
//                 <Sparkles className="w-3.5 h-3.5 animate-pulse" />
//                 <span>Next-Gen UI Architecture</span>
//               </div>
//               <h2 className="text-3xl md:text-4xl font-light text-white tracking-tight">
//                 Ready to elevate your{" "}
//                 <span className="font-normal italic bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
//                   digital presence?
//                 </span>
//               </h2>
//               <p className="text-slate-400 text-sm font-light leading-relaxed max-w-xl">
//                 Collaborate with us to engineer high-performance React
//                 components, immersive micro-interactions, and custom web
//                 products.
//               </p>
//             </div>

//             <div className="lg:col-span-5 flex flex-col sm:flex-row gap-3">
//               <a
//                 href="#contact"
//                 className="flex-1 text-center px-6 py-3.5 rounded-2xl bg-white hover:bg-slate-100 text-slate-950 font-medium text-xs uppercase tracking-wider transition-all shadow-lg shadow-white/5 flex items-center justify-center space-x-2 group">
//                 <span>Start a Project</span>
//                 <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
//               </a>

//               <a
//                 href="https://wa.me/+94707046840"
//                 target="_blank"
//                 rel="noreferrer"
//                 className="flex-1 text-center px-6 py-3.5 rounded-2xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-white font-medium text-xs uppercase tracking-wider transition-all backdrop-blur-md flex items-center justify-center space-x-2">
//                 <MessageSquare className="w-4 h-4 text-emerald-400" />
//                 <span>WhatsApp</span>
//               </a>
//             </div>
//           </div>
//         </motion.div>

//         {/* 2. MAIN 4-COLUMN GLASS GRID */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-start">
//           {/* Column 1: Brand & Studio Info (Span 4) */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             className="lg:col-span-4 p-8 rounded-3xl bg-white/[0.02] backdrop-blur-xl border border-white/10 space-y-6 h-full flex flex-col justify-between">
//             <div className="space-y-4">
//               <div className="flex items-center space-x-2">
//                 <span className="text-2xl font-black uppercase text-white tracking-wider">
//                   Sync<span className="text-cyan-400">Xel</span>
//                 </span>
//                 <span className="px-2 py-0.5 text-[9px] font-mono font-bold text-cyan-300 bg-cyan-500/10 border border-cyan-500/20 rounded-full">
//                   CORE
//                 </span>
//               </div>
//               <p className="text-xs text-slate-400 font-light leading-relaxed">
//                 Precision front-end engineering collective crafting
//                 production-grade React components and minimal digital
//                 frameworks.
//               </p>
//             </div>

//             <div className="flex items-center space-x-3 pt-4 border-t border-white/10">
//               <a
//                 href="mailto:syncxelofficial@gmail.com"
//                 className="p-2.5 rounded-xl bg-white/[0.05] border border-white/10 text-slate-300 hover:text-white hover:bg-white/[0.1] transition-all">
//                 <Mail className="w-4 h-4" />
//               </a>
//               <a
//                 href="https://FaGithub.com/lakshan-beast"
//                 target="_blank"
//                 rel="noreferrer"
//                 className="p-2.5 rounded-xl bg-white/[0.05] border border-white/10 text-slate-300 hover:text-white hover:bg-white/[0.1] transition-all">
//                 <FaGithub className="w-4 h-4" />
//               </a>
//             </div>
//           </motion.div>

//           {/* Column 2: Navigation Links (Span 2) */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="lg:col-span-2 p-8 rounded-3xl bg-white/[0.02] backdrop-blur-xl border border-white/10 space-y-4 h-full">
//             <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400">
//               Navigation
//             </h4>
//             <ul className="space-y-2.5 text-xs text-slate-400 font-light">
//               <li>
//                 <a
//                   href="#features"
//                   className="hover:text-white transition-colors">
//                   Platform Features
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#services"
//                   className="hover:text-white transition-colors">
//                   Custom Web Apps
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#components"
//                   className="hover:text-white transition-colors">
//                   UI Matrix Core
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#workflow"
//                   className="hover:text-white transition-colors">
//                   Our Workflow
//                 </a>
//               </li>
//             </ul>
//           </motion.div>

//           {/* Column 3: Governance & Tech (Span 2) */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.3 }}
//             className="lg:col-span-2 p-8 rounded-3xl bg-white/[0.02] backdrop-blur-xl border border-white/10 space-y-4 h-full">
//             <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400">
//               Governance
//             </h4>
//             <ul className="space-y-2.5 text-xs text-slate-400 font-light">
//               <li>
//                 <a href="/docs" className="hover:text-white transition-colors">
//                   Documentation
//                 </a>
//               </li>
//               <li>
//                 <a href="/legal" className="hover:text-white transition-colors">
//                   Privacy & Terms
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="https://react.dev"
//                   target="_blank"
//                   rel="noreferrer"
//                   className="hover:text-white transition-colors">
//                   React Engine
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="https://tailwindcss.com"
//                   target="_blank"
//                   rel="noreferrer"
//                   className="hover:text-white transition-colors">
//                   Tailwind CSS
//                 </a>
//               </li>
//             </ul>
//           </motion.div>

//           {/* Column 4: Glass Newsletter Integration (Span 4) */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.4 }}
//             className="lg:col-span-4 p-8 rounded-3xl bg-white/[0.02] backdrop-blur-xl border border-white/10 space-y-4 h-full flex flex-col justify-between">
//             <div className="space-y-2">
//               <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400">
//                 Telemetry Feed
//               </h4>
//               <p className="text-xs text-slate-400 font-light">
//                 Receive component drops and architecture notes directly to your
//                 inbox.
//               </p>
//             </div>

//             <form
//               onSubmit={handleSubscribe}
//               className="relative space-y-3 pt-2">
//               <div className="relative flex items-center bg-white/[0.04] border border-white/10 rounded-2xl p-1 focus-within:border-cyan-400/50 transition-all">
//                 <input
//                   type="email"
//                   required
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   placeholder="developer@domain.com"
//                   className="w-full bg-transparent px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none"
//                 />
//                 <button
//                   disabled={isLoading}
//                   type="submit"
//                   className="px-4 py-2 bg-white hover:bg-slate-200 text-slate-950 text-xs font-medium uppercase rounded-xl transition-all disabled:opacity-50 shrink-0">
//                   {isLoading ? "..." : "Join"}
//                 </button>
//               </div>

//               <AnimatePresence>
//                 {isSubmitted && (
//                   <motion.div
//                     initial={{ opacity: 0, y: 5 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: -5 }}
//                     className="flex items-center space-x-1.5 text-emerald-400 text-[11px] font-mono">
//                     <CheckCircle2 className="w-3.5 h-3.5" />
//                     <span>Registered to telemetry core.</span>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </form>
//           </motion.div>
//         </div>

//         {/* 3. BOTTOM LEGAL & HANDCRAFTED BAR */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.5 }}
//           className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-light">
//           <p>
//             © {new Date().getFullYear()} SyncXel Web Solutions. All rights
//             reserved.
//           </p>

//           {/* Sri Lanka Handcrafted Badge */}
//           <div className="flex items-center space-x-1.5 bg-white/[0.03] px-3.5 py-1.5 rounded-full border border-white/10 text-slate-300 backdrop-blur-md">
//             <span>Handcrafted with</span>
//             <Heart className="w-3 h-3 text-red-500 fill-red-500 inline" />
//             <span>in</span>
//             <span className="font-medium text-white flex items-center gap-1.5">
//               <img
//                 src="https://flagcdn.com/24x18/lk.png"
//                 alt="Sri Lanka Flag"
//                 className="w-3.5 h-2.5 object-cover rounded-[2px]"
//               />
//               <span>Sri Lanka</span>
//             </span>
//           </div>

//           <button
//             onClick={scrollToTop}
//             className="flex items-center space-x-2 text-slate-400 hover:text-white transition-colors group cursor-pointer">
//             <span className="font-mono text-[10px] uppercase tracking-widest">
//               Back to top
//             </span>
//             <div className="p-2 rounded-xl bg-white/[0.05] border border-white/10 group-hover:border-white/20 transition-colors">
//               <ArrowUp className="w-3 h-3 transition-transform group-hover:-translate-y-0.5" />
//             </div>
//           </button>
//         </motion.div>
//       </div>
//     </footer>
//   );
// }


import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowUpRight, 
  Sparkles, 
  Globe, 
  Clock, 
  Activity, 
  ShieldCheck, 
  ArrowUp,
  Heart
} from "lucide-react";

export default function AuroraFooter() {
  const [activeTab, setActiveTab] = useState("metrics");
  const [time, setTime] = useState("");

  // Live Colombo Time Tracker
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(new Intl.DateTimeFormat([], { timeZone: "Asia/Colombo", timeStyle: "medium" }).format(now));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full bg-[#020408] text-slate-200 overflow-hidden font-sans border-t border-slate-800/50">
      
      {/* --- Dynamic Aurora Mesh Background Gradients --- */}
      <div className="absolute top-0 left-1/3 w-[600px] h-[400px] bg-gradient-to-tr from-indigo-600/15 via-purple-600/10 to-cyan-400/15 rounded-full blur-[160px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[350px] bg-gradient-to-br from-emerald-500/10 via-teal-500/10 to-blue-600/15 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-16 pt-28 pb-16 relative z-10 space-y-20">

        {/* 1. TOP ASYMMETRIC HERO CALLOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-8 space-y-6"
          >
            <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/60 text-cyan-400 text-xs font-medium tracking-wide shadow-xl backdrop-blur-md">
              <Sparkles className="w-4 h-4" />
              <span>SyncXel Studio Ecosystem</span>
            </div>
            
            <h2 className="text-4xl sm:text-6xl font-light text-white tracking-tight leading-[1.08]">
              Architecting the next wave of <br />
              <span className="font-normal italic bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
                digital craftsmanship.
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-4 flex flex-col items-start lg:items-end justify-end space-y-4"
          >
            <a
              href="#contact"
              className="group px-8 py-4 rounded-2xl bg-white hover:bg-slate-100 text-slate-950 font-medium text-sm transition-all shadow-2xl shadow-white/10 flex items-center space-x-3 active:scale-95"
            >
              <span>Initialize Collaboration</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </motion.div>
        </div>


        {/* 2. BENTO INTERACTIVE WIDGET GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Bento Card: Interactive Studio Status Widget (Span 6) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-6 rounded-3xl bg-slate-900/40 border border-slate-800/80 p-8 backdrop-blur-2xl flex flex-col justify-between shadow-2xl relative overflow-hidden"
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-sm font-medium text-white tracking-wide">Live Studio Telemetry</span>
                </div>

                {/* Tab Switcher */}
                <div className="flex bg-slate-950/80 p-1 rounded-xl border border-slate-800">
                  <button
                    onClick={() => setActiveTab("metrics")}
                    className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${activeTab === "metrics" ? "bg-slate-800 text-white shadow-sm" : "text-slate-400 hover:text-white"}`}
                  >
                    Metrics
                  </button>
                  <button
                    onClick={() => setActiveTab("location")}
                    className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${activeTab === "location" ? "bg-slate-800 text-white shadow-sm" : "text-slate-400 hover:text-white"}`}
                  >
                    Location
                  </button>
                </div>
              </div>

              <AnimatePresence mode="wait">
                {activeTab === "metrics" ? (
                  <motion.div
                    key="metrics"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4 py-4"
                  >
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-400 flex items-center gap-2"><Activity className="w-4 h-4 text-cyan-400" /> Core Engine Latency</span>
                      <span className="font-mono text-emerald-400 font-medium">12ms (Optimal)</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-400 flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-indigo-400" /> Security Protocol</span>
                      <span className="font-mono text-slate-200">TLS 1.3 Secure</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-400 flex items-center gap-2"><Sparkles className="w-4 h-4 text-purple-400" /> Active UI Shards</span>
                      <span className="font-mono text-slate-200">v4.8 Matrix</span>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="location"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4 py-4"
                  >
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-400 flex items-center gap-2"><Globe className="w-4 h-4 text-cyan-400" /> Headquarters</span>
                      <span className="text-white font-medium">Kandy, Sri Lanka 🇱🇰</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-400 flex items-center gap-2"><Clock className="w-4 h-4 text-amber-400" /> Local Time (GMT+5:30)</span>
                      <span className="font-mono text-amber-300 font-medium">{time || "Loading..."}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-400 flex items-center gap-2"><Activity className="w-4 h-4 text-emerald-400" /> Availability</span>
                      <span className="text-emerald-400 font-medium">Open for 2026/2027 Projects</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="pt-6 border-t border-slate-800/80 text-xs text-slate-500 font-mono">
              <span>SYNCXEL_CORE // AUTONOMOUS_STABLE_BUILD</span>
            </div>
          </motion.div>


          {/* Right Bento Card: Fluid Navigation Matrix (Span 6) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-6 rounded-3xl bg-slate-900/40 border border-slate-800/80 p-8 backdrop-blur-2xl grid grid-cols-3 gap-6 shadow-2xl"
          >
            <div className="space-y-4">
              <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400">Navigation</h4>
              <ul className="space-y-2.5 text-xs text-slate-400 font-light">
                <li><a href="#features" className="hover:text-white transition-colors">Platform</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Custom Apps</a></li>
                <li><a href="#workflow" className="hover:text-white transition-colors">Workflow</a></li>
                <li><a href="#team" className="hover:text-white transition-colors">Engineers</a></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400">Governance</h4>
              <ul className="space-y-2.5 text-xs text-slate-400 font-light">
                <li><a href="/docs" className="hover:text-white transition-colors">Docs</a></li>
                <li><a href="/legal" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="/terms" className="hover:text-white transition-colors">Terms</a></li>
                <li><a href="#faq" className="hover:text-white transition-colors">Support</a></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400">Connect</h4>
              <ul className="space-y-2.5 text-xs text-slate-400 font-light">
                <li><a href="https://github.com/lakshan-beast" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">GitHub</a></li>
                <li><a href="https://wa.me/+94707046840" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">WhatsApp</a></li>
                <li><a href="mailto:syncxelofficial@gmail.com" className="hover:text-white transition-colors">Email</a></li>
                <li><a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Instagram</a></li>
              </ul>
            </div>
          </motion.div>

        </div>


        {/* 3. BOTTOM LEGAL & BRAND BAR */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="pt-10 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-400 font-light"
        >
          <p>© {new Date().getFullYear()} SyncXel Web Solutions. All rights reserved.</p>

          {/* Handcrafted badge */}
          <div className="flex items-center space-x-2 bg-slate-900/80 px-4 py-2 rounded-full border border-slate-800 text-slate-300">
            <span>Handcrafted with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" />
            <span>in</span>
            <span className="font-medium text-white flex items-center gap-1.5">
              <img
                src="https://flagcdn.com/24x18/lk.png"
                alt="Sri Lanka Flag"
                className="w-4 h-3 object-cover rounded-[2px]"
              />
              <span>Sri Lanka</span>
            </span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center space-x-2.5 text-slate-400 hover:text-white transition-colors group cursor-pointer"
          >
            <span className="font-mono text-[10px] uppercase tracking-widest">Back to top</span>
            <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 group-hover:border-slate-700 transition-colors">
              <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
            </div>
          </button>
        </motion.div>

      </div>
    </footer>
  );
}