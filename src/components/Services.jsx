const services = [
  "Executive Search & Leadership Hiring",
  "Recruitment & Staffing Solutions",
  "Contractual & Project-Based Staffing",
  "HR Consulting & Outsourcing",
  "Campus & Bulk Hiring",
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-28 bg-[#0b0b0f] text-white overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-[#d4af37]/10 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        <p className="text-sm uppercase tracking-[0.25em] text-[#d4af37] text-center mb-4 animate-fadeInUp">
          Our Capabilities
        </p>

        <h2
          className="text-4xl md:text-5xl font-semibold text-center mb-16
          bg-gradient-to-r from-[#f5e27a] via-[#d4af37] to-[#f5e27a]
          bg-clip-text text-transparent animate-fadeInUp"
        >
          Our Expertise
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {services.map((item, index) => (
            <div
              key={index}
              className="group relative
              bg-white/5 backdrop-blur-xl
              border border-white/10
              rounded-2xl p-8
              shadow-[0_0_40px_rgba(0,0,0,0.6)]
              transition-all duration-500
              hover:-translate-y-3
              hover:border-[#d4af37]/40
              hover:shadow-[0_0_60px_rgba(212,175,55,0.35)]
              animate-fadeInUp"
            >
              <span className="absolute top-0 left-0 h-[2px] w-0 bg-[#d4af37] transition-all duration-500 group-hover:w-full" />

              <h3 className="text-lg font-medium tracking-wide text-white">
                {item}
              </h3>

              <p className="mt-4 text-sm text-white/65 leading-relaxed">
                Premium talent and workforce solutions aligned with your
                organization’s long-term vision and growth strategy.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
