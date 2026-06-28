export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0A0E1A]">
      <div className="flex flex-col items-center gap-6">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-[#0F4C9F]/30 border-t-[#0F4C9F]" />
        <p className="font-impact text-sm tracking-widest text-white/40 uppercase">Carregando...</p>
      </div>
    </div>
  );
}
