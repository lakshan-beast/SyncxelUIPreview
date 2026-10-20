// FeaturesGlassMetrics.jsx
"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp, Globe2, Clock } from "lucide-react";

function Counter({ to, suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / 1500, 1);
      setVal(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, to]);
  return <span ref={ref}>{val.toLocaleString()}{suffix}</span>;
}

export default function FeaturesGlassMetrics() {
  return (
    <section className="relative overflow-hidden py-28">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.12),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <h2 className="mb-16 text-center text-4xl font-bold tracking-tight text-white md:text-5xl">
          Numbers that <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">speak</span>
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { icon: TrendingUp, value: 99, suffix: ".9%", label: "Uptime SLA", desc: "Enterprise-grade reliability", big: true },
            { icon: Globe2, value: 35, suffix: "+", label: "Global Regions", desc: "Edge network worldwide" },
            { icon: Clock, value: 48, suffix: "ms", label: "Avg Response", desc: "Sub-50ms globally" },
          ].map((m, i) => (
            <motion.div key={m.label} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12, duration: 0.6 }} className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl transition-all hover:border-violet-500/40 ${m.big ? "md:col-span-2 md:row-span-1" : ""}`}>
              <div className="absolute -top-20 -right-20 h-48 w-48 rounded-full bg-violet-500/10 blur-3xl transition-all group-hover:bg-violet-500/20" />
              <m.icon className="mb-6 h-8 w-8 text-violet-300" />
              <p className="text-5xl font-bold tracking-tight text-white"><Counter to={m.value} suffix={m.suffix} /></p>
              <p className="mt-2 font-medium text-zinc-300">{m.label}</p>
              <p className="text-sm text-zinc-500">{m.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}