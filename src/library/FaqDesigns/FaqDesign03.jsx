// FaqMinimalAccordion.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  { q: "What's included in the pack?", a: "5 production-ready designs per category, built with React, Tailwind CSS, and Framer Motion. Dark mode and responsive layouts included." },
  { q: "Do I need to know how to code?", a: "Basic React knowledge helps, but every component is copy-paste ready with clear props and comments." },
  { q: "Can I customize the colors?", a: "Yes — everything uses Tailwind classes, so rebranding takes minutes. Just swap the gradient and accent colors." },
  { q: "Is this a subscription?", a: "No. It's a one-time payment with lifetime access to updates for that pack." },
];

export default function FaqMinimalAccordion() {
  const [open, setOpen] = useState(null);
  return (
    <section className="bg-neutral-950 py-28 px-6 text-white">
      <div className="mx-auto max-w-3xl">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 text-center text-4xl font-light tracking-tight md:text-5xl">
          Frequently asked <span className="italic text-zinc-500">questions</span>
        </motion.h2>
        <div className="divide-y divide-white/10 border-y border-white/10">
          {faqs.map((f, i) => (
            <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
              <button onClick={() => setOpen(open === i ? null : i)} className="group flex w-full items-center justify-between gap-6 py-7 text-left">
                <span className={`text-lg font-light transition-colors md:text-xl ${open === i ? "text-white" : "text-zinc-400 group-hover:text-zinc-200"}`}>{f.q}</span>
                <motion.span animate={{ rotate: open === i ? 45 : 0 }} transition={{ type: "spring", stiffness: 300, damping: 20 }} className={`shrink-0 transition-colors ${open === i ? "text-violet-400" : "text-zinc-600 group-hover:text-zinc-400"}`}>
                  <Plus className="h-5 w-5" />
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.35 }}>
                    <p className="max-w-xl pb-8 text-sm leading-relaxed font-light text-zinc-500">{f.a}</p>
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