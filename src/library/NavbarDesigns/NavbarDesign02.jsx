import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  RiHomeLine, 
  RiWallet3Line, 
  RiExchangeLine, 
  RiBarChartBoxLine, 
  RiUserLine, 
  RiShieldCheckLine, 
  RiGasStationLine,
  RiGlobalLine,
  RiArrowDownSLine
} from "react-icons/ri";
import { SiHivemq } from "react-icons/si";

// 1. Crypto Tab Data Structure with Subtabs
export const cryptoNavData = {
  brand: {
    name: "CYPHER // NEXUS",
    network: "Mainnet • Gas: 12 Gwei",
  },
  tabs: [
    {
      label: "Home",
      icon: <RiHomeLine className="w-4 h-4" />,
      subtabs: [
        { name: "Terminal Dashboard", desc: "Real-time asset telemetry", href: "#dashboard" },
        { name: "Global Feed", desc: "On-chain transaction streams", href: "#feed" },
        { name: "Ecosystem Hub", desc: "DApps & Protocols", href: "#ecosystem" },
      ],
    },
    {
      label: "Wallet",
      icon: <RiWallet3Line className="w-4 h-4" />,
      subtabs: [
        { name: "Portfolio Overview", desc: "Net worth & token allocations", href: "#portfolio" },
        { name: "Bridge & Swap", desc: "Cross-chain liquidity routing", href: "#bridge" },
        { name: "Staking Vaults", desc: "Earn up to 14.5% APY", href: "#staking" },
      ],
    },
    {
      label: "Trade",
      icon: <RiExchangeLine className="w-4 h-4" />,
      subtabs: [
        { name: "Spot Markets", desc: "High-speed decentralized order book", href: "#spot" },
        { name: "Derivatives", desc: "Perpetual futures with leverage", href: "#derivatives" },
        { name: "Liquidity Pools", desc: "Provide liquidity & earn fees", href: "#pools" },
      ],
    },
    {
      label: "Analytics",
      icon: <RiBarChartBoxLine className="w-4 h-4" />,
      subtabs: [
        { name: "Gas Tracker", desc: "Live network fee estimations", href: "#gas" },
        { name: "TVL Metrics", desc: "Total value locked across chains", href: "#tvl" },
        { name: "Smart Audits", desc: "Verified contract security scores", href: "#audits" },
      ],
    },
    {
      label: "Profile",
      icon: <RiUserLine className="w-4 h-4" />,
      subtabs: [
        { name: "Decentralized ID", desc: "ENS & Web3 credentials", href: "#did" },
        { name: "Security & Keys", desc: "Hardware wallet & 2FA settings", href: "#security" },
        { name: "Governance DAO", desc: "Active voting proposals", href: "#dao" },
      ],
    },
  ],
};

// 2. Main Crypto Navbar Component
export default function CryptoNavbar() {
  const [activeHoverTab, setActiveHoverTab] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.header 
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 bg-[#04060b]/90 backdrop-blur-2xl border-b border-cyan-500/20 font-sansation text-white select-none"
    >
      {/* ================================= TOP HEADER (Centered Brand Only) ================================= */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between border-b border-white/[0.05]">
        
        {/* Left Status Indicator */}
        <div className="hidden md:flex items-center space-x-2 text-[11px] font-mono text-cyan-400 bg-cyan-950/30 px-3 py-1 rounded-full border border-cyan-500/20">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>{cryptoNavData.brand.network}</span>
        </div>

        {/* Center Brand Name / Logo */}
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center space-x-2.5 cursor-pointer group">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-emerald-400 p-[1px] shadow-[0_0_20px_rgba(56,189,248,0.3)] group-hover:rotate-12 transition-transform duration-500">
            <div className="w-full h-full bg-[#04060b] rounded-[11px] flex items-center justify-center">
              <SiHivemq className="w-4 h-4 text-cyan-400" />
            </div>
          </div>
          <span className="font-bricolage font-bold text-lg tracking-[0.25em] text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-cyan-400">
            {cryptoNavData.brand.name}
          </span>
        </div>

        {/* Right Connect Wallet CTA */}
        <div className="ml-auto flex items-center space-x-3">
          <div className="hidden lg:flex items-center space-x-2 text-xs font-mono text-slate-400">
            <RiGasStationLine className="text-cyan-400" />
            <span>12 Gwei</span>
          </div>

          <motion.button
            whileHover={{ scale: 1.03, boxShadow: "0 0 25px rgba(56,189,248,0.4)" }}
            whileTap={{ scale: 0.96 }}
            className="px-5 py-2 rounded-xl text-xs font-bold font-bricolage uppercase tracking-wider text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 shadow-lg shadow-cyan-500/20 cursor-pointer"
          >
            Connect Wallet
          </motion.button>

          {/* Mobile Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-slate-900 border border-cyan-500/30 text-cyan-400 focus:outline-none"
          >
            <div className="w-5 h-5 flex flex-col justify-around">
              <span className={`w-full h-0.5 bg-cyan-400 transition-transform ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`w-full h-0.5 bg-cyan-400 transition-opacity ${mobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`w-full h-0.5 bg-cyan-400 transition-transform ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* ================================= BOTTOM HEADER (Calm Tab Row with Subtabs) ================================= */}
      <div className="hidden md:flex justify-center items-center py-2.5 relative">
        <nav 
          className="flex items-center space-x-2 bg-[#080c18]/80 backdrop-blur-xl px-3 py-1.5 rounded-full border border-white/[0.08] shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
          onMouseLeave={() => setActiveHoverTab(null)}
        >
          {cryptoNavData.tabs.map((tab, idx) => (
            <div 
              key={idx} 
              className="relative"
              onMouseEnter={() => setActiveHoverTab(idx)}
            >
              <button className="px-5 py-2 text-xs font-bricolage font-medium uppercase tracking-widest text-slate-300 hover:text-white hover:bg-white/[0.06] rounded-full transition-all flex items-center space-x-2 group cursor-pointer">
                <span className="text-cyan-400 group-hover:scale-110 transition-transform">{tab.icon}</span>
                <span>{tab.label}</span>
                <RiArrowDownSLine className={`w-3.5 h-3.5 text-slate-500 transition-transform duration-300 ${activeHoverTab === idx ? 'rotate-180 text-cyan-400' : ''}`} />
              </button>

              {/* Subtabs Popover / Dropdown Card */}
              <AnimatePresence>
                {activeHoverTab === idx && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 5, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-72 bg-[#090e1a]/95 backdrop-blur-2xl border border-cyan-500/30 rounded-2xl shadow-2xl p-3 z-50"
                  >
                    <div className="space-y-1.5">
                      {tab.subtabs.map((sub, sIdx) => (
                        <a
                          key={sIdx}
                          href={sub.href}
                          onClick={() => setActiveHoverTab(null)}
                          className="block p-3 rounded-xl bg-transparent hover:bg-cyan-500/10 border border-transparent hover:border-cyan-500/30 transition-all group"
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-bricolage font-semibold text-xs text-slate-200 group-hover:text-cyan-300">
                              {sub.name}
                            </span>
                            <span className="text-[10px] font-mono text-cyan-500/60 group-hover:translate-x-0.5 transition-transform">→</span>
                          </div>
                          <p className="text-[10px] text-slate-400 font-sans mt-0.5">
                            {sub.desc}
                          </p>
                        </a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>
      </div>

      {/* ================================= MOBILE MENU SLIDE-OVER ================================= */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#060a16] border-b border-cyan-500/20 px-6 py-6 space-y-6 overflow-y-auto max-h-[80vh]"
          >
            <div className="flex items-center justify-between text-xs font-mono text-cyan-400 border-b border-white/10 pb-3">
              <span>ACTIVE NETWORK: MAINNET</span>
              <span>12 GWEI</span>
            </div>

            <div className="space-y-4">
              {cryptoNavData.tabs.map((tab, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex items-center space-x-2 text-cyan-400 font-bricolage text-sm font-bold uppercase tracking-wider pt-2">
                    {tab.icon}
                    <span>{tab.label}</span>
                  </div>
                  <div className="pl-6 space-y-2 border-l border-cyan-500/20 ml-2">
                    {tab.subtabs.map((sub, sIdx) => (
                      <a
                        key={sIdx}
                        href={sub.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-1.5 text-xs text-slate-300 hover:text-cyan-400 transition-colors"
                      >
                        <span className="font-semibold text-white">{sub.name}</span> — <span className="text-slate-500">{sub.desc}</span>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-white/10">
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 rounded-xl font-bold font-bricolage text-xs uppercase tracking-wider text-slate-950 bg-gradient-to-r from-cyan-400 to-emerald-400 text-center shadow-lg"
              >
                Connect Wallet
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}