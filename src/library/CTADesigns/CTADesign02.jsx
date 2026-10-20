// CtaSplitLayout.jsx
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function CtaSplitLayout() {
  return (
    <section className="bg-neutral-950 px-6 py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-zinc-900 to-neutral-950 p-10 md:grid-cols-2 md:p-16">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
            Your next project deserves <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">better blocks</span>
          </h2>
          <p className="mt-5 text-zinc-400">Stop rebuilding the same sections. Copy, paste, customize, and ship in minutes.</p>
          <ul className="mt-8 space-y-3">
            {["Lifetime updates included", "Commercial license", "30-day refund guarantee"].map((f) => (
              <li key={f} className="flex items-center gap-3 text-sm text-zinc-300">
                <CheckCircle2 className="h-5 w-5 text-cyan-400" /> {f}
              </li>
            ))}
          </ul>
          <a href="#buy" className="group mt-10 inline-flex items-center gap-2 rounded-full bg-cyan-500 px-8 py-4 text-sm font-semibold text-neutral-950 transition hover:bg-cyan-400">
            Get Instant Access <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15 }} className="relative">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/20 to-blue-500/10 blur-2xl" />
          <div className="relative rounded-3xl border border-white/10 bg-neutral-950/80 p-8 backdrop-blur">
            <div className="mb-6 flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-500/70" />
              <span className="h-3 w-3 rounded-full bg-amber-500/70" />
              <span className="h-3 w-3 rounded-full bg-emerald-500/70" />
            </div>
            <div className="space-y-3 font-mono text-xs">
              <p className="text-zinc-500">$ npx syncxel-ui add cta</p>
              <p className="text-emerald-400">✓ CtaSplitLayout installed</p>
              <p className="text-zinc-500">$ npm run dev</p>
              <p className="text-cyan-400">→ Ready on localhost:3000</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}