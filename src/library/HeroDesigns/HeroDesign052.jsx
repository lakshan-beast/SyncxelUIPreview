import { useState } from "react";
import { motion } from "framer-motion";
import { button } from "framer-motion/client";

export default function GamingHero() {
  const [activeGame, setActiveGame] = useState("VALORANT");
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const games = [
    {
      id: "VALORANT",
      color: "from-rose-500 to-red-600",
      glow: "rgba(244,63,94,0.3)",
    },
    {
      id: "CS2",
      color: "from-amber-500 to-orange-600",
      glow: "rgba(245,158,11,0.3)",
    },
    {
      id: "DOTA 2",
      color: "from-cyan-500 to-blue-600",
      glow: "rgba(6,182,212,0.3)",
    },
  ];

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative min-h-screen bg-[#030712] text-white overflow-hidden flex flex-col justify-between pt-16 px-6 lg:px-20 selection:bg-cyan-500 selection:text-black">
      {/* Interarctive Mouse-following Splotlight Glow */}
      <div
        className="absolute pointer-events-none w-[600px] h-[600px] rounded-full blur-[80px] transition-all duration-100 -translate-x-1/2 -translate-y-1/2"
        style={{
          left: mousePos.x,
          top: mousePos.y,
          background:
            games.find((g) => g.id === activeGame)?.glow ||
            "rgba(6,182,212,0.2)",
        }}
      />

      {/* Background Ambient Glows & Cyber Grid */}
      <div className="absolute top-1/4 left-10 w-[400px] h-[400px] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-fuchsia-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293708_1px,transparent_1px),linear-gradient(to_bottom,#1f293708_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      {/* Main Grid Container */}
      <div className="max-w-7xl w-ful mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 my-auto py-12">
        {/* left column : content */}
        <div className="lg:col-span-7 space-x-8">
          {/* Live Pulse badge & game switcher tabs */}
          <div className="flex flex-wrap items-center gap-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-slate-900/80 border border-white/10 backdrop-blur-xl shadow-inner">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
              </span>
              <span className="text-xs tracking-widset uppercase font-bold text-cyan-400">
                Sesson 2027 | Live
              </span>
            </motion.div>

            {/* Interactive Game Switch Tabs */}
            <div className="flex items-center bg-slate-900/90 border border-white/10 p-1 rounded-full backdrop-blur-xl">
              {games.map((game) => (
                <button
                  key={game.id}
                  onClick={() => setActiveGame(game.id)}
                  className={`px-5 py-2 rounded-full text-xs font-bold tracking-wider transition-all duration-300 ${activeGame === game.id ? "bg-gradient-to-r " + game.color + "text-white shadow-lg" : "text-slate-400 hover:text-white"}  `}>
                  {game.id}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
