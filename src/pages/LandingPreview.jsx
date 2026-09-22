import React, { useState } from "react";
import ComponentPreviewSandbox from "../components/ConponentsPreviewSandbox";
import PremiumLandingOne from "../library/LandingPagesDesigns/Landing01";
import PremiumLandingTwo from "../library/LandingPagesDesigns/Landing02";
import { HiTerminal, HiCheckCircle, HiSparkles, HiCode } from "react-icons/hi";

export default function LandingPagesPreviewPage() {
  const [copiedLink, setCopiedLink] = useState(false);

  // Main Site එකට රීඩිරෙක්ට් වෙන Back Function එක
  const handleBackToMain = () => {
    window.location.href = "https://syncxel.vercel.app";
  };

  // ෂෙයාර් කරන ලින්ක් එක කොපි කරගැනීමට
  const handleCopyBundleLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans pb-24">
      {/* GLOBAL TOP PREVIEW NAVIGATION */}
      <div className="w-full bg-white border-b border-slate-200 h-14 px-6 flex justify-between items-center z-50 sticky top-0 shadow-xs select-none">
        <button
          onClick={handleBackToMain}
          className="font-mono text-xs text-slate-600 hover:text-slate-900 border border-slate-200 px-3 py-1.5 rounded-xl bg-slate-100 transition-colors shadow-xs cursor-pointer flex items-center space-x-1.5">
          <span>{"// back_to_syncxel"}</span>
        </button>

        <div className="flex items-center gap-3">
          <span className="hidden md:flex items-center gap-1.5 font-mono text-[11px] text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            build_passing
          </span>
          <span className="font-mono text-xs text-slate-400 hidden sm:inline-block">
            {"[ENV: SECURED_SANDBOX]"}
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-0 md:px-2 pt-2">
        {/* NEXT-LEVEL HEADER SECTION */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 mb-10 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono font-semibold px-3 py-1 bg-slate-100 text-slate-700 rounded-full border border-slate-200">
                  {"// bundle_id: l4nd1ng_p4ck_x92"}
                </span>
                <span className="text-[10px] font-mono font-bold px-3 py-1 bg-slate-900 text-white rounded-full">
                  PRO_EDITION
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900 font-mono">
                Premium Landing Pages Sandbox
              </h1>
              <p className="text-xs sm:text-sm text-slate-600 font-sans max-w-2xl leading-relaxed">
                High-converting, production-ready landing page templates crafted
                with React and Tailwind CSS. Test drive multiple variations in a
                secure sandbox.
              </p>
            </div>

            {/* Quick Actions & Meta */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
              <button
                onClick={handleCopyBundleLink}
                className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-mono font-medium border border-slate-200 transition shadow-xs cursor-pointer flex items-center justify-center gap-2">
                {copiedLink ? (
                  <HiCheckCircle className="w-4 h-4 text-emerald-600" />
                ) : (
                  <HiCode className="w-4 h-4" />
                )}
                <span>{copiedLink ? "Link Copied!" : "Share Sandbox"}</span>
              </button>
            </div>
          </div>

          {/* Mini Metadata Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-slate-100 font-mono text-xs">
            <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100">
              <span className="text-slate-400 block text-[10px]">
                FRAMEWORK
              </span>
              <span className="font-bold text-slate-900">React + Tailwind</span>
            </div>
            <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100">
              <span className="text-slate-400 block text-[10px]">
                TOTAL TEMPLATES
              </span>
              <span className="font-bold text-slate-900">02 Variations</span>
            </div>
            <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100">
              <span className="text-slate-400 block text-[10px]">
                CONVERSION FOCUS
              </span>
              <span className="font-bold text-slate-900">
                Optimized Layouts
              </span>
            </div>
            <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100">
              <span className="text-slate-400 block text-[10px]">LICENSE</span>
              <span className="font-bold text-slate-900">Commercial Use</span>
            </div>
          </div>
        </div>

        {/* 🛠️ LANDING PAGE 01 LIVE PREVIEW */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-3 px-2">
            <div className="flex items-center gap-2 font-mono text-xs text-slate-700 font-bold">
              <HiSparkles className="w-4 h-4 text-slate-900" />
              <span>01 / Landing 01 - Modern SaaS & Developer Startup</span>
            </div>
            <span className="text-[10px] font-mono text-slate-400 hidden sm:inline">
              status: active_preview
            </span>
          </div>
          <ComponentPreviewSandbox title="landing_01_saas_startup">
            <PremiumLandingOne />
          </ComponentPreviewSandbox>
        </div>

        {/* 🛠️ LANDING PAGE 02 LIVE PREVIEW */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-3 px-2">
            <div className="flex items-center gap-2 font-mono text-xs text-slate-700 font-bold">
              <HiTerminal className="w-4 h-4 text-slate-900" />
              <span>02 / Landing 02 - Minimalist Creator & Portfolio</span>
            </div>
            <span className="text-[10px] font-mono text-slate-400 hidden sm:inline">
              status: active_preview
            </span>
          </div>
          <ComponentPreviewSandbox title="landing_02_creator_portfolio">
            <PremiumLandingTwo />
          </ComponentPreviewSandbox>
        </div>
      </div>
    </div>
  );
}
