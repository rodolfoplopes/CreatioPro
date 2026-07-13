import Layout from "@/components/Layout";
import HeroInternal from "@/components/layout/HeroInternal";
import ImpactoTripleImage from "@/components/impacto/ImpactoTripleImage";
import { Section, SectionHeader, Grid, FeatureCard, CTAButton } from "@/components/primitives";
import { Check, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { useContent, useLocalizedHref } from "@/content";

export default function Impacto() {
  const c = useContent();
  const localize = useLocalizedHref();
  const { impact } = c;
  const hasCases = impact.cases.items.length > 0;

  return (
    <Layout>
      <HeroInternal
        title={impact.hero.title}
        subtitle={impact.hero.subtitle}
        showCta
        ctaText={c.cta.primary}
        ctaHref={c.cta.href}
        showSecondaryCta={false}
      />

      <Section tone="muted" firstContent>
        <SectionHeader
          title={impact.approach.title}
          subtitle={impact.approach.subtitle}
        />
        <Grid cols={2}>
          {impact.approach.items.map((item) => (
            <FeatureCard
              key={item.title}
              title={item.title}
              description={item.description}
            />
          ))}
        </Grid>
      </Section>

      <ImpactoTripleImage />

      <Section tone="paper">
        <Grid cols={3}>
          {impact.offerings.map((offering) => (
            <div
              key={offering.title}
              className="flex flex-col justify-between border border-black/10 p-8 hover:border-black transition-colors"
            >
              <div>
                <h3 className="text-xl font-bold text-black mb-4">
                  {offering.title}
                </h3>
                <p className="text-[#4a4a4a] leading-relaxed mb-8">
                  {offering.description}
                </p>
              </div>
              <Link href={localize(c.cta.href)}>
                <span className="inline-flex items-center gap-2 text-black font-semibold hover:gap-3 transition-all cursor-pointer">
                  {c.cta.primary}
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </div>
          ))}
        </Grid>
      </Section>

      {/*
        CASES - O GARGALO REAL DO SITE.
        O codigo antigo renderizava LITERALMENTE, em producao:
            <p>Projeto</p>
            <h3>Titulo do Projeto</h3>
        Quatro retangulos pretos sob o titulo "Projetos que transformamos".
        Uma secao que anuncia a ausencia de prova em voz alta.

        Agora: enquanto impact.cases.items estiver vazio, NAO RENDERIZA.
      */}
      {hasCases && (
        <Section tone="muted">
          <SectionHeader title={impact.cases.title} />
          <div className="space-y-8">
            {impact.cases.items.map((item) => (
              <article
                key={item.title}
                className="grid grid-cols-1 lg:grid-cols-2 bg-white border border-black/10 overflow-hidden"
              >
                <div
                  className="min-h-[280px] bg-black bg-cover bg-center"
                  style={{ backgroundImage: `url(${item.image})` }}
                  role="img"
                  aria-label={item.title}
                />
                <div className="p-8 md:p-10">
                  <p className="text-xs font-semibold text-[#7ad1e4] mb-3 uppercase tracking-widest">
                    {item.eyebrow}
                  </p>
                  <h3 className="text-2xl font-bold text-black mb-1">{item.title}</h3>
                  <p className="text-sm text-[#6b7280] mb-8">{item.client}</p>

                  <div className="space-y-5 mb-8">
                    <div>
                      <p className="text-xs font-semibold text-black uppercase tracking-wide mb-1">
                        {c.labels.caseProblem}
                      </p>
                      <p className="text-[#4a4a4a] leading-relaxed">{item.problem}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-black uppercase tracking-wide mb-1">
                        {c.labels.caseAction}
                      </p>
                      <p className="text-[#4a4a4a] leading-relaxed">{item.action}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 pt-6 border-t border-black/10">
                    {item.results.map((result) => (
                      <div key={result.label}>
                        <p className="text-2xl font-bold text-black">{result.value}</p>
                        <p className="text-xs text-[#6b7280] leading-snug">{result.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>
      )}

      <Section tone="paper">
        <SectionHeader title={impact.audience.title} />
        <Grid cols={2}>
          {impact.audience.items.map((item) => (
            <FeatureCard
              key={item.title}
              title={item.title}
              description={item.description}
            />
          ))}
        </Grid>
      </Section>

      {/*
        POLITICA DE TERRITORIO - SECAO NOVA.
        Nasce do conflito entre "Favelas Autenticas" + selo "Seguranca
        Garantida" (Creator Ops) e o discurso desta pagina. As duas paginas
        do mesmo site se contradiziam eticamente.
        Converte risco reputacional em diferencial.
      */}
      <Section tone="muted">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-black tracking-tight">
            {impact.territoryPolicy.title}
          </h2>
          <ul className="space-y-5">
            {impact.territoryPolicy.items.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <Check className="h-5 w-5 text-[#7ad1e4] shrink-0 mt-1" />
                <span className="text-lg text-[#4a4a4a] leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section tone="ink" size="sm">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 tracking-tight">
            {impact.finalCta.title}
          </h2>
          <p className="text-white/70 mb-10 leading-relaxed">
            {impact.finalCta.subtitle}
          </p>
          <CTAButton label={c.cta.primary} href={c.cta.href} variant="primary" onDark />
        </div>
      </Section>
    </Layout>
  );
}
