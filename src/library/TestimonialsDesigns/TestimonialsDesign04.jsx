// TestimonialsVideoCards.jsx
import React from "react";
import { FiPlay } from "react-icons/fi";
import { motion } from "framer-motion";

const videos = [
  { name: "Sarah M.", role: "Founder, Lumen", duration: "2:14", gradient: "from-violet-600 to-indigo-600" },
  { name: "James C.", role: "CTO, Nexaflow", duration: "1:47", gradient: "from-fuchsia-600 to-pink-600" },
  { name: "Priya S.", role: "Designer, Orbit", duration: "3:02", gradient: "from-cyan-600 to-blue-600" },
];

export default function TestimonialsVideoCards() {
  return (
    <section className="bg-neutral-950 py-24 px-6 text-white">
      <div className="mx-auto max-w-6xl">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14 text-center text-4xl font-bold tracking-tight md:text-5xl">
          Hear it from <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">real users</span>
        </motion.h2>
        <div className="grid gap-6 md:grid-cols-3">
          {videos.map((v, i) => (
            <motion.div key={v.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }} className="group cursor-pointer overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">
              <div className={`relative flex h-52 items-center justify-center bg-gradient-to-br ${v.gradient}`}>
                <div className="absolute inset-0 bg-black/20 transition group-hover:bg-black/10" />
                <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-white/20 backdrop-blur transition-transform group-hover:scale-110">
                  <FiPlay className="ml-0.5 text-xl text-white" />
                </div>
                <span className="absolute right-4 bottom-4 rounded-full bg-black/60 px-2.5 py-1 text-xs backdrop-blur">{v.duration}</span>
              </div>
              <div className="p-6">
                <p className="font-semibold">{v.name}</p>
                <p className="text-sm text-zinc-500">{v.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}