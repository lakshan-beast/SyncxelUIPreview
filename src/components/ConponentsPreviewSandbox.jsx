import { useState } from "react";
import { motion } from "framer-motion";

export default function ComponentPreviewSandbox({ title, children }) {
  const [widthMode, setWidthMode] = useState("full");

  return (
    <div className="w-full border border-neutral-200 bg-white rounded-xl shadow-sm overflow-hidden mb-12">
      {/* TABS CONTROL BAR */}
      <div className="bg-neutral-50 border-b border-neutral-200 px-4 py-3 flex justify-between items-center select-none">
        <span className="font-mono text-[10px] md:text-xs text-neutral-500 font-medium">
          {`// component: ${title}`}
        </span>

        {/* Laptop & Desktop වලදී විතරක් පෙනෙන Tabs (hidden lg:flex) */}
        <div className="hidden lg:flex bg-neutral-200/60 p-0.5 rounded gap-1 border border-neutral-200">
          <button
            onClick={() => setWidthMode("full")}
            className={`px-3 py-1 font-mono text-[10px] font-bold rounded transition-all ${widthMode === "full" ? "bg-white text-black shadow-xs" : "text-neutral-500 hover:text-black"}`}>
            Desktop
          </button>
          <button
            onClick={() => setWidthMode("md")}
            className={`px-3 py-1 font-mono text-[10px] font-bold rounded transition-all ${widthMode === "md" ? "bg-white text-black shadow-xs" : "text-neutral-500 hover:text-black"}`}>
            Tablet
          </button>
          <button
            onClick={() => setWidthMode("sm")}
            className={`px-3 py-1 font-mono text-[10px] font-bold rounded transition-all ${widthMode === "sm" ? "bg-white text-black shadow-xs" : "text-neutral-500 hover:text-black"}`}>
            Mobile
          </button>
        </div>
      </div>

      {/* LIVE VIEWPORT CONTAINER */}
      <div className="p-4 bg-neutral-50/50 flex justify-center items-center overflow-x-auto">
        <motion.div
          animate={{
            width:
              widthMode === "full"
                ? "100%"
                : widthMode === "md"
                  ? "768px"
                  : "375px",
          }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="bg-white border border-neutral-200/80 rounded shadow-xs overflow-hidden w-full min-w-[320px]">
          {children}
        </motion.div>
      </div>
    </div>
  );
}
