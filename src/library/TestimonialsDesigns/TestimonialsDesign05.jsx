// TestimonialsSpotlight.jsx
import React from "react";
import { FiStar, FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const quotes = [
  {
    text: "We replaced three separate tools with this one pack. The ROI was immediate.",
    name: "Daniel Reeves",
    role: "CEO, Vertex",
    initials: "DR",
  },
  {
    text: "Every component feels like it was designed by a senior product team.",
    name: "Aisha Khan",
    role: "Head of Design, Nova",
    initials: "AK",
  },
  {
    text: "Our conversion rate went up 34% after redesigning with these blocks.",
    name: "Marco Silva",
    role: "Growth Lead, Pulse",
    initials: "MS",
  },
];

export default function TestimonialsSpotlight() {
  const [i, setI] = useState(0);
  const q = quotes[i];
  return (
    <section className="relative overflow-hidden bg-neutral-950 py-28 px-6 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.12),transparent_65%)]" />
      <div className="relative mx-auto max-w-3xl text-center">
        <div className="mb-8 flex justify-center gap-1">
          {[...Array(5)].map((_, s) => (
            <FiStar
              key={s}
              className="fill-amber-400 text-amber-400"
              size={18}
            />
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.blockquote
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}>
            <p className="text-2xl leading-snug font-medium tracking-tight text-white md:text-4xl">
              “{q.text}”
            </p>
            <footer className="mt-10 flex items-center justify-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 text-sm font-bold">
                {q.initials}
              </div>
              <div className="text-left">
                <p className="font-semibold">{q.name}</p>
                <p className="text-sm text-zinc-500">{q.role}</p>
              </div>
            </footer>
          </motion.blockquote>
        </AnimatePresence>
        <div className="mt-12 flex justify-center gap-3">
          <button
            onClick={() => setI((i - 1 + quotes.length) % quotes.length)}
            className="rounded-full border border-white/10 p-3 transition hover:bg-white/10">
            <FiArrowLeft />
          </button>
          <button
            onClick={() => setI((i + 1) % quotes.length)}
            className="rounded-full border border-white/10 p-3 transition hover:bg-white/10">
            <FiArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}
