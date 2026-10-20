// TestimonialsLogoMarquee.jsx
import React from "react";
import { motion } from "framer-motion";
import { FiStar } from "react-icons/fi";

const logos = ["Vercel", "Linear", "Raycast", "Stripe", "Notion", "Figma", "Vercel", "Linear"];
const quotes = [
  { text: "Cut our design time by 70%.", author: "Nexaflow" },
  { text: "The polish level is unreal.", author: "Orbit AI" },
  { text: "Our go-to for every client project.", author: "Studio K" },
  { text: "Worth every dollar.", author: "Brightpath" },
];

export default function TestimonialsLogoMarquee() {
  return (
    <section className="overflow-hidden bg-neutral-950 py-24 text-white">
      <p className="mb-10 text-center text-sm tracking-widest text-zinc-500 uppercase">Trusted by teams at</p>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-neutral-950 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-neutral-950 to-transparent" />
        <motion.div animate={{ x: ["0%", "-50%"] }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} className="flex w-max items-center gap-16">
          {[...logos, ...logos].map((l, i) => (
            <span key={i} className="text-2xl font-bold tracking-tight text-zinc-600 transition hover:text-white">{l}</span>
          ))}
        </motion.div>
      </div>
      <div className="mx-auto mt-16 grid max-w-6xl gap-4 px-6 md:grid-cols-2 lg:grid-cols-4">
        {quotes.map((q, i) => (
          <motion.div key={q.author} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <div className="mb-3 flex gap-0.5">{[...Array(5)].map((_, s) => <FiStar key={s} className="fill-amber-400 text-amber-400" size={12} />)}</div>
            <p className="text-sm font-medium text-zinc-200">“{q.text}”</p>
            <p className="mt-3 text-xs text-zinc-500">— {q.author}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}