import Reveal from "./Reveal";

const reasons = [
  "Proven Industry Expertise",
  "Confidential & Ethical Practices",
  "Tailored HR Solutions",
  "Long-Term Strategic Partnerships",
];

export default function WhyChooseUs() {
  return (
    <section
      className="relative py-28 bg-[#0b0b0f] text-white overflow-hidden scroll-mt-28"
    >
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#d4af37]/10 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

        {/* Section Heading */}
        <Reveal>
          <p className="text-sm uppercase tracking-[0.25em] text-[#d4af37] mb-4">
            Why Choose Us
          </p>

          <h2
            className="text-4xl md:text-5xl font-semibold mb-14
            bg-gradient-to-r from-[#f5e27a] via-[#d4af37] to-[#f5e27a]
            bg-clip-text text-transparent"
          >
            Why Partner With Lumina HR Partners
          </h2>
        </Reveal>

        {/* Content Card */}
        <Reveal delay={150}>
          <div
            className="max-w-3xl mx-auto
            bg-white/5 backdrop-blur-xl
            border border-white/10
            rounded-2xl p-10 md:p-14
            shadow-[0_0_60px_rgba(0,0,0,0.6)]"
          >
            <ul className="space-y-6 text-left text-lg">
              {reasons.map((item, index) => (
                <Reveal key={index} delay={index * 120}>
                  <li className="flex items-start gap-4">
                    <span
                      className="mt-1 w-6 h-6 flex items-center justify-center
                      rounded-full bg-[#d4af37]/20 text-[#d4af37] font-bold"
                    >
                      ✓
                    </span>
                    <span className="text-white/75 leading-relaxed">
                      {item}
                    </span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
