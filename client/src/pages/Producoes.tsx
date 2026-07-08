import { Link } from "wouter";
import Layout from "@/components/Layout";
import HeroInternal from "@/components/layout/HeroInternal";
import ProductionsMediaGrid from "@/components/producoes/ProductionsMediaGrid";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Film, Megaphone, Zap, Calendar, Sparkles } from "lucide-react";

const serviceIcons = [Film, Megaphone, Zap];

export default function Producoes() {
  return (
    <Layout>
      <HeroInternal
        title="Produções para marcas que querem sair do papel"
        titleI18n="producoes_hero_headline"
        subtitle="Da estratégia à entrega — marketing, audiovisual, eventos e campanhas integradas."
        subtitleI18n="producoes_hero_subheadline"
        videoSrc="/images/video-hero.mp4"
      />

      <section className="py-20 md:py-28 bg-[#f8f9fa]" data-first-content="true">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6" data-i18n="producoes_services_title">
              O que produzimos
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "Branding & Identidade",
                description: "Criamos identidades visuais e narrativas que comunicam com clareza.",
                icon: 0
              },
              {
                title: "Conteúdo & Storytelling",
                description: "Histórias que conectam marcas com públicos de forma autêntica e relevante.",
                icon: 1
              },
              {
                title: "Audiovisual",
                description: "Vídeos, documentários e conteúdo audiovisual que capturam essência e impacto.",
                icon: 2
              }
            ].map((service, index) => {
              const Icon = serviceIcons[service.icon];
              return (
                <Card key={index} className="flex flex-col bg-white border border-[rgba(0,0,0,0.08)]" data-testid={`card-producoes-service-${index}`}>
                  <CardHeader className="pb-4">
                    <div className="mb-4 w-12 h-12 bg-[#7ad1e4]/10 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-[#7ad1e4]" />
                    </div>
                    <CardTitle className="text-xl text-black" data-i18n={`producoes_service_${index}_title`}>
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-[#6b7280]" data-i18n={`producoes_service_${index}_description`}>
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <Card className="flex flex-col bg-white border border-[rgba(0,0,0,0.08)]" data-testid="card-producoes-events">
              <CardHeader className="pb-4">
                <div className="mb-4 w-12 h-12 bg-[#7ad1e4]/10 flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-[#7ad1e4]" />
                </div>
                <CardTitle className="text-xl text-black" data-i18n="producoes_service_3_title">
                  Eventos & Experiências
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-[#6b7280]" data-i18n="producoes_service_3_description">
                  De grandes eventos a experiências imersivas — estruturamos tudo para máximo impacto.
                </p>
              </CardContent>
            </Card>

            <Card className="flex flex-col bg-white border border-[rgba(0,0,0,0.08)]" data-testid="card-producoes-special">
              <CardHeader className="pb-4">
                <div className="mb-4 w-12 h-12 bg-[#7ad1e4]/10 flex items-center justify-center">
                  <Sparkles className="h-6 w-6 text-[#7ad1e4]" />
                </div>
                <CardTitle className="text-xl text-black" data-i18n="producoes_service_4_title">
                  Projetos Especiais
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-[#6b7280]" data-i18n="producoes_service_4_description">
                  Iniciativas únicas que combinam criatividade, operação e propósito.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Link href="/contato">
              <span className="inline-flex items-center gap-2 text-[#7ad1e4] font-semibold text-lg hover:gap-3 transition-all cursor-pointer" data-testid="button-producoes-cta" data-i18n="producoes_cta">
                Vamos produzir algo juntos
                <ArrowRight className="h-5 w-5" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <ProductionsMediaGrid />
    </Layout>
  );
}
