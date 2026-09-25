export default function Loading() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center">
      <div className="relative w-12 h-12 flex items-center justify-center">
        <div className="w-12 h-12 rounded-full border-2 border-[#EFEDFF] border-t-[#5B4CFB] animate-spin" />
        <div className="absolute w-4 h-4 rounded-full bg-gradient-to-tr from-[#5B4CFB] to-[#EC4899]" />
      </div>
      <p className="mt-4 text-xs font-semibold text-[#9494A0] tracking-wider uppercase">
        Loading PEP Software...
      </p>
    </div>
  );
}
