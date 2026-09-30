// // export default function PageNotFound() {
// //   return (
// //     <div className="min-h-screen flex flex-col items-center justify-center font-mono text-xs text-neutral-400 bg-white space-y-2 select-none">
// //       <span>{"[ERROR: 404] RESOURCE_COMPILATION_FAILED"}</span>
// //       <span className="text-neutral-300">{"// unauthorized_access_blocked"}</span>
// //     </div>
// //   );
// // }

// export default function PageNotFound() {
//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center font-mono bg-slate-50 p-4 select-none">
//       <div className="bg-white border border-slate-200 px-8 py-8 rounded-3xl shadow-sm flex flex-col items-center text-center space-y-3 max-w-sm w-full">
//         {/* Error Code Pill */}
//         <span className="text-[10px] font-bold text-slate-900 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
//           {"[ERROR: 404]"}
//         </span>

//         {/* Main Error Text */}
//         <h1 className="text-xs sm:text-sm font-bold text-slate-900 tracking-tight pt-1">
//           RESOURCE COMPILATION FAILED
//         </h1>

//         <p className="text-xs text-slate-500 pb-2">
//           {"unauthorized_access_blocked"}
//         </p>

//         {/* Back Button */}
//         <div className="pt-2 border-t border-slate-100 w-full flex justify-center">
//           <a
//             href="/"
//             className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-mono font-bold transition-all shadow-sm cursor-pointer">
//             {"return_to_dashboard()"}
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from "react";
import { Link } from "react-router-dom";

export default function DevelopingPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-mono flex flex-col items-center justify-center p-6 text-center">
      <div className="flex items-center gap-2 mb-4 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full">
        <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping" />
        <span className="text-xs text-amber-400 font-semibold">
          // Crafting Sandbox & Components
        </span>
      </div>

      <h1 className="text-2xl sm:text-3xl font-bold mb-2">
        Module Under Active Development
      </h1>
      <p className="text-sm text-slate-400 max-w-md mb-8">
        This preview module is currently being wired up or compiled in our build
        pipeline. Check back soon for live interactive sandboxes!
      </p>

      <div className="flex flex-wrap items-center justify-center gap-4">
        <Link
          to="/footers"
          className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold rounded-xl transition-colors">
          View Active Footers
        </Link>
        <a
          href="https://syncxel.vercel.app/components"
          className="px-5 py-2.5 bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-300 text-xs font-bold rounded-xl transition-colors">
          &larr; Back to Main Site
        </a>
      </div>
    </div>
  );
}
