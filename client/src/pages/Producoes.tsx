import Layout from "@/components/Layout";
import HeroInternal from "@/components/layout/HeroInternal";
import ProductionsMediaGrid from "@/components/producoes/ProductionsMediaGrid";
import { Section, SectionHeader, Grid, FeatureCard, CTAButton } from "@/components/primitives";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { useContent, useLocalizedHref } from "@/content";

/**
 * ANTES: todo o texto hardcoded em PT, traduzido em runtime pelo i18n.js
 * sobrescrevendo o DOM. Com o i18n.js morto, /en/producoes mostrava
 * portugues. Agora o conteudo vem do useContent().
 *
 * Removidos os icones Film / Megaphone / Zap / Calendar / Sparkles em
 * caixinhas cianas - genericos de biblioteca, rebaixavam a tipografia.
 */
export default function Producoes() {
  const c = useContent();
  const localize = useLocalizedHref();

  return (
    <Layout>
      <HeroInternal
        title={c.productions.hero.title}
        subtitle={c.productions.hero.subtitle}
        videoSrc="/images/video-hero.mp4"
      />

      <Section tone="bone" divider firstContent>
        <SectionHeader title={c.productions.servicesTitle} />

        <Grid cols={3}>
          {c.productions.services.map((service) => (
            <FeatureCard
              key={service.title}
              title={service.title}
              description={service.description}
            />
          ))}
        </Grid>
      </Section>

      {/*
        CREATOR OPS RIO - SPIN-OFF.
        Saiu da home. Saiu do menu. Virou UMA LINHA aqui, com link.
        Publico diferente (creator internacional vs. ONG brasileira), moeda
        diferente (USD), idioma diferente (EN), identidade visual diferente
        (verde neon + amarelo + navy competindo com preto/branco/ciano).
        Modelo: marca endossada. Herda credibilidade sem poluir posicionamento.
        TODO(Sprint 4): dominio proprio (creatorops.rio) + assinatura "by Creation".
      */}
      <Section tone="ink">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold text-signal mb-3 uppercase tracking-widest">
              {c.productions.creatorOps.eyebrow}
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-bone mb-4 tracking-tight">
              {c.productions.creatorOps.title}
            </h2>
            <p className="text-bone/70 leading-relaxed">
              {c.productions.creatorOps.description}
            </p>
          </div>

          <Link href={localize(c.productions.creatorOps.href)}>
            <span className="inline-flex items-center gap-2 border border-bone/30 text-bone px-8 py-4 font-semibold hover:border-white transition-colors cursor-pointer shrink-0">
              {c.productions.creatorOps.linkLabel}
              <ArrowRight className="h-5 w-5" />
            </span>
          </Link>
        </div>
      </Section>

      <ProductionsMediaGrid title={c.productions.mediaTitle} />

      <Section tone="bone" size="sm" className="border-t border-abyss/14">
        <div className="text-center">
          <CTAButton label={c.cta.primary} href={c.cta.href} variant="primary" />
        </div>
      </Section>
    </Layout>
  );
}
