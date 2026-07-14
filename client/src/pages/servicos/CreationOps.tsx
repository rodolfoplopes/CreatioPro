import Layout from "@/components/Layout";
import { Section, SectionHeader, Grid, FeatureCard, CTAButton } from "@/components/primitives";
import { Check, X } from "lucide-react";
import { useContent } from "@/content";

/**
 * Pagina dedicada ao Creation OPS.
 * Usa INK (#061C24) como superficie de destaque — o "fundo profundo" do manual.
 * E a unica cor autorizada alem das tres primarias, e cria hierarquia sem
 * quebrar o sistema (Ember e Lichen ficam fora).
 */
export default function CreationOps() {
  const c = useContent();
  const ops = c.servicesOps;

  return (
    <Layout>
      <section className="relative bg-ink text-bone py-20 md:py-28 overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-2 bg-signal" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-measure">
            <p className="text-caption font-semibold text-signal mb-4 uppercase tracking-widest">
              {ops.hero.eyebrow}
            </p>
            <h1 className="font-display text-display sm:text-5xl md:text-6xl font-bold text-bone mb-6">
              {ops.hero.title}
            </h1>
            <p className="text-xl text-signal font-medium mb-6">
              {ops.hero.subtitle}
            </p>
            <p className="text-lg text-bone/70 leading-relaxed mb-10">
              {ops.hero.description}
            </p>
            <CTAButton label={c.cta.primary} href={c.cta.href} variant="primary" onDark />
          </div>
        </div>
      </section>

      <Section tone="bone" firstContent>
        <SectionHeader title={ops.problem.title} subtitle={ops.problem.subtitle} />

        <ul className="space-y-4 max-w-measure">
          {ops.problem.items.map((item) => (
            <li key={item} className="flex items-start gap-4 border-b border-abyss/14 pb-4">
              <X className="h-5 w-5 text-abyss/70 shrink-0 mt-1" />
              <span className="text-lg text-abyss leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="bone" divider>
        <SectionHeader title={ops.audience.title} />
        <Grid cols={2}>
          {ops.audience.items.map((item) => (
            <FeatureCard
              key={item.title}
              title={item.title}
              description={item.description}
            />
          ))}
        </Grid>
      </Section>

      <Section tone="ink">
        <SectionHeader
          title={ops.included.title}
          subtitle={ops.included.subtitle}
          onDark
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-bone/14">
          {c.method.phases.map((phase) => (
            <div key={phase.number} className="bg-ink p-8">
              <div className="flex items-baseline gap-3 mb-6">
                <span className="font-display text-h1 font-bold text-signal tabular-nums">
                  {phase.number}
                </span>
                <h3 className="font-display text-h3 font-bold text-bone">
                  {phase.title}
                </h3>
              </div>

              <ul className="space-y-3">
                {phase.deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="h-4 w-4 text-signal shrink-0 mt-1" />
                    <span className="text-bone/70 text-small">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-l-2 border-signal pl-8 max-w-measure">
          <p className="font-display text-h2 text-bone leading-snug">
            {c.method.result}
          </p>
        </div>
      </Section>

      <Section tone="bone" divider>
        <SectionHeader title={ops.routine.title} />
        <ul className="space-y-4 max-w-measure">
          {ops.routine.items.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <Check className="h-5 w-5 text-signal shrink-0 mt-1" />
              <span className="text-lg text-abyss/70 leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* TODO(Sprint 4): faixa de investimento. "Voce vende clareza." */}
      <Section tone="bone" divider size="sm">
        <div className="max-w-measure border-l-2 border-abyss pl-8">
          <h2 className="font-display text-h2 font-bold text-abyss mb-4">
            {ops.investment.title}
          </h2>
          <p className="text-lg text-abyss/70 leading-relaxed">
            {ops.investment.text}
          </p>
        </div>
      </Section>

      <Section tone="abyss" size="sm">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div className="max-w-measure">
            <h2 className="font-display text-h2 sm:text-h1 font-bold text-bone mb-3">
              {ops.finalCta.title}
            </h2>
            <p className="text-bone/70 leading-relaxed">{ops.finalCta.subtitle}</p>
          </div>
          <CTAButton
            label={c.cta.primary}
            href={c.cta.href}
            variant="primary"
            onDark
            className="shrink-0"
          />
        </div>
      </Section>
    </Layout>
  );
}
