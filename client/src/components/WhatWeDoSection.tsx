import { Section, SectionHeader, Grid, FeatureCard } from "@/components/primitives";
import { useContent } from "@/content";

/**
 * ANTES este componente era o retrato do problema do site:
 *   - importava content.whatWeDo para titulo/descricao
 *   - e HARDCODAVA os tres cards ("Estrutura", "Clareza", "Ritmo")
 *   - com tres icones genericos (Layers, Target, Cog) em caixinhas cinzas
 *   - e barra lateral alternando preto/ciano/preto sem codificar nada
 * Meio no content, meio na mao. Era o padrao de todo o site.
 */
export default function WhatWeDoSection() {
  const c = useContent();

  return (
    <Section tone="paper" firstContent>
      <SectionHeader
        title={c.whatWeDo.title}
        subtitle={c.whatWeDo.description}
        description={c.whatWeDo.subtext}
      />

      <Grid cols={3}>
        {c.whatWeDo.pillars.map((pillar) => (
          <FeatureCard
            key={pillar.title}
            title={pillar.title}
            description={pillar.description}
          />
        ))}
      </Grid>
    </Section>
  );
}
