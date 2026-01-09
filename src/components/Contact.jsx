import Reveal from "./Reveal";
import GithubGlobe from "./GithubGlobe";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-32 bg-[#0b0b0f] text-white overflow-hidden scroll-mt-28"
    >
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#d4af37]/10 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT — Contact Form */}
        <div className="text-center md:text-left">
          <Reveal>
            <p className="text-sm uppercase tracking-[0.25em] text-[#d4af37] mb-4">
              Get In Touch
            </p>

            <h2
              className="text-4xl md:text-5xl font-semibold mb-12
              bg-gradient-to-r from-[#f5e27a] via-[#d4af37] to-[#f5e27a]
              bg-clip-text text-transparent"
            >
              Let’s Connect
            </h2>
          </Reveal>

          <Reveal delay={150}>
            <form
              className="bg-white/5 backdrop-blur-xl
              border border-white/10
              rounded-2xl p-10 md:p-12
              shadow-[0_0_60px_rgba(0,0,0,0.6)]
              space-y-6"
            >
              <input className="w-full p-4 rounded-lg bg-white/10 text-white placeholder-white/50 border border-white/10 focus:outline-none focus:border-[#d4af37]" placeholder="Name" />
              <input className="w-full p-4 rounded-lg bg-white/10 text-white placeholder-white/50 border border-white/10 focus:outline-none focus:border-[#d4af37]" placeholder="Email" />
              <textarea rows="4" className="w-full p-4 rounded-lg bg-white/10 text-white placeholder-white/50 border border-white/10 focus:outline-none focus:border-[#d4af37]" placeholder="Message" />
              <button className="w-full py-3 rounded-full font-semibold text-black bg-gradient-to-r from-[#d4af37] via-[#f5e27a] to-[#d4af37] shadow-[0_0_30px_rgba(212,175,55,0.5)] hover:scale-105 transition">
                Submit
              </button>
            </form>
          </Reveal>
        </div>

        {/* RIGHT — 3D Globe */}
        <Reveal delay={300}>
       <div className="h-[320px] sm:h-[400px] md:h-[520px] w-full">
  <GithubGlobe />
</div>

        </Reveal>

      </div>
    </section>
  );
}
