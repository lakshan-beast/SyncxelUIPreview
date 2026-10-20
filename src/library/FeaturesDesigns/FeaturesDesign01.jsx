// FeaturesSpotlightBento.jsx
"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import { Zap, Shield, Globe, Layers, Sparkles } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    desc: "Edge-rendered experiences with sub-50ms interactions.",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    icon: Shield,
    title: "Secure by Default",
    desc: "SOC2-ready infrastructure and end-to-end encryption.",
    span: "",
  },
  {
    icon: Globe,
    title: "Global Edge",
    desc: "Deployed across 35+ regions worldwide.",
    span: "",
  },
  {
    icon: Layers,
    title: "Composable",
    desc: "Mix and match blocks without lock-in.",
    span: "md:col-span-2",
  },
  {
    icon: Sparkles,
    title: "AI Native",
    desc: "Built-in copilots for every workflow.",
    span: "",
  },
];

function SpotlightCard({ f, i }) {
  const ref = useRef(null);
  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    ref.current.style.setProperty("--x", `${e.clientX - r.left}px`);
    ref.current.style.setProperty("--y", `${e.clientY - r.top}px`);
  };
  return (
    <motion.div
      ref={ref}
      onPointerMove={onMove}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.6,
        delay: i * 0.08,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl ${f.span}`}>
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(400px circle at var(--x) var(--y), rgba(139,92,246,0.15), transparent 70%)",
        }}
      />
      <div className="relative">
        <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/10 ring-1 ring-white/10">
          <f.icon className="h-6 w-6 text-violet-300" />
        </div>
        <h3 className="mb-2 text-xl font-semibold tracking-tight text-white">
          {f.title}
        </h3>
        <p className="max-w-sm text-sm leading-relaxed text-zinc-400">
          {f.desc}
        </p>
      </div>
    </motion.div>
  );
}

export default function FeaturesSpotlightBento() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto mb-16 max-w-2xl text-center">
        <span className="mb-4 inline-block rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-xs font-medium tracking-wide text-violet-300 uppercase">
          Features
        </span>
        <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
          Everything you need to{" "}
          <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
            ship faster
          </span>
        </h2>
      </motion.div>
      <div className="grid auto-rows-[220px] grid-cols-1 gap-4 md:grid-cols-4">
        {features.map((f, i) => (
          <SpotlightCard key={f.title} f={f} i={i} />
        ))}
      </div>
    </section>
  );
}
