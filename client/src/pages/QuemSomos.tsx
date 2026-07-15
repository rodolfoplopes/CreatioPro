import Layout from "@/components/Layout";
import ClientLogosSlideshow from "@/components/ClientLogosSlideshow";
import { Section, SectionHeader, Grid, FeatureCard, CTAButton } from "@/components/primitives";
import { X } from "lucide-react";
import { useContent } from "@/content";

export default function QuemSomos() {
  const c = useContent();
  const { about } = c;

  return (
    <Layout>
      <section className="relative bg-bone py-14 md:py-20 overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-2 bg-signal" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-abyss mb-6 tracking-tight">
              {about.hero.title}
            </h1>
            <p className="text-xl text-abyss/70 leading-relaxed mb-10">
              {about.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <CTAButton label={c.cta.primary} href={c.cta.href} variant="primary" />
              <CTAButton label={c.cta.secondary} href={c.cta.methodHref} variant="secondary" />
            </div>
          </div>
        </div>
      </section>

      {/*
        SECAO "COMO FAZEMOS" REMOVIDA.
        Era uma QUINTA versao das mesmas fases (Diagnostico / Arquitetura /
        Execucao / Sustentacao). Quem Somos fala de QUEM somos, nao de COMO.
      */}

      <Section tone="bone" divider firstContent>
        <Grid cols={2}>
          <div className="bg-bone border-t-2 border-abyss p-8">
            <h2 className="text-xl font-bold text-abyss mb-4">{about.mission.title}</h2>
            <p className="text-lg text-abyss/70 leading-relaxed">{about.mission.text}</p>
          </div>
          <div className="bg-bone border-t-2 border-signal p-8">
            <h2 className="text-xl font-bold text-abyss mb-4">{about.vision.title}</h2>
            <p className="text-lg text-abyss/70 leading-relaxed">{about.vision.text}</p>
          </div>
        </Grid>
      </Section>

      {/*
        VALORES - agora os BONS.
        O site exibia: "Inovacao, excelencia, responsabilidade social,
        colaboracao, impacto positivo." Cinco palavras sem custo, hardcoded
        nesta pagina - enquanto o content.ts ja continha "Clareza Radical:
        se nao esta claro, nao funciona" e o resto, ignorados.
      */}
      <Section tone="bone">
        <SectionHeader title={about.values.title} subtitle={about.values.subtitle} />
        <Grid cols={3} className="gap-y-10">
          {about.values.items.map((value) => (
            <FeatureCard
              key={value.title}
              title={value.title}
              description={value.description}
            />
          ))}
        </Grid>
      </Section>
      <Section tone="ink">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-display text-3xl md:text-5xl font-bold text-bone leading-tight">
            {about.whatWeDontDo.conclusion}
          </p>
        </div>
      </Section>

      <Section tone="bone" divider>
        <Grid cols={2}>
          <div className="bg-bone border-l-2 border-abyss p-8">
            <h2 className="text-xl font-bold text-abyss mb-4">{about.niche.title}</h2>
            <p className="text-abyss/70 leading-relaxed">{about.niche.text}</p>
          </div>
          <div className="bg-bone border-l-2 border-signal p-8">
            <h2 className="text-xl font-bold text-abyss mb-4">{about.differentiator.title}</h2>
            <p className="text-abyss/70 leading-relaxed">{about.differentiator.text}</p>
          </div>
        </Grid>
      </Section>

      {/*
        TODO(Sprint 2): cada logo precisa de UMA LINHA dizendo o que foi feito.
        Senac, SESC, L'Oreal, Hacking.Rio, Sal Grosso - sem contexto sao
        decoracao. Com contexto, sao prova.
      */}
      <ClientLogosSlideshow />

      {/*
        MANIFESTO - ABERTO POR PADRAO.
        Oito paragrafos, o texto mais humano do site, escondido atras de um
        acordeao "Ler mais" que mostrava so dois.
      */}
      <Section tone="ink">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-signal mb-10 tracking-tight">
            {about.manifesto.title}
          </h2>

          <div className="space-y-6">
            {about.manifesto.paragraphs.map((paragraph, i) => (
              <p key={i} className="text-base text-bone/80 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          <p className="text-2xl md:text-3xl font-bold text-bone mt-12 leading-snug">
            {about.manifesto.closing}
          </p>

          <p className="text-lg text-signal mt-6 leading-relaxed">
            {about.manifesto.signature}
          </p>
        </div>
      </Section>

      <Section tone="bone" size="sm" className="border-t border-abyss/14">
        <div className="text-center">
          <CTAButton label={c.cta.primary} href={c.cta.href} variant="primary" />
          <p className="mt-8 text-sm font-semibold tracking-widest text-abyss/70 uppercase">
            {c.brand.microcopy}
          </p>
        </div>
      </Section>
    </Layout>
  );
}
