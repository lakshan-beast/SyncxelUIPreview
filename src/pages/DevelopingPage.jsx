import React from 'react';
import { Link } from 'react-router-dom';

export default function DevelopingPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-mono flex flex-col items-center justify-center p-6 text-center">
      <div className="flex items-center gap-2 mb-4 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full">
        <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping" />
        <span className="text-xs text-amber-400 font-semibold">// Crafting Sandbox & Components</span>
      </div>
      
      <h1 className="text-2xl sm:text-3xl font-bold mb-2">Module Under Active Development</h1>
      <p className="text-sm text-slate-400 max-w-md mb-8">
        This preview module is currently being wired up or compiled in our build pipeline. Check back soon for live interactive sandboxes!
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