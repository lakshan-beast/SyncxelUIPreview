import { useState } from "react";
import { motion } from "framer-motion";

export default function PremiumFooterOne() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      alert([SUCCESS]`Email registered to telemetry core: ${email}`);
      setEmail("");
    }
  };

  return (
    <footer className="w-full bg-white text-neutral-900 border-t border-neutral-100 px-6 md:px-16 py-12 font-sans relative overflow-hidden selection:bg-neutral-100">
      {/* 1. LEFT-ALIGNED TINY SYNTAX COMMENT */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10">
        <div className="space-y-4 max-w-xs">
          <div className="space-y-1">
            <span className="font-mono text-[10px] text-neutral-400 block tracking-wider uppercase select-none">
              {"// end_of_file / system_footer"}
            </span>
            <h3 className="font-mono text-sm font-bold tracking-tight text-black">
              syncxel.core
            </h3>
          </div>
          <p className="text-xs text-neutral-500 leading-relaxed">
            A precise front-end engineering collective delivering
            production-grade components without the visual noise.
          </p>
        </div>

        {/* 2. LINKS PACK (CLEAN NAVIGATION) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 md:gap-16">
          <div className="space-y-3">
            <span className="font-mono text-[9px] text-neutral-400 uppercase select-none">
              {"// resources"}
            </span>
            <ul className="space-y-2 text-xs text-neutral-600 font-medium">
              <li className="hover:text-black cursor-pointer transition-colors">
                Documentation
              </li>
              <li className="hover:text-black cursor-pointer transition-colors">
                Architecture
              </li>
              <li className="hover:text-black cursor-pointer transition-colors">
                Changelog
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <span className="font-mono text-[9px] text-neutral-400 uppercase select-none">
              {"// legal"}
            </span>
            <ul className="space-y-2 text-xs text-neutral-600 font-medium">
              <li className="hover:text-black cursor-pointer transition-colors">
                Privacy Policy
              </li>
              <li className="hover:text-black cursor-pointer transition-colors">
                Terms of Service
              </li>
              <li className="hover:text-black cursor-pointer transition-colors">
                License
              </li>
            </ul>
          </div>
        </div>

        {/* 3. CLEAN NEWSLETTER INPUT WITH SPRING PHYSICS BUTTON */}
        <div className="space-y-3 w-full md:w-auto">
          <span className="font-mono text-[9px] text-neutral-400 uppercase select-none">
            {"// subscribe_to_telemetry"}
          </span>
          <form
            onSubmit={handleSubscribe}
            className="flex flex-col sm:flex-row gap-2 max-w-md w-full relative">
            <div className="relative flex-1">
              <span className="absolute -top-3.5 left-0 font-mono text-[8px] text-neutral-300">
                {"input[type='email']"}
              </span>
              <input
                type="email"
                required
                placeholder="developer@domain.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white text-black font-mono text-xs border border-neutral-200 px-3 py-2.5 rounded focus:outline-none focus:border-black transition-colors min-w-[200px]"
              />
            </div>

            <motion.button
              whileTap={{ scale: 0.92 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              type="submit"
              className="bg-black text-white font-mono text-xs border border-black px-4 py-2.5 rounded hover:bg-neutral-900 transition-colors duration-200 text-center whitespace-nowrap">
              {/* PC Screen View */}
              <span className="hidden lg:inline-block">
                <span className="text-sky-400">return</span> sub();
              </span>
              {/* Mobile/Tablet View */}
              <span className="inline-block lg:hidden font-sans font-medium">
                Subscribe
              </span>
            </motion.button>
          </form>
        </div>
      </div>

      {/* 4. BOTTOM METADATA BAR */}
      <div className="max-w-7xl mx-auto border-t border-neutral-100 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <span className="font-mono text-[9px] text-neutral-400">
          &copy; {new Date().getFullYear()} SyncXel. All rights reserved.
        </span>
        <div className="font-mono text-[9px] text-neutral-400 tracking-tight space-x-3 select-none">
          <span className="text-emerald-600 font-bold">[ONLINE]</span>
          <span>[SHARDS: 01-A]</span>
        </div>
      </div>
    </footer>
  );
}
