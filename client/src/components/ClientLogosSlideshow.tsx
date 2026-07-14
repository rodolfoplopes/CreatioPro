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

/**
 * ANTES: carrossel com indicadores, trocando 5 logos a cada 3s. Os PNGs tem
 * fundo proprio (gradiente azul-rosa) e o object-cover cortava em quadrado —
 * criava as "caixas furta-cor" que nao pertenciam ao sistema.
 *
 * AGORA: marquee continuo. Fundo Bone, logos em Abyss monocromatico via filtro
 * CSS. O array e duplicado para o loop ser perfeito (sem salto no fim).
 *
 * TODO(Sprint 2): cada logo precisa de UMA LINHA dizendo o que foi feito.
 * Globo, L'Oreal, SESC, Senac, Hacking.Rio sem contexto sao decoracao.
 * Com contexto, sao prova.
 */
const clientLogos = [
  { src: logo1, alt: "Sesc" },
  { src: logo2, alt: "Sal Grosso Gastronomia" },
  { src: logo3, alt: "L'Oréal Paris" },
  { src: logo4, alt: "Life Impact International Brasil" },
  { src: logo5, alt: "Instituto Casa do Pai" },
  { src: logo6, alt: "Asta" },
  { src: logo7, alt: "Instituto Skate Cuida" },
  { src: logo9, alt: "Pertinho de Casa" },
  { src: logo10, alt: "Globo" },
  { src: logo11, alt: "Hacking.Rio" },
  { src: logo12, alt: "Senac" },
];

export default function ClientLogosSlideshow() {
  const c = useContent();

  // Duplicado: o loop precisa de duas voltas para nao dar salto no fim.
  const loop = [...clientLogos, ...clientLogos];

  return (
    <section className="py-14 md:py-20 bg-bone border-t border-abyss/14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-h2 font-bold text-abyss mb-12">
          {c.about.partnersTitle}
        </h2>
      </div>

      <div className="relative overflow-hidden">
        {/* Fade nas bordas: o logo entra e sai do Bone, nao e cortado seco */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-bone to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-bone to-transparent" />

        <div className="flex w-max animate-marquee items-center gap-16 md:gap-24">
          {loop.map((logo, i) => (
            <img
              key={`${logo.alt}-${i}`}
              src={logo.src}
              alt={logo.alt}
              className="h-12 md:h-14 w-auto shrink-0 object-contain opacity-60 transition-opacity duration-300 hover:opacity-100 [filter:grayscale(1)_brightness(0)_saturate(0)_invert(13%)_sepia(28%)_saturate(1400%)_hue-rotate(158deg)]"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
