import React from 'react';
import { Link } from 'react-router-dom';

export default function DevelopingPage() {
  return (
    <div className="min-h-screen text-slate-950 bg-white font-mono flex flex-col items-center justify-center p-6 text-center">
      <div className="flex items-center gap-2 mb-4 bg-slate-500/10 border border-slate-500/20 px-3 py-1 rounded-full">
        <span className="w-2 h-2 rounded-full bg-slate-500 animate-ping" />
        <span className="text-xs text-slate-400 font-semibold font-mono">// Crafting Sandbox & Components</span>
      </div>
      
      <h1 className="text-2xl sm:text-3xl font-bold mb-2 font-exo">Module Under Active Development</h1>
      <p className="text-sm text-slate-400 max-w-md mb-8 leading-tight font-baloo">
        This preview module is currently being wired up or compiled in our build pipeline. Check back soon for live interactive sandboxes!
      </p>

      <div className="flex flex-wrap items-center justify-center gap-4 font-baloo">
        <Link
          to="/footers"
          className="px-5 py-2.5 bg-slate-600 hover:bg-slate-500 text-white text-xs font-bold rounded-xl transition-colors">
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