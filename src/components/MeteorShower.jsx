import { useEffect, useState } from "react";

export default function MeteorShower() {
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const meteorCount = isMobile ? 10 : 25;

    const createMeteors = () => {
      const newMeteors = Array.from({ length: meteorCount }).map(() => ({
        id: Math.random(),
        left: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 3 + Math.random() * 3,
        size: isMobile ? 2 : 3,
      }));
      setMeteors(newMeteors);
    };

    createMeteors();
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {meteors.map((m) => (
        <span
          key={m.id}
          className="meteor"
          style={{
            left: `${m.left}%`,
            animationDelay: `${m.delay}s`,
            animationDuration: `${m.duration}s`,
            width: `${m.size}px`,
            height: `${m.size * 8}px`,
          }}
        />
      ))}
    </div>
  );
}
