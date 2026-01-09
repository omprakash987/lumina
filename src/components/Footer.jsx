import Reveal from "./Reveal";

export default function Footer() {
  return (
    <footer className="relative bg-[#0b0b0f] text-white overflow-hidden">

      {/* Top Divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent" />

      <Reveal>
        <div className="max-w-7xl mx-auto px-6 py-16 grid gap-12 md:grid-cols-4 text-center md:text-left">

          {/* Brand */}
          <div>
            <h3 className="text-xl font-semibold tracking-wide text-[#d4af37] mb-4">
              Lumina HR Partners
            </h3>
            <p className="text-white/60 text-sm leading-relaxed">
              A premium HR consulting firm delivering recruitment, leadership
              hiring, and workforce solutions for forward-thinking organizations.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm uppercase tracking-widest text-[#d4af37] mb-4">
              Company
            </h4>
            <ul className="space-y-2 text-white/60 text-sm">
              <li><a href="#about" className="hover:text-white">About Us</a></li>
              <li><a href="#services" className="hover:text-white">Services</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm uppercase tracking-widest text-[#d4af37] mb-4">
              Expertise
            </h4>
            <ul className="space-y-2 text-white/60 text-sm">
              <li>Executive Search</li>
              <li>Recruitment & Staffing</li>
              <li>HR Consulting</li>
              <li>Bulk & Campus Hiring</li>
            </ul>
          </div>

          {/* Social + Legal */}
          <div>
            <h4 className="text-sm uppercase tracking-widest text-[#d4af37] mb-4">
              Connect
            </h4>

            {/* Social Icons */}
            <div className="flex justify-center md:justify-start gap-4 mb-6">
              {[
                { name: "LinkedIn", href: "#", icon: linkedinIcon },
                { name: "Twitter", href: "#", icon: twitterIcon },
                { name: "Instagram", href: "#", icon: instagramIcon },
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  aria-label={item.name}
                  className="w-10 h-10 flex items-center justify-center
                  rounded-full bg-white/10 hover:bg-[#d4af37]/20
                  transition"
                >
                  {item.icon}
                </a>
              ))}
            </div>

            <ul className="space-y-2 text-white/50 text-sm">
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Terms of Service</a></li>
            </ul>
          </div>
        </div>
      </Reveal>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-6 text-center text-sm text-white/40">
        © 2025 Lumina HR Partners. All Rights Reserved.
      </div>

      {/* Bottom Glow */}
      <div className="absolute inset-x-0 bottom-0 h-[200px] bg-[#d4af37]/5 blur-[120px]" />
    </footer>
  );
}

/* ---------- SVG ICONS ---------- */

const linkedinIcon = (
  <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
    <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4v16h-4zM8.5 8h3.8v2.2h.05c.53-1 1.84-2.2 3.79-2.2 4.05 0 4.8 2.67 4.8 6.14V24h-4v-8.62c0-2.06-.04-4.72-2.88-4.72-2.88 0-3.32 2.25-3.32 4.57V24h-4z" />
  </svg>
);

const twitterIcon = (
  <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
    <path d="M24 4.56c-.89.39-1.85.65-2.86.77a4.92 4.92 0 002.15-2.72 9.87 9.87 0 01-3.13 1.2A4.92 4.92 0 0016.62 3c-2.73 0-4.95 2.21-4.95 4.94 0 .39.04.77.13 1.13C7.73 8.87 4.1 6.92 1.67 3.9a4.9 4.9 0 00-.67 2.49c0 1.72.88 3.23 2.21 4.12a4.9 4.9 0 01-2.24-.62v.06c0 2.4 1.71 4.4 3.97 4.85a4.9 4.9 0 01-2.23.08c.63 1.97 2.45 3.41 4.6 3.45A9.86 9.86 0 010 21.54 13.9 13.9 0 007.55 24c9.06 0 14.01-7.5 14.01-14v-.64A9.9 9.9 0 0024 4.56z" />
  </svg>
);

const instagramIcon = (
  <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
    <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.65 0 3 1.35 3 3v10c0 1.65-1.35 3-3 3H7c-1.65 0-3-1.35-3-3V7c0-1.65 1.35-3 3-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-.9a1.1 1.1 0 100 2.2 1.1 1.1 0 000-2.2z" />
  </svg>
);
