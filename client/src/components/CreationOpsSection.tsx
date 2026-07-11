import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Check } from "lucide-react";
import { content } from "@/lib/content";

export default function CreationOpsSection() {
  return (
    <section
      className="py-20 md:py-28 bg-white"
      data-testid="section-creation-ops"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="bg-[#000000]/10 text-[#000000] border-[#000000]/20 mb-6" data-i18n="creation_ops_badge">
            {content.creationOps.badge}
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold text-black tracking-tight" data-i18n="creation_ops_title">
            {content.creationOps.title}
          </h2>
          <p className="mt-4 text-xl text-[#7ad1e4] font-medium" data-i18n="creation_ops_subtitle">
            {content.creationOps.subtitle}
          </p>
          <p className="mt-6 text-lg text-[#6b7280] max-w-2xl mx-auto" data-i18n="creation_ops_description">
            {content.creationOps.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {content.creationOps.phases.map((phase, index) => (
            <Card
              key={index}
              className="bg-white border border-[rgba(0,0,0,0.08)]"
              data-testid={`card-phase-${index}`}
            >
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-5xl font-black text-[#000000]">
                    {phase.number}
                  </span>
                  <Badge
                    variant="outline"
                    className="border-[rgba(0,0,0,0.15)] text-[#6b7280] text-xs"
                  >
                    {phase.duration}
                  </Badge>
                </div>
                <h3 className="text-xl font-semibold text-black mb-4" data-i18n={`creation_ops_phase_${index}_title`}>
                  {phase.title}
                </h3>
                <p className="text-[#6b7280] mb-6" data-i18n={`creation_ops_phase_${index}_description`}>
                  {phase.description}
                </p>
                <ul className="space-y-3">
                  {phase.deliverables.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-sm text-[#374151]"
                    >
                      <Check className="h-4 w-4 text-[#7ad1e4] flex-shrink-0" />
                      <span data-i18n={`creation_ops_phase_${index}_deliverable_${i}`}>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-[#f8f9fa] border border-[rgba(0,0,0,0.08)] p-8 md:p-12 text-center max-w-3xl mx-auto">
          <p className="text-[#374151] text-lg leading-relaxed mb-8" data-i18n="creation_ops_result">
            {content.creationOps.result}
          </p>
          <Link href="/contato">
            <span
              className="inline-flex items-center gap-2 text-[#7ad1e4] font-semibold text-lg hover:gap-3 transition-all cursor-pointer"
              data-testid="button-creation-ops-cta"
              data-i18n="creation_ops_cta"
            >
              {content.creationOps.cta}
              <ArrowRight className="h-5 w-5" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
