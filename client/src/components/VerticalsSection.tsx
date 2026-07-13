import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeader } from "@/components/primitives";
import { useContent, useLocalizedHref } from "@/content";

/**
 * ANTES: tres cards identicos escritos a mao, com todo o texto hardcoded em PT
 * e traduzido em runtime pelo i18n.js. E a barra lateral alternava
 * preto/ciano/preto sem codificar nada.
 */
export default function VerticalsSection() {
  const c = useContent();
  const localize = useLocalizedHref();

  return (
    <Section id="verticais" tone="muted">
      <SectionHeader title={c.verticals.title} subtitle={c.verticals.subtitle} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-black/10 border border-black/10">
        {c.verticals.items.map((vertical) => (
          <Link key={vertical.href} href={localize(vertical.href)}>
            <article className="bg-white p-8 md:p-10 h-full flex flex-col hover:bg-[#fafafa] transition-colors cursor-pointer group">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#7ad1e4] mb-3">
                {vertical.eyebrow}
              </p>

              <h3 className="text-2xl font-bold text-black mb-4">
                {vertical.title}
              </h3>

              <p className="text-[#4a4a4a] leading-relaxed mb-8 flex-1">
                {vertical.description}
              </p>

              <span className="inline-flex items-center gap-2 text-black font-semibold group-hover:gap-3 transition-all">
                {vertical.linkLabel}
                <ArrowRight className="h-5 w-5" />
              </span>
            </article>
          </Link>
        ))}
      </div>
    </Section>
  );
}
