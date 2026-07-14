import Layout from "@/components/Layout";
import { Section, SectionHeader, CTAButton } from "@/components/primitives";
import { ArrowRight, Check } from "lucide-react";
import { Link } from "wouter";
import { useContent, useLocalizedHref } from "@/content";

/**
 * A pagina /metodo foi ABSORVIDA aqui. Motivo: o metodo (Creation OPS) e o que
 * roda DENTRO das tres verticais. Separa-los criava uma pagina orfa e obrigava
 * o visitante a montar a relacao sozinho.
 *
 * Agora: Solucoes = as tres verticais + o metodo que as move.
 * A rota /metodo continua existindo, redirecionando para ca (preserva SEO).
 */
export default function Servicos() {
  const c = useContent();
  const localize = useLocalizedHref();

  return (
    <Layout>
      <section className="relative bg-bone py-14 md:py-20 overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-2 bg-signal" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-measure">
            <h1 className="font-display text-display sm:text-5xl md:text-6xl font-bold text-abyss mb-6">
              {c.services.title}
            </h1>
            <p className="text-xl text-abyss/70 leading-relaxed">
              {c.services.subtitle}
            </p>
          </div>
        </div>
      </section>

      <Section tone="bone" divider firstContent>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-abyss/14 border border-abyss/14">
          {c.services.items.map((service, i) => (
            <article key={service.title} className="bg-bone p-8 md:p-10 flex flex-col">
              <h2 className="font-display text-h2 font-bold text-abyss mb-2">
                {service.title}
              </h2>
              <p className="text-small text-abyss/70 mb-8 leading-relaxed">
                {service.subtitle}
              </p>
              <div className="space-y-6 flex-1">
                <div>
                  <h3 className="text-caption font-semibold text-abyss mb-2 uppercase tracking-wide">
                    {c.labels.solves}
                  </h3>
                  <p className="text-abyss/70 leading-relaxed">{service.solves}</p>
                </div>
                <div>
                  <h3 className="text-caption font-semibold text-abyss mb-2 uppercase tracking-wide">
                    {c.labels.delivers}
                  </h3>
                  <p className="text-abyss/70 leading-relaxed">{service.delivers}</p>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-abyss/14">
                <h3 className="text-caption font-semibold text-abyss/70 mb-2 uppercase tracking-wide">
                  {c.labels.result}
                </h3>
                <p className="text-abyss font-medium leading-relaxed mb-6">
                  {service.result}
                </p>
                {i === 0 && (
                  <Link href={localize("/servicos/ops")}>
                    <span className="inline-flex items-center gap-2 text-abyss font-semibold underline underline-offset-4 hover:gap-3 transition-all cursor-pointer">
                      {c.services.opsLinkLabel}
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="ink">
        <SectionHeader
          title={c.method.title}
          subtitle={c.method.subtitle}
          description={c.method.description}
          onDark
        />

        <div className="space-y-px bg-bone/14">
          {c.method.phases.map((phase) => (
            <div
              key={phase.number}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-ink p-8 md:p-10"
            >
              <div className="lg:col-span-1">
                <span className="font-display text-h1 font-bold text-bone/30 tabular-nums">
                  {phase.number}
                </span>
              </div>

              <div className="lg:col-span-5">
                <p className="text-caption font-semibold text-signal mb-2 uppercase tracking-widest">
                  {phase.label}
                </p>
                <h3 className="font-display text-h2 font-bold text-bone mb-4">
                  {phase.title}
                </h3>
                <p className="text-bone/70 leading-relaxed">{phase.description}</p>
              </div>

              <div className="lg:col-span-6 lg:border-l lg:border-bone/14 lg:pl-8">
                <ul className="space-y-3">
                  {phase.deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check className="h-4 w-4 text-signal shrink-0 mt-1" />
                      <span className="text-bone/70">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
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
        <SectionHeader title={c.method.howWeWork.title} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-5 max-w-5xl">
          {c.method.howWeWork.items.map((item) => (
            <div key={item} className="flex items-start gap-3">
              <Check className="h-5 w-5 text-signal shrink-0 mt-0.5" />
              <span className="text-abyss/70">{item}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="abyss" size="sm">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div className="max-w-measure">
            <h2 className="font-display text-h2 sm:text-h1 font-bold text-bone mb-3">
              {c.services.doubt.title}
            </h2>
            <p className="text-bone/70 leading-relaxed">
              {c.services.doubt.description}
            </p>
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
