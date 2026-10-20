// CtaGradientBanner.jsx
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CtaGradientBanner() {
  return (
    <section className="bg-neutral-950 px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] border border-violet-500/30 bg-gradient-to-br from-violet-950/60 via-neutral-950 to-fuchsia-950/40 p-12 text-center md:p-20">
        <div className="absolute -top-32 left-1/2 h-64 w-[500px] -translate-x-1/2 rounded-full bg-violet-500/20 blur-[100px]" />
        <div className="absolute -bottom-32 right-10 h-48 w-48 rounded-full bg-fuchsia-500/15 blur-[80px]" />
        <div className="relative">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs tracking-wide text-violet-300 backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" /> Limited launch offer
          </span>
          <h2 className="mt-6 text-4xl font-bold tracking-tight text-white md:text-6xl">
            Ready to build{" "}
            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              faster
            </span>
            ?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-zinc-400">
            Join thousands of developers shipping beautiful products with
            production-ready blocks. Start free, upgrade when you grow.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#start"
              className="group flex w-full items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-neutral-950 transition hover:bg-zinc-200 sm:w-auto">
              Start Building Free
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#demo"
              className="w-full rounded-full border border-white/15 px-8 py-4 text-sm font-semibold text-zinc-300 transition hover:bg-white/5 sm:w-auto">
              View Live Demo
            </a>
          </div>
          <p className="mt-6 text-xs text-zinc-600">
            No credit card required · Cancel anytime
          </p>
        </div>
      </motion.div>
    </section>
  );
}
