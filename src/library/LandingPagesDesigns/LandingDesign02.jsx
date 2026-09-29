import React from "react";
import { HiTerminal, HiSparkles, HiExternalLink, HiShoppingCart, HiCode, HiShieldCheck } from "react-icons/hi";

export default function LandingPage() {
  // ඩොලර් මිල ලංකාවේරුපියල් වලට කන්වර්ට් කරන සිම්පල් ෆන්ෂන් එක
  const getLkrPrice = (priceStr) => {
    const numericValue = parseFloat(priceStr.replace(/[^0-9.]/g, "")) || 0;
    const exchangeRate = 305; // ඩොලර් එකක දළ අගය
    return Math.round(numericValue * exchangeRate).toLocaleString();
  };

  const componentsData = [
    {
      id: 1,
      category: "UI Components",
      title: "Syntax UI Kit Pro",
      description: "Production-ready Tailwind CSS & Framer Motion components designed for modern SaaS and developer portfolios.",
      price: "$29",
      demoUrl: "/preview/ui-kit",
      checkoutUrl: "https://lemonsqueezy.com",
    },
    {
      id: 2,
      category: "Full Dashboards",
      title: "DevFlow Admin Panel",
      description: "A complete, high-performance admin dashboard template featuring dark/light modes and modular analytics charts.",
      price: "$49",
      demoUrl: "/preview/dashboard",
      checkoutUrl: "https://lemonsqueezy.com",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-slate-900 selection:text-white pb-24">
      
      {/* 🚀 NAVBAR */}
      <nav className="w-full bg-white/80 backdrop-blur-md border-b border-slate-200 h-16 px-6 md:px-12 flex justify-between items-center z-50 sticky top-0 shadow-xs select-none">
        <div className="flex items-center gap-2 font-mono font-black text-sm tracking-tight text-slate-900">
          <span className="p-1.5 bg-slate-900 text-white rounded-xl shadow-xs">
            <HiTerminal className="w-4 h-4" />
          </span>
          <span>syncxel<span className="text-slate-400 font-normal"> // code_hub</span></span>
        </div>

        <div className="hidden md:flex items-center gap-6 font-mono text-xs text-slate-600">
          <a href="#components" className="hover:text-slate-900 transition-colors">components</a>
          <a href="#pricing" className="hover:text-slate-900 transition-colors">bundles</a>
          <a href="/docs" className="hover:text-slate-900 transition-colors">docs</a>
        </div>

        <div className="flex items-center gap-3">
          <span className="hidden sm:inline-block font-mono text-[10px] text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
            v2.4_stable
          </span>
          <a
            href="#pricing"
            className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-mono font-bold transition-all shadow-sm cursor-pointer">
            Get Access 🚀
          </a>
        </div>
      </nav>

      {/* 🌟 HERO SECTION */}
      <header className="max-w-5xl mx-auto px-4 md:px-8 pt-20 pb-16 text-center select-none">
        
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white border border-slate-200 rounded-full shadow-xs mb-6">
          <span className="w-2 h-2 rounded-full bg-slate-900 animate-pulse"></span>
          <span className="text-xs font-mono font-semibold text-slate-700">
            // next_gen_developer_components
          </span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900 font-mono mb-6 leading-tight">
          Ship clean UI faster with <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent">
            Production-Ready Code.
          </span>
        </h1>

        <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto font-sans leading-relaxed mb-10">
          Stop wasting hours on boilerplate. Grab high-performance React components, responsive layouts, and beautifully crafted Tailwind UI kits instantly.
        </p>

        {/* Hero CTA Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="#pricing"
            className="w-full sm:w-auto px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-2xl text-xs font-mono font-bold transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer">
            <HiSparkles className="w-4 h-4 text-slate-300" />
            <span>Explore Component Packs</span>
          </a>
          <a
            href="/docs"
            className="w-full sm:w-auto px-6 py-3 bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 rounded-2xl text-xs font-mono font-medium transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer">
            <HiCode className="w-4 h-4 text-slate-900" />
            <span>View Documentation</span>
          </a>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-2xl mx-auto mt-16 pt-8 border-t border-slate-200 font-mono text-xs text-slate-500">
          <div className="flex items-center justify-center gap-2">
            <HiShieldCheck className="w-4 h-4 text-slate-900" />
            <span>Secure Checkout</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <HiCode className="w-4 h-4 text-slate-900" />
            <span>Copy & Paste Ready</span>
          </div>
          <div className="col-span-2 sm:col-span-1 flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>Lifetime Updates</span>
          </div>
        </div>

      </header>

      {/* 📦 COMPONENTS / BUNDLES GRID SECTION */}
      <main id="pricing" className="max-w-7xl mx-auto px-4 md:px-8 py-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 border-l-2 border-slate-900 pl-4">
          <div>
            <h2 className="text-2xl font-black tracking-tight text-slate-900 font-mono">
              Featured Component Packs
            </h2>
            <p className="text-xs font-mono text-slate-500 mt-1">
              {"// bundle_catalog: ready_for_deployment"}
            </p>
          </div>
        </div>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {componentsData.map((pack) => (
            <div
              key={pack.id}
              className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col justify-between hover:border-slate-300 transition-all">
              
              <div>
                <span className="text-[10px] font-mono font-semibold px-3 py-1 bg-slate-100 text-slate-700 rounded-full border border-slate-200 inline-block mb-4">
                  {pack.category}
                </span>

                <h3 className="text-xl font-bold text-slate-900 tracking-tight font-mono mb-2">
                  {pack.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans mb-6">
                  {pack.description}
                </p>
              </div>

              {/* Price & Actions Footer */}
              <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl sm:text-3xl font-bold text-slate-900 font-mono tracking-tight">
                    {pack.price}
                  </span>
                  <span className="text-slate-400 text-xs font-mono font-medium">
                    / <span className="font-baloo">rs.</span> {getLkrPrice(pack.price)}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  {pack.demoUrl && (
                    <a
                      href={pack.demoUrl}
                      className="px-3.5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-mono font-medium rounded-xl border border-slate-200 transition shadow-xs flex items-center gap-1.5">
                      <HiExternalLink className="w-4 h-4" />
                      <span>Live Preview</span>
                    </a>
                  )}
                  {pack.checkoutUrl && (
                    <a
                      href={pack.checkoutUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-mono font-bold rounded-xl transition shadow-sm flex items-center gap-1.5">
                      <HiShoppingCart className="w-4 h-4" />
                      <span>Buy Pack</span>
                    </a>
                  )}
                </div>

              </div>

            </div>
          ))}
        </div>

      </main>

      {/* 📁 SIMPLE PROFESSIONAL FOOTER */}
      <footer className="max-w-7xl mx-auto px-4 md:px-8 mt-20 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-500 gap-4 select-none">
        <div>
          <span>© 2026 syncxel.vercel.app // all_rights_reserved</span>
        </div>
        <div className="flex items-center gap-4">
          <a href="/docs" className="hover:text-slate-900 transition-colors">documentation</a>
          <a href="https://t.me" target="_blank" rel="noreferrer" className="hover:text-slate-900 transition-colors">telegram</a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-slate-900 transition-colors">github</a>
        </div>
      </footer>

    </div>
  );
}