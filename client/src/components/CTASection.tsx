import { Section, CTAButton } from "@/components/primitives";
import { useContent } from "@/content";

export default function CTASection() {
  const c = useContent();

  return (
    <Section tone="ink" size="sm">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
          {c.contact.title}
        </h2>
        <p className="text-lg text-white/70 mb-10 leading-relaxed">
          {c.contact.description}
        </p>

        <CTAButton
          label={c.cta.primary}
          href={c.cta.href}
          variant="primary"
          onDark
        />

        <p className="mt-10 text-[#7ad1e4] font-semibold tracking-widest text-sm uppercase">
          {c.brand.microcopy}
        </p>
      </div>
    </Section>
  );
}
