import { Link } from "wouter";
import { ArrowRight, ChevronDown } from "lucide-react";
import { content } from "@/lib/content";
import heroImage from "@assets/ariel-tutillo-sM-ejBVJrKo-unsplash_1767378163287.jpg";

export default function HeroSection() {
  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight - 64, behavior: "smooth" });
  };

  const scrollToVerticals = () => {
    const verticalsSection = document.getElementById("verticais");
    if (verticalsSection) {
      verticalsSection.scrollIntoView({ behavior: "smooth" });
    }
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
              <span className="text-[#7ad1e4] font-semibold tracking-widest text-sm uppercase" data-i18n="brand_microcopy">
                {content.brand.microcopy}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black leading-[1.1] tracking-tight" data-i18n="hero_headline">
              {content.hero.headline}
            </h1>

            <p className="mt-8 text-lg sm:text-xl text-[#374151] max-w-xl leading-relaxed" data-i18n="hero_subheadline">
              {content.hero.subheadline}
            </p>

            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <Link href="/contato">
                <span
                  className="inline-flex items-center gap-2 text-[#7ad1e4] font-semibold text-lg hover:gap-3 transition-all cursor-pointer"
                  data-testid="button-hero-cta"
                  data-i18n="hero_cta"
                >
                  {content.hero.cta}
                  <ArrowRight className="h-5 w-5" />
                </span>
              </Link>
              <span
                className="inline-flex items-center gap-2 text-black font-medium text-lg hover:gap-3 transition-all cursor-pointer"
                data-testid="button-hero-secondary"
                data-i18n="hero_secondary"
                onClick={scrollToVerticals}
              >
                {content.hero.secondary}
                <ArrowRight className="h-5 w-5" />
              </span>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="aspect-[4/3] bg-[#f8f9fa] border border-[rgba(0,0,0,0.08)] overflow-hidden">
              <img 
                src={heroImage}
                alt="Corporate cityscape"
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
