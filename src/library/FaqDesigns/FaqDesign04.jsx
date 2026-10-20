// FaqCategoryCards.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Rocket, CreditCard, Shield, LifeBuoy, ChevronDown } from "lucide-react";

const categories = [
  { icon: Rocket, title: "Getting Started", count: 6, faqs: [{ q: "How do I install?", a: "Run npm install and copy the component files into your project." }, { q: "Which React versions are supported?", a: "React 18 and 19, including Next.js App Router." }] },
  { icon: CreditCard, title: "Billing", count: 4, faqs: [{ q: "Is this a subscription?", a: "No — one-time payment with lifetime updates." }, { q: "Do you offer refunds?", a: "Yes, 30-day money-back guarantee." }] },
  { icon: Shield, title: "License", count: 5, faqs: [{ q: "Can I use it commercially?", a: "Yes, unlimited commercial and client projects." }, { q: "Can I resell the components?", a: "No — redistribution or resale of source files isn't allowed." }] },
  { icon: LifeBuoy, title: "Support", count: 3, faqs: [{ q: "How do I get help?", a: "Community Discord is free for everyone; Pro users get priority email support." }] },
];

export default function FaqCategoryCards() {
  const [openCat, setOpenCat] = useState(null);
  return (
    <section className="bg-neutral-950 py-24 px-6 text-white">
      <div className="mx-auto max-w-6xl">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14 text-center text-4xl font-bold tracking-tight md:text-5xl">
          Browse by <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">topic</span>
        </motion.h2>
        <div className="grid gap-4 md:grid-cols-2">
          {categories.map((c, ci) => (
            <motion.div key={c.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: ci * 0.08 }} className={`overflow-hidden rounded-3xl border transition-colors ${openCat === ci ? "border-emerald-500/40 bg-emerald-500/[0.05]" : "border-white/10 bg-white/[0.03] hover:border-white/20"}`}>
              <button onClick={() => setOpenCat(openCat === ci ? null : ci)} className="flex w-full items-center gap-4 p-7 text-left">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/10 ring-1 ring-white/10">
                  <c.icon className="h-5 w-5 text-emerald-300" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold">{c.title}</h3>
                  <p className="text-xs text-zinc-500">{c.count} articles</p>
                </div>
                <motion.span animate={{ rotate: openCat === ci ? 180 : 0 }}><ChevronDown className="h-5 w-5 text-zinc-500" /></motion.span>
              </button>
              <AnimatePresence initial={false}>
                {openCat === ci && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}>
                    <div className="space-y-3 border-t border-white/5 p-7 pt-5">
                      {c.faqs.map((f) => (
                        <div key={f.q}>
                          <p className="text-sm font-medium text-zinc-200">{f.q}</p>
                          <p className="mt-1 text-sm text-zinc-500">{f.a}</p>
                        </div>
                      ))}
                    </div>
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