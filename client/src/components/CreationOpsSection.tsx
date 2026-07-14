import { Section, CTAButton } from "@/components/primitives";
import { useContent } from "@/content";

/**
 * ============================================================================
 * A REPETICAO QUE ESTE ARQUIVO CAUSAVA
 * As 3 fases (Diagnostico -> Estruturacao -> Execucao) apareciam em 5 lugares:
 *   1. Home       -> CreationOpsSection (este arquivo), com os 15 entregaveis
 *   2. Servicos   -> os mesmos 15 entregaveis
 *   3. Metodo     -> cards de fase
 *   4. Metodo     -> DE NOVO, "Entregaveis por Fase", mesma pagina!
 *   5. Quem Somos -> "Como fazemos" (Diagnostico/Arquitetura/Execucao/Sustentacao)
 *
 * E vinham de DOIS objetos redundantes no content: method.phases e
 * creationOps.phases, descrevendo a mesma coisa.
 *
 * AGORA: as fases vivem so na pagina Metodo. A home anuncia e linka.
 * ============================================================================
 */
export default function CreationOpsSection() {
  const c = useContent();

  return (
    <Section tone="paper">
      <div className="max-w-3xl">
        <p className="text-xs font-semibold text-abyss/70 mb-4 uppercase tracking-widest">
          {c.method.badge}
        </p>

        <h2 className="text-4xl sm:text-5xl font-bold text-abyss tracking-tight">
          {c.method.title}
        </h2>

        <p className="mt-4 text-xl text-abyss/70 font-medium">
          {c.method.subtitle}
        </p>

        <p className="mt-6 text-lg text-abyss/70 leading-relaxed">
          {c.method.description}
        </p>

        <ol className="mt-10 space-y-1">
          {c.method.phases.map((phase) => (
            <li
              key={phase.number}
              className="flex items-baseline gap-4 py-3 border-b border-abyss/14"
            >
              <span className="text-2xl font-black text-abyss/20 tabular-nums">
                {phase.number}
              </span>
              <span className="text-lg font-semibold text-abyss">
                {phase.title}
              </span>
            </li>
          ))}
        </ol>

        <p className="mt-10 text-xl font-medium text-abyss leading-snug border-l-2 border-signal pl-6">
          {c.hero.proof}
        </p>

        <div className="mt-10">
          <CTAButton
            label={c.cta.secondary}
            href={c.cta.methodHref}
            variant="primary"
          />
        </div>
      </div>
    </Section>
  );
}
