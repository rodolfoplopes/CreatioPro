import Layout from "@/components/Layout";
import { Section, CTAButton } from "@/components/primitives";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { useContent, useLocalizedHref } from "@/content";

/**
 * ANTES esta pagina renderizava as 3 fases COM OS 15 ENTREGAVEIS - os mesmos
 * que ja apareciam na Home e DUAS VEZES na pagina Metodo. E usava tres icones
 * genericos (Heart, Lightbulb, TrendingUp) em caixinhas cianas.
 *
 * AGORA:
 *   Metodo   = COMO (as fases moram la, so la)
 *   Solucoes = O QUE (as tres verticais, em profundidade)
 */
export default function Servicos() {
  const c = useContent();
  const localize = useLocalizedHref();

  return (
    <Layout>
      <section className="relative bg-bone py-14 md:py-20 overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-2 bg-signal" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-abyss mb-6 tracking-tight">
              {c.services.title}
            </h1>
            <p className="text-xl text-abyss/70 leading-relaxed">
              {c.services.subtitle}
            </p>
          </div>
        </div>
      </section>

      <Section tone="muted" size="sm" firstContent>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 border-l-2 border-abyss pl-8">
          <p className="text-lg text-abyss/70 leading-relaxed max-w-2xl">
            {c.services.methodNote}
          </p>
          <Link href={localize(c.cta.methodHref)}>
            <span className="inline-flex items-center gap-2 font-semibold text-abyss hover:gap-3 transition-all cursor-pointer shrink-0">
              {c.cta.secondary}
              <ArrowRight className="h-5 w-5" />
            </span>
          </Link>
        </div>
      </Section>

      <Section tone="paper">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-abyss/10 border border-abyss/14">
          {c.services.items.map((service) => (
            <article key={service.title} className="bg-bone p-8 md:p-10 flex flex-col">
              <h2 className="text-2xl font-bold text-abyss mb-2">
                {service.title}
              </h2>
              <p className="text-sm text-abyss/70 mb-8 leading-relaxed">
                {service.subtitle}
              </p>

              <div className="space-y-6 flex-1">
                <div>
                  <h3 className="text-xs font-semibold text-abyss mb-2 uppercase tracking-wide">
                    {c.labels.solves}
                  </h3>
                  <p className="text-abyss/70 leading-relaxed">{service.solves}</p>
                </div>

                <div>
                  <h3 className="text-xs font-semibold text-abyss mb-2 uppercase tracking-wide">
                    {c.labels.delivers}
                  </h3>
                  <p className="text-abyss/70 leading-relaxed">{service.delivers}</p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-abyss/14">
                <h3 className="text-xs font-semibold text-abyss/70 mb-2 uppercase tracking-wide">
                  {c.labels.result}
                </h3>
                <p className="text-abyss font-medium leading-relaxed">
                  {service.result}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="ink" size="sm">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-bone mb-6 tracking-tight">
            {c.services.doubt.title}
          </h2>
          <p className="text-bone/70 mb-10 leading-relaxed">
            {c.services.doubt.description}
          </p>
          <CTAButton label={c.cta.primary} href={c.cta.href} variant="primary" onDark />
        </div>
      </Section>
    </Layout>
  );
}
