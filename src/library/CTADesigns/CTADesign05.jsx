// CtaMinimalGlow.jsx
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CtaMinimalGlow() {
  return (
    <section className="relative overflow-hidden bg-neutral-950 px-6 py-32 text-center">
      <div className="absolute inset-x-0 top-1/2 mx-auto h-px w-2/3 bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />
      <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/10 blur-[100px]" />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative mx-auto max-w-2xl">
        <h2 className="text-4xl font-light tracking-tight text-white md:text-6xl">
          Build something{" "}
          <span className="italic bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
            beautiful
          </span>
        </h2>
        <p className="mx-auto mt-6 max-w-md text-zinc-500">
          Premium React blocks for developers who care about craft. One payment,
          lifetime access.
        </p>
        <a
          href="#buy"
          className="group mt-10 inline-flex items-center gap-2 rounded-full border border-violet-500/40 bg-violet-500/10 px-9 py-4 text-sm font-semibold text-violet-200 backdrop-blur transition hover:bg-violet-500/20">
          Get Lifetime Access
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
      </motion.div>
    </section>
  );
}
