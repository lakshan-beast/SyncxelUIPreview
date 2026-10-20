// PricingBillingToggle.jsx
import React, { useState } from "react";
import { FiCheck, FiArrowRight } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const plans = [
  { name: "Starter", monthly: 12, yearly: 10, desc: "For solo builders", features: ["3 Projects", "Basic Analytics", "Community Support"], popular: false },
  { name: "Pro", monthly: 29, yearly: 24, desc: "For growing teams", features: ["Unlimited Projects", "Advanced Analytics", "Priority Support", "Custom Domains"], popular: true },
  { name: "Enterprise", monthly: 79, yearly: 65, desc: "For large orgs", features: ["Everything in Pro", "SSO / SAML", "Dedicated Manager", "SLA 99.99%"], popular: false },
];

export default function PricingBillingToggle() {
  const [yearly, setYearly] = useState(true);

  return (
    <section className="bg-neutral-950 py-24 px-6 text-white">
      <div className="mx-auto max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12 text-center">
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            Simple, transparent <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">pricing</span>
          </h2>
          <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 p-1.5">
            <button onClick={() => setYearly(false)} className={`rounded-full px-5 py-2 text-sm font-medium transition ${!yearly ? "bg-white text-neutral-950" : "text-zinc-400"}`}>Monthly</button>
            <button onClick={() => setYearly(true)} className={`flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium transition ${yearly ? "bg-white text-neutral-950" : "text-zinc-400"}`}>
              Yearly <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] font-bold text-emerald-400">SAVE 20%</span>
            </button>
          </div>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              className={`group relative overflow-hidden rounded-3xl border p-8 backdrop-blur transition-all duration-300 hover:-translate-y-2 ${p.popular ? "border-violet-500/50 bg-gradient-to-b from-violet-950/40 to-neutral-950 shadow-2xl shadow-violet-950/40" : "border-white/10 bg-white/[0.03] hover:border-white/25"}`}
            >
              {p.popular && (
                <span className="absolute top-5 right-5 rounded-full bg-violet-500 px-3 py-1 text-[10px] font-bold tracking-widest uppercase">Popular</span>
              )}
              <h3 className="text-lg font-semibold">{p.name}</h3>
              <p className="mt-1 text-sm text-zinc-400">{p.desc}</p>
              <div className="mt-6 flex items-end gap-2">
                <AnimatePresence mode="popLayout">
                  <motion.span
                    key={yearly ? "y" : "m"}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.25 }}
                    className="text-5xl font-extrabold tracking-tight [font-variant-numeric:tabular-nums]"
                  >
                    ${yearly ? p.yearly : p.monthly}
                  </motion.span>
                </AnimatePresence>
                <span className="pb-1.5 text-sm text-zinc-500">/mo</span>
              </div>
              <p className="mt-1 h-5 text-xs text-zinc-500">
                {yearly ? `Billed $${p.yearly * 12} annually` : "Billed monthly"}
              </p>
              <ul className="mt-8 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-zinc-300">
                    <FiCheck className="shrink-0 text-emerald-400" /> {f}
                  </li>
                ))}
              </ul>
              <a href="#contact" className={`mt-8 flex w-full items-center justify-center gap-2 rounded-full py-3 text-sm font-semibold transition ${p.popular ? "bg-violet-500 hover:bg-violet-400" : "border border-white/15 bg-white/5 hover:bg-white/10"}`}>
                Get Started <FiArrowRight />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}