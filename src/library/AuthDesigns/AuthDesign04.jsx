// import React, { useState, useEffect } from "react";

// const THEMES = {
//   hybrid: {
//     id: "hybrid",
//     name: "Hybrid Athletic",
//     border: "border-lime-400/50",
//     text: "text-lime-400",
//     bgGlow: "rgba(163,230,53,0.25)",
//     gradient: "from-lime-400 via-emerald-400 to-teal-500",
//     hex: "#a3e635",
//     tagline: "Stamina meets raw power output.",
//   },
//   hypertrophy: {
//     id: "hypertrophy",
//     name: "Hypertrophy Forge",
//     border: "border-rose-500/50",
//     text: "text-rose-500",
//     bgGlow: "rgba(244,63,94,0.25)",
//     gradient: "from-rose-500 via-red-500 to-orange-600",
//     hex: "#f43f5e",
//     tagline: "Maximum muscle fiber recruitment.",
//   },
//   endurance: {
//     id: "endurance",
//     name: "Vascular Endurance",
//     border: "border-cyan-400/50",
//     text: "text-cyan-400",
//     bgGlow: "rgba(34,211,238,0.25)",
//     gradient: "from-cyan-400 via-sky-400 to-blue-600",
//     hex: "#22d3ee",
//     tagline: "Infinite cardiovascular threshold.",
//   },
//   combat: {
//     id: "combat",
//     name: "Apex Combat Protocol",
//     border: "border-amber-400/50",
//     text: "text-amber-400",
//     bgGlow: "rgba(251,191,36,0.25)",
//     gradient: "from-amber-400 via-yellow-500 to-orange-500",
//     hex: "#fbbf24",
//     tagline: "Explosive kinetic reaction speed.",
//   },
// };

// const MOTIVATIONAL_SLOGANS = [
//   "PUSH BEYOND THE LACTATE THRESHOLD",
//   "NEURAL RECRUITMENT AT 100% CAPACITY",
//   "FORGE THE TITANIUM PHYSIQUE",
//   "UNCOMPROMISING ELITE PERFORMANCE",
// ];

// export default function App() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [mode, setMode] = useState("register"); // 'signin' or 'register'
//   const [currentStep, setCurrentStep] = useState(1);
//   const [selectedTheme, setSelectedTheme] = useState("hybrid");
//   const [loading, setLoading] = useState(false);
//   const [sloganIndex, setSloganIndex] = useState(0);

//   // Form fields
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//     fullName: "",
//     athleteAlias: "",
//     weeklyHours: 12,
//     intensityLevel: "Elite (Zone 5)",
//     socialProvider: "",
//   });

//   const [bioScanActive, setBioScanActive] = useState(false);
//   const [bioScanComplete, setBioScanComplete] = useState(false);
//   const [error, setError] = useState("");
//   const [successToken, setSuccessToken] = useState("");

//   // Rotate motivational slogans
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setSloganIndex((prev) => (prev + 1) % MOTIVATIONAL_SLOGANS.length);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, []);

//   const activeColorConfig = THEMES[selectedTheme];

//   const handleNext = () => {
//     setError("");
//     if (currentStep === 1) {
//       if (!formData.email || !formData.password) {
//         setError("Authentication credentials required.");
//         return;
//       }
//       if (!bioScanComplete) {
//         setError("Biometric fingerprint validation required.");
//         return;
//       }
//     } else if (currentStep === 2 && mode === "register") {
//       if (!formData.fullName || !formData.athleteAlias) {
//         setError("Athlete legal name and secure alias required.");
//         return;
//       }
//     }

//     setLoading(true);
//     setTimeout(() => {
//       setLoading(false);
//       const maxSteps = mode === "register" ? 3 : 2;
//       if (currentStep === maxSteps) {
//         setSuccessToken(
//           "HUD_AUTH_NODE_" +
//             Math.random().toString(36).substring(2, 10).toUpperCase() +
//             "_X26",
//         );
//         setCurrentStep(maxSteps + 1); // Success state
//       } else {
//         setCurrentStep((prev) => prev + 1);
//       }
//     }, 600);
//   };

//   const handlePrev = () => {
//     setError("");
//     setCurrentStep((prev) => Math.max(prev - 1, 1));
//   };

//   const handleSocialAuth = (provider) => {
//     setFormData({
//       ...formData,
//       socialProvider: provider,
//       email: `athlete.${provider.toLowerCase()}@telemetry.grid`,
//     });
//     setBioScanComplete(true);
//     setLoading(true);
//     setTimeout(() => {
//       setLoading(false);
//       setSuccessToken(
//         "OAUTH_TELEMETRY_" +
//           provider.toUpperCase() +
//           "_" +
//           Math.random().toString(36).substring(2, 8).toUpperCase(),
//       );
//       setCurrentStep(mode === "register" ? 3 : 2);
//     }, 600);
//   };

//   const triggerBiometricScan = () => {
//     setBioScanActive(true);
//     setTimeout(() => {
//       setBioScanActive(false);
//       setBioScanComplete(true);
//     }, 1500);
//   };

//   return (
//     <div className="min-h-screen bg-[#05070f] text-slate-100 flex flex-col items-center justify-center relative overflow-x-hidden font-sans selection:bg-lime-400 selection:text-black p-4 sm:p-8">
//       {}
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(163,230,53,0.06),transparent_50%)] pointer-events-none"></div>

//       {/* Background Live Telemetry Grid Simulation */}
//       <div className="absolute inset-0 opacity-15 pointer-events-none bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

//       <div className="z-10 text-center max-w-4xl mx-auto px-4">
//         <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/80 border border-slate-800 text-lime-400 text-xs tracking-widest uppercase mb-6 backdrop-blur-xl shadow-[0_0_25px_rgba(163,230,53,0.15)]">
//           <span className="w-2.5 h-2.5 rounded-full bg-lime-400 animate-ping"></span>
//           2026/2027 Biometric Telemetry Protocol
//         </div>

//         <h1 className="text-4xl sm:text-7xl font-black tracking-tighter bg-gradient-to-r from-white via-slate-200 to-lime-300 bg-clip-text text-transparent mb-6 leading-none">
//           THE BIOMETRIC TELEMETRY HUD
//         </h1>

//         <p className="text-slate-400 text-base sm:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
//           Initialize your elite neural-training profile. Experience real-time
//           biometric tracking, adaptive discipline zoning, and zero-latency
//           cryptographic access.
//         </p>

//         {/* Live Telemetry Mini-Card Preview */}
//         <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10 max-w-3xl mx-auto text-left">
//           {[
//             {
//               label: "HEART RATE",
//               val: "142 BPM",
//               sub: "Zone 4 Active",
//               color: "text-rose-500",
//             },
//             {
//               label: "ENERGY OUTPUT",
//               val: "2,840 kcal",
//               sub: "+18% Peak Efficiency",
//               color: "text-lime-400",
//             },
//             {
//               label: "NEURAL SYNC",
//               val: "99.94%",
//               sub: "Zero Latency",
//               color: "text-cyan-400",
//             },
//             {
//               label: "ATHLETE STATUS",
//               val: "ARMED",
//               sub: "Level 5 Sovereign",
//               color: "text-amber-400",
//             },
//           ].map((stat, i) => (
//             <div
//               key={i}
//               className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-md">
//               <div className="text-[10px] font-mono text-slate-500 tracking-wider mb-1">
//                 {stat.label}
//               </div>
//               <div
//                 className={`text-lg sm:text-xl font-bold font-mono ${stat.color}`}>
//                 {stat.val}
//               </div>
//               <div className="text-[10px] text-slate-400 mt-0.5">
//                 {stat.sub}
//               </div>
//             </div>
//           ))}
//         </div>

//         <button
//           type="button"
//           onClick={() => {
//             setIsOpen(true);
//             setCurrentStep(1);
//             setError("");
//           }}
//           className="cursor-pointer group relative px-10 py-5 rounded-2xl bg-gradient-to-r from-lime-400 via-emerald-400 to-teal-500 text-black font-extrabold text-sm tracking-widest uppercase shadow-[0_0_40px_rgba(163,230,53,0.35)] hover:shadow-[0_0_60px_rgba(163,230,53,0.6)] transition-all duration-300 transform hover:-scale-105 active:scale-95">
//           <span className="relative z-10 flex items-center gap-3">
//             Launch Athlete HUD Terminal
//             <svg
//               className="w-5 h-5 transition-transform group-hover:translate-x-1.5"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor">
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2.5"
//                 d="M14 5l7 7m0 0l-7 7m7-7H3"
//               />
//             </svg>
//           </span>
//         </button>
//       </div>

//       {}
//       {isOpen && (
//         <div
//           className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-2xl transition-all duration-500"
//           onClick={() => setIsOpen(false)}>
//           <div
//             className={`relative w-[95vw] max-w-5xl max-h-[92vh] overflow-y-auto overflow-x-hidden rounded-3xl bg-[#080c16] border-2 shadow-[0_0_100px_rgba(0,0,0,0.9)] grid grid-cols-1 lg:grid-cols-12 transition-colors duration-500 custom-scrollbar pointer-events-auto ${activeColorConfig.border}`}
//             onClick={(e) => e.stopPropagation()}
//             style={{ boxShadow: `0 0 50px ${activeColorConfig.bgGlow}` }}>
//             {/* Close Button */}
//             <button
//               type="button"
//               onClick={() => setIsOpen(false)}
//               className="cursor-pointer absolute top-5 right-5 z-50 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all duration-200">
//               <svg
//                 className="w-5 h-5"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor">
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               </svg>
//             </button>

//             {}
//             <div className="lg:col-span-5 bg-gradient-to-b from-[#0d1326] to-[#060913] p-6 sm:p-8 border-b lg:border-b-0 lg:border-r border-slate-800/80 flex flex-col justify-between relative overflow-hidden">
//               {/* Dynamic Glow Accent Behind Left Pane */}
//               <div
//                 className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl pointer-events-none transition-colors duration-700 opacity-20"
//                 style={{ backgroundColor: activeColorConfig.hex }}></div>

//               <div>
//                 {/* Mode Selector Header */}
//                 <div className="flex bg-black/50 p-1.5 rounded-2xl border border-slate-800 mb-8">
//                   <button
//                     type="button"
//                     onClick={() => {
//                       setMode("signin");
//                       setCurrentStep(1);
//                       setError("");
//                     }}
//                     className={`cursor-pointer flex-1 py-2.5 text-xs font-bold tracking-wider rounded-xl transition-all ${
//                       mode === "signin"
//                         ? "bg-white text-black shadow-lg"
//                         : "text-slate-400 hover:text-white"
//                     }`}>
//                     SIGN IN
//                   </button>
//                   <button
//                     type="button"
//                     onClick={() => {
//                       setMode("register");
//                       setCurrentStep(1);
//                       setError("");
//                     }}
//                     className={`cursor-pointer flex-1 py-2.5 text-xs font-bold tracking-wider rounded-xl transition-all ${
//                       mode === "register"
//                         ? "bg-white text-black shadow-lg"
//                         : "text-slate-400 hover:text-white"
//                     }`}>
//                     REGISTER
//                   </button>
//                 </div>

//                 <div className="flex items-center gap-2 text-xs tracking-widest uppercase font-mono mb-2">
//                   <span
//                     className={`w-2 h-2 rounded-full animate-pulse`}
//                     style={{ backgroundColor: activeColorConfig.hex }}></span>
//                   <span style={{ color: activeColorConfig.hex }}>
//                     Telemetry Protocol Active
//                   </span>
//                 </div>

//                 <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white mb-4">
//                   {mode === "register"
//                     ? "Athlete Onboarding HUD"
//                     : "Secure Terminal Access"}
//                 </h2>

//                 {/* Live ECG Waveform Animation */}
//                 <div className="p-4 rounded-2xl bg-black/60 border border-slate-800/80 mb-6 relative overflow-hidden">
//                   <div className="flex justify-between items-center text-[10px] font-mono text-slate-400 mb-2">
//                     <span>LIVE ECG TELEMETRY</span>
//                     <span className="text-rose-500 font-bold animate-pulse">
//                       ● LIVE FEED
//                     </span>
//                   </div>
//                   <div className="h-12 w-full flex items-center">
//                     <svg
//                       className="w-full h-10 text-lime-400"
//                       viewBox="0 0 300 50"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2">
//                       <path
//                         d="M0 25 H50 L60 10 L75 40 L90 15 L105 35 L115 25 H160 L170 5 L190 45 L205 25 H300"
//                         className="animate-pulse"
//                         style={{ stroke: activeColorConfig.hex }}
//                       />
//                     </svg>
//                   </div>
//                   <div className="text-[11px] font-mono text-slate-400 mt-1 italic">
//                     "{MOTIVATIONAL_SLOGANS[sloganIndex]}"
//                   </div>
//                 </div>

//                 {/* Step Column Indicator (Register Mode) */}
//                 {mode === "register" ? (
//                   <div className="space-y-4 relative">
//                     <div className="absolute left-3.5 top-3 bottom-3 w-0.5 bg-slate-800 z-0"></div>
//                     <div
//                       className="absolute left-3.5 top-3 w-0.5 transition-all duration-500 z-0"
//                       style={{
//                         height: `${((currentStep - 1) / 2) * 100}%`,
//                         backgroundColor: activeColorConfig.hex,
//                       }}></div>

//                     {[
//                       {
//                         num: 1,
//                         title: "Credentials & Biometrics",
//                         desc: "Email, password & thumbprint",
//                       },
//                       {
//                         num: 2,
//                         title: "Discipline & Identity",
//                         desc: "Bento Grid & Athlete Alias",
//                       },
//                       {
//                         num: 3,
//                         title: "Telemetry Baseline",
//                         desc: "Weekly commitment & intensity",
//                       },
//                     ].map((step) => {
//                       const isActive = currentStep === step.num;
//                       const isCompleted = currentStep > step.num;
//                       return (
//                         <div
//                           key={step.num}
//                           className="relative z-10 flex items-start gap-3.5">
//                           <div
//                             className={`w-7 h-7 rounded-xl flex items-center justify-center font-mono text-xs font-bold transition-all duration-300 ${
//                               isActive
//                                 ? "bg-white text-black scale-110 shadow-lg"
//                                 : isCompleted
//                                   ? "bg-slate-800 text-white border"
//                                   : "bg-slate-900 border border-slate-800 text-slate-500"
//                             }`}
//                             style={
//                               isActive
//                                 ? { backgroundColor: activeColorConfig.hex }
//                                 : {}
//                             }>
//                             {isCompleted ? "✓" : step.num}
//                           </div>
//                           <div>
//                             <div
//                               className={`text-xs font-bold transition-colors ${isActive ? "text-white" : isCompleted ? "text-slate-300" : "text-slate-500"}`}>
//                               {step.title}
//                             </div>
//                             <div className="text-[10px] text-slate-500 mt-0.5">
//                               {step.desc}
//                             </div>
//                           </div>
//                         </div>
//                       );
//                     })}
//                   </div>
//                 ) : (
//                   <div className="p-4 rounded-2xl bg-black/40 border border-slate-800 text-xs text-slate-400 font-mono space-y-2">
//                     <div className="text-white font-bold">
//                       Secure Sign-In Mode
//                     </div>
//                     <div>
//                       Authenticate instantly via hardware token, passkey, or
//                       registered social mesh node.
//                     </div>
//                   </div>
//                 )}
//               </div>

//               <div className="mt-8 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-500">
//                 <span>HUD_OS v9.4</span>
//                 <span className="text-emerald-400 font-bold">
//                   SECURE ENCLAVE
//                 </span>
//               </div>
//             </div>

//             {}
//             <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between bg-[#080d1a]/80">
//               <div>
//                 <div className="mb-6 flex justify-between items-start">
//                   <div>
//                     <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
//                       STAGE 0{currentStep} / {mode === "register" ? "03" : "02"}
//                     </span>
//                     <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
//                       {currentStep === 1 &&
//                         (mode === "register"
//                           ? "Credentials & Biometric Scan"
//                           : "Sign In to HUD")}
//                       {currentStep === 2 &&
//                         (mode === "register"
//                           ? "Select Training Discipline"
//                           : "Hardware MFA Check")}
//                       {currentStep === 3 && "Telemetry Baseline & Intensity"}
//                       {currentStep === 4 && "Initialization Complete"}
//                     </h3>
//                   </div>
//                 </div>

//                 {error && (
//                   <div className="mb-6 p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs flex items-center gap-2.5">
//                     <svg
//                       className="w-4 h-4 flex-shrink-0"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor">
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="2"
//                         d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
//                       />
//                     </svg>
//                     {error}
//                   </div>
//                 )}

//                 {}
//                 {currentStep === 1 && (
//                   <div className="space-y-4">
//                     <div>
//                       <label className="block text-[10px] uppercase tracking-wider text-slate-400 font-mono mb-1.5">
//                         Athlete Email Address
//                       </label>
//                       <input
//                         type="email"
//                         placeholder="operator@telemetry.gym"
//                         value={formData.email}
//                         onChange={(e) =>
//                           setFormData({ ...formData, email: e.target.value })
//                         }
//                         className="w-full px-4 py-3.5 rounded-xl bg-black/60 border border-slate-800 text-white placeholder-slate-600 focus:outline-none transition-all text-sm font-mono"
//                         style={{ focusBorderColor: activeColorConfig.hex }}
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-[10px] uppercase tracking-wider text-slate-400 font-mono mb-1.5">
//                         Master Key Password (Min 8 chars)
//                       </label>
//                       <input
//                         type="password"
//                         placeholder="••••••••••••••••"
//                         value={formData.password}
//                         onChange={(e) =>
//                           setFormData({ ...formData, password: e.target.value })
//                         }
//                         className="w-full px-4 py-3.5 rounded-xl bg-black/60 border border-slate-800 text-white placeholder-slate-600 focus:outline-none transition-all text-sm font-mono"
//                       />
//                     </div>

//                     {/* Biometric Thumbprint Simulation */}
//                     <div className="pt-2">
//                       <label className="block text-[10px] uppercase tracking-wider text-slate-400 font-mono mb-2">
//                         Biometric Thumbprint Scan
//                       </label>
//                       <div className="p-4 rounded-2xl bg-black/40 border border-slate-800 flex items-center justify-between">
//                         <div className="flex items-center gap-3">
//                           <button
//                             type="button"
//                             onClick={triggerBiometricScan}
//                             className={`cursor-pointer w-12 h-12 rounded-xl flex items-center justify-center border transition-all ${
//                               bioScanComplete
//                                 ? "bg-emerald-500/20 border-emerald-500 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.4)]"
//                                 : bioScanActive
//                                   ? "bg-amber-500/20 border-amber-500 text-amber-400 animate-pulse"
//                                   : "bg-slate-900 border-slate-700 text-slate-400 hover:border-slate-500"
//                             }`}>
//                             <svg
//                               className="w-6 h-6"
//                               fill="none"
//                               viewBox="0 0 24 24"
//                               stroke="currentColor">
//                               <path
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 strokeWidth="1.5"
//                                 d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.115 6.845l.209-.054A13.973 13.973 0 0016 11a8 8 0 10-15.992.518L0 12h12"
//                               />
//                             </svg>
//                           </button>
//                           <div>
//                             <div className="text-xs font-bold text-white">
//                               {bioScanComplete
//                                 ? "Biometrics Verified"
//                                 : bioScanActive
//                                   ? "Scanning Neural Fingerprint..."
//                                   : "Click to Verify Sensor"}
//                             </div>
//                             <div className="text-[10px] text-slate-400">
//                               Hardware TPM 2.0 Encrypted
//                             </div>
//                           </div>
//                         </div>
//                         {bioScanComplete && (
//                           <span className="text-emerald-400 font-bold text-xs font-mono">
//                             SECURE
//                           </span>
//                         )}
//                       </div>
//                     </div>

//                     {/* Social Mesh Login */}
//                     <div className="pt-2">
//                       <div className="relative flex py-2 items-center">
//                         <div className="flex-grow border-t border-slate-800"></div>
//                         <span className="flex-shrink mx-3 text-slate-500 text-[10px] font-mono uppercase">
//                           Or Social Mesh Node
//                         </span>
//                         <div className="flex-grow border-t border-slate-800"></div>
//                       </div>

//                       <div className="grid grid-cols-3 gap-2.5 mt-2">
//                         {[
//                           { name: "Google", icon: "G" },
//                           { name: "GitHub", icon: "GH" },
//                           { name: "Facebook", icon: "f" },
//                         ].map((soc) => (
//                           <button
//                             key={soc.name}
//                             type="button"
//                             onClick={() => handleSocialAuth(soc.name)}
//                             className="cursor-pointer flex items-center justify-center gap-2 py-3 rounded-xl bg-black/40 border border-slate-800 hover:border-slate-600 hover:bg-slate-900 text-slate-300 hover:text-white transition-all text-xs font-semibold">
//                             <span className="w-4 h-4 rounded-full bg-slate-800 flex items-center justify-center text-[9px] font-mono">
//                               {soc.icon}
//                             </span>
//                             {soc.name}
//                           </button>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 )}

//                 {}
//                 {currentStep === 2 && mode === "register" && (
//                   <div className="space-y-4">
//                     <div>
//                       <label className="block text-[10px] uppercase tracking-wider text-slate-400 font-mono mb-2">
//                         Select Core Training Discipline (Shifts HUD Accent)
//                       </label>
//                       <div className="grid grid-cols-2 gap-3">
//                         {Object.values(THEMES).map((thm) => {
//                           const isSelected = selectedTheme === thm.id;
//                           return (
//                             <button
//                               key={thm.id}
//                               type="button"
//                               onClick={() => setSelectedTheme(thm.id)}
//                               className={`cursor-pointer p-4 rounded-2xl border text-left transition-all relative overflow-hidden group ${
//                                 isSelected
//                                   ? "bg-slate-900/90 shadow-lg scale-[1.02]"
//                                   : "bg-black/40 border-slate-800 hover:border-slate-700"
//                               }`}
//                               style={
//                                 isSelected
//                                   ? {
//                                       borderColor: thm.hex,
//                                       boxShadow: `0 0 20px ${thm.bgGlow}`,
//                                     }
//                                   : {}
//                               }>
//                               <div className="flex justify-between items-start mb-2">
//                                 <span
//                                   className="w-3 h-3 rounded-full"
//                                   style={{ backgroundColor: thm.hex }}></span>
//                                 {isSelected && (
//                                   <span
//                                     className="text-[10px] font-mono font-bold"
//                                     style={{ color: thm.hex }}>
//                                     ACTIVE
//                                   </span>
//                                 )}
//                               </div>
//                               <div className="text-xs font-bold text-white mb-1">
//                                 {thm.name}
//                               </div>
//                               <div className="text-[10px] text-slate-400">
//                                 {thm.tagline}
//                               </div>
//                             </button>
//                           );
//                         })}
//                       </div>
//                     </div>

//                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
//                       <div>
//                         <label className="block text-[10px] uppercase tracking-wider text-slate-400 font-mono mb-1.5">
//                           Full Legal Name
//                         </label>
//                         <input
//                           type="text"
//                           placeholder="Marcus Vance"
//                           value={formData.fullName}
//                           onChange={(e) =>
//                             setFormData({
//                               ...formData,
//                               fullName: e.target.value,
//                             })
//                           }
//                           className="w-full px-4 py-3 rounded-xl bg-black/60 border border-slate-800 text-white placeholder-slate-600 focus:outline-none transition-all text-xs font-mono"
//                         />
//                       </div>
//                       <div>
//                         <label className="block text-[10px] uppercase tracking-wider text-slate-400 font-mono mb-1.5">
//                           Athlete Alias / Handle
//                         </label>
//                         <input
//                           type="text"
//                           placeholder="@vance_titan"
//                           value={formData.athleteAlias}
//                           onChange={(e) =>
//                             setFormData({
//                               ...formData,
//                               athleteAlias: e.target.value,
//                             })
//                           }
//                           className="w-full px-4 py-3 rounded-xl bg-black/60 border border-slate-800 text-white placeholder-slate-600 focus:outline-none transition-all text-xs font-mono"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 )}

//                 {}
//                 {currentStep === 3 && mode === "register" && (
//                   <div className="space-y-6">
//                     <div>
//                       <div className="flex justify-between items-center mb-2">
//                         <label className="text-[10px] uppercase tracking-wider text-slate-400 font-mono">
//                           Weekly Training Commitment
//                         </label>
//                         <span
//                           className="text-xs font-bold font-mono"
//                           style={{ color: activeColorConfig.hex }}>
//                           {formData.weeklyHours} Hours / Week
//                         </span>
//                       </div>
//                       <input
//                         type="range"
//                         min="4"
//                         max="28"
//                         step="2"
//                         value={formData.weeklyHours}
//                         onChange={(e) =>
//                           setFormData({
//                             ...formData,
//                             weeklyHours: e.target.value,
//                           })
//                         }
//                         className="w-full accent-lime-400 cursor-pointer h-2 bg-slate-800 rounded-lg"
//                       />
//                     </div>

//                     <div>
//                       <label className="block text-[10px] uppercase tracking-wider text-slate-400 font-mono mb-2">
//                         Baseline Intensity Tier
//                       </label>
//                       <div className="grid grid-cols-3 gap-2.5">
//                         {["Intermediate", "Advanced", "Elite (Zone 5)"].map(
//                           (lvl) => (
//                             <button
//                               key={lvl}
//                               type="button"
//                               onClick={() =>
//                                 setFormData({
//                                   ...formData,
//                                   intensityLevel: lvl,
//                                 })
//                               }
//                               className={`cursor-pointer p-3 rounded-xl border text-center text-xs font-bold transition-all ${
//                                 formData.intensityLevel === lvl
//                                   ? "bg-slate-900 text-white shadow-md"
//                                   : "bg-black/40 border-slate-800 text-slate-400 hover:border-slate-700"
//                               }`}
//                               style={
//                                 formData.intensityLevel === lvl
//                                   ? {
//                                       borderColor: activeColorConfig.hex,
//                                       color: activeColorConfig.hex,
//                                     }
//                                   : {}
//                               }>
//                               {lvl}
//                             </button>
//                           ),
//                         )}
//                       </div>
//                     </div>

//                     <div className="p-4 rounded-2xl bg-black/40 border border-slate-800">
//                       <div className="text-[10px] font-mono text-slate-500 mb-1">
//                         PROVISIONING SUMMARY
//                       </div>
//                       <div className="text-xs text-white font-mono flex justify-between">
//                         <span>
//                           Discipline:{" "}
//                           <strong style={{ color: activeColorConfig.hex }}>
//                             {THEMES[selectedTheme].name}
//                           </strong>
//                         </span>
//                         <span>
//                           Commitment:{" "}
//                           <strong>{formData.weeklyHours}h/wk</strong>
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                 )}

//                 {/* Sign-in Step 2 */}
//                 {currentStep === 2 && mode === "signin" && (
//                   <div className="space-y-4 text-center py-4">
//                     <div className="w-14 h-14 mx-auto rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-white font-mono text-lg animate-pulse">
//                       🔐
//                     </div>
//                     <div>
//                       <h4 className="text-lg font-bold text-white">
//                         Hardware Key Verification
//                       </h4>
//                       <p className="text-xs text-slate-400 mt-1">
//                         Approve prompt on your authenticator device or YubiKey.
//                       </p>
//                     </div>
//                     <div className="p-3.5 rounded-xl bg-black/60 border border-slate-800 font-mono text-xs text-slate-300">
//                       Operator: {formData.email || "operator@telemetry.gym"}
//                     </div>
//                   </div>
//                 )}

//                 {}
//                 {currentStep > (mode === "register" ? 3 : 2) && (
//                   <div className="space-y-6 text-center py-6">
//                     <div
//                       className="w-16 h-16 mx-auto rounded-full flex items-center justify-center text-black font-black text-2xl shadow-2xl animate-bounce"
//                       style={{
//                         backgroundColor: activeColorConfig.hex,
//                         boxShadow: `0 0 30px ${activeColorConfig.bgGlow}`,
//                       }}>
//                       ⚡
//                     </div>
//                     <div>
//                       <h4 className="text-2xl font-black text-white tracking-tight">
//                         SYSTEM ARMED: WELCOME TO THE GRID
//                       </h4>
//                       <p className="text-xs text-slate-400 mt-1">
//                         Your elite telemetry node and biometric profile have
//                         been successfully initialized.
//                       </p>
//                     </div>

//                     <div className="p-4 rounded-2xl bg-black/80 border border-slate-800 font-mono text-xs tracking-wider break-all select-all text-left">
//                       <div className="text-[10px] text-slate-500 mb-1">
//                         SECURE ACCESS TOKEN:
//                       </div>
//                       <span style={{ color: activeColorConfig.hex }}>
//                         {successToken}
//                       </span>
//                     </div>
//                   </div>
//                 )}
//               </div>

//               {}
//               <div className="mt-8 pt-6 border-t border-slate-800 flex items-center justify-between">
//                 {currentStep > 1 &&
//                 currentStep <= (mode === "register" ? 3 : 2) ? (
//                   <button
//                     type="button"
//                     onClick={handlePrev}
//                     className="cursor-pointer px-6 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800 transition-all text-xs font-bold uppercase tracking-wider">
//                     Back
//                   </button>
//                 ) : (
//                   <div></div>
//                 )}

//                 {currentStep <= (mode === "register" ? 3 : 2) ? (
//                   <button
//                     type="button"
//                     disabled={loading}
//                     onClick={handleNext}
//                     className="cursor-pointer px-8 py-3.5 rounded-xl text-black font-black text-xs tracking-widest uppercase transition-all flex items-center gap-2.5 disabled:opacity-50 shadow-lg"
//                     style={{
//                       background: `linear-gradient(to right, ${activeColorConfig.hex}, #ffffff)`,
//                       boxShadow: `0 0 25px ${activeColorConfig.bgGlow}`,
//                     }}>
//                     {loading ? (
//                       <>
//                         <span className="w-3.5 h-3.5 rounded-full border-2 border-black border-t-transparent animate-spin"></span>
//                         Initializing HUD...
//                       </>
//                     ) : (
//                       <>
//                         Continue Stage
//                         <svg
//                           className="w-4 h-4"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           stroke="currentColor">
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth="2.5"
//                             d="M14 5l7 7m0 0l-7 7m7-7H3"
//                           />
//                         </svg>
//                       </>
//                     )}
//                   </button>
//                 ) : (
//                   <button
//                     type="button"
//                     onClick={() => setIsOpen(false)}
//                     className="cursor-pointer w-full py-4 rounded-xl text-black font-black text-xs tracking-widest uppercase shadow-2xl transition-all"
//                     style={{
//                       background: `linear-gradient(to right, ${activeColorConfig.hex}, #ffffff)`,
//                       boxShadow: `0 0 40px ${activeColorConfig.bgGlow}`,
//                     }}>
//                     Enter Training Dashboard
//                   </button>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaShieldAlt,
  FaHeartbeat,
  FaFire,
  FaBolt,
  FaBullseye,
  FaArrowRight,
  FaCheckCircle,
  FaTimes,
  FaLock,
  FaEnvelope,
  FaGithub,
  FaGoogle,
} from "react-icons/fa";

export default function OrbitOSAuth({ isOpen = true, onClose }) {
  const [step, setStep] = useState(1);
  const [discipline, setDiscipline] = useState("hypertrophy");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [intensity, setIntensity] = useState(85);
  const [isSuccess, setIsSuccess] = useState(false);

  // Dynamic accent colors based on discipline
  const disciplineThemes = {
    hypertrophy: {
      primary: "text-rose-500",
      bg: "bg-rose-500/10",
      border: "border-rose-500/50",
      glow: "shadow-[0_0_30px_rgba(244,63,94,0.3)]",
      ringColor: "#f43f5e",
    },
    endurance: {
      primary: "text-cyan-400",
      bg: "bg-cyan-400/10",
      border: "border-cyan-400/50",
      glow: "shadow-[0_0_30px_rgba(34,211,238,0.3)]",
      ringColor: "#22d3ee",
    },
    combat: {
      primary: "text-amber-400",
      bg: "bg-amber-400/10",
      border: "border-amber-400/50",
      glow: "shadow-[0_0_30px_rgba(251,191,36,0.3)]",
      ringColor: "#fbbf24",
    },
    hybrid: {
      primary: "text-lime-400",
      bg: "bg-lime-400/10",
      border: "border-lime-400/50",
      glow: "shadow-[0_0_30px_rgba(163,230,53,0.3)]",
      ringColor: "#a3e635",
    },
  };

  const currentTheme = disciplineThemes[discipline];
  const ringProgress = (step / 3) * 100;

  const handleComplete = (e) => {
    e.preventDefault();
    setIsSuccess(true);
    setTimeout(() => {
      if (onClose) onClose();
    }, 2500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl p-4 overflow-hidden">
      {/* Background Cosmic Particle Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="relative w-full max-w-xl bg-zinc-950 border border-zinc-800 rounded-3xl p-8 overflow-hidden shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-20 p-2.5 rounded-full bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 transition cursor-pointer">
          <FaTimes className="w-5 h-5" />
        </button>

        {/* Header HUD */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <div
              className={`w-3 h-3 rounded-full animate-ping ${currentTheme.primary.replace("text-", "bg-")}`}
            />
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">
              Orbit OS // Athlete Initializer
            </span>
          </div>
          <span className="text-xs font-mono text-zinc-500">
            STEP 0{step} / 03
          </span>
        </div>

        {/* Concentric Activity Rings Visualizer */}
        <div className="relative w-48 h-48 mx-auto mb-8 flex items-center justify-center">
          <svg className="w-full h-full transform -rotate-90">
            <circle
              cx="96"
              cy="96"
              r="80"
              stroke="currentColor"
              strokeWidth="8"
              className="text-zinc-900"
              fill="none"
            />
            <circle
              cx="96"
              cy="96"
              r="80"
              stroke={currentTheme.ringColor}
              strokeWidth="8"
              strokeDasharray={502.4}
              strokeDashoffset={502.4 - (502.4 * ringProgress) / 100}
              strokeLinecap="round"
              fill="none"
              className="transition-all duration-700 ease-out"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <FaHeartbeat
              className={`w-8 h-8 ${currentTheme.primary} mb-1 animate-pulse`}
            />
            <span className="text-2xl font-black text-white tracking-tighter">
              {Math.round(ringProgress)}%
            </span>
            <span className="text-[10px] uppercase font-mono text-zinc-500">
              Sync Active
            </span>
          </div>
        </div>

        {/* Form Body */}
        <AnimatePresence mode="wait">
          {!isSuccess ? (
            <motion.div
              key={step}
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -20, opacity: 0 }}
              transition={{ duration: 0.3 }}>
              {step === 1 && (
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-white text-center mb-2">
                    Initialize Credentials
                  </h3>
                  <div className="relative">
                    <FaEnvelope className="absolute left-4 top-3.5 w-5 h-5 text-zinc-500" />
                    <input
                      type="email"
                      required
                      placeholder="athlete@domain.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-zinc-900/80 border border-zinc-800 rounded-xl px-12 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-500 font-mono text-sm"
                    />
                  </div>
                  <div className="relative">
                    <FaLock className="absolute left-4 top-3.5 w-5 h-5 text-zinc-500" />
                    <input
                      type="password"
                      required
                      placeholder="••••••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full bg-zinc-900/80 border border-zinc-800 rounded-xl px-12 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-500 font-mono text-sm"
                    />
                  </div>

                  {/* Social Auth */}
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <button
                      type="button"
                      className="flex items-center justify-center space-x-2 py-2.5 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 rounded-xl text-xs font-mono text-zinc-300 transition cursor-pointer">
                      <FaGoogle className="w-4 h-4" /> <span>Google</span>
                    </button>
                    <button
                      type="button"
                      className="flex items-center justify-center space-x-2 py-2.5 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 rounded-xl text-xs font-mono text-zinc-300 transition cursor-pointer">
                      <FaGithub className="w-4 h-4" /> <span>GitHub</span>
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="w-full mt-4 py-3.5 rounded-xl bg-white text-black font-semibold flex items-center justify-center space-x-2 hover:bg-zinc-200 transition cursor-pointer">
                    <span>Proceed to Discipline</span>
                    <FaArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-white text-center mb-2">
                    Select Core Discipline
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      {
                        id: "hypertrophy",
                        label: "Hypertrophy",
                        desc: "Mass & Power",
                        icon: FaFire,
                      },
                      {
                        id: "endurance",
                        label: "Endurance",
                        desc: "Stamina & VO2",
                        icon: FaBolt,
                      },
                      {
                        id: "combat",
                        label: "Combat",
                        desc: "Agility & Speed",
                        icon: FaShieldAlt,
                      },
                      {
                        id: "hybrid",
                        label: "Hybrid",
                        desc: "Total Athletic",
                        icon: FaBullseye,
                      },
                    ].map((item) => {
                      const Icon = item.icon;
                      const isSelected = discipline === item.id;
                      return (
                        <div
                          key={item.id}
                          onClick={() => setDiscipline(item.id)}
                          className={`p-4 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                            isSelected
                              ? `${currentTheme.bg} ${currentTheme.border}${currentTheme.glow}`
                              : "bg-zinc-900/50 border-zinc-800 hover:border-zinc-700"
                          }`}>
                          <Icon
                            className={`w-5 h-5 ${isSelected ? currentTheme.primary : "text-zinc-500"} mb-2`}
                          />
                          <div>
                            <div className="text-sm font-bold text-white">
                              {item.label}
                            </div>
                            <div className="text-[10px] font-mono text-zinc-400">
                              {item.desc}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="flex space-x-3 mt-6">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="px-5 py-3 rounded-xl bg-zinc-900 text-zinc-400 font-semibold hover:bg-zinc-800 transition cursor-pointer text-sm">
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="flex-1 py-3 rounded-xl bg-white text-black font-semibold flex items-center justify-center space-x-2 hover:bg-zinc-200 transition cursor-pointer">
                      <span>Configure Telemetry</span>
                      <FaArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-5">
                  <h3 className="text-lg font-bold text-white text-center mb-2">
                    Intensity Calibration
                  </h3>
                  <div className="bg-zinc-900/60 p-4 rounded-2xl border border-zinc-800 space-y-3">
                    <div className="flex justify-between text-sm font-mono">
                      <span className="text-zinc-400">
                        Weekly Target Threshold
                      </span>
                      <span className={currentTheme.primary}>
                        {intensity} Hours
                      </span>
                    </div>
                    <input
                      type="range"
                      min="20"
                      max="120"
                      value={intensity}
                      onChange={(e) => setIntensity(e.target.value)}
                      className="w-full accent-white cursor-pointer"
                    />
                  </div>

                  <div className="flex space-x-3 mt-6">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="px-5 py-3 rounded-xl bg-zinc-900 text-zinc-400 font-semibold hover:bg-zinc-800 transition cursor-pointer text-sm">
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={handleComplete}
                      className="flex-1 py-3 rounded-xl bg-emerald-500 text-black font-bold flex items-center justify-center space-x-2 hover:bg-emerald-400 transition cursor-pointer shadow-lg shadow-emerald-500/20">
                      <span>Initialize Profile</span>
                      <FaCheckCircle className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          ) : (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="py-12 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-500/20 border border-emerald-500 text-emerald-400 rounded-full flex items-center justify-center mx-auto animate-bounce">
                <FaCheckCircle className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white tracking-wider">
                SYSTEM ARMED: GRID ONLINE
              </h3>
              <p className="text-xs font-mono text-zinc-400">
                Profile synchronized successfully. Welcome to elite tier.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
