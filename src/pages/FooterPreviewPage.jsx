// import React, { useState } from "react";
// import ComponentPreviewSandbox from "../components/ConponentsPreviewSandbox";
// import PremiumFooterOne from "../library/FootersDesigns/FooterDesign01";
// import PremiumFooterTwo from "../library/FootersDesigns/FooterDesign02";
// import PremiumFooterThree from "../library/FootersDesigns/FooterDesign03";
// import { uiPacksData } from "../data/packs";
// import {
//   HiTerminal,
//   HiSparkles,
//   HiCheckCircle,
//   HiCode,
//   HiShoppingBag,
//   HiArrowRight,
//   HiShieldCheck,
//   HiCube,
// } from "react-icons/hi";

// export default function FootersPreviewPage() {
//   const [copiedLink, setCopiedLink] = useState(false);

//   const footerPack =
//     uiPacksData.find((p) => p.id === "footer-pack-01") || uiPacksData[0];

//   const handleBackToMain = () => {
//     window.location.href = "https://syncxel.vercel.app/components";
//   };

//   const handleCopyBundleLink = () => {
//     navigator.clipboard.writeText(window.location.href);
//     setCopiedLink(true);
//     setTimeout(() => setCopiedLink(false), 2000);
//   };

//   const handleBuyNow = () => {
//     if (footerPack?.checkoutUrl) {
//       window.open(footerPack.checkoutUrl, "_blank");
//     }
//   };

//   return (
//     <div className="w-full min-h-screen bg-slate-50 text-slate-900 font-baloo pb-24 selection:bg-slate-900 selection:text-white">
//       {/* GLOBAL TOP PREVIEW NAVIGATION */}
//       <nav className="w-full bg-white/80 backdrop-blur-md border-b border-slate-200 h-16 px-4 sm:px-8 flex justify-between items-center z-50 sticky top-0 select-none shadow-xs">
//         <button
//           onClick={handleBackToMain}
//           className="font-mono text-xs text-slate-600 hover:text-slate-900 border border-slate-200 px-3.5 py-2 rounded-xl bg-slate-100 transition-all shadow-xs cursor-pointer flex items-center space-x-2 group">
//           <span className="text-slate-500 group-hover:-translate-x-0.5 transition-transform">
//             &larr;
//           </span>
//           <span>{"// back_to_syncxel"}</span>
//         </button>

//         <div className="flex items-center gap-4">
//           <div className="hidden md:flex items-center gap-2 font-mono text-[11px] text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-200">
//             <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
//             <span>build_passing // active_sandbox</span>
//           </div>

//           {/* Top Navbar Buy Button */}
//           <button
//             onClick={handleBuyNow}
//             className="bg-slate-900 hover:bg-slate-800 text-white font-mono text-xs font-semibold px-4.5 py-2 rounded-xl transition-all shadow-sm flex items-center gap-2 cursor-pointer active:scale-95">
//             <HiShoppingBag className="w-4 h-4" />
//             <span>Get Pack ({footerPack.price})</span>
//           </button>
//         </div>
//       </nav>

//       <div className="w-full mx-auto px-4 sm:px-8 pt-10">
//         {/* HERO HEADER SECTION (Clean Light Card) */}
//         <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 mb-12 shadow-sm relative overflow-hidden">
//           <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 relative z-10">
//             <div className="space-y-3">
//               <div className="flex flex-wrap items-center gap-2.5">
//                 <span className="text-[11px] font-mono font-medium px-3 py-1 bg-slate-100 text-slate-700 rounded-full border border-slate-200">
//                   {`// bundle_id: ${footerPack.id}`}
//                 </span>
//                 <span className="text-[11px] font-mono font-bold px-3 py-1 bg-slate-900 text-white rounded-full shadow-sm">
//                   {footerPack.sales || "PRO_EDITION"}
//                 </span>
//               </div>

//               <h1 className="text-2xl sm:text-4xl font-black tracking-tight text-slate-900 font-exo">
//                 {footerPack.title}
//               </h1>

//               <p className="text-sm sm:text-base text-slate-600 font-baloo max-w-2xl leading-relaxed">
//                 {footerPack.description}
//               </p>
//             </div>

//             {/* Quick Actions & Buy CTA */}
//             <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
//               <button
//                 onClick={handleCopyBundleLink}
//                 className="px-4.5 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-mono font-medium border border-slate-200 transition-all shadow-xs cursor-pointer flex items-center justify-center gap-2">
//                 {copiedLink ? (
//                   <HiCheckCircle className="w-4 h-4 text-emerald-600" />
//                 ) : (
//                   <HiCode className="w-4 h-4 text-slate-700" />
//                 )}
//                 <span>{copiedLink ? "Link Copied!" : "Share Sandbox"}</span>
//               </button>

//               <button
//                 onClick={handleBuyNow}
//                 className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-mono font-bold transition-all shadow-sm cursor-pointer flex items-center justify-center gap-2 active:scale-95">
//                 <span>Buy Full Pack ({footerPack.price})</span>
//                 <HiArrowRight className="w-4 h-4" />
//               </button>
//             </div>
//           </div>

//           {/* Mini Metadata Grid */}
//           <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8 pt-8 border-t border-slate-200 font-baloo text-xs">
//             <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 flex flex-col gap-1">
//               <span className="text-slate-400 text-[10px] tracking-wider uppercase">
//                 FRAMEWORK
//               </span>
//               <span className="font-bold text-slate-900 flex items-center gap-1.5">
//                 <HiCube className="w-4 h-4 text-slate-700" /> React + Tailwind
//               </span>
//             </div>
//             <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 flex flex-col gap-1">
//               <span className="text-slate-400 text-[10px] tracking-wider uppercase">
//                 TOTAL DESIGNS
//               </span>
//               <span className="font-bold text-slate-900 flex items-center gap-1.5">
//                 <HiTerminal className="w-4 h-4 text-slate-700" /> 03 Variations
//               </span>
//             </div>
//             <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 flex flex-col gap-1">
//               <span className="text-slate-400 text-[10px] tracking-wider uppercase">
//                 RESPONSIVENESS
//               </span>
//               <span className="font-bold text-slate-900 flex items-center gap-1.5">
//                 <HiShieldCheck className="w-4 h-4 text-emerald-600" /> 100%
//                 Mobile Ready
//               </span>
//             </div>
//             <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 flex flex-col gap-1">
//               <span className="text-slate-400 text-[10px] tracking-wider uppercase">
//                 PRICE TIER
//               </span>
//               <span className="font-bold text-emerald-600 text-sm">
//                 {footerPack.price}{" "}
//                 <span className="text-[10px] text-slate-500 font-normal">
//                   (Lifetime)
//                 </span>
//               </span>
//             </div>
//           </div>
//         </div>

//         {/* 🛠️ FOOTER 01 LIVE PREVIEW */}
//         <div className="mb-12">
//           <div className="flex items-center justify-between mb-3 px-2">
//             <div className="flex items-center gap-2.5 font-mono text-xs text-slate-800 font-bold">
//               <HiSparkles className="w-4 h-4 text-slate-900" />
//               <span className="font-exo">
//                 01 / Footer 01 - Syntax Light Minimalist Style
//               </span>
//             </div>
//             <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-md hidden sm:inline">
//               status: active_preview
//             </span>
//           </div>
//           <ComponentPreviewSandbox title="footer_01_syntax_light">
//             <PremiumFooterOne />
//           </ComponentPreviewSandbox>
//         </div>

//         {/* 🛠️ FOOTER 02 LIVE PREVIEW */}
//         <div className="mb-12">
//           <div className="flex items-center justify-between mb-3 px-2">
//             <div className="flex items-center gap-2.5 font-mono text-xs text-slate-800 font-bold">
//               <HiTerminal className="w-4 h-4 text-slate-900" />
//               <span className="font-exo">
//                 02 / Footer 02 - Tactile Modern Layout
//               </span>
//             </div>
//             <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-md hidden sm:inline">
//               status: active_preview
//             </span>
//           </div>
//           <ComponentPreviewSandbox title="footer_02_tactile_3d">
//             <PremiumFooterTwo />
//           </ComponentPreviewSandbox>
//         </div>

//         {/* 🛠️ FOOTER 03 LIVE PREVIEW */}
//         <div className="mb-12">
//           <div className="flex items-center justify-between mb-3 px-2">
//             <div className="flex items-center gap-2.5 font-mono text-xs text-slate-800 font-bold">
//               <HiTerminal className="w-4 h-4 text-slate-900" />
//               <span className="font-exo">
//                 03 / Footer 03 - Tactile Modern Layout
//               </span>
//             </div>
//             <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-md hidden sm:inline">
//               status: active_preview
//             </span>
//           </div>
//           <ComponentPreviewSandbox title="footer_03_tactile_3d">
//             <PremiumFooterThree />
//           </ComponentPreviewSandbox>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import ComponentPreviewSandbox from "../components/ComponentsPreviewSandbox";
import FooterDesign01 from "../library/FootersDesigns/FooterDesign01";
import FooterDesign02 from "../library/FootersDesigns/FooterDesign02";
import FooterDesign03 from "../library/FootersDesigns/FooterDesign03";
import { uiPacksData } from "../data/packs";
import {
  HiTerminal,
  HiSparkles,
  HiCheckCircle,
  HiCode,
  HiShoppingBag,
  HiArrowRight,
  HiShieldCheck,
  HiCube,
} from "react-icons/hi";

export default function FooterPreviewPage() {
  const [copiedLink, setCopiedLink] = useState(false);

  const footerPack =
    uiPacksData.find((p) => p.id === "footer-pack-01") || uiPacksData[0];

  const handleBackToMain = () => {
    window.location.href = "https://syncxel.vercel.app/components";
  };

  const handleCopyBundleLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const handleBuyNow = () => {
    if (footerPack?.checkoutUrl) {
      window.open(footerPack.checkoutUrl, "_blank");
    }
  };

  return (
    <div className="w-full min-h-screen bg-slate-50 text-slate-900 font-baloo pb-24 selection:bg-slate-900 selection:text-white">
      {/* TOP NAVIGATION BAR */}
      <nav className="w-full bg-white/80 backdrop-blur-md border-b border-slate-200 h-16 px-4 sm:px-8 flex justify-between items-center z-50 sticky top-0 shadow-xs">
        <button
          onClick={handleBackToMain}
          className="font-mono text-xs text-slate-600 hover:text-slate-900 border border-slate-200 px-3.5 py-2 rounded-xl bg-slate-100 transition-all cursor-pointer flex items-center space-x-2">
          <span>&larr;</span>
          <span>{"// back_to_syncxel"}</span>
        </button>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2 font-mono text-[11px] text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-200">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>build_passing // footer_sandbox</span>
          </div>

          <button
            onClick={handleBuyNow}
            className="bg-slate-900 hover:bg-slate-800 text-white font-mono text-xs font-semibold px-4.5 py-2 rounded-xl transition-all shadow-sm flex items-center gap-2 cursor-pointer">
            <HiShoppingBag className="w-4 h-4" />
            <span>Get Pack ({footerPack.price})</span>
          </button>
        </div>
      </nav>

      <div className="w-full mx-auto px-4 sm:px-8 pt-2">
        {/* HERO HEADER CARD */}
        <div className="max-w-7xl mx-auto bg-white border border-slate-200 rounded-3xl p-4 sm:p-10 mb-5 shadow-sm relative overflow-hidden">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="text-[11px] font-mono font-medium px-3 py-1 bg-slate-100 text-slate-400/80 rounded-full border border-slate-200">
                  {`// bundle_id: ${footerPack.id}`}
                </span>
                <span className="text-[11px] font-baloo font-bold px-3 py-1 bg-slate-900 text-white rounded-full">
                  {footerPack.sales || "PRO_EDITION"}
                </span>
              </div>

              <h1 className="text-2xl sm:text-4xl font-black tracking-tight text-slate-900 font-exo">
                {footerPack.title}
              </h1>

              <p className="font-baloo text-sm sm:text-base text-slate-500 max-w-2xl leading-tight">
                {footerPack.description}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
              <button
                onClick={handleCopyBundleLink}
                className="px-4.5 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-baloo font-medium border border-slate-200 cursor-pointer flex items-center justify-center gap-2">
                {copiedLink ? (
                  <HiCheckCircle className="w-4 h-4 text-emerald-600" />
                ) : (
                  <HiCode className="w-4 h-4" />
                )}
                <span>{copiedLink ? "Link Copied!" : "Share Sandbox"}</span>
              </button>

              <button
                onClick={handleBuyNow}
                className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-baloo font-bold cursor-pointer flex items-center justify-center gap-2">
                <span>Buy Pack ({footerPack.price})</span>
                <HiArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* METADATA GRID */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8 pt-8 border-t border-slate-200 text-xs font-baloo">
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 flex flex-col gap-1">
              <span className="text-slate-400 text-[10px]">FRAMEWORK</span>
              <span className="font-bold text-slate-900 flex items-center gap-1.5">
                <HiCube className="w-4 h-4" /> React + Tailwind
              </span>
            </div>
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 flex flex-col gap-1">
              <span className="text-slate-400 text-[10px]">TOTAL DESIGNS</span>
              <span className="font-bold text-slate-900 flex items-center gap-1.5">
                <HiTerminal className="w-4 h-4" /> 03 Variations
              </span>
            </div>
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 flex flex-col gap-1">
              <span className="text-slate-400 text-[10px]">MOBILE READY</span>
              <span className="font-bold text-emerald-600 flex items-center gap-1.5">
                <HiShieldCheck className="w-4 h-4" /> 100% Responsive
              </span>
            </div>
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 flex flex-col gap-1">
              <span className="text-slate-400 text-[10px]">PRICE TIER</span>
              <span className="font-bold text-emerald-600 text-sm">
                {footerPack.price}
              </span>
            </div>
          </div>
        </div>

        {/* LIVE PREVIEWS */}
        <div className="mb-12 pt-5">
          <div className="flex items-center justify-between mb-3 px-2 font-mono text-xs text-slate-800 font-bold">
            <span className="flex items-center gap-2">
              <HiSparkles className="w-4 h-4" /> 01 / Footer Design 01
            </span>
            <span className="text-[10px] text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-md">
              active
            </span>
          </div>
          <ComponentPreviewSandbox title="footer_01">
            <FooterDesign01 />
          </ComponentPreviewSandbox>
        </div>

        <div className="mb-12">
          <div className="flex items-center justify-between mb-3 px-2 font-mono text-xs text-slate-800 font-bold">
            <span className="flex items-center gap-2">
              <HiTerminal className="w-4 h-4" /> 02 / Footer Design 02
            </span>
            <span className="text-[10px] text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-md">
              active
            </span>
          </div>
          <ComponentPreviewSandbox title="footer_02">
            <FooterDesign02 />
          </ComponentPreviewSandbox>
        </div>

        <div className="mb-12">
          <div className="flex items-center justify-between mb-3 px-2 font-mono text-xs text-slate-800 font-bold">
            <span className="flex items-center gap-2">
              <HiTerminal className="w-4 h-4" /> 03 / Footer Design 03
            </span>
            <span className="text-[10px] text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-md">
              active
            </span>
          </div>
          <ComponentPreviewSandbox title="footer_03">
            <FooterDesign03 />
          </ComponentPreviewSandbox>
        </div>
      </div>
    </div>
  );
}
