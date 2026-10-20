// TestimonialsCarousel.jsx
import React, { useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight, FiStar } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Founder, Lumen Labs",
    quote:
      "This pack saved us weeks of design work. The components are polished, responsive, and honestly better than what we'd have built in-house.",
    avatar: "SM",
  },
  {
    name: "James Carter",
    role: "CTO, Nexaflow",
    quote:
      "Clean code, zero bugs, and the animations feel premium. We shipped our landing page in two days using these blocks.",
    avatar: "JC",
  },
  {
    name: "Priya Sharma",
    role: "Product Designer, Orbit",
    quote:
      "Finally a UI pack that doesn't look generic. The attention to micro-interactions is what sets this apart.",
    avatar: "PS",
  },
];

export default function TestimonialsCarousel() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const t = setInterval(
      () => setIndex((i) => (i + 1) % testimonials.length),
      5000,
    );
    return () => clearInterval(t);
  }, []);
  const t = testimonials[index];

  return (
    <section className="bg-neutral-950 py-24 px-6 text-white">
      <div className="mx-auto max-w-3xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-4xl font-bold tracking-tight md:text-5xl">
          Loved by{" "}
          <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
            builders
          </span>
        </motion.h2>
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.45 }}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-10 backdrop-blur">
              <div className="mb-6 flex justify-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <FiStar key={i} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-lg leading-relaxed text-zinc-200 md:text-xl">
                “{t.quote}”
              </p>
              <div className="mt-8 flex items-center justify-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 text-sm font-bold">
                  {t.avatar}
                </div>
                <div className="text-left">
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-sm text-zinc-500">{t.role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={() =>
                setIndex(
                  (index - 1 + testimonials.length) % testimonials.length,
                )
              }
              className="rounded-full border border-white/10 p-3 transition hover:bg-white/10">
              <FiChevronLeft />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`h-2 rounded-full transition-all ${i === index ? "w-6 bg-violet-400" : "w-2 bg-zinc-700"}`}
                />
              ))}
            </div>
            <button
              onClick={() => setIndex((index + 1) % testimonials.length)}
              className="rounded-full border border-white/10 p-3 transition hover:bg-white/10">
              <FiChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
