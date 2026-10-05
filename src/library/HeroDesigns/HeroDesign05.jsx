import { motion } from "framer-motion";

export default function GamingHero() {
  return (
    <section className="relative min-h-screen bg-[#07090e] text-white overflow-hidden flex items-center justify-center px-6 lg:px-16">
      {/* bg ambient neon glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-cyan-600/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="absolute top-10 right-1 w-36 h-36 bg-cyan-600/30 rounded-full blur-[20px] pointer-events-none"></div>

      {/* main content grid */}
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* left content */}
        {/* <div className="lg:col-span-7 space-y-8">
          {/* live pluse badge *
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-inner">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span className="text-xs tracking-wider uppercase font-semibold text-cyan-400">
              Sesson 2027 // World Tournament Live
            </span>
          </motion.div>

          {/* main aggressive heading 
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight uppercase">
              Conquer The Arena. <br />{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400">
                Redefine Reality.
              </span>
            </h1>
            <p className="mt-6 text-slate-400 text-lg max-w-xl leading-tight font-light">
              Step into the ultimate next-gen esports ecosystem. Experience
              ultra-low latency, custom loadouts, and global tournaments built
              for elite competitors.
            </p>
          </motion.div>

          {/* cyber CTAs *
          <motion.div className="flex flex-wrap items-center gap-4 pt-2">
            {/* primary button with neon glow *
            <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold uppercase tracking-wider text-sm shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:shadow-[0_0_40px_rgba(6,182,212,0.6)] transition-all duration-300 transform hover:-translate-y-0.5">
              Play Now Free
            </button>

            {/* Secondary Glassmorphism Button *
            <button className="px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold uppercase tracking-wider text-sm backdrop-blur-md transition-all duration-300 flex items-center gap-3 group">
              Watch Trailer
            </button>
          </motion.div>
        </div> */}

        {/* Left Content (වම්පස ටෙක්ස්ට් සහ බටන්ස් කොටස) */}
        <div className="lg:col-span-7 space-y-8">
          {/* Live Pulse Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-inner">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span className="text-xs tracking-wider uppercase font-semibold text-cyan-400">
              Season 2027 // World Tournament Live
            </span>
          </motion.div>

          {/* Main Aggressive Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}>
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight uppercase leading-none">
              Conquer The Arena. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-500">
                Redefine Reality.
              </span>
            </h1>
            <p className="mt-6 text-slate-400 text-lg max-w-xl leading-tight font-light">
              Step into the ultimate next-gen esports ecosystem. Experience
              ultra-low latency, custom loadouts, and global tournaments built
              for elite competitors.
            </p>
          </motion.div>

          {/* Cyber CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap items-center gap-4 pt-2">
            {/* Primary Button with Neon Glow */}
            <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold uppercase tracking-wider text-sm shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:shadow-[0_0_40px_rgba(6,182,212,0.6)] transition-all duration-300 transform hover:-translate-y-0.5">
              Play Now Free
            </button>

            {/* Secondary Glassmorphism Button */}
            <button className="px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold uppercase tracking-wider text-sm backdrop-blur-md transition-all duration-300 flex items-center gap-3 group">
              <svg
                className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform"
                fill="currentColor"
                viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              Watch Trailer
            </button>
          </motion.div>
        </div>

        {/* right column */}
        {/* <div className="lg:col-span-5 relative flex items-center justify-center mt-10 lg:mt-0">
          {/* glowing bg ring / backdrop *
          <div className="absolute w-80 h-80 lg:w-105 lg:h-105 bg-gradient-to-tr from-cyan-400/30 to-purple-600/30 rounded-full blur-3xl animate-pluse" />
          {/* centeral visual card / character frame *
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative w-full h-112.5 rounded-3xl bg-gradient-to-b from-white/10 to-white/5 border border-white/10 backdrop-blur-xl p-4 flex flex-col items-center justify-center overflow-hidden shadow-2xl group">
            {/* internal cyber grid lines or placholder for 3d render *
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:2rem_2rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20" />

            {/* esport badge / character placeholder *
            <div className="relative z-10 text-center space-y-4">
              <div className="w-24 h-24 mx-auto rounded-2xl bg-gradient-to-tr from-cyan-500 to-purple-600 p-px shadow-[0_0_20px_rgba(6,182,212,0.4)]">
                <div className="w-full h-full bg-[#090d16] rounded-2xl flex- items-center justify-center">
                  <svg
                    className="w-12 h-12 text-cyan-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-white font-bold tracking-widset uppercase text-sm">
                  Nexus Prime // v2.7
                </h3>
                <p className="text-xs text-cyan-400 mt-1">
                  Interactive 3D Asset Slot
                </p>
              </div>
            </div>
          </motion.div>

          {/* floating glass HUD card 1 (top left) *
          <motion.div className="absolute -top-6 left-4 bg-slate-900/80 bakcdrop-blur-xl border border-white/10 px-4 py-3 rounded-2xl shadow-xl flex items-center gap-3 z-20">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold">
              🔥
            </div>
            <div>
              <span className="text-xs text-slate-400">Active Players</span>
              <span className="text-sm font-bold text-white">250K Online</span>
            </div>
          </motion.div>

          {/* floating glass HUD card 2 (bottom right) *
          <motion.div
            animate={{ y: [10, -10, 10] }}
            transition={{ reprat: Infinity, duration: 5, ease: "easeInOut" }}
            className="absolute -bottom-6 -right-4 bg-slate-900/80 backdrop-blur-xl border border-white/10 px-4 py-3 rounded-2xl shadow-xl flex items-center gap-3 z-20">
            <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-400 font-bold">
              🏆
            </div>
            <div>
              <span className="text-xs text-slate-400">Prize Pool</span>
              <span className="text-sm font-bold text-white">
                $1,000,000 USD
              </span>
            </div>
          </motion.div>
        </div> */}

        {/* Right Column (දකුණුපස 3D Character Visual සහ Floating HUD Stats Cards) */}
        <div className="lg:col-span-5 relative flex items-center justify-center mt-10 lg:mt-0">
          {/* Glowing Background Ring / Backdrop */}
          <div className="absolute w-[320px] h-[320px] lg:w-[420px] lg:h-[420px] bg-gradient-to-tr from-cyan-500/30 to-purple-600/30 rounded-full blur-3xl -z-10 animate-pulse" />

          {/* Central Visual Card / Character Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative w-full h-[450px] rounded-3xl bg-gradient-to-b from-white/10 to-white/5 border border-white/10 backdrop-blur-xl p-4 flex flex-col items-center justify-center overflow-hidden shadow-2xl group">
            {/* Internal Cyber Grid lines or placeholder for 3D render */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:2rem_2rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20" />

            {/* Esport Badge / Character Placeholder */}
            <div className="relative z-10 text-center space-y-4">
              <div className="w-24 h-24 mx-auto rounded-2xl bg-gradient-to-tr from-cyan-500 to-purple-600 p-[1px] shadow-[0_0_20px_rgba(6,182,212,0.4)]">
                <div className="w-full h-full bg-[#090d16] rounded-2xl flex items-center justify-center">
                  <svg
                    className="w-12 h-12 text-cyan-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-white font-bold tracking-widest uppercase text-sm">
                  Nexus Prime // v2.7
                </h3>
                <p className="text-xs text-cyan-400 mt-1">
                  Interactive 3D Asset Slot
                </p>
              </div>
            </div>
          </motion.div>

          {/* Floating Glass HUD Card 1 (Top Left) */}
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute -top-6 -left-4 bg-slate-900/80 backdrop-blur-xl border border-white/10 px-4 py-3 rounded-2xl shadow-xl flex items-center gap-3 z-20">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold">
              🔥
            </div>
            <div>
              <div className="text-xs text-slate-400">Active Players</div>
              <div className="text-sm font-bold text-white">250K+ Online</div>
            </div>
          </motion.div>

          {/* Floating Glass HUD Card 2 (Bottom Right) */}
          <motion.div
            animate={{ y: [10, -10, 10] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="absolute -bottom-6 -right-4 bg-slate-900/80 backdrop-blur-xl border border-white/10 px-4 py-3 rounded-2xl shadow-xl flex items-center gap-3 z-20">
            <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-400 font-bold">
              🏆
            </div>
            <div>
              <div className="text-xs text-slate-400">Prize Pool</div>
              <div className="text-sm font-bold text-white">$1,000,000 USD</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

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
