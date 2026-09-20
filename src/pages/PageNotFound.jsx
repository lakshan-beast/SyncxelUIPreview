// export default function PageNotFound() {
//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center font-mono text-xs text-neutral-400 bg-white space-y-2 select-none">
//       <span>{"[ERROR: 404] RESOURCE_COMPILATION_FAILED"}</span>
//       <span className="text-neutral-300">{"// unauthorized_access_blocked"}</span>
//     </div>
//   );
// }

export default function PageNotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center font-mono bg-slate-50 p-4 select-none">
      <div className="bg-white border border-slate-200 px-8 py-8 rounded-3xl shadow-sm flex flex-col items-center text-center space-y-3 max-w-sm w-full">
        {/* Error Code Pill */}
        <span className="text-[10px] font-bold text-slate-900 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
          {"[ERROR: 404]"}
        </span>

        {/* Main Error Text */}
        <h1 className="text-xs sm:text-sm font-bold text-slate-900 tracking-tight pt-1">
          RESOURCE_COMPILATION_FAILED
        </h1>

        <p className="text-xs text-slate-500 pb-2">
          {"// unauthorized_access_blocked"}
        </p>

        {/* Back Button */}
        <div className="pt-2 border-t border-slate-100 w-full flex justify-center">
          <a
            href="/"
            className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-mono font-bold transition-all shadow-sm cursor-pointer">
            {"// return_to_dashboard"}
          </a>
        </div>
      </div>
    </div>
  );
}
