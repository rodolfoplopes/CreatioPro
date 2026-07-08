import { Link } from "wouter";
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight } from "lucide-react";
import { content } from "@/lib/content";

export default function Metodo() {
  return (
    <Layout>
      <section className="relative bg-white py-16 md:py-24 overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-2 bg-[#7ad1e4]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black mb-6 tracking-tight" data-i18n="method_title">
              {content.method.title}
            </h1>
            <p className="text-xl text-[#374151] leading-relaxed" data-i18n="method_subtitle">
              {content.method.subtitle}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#f8f9fa]" data-testid="section-method-phases" data-first-content="true">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Badge className="bg-[#7ad1e4]/20 text-[#7ad1e4] border-[#7ad1e4]/30 mb-6" data-i18n="method_framework_badge">
              Creation OPS
            </Badge>
            <p className="text-lg text-[#6b7280] leading-relaxed" data-i18n="method_framework_description">
              Um framework de 90 dias para organizar e operacionalizar qualquer projeto complexo.
            </p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-[rgba(0,0,0,0.08)] -translate-y-1/2" />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {content.method.phases.map((phase, index) => (
                <div key={index} className="relative" data-testid={`card-method-phase-${index}`}>
                  <Card className="relative z-10 h-full bg-white border border-[rgba(0,0,0,0.08)] border-t-4 border-t-[#7ad1e4]">
                    <CardContent className="p-8">
                      <div className="w-14 h-14 bg-[#000000] text-white flex items-center justify-center text-xl font-bold mb-6 mx-auto lg:mx-0">
                        0{index + 1}
                      </div>
                      <h3 className="text-xl font-semibold text-black mb-4" data-i18n={`method_phase_${index}_title`}>
                        {phase.title}
                      </h3>
                      <p className="text-[#6b7280] leading-relaxed" data-i18n={`method_phase_${index}_description`}>
                        {phase.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white" data-testid="section-how-we-work">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-10 text-center" data-i18n="method_how_we_work_title">
              {content.method.howWeWork.title}
            </h2>
            <Card className="bg-white border border-[rgba(0,0,0,0.08)]">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {content.method.howWeWork.items.map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-[#7ad1e4] flex-shrink-0" />
                      <span className="text-[#374151]" data-i18n={`method_how_we_work_item_${index}`}>{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#f8f9fa]" data-testid="section-method-deliverables">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-12 text-center" data-i18n="method_deliverables_title">
            Entregáveis por Fase
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {content.creationOps.phases.map((phase, index) => (
              <Card key={index} className="bg-white border border-[rgba(0,0,0,0.08)] border-l-4 border-l-[#000000]" data-testid={`card-deliverables-${index}`}>
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-3xl font-black text-[#000000]">{phase.number}</span>
                    <h3 className="font-semibold text-black" data-i18n={`method_deliverable_phase_${index}_title`}>{phase.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {phase.deliverables.map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm">
                        <Check className="h-4 w-4 text-[#7ad1e4] flex-shrink-0" />
                        <span className="text-[#6b7280]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#000000]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 tracking-tight" data-i18n="method_ready_title">
              Pronto para organizar seu projeto?
            </h2>
            <p className="text-white/70 mb-10 leading-relaxed" data-i18n="method_ready_description">
              Em 90 dias, sua operação pode estar funcionando de forma clara, documentada e replicável.
            </p>
            <Link href="/contato">
              <span className="inline-flex items-center gap-2 text-[#7ad1e4] font-semibold text-lg hover:gap-3 transition-all cursor-pointer" data-testid="button-method-cta" data-i18n="method_ready_cta">
                Agendar Conversa de Diagnóstico
                <ArrowRight className="h-5 w-5" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
