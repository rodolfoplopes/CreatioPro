import type { ReactNode } from "react";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLocalizedHref } from "@/content";

// ============================================================================
// PRIMITIVOS
// Antes, cada secao reimplementava a mao:
//   py-20 md:py-28 / mx-auto max-w-7xl px-4 / border-t-4 border-t-[#000000]
// Copiado em ~40 lugares. Dai o espacamento variava, a barra de cor alternava
// preto/ciano sem codificar nada, e o grid ia de 3 -> 2 -> 4 -> 2 sem logica.
// ============================================================================

type Tone = "paper" | "muted" | "ink";

const TONES: Record<Tone, string> = {
  paper: "bg-bone",
  muted: "bg-bone",
  ink: "bg-abyss text-bone",
};

interface SectionProps {
  children: ReactNode;
  tone?: Tone;
  size?: "sm" | "md" | "lg";
  className?: string;
  firstContent?: boolean;
  id?: string;
}

export function Section({
  children,
  tone = "paper",
  size = "md",
  className,
  firstContent,
  id,
}: SectionProps) {
  const padding = {
    sm: "py-10 md:py-14",
    md: "py-14 md:py-20",
    lg: "py-20 md:py-28",
  }[size];

  return (
    <section
      id={id}
      className={cn(TONES[tone], padding, className)}
      data-first-content={firstContent ? "true" : undefined}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  align?: "left" | "center";
  onDark?: boolean;
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  description,
  align = "left",
  onDark = false,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-12",
        align === "center" ? "text-center mx-auto max-w-3xl" : "max-w-3xl",
        className,
      )}
    >
      <h2
        className={cn(
          "text-3xl sm:text-4xl font-bold tracking-tight",
          onDark ? "text-bone" : "text-abyss",
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-lg leading-relaxed",
            onDark ? "text-bone/70" : "text-abyss/70",
          )}
        >
          {subtitle}
        </p>
      )}
      {description && (
        <p
          className={cn(
            "mt-3 leading-relaxed",
            onDark ? "text-bone/60" : "text-abyss/70",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}

/** Grid padronizado. Antes: 3 -> 2 -> 4 -> 2 colunas sem logica. Agora: 2 ou 3. */
export function Grid({
  children,
  cols = 3,
  className,
}: {
  children: ReactNode;
  cols?: 2 | 3;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "grid gap-8",
        cols === 2
          ? "grid-cols-1 md:grid-cols-2"
          : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
        className,
      )}
    >
      {children}
    </div>
  );
}

/**
 * O card que se repetia em 6 paginas.
 *
 * Note o que NAO tem aqui: icone.
 * Os anteriores (Layers, Target, Cog, Heart, Lightbulb, TrendingUp, Building2)
 * eram genericos de biblioteca, em caixinhas cinzas de 48px. Rebaixavam a
 * tipografia, que e o ativo mais forte da identidade.
 *
 * E a barra de cor virou semantica (accent), nao decorativa alternando
 * preto/ciano ao acaso.
 */
export function FeatureCard({
  title,
  description,
  eyebrow,
  accent = false,
  onDark = false,
  className,
}: {
  title: string;
  description: string;
  eyebrow?: string;
  accent?: boolean;
  onDark?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "border-l-2 pl-6 py-1",
        accent ? "border-signal" : onDark ? "border-bone/30" : "border-abyss",
        className,
      )}
    >
      {eyebrow && (
        <p className="text-xs font-semibold text-abyss/70 mb-2 uppercase tracking-widest">
          {eyebrow}
        </p>
      )}
      <h3 className={cn("text-lg font-bold mb-2", onDark ? "text-bone" : "text-abyss")}>
        {title}
      </h3>
      <p className={cn("leading-relaxed", onDark ? "text-bone/70" : "text-abyss/70")}>
        {description}
      </p>
    </div>
  );
}

/**
 * Um CTA primario, um secundario. No site inteiro.
 * Antes competiam: "Agendar conversa", "Agendar uma Conversa", "Agende uma
 * conversa", "Solicitar proposta", "Solicitar orcamento", "Falar com
 * especialista", "Quero saber mais", "Ver cases"... Nenhum dominante.
 */
export function CTAButton({
  label,
  href,
  variant = "primary",
  onDark = false,
  className,
}: {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "link";
  onDark?: boolean;
  className?: string;
}) {
  const localize = useLocalizedHref();

  const styles = {
    primary: onDark
      ? "bg-bone text-abyss px-8 py-4 hover:bg-signal"
      : "bg-abyss text-bone px-8 py-4 hover:bg-ink",
    secondary: onDark
      ? "border border-bone/30 text-bone px-8 py-4 hover:border-white"
      : "border border-abyss/20 text-abyss px-8 py-4 hover:border-abyss",
    link: onDark ? "text-signal hover:gap-3" : "text-abyss hover:gap-3",
  }[variant];

  return (
    <Link href={localize(href)}>
      <span
        className={cn(
          "inline-flex items-center gap-2 font-semibold transition-all cursor-pointer",
          styles,
          className,
        )}
      >
        {label}
        <ArrowRight className="h-5 w-5" />
      </span>
    </Link>
  );
}
