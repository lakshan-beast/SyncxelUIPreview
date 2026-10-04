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
        <div className="lg:col-span-7 space-y-8">
          {/* live pluse badge */}
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

          {/* main aggressive heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight uppercase">
              Conquer The Arena. <br />{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400">
                Redefine Reality
              </span>
            </h1>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
