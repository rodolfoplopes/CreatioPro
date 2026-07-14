import Layout from "@/components/Layout";
import { Section, SectionHeader, CTAButton } from "@/components/primitives";
import { Check } from "lucide-react";
import { useContent } from "@/content";

/**
 * A DUPLICACAO MAIS ABSURDA DO SITE ESTAVA AQUI.
 * A versao antiga renderizava, NA MESMA PAGINA:
 *   Secao 2 -> content.method.phases      (3 cards: titulo + descricao)
 *   Secao 4 -> content.creationOps.phases (3 cards: titulo + entregaveis)
 * Dois objetos redundantes descrevendo as MESMAS tres fases.
 * Agora: UMA secao, com os entregaveis junto.
 */
export default function Metodo() {
  const c = useContent();

  return (
    <Layout>
      <section className="relative bg-bone py-14 md:py-20 overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-2 bg-signal" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold text-abyss/70 mb-4 uppercase tracking-widest">
              {c.method.badge}
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-abyss mb-6 tracking-tight">
              {c.method.title}
            </h1>
            <p className="text-xl text-abyss/70 leading-relaxed">
              {c.method.subtitle}
            </p>
          </div>
        </div>
      </section>

      <Section tone="bone" divider firstContent>
        <p className="text-lg text-abyss/70 leading-relaxed max-w-3xl mb-12">
          {c.method.description}
        </p>

        <div className="space-y-px bg-abyss/10">
          {c.method.phases.map((phase) => (
            <div
              key={phase.number}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-bone p-8 md:p-10"
            >
              <div className="lg:col-span-1">
                <span className="text-4xl font-black text-abyss/20 tabular-nums">
                  {phase.number}
                </span>
              </div>

              <div className="lg:col-span-5">
                <p className="text-xs font-semibold text-abyss/70 mb-2 uppercase tracking-widest">
                  {phase.label}
                </p>
                <h2 className="text-2xl font-bold text-abyss mb-4">
                  {phase.title}
                </h2>
                <p className="text-abyss/70 leading-relaxed">
                  {phase.description}
                </p>
              </div>

              <div className="lg:col-span-6 lg:border-l lg:border-abyss/14 lg:pl-8">
                <ul className="space-y-3">
                  {phase.deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check className="h-4 w-4 text-signal shrink-0 mt-1" />
                      <span className="text-abyss/70">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 border-l-2 border-abyss pl-8 max-w-3xl">
          <p className="text-xl md:text-2xl font-medium text-abyss leading-snug">
            {c.method.result}
          </p>
        </div>
      </Section>

      <Section tone="bone">
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

      {/*
        TODO(Sprint 4): secao de investimento.
        "Voce vende clareza - comece por ser claro sobre isso."
      */}

      <Section tone="ink" size="sm">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-bone mb-8 tracking-tight">
            {c.contact.title}
          </h2>
          <CTAButton label={c.cta.primary} href={c.cta.href} variant="primary" onDark />
        </div>
      </Section>
    </Layout>
  );
}
