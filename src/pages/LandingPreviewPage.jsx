// import React, { useState } from "react";
// import ComponentPreviewSandbox from "../components/ConponentsPreviewSandbox";
// import PremiumLandingOne from "../library/LandingPagesDesigns/Landing01";
// import PremiumLandingTwo from "../library/LandingPagesDesigns/Landing02";
// import { HiTerminal, HiCheckCircle, HiSparkles, HiCode } from "react-icons/hi";

// export default function LandingPagesPreviewPage() {
//   const [copiedLink, setCopiedLink] = useState(false);

//   // Main Site එකට රීඩිරෙක්ට් වෙන Back Function එක
//   const handleBackToMain = () => {
//     window.location.href = "https://syncxel.vercel.app";
//   };

//   // ෂෙයාර් කරන ලින්ක් එක කොපි කරගැනීමට
//   const handleCopyBundleLink = () => {
//     navigator.clipboard.writeText(window.location.href);
//     setCopiedLink(true);
//     setTimeout(() => setCopiedLink(false), 2000);
//   };

//   return (
//     <div className="min-h-screen bg-slate-50 font-sans pb-24">
//       {/* GLOBAL TOP PREVIEW NAVIGATION */}
//       <div className="w-full bg-white border-b border-slate-200 h-14 px-6 flex justify-between items-center z-50 sticky top-0 shadow-xs select-none">
//         <button
//           onClick={handleBackToMain}
//           className="font-mono text-xs text-slate-600 hover:text-slate-900 border border-slate-200 px-3 py-1.5 rounded-xl bg-slate-100 transition-colors shadow-xs cursor-pointer flex items-center space-x-1.5">
//           <span>{"// back_to_syncxel"}</span>
//         </button>

//         <div className="flex items-center gap-3">
//           <span className="hidden md:flex items-center gap-1.5 font-mono text-[11px] text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
//             <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
//             build_passing
//           </span>
//           <span className="font-mono text-xs text-slate-400 hidden sm:inline-block">
//             {"[ENV: SECURED_SANDBOX]"}
//           </span>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-0 md:px-2 pt-2">
//         {/* NEXT-LEVEL HEADER SECTION */}
//         <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 mb-10 shadow-sm">
//           <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
//             <div className="space-y-2">
//               <div className="flex items-center gap-2">
//                 <span className="text-[10px] font-mono font-semibold px-3 py-1 bg-slate-100 text-slate-700 rounded-full border border-slate-200">
//                   {"// bundle_id: l4nd1ng_p4ck_x92"}
//                 </span>
//                 <span className="text-[10px] font-mono font-bold px-3 py-1 bg-slate-900 text-white rounded-full">
//                   PRO_EDITION
//                 </span>
//               </div>
//               <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900 font-mono">
//                 Premium Landing Pages Sandbox
//               </h1>
//               <p className="text-xs sm:text-sm text-slate-600 font-sans max-w-2xl leading-relaxed">
//                 High-converting, production-ready landing page templates crafted
//                 with React and Tailwind CSS. Test drive multiple variations in a
//                 secure sandbox.
//               </p>
//             </div>

//             {/* Quick Actions & Meta */}
//             <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
//               <button
//                 onClick={handleCopyBundleLink}
//                 className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-mono font-medium border border-slate-200 transition shadow-xs cursor-pointer flex items-center justify-center gap-2">
//                 {copiedLink ? (
//                   <HiCheckCircle className="w-4 h-4 text-emerald-600" />
//                 ) : (
//                   <HiCode className="w-4 h-4" />
//                 )}
//                 <span>{copiedLink ? "Link Copied!" : "Share Sandbox"}</span>
//               </button>
//             </div>
//           </div>

//           {/* Mini Metadata Grid */}
//           <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-slate-100 font-mono text-xs">
//             <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100">
//               <span className="text-slate-400 block text-[10px]">
//                 FRAMEWORK
//               </span>
//               <span className="font-bold text-slate-900">React + Tailwind</span>
//             </div>
//             <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100">
//               <span className="text-slate-400 block text-[10px]">
//                 TOTAL TEMPLATES
//               </span>
//               <span className="font-bold text-slate-900">02 Variations</span>
//             </div>
//             <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100">
//               <span className="text-slate-400 block text-[10px]">
//                 CONVERSION FOCUS
//               </span>
//               <span className="font-bold text-slate-900">
//                 Optimized Layouts
//               </span>
//             </div>
//             <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100">
//               <span className="text-slate-400 block text-[10px]">LICENSE</span>
//               <span className="font-bold text-slate-900">Commercial Use</span>
//             </div>
//           </div>
//         </div>

//         {/* 🛠️ LANDING PAGE 01 LIVE PREVIEW */}
//         <div className="mb-10">
//           <div className="flex items-center justify-between mb-3 px-2">
//             <div className="flex items-center gap-2 font-mono text-xs text-slate-700 font-bold">
//               <HiSparkles className="w-4 h-4 text-slate-900" />
//               <span>01 / Landing 01 - Modern SaaS & Developer Startup</span>
//             </div>
//             <span className="text-[10px] font-mono text-slate-400 hidden sm:inline">
//               status: active_preview
//             </span>
//           </div>
//           <ComponentPreviewSandbox title="landing_01_saas_startup">
//             <PremiumLandingOne />
//           </ComponentPreviewSandbox>
//         </div>

//         {/* 🛠️ LANDING PAGE 02 LIVE PREVIEW */}
//         <div className="mb-10">
//           <div className="flex items-center justify-between mb-3 px-2">
//             <div className="flex items-center gap-2 font-mono text-xs text-slate-700 font-bold">
//               <HiTerminal className="w-4 h-4 text-slate-900" />
//               <span>02 / Landing 02 - Minimalist Creator & Portfolio</span>
//             </div>
//             <span className="text-[10px] font-mono text-slate-400 hidden sm:inline">
//               status: active_preview
//             </span>
//           </div>
//           <ComponentPreviewSandbox title="landing_02_creator_portfolio">
//             <PremiumLandingTwo />
//           </ComponentPreviewSandbox>
//         </div>
//       </div>
//     </div>
//   );
// }

// import React, { useState } from "react";
// import ComponentPreviewSandbox from "../components/ConponentsPreviewSandbox";
// import PremiumLandingOne from "../library/LandingPagesDesigns/LandingDesign01";
// import PremiumLandingTwo from "../library/LandingPagesDesigns/LandingDesign02";
// import { uiPacksData } from "../data/packs"; // 👈 packs.js එකෙන් ඩේටා ගෙන්වා ගැනීම
// import { HiTerminal, HiCheckCircle, HiSparkles, HiCode, HiShoppingBag, HiArrowRight } from "react-icons/hi";

// export default function LandingPagesPreviewPage() {
//   const [copiedLink, setCopiedLink] = useState(false);

//   // packs.js එකෙන් අදාළ Pack එක ෆිල්ටර් කරගැනීම (උදා: id එක landing-pack-01 නම් හෝ දෙවන අයිතමය ලෙස)
//   const landingPack = uiPacksData.find((p) => p.id === "landing-pack-01") || uiPacksData[1] || uiPacksData[0];

//   // Main Site එකට රීඩිරෙක්ට් වෙන Back Function එක
//   const handleBackToMain = () => {
//     window.location.href = "https://syncxel.vercel.app/components";
//   };

//   // ෂෙයාර් කරන ලින්ක් එක කොපි කරගැනීමට
//   const handleCopyBundleLink = () => {
//     navigator.clipboard.writeText(window.location.href);
//     setCopiedLink(true);
//     setTimeout(() => setCopiedLink(false), 2000);
//   };

//   // Lemon Squeezy checkout එකට යැවීමට
//   const handleBuyNow = () => {
//     window.open(landingPack.checkoutUrl, "_blank");
//   };

//   return (
//     <div className="min-h-screen bg-slate-50 font-sans pb-24">
//       {/* GLOBAL TOP PREVIEW NAVIGATION */}
//       <div className="w-full bg-white border-b border-slate-200 h-14 px-4 sm:px-6 flex justify-between items-center z-50 sticky top-0 shadow-xs select-none">
//         <button
//           onClick={handleBackToMain}
//           className="font-mono text-xs text-slate-600 hover:text-slate-900 border border-slate-200 px-3 py-1.5 rounded-xl bg-slate-100 transition-colors shadow-xs cursor-pointer flex items-center space-x-1.5">
//           <span>{"// back_to_syncxel"}</span>
//         </button>

//         <div className="flex items-center gap-3">
//           <span className="hidden md:flex items-center gap-1.5 font-mono text-[11px] text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
//             <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
//             build_passing
//           </span>

//           {/* Top Navbar Buy Button */}
//           <button
//             onClick={handleBuyNow}
//             className="bg-slate-900 hover:bg-slate-800 text-white font-mono text-xs px-4 py-1.5 rounded-xl transition shadow-sm flex items-center gap-1.5 cursor-pointer">
//             <HiShoppingBag className="w-3.5 h-3.5" />
//             <span>Get Pack ({landingPack.price})</span>
//           </button>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-10">
//         {/* NEXT-LEVEL HEADER SECTION (Dynamic from packs.js) */}
//         <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 mb-10 shadow-sm">
//           <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
//             <div className="space-y-2">
//               <div className="flex items-center gap-2">
//                 <span className="text-[10px] font-mono font-semibold px-3 py-1 bg-slate-100 text-slate-700 rounded-full border border-slate-200">
//                   {`// bundle_id: ${landingPack.id}`}
//                 </span>
//                 <span className="text-[10px] font-mono font-bold px-3 py-1 bg-slate-900 text-white rounded-full">
//                   {landingPack.sales || "PRO_EDITION"}
//                 </span>
//               </div>
//               <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900 font-mono">
//                 {landingPack.title}
//               </h1>
//               <p className="text-xs sm:text-sm text-slate-600 font-sans max-w-2xl leading-relaxed">
//                 {landingPack.description}
//               </p>
//             </div>

//             {/* Quick Actions & Buy CTA */}
//             <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
//               <button
//                 onClick={handleCopyBundleLink}
//                 className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-mono font-medium border border-slate-200 transition shadow-xs cursor-pointer flex items-center justify-center gap-2">
//                 {copiedLink ? (
//                   <HiCheckCircle className="w-4 h-4 text-emerald-600" />
//                 ) : (
//                   <HiCode className="w-4 h-4" />
//                 )}
//                 <span>{copiedLink ? "Link Copied!" : "Share Sandbox"}</span>
//               </button>

//               <button
//                 onClick={handleBuyNow}
//                 className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-mono font-semibold transition shadow-sm cursor-pointer flex items-center justify-center gap-2">
//                 <span>Buy Full Pack ({landingPack.price})</span>
//                 <HiArrowRight className="w-4 h-4" />
//               </button>
//             </div>
//           </div>

//           {/* Mini Metadata Grid */}
//           <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-slate-100 font-mono text-xs">
//             <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100">
//               <span className="text-slate-400 block text-[10px]">
//                 FRAMEWORK
//               </span>
//               <span className="font-bold text-slate-900">React + Tailwind</span>
//             </div>
//             <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100">
//               <span className="text-slate-400 block text-[10px]">
//                 TOTAL TEMPLATES
//               </span>
//               <span className="font-bold text-slate-900">02 Variations</span>
//             </div>
//             <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100">
//               <span className="text-slate-400 block text-[10px]">
//                 CONVERSION FOCUS
//               </span>
//               <span className="font-bold text-slate-900">
//                 Optimized Layouts
//               </span>
//             </div>
//             <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100">
//               <span className="text-slate-400 block text-[10px]">PRICE</span>
//               <span className="font-bold text-emerald-600">{landingPack.price} (Lifetime)</span>
//             </div>
//           </div>
//         </div>

//         {/* 🛠️ LANDING PAGE 01 LIVE PREVIEW */}
//         <div className="mb-10">
//           <div className="flex items-center justify-between mb-3 px-2">
//             <div className="flex items-center gap-2 font-mono text-xs text-slate-700 font-bold">
//               <HiSparkles className="w-4 h-4 text-slate-900" />
//               <span>01 / Landing 01 - Modern SaaS & Developer Startup</span>
//             </div>
//             <span className="text-[10px] font-mono text-slate-400 hidden sm:inline">
//               status: active_preview
//             </span>
//           </div>
//           <ComponentPreviewSandbox title="landing_01_saas_startup">
//             <PremiumLandingOne />
//           </ComponentPreviewSandbox>
//         </div>

//         {/* 🛠️ LANDING PAGE 02 LIVE PREVIEW */}
//         <div className="mb-10">
//           <div className="flex items-center justify-between mb-3 px-2">
//             <div className="flex items-center gap-2 font-mono text-xs text-slate-700 font-bold">
//               <HiTerminal className="w-4 h-4 text-slate-900" />
//               <span>02 / Landing 02 - Minimalist Creator & Portfolio</span>
//             </div>
//             <span className="text-[10px] font-mono text-slate-400 hidden sm:inline">
//               status: active_preview
//             </span>
//           </div>
//           <ComponentPreviewSandbox title="landing_02_creator_portfolio">
//             <PremiumLandingTwo />
//           </ComponentPreviewSandbox>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import ComponentPreviewSandbox from "../components/ComponentsPreviewSandbox";
// Landing ඩිසයින්ස් ටික library ෆෝල්ඩරයෙන් ඉම්පෝට් කරගැනීම
import LandingDesign01 from "../library/LandingPagesDesigns/LandingDesign01";
import LandingDesign02 from "../library/LandingPagesDesigns/LandingDesign02";
// import LandingDesign03 from "../library/LandingPagesDesigns/LandingDesign03";
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

export default function LandingPreviewPage() {
  const [copiedLink, setCopiedLink] = useState(false);

  // packs.js එකෙන් අදාළ Landing Pack එක ෆිල්ටර් කරගැනීම
  const landingPack =
    uiPacksData.find(
      (p) => p.id === "landing-pack-01" || p.category === "Landing",
    ) || uiPacksData[0];

  // Main Site එකට රීඩිරෙක්ට් වෙන Back Function එක
  const handleBackToMain = () => {
    window.location.href = "https://syncxel.vercel.app/components";
  };

  // ෂෙයාර් කරන ලින්ක් එක කොපි කරගැනීමට
  const handleCopyBundleLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  // Lemon Squeezy checkout එකට යැවීමට
  const handleBuyNow = () => {
    if (landingPack?.checkoutUrl) {
      window.open(landingPack.checkoutUrl, "_blank");
    }
  };

  return (
    <div className="w-full min-h-screen bg-slate-50 text-slate-900 font-baloo pb-24 selection:bg-slate-900 selection:text-white">
      {/* GLOBAL TOP PREVIEW NAVIGATION */}
      <nav className="w-full bg-white/80 backdrop-blur-md border-b border-slate-200 h-16 px-4 sm:px-8 flex justify-between items-center z-50 sticky top-0 select-none shadow-xs">
        <button
          onClick={handleBackToMain}
          className="font-mono text-xs text-slate-600 hover:text-slate-900 border border-slate-200 px-3.5 py-2 rounded-xl bg-slate-100 transition-all shadow-xs cursor-pointer flex items-center space-x-2 group">
          <span className="text-slate-500 group-hover:-translate-x-0.5 transition-transform">
            &larr;
          </span>
          <span>{"// back_to_syncxel"}</span>
        </button>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2 font-mono text-[11px] text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-200">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>build_passing // landing_sandbox</span>
          </div>

          {/* Top Navbar Buy Button */}
          <button
            onClick={handleBuyNow}
            className="bg-slate-900 hover:bg-slate-800 text-white font-mono text-xs font-semibold px-4.5 py-2 rounded-xl transition-all shadow-sm flex items-center gap-2 cursor-pointer active:scale-95">
            <HiShoppingBag className="w-4 h-4" />
            <span>Get Pack ({landingPack.price})</span>
          </button>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-10">
        {/* HERO HEADER SECTION */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 mb-12 shadow-sm relative overflow-hidden">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 relative z-10">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="text-[11px] font-mono font-medium px-3 py-1 bg-slate-100 text-slate-700 rounded-full border border-slate-200">
                  {`// bundle_id: ${landingPack.id || "landing-pack-01"}`}
                </span>
                <span className="text-[11px] font-mono font-bold px-3 py-1 bg-slate-900 text-white rounded-full shadow-sm">
                  {landingPack.sales || "SAAS_EDITION"}
                </span>
              </div>

              <h1 className="text-2xl sm:text-4xl font-black tracking-tight text-slate-900 font-exo">
                {landingPack.title || "High-Converting SaaS Landing Pages"}
              </h1>

              <p className="text-sm sm:text-base text-slate-600 font-baloo max-w-2xl leading-relaxed">
                {landingPack.description ||
                  "Production-ready, ultra-responsive landing page sections built with React and Tailwind CSS."}
              </p>
            </div>

            {/* Quick Actions & Buy CTA */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
              <button
                onClick={handleCopyBundleLink}
                className="px-4.5 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-mono font-medium border border-slate-200 transition-all shadow-xs cursor-pointer flex items-center justify-center gap-2">
                {copiedLink ? (
                  <HiCheckCircle className="w-4 h-4 text-emerald-600" />
                ) : (
                  <HiCode className="w-4 h-4 text-slate-700" />
                )}
                <span>{copiedLink ? "Link Copied!" : "Share Sandbox"}</span>
              </button>

              <button
                onClick={handleBuyNow}
                className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-mono font-bold transition-all shadow-sm cursor-pointer flex items-center justify-center gap-2 active:scale-95">
                <span>Buy Full Pack ({landingPack.price})</span>
                <HiArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Mini Metadata Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8 pt-8 border-t border-slate-200 font-mono text-xs">
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 flex flex-col gap-1">
              <span className="text-slate-400 text-[10px] tracking-wider uppercase">
                FRAMEWORK
              </span>
              <span className="font-bold text-slate-900 flex items-center gap-1.5">
                <HiCube className="w-4 h-4 text-slate-700" /> React + Tailwind
              </span>
            </div>
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 flex flex-col gap-1">
              <span className="text-slate-400 text-[10px] tracking-wider uppercase">
                TOTAL DESIGNS
              </span>
              <span className="font-bold text-slate-900 flex items-center gap-1.5">
                <HiTerminal className="w-4 h-4 text-slate-700" /> 03 Variations
              </span>
            </div>
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 flex flex-col gap-1">
              <span className="text-slate-400 text-[10px] tracking-wider uppercase">
                RESPONSIVENESS
              </span>
              <span className="font-bold text-slate-900 flex items-center gap-1.5">
                <HiShieldCheck className="w-4 h-4 text-emerald-600" /> 100%
                Mobile Ready
              </span>
            </div>
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 flex flex-col gap-1">
              <span className="text-slate-400 text-[10px] tracking-wider uppercase">
                PRICE TIER
              </span>
              <span className="font-bold text-emerald-600 text-sm">
                {landingPack.price}{" "}
                <span className="text-[10px] text-slate-500 font-normal">
                  (Lifetime)
                </span>
              </span>
            </div>
          </div>
        </div>

        {/* 🛠️ LANDING 01 LIVE PREVIEW */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-3 px-2">
            <div className="flex items-center gap-2.5 font-mono text-xs text-slate-800 font-bold">
              <HiSparkles className="w-4 h-4 text-slate-900" />
              <span className="font-exo">
                01 / Landing 01 - SaaS Hero & Feature Grid
              </span>
            </div>
            <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-md hidden sm:inline">
              status: active_preview
            </span>
          </div>
          <ComponentPreviewSandbox title="landing_01_saas_hero">
            <LandingDesign01 />
          </ComponentPreviewSandbox>
        </div>

        {/* 🛠️ LANDING 02 LIVE PREVIEW */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-3 px-2">
            <div className="flex items-center gap-2.5 font-mono text-xs text-slate-800 font-bold">
              <HiTerminal className="w-4 h-4 text-slate-900" />
              <span className="font-exo">
                02 / Landing 02 - Modern Startup Showcase
              </span>
            </div>
            <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-md hidden sm:inline">
              status: active_preview
            </span>
          </div>
          <ComponentPreviewSandbox title="landing_02_startup_showcase">
            <LandingDesign02 />
          </ComponentPreviewSandbox>
        </div>

        {/* 🛠️ LANDING 03 LIVE PREVIEW */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-3 px-2">
            <div className="flex items-center gap-2.5 font-mono text-xs text-slate-800 font-bold">
              <HiTerminal className="w-4 h-4 text-slate-900" />
              <span className="font-exo">
                03 / Landing 03 - Minimalist Product Launch
              </span>
            </div>
            <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-md hidden sm:inline">
              status: active_preview
            </span>
          </div>
          <ComponentPreviewSandbox title="landing_03_product_launch">
            <LandingDesign02 />
          </ComponentPreviewSandbox>
        </div>
      </div>
    </div>
  );
}
