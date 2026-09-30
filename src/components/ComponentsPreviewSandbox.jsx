// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import {
//   HiComputerDesktop,
//   HiDeviceTablet,
//   HiDevicePhoneMobile,
// } from "react-icons/hi2";

// export default function ComponentPreviewSandbox({ title, children }) {
//   const [widthMode, setWidthMode] = useState("full");

//   const getWidthLabel = () => {
//     if (widthMode === "full") return "100%";
//     if (widthMode === "md") return "768px (Tablet)";
//     return "384px (Mobile)";
//   };

//   return (
//     <div className="w-full border border-slate-800 bg-slate-900/40 rounded-2xl shadow-xl overflow-hidden mb-12 relative font-mono">
//       {/* TABS CONTROL BAR */}
//       <div className="bg-slate-900 border-b border-slate-800 px-5 py-3.5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 select-none">
//         <div className="flex items-center gap-2">
//           <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
//           <span className="text-[11px] md:text-xs text-slate-300 font-semibold">
//             {`// preview: ${title}`}
//           </span>
//           <span className="hidden md:inline-block text-[10px] text-slate-400 bg-slate-800 px-2 py-0.5 rounded-md ml-2">
//             {getWidthLabel()}
//           </span>
//         </div>

//         {/* Responsive Device Toggle Tabs (Hidden on mobile, visible on large screens as requested: hidden lg:flex) */}
//         <div className="bg-slate-950 p-1 rounded-xl gap-1 border border-slate-800 shadow-inner hidden lg:flex">
//           <button
//             onClick={() => setWidthMode("full")}
//             className={`px-3.5 py-1.5 text-[11px] font-bold rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
//               widthMode === "full"
//                 ? "bg-indigo-600 text-white shadow-md"
//                 : "text-slate-400 hover:text-white hover:bg-slate-900"
//             }`}>
//             <HiComputerDesktop className="w-4 h-4" />
//             <span>Desktop</span>
//           </button>

//           <button
//             onClick={() => setWidthMode("md")}
//             className={`px-3.5 py-1.5 text-[11px] font-bold rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
//               widthMode === "md"
//                 ? "bg-indigo-600 text-white shadow-md"
//                 : "text-slate-400 hover:text-white hover:bg-slate-900"
//             }`}>
//             <HiDeviceTablet className="w-4 h-4" />
//             <span>Tablet</span>
//           </button>

//           <button
//             onClick={() => setWidthMode("sm")}
//             className={`px-3.5 py-1.5 text-[11px] font-bold rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
//               widthMode === "sm"
//                 ? "bg-indigo-600 text-white shadow-md"
//                 : "text-slate-400 hover:text-white hover:bg-slate-900"
//             }`}>
//             <HiDevicePhoneMobile className="w-4 h-4" />
//             <span>Mobile</span>
//           </button>
//         </div>
//       </div>

//       {/* VIEWPORT CONTAINER */}
//       <div className="p-4 sm:p-8 bg-slate-950 flex justify-center items-center overflow-x-auto transition-all">
//         <motion.div
//           animate={{
//             width:
//               widthMode === "full"
//                 ? "100%"
//                 : widthMode === "md"
//                 ? "768px"
//                 : "384px",
//           }}
//           transition={{ type: "spring", stiffness: 300, damping: 25 }}
//           className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden w-full min-w-[320px] shadow-2xl">
//           {children}
//         </motion.div>
//       </div>
//     </div>
//   );
// }

import React, { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import {
  HiDevicePhoneMobile,
  HiDeviceTablet,
  HiComputerDesktop,
} from "react-icons/hi2";

export default function ComponentPreviewSandbox({ children, title }) {
  const [widthMode, setWidthMode] = useState("full"); // "full" | "md" | "sm"
  const iframeRef = useRef(null);
  const [iframeBody, setIframeBody] = useState(null);

  // Iframe එක ඇතුළට Tailwind CSS සහ ස්ටයිල්ස් ඉන්ජෙක්ට් කිරීම
  useEffect(() => {
    const updateIframeContent = () => {
      const iframe = iframeRef.current;
      if (!iframe) return;

      const doc = iframe.contentDocument || iframe.contentWindow.document;
      doc.open();
      doc.write(`
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <!-- Tailwind CSS CDN -->
            <script src="https://cdn.tailwindcss.com"></script>
            <style>
              html, body {
                margin: 0;
                background: #ffffff;
                font-family: ui-sans-serif, system-ui, sans-serif;
                scrollbar-width: none; /* Firefox සඳහා */
                -ms-overflow-style: none;  /* IE සහ Edge සඳහා */
              }
              html::-webkit-scrollbar, body::-webkit-scrollbar {
                display: none; /* Chrome, Safari සහ Opera සඳහා */
              }body { margin: 0; background: #ffffff; font-family: ui-sans-serif, system-ui, sans-serif; }
            </style>
          </head>
          <body>
            <div id="sandbox-root"></div>
          </body>
        </html>
      `);
      doc.close();

      setTimeout(() => {
        const rootElement = doc.getElementById("sandbox-root");
        if (rootElement) {
          setIframeBody(rootElement);
        }
      }, 50);
    };

    updateIframeContent();
  }, []);

  return (
    <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm mb-12">
      {/* SANDBOX TOOLBAR & CONTROLS */}
      <div className="bg-slate-50 border-b border-slate-200 px-4 py-3 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2 font-mono text-xs font-bold text-slate-700">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>{title || "component_sandbox"}</span>
        </div>

        {/* VIEWPORT RESIZE BUTTONS */}
        <div className="flex items-center bg-slate-200/60 p-1 rounded-xl border border-slate-300/60">
          <button
            onClick={() => setWidthMode("sm")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all cursor-pointer ${
              widthMode === "sm"
                ? "bg-white text-slate-900 shadow-xs font-bold"
                : "text-slate-600 hover:text-slate-900"
            }`}
            title="Mobile View (384px)">
            <HiDevicePhoneMobile className="w-4 h-4" />
            <span className="hidden sm:inline">Mobile (384px)</span>
          </button>

          <button
            onClick={() => setWidthMode("md")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all cursor-pointer ${
              widthMode === "md"
                ? "bg-white text-slate-900 shadow-xs font-bold"
                : "text-slate-600 hover:text-slate-900"
            }`}
            title="Tablet View (768px)">
            <HiDeviceTablet className="w-4 h-4" />
            <span className="hidden sm:inline">Tablet (768px)</span>
          </button>

          <button
            onClick={() => setWidthMode("full")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all cursor-pointer ${
              widthMode === "full"
                ? "bg-white text-slate-900 shadow-xs font-bold"
                : "text-slate-600 hover:text-slate-900"
            }`}
            title="Desktop View (100%)">
            <HiComputerDesktop className="w-4 h-4" />
            <span className="hidden sm:inline">Desktop (100%)</span>
          </button>
        </div>
      </div>

      {/* VIEWPORT CONTAINER */}
      <div className="p-4 sm:p-8 bg-slate-100 flex justify-center items-center overflow-x-auto transition-all scrollbar-none">
        <motion.div
          animate={{
            width:
              widthMode === "full"
                ? "100%"
                : widthMode === "md"
                  ? "768px"
                  : "384px",
          }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-2xl transition-all scrollbar-none">
          {/* Iframe එක හරහා කම්පොනන්ට් එක වෙනම වින්ඩෝ එකක් ලෙස රෙන්ඩර් කිරීම */}
          <iframe
            ref={iframeRef}
            title={title}
            className="w-full border-0 border-slate-100 min-h-150 max-h-screen scrollbar-none overflow-scroll"
            onLoad={() => {
              const iframe = iframeRef.current;
              if (iframe) {
                const doc =
                  iframe.contentDocument || iframe.contentWindow.document;
                const rootElement = doc.getElementById("sandbox-root");
                if (rootElement) setIframeBody(rootElement);
              }
            }}
          />

          {iframeBody && createPortal(children, iframeBody)}
        </motion.div>
      </div>
    </div>
  );
}
