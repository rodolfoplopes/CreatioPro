import { Link } from "wouter";
import Layout from "@/components/Layout";
import HeroInternal from "@/components/layout/HeroInternal";
import ImpactoTripleImage from "@/components/impacto/ImpactoTripleImage";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export default function Impacto() {
  return (
    <Layout>
      <HeroInternal
        title="Impacto que acontece na prática."
        titleI18n="imp_hero_title"
        subtitle="Estruturamos, ativamos e medimos projetos sociais, culturais e educacionais para que sejam sustentáveis e transformadores."
        subtitleI18n="imp_hero_sub"
        showCta={true}
        ctaText="Agende uma conversa"
        ctaI18n="imp_hero_cta1"
        ctaHref="/contato"
        showSecondaryCta={true}
        secondaryCtaText="Ver cases"
        secondaryCtaI18n="imp_hero_cta2"
      />

      <section className="py-20 md:py-28 bg-[#f8f9fa]" data-first-content="true">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6" data-i18n="imp_abordagem_title">
              Nossa Abordagem
            </h2>
            <p className="text-lg text-[#6b7280] leading-relaxed" data-i18n="imp_abordagem_text">
              Impacto real exige método, governança e clareza. Unimos estratégia, operação e responsabilidade para que o propósito se torne ação concreta.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center bg-white border border-[rgba(0,0,0,0.08)] border-t-4 border-t-[#000000]">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-black mb-4" data-i18n="imp_abordagem_card1_title">
                  Estratégia
                </h3>
                <p className="text-[#6b7280]" data-i18n="imp_abordagem_card1_text">
                  Diagnóstico, teoria da mudança e modelagem de programas.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center bg-white border border-[rgba(0,0,0,0.08)] border-t-4 border-t-[#7ad1e4]">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-black mb-4" data-i18n="imp_abordagem_card2_title">
                  Governança
                </h3>
                <p className="text-[#6b7280]" data-i18n="imp_abordagem_card2_text">
                  Papéis, rituais, processos e controle operacional.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center bg-white border border-[rgba(0,0,0,0.08)] border-t-4 border-t-[#000000]">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-black mb-4" data-i18n="imp_abordagem_card3_title">
                  Mensuração
                </h3>
                <p className="text-[#6b7280]" data-i18n="imp_abordagem_card3_text">
                  Indicadores, métricas sociais e relatórios de impacto.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <ImpactoTripleImage />

      <section className="py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="bg-white border border-[rgba(0,0,0,0.08)] border-t-4 border-t-[#000000]">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl" data-i18n="imp_entrega1_title">
                  Estratégia e Planejamento de Impacto
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#6b7280]" data-i18n="imp_entrega1_text">
                  Definição de propósito, teoria da mudança, caminhos estratégicos e modelagem de iniciativas.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border border-[rgba(0,0,0,0.08)] border-t-4 border-t-[#7ad1e4]">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl" data-i18n="imp_entrega2_title">
                  Estruturação e Governança
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#6b7280]" data-i18n="imp_entrega2_text">
                  Documentação, processos, papéis, rotina e operação contínua.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border border-[rgba(0,0,0,0.08)] border-t-4 border-t-[#000000]">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl" data-i18n="imp_entrega3_title">
                  Ativação e Implementação
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#6b7280]" data-i18n="imp_entrega3_text">
                  Execução real em campo: cultura, educação, comunidade e territórios.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border border-[rgba(0,0,0,0.08)] border-t-4 border-t-[#7ad1e4]">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl" data-i18n="imp_entrega4_title">
                  Relatórios e Accountability
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#6b7280]" data-i18n="imp_entrega4_text">
                  Métricas, monitoramento, KPIs sociais e relatórios institucionais.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#f8f9fa]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <div className="bg-[#000000] p-8 md:p-12 text-white">
              <div className="max-w-2xl">
                <h3 className="text-2xl md:text-3xl font-bold mb-4" data-i18n="imp_banner1_title">
                  Programa de Impacto Social
                </h3>
                <p className="text-white/70 mb-8 leading-relaxed" data-i18n="imp_banner1_text">
                  Todo o ciclo: estratégia, governança, execução e indicadores.
                </p>
                <Link href="/contato">
                  <span className="inline-flex items-center gap-2 text-[#7ad1e4] font-semibold text-lg hover:gap-3 transition-all cursor-pointer" data-i18n="imp_banner1_cta">
                    Solicitar proposta
                    <ArrowRight className="h-5 w-5" />
                  </span>
                </Link>
              </div>
            </div>

            <div className="bg-[#7ad1e4]/10 border border-[#7ad1e4]/30 p-8 md:p-12">
              <div className="max-w-2xl">
                <h3 className="text-2xl md:text-3xl font-bold text-black mb-4" data-i18n="imp_banner2_title">
                  Estruturação de Instituto ou Fundação
                </h3>
                <p className="text-[#6b7280] mb-8 leading-relaxed" data-i18n="imp_banner2_text">
                  Criamos a governança e operação necessárias para sua iniciativa existir.
                </p>
                <Link href="/contato">
                  <span className="inline-flex items-center gap-2 text-black font-semibold text-lg hover:gap-3 transition-all cursor-pointer" data-i18n="imp_banner2_cta">
                    Falar com especialista
                    <ArrowRight className="h-5 w-5" />
                  </span>
                </Link>
              </div>
            </div>

            <div className="bg-[#000000] p-8 md:p-12 text-white">
              <div className="max-w-2xl">
                <h3 className="text-2xl md:text-3xl font-bold mb-4" data-i18n="imp_banner3_title">
                  Relatórios de Impacto e ESG
                </h3>
                <p className="text-white/70 mb-8 leading-relaxed" data-i18n="imp_banner3_text">
                  Produção completa de relatórios narrativos e indicadores.
                </p>
                <Link href="/contato">
                  <span className="inline-flex items-center gap-2 text-[#7ad1e4] font-semibold text-lg hover:gap-3 transition-all cursor-pointer" data-i18n="imp_banner3_cta">
                    Solicitar orçamento
                    <ArrowRight className="h-5 w-5" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6">
              Projetos que transformamos
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { label: "imp_case1_label", title: "imp_case1_title" },
              { label: "imp_case2_label", title: "imp_case2_title" },
              { label: "imp_case3_label", title: "imp_case3_title" },
              { label: "imp_case4_label", title: "imp_case4_title" },
            ].map((caseItem, index) => (
              <Card key={index} className="overflow-hidden cursor-pointer bg-white border border-[rgba(0,0,0,0.08)]">
                <div className="bg-[#000000] h-40 flex items-end p-6">
                  <div>
                    <p className="text-xs font-semibold text-[#7ad1e4] mb-2 uppercase tracking-widest" data-i18n={caseItem.label}>
                      Projeto
                    </p>
                    <h3 className="text-lg font-bold text-white" data-i18n={caseItem.title}>
                      Título do Projeto
                    </h3>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#f8f9fa]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6">
              Para quem é
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-white border border-[rgba(0,0,0,0.08)] border-l-4 border-l-[#000000]">
              <CardHeader className="pb-3">
                <CardTitle className="text-base" data-i18n="imp_para1_title">
                  ONGs e Fundações
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-[#6b7280]" data-i18n="imp_para1_text">
                  Projetos sociais que precisam de operação real.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border border-[rgba(0,0,0,0.08)] border-l-4 border-l-[#7ad1e4]">
              <CardHeader className="pb-3">
                <CardTitle className="text-base" data-i18n="imp_para2_title">
                  Cultura e Educação
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-[#6b7280]" data-i18n="imp_para2_text">
                  Iniciativas que precisam de estrutura e continuidade.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border border-[rgba(0,0,0,0.08)] border-l-4 border-l-[#000000]">
              <CardHeader className="pb-3">
                <CardTitle className="text-base" data-i18n="imp_para3_title">
                  Times ESG
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-[#6b7280]" data-i18n="imp_para3_text">
                  Apoio para metas, ações e relatórios de impacto.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border border-[rgba(0,0,0,0.08)] border-l-4 border-l-[#7ad1e4]">
              <CardHeader className="pb-3">
                <CardTitle className="text-base" data-i18n="imp_para4_title">
                  Projetos Públicos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-[#6b7280]" data-i18n="imp_para4_text">
                  Educação, cultura, juventude e desenvolvimento local.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#000000]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 tracking-tight" data-i18n="imp_cta_title">
              Impacto precisa ser executado com responsabilidade.
            </h2>
            <p className="text-white/70 mb-10 leading-relaxed">
              Vamos conversar sobre como estruturar sua iniciativa para máximo impacto.
            </p>
            <Link href="/contato">
              <span className="inline-flex items-center gap-2 text-[#7ad1e4] font-semibold text-lg hover:gap-3 transition-all cursor-pointer" data-i18n="imp_cta_button">
                Agendar conversa
                <ArrowRight className="h-5 w-5" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
