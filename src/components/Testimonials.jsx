import Reveal from "./Reveal";

const testimonials = [
  {
    quote:
      "Lumina HR Partners delivered exceptional candidates who aligned perfectly with our company culture.",
    author: "HR Director",
    company: "Global Tech Firm",
  },
  {
    quote:
      "Their executive search capability helped us close critical leadership roles with absolute precision.",
    author: "Managing Partner",
    company: "Consulting Enterprise",
  },
  {
    quote:
      "Professional, ethical, and extremely efficient. A true long-term HR partner for our organization.",
    author: "Chief People Officer",
    company: "Fintech Company",
  },
];

export default function Testimonials() {
  return (
    <Reveal>

   
    <section
      className="relative py-28 bg-[#0b0b0f] text-white overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#d4af37]/10 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">

        <p className="text-sm uppercase tracking-[0.25em] text-[#d4af37] mb-4 animate-fadeInUp">
          Testimonials
        </p>

        <h2
          className="text-4xl md:text-5xl font-semibold mb-16
          bg-gradient-to-r from-[#f5e27a] via-[#d4af37] to-[#f5e27a]
          bg-clip-text text-transparent animate-fadeInUp"
        >
          Voices of Trust
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-xl
              border border-white/10
              rounded-2xl p-8 text-left
              shadow-[0_0_40px_rgba(0,0,0,0.6)]
              transition-all duration-500
              hover:-translate-y-2
              hover:shadow-[0_0_60px_rgba(212,175,55,0.35)]
              animate-fadeInUp"
            >
              <p className="italic text-white/75 leading-relaxed mb-6">
                “{item.quote}”
              </p>

              <div className="border-t border-white/10 pt-4">
                <p className="text-[#d4af37] font-medium">
                  {item.author}
                </p>
                <p className="text-sm text-white/50">
                  {item.company}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>

     </Reveal>
  );
}
