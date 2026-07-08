import { useState } from "react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import ClientLogosSlideshow from "@/components/ClientLogosSlideshow";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, ChevronDown, ChevronUp } from "lucide-react";

export default function QuemSomos() {
  const [manifestoExpanded, setManifestoExpanded] = useState(false);

  return (
    <Layout>
      <section className="relative bg-white py-16 md:py-24 overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-2 bg-[#7ad1e4]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black mb-6 tracking-tight" data-i18n="qs_hero_title">
              Somos um ecossistema que transforma ideias em operações sustentáveis.
            </h1>
            <p className="text-xl text-[#374151] leading-relaxed mb-8" data-i18n="qs_hero_sub">
              Combinamos estratégia, execução e criatividade para resolver os problemas operacionais mais complexos.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link href="/contato">
                <span className="inline-flex items-center gap-2 text-[#7ad1e4] font-semibold text-lg hover:gap-3 transition-all cursor-pointer" data-i18n="qs_hero_cta1">
                  Agende uma conversa
                  <ArrowRight className="h-5 w-5" />
                </span>
              </Link>
              <Link href="/metodo">
                <span className="inline-flex items-center gap-2 text-black font-semibold text-lg hover:gap-3 transition-all cursor-pointer" data-i18n="qs_hero_cta2">
                  Conhecer o Método
                  <ArrowRight className="h-5 w-5" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#f8f9fa]" data-first-content="true">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6" data-i18n="qs_como_fazemos_title">
              Como fazemos
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-white border border-[rgba(0,0,0,0.08)] border-t-4 border-t-[#000000]">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-semibold" data-i18n="qs_como_diagnostico_title">
                  Diagnóstico
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-[#6b7280]" data-i18n="qs_como_diagnostico_text">
                  Mapeamos a realidade operacional com profundidade.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border border-[rgba(0,0,0,0.08)] border-t-4 border-t-[#7ad1e4]">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-semibold" data-i18n="qs_como_arquitetura_title">
                  Arquitetura
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-[#6b7280]" data-i18n="qs_como_arquitetura_text">
                  Desenhamos estruturas adaptadas ao contexto.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border border-[rgba(0,0,0,0.08)] border-t-4 border-t-[#000000]">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-semibold" data-i18n="qs_como_execucao_title">
                  Execução
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-[#6b7280]" data-i18n="qs_como_execucao_text">
                  Acompanhamos a implementação com proximidade.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border border-[rgba(0,0,0,0.08)] border-t-4 border-t-[#7ad1e4]">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-semibold" data-i18n="qs_como_sustentacao_title">
                  Sustentação
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-[#6b7280]" data-i18n="qs_como_sustentacao_text">
                  Garantimos que a operação continue funcionando.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-12 text-center" data-i18n="qs_mvv_title">
            Missão, Visão e Valores
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <Card className="bg-white border border-[rgba(0,0,0,0.08)] border-t-4 border-t-[#000000]">
              <CardHeader>
                <CardTitle className="text-xl" data-i18n="qs_missao_title">
                  Missão
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#6b7280] leading-relaxed" data-i18n="qs_missao_text">
                  Criar a estrutura, os processos e a governança que permitem que projetos de impacto, inovação e expansão realmente funcionem.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border border-[rgba(0,0,0,0.08)] border-t-4 border-t-[#7ad1e4]">
              <CardHeader>
                <CardTitle className="text-xl" data-i18n="qs_visao_title">
                  Visão
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#6b7280] leading-relaxed" data-i18n="qs_visao_text">
                  Ser referência global em estratégia operacional aplicada a impacto, expansão e inovação, atuando no Brasil, Estados Unidos e Europa até 2030.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-white border border-[rgba(0,0,0,0.08)]">
            <CardHeader>
              <CardTitle className="text-xl" data-i18n="qs_valores_title">
                Valores
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[#374151] leading-relaxed" data-i18n="qs_valores_list">
                Inovação, excelência, responsabilidade social, colaboração, impacto positivo.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#f8f9fa]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="bg-white border border-[rgba(0,0,0,0.08)] border-l-4 border-l-[#000000]">
              <CardHeader>
                <CardTitle className="text-xl" data-i18n="qs_nicho_title">
                  Nosso Nicho
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#6b7280] leading-relaxed" data-i18n="qs_nicho_text">
                  Trabalhamos com organizações que enfrentam complexidade operacional — ONGs, fundações, startups em crescimento, marcas com múltiplos stakeholders, projetos culturais, educacionais e de inovação que precisam estrutura para executar com clareza.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border border-[rgba(0,0,0,0.08)] border-l-4 border-l-[#7ad1e4]">
              <CardHeader>
                <CardTitle className="text-xl" data-i18n="qs_diferencial_title">
                  Nosso Diferencial
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#6b7280] leading-relaxed" data-i18n="qs_diferencial_text">
                  Não apenas consultamos — implementamos. Combinamos inteligência operacional com criatividade. Entendemos o contexto cultural e humano, não apenas processos. Nossas estruturas são replicáveis, adaptáveis e sustentáveis no tempo.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <ClientLogosSlideshow />

      <section className="py-20 md:py-28 bg-[#000000]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="bg-[#1a1a1a] p-8 md:p-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#7ad1e4] mb-10 text-center" data-i18n="qs_manifesto_title">
                Manifesto
              </h2>
              <div className="space-y-6">
                <p className="text-base text-white leading-relaxed" data-i18n="qs_manifesto_p1">
                  Nós acreditamos que o mundo se move quando pessoas e organizações recuperam sua capacidade de imaginar — e executar. Na Creation Pro, existimos para transformar essa imaginação em impacto real.
                </p>
                <p className="text-base text-white leading-relaxed" data-i18n="qs_manifesto_p2">
                  Somos feitos de propósito, método e coragem. Trabalhamos onde ideias encontram realidade, onde projetos se tornam sistemas vivos e onde comunidades, marcas e territórios descobrem novos caminhos para prosperar.
                </p>
                
                {manifestoExpanded && (
                  <>
                    <p className="text-base text-white leading-relaxed" data-i18n="qs_manifesto_p3">
                      Acreditamos na inteligência das pessoas, na força das redes e no poder da criatividade aplicada. Acreditamos que inovação não é privilégio — é ferramenta. E que impacto não é discurso — é resultado.
                    </p>
                    <p className="text-base text-white leading-relaxed" data-i18n="qs_manifesto_p4">
                      Por isso, construímos pontes. Entre estratégia e operação. Entre tecnologia e humanidade. Entre empresas, governos, ONGs e os territórios que mais precisam ser ouvidos.
                    </p>
                    <p className="text-base text-white leading-relaxed" data-i18n="qs_manifesto_p5">
                      Nosso trabalho é criar clareza quando tudo parece caótico. Dar ritmo quando o futuro exige velocidade. E garantir execução quando o sonho precisa ganhar forma.
                    </p>
                    <p className="text-base text-white leading-relaxed" data-i18n="qs_manifesto_p6">
                      Movemos projetos, equipes e ecossistemas com responsabilidade, sensibilidade e inteligência. Buscamos o que é possível, mas também o que ainda não existe. Porque transformar não é apenas entregar: é elevar.
                    </p>
                    <p className="text-base text-white leading-relaxed font-semibold" data-i18n="qs_manifesto_p7">
                      Somos criação. Somos operação. Somos impacto.
                    </p>
                    <p className="text-base text-white leading-relaxed" data-i18n="qs_manifesto_p8">
                      E seguimos todos os dias guiados por uma convicção simples e profunda: o futuro não se espera — o futuro se constrói.
                    </p>
                  </>
                )}
                
                <div className="text-center pt-4">
                  <button
                    className="inline-flex items-center gap-2 text-[#7ad1e4] font-semibold hover:gap-3 transition-all cursor-pointer"
                    onClick={() => setManifestoExpanded(!manifestoExpanded)}
                    data-testid="button-manifesto-toggle"
                  >
                    <span data-i18n={manifestoExpanded ? "qs_manifesto_read_less" : "qs_manifesto_read_more"}>
                      {manifestoExpanded ? "Ler menos" : "Ler mais"}
                    </span>
                    {manifestoExpanded ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#000000]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 tracking-tight" data-i18n="qs_cta_title">
              Pronto para transformar sua operação?
            </h2>
            <p className="text-white/70 mb-10 leading-relaxed">
              Se sua iniciativa está complexa ou travada, vamos entender seu contexto e propor a melhor estrutura.
            </p>
            <Link href="/contato">
              <span className="inline-flex items-center gap-2 text-[#7ad1e4] font-semibold text-lg hover:gap-3 transition-all cursor-pointer" data-i18n="qs_cta_button">
                Agende uma conversa
                <ArrowRight className="h-5 w-5" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
