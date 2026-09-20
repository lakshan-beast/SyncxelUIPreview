export default function PageNotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center font-mono text-xs text-neutral-400 bg-white space-y-2 select-none">
      <span>{"[ERROR: 404] RESOURCE_COMPILATION_FAILED"}</span>
      <span className="text-neutral-300">{"// unauthorized_access_blocked"}</span>
    </div>
  );
}