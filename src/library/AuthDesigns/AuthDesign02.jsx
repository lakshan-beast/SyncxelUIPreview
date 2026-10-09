// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   FaPalette,
//   FaCode,
//   FaCube,
//   FaArrowRight,
//   FaArrowLeft,
//   FaCheckCircle,
//   FaTimes,
//   FaEnvelope,
//   FaLock,
//   FaGoogle,
//   FaGithub,
// } from "react-icons/fa";

// export default function StudioPortalAuth({ isOpen = true, onClose }) {
//   const [step, setStep] = useState(1);
//   const [scope, setScope] = useState("branding");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [budget, setBudget] = useState(45);
//   const [isCompleted, setIsCompleted] = useState(false);

//   // Dynamic accent themes based on client project scope
//   const scopeThemes = {
//     branding: {
//       primary: "text-amber-400",
//       bg: "bg-amber-400/10",
//       border: "border-amber-400/50",
//       glow: "shadow-[0_0_35px_rgba(251,191,36,0.25)]",
//       accentHex: "#fbbf24",
//       title: "Brand Architecture",
//     },
//     web: {
//       primary: "text-cyan-400",
//       bg: "bg-cyan-400/10",
//       border: "border-cyan-400/50",
//       glow: "shadow-[0_0_35px_rgba(34,211,238,0.25)]",
//       accentHex: "#22d3ee",
//       title: "Immersive Web Experience",
//     },
//     motion: {
//       primary: "text-purple-400",
//       bg: "bg-purple-400/10",
//       border: "border-purple-400/50",
//       glow: "shadow-[0_0_35px_rgba(192,132,252,0.25)]",
//       accentHex: "#c084fc",
//       title: "3D Motion & Spatial",
//     },
//   };

//   const currentTheme = scopeThemes[scope];

//   const handleFinish = (e) => {
//     e.preventDefault();
//     setIsCompleted(true);
//     setTimeout(() => {
//       if (onClose) onClose();
//     }, 2500);
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-2xl p-2 sm:p-6 overflow-hidden">
//       {/* Background Grid Pattern */}
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

//       <motion.div
//         initial={{ scale: 0.95, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         exit={{ scale: 0.95, opacity: 0 }}
//         className="relative w-full max-w-5xl bg-zinc-950 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 min-h-[580px]">
//         {/* Close Button */}
//         <button
//           onClick={onClose}
//           className="absolute top-6 right-6 z-30 p-2.5 rounded-full bg-zinc-900/80 backdrop-blur text-zinc-400 hover:text-white hover:bg-zinc-800 transition cursor-pointer">
//           <FaTimes className="w-4 h-4" />
//         </button>

//         {/* LEFT SIDE: Immersive Visual Moodboard (55% on desktop) */}
//         <div className="lg:col-span-7 bg-zinc-900/50 p-8 sm:p-12 flex flex-col justify-between relative overflow-hidden border-b lg:border-b-0 lg:border-r border-zinc-800">
//           <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-transparent to-transparent pointer-events-none" />

//           <div className="relative z-10">
//             <div className="flex items-center space-x-2 mb-4">
//               <span
//                 className={`w-2.5 h-2.5 rounded-full animate-pulse`}
//                 style={{ backgroundColor: currentTheme.accentHex }}
//               />
//               <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">
//                 Studio Collective // Client Portal
//               </span>
//             </div>
//             <h1 className="text-3xl sm:text-4xl font-serif text-white tracking-tight">
//               Crafting Digital Excellence.
//             </h1>
//             <p className="text-xs font-mono text-zinc-400 mt-2 max-w-sm">
//               Initialize your creative workspace and commission elite digital
//               experiences with our design collective.
//             </p>
//           </div>

//           {/* Interactive Dynamic Moodboard Preview Card */}
//           <div className="relative z-10 my-8 p-6 rounded-2xl bg-zinc-950/80 border border-zinc-800 backdrop-blur">
//             <div className="text-[10px] uppercase font-mono text-zinc-500 mb-2">
//               Active Scope Pipeline
//             </div>
//             <div className="text-lg font-bold text-white mb-1">
//               {currentTheme.title}
//             </div>
//             <div
//               className="flex items-center space-x-2 text-xs font-mono"
//               style={{ color: currentTheme.accentHex }}>
//               <span>Status: Ready for deployment</span>
//               <span>•</span>
//               <span>Tier 01</span>
//             </div>
//           </div>

//           <div className="relative z-10 flex items-center justify-between text-xs font-mono text-zinc-500">
//             <span>© 2026 KINETIC STUDIO</span>
//             <span>SECURE OAUTH 2.0</span>
//           </div>
//         </div>

//         {/* RIGHT SIDE: Multi-Step Client Auth & Onboarding (45% on desktop) */}
//         <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between bg-zinc-950">
//           <div className="flex items-center justify-between mb-6">
//             <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
//               Step 0{step} / 03
//             </span>
//             <div className="flex space-x-1">
//               {[1, 2, 3].map((s) => (
//                 <div
//                   key={s}
//                   className={`w-6 h-1 rounded-full transition-all ${step === s ? "w-10" : "bg-zinc-800"}`}
//                   style={{
//                     backgroundColor:
//                       step === s ? currentTheme.accentHex : undefined,
//                   }}
//                 />
//               ))}
//             </div>
//           </div>

//           {!isCompleted ? (
//             <div className="flex-1 flex flex-col justify-center">
//               <AnimatePresence mode="wait">
//                 {step === 1 && (
//                   <motion.div
//                     key="s1"
//                     initial={{ opacity: 0, x: 20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     exit={{ opacity: 0, x: -20 }}
//                     className="space-y-4">
//                     <h3 className="text-lg font-bold text-white mb-2">
//                       Client Credentials
//                     </h3>
//                     <div className="relative">
//                       <FaEnvelope className="absolute left-4 top-3.5 w-4 h-4 text-zinc-500" />
//                       <input
//                         type="email"
//                         required
//                         placeholder="studio@client.com"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-12 py-3 text-white text-xs font-mono placeholder-zinc-600 focus:outline-none focus:border-zinc-500"
//                       />
//                     </div>
//                     <div className="relative">
//                       <FaLock className="absolute left-4 top-3.5 w-4 h-4 text-zinc-500" />
//                       <input
//                         type="password"
//                         required
//                         placeholder="••••••••••••"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-12 py-3 text-white text-xs font-mono placeholder-zinc-600 focus:outline-none focus:border-zinc-500"
//                       />
//                     </div>
//                     <div className="grid grid-cols-2 gap-2 pt-2">
//                       <button
//                         type="button"
//                         className="py-2.5 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 rounded-xl text-xs font-mono text-zinc-300 flex items-center justify-center space-x-2 cursor-pointer transition">
//                         <FaGoogle className="w-3.5 h-3.5" /> <span>Google</span>
//                       </button>
//                       <button
//                         type="button"
//                         className="py-2.5 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 rounded-xl text-xs font-mono text-zinc-300 flex items-center justify-center space-x-2 cursor-pointer transition">
//                         <FaGithub className="w-3.5 h-3.5" /> <span>GitHub</span>
//                       </button>
//                     </div>
//                     <button
//                       type="button"
//                       onClick={() => setStep(2)}
//                       className="w-full mt-4 py-3 rounded-xl bg-white text-black font-semibold text-xs flex items-center justify-center space-x-2 hover:bg-zinc-200 transition cursor-pointer">
//                       <span>Proceed to Project Scope</span>
//                       <FaArrowRight className="w-3.5 h-3.5" />
//                     </button>
//                   </motion.div>
//                 )}

//                 {step === 2 && (
//                   <motion.div
//                     key="s2"
//                     initial={{ opacity: 0, x: 20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     exit={{ opacity: 0, x: -20 }}
//                     className="space-y-4">
//                     <h3 className="text-lg font-bold text-white mb-2">
//                       Select Project Scope
//                     </h3>
//                     <div className="grid grid-cols-1 gap-2.5">
//                       {[
//                         {
//                           id: "branding",
//                           label: "Brand Architecture",
//                           icon: FaPalette,
//                           desc: "Identity, guidelines & visual systems",
//                         },
//                         {
//                           id: "web",
//                           label: "Immersive Web",
//                           icon: FaCode,
//                           desc: "Next.js, Tailwind, Motion & 3D",
//                         },
//                         {
//                           id: "motion",
//                           label: "3D Motion & Spatial",
//                           icon: FaCube,
//                           desc: "Spline, WebGL & spatial UI kits",
//                         },
//                       ].map((item) => {
//                         const Icon = item.icon;
//                         const isSelected = scope === item.id;
//                         return (
//                           <div
//                             key={item.id}
//                             onClick={() => setScope(item.id)}
//                             className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-center space-x-3 ${isSelected ? `${currentTheme.bg} ${currentTheme.border}${currentTheme.glow}` : "bg-zinc-900/50 border-zinc-800 hover:border-zinc-700"}`}>
//                             <Icon
//                               className={`w-4 h-4 ${isSelected ? currentTheme.primary : "text-zinc-500"}`}
//                             />
//                             <div>
//                               <div className="text-xs font-bold text-white">
//                                 {item.label}
//                               </div>
//                               <div className="text-[10px] font-mono text-zinc-400">
//                                 {item.desc}
//                               </div>
//                             </div>
//                           </div>
//                         );
//                       })}
//                     </div>
//                     <div className="flex space-x-2 mt-4">
//                       <button
//                         type="button"
//                         onClick={() => setStep(1)}
//                         className="px-4 py-2.5 rounded-xl bg-zinc-900 text-zinc-400 hover:bg-zinc-800 text-xs font-mono cursor-pointer">
//                         Back
//                       </button>
//                       <button
//                         type="button"
//                         onClick={() => setStep(3)}
//                         className="flex-1 py-2.5 rounded-xl bg-white text-black font-semibold text-xs flex items-center justify-center space-x-2 hover:bg-zinc-200 transition cursor-pointer">
//                         <span>Configure Budget</span>
//                         <FaArrowRight className="w-3.5 h-3.5" />
//                       </button>
//                     </div>
//                   </motion.div>
//                 )}

//                 {step === 3 && (
//                   <motion.div
//                     key="s3"
//                     initial={{ opacity: 0, x: 20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     exit={{ opacity: 0, x: -20 }}
//                     className="space-y-5">
//                     <h3 className="text-lg font-bold text-white mb-2">
//                       Budget Allocation
//                     </h3>
//                     <div className="bg-zinc-900/60 p-4 rounded-2xl border border-zinc-800 space-y-3">
//                       <div className="flex justify-between text-xs font-mono">
//                         <span className="text-zinc-400">
//                           Estimated Investment
//                         </span>
//                         <span
//                           className="font-bold"
//                           style={{ color: currentTheme.accentHex }}>
//                           ${budget}k USD
//                         </span>
//                       </div>
//                       <input
//                         type="range"
//                         min="10"
//                         max="150"
//                         value={budget}
//                         onChange={(e) => setBudget(e.target.value)}
//                         className="w-full cursor-pointer accent-white"
//                       />
//                     </div>
//                     <div className="flex space-x-2 mt-4">
//                       <button
//                         type="button"
//                         onClick={() => setStep(2)}
//                         className="px-4 py-2.5 rounded-xl bg-zinc-900 text-zinc-400 hover:bg-zinc-800 text-xs font-mono cursor-pointer">
//                         Back
//                       </button>
//                       <button
//                         type="button"
//                         onClick={handleFinish}
//                         className="flex-1 py-3 rounded-xl bg-emerald-500 text-black font-bold text-xs flex items-center justify-center space-x-2 hover:bg-emerald-400 transition cursor-pointer shadow-lg shadow-emerald-500/20">
//                         <span>Initialize Commission</span>
//                         <FaCheckCircle className="w-3.5 h-3.5" />
//                       </button>
//                     </div>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>
//           ) : (
//             <motion.div
//               initial={{ scale: 0.8, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               className="py-12 text-center space-y-3 my-auto">
//               <div className="w-14 h-14 bg-emerald-500/20 border border-emerald-500 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
//                 <FaCheckCircle className="w-6 h-6" />
//               </div>
//               <h3 className="text-lg font-bold text-white tracking-wider">
//                 COMMISSION SECURED
//               </h3>
//               <p className="text-[11px] font-mono text-zinc-400">
//                 Studio directors notified. Welcome aboard.
//               </p>
//             </motion.div>
//           )}

//           <div className="text-[10px] font-mono text-zinc-600 text-center pt-4">
//             Encrypted End-to-End Agency Protocol
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// }

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaPalette,
  FaCode,
  FaCube,
  FaArrowRight,
  FaCheckCircle,
  FaTimes,
  FaEnvelope,
  FaLock,
  FaGoogle,
  FaGithub,
} from "react-icons/fa";
import { IoSparklesSharp } from "react-icons/io5";

export default function LuminousStudioAuth({ isOpen = true, onClose }) {
  const [step, setStep] = useState(1);
  const [scope, setScope] = useState("branding");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [budget, setBudget] = useState(60);
  const [isCompleted, setIsCompleted] = useState(false);

  // Dynamic Aura color schemes for light glassmorphism
  const auraThemes = {
    branding: {
      primary: "text-violet-600",
      bg: "bg-violet-500/10",
      border: "border-violet-500/30",
      accentHex: "#7c3aed",
      title: "Brand Architecture",
    },
    web: {
      primary: "text-cyan-600",
      bg: "bg-cyan-500/10",
      border: "border-cyan-500/30",
      accentHex: "#06b6d4",
      title: "Immersive Web Experience",
    },
    motion: {
      primary: "text-rose-600",
      bg: "bg-rose-500/10",
      border: "border-rose-500/30",
      accentHex: "#f43f5e",
      title: "3D Motion & Spatial UI",
    },
  };

  const currentTheme = auraThemes[scope];

  const handleFinish = (e) => {
    e.preventDefault();
    setIsCompleted(true);
    setTimeout(() => {
      if (onClose) onClose();
    }, 2500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-xl p-3 sm:p-6 overflow-y-auto">
      {/* Background Soft Aura Orbs */}
      <div
        className="absolute w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full blur-[100px] sm:blur-[120px] opacity-30 sm:opacity-40 transition-all duration-700 pointer-events-none -top-10 -left-10"
        style={{ backgroundColor: currentTheme.accentHex }}
      />
      <div className="absolute w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] rounded-full blur-[80px] sm:blur-[100px] opacity-20 bg-indigo-300 pointer-events-none -bottom-10 -right-10" />

      {/* Main Glassmorphism Card with mobile scrolling enabled */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 10 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 10 }}
        className="relative w-full max-w-5xl bg-white/90 backdrop-blur-2xl border border-white/90 rounded-3xl shadow-[0_30px_100px_rgba(0,0,0,0.12)] grid grid-cols-1 lg:grid-cols-12 my-auto overflow-y-auto max-h-[92vh]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-40 p-2.5 rounded-full bg-slate-100/90 backdrop-blur text-slate-600 hover:text-slate-900 hover:bg-slate-200 transition cursor-pointer shadow-sm">
          <FaTimes className="w-4 h-4" />
        </button>

        {/* LEFT SIDE: Visual Studio Showcase (55%) */}
        <div className="lg:col-span-7 bg-gradient-to-br from-slate-50/90 via-white/60 to-slate-100/90 p-6 sm:p-12 flex flex-col justify-between relative border-b lg:border-b-0 lg:border-r border-slate-200/70">
          <div className="relative z-10">
            <div className="flex items-center space-x-2 mb-3 sm:mb-4">
              <span
                className="w-2.5 h-2.5 rounded-full animate-pulse"
                style={{ backgroundColor: currentTheme.accentHex }}
              />
              <span className="text-[11px] font-mono uppercase tracking-widest text-slate-500">
                Luminous Studio // Client Portal
              </span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-serif text-slate-900 tracking-tight">
              Design Without Boundaries.
            </h1>
            <p className="text-xs font-mono text-slate-600 mt-2 max-w-sm">
              Step into our next-generation client workspace. Seamless
              multi-step commission onboarding with live aura tuning.
            </p>
          </div>

          {/* Interactive Floating Glass Preview Box */}
          <div className="relative z-10 my-6 sm:my-8 p-5 sm:p-6 rounded-2xl bg-white/70 border border-white backdrop-blur-md shadow-md transition-all duration-500">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] uppercase font-mono text-slate-400">
                Active Scope Focus
              </span>
              <IoSparklesSharp
                className="w-3.5 h-3.5"
                style={{ color: currentTheme.accentHex }}
              />
            </div>
            <div className="text-base sm:text-lg font-bold text-slate-900 mb-1">
              {currentTheme.title}
            </div>
            <div
              className="flex items-center space-x-2 text-xs font-mono"
              style={{ color: currentTheme.accentHex }}>
              <span>Pipeline: Active</span>
              <span>•</span>
              <span>Client Tier 01</span>
            </div>
          </div>

          <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-slate-400 pt-2">
            <span>© 2026 LUMINOUS COLLECTIVE</span>
            <span>SECURE OAUTH 2.0</span>
          </div>
        </div>

        {/* RIGHT SIDE: Multi-Step Client Auth & Onboarding (45%) */}
        <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between bg-white/50">
          <div className="flex items-center justify-between mb-6">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">
              Step 0{step} / 03
            </span>
            <div className="flex space-x-1">
              {[1, 2, 3].map((s) => (
                <div
                  key={s}
                  className={`h-1.5 rounded-full transition-all duration-300 ${step === s ? "w-10" : "w-4 bg-slate-200"}`}
                  style={{
                    backgroundColor:
                      step === s ? currentTheme.accentHex : undefined,
                  }}
                />
              ))}
            </div>
          </div>

          {!isCompleted ? (
            <div className="flex-1 flex flex-col justify-center py-2">
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div
                    key="s1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-1">
                        Client Credentials
                      </h3>
                      <p className="text-xs font-mono text-slate-500">
                        Secure entry for studio partners.
                      </p>
                    </div>

                    <div className="space-y-3 pt-1">
                      <div className="relative">
                        <FaEnvelope className="absolute left-4 top-3.5 w-4 h-4 text-slate-400" />
                        <input
                          type="email"
                          required
                          placeholder="partner@luminous.studio"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full bg-slate-100/90 border border-slate-200 rounded-xl px-12 py-3 text-slate-900 text-xs font-mono placeholder-slate-400 focus:outline-none focus:border-slate-400 transition"
                        />
                      </div>
                      <div className="relative">
                        <FaLock className="absolute left-4 top-3.5 w-4 h-4 text-slate-400" />
                        <input
                          type="password"
                          required
                          placeholder="••••••••••••"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="w-full bg-slate-100/90 border border-slate-200 rounded-xl px-12 py-3 text-slate-900 text-xs font-mono placeholder-slate-400 focus:outline-none focus:border-slate-400 transition"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 pt-1">
                      <button
                        type="button"
                        className="py-2.5 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-xl text-xs font-mono text-slate-700 flex items-center justify-center space-x-2 cursor-pointer transition shadow-sm">
                        <FaGoogle className="w-3.5 h-3.5" /> <span>Google</span>
                      </button>
                      <button
                        type="button"
                        className="py-2.5 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-xl text-xs font-mono text-slate-700 flex items-center justify-center space-x-2 cursor-pointer transition shadow-sm">
                        <FaGithub className="w-3.5 h-3.5" /> <span>GitHub</span>
                      </button>
                    </div>

                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="w-full mt-4 py-3 rounded-xl bg-slate-900 text-white font-semibold text-xs flex items-center justify-center space-x-2 hover:bg-slate-800 transition cursor-pointer shadow-md">
                      <span>Proceed to Project Scope</span>
                      <FaArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="s2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-1">
                        Select Project Scope
                      </h3>
                      <p className="text-xs font-mono text-slate-500">
                        Choosing a discipline shifts studio aura.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 gap-2.5">
                      {[
                        {
                          id: "branding",
                          label: "Brand Architecture",
                          icon: FaPalette,
                          desc: "Identity, systems & guidelines",
                        },
                        {
                          id: "web",
                          label: "Immersive Web",
                          icon: FaCode,
                          desc: "Next.js, Tailwind & Motion",
                        },
                        {
                          id: "motion",
                          label: "3D Motion & Spatial",
                          icon: FaCube,
                          desc: "Spline & spatial UI design",
                        },
                      ].map((item) => {
                        const Icon = item.icon;
                        const isSelected = scope === item.id;
                        return (
                          <div
                            key={item.id}
                            onClick={() => setScope(item.id)}
                            className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-center space-x-3 backdrop-blur-sm ${
                              isSelected
                                ? `bg-white border-slate-300 shadow-md`
                                : "bg-slate-50/70 border-slate-200/70 hover:bg-slate-100/80"
                            }`}>
                            <Icon
                              className={`w-4 h-4 ${isSelected ? currentTheme.primary : "text-slate-400"}`}
                            />
                            <div>
                              <div className="text-xs font-bold text-slate-900">
                                {item.label}
                              </div>
                              <div className="text-[10px] font-mono text-slate-500">
                                {item.desc}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    <div className="flex space-x-2 mt-4">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="px-4 py-2.5 rounded-xl bg-slate-100 text-slate-600 hover:bg-slate-200 text-xs font-mono cursor-pointer">
                        Back
                      </button>
                      <button
                        type="button"
                        onClick={() => setStep(3)}
                        className="flex-1 py-2.5 rounded-xl bg-slate-900 text-white font-semibold text-xs flex items-center justify-center space-x-2 hover:bg-slate-800 transition cursor-pointer shadow-md">
                        <span>Configure Budget</span>
                        <FaArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div
                    key="s3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-5">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-1">
                        Budget Allocation
                      </h3>
                      <p className="text-xs font-mono text-slate-500">
                        Fine-tune investment tier.
                      </p>
                    </div>

                    <div className="bg-slate-100/90 p-4 rounded-2xl border border-slate-200 space-y-3">
                      <div className="flex justify-between text-xs font-mono">
                        <span className="text-slate-600">
                          Estimated Investment
                        </span>
                        <span
                          className="font-bold"
                          style={{ color: currentTheme.accentHex }}>
                          ${budget}k USD
                        </span>
                      </div>
                      <input
                        type="range"
                        min="20"
                        max="150"
                        value={budget}
                        onChange={(e) => setBudget(e.target.value)}
                        className="w-full cursor-pointer accent-slate-900"
                      />
                    </div>

                    <div className="flex space-x-2 mt-4">
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="px-4 py-2.5 rounded-xl bg-slate-100 text-slate-600 hover:bg-slate-200 text-xs font-mono cursor-pointer">
                        Back
                      </button>
                      <button
                        type="button"
                        onClick={handleFinish}
                        className="flex-1 py-3 rounded-xl bg-emerald-600 text-white font-bold text-xs flex items-center justify-center space-x-2 hover:bg-emerald-500 transition cursor-pointer shadow-lg shadow-emerald-600/20">
                        <span>Initialize Commission</span>
                        <FaCheckCircle className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="py-12 text-center space-y-3 my-auto">
              <div className="w-14 h-14 bg-emerald-100 border border-emerald-300 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
                <FaCheckCircle className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 tracking-wider">
                COMMISSION SECURED
              </h3>
              <p className="text-[11px] font-mono text-slate-500">
                Studio partners notified. Welcome to Luminous.
              </p>
            </motion.div>
          )}

          <div className="text-[10px] font-mono text-slate-400 text-center pt-4">
            Encrypted End-to-End Glass Protocol
          </div>
        </div>
      </motion.div>
    </div>
  );
}
