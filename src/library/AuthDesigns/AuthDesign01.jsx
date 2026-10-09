import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaTimes,
  FaArrowRight,
  FaCheck,
  FaApple,
  FaGoogle,
  FaKey,
  FaEnvelope,
  FaLock,
  FaFingerprint,
} from "react-icons/fa";

export default function MinimalZenAuth({ isOpen = true, onClose }) {
  const [tab, setTab] = useState("signin"); // 'signin' | 'register'
  const [authMethod, setAuthMethod] = useState("password"); // 'password' | 'magic' | 'passkey'
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      if (onClose) onClose();
    }, 2200);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 overflow-y-auto">
      {/* Subtle Ambient Background Glow */}
      <div className="absolute w-[400px] h-[400px] bg-white/[0.02] rounded-full blur-[100px] pointer-events-none" />

      {/* Main Zen Monolith Card */}
      <motion.div
        initial={{ scale: 0.96, opacity: 0, y: 10 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.96, opacity: 0, y: 10 }}
        className="relative w-full max-w-md bg-[#141416] border border-white/10 rounded-3xl p-8 sm:p-10 shadow-[0_25px_60px_rgba(0,0,0,0.8)] overflow-y-auto max-h-[92vh]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-20 p-2 rounded-full text-zinc-500 hover:text-white hover:bg-white/5 transition cursor-pointer">
          <FaTimes className="w-4 h-4" />
        </button>

        {/* Brand Slug */}
        <div className="flex items-center space-x-2 mb-8">
          <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-zinc-400">
            Zenith // Secure Identity
          </span>
        </div>

        {!isSubmitted ? (
          <div>
            {/* Pill Tab Switcher */}
            <div className="relative flex p-1 bg-zinc-900/90 rounded-full border border-white/5 mb-8">
              <button
                type="button"
                onClick={() => setTab("signin")}
                className={`relative flex-1 py-2.5 text-xs font-mono transition-colors z-10 cursor-pointer ${tab === "signin" ? "text-black font-semibold" : "text-zinc-400 hover:text-zinc-200"}`}>
                Sign In
              </button>
              <button
                type="button"
                onClick={() => setTab("register")}
                className={`relative flex-1 py-2.5 text-xs font-mono transition-colors z-10 cursor-pointer ${tab === "register" ? "text-black font-semibold" : "text-zinc-400 hover:text-zinc-200"}`}>
                Create Account
              </button>

              {/* Sliding Pill Background */}
              <motion.div
                layout
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="absolute top-1 bottom-1 w-[calc(50%-4px)] bg-white rounded-full shadow-sm"
                style={{ left: tab === "signin" ? "4px" : "calc(50% + 2px)" }}
              />
            </div>

            {/* Auth Method Toggle Bar */}
            <div className="grid grid-cols-3 gap-2 mb-6">
              <button
                type="button"
                onClick={() => setAuthMethod("password")}
                className={`py-2 text-[11px] font-mono rounded-xl border transition cursor-pointer ${authMethod === "password" ? "border-white/20 bg-white/5 text-white" : "border-transparent text-zinc-500 hover:text-zinc-300"}`}>
                Password
              </button>
              <button
                type="button"
                onClick={() => setAuthMethod("magic")}
                className={`py-2 text-[11px] font-mono rounded-xl border transition cursor-pointer ${authMethod === "magic" ? "border-white/20 bg-white/5 text-white" : "border-transparent text-zinc-500 hover:text-zinc-300"}`}>
                Magic Link
              </button>
              <button
                type="button"
                onClick={() => setAuthMethod("passkey")}
                className={`py-2 text-[11px] font-mono rounded-xl border transition cursor-pointer ${authMethod === "passkey" ? "border-white/20 bg-white/5 text-white" : "border-transparent text-zinc-500 hover:text-zinc-300"}`}>
                Passkey
              </button>
            </div>

            {/* Form Fields */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-3">
                <div className="relative">
                  <FaEnvelope className="absolute left-4 top-3.5 w-4 h-4 text-zinc-500" />
                  <input
                    type="email"
                    required
                    placeholder="name@domain.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-zinc-900/60 border border-white/10 rounded-2xl px-12 py-3.5 text-white text-xs font-mono placeholder-zinc-600 focus:outline-none focus:border-white/40 transition"
                  />
                </div>

                {authMethod === "password" && (
                  <div className="relative">
                    <FaLock className="absolute left-4 top-3.5 w-4 h-4 text-zinc-500" />
                    <input
                      type="password"
                      required
                      placeholder="••••••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full bg-zinc-900/60 border border-white/10 rounded-2xl px-12 py-3.5 text-white text-xs font-mono placeholder-zinc-600 focus:outline-none focus:border-white/40 transition"
                    />
                  </div>
                )}
              </div>

              {/* Action Button */}
              <button
                type="submit"
                className="w-full py-4 rounded-2xl bg-white text-black font-semibold text-xs flex items-center justify-center space-x-2 hover:bg-zinc-200 transition cursor-pointer shadow-lg shadow-white/5 mt-2">
                <span>
                  {tab === "signin"
                    ? "Authenticate Session"
                    : "Initialize Account"}
                </span>
                <FaArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>

            {/* Divider */}
            <div className="relative my-6 text-center">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/5" />
              </div>
              <span className="relative px-3 bg-[#141416] text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                or continue with
              </span>
            </div>

            {/* Modern Social & Passkey Buttons */}
            <div className="grid grid-cols-3 gap-2.5">
              <button
                type="button"
                className="py-3 bg-zinc-900/60 hover:bg-zinc-900 border border-white/5 rounded-2xl text-xs text-zinc-300 flex items-center justify-center space-x-2 cursor-pointer transition">
                <FaApple className="w-4 h-4 text-white" />
              </button>
              <button
                type="button"
                className="py-3 bg-zinc-900/60 hover:bg-zinc-900 border border-white/5 rounded-2xl text-xs text-zinc-300 flex items-center justify-center space-x-2 cursor-pointer transition">
                <FaGoogle className="w-4 h-4 text-white" />
              </button>
              <button
                type="button"
                className="py-3 bg-zinc-900/60 hover:bg-zinc-900 border border-white/5 rounded-2xl text-xs text-zinc-300 flex items-center justify-center space-x-2 cursor-pointer transition">
                <FaFingerprint className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>
        ) : (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="py-12 text-center space-y-3">
            <div className="w-14 h-14 bg-white/10 border border-white/20 text-white rounded-full flex items-center justify-center mx-auto shadow-sm">
              <FaCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white tracking-wider">
              SECURE SESSION ESTABLISHED
            </h3>
            <p className="text-[11px] font-mono text-zinc-500">
              Redirecting to encrypted workspace...
            </p>
          </motion.div>
        )}

        {/* Footer Note */}
        <div className="text-[10px] font-mono text-zinc-600 text-center pt-8">
          Quiet Luxury Security Protocol v4.2
        </div>
      </motion.div>
    </div>
  );
}
