// // import { useState } from "react";
// // import { motion } from "framer-motion";

// // export default function ComponentPreviewSandbox({ title, children }) {
// //   const [widthMode, setWidthMode] = useState("full");

// //   return (
// //     <div className="w-full border border-neutral-200 bg-white rounded-xl shadow-sm overflow-hidden mb-12">
// //       {/* TABS CONTROL BAR */}
// //       <div className="bg-neutral-50 border-b border-neutral-200 px-4 py-3 flex justify-between items-center select-none">
// //         <span className="font-mono text-[10px] md:text-xs text-neutral-500 font-medium">
// //           {`// component: ${title}`}
// //         </span>

// //         {/* Laptop & Desktop වලදී විතරක් පෙනෙන Tabs (hidden lg:flex) */}
// //         <div className="hidden lg:flex bg-neutral-200/60 p-0.5 rounded gap-1 border border-neutral-200">
// //           <button
// //             onClick={() => setWidthMode("full")}
// //             className={`px-3 py-1 font-mono text-[10px] font-bold rounded transition-all ${widthMode === "full" ? "bg-white text-black shadow-xs" : "text-neutral-500 hover:text-black"}`}>
// //             Desktop
// //           </button>
// //           <button
// //             onClick={() => setWidthMode("md")}
// //             className={`px-3 py-1 font-mono text-[10px] font-bold rounded transition-all ${widthMode === "md" ? "bg-white text-black shadow-xs" : "text-neutral-500 hover:text-black"}`}>
// //             Tablet
// //           </button>
// //           <button
// //             onClick={() => setWidthMode("sm")}
// //             className={`px-3 py-1 font-mono text-[10px] font-bold rounded transition-all ${widthMode === "sm" ? "bg-white text-black shadow-xs" : "text-neutral-500 hover:text-black"}`}>
// //             Mobile
// //           </button>
// //         </div>
// //       </div>

// //       {/* LIVE VIEWPORT CONTAINER */}
// //       <div className="p-4 bg-neutral-50/50 flex justify-center items-center overflow-x-auto">
// //         <motion.div
// //           animate={{
// //             width:
// //               widthMode === "full"
// //                 ? "100%"
// //                 : widthMode === "md"
// //                   ? "768px"
// //                   : "384px",
// //           }}
// //           transition={{ type: "spring", stiffness: 300, damping: 25 }}
// //           className="bg-white border border-neutral-200/80 rounded shadow-xs overflow-hidden w-full min-w-[320px]">
// //           {children}
// //         </motion.div>
// //       </div>
// //     </div>
// //   );
// // }

// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import {
//   HiComputerDesktop,
//   HiDeviceTablet,
//   HiDevicePhoneMobile,
// } from "react-icons/hi2";

// export default function ComponentPreviewSandbox({ title, children }) {
//   const [widthMode, setWidthMode] = useState("full");

//   return (
//     <div className="w-full border border-slate-200 bg-white rounded-3xl shadow-sm overflow-hidden mb-12 relative font-mono">
//       {/* TABS CONTROL BAR */}
//       <div className="bg-slate-50/90 backdrop-blur-md border-b border-slate-200 px-5 py-3.5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 select-none">

//         {/* Component Title with Live Status Indicator */}
//         <div className="flex items-center gap-2">
//           <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
//           <span className="text-[11px] md:text-xs text-slate-500 font-medium">
//             {`// component: ${title}`}
//           </span>
//         </div>

//         {/* Desktop & Tablet / Mobile Device Toggle Tabs */}
//         <div className="hidden lg:flex bg-slate-200/70 p-0 rounded-xl gap-1 border border-slate-300/60 shadow-xs">
//           <button
//             onClick={() => setWidthMode("full")}
//             className={`px-3.5 py-1.5 text-[11px] font-bold rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
//               widthMode === "full"
//                 ? "bg-slate-950 text-white shadow-sm scale-102"
//                 : "text-slate-600 hover:text-slate-950 hover:bg-white/60"
//             }`}>
//             <HiComputerDesktop className="w-4 h-4" />
//             <span>Desktop</span>
//           </button>

//           <button
//             onClick={() => setWidthMode("md")}
//             className={`px-3.5 py-1.5 text-[11px] font-bold rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
//               widthMode === "md"
//                 ? "bg-slate-950 text-white shadow-sm scale-102"
//                 : "text-slate-600 hover:text-slate-950 hover:bg-white/60"
//             }`}>
//             <HiDeviceTablet className="w-4 h-4" />
//             <span>Tablet</span>
//           </button>

//           <button
//             onClick={() => setWidthMode("sm")}
//             className={`px-3.5 py-1.5 text-[11px] font-bold rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
//               widthMode === "sm"
//                 ? "bg-slate-950 text-white shadow-sm scale-102"
//                 : "text-slate-600 hover:text-slate-950 hover:bg-white/60"
//             }`}>
//             <HiDevicePhoneMobile className="w-4 h-4" />
//             <span>Mobile</span>
//           </button>
//         </div>
//       </div>

//       {/* LIVE VIEWPORT CONTAINER */}
//       <div className="p-4 sm:p-6 bg-slate-50/50 flex justify-center items-center overflow-x-auto">
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
//           className="bg-white border border-slate-200/80 rounded-2xl shadow-sm overflow-hidden w-full min-w-[320px]">
//           {children}
//         </motion.div>
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  HiComputerDesktop,
  HiDeviceTablet,
  HiDevicePhoneMobile,
} from "react-icons/hi2";

export default function ComponentPreviewSandbox({ title, children }) {
  const [widthMode, setWidthMode] = useState("full");

  // Get active width label for the badge
  const getWidthLabel = () => {
    if (widthMode === "full") return "100% (Full Width)";
    if (widthMode === "md") return "768px (Tablet View)";
    return "384px (Mobile View)";
  };

  return (
    <div className="w-full border border-slate-200 bg-white rounded-3xl shadow-sm overflow-hidden mb-12 relative font-mono">
      {/* TABS CONTROL BAR */}
      <div className="bg-slate-50/90 backdrop-blur-md border-b border-slate-200 px-5 py-3.5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 select-none">
        {/* Component Title with Live Status Indicator */}
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[11px] md:text-xs text-slate-600 font-semibold">
            {`// component: ${title}`}
          </span>
          <span className="hidden md:inline-block text-[10px] text-slate-400 bg-slate-200/60 px-2 py-0.5 rounded-md ml-2">
            {getWidthLabel()}
          </span>
        </div>

        {/* Desktop & Tablet / Mobile Device Toggle Tabs */}
        <div className="flex bg-slate-200/70 p-1 rounded-xl gap-1 border border-slate-300/60 shadow-xs">
          <button
            onClick={() => setWidthMode("full")}
            className={`px-3.5 py-1.5 text-[11px] font-bold rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
              widthMode === "full"
                ? "bg-slate-950 text-white shadow-sm scale-[1.02]"
                : "text-slate-600 hover:text-slate-950 hover:bg-white/60"
            }`}>
            <HiComputerDesktop className="w-4 h-4" />
            <span className="hidden sm:inline">Desktop</span>
          </button>

          <button
            onClick={() => setWidthMode("md")}
            className={`px-3.5 py-1.5 text-[11px] font-bold rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
              widthMode === "md"
                ? "bg-slate-950 text-white shadow-sm scale-[1.02]"
                : "text-slate-600 hover:text-slate-950 hover:bg-white/60"
            }`}>
            <HiDeviceTablet className="w-4 h-4" />
            <span className="hidden sm:inline">Tablet</span>
          </button>

          <button
            onClick={() => setWidthMode("sm")}
            className={`px-3.5 py-1.5 text-[11px] font-bold rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
              widthMode === "sm"
                ? "bg-slate-950 text-white shadow-sm scale-[1.02]"
                : "text-slate-600 hover:text-slate-950 hover:bg-white/60"
            }`}>
            <HiDevicePhoneMobile className="w-4 h-4" />
            <span className="hidden sm:inline">Mobile</span>
          </button>
        </div>
      </div>

      {/* LIVE VIEWPORT CONTAINER */}
      <div className="p-4 sm:p-8 bg-slate-100/60 flex justify-center items-center overflow-x-auto transition-all">
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
          className="bg-white border border-slate-200/80 rounded-2xl shadow-md overflow-hidden w-full min-w-[320px]">
          {children}
        </motion.div>
      </div>
    </div>
  );
}
