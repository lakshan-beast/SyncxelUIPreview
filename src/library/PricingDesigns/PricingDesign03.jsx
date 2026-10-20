// PricingComparisonTable.jsx
import React from "react";
import { FiCheck, FiX, FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";

const groups = [
  {
    label: "Core",
    rows: [
      { feature: "Projects", values: ["3", "Unlimited", "Unlimited"] },
      { feature: "Team Members", values: ["1", "10", "Unlimited"] },
      { feature: "API Access", values: [false, true, true] },
    ],
  },
  {
    label: "Security",
    rows: [
      { feature: "Two-Factor Auth", values: [true, true, true] },
      { feature: "SSO / SAML", values: [false, false, true] },
      { feature: "Audit Logs", values: [false, true, true] },
    ],
  },
  {
    label: "Support",
    rows: [
      { feature: "Support", values: ["Community", "Priority", "Dedicated"] },
      { feature: "Uptime SLA", values: ["—", "99.9%", "99.99%"] },
    ],
  },
];

function Cell({ v }) {
  if (v === true) return <FiCheck className="mx-auto text-emerald-400" />;
  if (v === false) return <FiX className="mx-auto text-zinc-600" />;
  return <span className="text-sm text-zinc-300">{v}</span>;
}

export default function PricingComparisonTable() {
  return (
    <section className="bg-neutral-950 py-24 px-6 text-white">
      <div className="mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center text-4xl font-bold tracking-tight md:text-5xl">
          Compare{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            plans
          </span>
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02]">
          <div className="grid grid-cols-4 border-b border-white/10 bg-white/[0.03] backdrop-blur">
            <div className="p-5 text-sm font-medium text-zinc-400">
              Features
            </div>
            {["Starter", "Pro", "Enterprise"].map((h, i) => (
              <div
                key={h}
                className={`p-5 text-center text-sm font-semibold ${i === 1 ? "bg-violet-500/10 text-violet-300" : ""}`}>
                {h}
              </div>
            ))}
          </div>
          {groups.map((g) => (
            <div key={g.label}>
              <div className="bg-white/[0.02] px-5 py-2.5 text-[11px] font-bold tracking-widest text-zinc-500 uppercase">
                {g.label}
              </div>
              {g.rows.map((r) => (
                <div
                  key={r.feature}
                  className="grid grid-cols-4 border-t border-white/5 transition-colors hover:bg-white/[0.03]">
                  <div className="p-4 text-sm text-zinc-300">{r.feature}</div>
                  {r.values.map((v, i) => (
                    <div
                      key={i}
                      className={`flex items-center justify-center p-4 ${i === 1 ? "bg-violet-500/[0.06]" : ""}`}>
                      <Cell v={v} />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ))}
          <div className="grid grid-cols-4 border-t border-white/10 p-5">
            <div />
            {["Choose Starter", "Choose Pro", "Contact Sales"].map((c, i) => (
              <a
                key={c}
                href="#contact"
                className={`mx-auto flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold transition ${i === 1 ? "bg-violet-500 hover:bg-violet-400" : "border border-white/15 hover:bg-white/10"}`}>
                {c} <FiArrowRight className="text-[10px]" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
