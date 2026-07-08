import img1 from "@assets/world_creativity_performance.jpg";
import img2 from "@assets/462964255_2632487433605091_4180725961629335019_n_1767378729118.jpg";
import img3 from "@assets/reservax_lounge.jpg";
import img4 from "@assets/Hacking-Rio-Spotimagens_1767378729122.webp";
import img5 from "@assets/luiza_brunet_1767378729122.jpg";
import img6 from "@assets/Donatinho_1767378729124.jpg";
import img7 from "@assets/Storyline_BetinhoDias0_1767378729127.jpg";
import img8 from "@assets/blockchain_rio.jpg";
import img9 from "@assets/IMG_6290_1767378825154.jpg";

type MediaItem = {
  type: "image";
  src: string;
  alt: string;
};

const mediaItems: MediaItem[] = [
  {
    type: "image",
    src: img1,
    alt: "World Creativity Day - Performance"
  },
  {
    type: "image",
    src: img2,
    alt: "DJ na praia - Evento"
  },
  {
    type: "image",
    src: img3,
    alt: "ReservaX Holder Lounge"
  },
  {
    type: "image",
    src: img4,
    alt: "Hacking Rio - Programadores"
  },
  {
    type: "image",
    src: img5,
    alt: "Luiza Brunet - Produção"
  },
  {
    type: "image",
    src: img6,
    alt: "Donatinho - Show"
  },
  {
    type: "image",
    src: img7,
    alt: "Storyline - Praia"
  },
  {
    type: "image",
    src: img8,
    alt: "Blockchain Rio - Palestra"
  },
  {
    type: "image",
    src: img9,
    alt: "Feira de artesanato"
  }
];

export default function ProductionsMediaGrid() {
  return (
    <section className="py-16 md:py-20 bg-[#f4f6fa]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 
            className="text-3xl sm:text-4xl font-bold text-foreground mb-4"
            data-i18n="producoes_media_title"
          >
            Alguns momentos que ajudamos a produzir
          </h2>
          <p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            data-i18n="producoes_media_subtitle"
          >
            Eventos, experiências e produções que marcam.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mediaItems.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-[rgba(15,23,42,0.12)] overflow-hidden group hover:border-[rgba(15,23,42,0.20)] transition-colors"
              data-testid={`media-item-${index}`}
            >
              <div className="aspect-video relative">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-petroleo-dark/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
