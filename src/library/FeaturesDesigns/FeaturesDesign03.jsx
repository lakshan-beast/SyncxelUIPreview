// FeaturesMarqueeCards.jsx
"use client";
import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Cpu,
  Cloud,
  Lock,
  Gauge,
  GitBranch,
  Terminal,
} from "lucide-react";

const row1 = [
  { icon: Code2, title: "Type-Safe APIs", desc: "End-to-end type safety" },
  { icon: Database, title: "Instant DB", desc: "Serverless Postgres" },
  { icon: Cpu, title: "Edge Functions", desc: "Run at the edge" },
  { icon: Cloud, title: "Zero Config", desc: "Deploy in one click" },
];
const row2 = [
  { icon: Lock, title: "Auth Built-in", desc: "OAuth, magic links, MFA" },
  { icon: Gauge, title: "99.99% Uptime", desc: "Enterprise SLA" },
  { icon: GitBranch, title: "Preview Deploys", desc: "Every PR gets a URL" },
  { icon: Terminal, title: "CLI First", desc: "Ship from your terminal" },
];

function Card({ f }) {
  return (
    <div className="group mx-3 flex w-72 shrink-0 items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur transition-colors hover:border-violet-500/40 hover:bg-violet-500/[0.06]">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/10 ring-1 ring-white/10">
        <f.icon className="h-5 w-5 text-violet-300" />
      </div>
      <div>
        <h3 className="font-semibold text-white">{f.title}</h3>
        <p className="text-sm text-zinc-400">{f.desc}</p>
      </div>
    </div>
  );
}

export default function FeaturesMarqueeCards() {
  return (
    <section className="overflow-hidden py-28">
      <h2 className="mb-14 px-6 text-center text-4xl font-bold tracking-tight text-white md:text-5xl">
        Built for{" "}
        <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
          modern teams
        </span>
      </h2>
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="flex w-max">
        {[...row1, ...row1].map((f, i) => (
          <Card key={i} f={f} />
        ))}
      </motion.div>
      <motion.div
        animate={{ x: ["-50%", "0%"] }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        className="mt-4 flex w-max">
        {[...row2, ...row2].map((f, i) => (
          <Card key={i} f={f} />
        ))}
      </motion.div>
    </section>
  );
}
