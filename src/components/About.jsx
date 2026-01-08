export default function About() {
  return (
    <section
      id="about"
      className="relative py-28 bg-[#0b0b0f] text-white overflow-hidden"
    >

      <div className="absolute inset-0">
        <div className="absolute top-20 right-1/2 w-[500px] h-[500px] bg-[#d4af37]/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">

        <p className="text-sm uppercase tracking-[0.25em] text-[#d4af37] mb-4 animate-fadeInUp">
          Who We Are
        </p>

        <h2
          className="text-4xl md:text-5xl font-semibold mb-8
          bg-gradient-to-r from-[#f5e27a] via-[#d4af37] to-[#f5e27a]
          bg-clip-text text-transparent animate-fadeInUp"
        >
          About Lumina HR Partners
        </h2>

        <div
          className="max-w-4xl mx-auto mt-10
          bg-white/5 backdrop-blur-xl border border-white/10
          rounded-2xl p-10 md:p-14
          shadow-[0_0_60px_rgba(0,0,0,0.6)]
          animate-fadeInUp delay-200"
        >
          <p className="text-lg md:text-xl text-white/70 leading-relaxed">
            Lumina HR Partners is a <span className="text-[#d4af37] font-medium">premium HR consulting firm</span>
            delivering recruitment, staffing, and strategic workforce solutions.
            We connect exceptional professionals with forward-thinking
            organizations to drive <span className="text-[#d4af37]">sustainable, long-term success</span>.
          </p>
        </div>
      </div>
    </section>
  );
}
