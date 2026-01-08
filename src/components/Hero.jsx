export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#0b0b0f] text-white px-6">

      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#d4af37]/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-4xl text-center">

        <h1
          className="text-4xl md:text-6xl font-semibold tracking-tight mb-6
          bg-gradient-to-r from-[#f5e27a] via-[#d4af37] to-[#f5e27a]
          bg-clip-text text-transparent animate-fadeInUp"
        >
          Empowering Organizations <br />
          with Exceptional Talent
        </h1>

        <p
          className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto animate-fadeInUp delay-150"
        >
          Strategic HR solutions that connect people, performance, and purpose —
          crafted for visionary businesses.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fadeInUp delay-300">

          <button
            className="relative px-8 py-3 rounded-full font-semibold text-black
            bg-gradient-to-r from-[#d4af37] via-[#f5e27a] to-[#d4af37]
            shadow-[0_0_30px_rgba(212,175,55,0.5)]
            transition-all duration-300
            hover:scale-105 hover:shadow-[0_0_45px_rgba(212,175,55,0.8)]"
          >
            Partner With Us
          </button>

          <button
            className="px-8 py-3 rounded-full font-medium
            border border-white/30 text-white/80
            backdrop-blur-md transition-all duration-300
            hover:border-[#d4af37] hover:text-[#d4af37] hover:scale-105"
          >
            Explore Services
          </button>

        </div>
      </div>
    </section>
  );
}
