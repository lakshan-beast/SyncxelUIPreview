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

// import React from "react";
// import { useParams } from "react-router-dom";
// import { uiPacksData } from "../data/packs";

// export default function PackPreviewView() {
//   const { packId } = useParams(); // URL එකෙන් id එක ලබා ගැනීම (උදා: /preview/auth-pack-01)

//   // packs.js එකෙන් අදාළ pack එක හොයාගැනීම
//   const pack = uiPacksData.find((p) => p.id === packId) || uiPacksData[0];

//   return (
//     <div className="min-h-screen bg-slate-950 text-white font-baloo p-6">
//       {/* Top Bar / Header with Pack Info */}
//       <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center bg-slate-900 border border-slate-800 p-4 rounded-xl mb-6 gap-4">
//         <div>
//           <span className="text-xs uppercase tracking-wider bg-indigo-500/10 text-indigo-400 px-3 py-1 rounded-full border border-indigo-500/20">
//             {pack.category} • {pack.sales}
//           </span>
//           <h1 className="text-xl sm:text-2xl font-bold mt-2">{pack.title}</h1>
//           <p className="text-sm text-slate-400 max-w-2xl mt-1">
//             {pack.description}
//           </p>
//         </div>

//         {/* Pricing & Checkout Action */}
//         <div className="flex items-center gap-4 shrink-0">
//           <div className="text-right">
//             <span className="text-xs text-slate-400 block">Price</span>
//             <span className="text-2xl font-bold text-emerald-400">
//               {pack.price}
//             </span>
//           </div>
//           <a
//             href={pack.checkoutUrl}
//             target="_blank"
//             rel="noreferrer"
//             className="bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2.5 rounded-lg font-medium transition-colors shadow-lg shadow-indigo-600/20">
//             Get Pack Now
//           </a>
//         </div>
//       </div>

//       {/* Live Preview Sandbox Area */}
//       <div className="max-w-7xl mx-auto bg-slate-900 border border-slate-800 rounded-xl overflow-hidden min-h-[600px] flex items-center justify-center">
//         {/* මෙතනට තමයි අදාළ UI Component එක (උදා: Footer01, Auth01) ඩයිනමික් විදිහට ලෝඩ් වෙන්නේ */}
//         <div className="text-slate-500 text-sm">
//           [ Live Preview Sandbox for {pack.title} ]
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ComponentPreviewSandbox from "../components/ComponentPreviewSandbox";
import { uiPacksData } from "../src/data/packs";

// 📚 ඩිසයින් කම්පොනන්ට්ස් ඉම්පෝට් කරගැනීම (අවශ්‍ය පරිදි තව එකතු කරගත හැක)
import PremiumFooterOne from "../src/library/FootersDesigns/FooterDesign01";
import PremiumFooterTwo from "../src/library/FootersDesigns/FooterDesign02";
import PremiumFooterThree from "../src/library/FootersDesigns/FooterDesign03";
import LandingDesign01 from "../library/LandingDesigns/LandingDesign01";
import LandingDesign02 from "../library/LandingDesigns/LandingDesign02";
import LandingDesign03 from "../library/LandingDesigns/LandingDesign03";

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

export default function PackPreviewView() {
  const { packId } = useParams(); // URL එකෙන් id එක ලබා ගැනීම (උදා: /preview/footer-pack-01)
  const [copiedLink, setCopiedLink] = useState(false);

  // packs.js එකෙන් අදාළ pack එක හොයාගැනීම (නැත්නම් පළමුවැන්න පෙන්වයි)
  const pack = uiPacksData.find((p) => p.id === packId) || uiPacksData[0];

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
    if (pack?.checkoutUrl) {
      window.open(pack.checkoutUrl, "_blank");
    }
  };

  // 🛠️ පැක් එකේ වර්ගයට අනුව අදාළ ඩිසයින් කම්පොනන්ට්ස් ටික ඩයිනමික් ලෙස රෙන්ඩර් කිරීම
  const renderPackContent = () => {
    // උදාහරණයක් ලෙස Footer Pack නම්
    if (pack.category === "Footers" || pack.id?.includes("footer")) {
      return (
        <>
          <div className="mb-12">
            <div className="flex items-center justify-between mb-3 px-2">
              <div className="flex items-center gap-2.5 font-mono text-xs text-slate-800 font-bold">
                <HiSparkles className="w-4 h-4 text-slate-900" />
                <span className="font-exo">
                  01 / Footer 01 - Syntax Light Minimalist Style
                </span>
              </div>
              <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-md hidden sm:inline">
                status: active_preview
              </span>
            </div>
            <ComponentPreviewSandbox title="footer_01_syntax_light">
              <PremiumFooterOne />
            </ComponentPreviewSandbox>
          </div>

          <div className="mb-12">
            <div className="flex items-center justify-between mb-3 px-2">
              <div className="flex items-center gap-2.5 font-mono text-xs text-slate-800 font-bold">
                <HiTerminal className="w-4 h-4 text-slate-900" />
                <span className="font-exo">
                  02 / Footer 02 - Tactile Modern Layout
                </span>
              </div>
              <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-md hidden sm:inline">
                status: active_preview
              </span>
            </div>
            <ComponentPreviewSandbox title="footer_02_tactile_3d">
              <PremiumFooterTwo />
            </ComponentPreviewSandbox>
          </div>

          <div className="mb-12">
            <div className="flex items-center justify-between mb-3 px-2">
              <div className="flex items-center gap-2.5 font-mono text-xs text-slate-800 font-bold">
                <HiTerminal className="w-4 h-4 text-slate-900" />
                <span className="font-exo">
                  03 / Footer 03 - Tactile Modern Layout
                </span>
              </div>
              <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-md hidden sm:inline">
                status: active_preview
              </span>
            </div>
            <ComponentPreviewSandbox title="footer_03_tactile_3d">
              <PremiumFooterThree />
            </ComponentPreviewSandbox>
          </div>
        </>
      );
    }

    // උදාහරණයක් ලෙස Landing Page Pack නම්
    if (pack.category === "Landing" || pack.id?.includes("landing")) {
      return (
        <>
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
              <LandingDesign03 />
            </ComponentPreviewSandbox>
          </div>
        </>
      );
    }

    // වෙනත් පැක් සඳහා වන ජෙනරික් ෆෝමැට් එක
    return (
      <div className="text-center py-20 font-mono text-slate-500">
        [ Live interactive sandbox components will appear here for {pack.title}{" "}
        ]
      </div>
    );
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
            <span>{`build_passing // ${pack.id}`}</span>
          </div>

          {/* Top Navbar Buy Button */}
          <button
            onClick={handleBuyNow}
            className="bg-slate-900 hover:bg-slate-800 text-white font-mono text-xs font-semibold px-4.5 py-2 rounded-xl transition-all shadow-sm flex items-center gap-2 cursor-pointer active:scale-95">
            <HiShoppingBag className="w-4 h-4" />
            <span>Get Pack ({pack.price})</span>
          </button>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-10">
        {/* HERO HEADER SECTION (Clean Light Card) */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 mb-12 shadow-sm relative overflow-hidden">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 relative z-10">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="text-[11px] font-mono font-medium px-3 py-1 bg-slate-100 text-slate-700 rounded-full border border-slate-200">
                  {`// category: ${pack.category}`}
                </span>
                <span className="text-[11px] font-mono font-bold px-3 py-1 bg-slate-900 text-white rounded-full shadow-sm">
                  {pack.sales || "PRO_EDITION"}
                </span>
              </div>

              <h1 className="text-2xl sm:text-4xl font-black tracking-tight text-slate-900 font-exo">
                {pack.title}
              </h1>

              <p className="text-sm sm:text-base text-slate-600 font-baloo max-w-2xl leading-relaxed">
                {pack.description}
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
                <span>Buy Full Pack ({pack.price})</span>
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
                BUNDLE ID
              </span>
              <span className="font-bold text-slate-900 flex items-center gap-1.5">
                <HiTerminal className="w-4 h-4 text-slate-700" /> {pack.id}
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
                {pack.price}{" "}
                <span className="text-[10px] text-slate-500 font-normal">
                  (Lifetime)
                </span>
              </span>
            </div>
          </div>
        </div>

        {/* 🚀 DYNAMIC LIVE PREVIEW SANDBOXES */}
        {renderPackContent()}
      </div>
    </div>
  );
}
