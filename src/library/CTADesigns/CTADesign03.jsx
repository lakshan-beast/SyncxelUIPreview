// CtaNewsletterCapture.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Send, CheckCircle2 } from "lucide-react";

export default function CtaNewsletterCapture() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <section className="bg-neutral-950 px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative mx-auto max-w-3xl overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-b from-violet-950/40 to-neutral-950 p-10 text-center md:p-16">
        <div className="absolute -top-24 left-1/2 h-48 w-96 -translate-x-1/2 rounded-full bg-violet-500/15 blur-[90px]" />
        <div className="relative">
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-500/15 ring-1 ring-violet-500/30">
            <Mail className="h-6 w-6 text-violet-300" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
            Get new blocks in your inbox
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-zinc-400">
            One email a week. New designs, free components, and exclusive deals.
            No spam.
          </p>
          <AnimatePresence mode="wait">
            {done ? (
              <motion.div
                key="done"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-8 flex items-center justify-center gap-2 text-emerald-400">
                <CheckCircle2 className="h-5 w-5" /> You're on the list!
              </motion.div>
            ) : (
              <motion.form
                key="form"
                exit={{ opacity: 0, y: -10 }}
                onSubmit={(e) => {
                  e.preventDefault();
                  setDone(true);
                }}
                className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="flex-1 rounded-full border border-white/10 bg-white/5 px-5 py-3.5 text-sm text-white placeholder-zinc-500 outline-none backdrop-blur transition focus:border-violet-500/50"
                />
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 rounded-full bg-violet-500 px-7 py-3.5 text-sm font-semibold transition hover:bg-violet-400">
                  Subscribe <Send className="h-4 w-4" />
                </button>
              </motion.form>
            )}
          </AnimatePresence>
          <p className="mt-5 text-xs text-zinc-600">
            Join 4,000+ developers · Unsubscribe anytime
          </p>
        </div>
      </motion.div>
    </section>
  );
}
