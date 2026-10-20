// FaqSplitTwoColumn.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MessageCircle, ArrowRight } from "lucide-react";

const faqs = [
  {
    q: "How quickly can I get started?",
    a: "Sign up and launch your first project in under 5 minutes. No credit card required for the free tier.",
  },
  {
    q: "Can I use these components in client projects?",
    a: "Yes — every pack includes a commercial license for unlimited client and personal projects.",
  },
  {
    q: "Do I get lifetime updates?",
    a: "Absolutely. One payment includes all future updates, new designs, and bug fixes forever.",
  },
  {
    q: "What if I need help integrating?",
    a: "Join our community Discord or check the docs. Pro users get priority email support within 24 hours.",
  },
  {
    q: "Is there a refund policy?",
    a: "Yes — 30-day no-questions-asked refund if the pack doesn't work for you.",
  },
];

export default function FaqSplitTwoColumn() {
  const [open, setOpen] = useState(0);
  return (
    <section className="bg-neutral-950 py-24 px-6 text-white">
      <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-[1fr_1.4fr]">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:sticky lg:top-24 lg:self-start">
          <span className="inline-block rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-xs tracking-wide text-violet-300 uppercase">
            FAQ
          </span>
          <h2 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl">
            Questions,{" "}
            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              answered
            </span>
          </h2>
          <p className="mt-4 text-zinc-400">
            Everything you need to know before getting started. Can't find what
            you're looking for?
          </p>
          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-violet-500 px-6 py-3 text-sm font-semibold transition hover:bg-violet-400">
            <MessageCircle className="h-4 w-4" /> Talk to us{" "}
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className={`overflow-hidden rounded-2xl border transition-colors ${open === i ? "border-violet-500/40 bg-violet-500/[0.06]" : "border-white/10 bg-white/[0.03] hover:border-white/20"}`}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 p-6 text-left">
                <span
                  className={`font-medium ${open === i ? "text-white" : "text-zinc-300"}`}>
                  {f.q}
                </span>
                <motion.span
                  animate={{ rotate: open === i ? 180 : 0 }}
                  className={`shrink-0 rounded-full border p-1.5 ${open === i ? "border-violet-500/40 text-violet-300" : "border-white/10 text-zinc-500"}`}>
                  <ChevronDown className="h-4 w-4" />
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}>
                    <p className="px-6 pb-6 text-sm leading-relaxed text-zinc-400">
                      {f.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
