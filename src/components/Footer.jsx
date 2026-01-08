export default function Footer() {
  return (
    <footer className="relative bg-[#0b0b0f] text-white overflow-hidden">
      
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 py-12 text-center">

        <h3 className="text-xl font-semibold tracking-wide text-[#d4af37] mb-3">
          Lumina HR Partners
        </h3>

        <p className="text-white/60 mb-6">
          Partnering People. Powering Performance.
        </p>

        <p className="text-sm text-white/40">
          © 2025 Lumina HR Partners. All Rights Reserved.
        </p>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-[200px] bg-[#d4af37]/5 blur-[120px]" />
    </footer>
  );
}
