// import React from "react";
// import { useParams } from "react-router-dom";
// import { uiPacksData } from "../data/packs";

// export default function PackPreviewView() {
//   const { packId } = useParams();

//   const pack = uiPacksData.find((p) => p.id === packId) || uiPacksData[0];

//   return (
//     <div className="">
//       {/* Top Bar / Header with pack info  */}
//       <div className="">
//         <div>
//           <span className="">
//             {pack.category} * {pack.sales}
//           </span>
//           <h1>{pack.title}</h1>
//           <p>{pack.description}</p>
//         </div>

//         {/* pricing & checkout action */}
//         <div className="">
//           <div className="">
//             <span className="">Price</span>
//             <span className="">{pack.price}</span>
//           </div>
//           <a
//             href="pack.checkoutUrl"
//             target="_blank"
//             className=""
//             rel="noopener noreferrer">
//             Get Pack Now
//           </a>
//         </div>
//       </div>

//       {/* live previre sandebox area */}
//       <div className="">
//         <div className="">[ Live Preview Sandbox for {pack.title}]</div>
//       </div>
//     </div>
//   );
// }

import React from "react";
import { useParams } from "react-router-dom";
import { uiPacksData } from "../data/packs";

export default function PackPreviewView() {
  const { packId } = useParams(); // URL එකෙන් id එක ලබා ගැනීම (උදා: /preview/auth-pack-01)

  // packs.js එකෙන් අදාළ pack එක හොයාගැනීම
  const pack = uiPacksData.find((p) => p.id === packId) || uiPacksData[0];

  return (
    <div className="min-h-screen bg-slate-950 text-white font-baloo p-6">
      {/* Top Bar / Header with Pack Info */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center bg-slate-900 border border-slate-800 p-4 rounded-xl mb-6 gap-4">
        <div>
          <span className="text-xs uppercase tracking-wider bg-indigo-500/10 text-indigo-400 px-3 py-1 rounded-full border border-indigo-500/20">
            {pack.category} • {pack.sales}
          </span>
          <h1 className="text-xl sm:text-2xl font-bold mt-2">{pack.title}</h1>
          <p className="text-sm text-slate-400 max-w-2xl mt-1">
            {pack.description}
          </p>
        </div>

        {/* Pricing & Checkout Action */}
        <div className="flex items-center gap-4 shrink-0">
          <div className="text-right">
            <span className="text-xs text-slate-400 block">Price</span>
            <span className="text-2xl font-bold text-emerald-400">
              {pack.price}
            </span>
          </div>
          <a
            href={pack.checkoutUrl}
            target="_blank"
            rel="noreferrer"
            className="bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2.5 rounded-lg font-medium transition-colors shadow-lg shadow-indigo-600/20">
            Get Pack Now
          </a>
        </div>
      </div>

      {/* Live Preview Sandbox Area */}
      <div className="max-w-7xl mx-auto bg-slate-900 border border-slate-800 rounded-xl overflow-hidden min-h-[600px] flex items-center justify-center">
        {/* මෙතනට තමයි අදාළ UI Component එක (උදා: Footer01, Auth01) ඩයිනමික් විදිහට ලෝඩ් වෙන්නේ */}
        <div className="text-slate-500 text-sm">
          [ Live Preview Sandbox for {pack.title} ]
        </div>
      </div>
    </div>
  );
}
