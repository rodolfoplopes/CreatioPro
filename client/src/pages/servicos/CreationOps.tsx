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
