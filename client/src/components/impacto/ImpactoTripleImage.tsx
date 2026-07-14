import img1 from "@assets/wcd_magician.jpg";
import img2 from "@assets/20231220-IMG_0149_1767379689076.jpg";
import img3 from "@assets/itaguai_ilha_madeira.jpg";
import img4 from "@assets/DSC00711_1767379689080.jpg";
import img5 from "@assets/hacking_rio_workshop.jpg";
import img6 from "@assets/IMG_5821_1767379689087.jpg";

const images = [
  {
    src: img1,
    alt: "World Creativity Day 2023 - Interação com público"
  },
  {
    src: img2,
    alt: "Eu Amo Itaguaí - Feira local de produtos artesanais"
  },
  {
    src: img3,
    alt: "Ilha da Madeira, Itaguaí - Vista panorâmica"
  },
  {
    src: img4,
    alt: "Comunidade ribeirinha - Projeto de impacto social"
  },
  {
    src: img5,
    alt: "Hacking Rio - Workshop de tecnologia"
  },
  {
    src: img6,
    alt: "Feira de artesanato - Tecidos coloridos"
  }
];

export default function ImpactoTripleImage() {
  return (
    <section className="py-12 md:py-16 bg-bone">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <div 
              key={index} 
              className="bg-bone border border-[rgba(15,23,42,0.12)] overflow-hidden group hover:border-[rgba(15,23,42,0.20)] transition-colors"
              data-testid={`impacto-image-${index}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
