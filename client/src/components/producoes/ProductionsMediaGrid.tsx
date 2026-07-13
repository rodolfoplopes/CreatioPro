import { Section, SectionHeader } from "@/components/primitives";
import img1 from "@assets/world_creativity_performance.jpg";
import img2 from "@assets/462964255_2632487433605091_4180725961629335019_n_1767378729118.jpg";
import img3 from "@assets/reservax_lounge.jpg";
import img4 from "@assets/Hacking-Rio-Spotimagens_1767378729122.webp";
import img5 from "@assets/luiza_brunet_1767378729122.jpg";
import img6 from "@assets/Donatinho_1767378729124.jpg";
import img7 from "@assets/Storyline_BetinhoDias0_1767378729127.jpg";
import img8 from "@assets/blockchain_rio.jpg";
import img9 from "@assets/IMG_6290_1767378825154.jpg";

/**
 * As legendas ja existiam - escondidas no atributo alt, visiveis so para
 * leitores de tela. World Creativity Day, ReservaX, Hacking Rio, Blockchain
 * Rio, Donatinho, Storyline. Sao projetos reais, com nomes reais.
 * Foto sem legenda parece stock. Foto com legenda e prova.
 *
 * TODO(Sprint 2): adicionar cliente e ano em cada uma.
 */
const mediaItems = [
  { src: img1, label: "World Creativity Day" },
  { src: img2, label: "Evento na praia" },
  { src: img3, label: "ReservaX Holder Lounge" },
  { src: img4, label: "Hacking Rio" },
  { src: img5, label: "Luiza Brunet" },
  { src: img6, label: "Donatinho" },
  { src: img7, label: "Storyline" },
  { src: img8, label: "Blockchain Rio" },
  { src: img9, label: "Feira de artesanato" },
];

export default function ProductionsMediaGrid() {
  return (
    <Section tone="muted">
      <SectionHeader title="Alguns momentos que ajudamos a produzir" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mediaItems.map((item) => (
          <figure key={item.label} className="group">
            <div className="aspect-video overflow-hidden bg-black">
              <img
                src={item.src}
                alt={item.label}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <figcaption className="mt-3 text-sm font-medium text-black">
              {item.label}
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
