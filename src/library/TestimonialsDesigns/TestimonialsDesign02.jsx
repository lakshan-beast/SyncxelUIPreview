// TestimonialsMasonry.jsx
import React from "react";
import { FiStar } from "react-icons/fi";
import { motion } from "framer-motion";

const items = [
  {
    name: "Alex Rivera",
    role: "Indie Hacker",
    quote:
      "Best investment for my SaaS. Shipped my MVP landing page in a weekend.",
    tall: true,
  },
  {
    name: "Emma Wilson",
    role: "Design Lead, Craftly",
    quote: "The bento layouts are gorgeous out of the box.",
  },
  {
    name: "David Kim",
    role: "Founder, Stackly",
    quote: "Clean, accessible, and fast. Exactly what a small team needs.",
    tall: true,
  },
  {
    name: "Maya Patel",
    role: "Freelance Developer",
    quote: "My clients keep asking where I got these components.",
  },
  {
    name: "Tom Becker",
    role: "CTO, Vantage",
    quote: "Production-ready from day one. Rare to find this quality.",
    tall: true,
  },
  {
    name: "Lena Fischer",
    role: "PM, Brightside",
    quote: "The lifetime updates alone are worth it.",
  },
];

export default function TestimonialsMasonry() {
  return (
    <section className="bg-neutral-950 py-24 px-6 text-white">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center text-4xl font-bold tracking-tight md:text-5xl">
          What{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            customers say
          </span>
        </motion.h2>
        <div className="columns-1 gap-4 md:columns-2 lg:columns-3">
          {items.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 3) * 0.1 }}
              className="mb-4 break-inside-avoid rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur transition hover:border-violet-500/40">
              <div className="mb-4 flex gap-1">
                {[...Array(5)].map((_, s) => (
                  <FiStar
                    key={s}
                    className="fill-amber-400 text-amber-400"
                    size={14}
                  />
                ))}
              </div>
              <p
                className={`leading-relaxed text-zinc-200 ${t.tall ? "text-lg" : "text-sm"}`}>
                “{t.quote}”
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 text-xs font-bold">
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-zinc-500">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
