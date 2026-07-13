import { ChevronDown } from "lucide-react";
import { CTAButton } from "@/components/primitives";
import { useContent } from "@/content";
import heroImage from "@assets/ariel-tutillo-sM-ejBVJrKo-unsplash_1767378163287.jpg";

/**
 * TODO(Sprint 2): trocar a imagem.
 * O alt e literalmente "Corporate cityscape" - arranha-ceus generico de stock.
 * Contradiz o discurso de proposito, ONGs e territorios. Voce TEM fotos suas:
 * Itaguai, hackathon, World Creativity Day. Uma delas aqui vale mais que
 * qualquer skyline.
 */
export default function HeroSection() {
  const c = useContent();

  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight - 64, behavior: "smooth" });
  };

  return (
    <section
      className="relative min-h-[calc(100vh-4rem)] flex items-center bg-white overflow-hidden"
      data-testid="section-hero"
    >
      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#7ad1e4]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-[#7ad1e4] mb-6">
              <span className="text-[#7ad1e4] font-semibold tracking-widest text-sm uppercase">
                {c.brand.microcopy}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black leading-[1.1] tracking-tight">
              {c.hero.headline}
            </h1>

            <p className="mt-8 text-lg sm:text-xl text-[#4a4a4a] max-w-xl leading-relaxed">
              {c.hero.subheadline}
            </p>

            {/* A melhor frase do site. Estava enterrada no fim do Metodo. */}
            <p className="mt-8 text-lg font-medium text-black leading-snug border-l-2 border-[#7ad1e4] pl-6">
              {c.hero.proof}
            </p>

            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <CTAButton label={c.cta.primary} href={c.cta.href} variant="primary" />
              <CTAButton
                label={c.cta.secondary}
                href={c.cta.methodHref}
                variant="secondary"
              />
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="aspect-[4/3] bg-[#f8f9fa] border border-black/10 overflow-hidden">
              <img
                src={heroImage}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#6b7280] hover:text-black transition-colors animate-bounce"
        data-testid="button-scroll-down"
        aria-label="Rolar para baixo"
      >
        <ChevronDown className="h-8 w-8" />
      </button>
    </section>
  );
}
