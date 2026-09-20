import ComponentPreviewSandbox from "../components/ConponentsPreviewSandbox";
import PremiumFooterOne from "../library/FootersDesigns/Footer01";

export default function FootersPreviewPage() {
  
  // Main Site එකට හරියටම රීඩිරෙක්ට් වෙන Back Function එක
  const handleBackToMain = () => {
    window.location.href = "https://syncxel.vercel.app";
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans pb-24">
      
      {/* GLOBAL TOP PREVIEW NAVIGATION */}
      <div className="w-full bg-white border-b border-neutral-200 h-14 px-6 flex justify-between items-center z-50 sticky top-0 shadow-xs select-none">
        <button 
          onClick={handleBackToMain}
          className="font-mono text-[10px] text-neutral-500 hover:text-black border border-neutral-200 px-3 py-1.5 rounded bg-neutral-50 transition-colors"
        >
          {"// back_to_syncxel"}
        </button>
        <span className="font-mono text-[10px] text-neutral-400 hidden sm:inline-block">
          {"[ENVIRONMENT: SECURED_SANDBOX]"}
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-10">
        {/* Page Titles */}
        <div className="mb-10 space-y-1 select-none border-l-2 border-black pl-4">
          <h1 className="text-2xl font-bold tracking-tight text-black">Premium Footers Pack</h1>
          <p className="text-xs font-mono text-neutral-400">{"// bundle_id: f00t3r_p4ck_x92"}</p>
        </div>

        {/* 🛠️ FOOTER 01 LIVE PREVIEW */}
        <ComponentPreviewSandbox title="footer_01_syntax_light">
          <PremiumFooterOne />
        </ComponentPreviewSandbox>

        {/* 🛠️ FOOTER 02 LIVE PREVIEW (ඉදිරියට හදන ඒවා මෙතනට පල්ලෙහාට Import කරපන්) */}
        <ComponentPreviewSandbox title="footer_02_tactile_3d">
          <div className="p-12 text-center font-mono text-xs text-neutral-400 bg-white">
            {"// footer_02_under_construction"}
          </div>
        </ComponentPreviewSandbox>
      </div>

    </div>
  );
}