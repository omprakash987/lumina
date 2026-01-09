import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleScroll = (id) => (e) => {
    e.preventDefault();
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setOpen(false); 
  };

  return (
    

    
    <nav className="fixed top-0 w-full z-50 bg-[#0b0b0f]/80 backdrop-blur-md border-b border-white/10 ">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4 ">

        <h1 className="text-2xl font-semibold tracking-wide text-[#d4af37]">
         <a href={"#"}>
           Lumina HR Partners
         </a>
        </h1>

        <div className="hidden md:flex space-x-10 items-center">
          {["about", "services", "contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={handleScroll(`#${item}`)}
              className="relative text-white/80 font-medium transition duration-300 capitalize
              after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px]
              after:bg-[#d4af37] after:transition-all after:duration-300
              hover:text-white hover:after:w-full"
            >
              {item}
            </a>
          ))}

          <button className="px-6 py-2 rounded-full text-sm font-semibold text-black
            bg-gradient-to-r from-[#d4af37] via-[#f5e27a] to-[#d4af37]
            shadow-[0_0_20px_rgba(212,175,55,0.4)]
            hover:scale-105 transition">
            Partner With Us
          </button>
        </div>

      
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          <div className="space-y-1">
            <span className={`block h-0.5 w-6 bg-white transition ${open && "rotate-45 translate-y-2"}`} />
            <span className={`block h-0.5 w-6 bg-white transition ${open && "opacity-0"}`} />
            <span className={`block h-0.5 w-6 bg-white transition ${open && "-rotate-45 -translate-y-2"}`} />
          </div>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#0b0b0f]/95 backdrop-blur-xl border-t border-white/10">
          <div className="flex flex-col items-center py-8 space-y-6">
            {["about", "services", "contact"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={handleScroll(`#${item}`)}
                className="text-white/80 text-lg font-medium capitalize hover:text-[#d4af37]"
              >
                {item}
              </a>
            ))}

            <button className="mt-4 px-8 py-3 rounded-full font-semibold text-black
              bg-gradient-to-r from-[#d4af37] via-[#f5e27a] to-[#d4af37]
              shadow-[0_0_25px_rgba(212,175,55,0.5)]">
              Partner With Us
            </button>
          </div>
        </div>
      )}
    </nav>
   
  );
}
