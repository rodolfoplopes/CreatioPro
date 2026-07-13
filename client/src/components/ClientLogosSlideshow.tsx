import { useEffect, useState } from "react";
import { useContent } from "@/content";

import logo1 from "@assets/1_1767297713777.png";
import logo2 from "@assets/2_1767297713782.png";
import logo3 from "@assets/3_1767297713784.png";
import logo4 from "@assets/4_1767297713788.png";
import logo5 from "@assets/5_1767297713789.png";
import logo6 from "@assets/6_1767297713790.png";
import logo7 from "@assets/7_1767297713790.png";
import logo9 from "@assets/9_1767297713800.png";
import logo10 from "@assets/10_1767297713805.png";
import logo11 from "@assets/11_1767297713805.png";
import logo12 from "@assets/12_1767297713806.png";

const clientLogos = [
  { id: 1, src: logo1, alt: "Sesc" },
  { id: 2, src: logo2, alt: "Sal Grosso Gastronomia" },
  { id: 3, src: logo3, alt: "L'Oréal Paris" },
  { id: 4, src: logo4, alt: "Life Impact International Brasil" },
  { id: 5, src: logo5, alt: "Instituto Casa do Pai" },
  { id: 6, src: logo6, alt: "Asta" },
  { id: 7, src: logo7, alt: "Instituto Skate Cuida" },
  { id: 9, src: logo9, alt: "Pertinho de Casa" },
  { id: 10, src: logo10, alt: "Globo" },
  { id: 11, src: logo11, alt: "Hacking.Rio" },
  { id: 12, src: logo12, alt: "Senac" },
];

export default function ClientLogosSlideshow() {
  const c = useContent();
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleLogos = 5;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % clientLogos.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const getVisibleLogos = () => {
    const logos = [];
    for (let i = 0; i < visibleLogos; i++) {
      const index = (currentIndex + i) % clientLogos.length;
      logos.push(clientLogos[index]);
    }
    return logos;
  };

  return (
    <section className="py-16 md:py-20 bg-[#f8f9fa]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-black mb-12 text-center">
          {c.about.partnersTitle}
        </h2>
        
        <div className="relative overflow-hidden">
          <div className="flex items-center justify-center gap-4 md:gap-8 transition-all duration-500 ease-in-out">
            {getVisibleLogos().map((logo, index) => (
              <div
                key={`${logo.id}-${index}`}
                className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 overflow-hidden transition-all duration-300"
                data-testid={`client-logo-${logo.id}`}
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-8 gap-2">
          {clientLogos.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 transition-all duration-300 ${
                index === currentIndex ? "bg-[#7ad1e4] w-6" : "bg-black/20"
              }`}
              data-testid={`logo-indicator-${index}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
