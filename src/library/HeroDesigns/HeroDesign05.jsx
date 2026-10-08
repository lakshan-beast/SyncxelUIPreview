// import { motion } from "framer-motion";

// export default function GamingHero() {
//   return (
//     <section className="relative min-h-screen bg-[#07090e] text-white overflow-hidden flex items-center justify-center px-6 lg:px-16">
//       {/* bg ambient neon glows */}
//       <div className="absolute top-1/4 left-10 w-96 h-96 bg-cyan-600/20 rounded-full blur-[100px] pointer-events-none"></div>
//       <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] pointer-events-none"></div>

//       <div className="absolute top-10 right-1 w-36 h-36 bg-cyan-600/30 rounded-full blur-[20px] pointer-events-none"></div>

//       {/* main content grid */}
//       <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
//         {/* left content */}
//         {/* <div className="lg:col-span-7 space-y-8">
//           {/* live pluse badge *
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-inner">
//             <span className="relative flex h-2 w-2">
//               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-400 opacity-75"></span>
//               <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
//             </span>
//             <span className="text-xs tracking-wider uppercase font-semibold text-cyan-400">
//               Sesson 2027 // World Tournament Live
//             </span>
//           </motion.div>

//           {/* main aggressive heading
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}>
//             <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight uppercase">
//               Conquer The Arena. <br />{" "}
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400">
//                 Redefine Reality.
//               </span>
//             </h1>
//             <p className="mt-6 text-slate-400 text-lg max-w-xl leading-tight font-light">
//               Step into the ultimate next-gen esports ecosystem. Experience
//               ultra-low latency, custom loadouts, and global tournaments built
//               for elite competitors.
//             </p>
//           </motion.div>

//           {/* cyber CTAs *
//           <motion.div className="flex flex-wrap items-center gap-4 pt-2">
//             {/* primary button with neon glow *
//             <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold uppercase tracking-wider text-sm shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:shadow-[0_0_40px_rgba(6,182,212,0.6)] transition-all duration-300 transform hover:-translate-y-0.5">
//               Play Now Free
//             </button>

//             {/* Secondary Glassmorphism Button *
//             <button className="px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold uppercase tracking-wider text-sm backdrop-blur-md transition-all duration-300 flex items-center gap-3 group">
//               Watch Trailer
//             </button>
//           </motion.div>
//         </div> */}

//         {/* Left Content (වම්පස ටෙක්ස්ට් සහ බටන්ස් කොටස) */}
//         <div className="lg:col-span-7 space-y-8">
//           {/* Live Pulse Badge */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-inner">
//             <span className="relative flex h-2 w-2">
//               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
//               <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
//             </span>
//             <span className="text-xs tracking-wider uppercase font-semibold text-cyan-400">
//               Season 2027 // World Tournament Live
//             </span>
//           </motion.div>

//           {/* Main Aggressive Heading */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.1 }}>
//             <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight uppercase leading-none">
//               Conquer The Arena. <br />
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-500">
//                 Redefine Reality.
//               </span>
//             </h1>
//             <p className="mt-6 text-slate-400 text-lg max-w-xl leading-tight font-light">
//               Step into the ultimate next-gen esports ecosystem. Experience
//               ultra-low latency, custom loadouts, and global tournaments built
//               for elite competitors.
//             </p>
//           </motion.div>

//           {/* Cyber CTAs */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             className="flex flex-wrap items-center gap-4 pt-2">
//             {/* Primary Button with Neon Glow */}
//             <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold uppercase tracking-wider text-sm shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:shadow-[0_0_40px_rgba(6,182,212,0.6)] transition-all duration-300 transform hover:-translate-y-0.5">
//               Play Now Free
//             </button>

//             {/* Secondary Glassmorphism Button */}
//             <button className="px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold uppercase tracking-wider text-sm backdrop-blur-md transition-all duration-300 flex items-center gap-3 group">
//               <svg
//                 className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform"
//                 fill="currentColor"
//                 viewBox="0 0 24 24">
//                 <path d="M8 5v14l11-7z" />
//               </svg>
//               Watch Trailer
//             </button>
//           </motion.div>
//         </div>

//         {/* right column */}
//         {/* <div className="lg:col-span-5 relative flex items-center justify-center mt-10 lg:mt-0">
//           {/* glowing bg ring / backdrop *
//           <div className="absolute w-80 h-80 lg:w-105 lg:h-105 bg-gradient-to-tr from-cyan-400/30 to-purple-600/30 rounded-full blur-3xl animate-pluse" />
//           {/* centeral visual card / character frame *
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.6, delay: 0.3 }}
//             className="relative w-full h-112.5 rounded-3xl bg-gradient-to-b from-white/10 to-white/5 border border-white/10 backdrop-blur-xl p-4 flex flex-col items-center justify-center overflow-hidden shadow-2xl group">
//             {/* internal cyber grid lines or placholder for 3d render *
//             <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:2rem_2rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20" />

//             {/* esport badge / character placeholder *
//             <div className="relative z-10 text-center space-y-4">
//               <div className="w-24 h-24 mx-auto rounded-2xl bg-gradient-to-tr from-cyan-500 to-purple-600 p-px shadow-[0_0_20px_rgba(6,182,212,0.4)]">
//                 <div className="w-full h-full bg-[#090d16] rounded-2xl flex- items-center justify-center">
//                   <svg
//                     className="w-12 h-12 text-cyan-400"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24">
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="1.5"
//                       d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
//                     />
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="1.5"
//                       d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
//                     />
//                   </svg>
//                 </div>
//               </div>
//               <div>
//                 <h3 className="text-white font-bold tracking-widset uppercase text-sm">
//                   Nexus Prime // v2.7
//                 </h3>
//                 <p className="text-xs text-cyan-400 mt-1">
//                   Interactive 3D Asset Slot
//                 </p>
//               </div>
//             </div>
//           </motion.div>

//           {/* floating glass HUD card 1 (top left) *
//           <motion.div className="absolute -top-6 left-4 bg-slate-900/80 bakcdrop-blur-xl border border-white/10 px-4 py-3 rounded-2xl shadow-xl flex items-center gap-3 z-20">
//             <div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold">
//               🔥
//             </div>
//             <div>
//               <span className="text-xs text-slate-400">Active Players</span>
//               <span className="text-sm font-bold text-white">250K Online</span>
//             </div>
//           </motion.div>

//           {/* floating glass HUD card 2 (bottom right) *
//           <motion.div
//             animate={{ y: [10, -10, 10] }}
//             transition={{ reprat: Infinity, duration: 5, ease: "easeInOut" }}
//             className="absolute -bottom-6 -right-4 bg-slate-900/80 backdrop-blur-xl border border-white/10 px-4 py-3 rounded-2xl shadow-xl flex items-center gap-3 z-20">
//             <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-400 font-bold">
//               🏆
//             </div>
//             <div>
//               <span className="text-xs text-slate-400">Prize Pool</span>
//               <span className="text-sm font-bold text-white">
//                 $1,000,000 USD
//               </span>
//             </div>
//           </motion.div>
//         </div> */}

//         {/* Right Column (දකුණුපස 3D Character Visual සහ Floating HUD Stats Cards) */}
//         <div className="lg:col-span-5 relative flex items-center justify-center mt-10 lg:mt-0">
//           {/* Glowing Background Ring / Backdrop */}
//           <div className="absolute w-[320px] h-[320px] lg:w-[420px] lg:h-[420px] bg-gradient-to-tr from-cyan-500/30 to-purple-600/30 rounded-full blur-3xl -z-10 animate-pulse" />

//           {/* Central Visual Card / Character Frame */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.6, delay: 0.3 }}
//             className="relative w-full h-[450px] rounded-3xl bg-gradient-to-b from-white/10 to-white/5 border border-white/10 backdrop-blur-xl p-4 flex flex-col items-center justify-center overflow-hidden shadow-2xl group">
//             {/* Internal Cyber Grid lines or placeholder for 3D render */}
//             <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:2rem_2rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20" />

//             {/* Esport Badge / Character Placeholder */}
//             <div className="relative z-10 text-center space-y-4">
//               <div className="w-24 h-24 mx-auto rounded-2xl bg-gradient-to-tr from-cyan-500 to-purple-600 p-[1px] shadow-[0_0_20px_rgba(6,182,212,0.4)]">
//                 <div className="w-full h-full bg-[#090d16] rounded-2xl flex items-center justify-center">
//                   <svg
//                     className="w-12 h-12 text-cyan-400"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24">
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="1.5"
//                       d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
//                     />
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="1.5"
//                       d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
//                     />
//                   </svg>
//                 </div>
//               </div>
//               <div>
//                 <h3 className="text-white font-bold tracking-widest uppercase text-sm">
//                   Nexus Prime // v2.7
//                 </h3>
//                 <p className="text-xs text-cyan-400 mt-1">
//                   Interactive 3D Asset Slot
//                 </p>
//               </div>
//             </div>
//           </motion.div>

//           {/* Floating Glass HUD Card 1 (Top Left) */}
//           <motion.div
//             animate={{ y: [-10, 10, -10] }}
//             transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
//             className="absolute -top-6 -left-4 bg-slate-900/80 backdrop-blur-xl border border-white/10 px-4 py-3 rounded-2xl shadow-xl flex items-center gap-3 z-20">
//             <div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold">
//               🔥
//             </div>
//             <div>
//               <div className="text-xs text-slate-400">Active Players</div>
//               <div className="text-sm font-bold text-white">250K+ Online</div>
//             </div>
//           </motion.div>

//           {/* Floating Glass HUD Card 2 (Bottom Right) */}
//           <motion.div
//             animate={{ y: [10, -10, 10] }}
//             transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
//             className="absolute -bottom-6 -right-4 bg-slate-900/80 backdrop-blur-xl border border-white/10 px-4 py-3 rounded-2xl shadow-xl flex items-center gap-3 z-20">
//             <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-400 font-bold">
//               🏆
//             </div>
//             <div>
//               <div className="text-xs text-slate-400">Prize Pool</div>
//               <div className="text-sm font-bold text-white">$1,000,000 USD</div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

// import { motion } from "framer-motion";

// export default function GamingHero() {
//   return (
//     <section className="relative min-h-screen bg-[#030712] text-white overflow-hidden flex items-center justify-center px-6 lg:px-20 py-12">
//       {/* Background Cyberpunk Ambient Glows & Grid Pattern */}
//       <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-cyan-600/15 rounded-full blur-[140px] pointer-events-none" />
//       <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-fuchsia-600/15 rounded-full blur-[140px] pointer-events-none" />
//       <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

//       {/* Main Grid Container */}
//       <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
//         {/* Left Column: Content */}
//         <div className="lg:col-span-7 space-y-8">
//           {/* Live Pulse Badge */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-cyan-950/40 border border-cyan-500/30 backdrop-blur-xl shadow-[0_0_20px_rgba(6,182,212,0.15)]">
//             <span className="relative flex h-2.5 w-2.5">
//               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
//               <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
//             </span>
//             <span className="text-xs tracking-widest uppercase font-bold text-cyan-400">
//               Season 2027 // World Championship Live
//             </span>
//           </motion.div>

//           {/* Aggressive Heading */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.1 }}>
//             <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight uppercase leading-[1.05]">
//               Conquer The Arena. <br />
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-300 to-fuchsia-500 drop-shadow-[0_0_35px_rgba(6,182,212,0.3)]">
//                 Redefine Reality.
//               </span>
//             </h1>
//             <p className="mt-6 text-slate-400 text-lg sm:text-xl max-w-xl leading-relaxed font-light">
//               Step into the ultimate next-gen esports ecosystem. Experience
//               ultra-low latency, custom tactical loadouts, and global
//               tournaments built for elite competitors.
//             </p>
//           </motion.div>

//           {/* Cyber CTAs */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             className="flex flex-wrap items-center gap-5 pt-2">
//             {/* Primary Neon Button */}
//             <button className="relative group px-8.py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-extrabold uppercase tracking-widest text-sm shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:shadow-[0_0_50px_rgba(6,182,212,0.7)] transition-all duration-300 transform hover:-translate-y-1">
//               <span className="relative z-10 flex items-center gap-2">
//                 Play Now Free
//                 <svg
//                   className="w-4 h-4 group-hover:translate-x-1 transition-transform"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24">
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2.5"
//                     d="M14 5l7 7m0 0l-7 7m7-7H3"
//                   />
//                 </svg>
//               </span>
//             </button>

//             {/* Secondary Glassmorphism Button */}
//             <button className="px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold uppercase tracking-widest text-sm backdrop-blur-xl transition-all duration-300 flex items-center gap-3 group hover:border-cyan-500/40">
//               <div className="w-7 h-7 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
//                 <svg
//                   className="w-3.5 h-3.5 ml-0.5"
//                   fill="currentColor"
//                   viewBox="0 0 24 24">
//                   <path d="M8 5v14l11-7z" />
//                 </svg>
//               </div>
//               Watch Trailer
//             </button>
//           </motion.div>
//         </div>

//         {/* Right Column: 3D Visual & Floating HUD Cards */}
//         <div className="lg:col-span-5 relative flex items-center justify-center mt-12 lg:mt-0">
//           {/* Glowing Backdrop Frame */}
//           <div className="absolute w-[340px] h-[340px] sm:w-[420px] sm:h-[420px] bg-gradient-to-tr from-cyan-500/20 to-fuchsia-600/20 rounded-full blur-3xl -z-10 animate-pulse" />

//           {/* Central 3D Game Vault Card */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.95 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.6, delay: 0.3 }}
//             className="relative w-full h-[480px] rounded-3xl bg-slate-900/60 border border-white/10 backdrop-blur-2xl p-6 flex flex-col items-center justify-center overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] group">
//             {/* Inner Hologram Grid */}
//             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.1)_0,transparent_70%)] pointer-events-none" />

//             {/* Visual Centerpiece */}
//             <div className="relative z-10 text-center space-y-5">
//               <div className="w-28 h-28 mx-auto rounded-2xl bg-gradient-to-tr from-cyan-500 via-indigo-600 to-fuchsia-600 p-[2px] shadow-[0_0_30px_rgba(6,182,212,0.5)] group-hover:scale-105 transition-transform duration-500">
//                 <div className="w-full h-full bg-[#070b14] rounded-2xl flex items-center justify-center">
//                   <svg
//                     className="w-14 h-14 text-cyan-400 drop-shadow-[0_0_10px_rgba(6,182,212,0.8)]"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24">
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="1.5"
//                       d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
//                     />
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="1.5"
//                       d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
//                     />
//                   </svg>
//                 </div>
//               </div>
//               <div>
//                 <h3 className="text-white font-bold tracking-[0.2em] uppercase text-sm">
//                   Nexus Prime // v2.7
//                 </h3>
//                 <p className="text-xs text-cyan-400 mt-1 font-mono">
//                   REAL-TIME 3D RENDERING ACTIVE
//                 </p>
//               </div>
//             </div>
//           </motion.div>

//           {/* Floating Glass HUD Card 1 (Top Left) */}
//           <motion.div
//             animate={{ y: [-12, 12, -12] }}
//             transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
//             className="absolute -top-6 -left-4 sm:-left-8 bg-slate-900/90 backdrop-blur-2xl border border-cyan-500/30 px-5 py-3.5 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex items-center gap-4 z-20">
//             <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-bold shadow-inner">
//               🔥
//             </div>
//             <div>
//               <div className="text-[11px] text-slate-400 uppercase tracking-wider font-medium">
//                 Active Players
//               </div>
//               <div className="text-sm font-extrabold text-white">
//                 250,490 Online
//               </div>
//             </div>
//           </motion.div>

//           {/* Floating Glass HUD Card 2 (Bottom Right) */}
//           <motion.div
//             animate={{ y: [12, -12, 12] }}
//             transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
//             className="absolute -bottom-6 -right-4 sm:-right-8 bg-slate-900/90 backdrop-blur-2xl border border-fuchsia-500/30 px-5 py-3.5 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex items-center gap-4 z-20">
//             <div className="w-10 h-10 rounded-xl bg-fuchsia-500/20 border border-fuchsia-500/30 flex items-center justify-center text-fuchsia-400 font-bold shadow-inner">
//               🏆
//             </div>
//             <div>
//               <div className="text-[11px] text-slate-400 uppercase tracking-wider font-medium">
//                 Tournament Pool
//               </div>
//               <div className="text-sm font-extrabold text-white">
//                 $1,000,000 USD
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

import React, { useState, useEffect, useRef } from "react";
import {
  FaCrown,
  FaCrosshairs,
  FaChevronRight,
  FaPlay,
  FaGlobe,
  FaMicrochip,
  FaExternalLinkAlt,
} from "react-icons/fa";

export default function LuxuryEsportsHero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
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

  return (
    <div
      ref={heroRef}
      className="relative min-h-screen w-full bg-[#050508] text-white overflow-hidden font-sans selection:bg-amber-500/30 selection:text-amber-200">
      {/* Dynamic Ambient Spotlight */}
      <div
        className="pointer-events-none absolute -inset-px opacity-40 transition-opacity duration-300"
        style={{
          background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(212, 175, 55, 0.12), transparent 60%)`,
        }}
      />

      {/* Grid Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f2315_1px,transparent_1px),linear-gradient(to_bottom,#1f1f2315_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Luxury Navigation Header */}
      {/* <header className="relative z-50 flex items-center justify-between px-8 lg:px-20 py-8 border-b border-white/5 backdrop-blur-md">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-amber-400/20 to-amber-600/5 border border-amber-500/30 group-hover:border-amber-400 transition-colors duration-300">
            <FaMicrochip className="w-5 h-5 text-amber-400 transition-transform duration-300 group-hover:scale-110" />
            <div className="absolute inset-0 rounded-lg bg-amber-400/10 blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <span className="text-xl font-bold tracking-[0.25em] bg-gradient-to-r from-white via-zinc-200 to-amber-400/80 bg-clip-text text-transparent">
            AETHEC
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-10 text-xs font-medium tracking-[0.2em] uppercase text-zinc-400">
          <a
            href="#roster"
            className="hover:text-amber-400 transition-colors duration-200">
            Roster
          </a>
          <a
            href="#tournaments"
            className="hover:text-amber-400 transition-colors duration-200">
            Tournaments
          </a>
          <a
            href="#technology"
            className="hover:text-amber-400 transition-colors duration-200">
            Technology
          </a>
          <a
            href="#legacy"
            className="hover:text-amber-400 transition-colors duration-200">
            Legacy
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <button className="hidden sm:inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-white/5 hover:bg-white/10 text-zinc-200 border border-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-sm">
            <span>Global Portal</span>
            <FaGlobe className="w-3.5 h-3.5 text-amber-400" />
          </button>
          <button className="relative group px-6 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase overflow-hidden bg-gradient-to-r from-amber-400 to-amber-600 text-zinc-950 transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]">
            <span className="relative z-10 flex items-center gap-2 font-bold">
              Join Elite
              <FaExternalLinkAlt className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>
      </header> */}

      {/* Hero Content Section */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 lg:px-20 pt-20 pb-32 flex flex-col items-center lg:items-start">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-zinc-900/80 border border-amber-500/20 backdrop-blur-xl mb-8 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
          </span>
          <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-amber-400/90">
            Season 2026 World Championship Active
          </span>
        </div>

        {/* Main Headline & Description */}
        <div className="grid lg:grid-cols-12 gap-12 items-center w-full">
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] mb-6">
              THE APEX OF <br />
              <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600 bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(212,175,55,0.2)]">
                COMPETITIVE
              </span>{" "}
              <br />
              EXCELLENCE
            </h1>

            <p className="text-zinc-400 text-sm sm:text-base lg:text-lg max-w-xl font-normal leading-relaxed mb-10 tracking-wide">
              Engineering the absolute pinnacle of esports supremacy.
              Uncompromising precision hardware, elite global rosters, and
              immersive luxury competition experiences.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto">
              <button
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="w-full sm:w-auto group relative px-8 py-4 rounded-xl font-bold text-sm tracking-widest uppercase bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-zinc-950 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_50px_rgba(212,175,55,0.4)] flex items-center justify-center gap-3">
                <span>Explore Roster</span>
                <FaChevronRight
                  className={`w-4 h-4 transition-transform duration-300 ${isHovered ? "translate-x-1" : ""}`}
                />
              </button>

              <button className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-sm tracking-widest uppercase bg-zinc-900/60 hover:bg-zinc-800/80 text-zinc-200 border border-white/10 hover:border-amber-500/40 transition-all duration-300 backdrop-blur-md flex items-center justify-center gap-3 group">
                <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-amber-400 group-hover:text-zinc-950 transition-colors">
                  <FaPlay className="w-3 h-3 fill-current ml-0.5" />
                </div>
                <span>Watch Anthem</span>
              </button>
            </div>
          </div>

          {/* Interactive Visual Showcase / Luxury Artifact */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            <div className="relative w-full max-w-md aspect-square rounded-3xl bg-gradient-to-b from-zinc-900/90 to-zinc-950/90 border border-white/10 p-8 shadow-2xl backdrop-blur-2xl group overflow-hidden">
              {/* Inner ambient glow */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-amber-500/20 rounded-full blur-3xl pointer-events-none group-hover:bg-amber-500/30 transition-all duration-500" />

              <div className="relative z-10 flex flex-col justify-between h-full">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[10px] font-mono tracking-widest uppercase text-amber-400/80 block mb-1">
                      Elite Asset #01
                    </span>
                    <h3 className="text-xl font-bold tracking-wider text-white">
                      CHRONOS V EXPERT
                    </h3>
                  </div>
                  <div className="p-2.5 rounded-xl bg-amber-400/10 border border-amber-500/20 text-amber-400">
                    <FaCrosshairs className="w-5 h-5" />
                  </div>
                </div>

                {/* Central Holographic Visual Representation */}
                <div className="my-8 relative flex items-center justify-center">
                  <div className="w-36 h-36 rounded-full border border-amber-500/20 animate-[spin_20s_linear_infinite] absolute" />
                  <div className="w-28 h-28 rounded-full border border-dashed border-white/20 animate-[spin_15s_linear_infinite_reverse] absolute" />
                  <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-[0_0_30px_rgba(212,175,55,0.4)] group-hover:scale-105 transition-transform duration-500">
                    <FaCrown className="w-10 h-10 text-zinc-950" />
                  </div>
                </div>

                {/* Card footer metrics */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/5">
                  <div>
                    <span className="text-[10px] text-zinc-500 tracking-wider uppercase block">
                      Latency
                    </span>
                    <span className="text-sm font-mono font-bold text-white">
                      0.12ms
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] text-zinc-500 tracking-wider uppercase block">
                      Win Ratio
                    </span>
                    <span className="text-sm font-mono font-bold text-amber-400">
                      98.4%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Ticker / Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full mt-24 pt-12 border-t border-white/5">
          {[
            { label: "Global Championships", value: "14+" },
            { label: "Active Elite Pros", value: "48" },
            { label: "Prize Pool Won", value: "$42.5M" },
            { label: "Global Fanbase", value: "12.8M" },
          ].map((stat, index) => (
            <div key={index} className="flex flex-col">
              <span className="text-2xl sm:text-3xl font-extrabold tracking-tight bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent mb-1 font-mono">
                {stat.value}
              </span>
              <span className="text-xs uppercase tracking-[0.15em] text-zinc-500 font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
