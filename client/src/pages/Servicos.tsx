import { Link } from "wouter";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight, Heart, Lightbulb, TrendingUp } from "lucide-react";
import { content } from "@/lib/content";

const subServiceIcons = [Heart, Lightbulb, TrendingUp];

export default function Servicos() {
  return (
    <Layout>
      <section className="relative bg-white py-16 md:py-24 overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-2 bg-[#7ad1e4]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black mb-6 tracking-tight" data-i18n="services_title">
              {content.services.title}
            </h1>
            <p className="text-xl text-[#374151] leading-relaxed" data-i18n="services_subtitle">
              {content.services.subtitle}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#f8f9fa]" data-testid="section-main-service" data-first-content="true">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <Badge className="bg-[#7ad1e4]/20 text-[#7ad1e4] border-[#7ad1e4]/30 mb-6" data-i18n="services_main_badge">
              {content.services.mainService.badge}
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4" data-i18n="services_main_title">
              {content.services.mainService.title}
            </h2>
            <p className="text-xl text-[#6b7280]" data-i18n="services_main_subtitle">
              {content.services.mainService.subtitle}
            </p>
            <p className="mt-6 text-[#6b7280] max-w-3xl leading-relaxed" data-i18n="services_main_description">
              {content.services.mainService.description}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {content.creationOps.phases.map((phase, index) => (
              <Card
                key={index}
                className="bg-white border border-[rgba(0,0,0,0.08)] border-t-4 border-t-[#000000]"
                data-testid={`card-service-phase-${index}`}
              >
                <CardHeader className="pb-4 gap-4">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-4xl font-black text-[#000000]">
                      {phase.number}
                    </span>
                    <Badge variant="outline" className="text-xs border-[rgba(0,0,0,0.15)]">
                      {phase.duration}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl text-black" data-i18n={`services_phase_${index}_title`}>{phase.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#6b7280] text-sm mb-6 leading-relaxed" data-i18n={`services_phase_${index}_description`}>
                    {phase.description}
                  </p>
                  <ul className="space-y-3">
                    {phase.deliverables.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 text-sm text-[#374151]"
                      >
                        <Check className="h-4 w-4 text-[#7ad1e4] flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link href="/contato">
              <span className="inline-flex items-center gap-2 text-[#7ad1e4] font-semibold text-lg hover:gap-3 transition-all cursor-pointer" data-testid="button-service-cta" data-i18n="services_main_cta">
                Quero contratar o Creation OPS
                <ArrowRight className="h-5 w-5" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white" data-testid="section-sub-services">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6" data-i18n="services_verticals_title">
              Verticais
            </h2>
            <p className="text-[#6b7280] max-w-2xl mx-auto" data-i18n="services_verticals_subtitle">
              Serviços derivados do Creation OPS, adaptados para diferentes contextos.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {content.services.subServices.map((service, index) => {
              const Icon = subServiceIcons[index];
              return (
                <Card
                  key={index}
                  className="flex flex-col bg-white border border-[rgba(0,0,0,0.08)]"
                  data-testid={`card-sub-service-${index}`}
                >
                  <CardHeader className="gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-[#7ad1e4]/10 flex items-center justify-center">
                        <Icon className="h-6 w-6 text-[#7ad1e4]" />
                      </div>
                      <div>
                        <CardTitle className="text-xl text-black" data-i18n={`services_vertical_${index}_title`}>{service.title}</CardTitle>
                        <p className="text-sm text-[#6b7280]" data-i18n={`services_vertical_${index}_subtitle`}>
                          {service.subtitle}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1 space-y-6">
                    <div>
                      <h4 className="text-sm font-semibold text-black mb-2" data-i18n={`services_vertical_${index}_problem_label`}>
                        O que resolvemos
                      </h4>
                      <p className="text-sm text-[#6b7280] leading-relaxed" data-i18n={`services_vertical_${index}_problem`}>
                        {service.problem}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-black mb-2" data-i18n={`services_vertical_${index}_delivery_label`}>
                        O que entregamos
                      </h4>
                      <p className="text-sm text-[#6b7280] leading-relaxed" data-i18n={`services_vertical_${index}_delivery`}>
                        {service.delivery}
                      </p>
                    </div>
                    <div className="pt-4 border-t border-[rgba(0,0,0,0.08)]">
                      <h4 className="text-sm font-semibold text-[#000000] mb-2" data-i18n={`services_vertical_${index}_result_label`}>
                        Resultado esperado
                      </h4>
                      <p className="text-sm text-[#374151] leading-relaxed" data-i18n={`services_vertical_${index}_result`}>
                        {service.result}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#000000]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 tracking-tight" data-i18n="services_doubt_title">
              Não tem certeza qual serviço é para você?
            </h2>
            <p className="text-white/70 mb-10 leading-relaxed" data-i18n="services_doubt_description">
              Agende uma conversa de diagnóstico. Vamos entender seu contexto e indicar a melhor opção.
            </p>
            <Link href="/contato">
              <span className="inline-flex items-center gap-2 text-[#7ad1e4] font-semibold text-lg hover:gap-3 transition-all cursor-pointer" data-testid="button-services-final-cta" data-i18n="services_doubt_cta">
                Agendar Conversa
                <ArrowRight className="h-5 w-5" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
