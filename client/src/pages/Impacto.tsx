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

      <Section tone="bone" divider firstContent>
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

      <Section tone="bone">
        <Grid cols={3}>
          {impact.offerings.map((offering) => (
            <div
              key={offering.title}
              className="flex flex-col justify-between border border-abyss/14 p-8 hover:border-abyss transition-colors"
            >
              <div>
                <h3 className="text-xl font-bold text-abyss mb-4">
                  {offering.title}
                </h3>
                <p className="text-abyss/70 leading-relaxed mb-8">
                  {offering.description}
                </p>
              </div>
              <Link href={localize(c.cta.href)}>
                <span className="inline-flex items-center gap-2 text-abyss font-semibold hover:gap-3 transition-all cursor-pointer">
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
        <Section tone="bone" divider>
          <SectionHeader title={impact.cases.title} />
          <div className="space-y-8">
            {impact.cases.items.map((item) => (
              <article
                key={item.title}
                className="grid grid-cols-1 lg:grid-cols-2 bg-bone border border-abyss/14 overflow-hidden"
              >
                <div
                  className="min-h-[280px] bg-abyss bg-cover bg-center"
                  style={{ backgroundImage: `url(${item.image})` }}
                  role="img"
                  aria-label={item.title}
                />
                <div className="p-8 md:p-10">
                  <p className="text-xs font-semibold text-abyss/70 mb-3 uppercase tracking-widest">
                    {item.eyebrow}
                  </p>
                  <h3 className="text-2xl font-bold text-abyss mb-1">{item.title}</h3>
                  <p className="text-sm text-abyss/70 mb-8">{item.client}</p>

                  <div className="space-y-5 mb-8">
                    <div>
                      <p className="text-xs font-semibold text-abyss uppercase tracking-wide mb-1">
                        {c.labels.caseProblem}
                      </p>
                      <p className="text-abyss/70 leading-relaxed">{item.problem}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-abyss uppercase tracking-wide mb-1">
                        {c.labels.caseAction}
                      </p>
                      <p className="text-abyss/70 leading-relaxed">{item.action}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 pt-6 border-t border-abyss/14">
                    {item.results.map((result) => (
                      <div key={result.label}>
                        <p className="text-2xl font-bold text-abyss">{result.value}</p>
                        <p className="text-xs text-abyss/70 leading-snug">{result.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>
      )}

      <Section tone="bone">
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
      <Section tone="bone" divider>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-abyss tracking-tight">
            {impact.territoryPolicy.title}
          </h2>
          <ul className="space-y-5">
            {impact.territoryPolicy.items.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <Check className="h-5 w-5 text-signal shrink-0 mt-1" />
                <span className="text-lg text-abyss/70 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section tone="ink" size="sm">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-bone mb-6 tracking-tight">
            {impact.finalCta.title}
          </h2>
          <p className="text-bone/70 mb-10 leading-relaxed">
            {impact.finalCta.subtitle}
          </p>
          <CTAButton label={c.cta.primary} href={c.cta.href} variant="primary" onDark />
        </div>
      </Section>
    </Layout>
  );
}
