// import { useState } from "react";
// import { motion } from "framer-motion";
// import { button } from "framer-motion/client";

// export default function GamingHero() {
//   const [activeGame, setActiveGame] = useState("VALORANT");
//   const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

//   const handleMouseMove = (e) => {
//     const rect = e.currentTarget.getBoundingClientRect();
//     setMousePos({
//       x: e.clientX - rect.left,
//       y: e.clientY - rect.top,
//     });
//   };

//   const games = [
//     {
//       id: "VALORANT",
//       color: "from-rose-500 to-red-600",
//       glow: "rgba(244,63,94,0.3)",
//     },
//     {
//       id: "CS2",
//       color: "from-amber-500 to-orange-600",
//       glow: "rgba(245,158,11,0.3)",
//     },
//     {
//       id: "DOTA 2",
//       color: "from-cyan-500 to-blue-600",
//       glow: "rgba(6,182,212,0.3)",
//     },
//   ];

//   return (
//     <section
//       onMouseMove={handleMouseMove}
//       className="relative min-h-screen bg-[#030712] text-white overflow-hidden flex flex-col justify-between pt-16 px-6 lg:px-20 selection:bg-cyan-500 selection:text-black">
//       {/* Interarctive Mouse-following Splotlight Glow */}
//       <div
//         className="absolute pointer-events-none w-[600px] h-[600px] rounded-full blur-[80px] transition-all duration-100 -translate-x-1/2 -translate-y-1/2"
//         style={{
//           left: mousePos.x,
//           top: mousePos.y,
//           background:
//             games.find((g) => g.id === activeGame)?.glow ||
//             "rgba(6,182,212,0.2)",
//         }}
//       />

//       {/* Background Ambient Glows & Cyber Grid */}
//       <div className="absolute top-1/4 left-10 w-[400px] h-[400px] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />
//       <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-fuchsia-600/10 rounded-full blur-[120px] pointer-events-none" />
//       <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293708_1px,transparent_1px),linear-gradient(to_bottom,#1f293708_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

//       {/* Main Grid Container */}
//       <div className="max-w-7xl w-ful mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 my-auto py-12">
//         {/* left column : content */}
//         <div className="lg:col-span-7 space-x-8">
//           {/* Live Pulse badge & game switcher tabs */}
//           <div className="flex flex-wrap items-center gap-4">
//             <motion.div
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-slate-900/80 border border-white/10 backdrop-blur-xl shadow-inner">
//               <span className="relative flex h-2.5 w-2.5">
//                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
//                 <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
//               </span>
//               <span className="text-xs tracking-widset uppercase font-bold text-cyan-400">
//                 Sesson 2027 | Live
//               </span>
//             </motion.div>

//             {/* Interactive Game Switch Tabs */}
//             <div className="flex items-center bg-slate-900/90 border border-white/10 p-1 rounded-full backdrop-blur-xl">
//               {games.map((game) => (
//                 <button
//                   key={game.id}
//                   onClick={() => setActiveGame(game.id)}
//                   className={`px-5 py-2 rounded-full text-xs font-bold tracking-wider transition-all duration-300 ${activeGame === game.id ? "bg-gradient-to-r " + game.color + "text-white shadow-lg" : "text-slate-400 hover:text-white"}  `}>
//                   {game.id}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function GamingHero() {
  const [activeGame, setActiveGame] = useState('VALORANT');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Mouse coordinate tracker for the interactive spotlight effect
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const games = [
    { id: 'VALORANT', color: 'from-rose-500 to-red-600', glow: 'rgba(244,63,94,0.3)' },
    { id: 'CS2', color: 'from-amber-500 to-orange-600', glow: 'rgba(245,158,11,0.3)' },
    { id: 'DOTA 2', color: 'from-cyan-500 to-blue-600', glow: 'rgba(6,182,212,0.3)' },
  ];

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="relative min-h-screen bg-[#030712] text-white overflow-hidden flex flex-col justify-between pt-16 px-6 lg:px-20 selection:bg-cyan-500 selection:text-black"
    >
      
      {/* 1. Interactive Mouse-following Spotlight Glow */}
      <div 
        className="absolute pointer-events-none w-[600px] h-[600px] rounded-full blur-[150px] transition-all duration-300 -translate-x-1/2 -translate-y-1/2"
        style={{
          left: mousePos.x,
          top: mousePos.y,
          background: games.find(g => g.id === activeGame)?.glow || 'rgba(6,182,212,0.2)',
        }}
      />

      {/* Background Ambient Glows & Cyber Grid */}
      <div className="absolute top-1/4 left-10 w-[400px] h-[400px] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-fuchsia-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293708_1px,transparent_1px),linear-gradient(to_bottom,#1f293708_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      {/* Main Grid Container */}
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 my-auto py-12">
        
        {/* Left Column: Content */}
        <div className="lg:col-span-7 space-y-8">
          
          {/* Live Pulse Badge & Game Switcher Tabs */}
          <div className="flex flex-wrap items-center gap-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-slate-900/80 border border-white/10 backdrop-blur-xl shadow-inner"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
              </span>
              <span className="text-xs tracking-widest uppercase font-bold text-cyan-400">
                Season 2027 // Live
              </span>
            </motion.div>

            {/* 2. Interactive Game Switcher Tabs */}
            <div className="flex items-center bg-slate-900/90 border border-white/10 p-1 rounded-full backdrop-blur-xl">
              {games.map((game) => (
                <button
                  key={game.id}
                  onClick={() => setActiveGame(game.id)}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold tracking-wider transition-all duration-300 ${
                    activeGame === game.id 
                      ? 'bg-gradient-to-r ' + game.color + ' text-white shadow-lg' 
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {game.id}
                </button>
              ))}
            </div>
          </div>

          {/* Aggressive Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight uppercase leading-[1.05]">
              Conquer The Arena. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-300 to-fuchsia-500 drop-shadow-[0_0_35px_rgba(6,182,212,0.3)]">
                Redefine Reality.
              </span>
            </h1>
            <p className="mt-6 text-slate-400 text-lg sm:text-xl max-w-xl leading-relaxed font-light">
              Step into the ultimate next-gen esports ecosystem for <span className="text-white font-semibold">{activeGame}</span>. Experience ultra-low latency, custom tactical loadouts, and global tournaments.
            </p>
          </motion.div>

          {/* Cyber CTAs with Magnetic Effect */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap items-center gap-5 pt-2"
          >
            {/* Primary Neon Button */}
            <button className="relative group px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-extrabold uppercase tracking-widest text-sm shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:shadow-[0_0_50px_rgba(6,182,212,0.7)] transition-all duration-300 transform hover:-translate-y-1">
              <span className="relative z-10 flex items-center gap-2">
                Play Now Free
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </button>

            {/* Secondary Glassmorphism Button */}
            <button className="px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold uppercase tracking-widest text-sm backdrop-blur-xl transition-all duration-300 flex items-center gap-3 group hover:border-cyan-500/40">
              <div className="w-7 h-7 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                <svg className="w-3.5 h-3.5 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              Watch Trailer
            </button>
          </motion.div>

        </div>

        {/* Right Column: 3D Visual & Floating HUD Cards */}
        <div className="lg:col-span-5 relative flex items-center justify-center">
          
          <div className="absolute w-[340px] h-[340px] sm:w-[420px] sm:h-[420px] bg-gradient-to-tr from-cyan-500/20 to-fuchsia-600/20 rounded-full blur-3xl -z-10 animate-pulse" />

          {/* Central 3D Game Vault Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative w-full h-[480px] rounded-3xl bg-slate-900/60 border border-white/10 backdrop-blur-2xl p-6 flex flex-col items-center justify-center overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] group"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.1)_0,transparent_70%)] pointer-events-none" />
            
            <div className="relative z-10 text-center space-y-5">
              <div className="w-28 h-28 mx-auto rounded-2xl bg-gradient-to-tr from-cyan-500 via-indigo-600 to-fuchsia-600 p-[2px] shadow-[0_0_30px_rgba(6,182,212,0.5)] group-hover:scale-105 transition-transform duration-500">
                <div className="w-full h-full bg-[#070b14] rounded-2xl flex items-center justify-center">
                  <svg className="w-14 h-14 text-cyan-400 drop-shadow-[0_0_10px_rgba(6,182,212,0.8)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-white font-bold tracking-[0.2em] uppercase text-sm">Nexus Prime // {activeGame}</h3>
                <p className="text-xs text-cyan-400 mt-1 font-mono">REAL-TIME 3D RENDERING ACTIVE</p>
              </div>
            </div>
          </motion.div>

          {/* Floating Glass HUD Card 1 */}
          <motion.div 
            animate={{ y: [-12, 12, -12] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute -top-6 -left-4 sm:-left-8 bg-slate-900/90 backdrop-blur-2xl border border-cyan-500/30 px-5 py-3.5 rounded-2xl shadow-xl flex items-center gap-4 z-20"
          >
            <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-bold">🔥</div>
            <div>
              <div className="text-[11px] text-slate-400 uppercase tracking-wider font-medium">Active Players</div>
              <div className="text-sm font-extrabold text-white">250,490 Online</div>
            </div>
          </motion.div>

          {/* Floating Glass HUD Card 2 */}
          <motion.div 
            animate={{ y: [12, -12, 12] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="absolute -bottom-6 -right-4 sm:-right-8 bg-slate-900/90 backdrop-blur-2xl border border-fuchsia-500/30 px-5 py-3.5 rounded-2xl shadow-xl flex items-center gap-4 z-20"
          >
            <div className="w-10 h-10 rounded-xl bg-fuchsia-500/20 border border-fuchsia-500/30 flex items-center justify-center text-fuchsia-400 font-bold">🏆</div>
            <div>
              <div className="text-[11px] text-slate-400 uppercase tracking-wider font-medium">Tournament Pool</div>
              <div className="text-sm font-extrabold text-white">$1,000,000 USD</div>
            </div>
          </motion.div>

        </div>

      </div>

      {/* 3. Live Tournament Ticker Bar at the bottom */}
      <div className="w-full border-t border-white/10 bg-slate-950/80 backdrop-blur-xl py-4 overflow-hidden relative z-20">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between text-xs text-slate-400 uppercase tracking-widest">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-white font-bold">Next Major Match:</span> Team Liquid vs Sentinels — Starts in 02h 45m
          </div>
          <div className="hidden md:flex items-center gap-6 font-mono text-[11px]">
            <span>LATENCY: 12ms</span>
            <span>SERVER: ASIA-SOUTH-01</span>
            <span className="text-cyan-400 font-bold">STATUS: OPTIMAL</span>
          </div>
        </div>
      </div>

    </section>
  );
}