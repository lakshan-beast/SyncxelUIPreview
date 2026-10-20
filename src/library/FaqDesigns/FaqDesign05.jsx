// FaqConversationalChat.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, User, Send } from "lucide-react";

const conversation = [
  { from: "user", text: "Is there a free trial?" },
  {
    from: "bot",
    text: "Yes! Every pack comes with a live preview so you can test before buying. No signup needed.",
  },
  { from: "user", text: "What tech stack do you use?" },
  {
    from: "bot",
    text: "React + Tailwind CSS + Framer Motion. Works with Next.js, Vite, and Remix out of the box.",
  },
  { from: "user", text: "Do I get updates forever?" },
  {
    from: "bot",
    text: "Yep — one payment, lifetime updates, and access to our community Discord.",
  },
];

export default function FaqConversationalChat() {
  const [visible, setVisible] = useState(2);
  const showMore = () =>
    setVisible((v) => Math.min(v + 2, conversation.length));

  return (
    <section className="bg-neutral-950 py-24 px-6 text-white">
      <div className="mx-auto max-w-2xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center text-4xl font-bold tracking-tight md:text-5xl">
          Ask us{" "}
          <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
            anything
          </span>
        </motion.h2>
        <div className="space-y-4 rounded-3xl border border-white/10 bg-white/[0.02] p-6 md:p-10">
          <AnimatePresence>
            {conversation.slice(0, visible).map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: i === visible - 1 ? 0.15 : 0 }}
                className={`flex gap-3 ${m.from === "user" ? "flex-row-reverse" : ""}`}>
                <div
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${m.from === "bot" ? "bg-gradient-to-br from-violet-500 to-fuchsia-500" : "bg-zinc-800"}`}>
                  {m.from === "bot" ? (
                    <Bot className="h-4 w-4" />
                  ) : (
                    <User className="h-4 w-4" />
                  )}
                </div>
                <div
                  className={`max-w-[80%] rounded-2xl px-5 py-3.5 text-sm leading-relaxed ${m.from === "bot" ? "rounded-tl-sm bg-white/[0.06] text-zinc-200" : "rounded-tr-sm bg-violet-600 text-white"}`}>
                  {m.text}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          {visible < conversation.length && (
            <button
              onClick={showMore}
              className="mx-auto flex items-center gap-2 rounded-full border border-white/10 px-5 py-2.5 text-xs font-medium text-zinc-400 transition hover:bg-white/5 hover:text-white">
              <Send className="h-3.5 w-3.5" /> Load more questions
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
