import React, { useState } from "react";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    fullName: "",
    alias: "",
    twoFactor: "passkey",
    workspace: "",
    tier: "sovereign",
  });
  const [error, setError] = useState("");
  const [successToken, setSuccessToken] = useState("");

  const handleNext = () => {
    setError("");
    if (currentStep === 1) {
      if (!formData.email || !formData.password) {
        setError("Please provide valid access credentials.");
        return;
      }
      if (formData.password.length < 8) {
        setError("Master password must be at least 8 characters.");
        return;
      }
    } else if (currentStep === 2) {
      if (!formData.fullName || !formData.alias) {
        setError("Operator identity profile is required.");
        return;
      }
    } else if (currentStep === 3) {
      if (!formData.workspace) {
        setError("Workspace designation identifier required.");
        return;
      }
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (currentStep === 3) {
        setSuccessToken(
          "AUTH_SECURE_" +
            Math.random().toString(36).substring(2, 10).toUpperCase() +
            "_X9",
        );
      }
      setCurrentStep((prev) => Math.min(prev + 1, 4));
    }, 700);
  };

  const handlePrev = () => {
    setError("");
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 flex flex-col items-center justify-center relative overflow-hidden font-sans selection:bg-amber-500 selection:text-black">
      {/* Ambient background glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none animate-pulse delay-1000"></div>

      {/* Hero Landing Section */}
      <div className="z-10 text-center px-4 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs tracking-widest uppercase mb-6 backdrop-blur-md shadow-[0_0_20px_rgba(251,191,36,0.15)]">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
          Echelon Security Protocol v4.2
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-amber-200 bg-clip-text text-transparent mb-6 leading-tight">
          Sovereign Authentication Experience
        </h1>
        <p className="text-slate-400 text-base sm:text-lg mb-10 leading-relaxed font-light">
          Enter the elite multi-step registration gateway with military-grade
          encryption simulation, bespoke tier architecture, and biometric
          verification.
        </p>
        <button
          onClick={() => {
            setIsOpen(true);
            setCurrentStep(1);
          }}
          className="group relative px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 text-black font-semibold text-sm tracking-wider uppercase shadow-[0_0_30px_rgba(251,191,36,0.3)] hover:shadow-[0_0_50px_rgba(251,191,36,0.5)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0">
          <span className="relative z-10 flex items-center gap-3">
            Access Portal
            <svg
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </span>
        </button>
      </div>

      {/* Modal / Drawer Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-2xl transition-all duration-500 animate-fade-in">
          {/* Modal Container */}
          <div className="relative w-full max-w-5xl bg-[#080c14] border border-amber-500/20 rounded-3xl shadow-[0_0_60px_rgba(0,0,0,0.9)] overflow-hidden grid grid-cols-1 lg:grid-cols-12 backdrop-blur-3xl">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all duration-200">
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {}
            <div className="lg:col-span-4 bg-gradient-to-b from-[#0c1220] to-[#050810] p-6 sm:p-8 border-b lg:border-b-0 lg:border-r border-white/[0.06] flex flex-col justify-between relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl pointer-events-none"></div>

              <div>
                <div className="flex items-center gap-2 text-xs tracking-widest text-amber-400 uppercase font-mono mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                  Project Setup Protocol
                </div>
                <h2 className="text-xl font-bold tracking-tight text-white mb-8">
                  Identity Initialization
                </h2>

                {/* Step Nodes */}
                <div className="space-y-6 relative">
                  {/* Background connecting line */}
                  <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-white/10 z-0"></div>
                  {/* Active progress glowing line */}
                  <div
                    className="absolute left-4 top-4 w-0.5 bg-gradient-to-b from-amber-400 to-cyan-400 transition-all duration-500 z-0"
                    style={{
                      height: `${((currentStep - 1) / 3) * 100}%`,
                    }}></div>

                  {[
                    {
                      num: 1,
                      title: "Credentials & Access",
                      desc: "Email & master password",
                    },
                    {
                      num: 2,
                      title: "Security & Profile",
                      desc: "Alias, full name & 2FA",
                    },
                    {
                      num: 3,
                      title: "Workspace & Tier",
                      desc: "Architecture & tier config",
                    },
                    {
                      num: 4,
                      title: "Verification",
                      desc: "Cryptographic confirmation",
                    },
                  ].map((step) => {
                    const isActive = currentStep === step.num;
                    const isCompleted = currentStep > step.num;
                    return (
                      <div
                        key={step.num}
                        className="relative z-10 flex items-start gap-4 group">
                        <div
                          className={`w-8 h-8 rounded-xl flex items-center justify-center font-mono text-xs font-bold transition-all duration-300 ${
                            isActive
                              ? "bg-amber-500 text-black shadow-[0_0_15px_rgba(251,191,36,0.6)] scale-110"
                              : isCompleted
                                ? "bg-cyan-500 text-black shadow-[0_0_10px_rgba(34,211,238,0.4)]"
                                : "bg-white/5 border border-white/10 text-slate-400"
                          }`}>
                          {isCompleted ? "✓" : step.num}
                        </div>
                        <div>
                          <div
                            className={`text-sm font-semibold transition-colors ${isActive ? "text-amber-300" : isCompleted ? "text-white" : "text-slate-400"}`}>
                            {step.title}
                          </div>
                          <div className="text-xs text-slate-500 mt-0.5">
                            {step.desc}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/5">
                <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                  <span>SECURE_SESSION</span>
                  <span className="text-amber-400 animate-pulse">
                    ENCRYPTED
                  </span>
                </div>
              </div>
            </div>

            {}
            <div className="lg:col-span-8 p-6 sm:p-10 flex flex-col justify-between bg-[#080c14]/50">
              <div>
                {/* Step Header */}
                <div className="mb-8">
                  <span className="text-xs font-mono uppercase tracking-widest text-amber-400/80">
                    Stage 0{currentStep} / 04
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                    {currentStep === 1 && "Establish Account Identity"}
                    {currentStep === 2 && "Security & Profile Verification"}
                    {currentStep === 3 && "Workspace Architecture & Tier"}
                    {currentStep === 4 && "Initialization Complete"}
                  </h3>
                  <p className="text-sm text-slate-400 mt-1">
                    {currentStep === 1 &&
                      "Provide your core credentials or authenticate via sovereign social nodes."}
                    {currentStep === 2 &&
                      "Configure your profile alias and high-grade 2FA preferences."}
                    {currentStep === 3 &&
                      "Select your organization tier and resource allocation model."}
                    {currentStep === 4 &&
                      "Your cryptographic access key has been successfully generated."}
                  </p>
                </div>

                {/* Error Banner */}
                {error && (
                  <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs flex items-center gap-3 animate-shake">
                    <svg
                      className="w-4 h-4 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                      />
                    </svg>
                    {error}
                  </div>
                )}

                {}
                {currentStep === 1 && (
                  <div className="space-y-5 animate-fade-in">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-slate-400 font-mono mb-2">
                        Secure Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="operator@echelon.io"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-slate-400 font-mono mb-2">
                        Master Password (Min. 8 chars)
                      </label>
                      <input
                        type="password"
                        placeholder="••••••••••••••••"
                        value={formData.password}
                        onChange={(e) =>
                          setFormData({ ...formData, password: e.target.value })
                        }
                        className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all text-sm"
                      />
                    </div>

                    {/* Social Logins */}
                    <div className="pt-2">
                      <div className="relative flex py-2 items-center">
                        <div className="flex-grow border-t border-white/10"></div>
                        <span className="flex-shrink mx-4 text-slate-500 text-xs font-mono uppercase">
                          Or Authenticate With
                        </span>
                        <div className="flex-grow border-t border-white/10"></div>
                      </div>

                      <div className="grid grid-cols-3 gap-3 mt-4">
                        {[
                          { name: "Google", icon: "G" },
                          { name: "GitHub", icon: "GH" },
                          { name: "Apple", icon: "" },
                        ].map((soc) => (
                          <button
                            key={soc.name}
                            type="button"
                            onClick={() => {
                              setFormData({
                                ...formData,
                                email: `user_${soc.name.toLowerCase()}@echelon.auth`,
                              });
                              handleNext();
                            }}
                            className="flex items-center justify-center gap-2 py-3 rounded-xl bg-white/[0.02] border border-white/10 hover:border-amber-500/40 hover:bg-white/[0.06] text-slate-300 hover:text-white transition-all text-xs font-semibold group">
                            <span className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-[10px] font-mono group-hover:bg-amber-500 group-hover:text-black transition-colors">
                              {soc.icon}
                            </span>
                            {soc.name}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {}
                {currentStep === 2 && (
                  <div className="space-y-5 animate-fade-in">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-slate-400 font-mono mb-2">
                          Full Legal Name
                        </label>
                        <input
                          type="text"
                          placeholder="Alexandria Vance"
                          value={formData.fullName}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              fullName: e.target.value,
                            })
                          }
                          className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-amber-500 transition-all text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-slate-400 font-mono mb-2">
                          Operator Alias / Handle
                        </label>
                        <input
                          type="text"
                          placeholder="@vance_prime"
                          value={formData.alias}
                          onChange={(e) =>
                            setFormData({ ...formData, alias: e.target.value })
                          }
                          className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-amber-500 transition-all text-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-slate-400 font-mono mb-2">
                        2FA Authentication Protocol
                      </label>
                      <div className="grid grid-cols-3 gap-3">
                        {[
                          {
                            id: "passkey",
                            label: "Hardware Passkey",
                            desc: "YubiKey / TPM",
                          },
                          {
                            id: "totp",
                            label: "Authenticator App",
                            desc: "TOTP 6-Digit",
                          },
                          {
                            id: "bio",
                            label: "Biometric Scan",
                            desc: "Face / Touch ID",
                          },
                        ].map((opt) => (
                          <button
                            key={opt.id}
                            type="button"
                            onClick={() =>
                              setFormData({ ...formData, twoFactor: opt.id })
                            }
                            className={`p-3 rounded-xl border text-left transition-all ${
                              formData.twoFactor === opt.id
                                ? "bg-amber-500/10 border-amber-500 text-white shadow-[0_0_15px_rgba(251,191,36,0.2)]"
                                : "bg-white/[0.02] border-white/10 text-slate-400 hover:border-white/20"
                            }`}>
                            <div className="text-xs font-bold text-amber-300">
                              {opt.label}
                            </div>
                            <div className="text-[10px] text-slate-500 mt-1">
                              {opt.desc}
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {}
                {currentStep === 3 && (
                  <div className="space-y-5 animate-fade-in">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-slate-400 font-mono mb-2">
                        Workspace Designation
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Syndicate Core Node"
                        value={formData.workspace}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            workspace: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-amber-500 transition-all text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-slate-400 font-mono mb-2">
                        Architecture Tier
                      </label>
                      <div className="grid grid-cols-3 gap-3">
                        {[
                          {
                            id: "obsidian",
                            name: "Obsidian",
                            limit: "10 Nodes",
                          },
                          {
                            id: "sovereign",
                            name: "Sovereign",
                            limit: "Unlimited",
                          },
                          {
                            id: "apex",
                            name: "Apex Elite",
                            limit: "Custom Mesh",
                          },
                        ].map((tier) => (
                          <button
                            key={tier.id}
                            type="button"
                            onClick={() =>
                              setFormData({ ...formData, tier: tier.id })
                            }
                            className={`p-4 rounded-xl border text-left transition-all relative overflow-hidden ${
                              formData.tier === tier.id
                                ? "bg-amber-500/10 border-amber-500 text-white shadow-[0_0_20px_rgba(251,191,36,0.25)]"
                                : "bg-white/[0.02] border-white/10 text-slate-400 hover:border-white/20"
                            }`}>
                            <div className="text-xs font-bold text-white">
                              {tier.name}
                            </div>
                            <div className="text-[11px] text-amber-400/90 font-mono mt-1">
                              {tier.limit}
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {}
                {currentStep === 4 && (
                  <div className="space-y-6 text-center py-6 animate-fade-in">
                    <div className="w-16 h-16 mx-auto rounded-full bg-amber-500/20 border border-amber-500 flex items-center justify-center text-amber-400 shadow-[0_0_30px_rgba(251,191,36,0.4)] animate-bounce">
                      ✓
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white">
                        Cryptographic Access Generated
                      </h4>
                      <p className="text-xs text-slate-400 mt-1">
                        Your sovereign node is fully provisioned and
                        synchronized.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-black/60 border border-white/10 font-mono text-xs text-amber-300 tracking-wider break-all select-all">
                      {successToken}
                    </div>
                  </div>
                )}
              </div>

              {}
              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                {currentStep > 1 && currentStep < 4 ? (
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-all text-xs font-semibold uppercase tracking-wider">
                    Back
                  </button>
                ) : (
                  <div></div>
                )}

                {currentStep < 4 ? (
                  <button
                    type="button"
                    disabled={loading}
                    onClick={handleNext}
                    className="px-8 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-black font-semibold text-xs tracking-wider uppercase shadow-[0_0_20px_rgba(251,191,36,0.3)] hover:shadow-[0_0_30px_rgba(251,191,36,0.5)] transition-all flex items-center gap-2 disabled:opacity-50">
                    {loading ? (
                      <>
                        <span className="w-3 h-3 rounded-full border-2 border-black border-t-transparent animate-spin"></span>
                        Verifying...
                      </>
                    ) : (
                      <>
                        Continue
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </>
                    )}
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-black font-semibold text-xs tracking-wider uppercase shadow-[0_0_30px_rgba(251,191,36,0.4)] hover:shadow-[0_0_50px_rgba(251,191,36,0.6)] transition-all">
                    Enter Ecosystem
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
