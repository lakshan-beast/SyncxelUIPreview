import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function DevSyncLanding() {
  // Countdown Timer එක සඳහා State (Launch Date: Days, Hours, Minutes, Seconds)
  const [timeLeft, setTimeLeft] = useState({
    days: 12,
    hours: 24,
    minutes: 60,
    seconds: 60,
  });
  const [email, setEmail] = useState("");

  useEffect(() => {
    // සැබෑ ලෝකයේදී මෙතනට ඔබට අවශ්‍ය ලෝන්ච් වන දිනය (Target Date) දිය හැකිය
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0)
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0)
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0)
          return {
            ...prev,
            days: prev.days - 1,
            hours: 23,
            minutes: 59,
            seconds: 59,
          };
        clearInterval(timer);
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      alert([SUCCESS]`${email} added to waitlist queue.`);
      setEmail("");
    }
  };

  return (
    <div className="bg-white text-neutral-900 min-h-screen flex flex-col justify-between font-sans selection:bg-neutral-100 relative overflow-hidden">
      {/* Background Blueprint Grid Lines (Ultra-thin & subtle) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_20%,#000_70%,transparent_100%)] opacity-60 pointer-events-none" />

      {/* 1. NAVIGATION BAR */}
      <nav className="z-10 flex justify-between items-center px-6 md:px-16 py-6 border-b border-neutral-100 bg-white/80 backdrop-blur-md">
        <span className="font-mono text-sm font-bold tracking-tight text-black">
          devsync.ai
        </span>
        <div className="flex items-center gap-6">
          <span className="font-mono text-[11px] text-neutral-400 cursor-pointer hover:text-black transition-colors hidden sm:inline-block">
            {"// docs"}
          </span>
          <span className="font-mono text-[11px] text-neutral-400 cursor-pointer hover:text-black transition-colors hidden sm:inline-block">
            {"// architecture"}
          </span>
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="font-mono text-xs border border-neutral-200 px-4 py-2 rounded bg-white hover:border-black transition-colors">
            Sign In
          </motion.button>
        </div>
      </nav>

      {/* 2. HERO & MAIN CONTENT CONTAINER */}
      <main className="z-10 flex-1 flex flex-col justify-center px-6 md:px-16 lg:px-24 py-12 max-w-4xl space-y-10">
        {/* Left-aligned, Tiny Syntax Comment */}
        <div className="space-y-1">
          <span className="font-mono text-[10px] md:text-xs text-neutral-400 block tracking-wider uppercase select-none">
            {"// initialization_and_waitlist_queue"}
          </span>
          <div className="w-8 h-[1px] bg-neutral-200" />
        </div>

        {/* Core Startup Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-black leading-[1.1] max-w-3xl">
          Sync your codebase <br />
          with AI. Instantly.
        </h1>

        <p className="text-neutral-500 text-sm md:text-base max-w-xl leading-relaxed">
          The ultimate context engine that securely synchronizes local code
          repositories with large language models for real-time architectural
          mapping and optimization.
        </p>

        {/* 3. SYNTAX TIMED COUNTDOWN (කේත ව්‍යුහයක් වැනි ටයිමර් එක) */}
        <div className="font-mono text-xs text-neutral-400 space-y-1 select-none pt-2">
          <span>{"// deployment_countdown_clock"}</span>
          <div className="text-black text-lg md:text-xl font-bold tracking-widest flex gap-4">
            <div>
              {String(timeLeft.days).padStart(2, "0")}
              <span className="text-[10px] text-neutral-400 font-mono font-normal ml-1">
                D
              </span>
            </div>
            <div className="text-neutral-300">:</div>
            <div>
              {String(timeLeft.hours).padStart(2, "0")}
              <span className="text-[10px] text-neutral-400 font-mono font-normal ml-1">
                H
              </span>
            </div>
            <div className="text-neutral-300">:</div>
            <div>
              {String(timeLeft.minutes).padStart(2, "0")}
              <span className="text-[10px] text-neutral-400 font-mono font-normal ml-1">
                M
              </span>
            </div>
            <div className="text-neutral-300">:</div>
            <div className="text-neutral-600">
              {String(timeLeft.seconds).padStart(2, "0")}
              <span className="text-[10px] text-neutral-400 font-mono font-normal ml-1">
                S
              </span>
            </div>
          </div>
        </div>

        {/* 4. EMAIL CAPTURE BOX WITH SPRING PHYSICS BUTTON */}
        <form
          onSubmit={handleSubmit}
          className="pt-2 flex flex-col sm:flex-row gap-3 items-start max-w-md w-full">
          <div className="w-full relative">
            <span className="absolute -top-4 left-0 font-mono text-[9px] text-neutral-400">
              {"input[type='email']"}
            </span>
            <input
              type="email"
              required
              placeholder="enter_your_email@domain.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-white text-black font-mono text-xs md:text-sm border border-neutral-200 px-4 py-3 rounded focus:outline-none focus:border-black transition-colors"
            />
          </div>

          <motion.button
            whileTap={{ scale: 0.92 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            type="submit"
            className="bg-black text-white font-mono text-xs md:text-sm border border-black px-6 py-3 rounded hover:bg-neutral-900 transition-colors duration-200 w-full sm:w-auto whitespace-nowrap">
            {/* PC: Executable Return Script */}
            <span className="hidden md:inline-block">
              <span className="text-sky-400">return</span> join_queue();
            </span>
            {/* Mobile: Standard Text */}
            <span className="inline-block md:hidden font-sans font-medium tracking-tight">
              Join Waitlist
            </span>
          </motion.button>
        </form>
      </main>

      {/* 5. METADATA METRIC FOOTER */}
      <footer className="z-10 flex justify-between items-center px-6 md:px-16 py-6 border-t border-neutral-100 bg-white">
        <span className="font-mono text-[10px] text-neutral-400 select-none">
          {"// end_of_file"}
        </span>
        <div className="font-mono text-[10px] text-neutral-400 tracking-tight space-x-4 select-none">
          <span className="text-emerald-600 font-bold">
            [SYSTEM: OPERATIONAL]
          </span>
          <span className="hidden sm:inline">[LATENCY: 4ms]</span>
          <span>[VERSION: 1.0.0-LIGHT]</span>
        </div>
      </footer>
    </div>
  );
}
