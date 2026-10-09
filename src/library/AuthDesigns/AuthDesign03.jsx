import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaShieldAlt,
  FaKey,
  FaRedo,
  FaCheckCircle,
  FaTimes,
  FaFingerprint,
  FaMobileAlt,
  FaLock,
  FaCoins,
} from "react-icons/fa";

export default function ObsidianVaultOTP({ isOpen = true, onClose }) {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [status, setStatus] = useState("idle"); // 'idle' | 'shake' | 'success'
  const [timer, setTimer] = useState(59);
  const [channel, setChannel] = useState("hardware"); // 'hardware' | 'sms' | 'biometric'
  const inputRefs = useRef([]);

  // Correct verification code for testing (e.g., 777777)
  const CORRECT_OTP = "777777";

  useEffect(() => {
    let interval;
    if (timer > 0) {
      interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
    }
    return () => clearInterval(interval);
  }, [timer]);

  const handleChange = (value, index) => {
    if (isNaN(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }

    if (newOtp.every((digit) => digit !== "")) {
      verifyVaultKey(newOtp.join(""));
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const verifyVaultKey = (code) => {
    if (code === CORRECT_OTP) {
      setStatus("success");
      setTimeout(() => {
        if (onClose) onClose();
      }, 2200);
    } else {
      setStatus("shake");
      setTimeout(() => {
        setStatus("idle");
        setOtp(["", "", "", "", "", ""]);
        inputRefs.current[0]?.focus();
      }, 600);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-2xl p-4 overflow-hidden">
      {/* Background Luxury Gold Particles / Lines */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.04)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 20 }}
        className="relative w-full max-w-md bg-[#09090b] border border-amber-500/20 rounded-3xl p-6 sm:p-8 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.9)]">
        {/* Top Gold Accent Border Line */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-500 to-transparent" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-20 p-2.5 rounded-full bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 transition cursor-pointer">
          <FaTimes className="w-4 h-4" />
        </button>

        {/* Header Vault HUD */}
        <div className="flex items-center space-x-2 mb-6">
          <div className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse shadow-[0_0_10px_rgba(251,191,36,0.8)]" />
          <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400/80">
            Obsidian Vault // Secure Cryptographic Gate
          </span>
        </div>

        {/* Title */}
        <div className="mb-6 text-center sm:text-left">
          <h2 className="text-xl sm:text-2xl font-serif text-white tracking-tight flex items-center gap-2">
            Vault Authorization <FaCoins className="w-4 h-4 text-amber-400" />
          </h2>
          <p className="text-xs font-mono text-zinc-400 mt-1">
            Authorize transaction with your 6-digit hardware key token.
          </p>
        </div>

        {/* OTP Input Boxes with Shake / Scale Animation */}
        <motion.div
          animate={status === "shake" ? { x: [-10, 10, -10, 10, 0] } : { x: 0 }}
          transition={{ duration: 0.4 }}
          className="flex justify-between gap-2 mb-6">
          {otp.map((digit, index) => {
            const isFilled = digit !== "";
            let borderStyle = "border-zinc-800 bg-zinc-900/60 text-white";

            if (status === "success") {
              borderStyle =
                "border-amber-400 bg-amber-400/10 text-amber-300 shadow-[0_0_25px_rgba(251,191,36,0.3)] scale-105";
            } else if (status === "shake") {
              borderStyle =
                "border-rose-500 bg-rose-500/10 text-rose-500 shadow-[0_0_25px_rgba(244,63,94,0.3)]";
            } else if (isFilled) {
              borderStyle = "border-amber-500/50 bg-amber-500/5 text-amber-300";
            }

            return (
              <input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(e.target.value, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className={`w-11 h-14 sm:w-12 sm:h-16 text-center text-xl font-mono font-bold rounded-2xl border-2 transition-all duration-300 focus:outline-none ${borderStyle}`}
              />
            );
          })}
        </motion.div>

        {/* Feedback Messages */}
        <div className="h-6 mb-4 text-center">
          {status === "shake" && (
            <span className="text-xs font-mono text-rose-500 animate-pulse">
              ✖ Cryptographic mismatch. (Hint: 777777)
            </span>
          )}
          {status === "success" && (
            <span className="text-xs font-mono text-amber-400 animate-bounce">
              ✔ Key verified. Vault unlocked successfully.
            </span>
          )}
        </div>

        {/* Resend Timer */}
        <div className="flex items-center justify-between text-xs font-mono mb-6 pb-6 border-b border-zinc-900">
          <span className="text-zinc-500">
            {timer > 0
              ? `New token in 00:${timer < 10 ? `0${timer}` : timer}`
              : "Token expired."}
          </span>
          <button
            disabled={timer > 0}
            onClick={() => setTimer(59)}
            className={`flex items-center space-x-1.5 transition cursor-pointer ${timer > 0 ? "text-zinc-600 cursor-not-allowed" : "text-amber-400 hover:text-amber-300"}`}>
            <FaRedo className="w-3 h-3" />
            <span>Regenerate Token</span>
          </button>
        </div>

        {/* Try Another Way Section */}
        <div className="space-y-3">
          <span className="text-[10px] uppercase font-mono text-zinc-500 tracking-wider">
            Alternate Security Vectors
          </span>
          <div className="grid grid-cols-3 gap-2">
            <button
              onClick={() => setChannel("hardware")}
              className={`flex flex-col items-center justify-center p-3 rounded-xl border text-xs font-mono transition cursor-pointer ${channel === "hardware" ? "border-amber-400 bg-amber-400/10 text-amber-400" : "border-zinc-800 bg-zinc-900/40 text-zinc-400 hover:border-zinc-700"}`}>
              <FaKey className="w-4 h-4 mb-1.5" />
              <span>YubiKey</span>
            </button>
            <button
              onClick={() => setChannel("sms")}
              className={`flex flex-col items-center justify-center p-3 rounded-xl border text-xs font-mono transition cursor-pointer ${channel === "sms" ? "border-amber-400 bg-amber-400/10 text-amber-400" : "border-zinc-800 bg-zinc-900/40 text-zinc-400 hover:border-zinc-700"}`}>
              <FaMobileAlt className="w-4 h-4 mb-1.5" />
              <span>Secure SMS</span>
            </button>
            <button
              onClick={() => setChannel("biometric")}
              className={`flex flex-col items-center justify-center p-3 rounded-xl border text-xs font-mono transition cursor-pointer ${channel === "biometric" ? "border-amber-400 bg-amber-400/10 text-amber-400" : "border-zinc-800 bg-zinc-900/40 text-zinc-400 hover:border-zinc-700"}`}>
              <FaFingerprint className="w-4 h-4 mb-1.5" />
              <span>FaceID</span>
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
