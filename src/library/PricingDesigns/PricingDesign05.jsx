// PricingMinimalCTA.jsx
import React from "react";
import { FiCheck, FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";

export default function PricingMinimalCTA() {
  return (
    <section className="relative overflow-hidden bg-neutral-950 py-28 px-6 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.15),transparent_65%)]" />
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative mx-auto max-w-2xl rounded-[2rem] border border-white/10 bg-white/[0.04] p-10 text-center backdrop-blur-2xl md:p-14">
        <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-xs font-medium tracking-wide text-violet-300 uppercase">Lifetime Deal</span>
        <h2 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl">One payment. <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">Forever access.</span></h2>
        <p className="mx-auto mt-4 max-w-md text-zinc-400">Get every current and future UI pack, lifetime updates, and community access — no subscriptions.</p>
        <p className="mt-8 text-6xl font-extrabold tracking-tight">$49</p>
        <p className="mt-1 text-sm text-zinc-500">one-time · normally $99</p>
        <a href="#buy" className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 py-4 text-sm font-semibold shadow-lg shadow-violet-950/50 transition hover:opacity-90 md:w-auto md:px-10">
          Get Lifetime Access <FiArrowRight />
        </a>
        <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-zinc-500">
          {["30-day refund", "Instant download", "Lifetime updates"].map((t) => (
            <span key={t} className="flex items-center gap-1.5"><FiCheck className="text-emerald-400" />{t}</span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}