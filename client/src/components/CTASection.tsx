import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { content } from "@/lib/content";

export default function CTASection() {
  return (
    <section
      className="py-20 md:py-28 bg-[#000000]"
      data-testid="section-cta"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight" data-i18n="cta_title">
            Pronto para transformar seu projeto?
          </h2>
          <p className="text-lg text-white/70 mb-10 leading-relaxed" data-i18n="cta_description">
            Se sua iniciativa está travada, complexa ou sobrecarregada — nós podemos ajudar. Agende uma conversa de diagnóstico.
          </p>
          <Link href="/contato">
            <span
              className="inline-flex items-center gap-3 text-[#7ad1e4] font-semibold text-xl hover:gap-4 transition-all cursor-pointer"
              data-testid="button-final-cta"
              data-i18n="cta_button"
            >
              {content.hero.cta}
              <ArrowRight className="h-6 w-6" />
            </span>
          </Link>
          <p className="mt-10 text-[#7ad1e4] font-semibold tracking-widest text-sm uppercase" data-i18n="brand_microcopy">
            {content.brand.microcopy}
          </p>
        </div>
      </div>
    </section>
  );
}
