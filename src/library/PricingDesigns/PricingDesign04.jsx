// PricingBentoGrid.jsx
import React from "react";
import {
  FiCheck,
  FiArrowRight,
  FiZap,
  FiUsers,
  FiHeadphones,
} from "react-icons/fi";
import { motion } from "framer-motion";

const addons = [
  { icon: FiZap, title: "Priority Processing", desc: "2x faster renders" },
  { icon: FiUsers, title: "Extra Seats", desc: "$5 per member" },
  { icon: FiHeadphones, title: "Dedicated Support", desc: "1-on-1 onboarding" },
];

export default function PricingBentoGrid() {
  return (
    <section className="bg-neutral-950 py-24 px-6 text-white">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center text-4xl font-bold tracking-tight md:text-5xl">
          Pick your{" "}
          <span className="bg-gradient-to-r from-amber-400 to-rose-400 bg-clip-text text-transparent">
            plan
          </span>
        </motion.h2>
        <div className="grid gap-4 md:grid-cols-3">
          {/* Main plan */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl border border-amber-500/40 bg-gradient-to-br from-amber-950/30 via-neutral-950 to-neutral-950 p-10 md:col-span-2">
            <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-amber-500/10 blur-3xl" />
            <span className="rounded-full bg-amber-500/15 px-3 py-1 text-[10px] font-bold tracking-widest text-amber-300 uppercase">
              Best Value
            </span>
            <h3 className="mt-6 text-3xl font-bold">Studio Plan</h3>
            <p className="mt-2 max-w-md text-sm text-zinc-400">
              Everything a growing studio needs — unlimited projects, priority
              rendering and team collaboration.
            </p>
            <p className="mt-8 text-5xl font-extrabold">
              $49<span className="text-lg font-normal text-zinc-500">/mo</span>
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Unlimited Projects",
                "Priority Rendering",
                "Team Collaboration",
                "API Access",
              ].map((f) => (
                <span
                  key={f}
                  className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-zinc-300">
                  <FiCheck className="text-amber-400" />
                  {f}
                </span>
              ))}
            </div>
            <a
              href="#contact"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-amber-500 px-7 py-3 text-sm font-semibold text-neutral-950 transition hover:bg-amber-400">
              Start Free Trial <FiArrowRight />
            </a>
          </motion.div>
          {/* Add-ons */}
          {addons.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 + i * 0.1 }}
              className="group rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition-all hover:-translate-y-1 hover:border-amber-500/40">
              <a.icon className="mb-4 h-6 w-6 text-amber-300" />
              <h4 className="font-semibold">{a.title}</h4>
              <p className="mt-1 text-sm text-zinc-400">{a.desc}</p>
              <button className="mt-5 text-xs font-semibold text-amber-300 opacity-0 transition group-hover:opacity-100">
                Add on →
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
