// FeaturesTabShowcase.jsx
"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Palette, Zap, ShieldCheck } from "lucide-react";

const tabs = [
  {
    id: "design",
    icon: Palette,
    label: "Design System",
    title: "Tokens that scale",
    desc: "One source of truth for colors, spacing and typography across every platform.",
    points: ["Design tokens", "Dark mode", "Figma sync"],
  },
  {
    id: "speed",
    icon: Zap,
    label: "Performance",
    title: "Fast by default",
    desc: "Edge caching, image optimization and streaming built into every route.",
    points: ["Edge caching", "Image CDN", "Streaming SSR"],
  },
  {
    id: "security",
    icon: ShieldCheck,
    label: "Security",
    title: "Enterprise-grade",
    desc: "SSO, audit logs and granular permissions out of the box.",
    points: ["SSO / SAML", "Audit logs", "RBAC"],
  },
];

export default function FeaturesTabShowcase() {
  const [active, setActive] = useState(tabs[0]);
  return (
    <section className="mx-auto max-w-5xl px-6 py-28">
      <h2 className="mb-12 text-center text-4xl font-bold tracking-tight text-white md:text-5xl">
        One platform,{" "}
        <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
          endless possibilities
        </span>
      </h2>
      <div className="mx-auto mb-12 flex w-fit gap-1 rounded-2xl border border-white/10 bg-white/[0.03] p-1.5 backdrop-blur">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setActive(t)}
            className={`relative flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-medium transition-colors ${active.id === t.id ? "text-white" : "text-zinc-400 hover:text-zinc-200"}`}>
            {active.id === t.id && (
              <motion.span
                layoutId="tab-pill"
                className="absolute inset-0 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600"
                transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
              />
            )}
            <t.icon className="relative h-4 w-4" />
            <span className="relative">{t.label}</span>
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={active.id}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.35 }}
          className="rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-900/80 to-zinc-950 p-10 backdrop-blur">
          <active.icon className="mb-6 h-10 w-10 text-violet-300" />
          <h3 className="mb-3 text-3xl font-semibold text-white">
            {active.title}
          </h3>
          <p className="mb-8 max-w-xl text-zinc-400">{active.desc}</p>
          <div className="flex flex-wrap gap-3">
            {active.points.map((p) => (
              <span
                key={p}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-zinc-300">
                {p}
              </span>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
