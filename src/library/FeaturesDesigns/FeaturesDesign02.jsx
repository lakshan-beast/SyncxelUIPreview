// FeaturesScrollStory.jsx
"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Rocket, BarChart3, Users } from "lucide-react";

const steps = [
  { icon: Rocket, title: "Launch in minutes", desc: "Connect your repo and deploy with zero config.", color: "from-violet-500 to-indigo-500" },
  { icon: BarChart3, title: "Measure everything", desc: "Real-time analytics with custom dashboards.", color: "from-fuchsia-500 to-pink-500" },
  { icon: Users, title: "Collaborate live", desc: "Multiplayer editing with presence and comments.", color: "from-cyan-500 to-blue-500" },
];

export default function FeaturesScrollStory() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start center", "end center"] });
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={ref} className="relative mx-auto max-w-6xl px-6 py-28">
      <h2 className="mb-20 text-center text-4xl font-bold tracking-tight text-white md:text-5xl">
        How it <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">works</span>
      </h2>
      <div className="relative grid gap-16 md:grid-cols-2">
        <div className="relative hidden md:block">
          <div className="sticky top-32 flex h-[420px] items-center justify-center rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-900 to-zinc-950">
            <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_30%_20%,rgba(139,92,246,0.15),transparent_60%)]" />
            <motion.div
              key={Math.floor(scrollYProgress.get() * steps.length)}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative text-center"
            >
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-violet-500 to-fuchsia-500 shadow-2xl shadow-violet-500/30">
                <Rocket className="h-10 w-10 text-white" />
              </div>
              <p className="text-2xl font-semibold text-white">Build. Ship. Scale.</p>
            </motion.div>
          </div>
        </div>
        <div className="relative space-y-24 pl-8">
          <div className="absolute top-0 left-0 h-full w-px bg-white/10">
            <motion.div style={{ height }} className="w-px bg-gradient-to-b from-violet-500 to-cyan-400" />
          </div>
          {steps.map((s, i) => (
            <motion.div key={s.title} initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.7, delay: i * 0.1 }} className="relative">
              <div className={`absolute top-1 -left-[41px] flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br ${s.color} ring-4 ring-zinc-950`} />
              <s.icon className="mb-4 h-8 w-8 text-violet-300" />
              <h3 className="mb-2 text-2xl font-semibold text-white">{s.title}</h3>
              <p className="text-zinc-400">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}