// CtaStatsCombo.jsx
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const stats = [
  { value: "12k+", label: "Developers" },
  { value: "340+", label: "Blocks" },
  { value: "99.9%", label: "Uptime" },
  { value: "4.9★", label: "Avg Rating" },
];

export default function CtaStatsCombo() {
  return (
    <section className="bg-neutral-950 px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-r from-indigo-950/50 via-neutral-950 to-violet-950/40">
        <div className="grid gap-10 p-10 md:grid-cols-[1.2fr_1fr] md:p-16">
          <div>
            <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
              Ship your next big thing{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                today
              </span>
            </h2>
            <p className="mt-4 max-w-md text-zinc-400">
              Everything you need to launch a polished product — without hiring
              a design team.
            </p>
            <a
              href="#start"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-neutral-950 transition hover:bg-zinc-200">
              Start Free{" "}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur">
                <p className="text-3xl font-extrabold tracking-tight text-white">
                  {s.value}
                </p>
                <p className="mt-1 text-xs tracking-wide text-zinc-500 uppercase">
                  {s.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
