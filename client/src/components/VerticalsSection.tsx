import { useLocation } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export default function VerticalsSection() {
  const [, setLocation] = useLocation();

  const navigateTo = (path: string) => {
    window.scrollTo(0, 0);
    setLocation(path);
  };

  return (
    <section id="verticais" className="py-20 md:py-28 bg-[#f8f9fa]" data-testid="section-verticals">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6 tracking-tight" data-i18n="verticals_title">
            Nossas Verticais
          </h2>
          <p className="text-lg text-[#6b7280]" data-i18n="verticals_subtitle">
            Três frentes especializadas para atender diferentes demandas, sempre com foco em estrutura, clareza e resultados.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="bg-white border border-[rgba(0,0,0,0.08)] border-l-4 border-l-[#000000] flex flex-col" data-testid="card-vert-ops">
            <CardContent className="p-8 flex-1 flex flex-col">
              <div className="mb-6">
                <p className="text-sm font-semibold uppercase tracking-widest text-[#7ad1e4] mb-2" data-i18n="vert_ops_label">
                  Operações Inteligentes
                </p>
                <h3 className="text-2xl font-bold text-black" data-i18n="vert_ops_title">
                  Creation OPS
                </h3>
              </div>
              <p className="text-[#6b7280] mb-8 flex-1" data-i18n="vert_ops_text">
                Arquitetura operacional, governança, processos e execução.
              </p>
              <span
                className="inline-flex items-center gap-2 text-[#7ad1e4] font-semibold hover:gap-3 transition-all cursor-pointer"
                data-i18n="vert_ops_cta"
                onClick={() => navigateTo('/servicos')}
              >
                Ver OPS
                <ArrowRight className="h-5 w-5" />
              </span>
            </CardContent>
          </Card>

          <Card className="bg-white border border-[rgba(0,0,0,0.08)] border-l-4 border-l-[#7ad1e4] flex flex-col" data-testid="card-vert-prod">
            <CardContent className="p-8 flex-1 flex flex-col">
              <div className="mb-6">
                <p className="text-sm font-semibold uppercase tracking-widest text-[#7ad1e4] mb-2" data-i18n="vert_prod_label">
                  Conteúdo & Experiências
                </p>
                <h3 className="text-2xl font-bold text-black" data-i18n="vert_prod_title">
                  Creation Produções
                </h3>
              </div>
              <p className="text-[#6b7280] mb-8 flex-1" data-i18n="vert_prod_text">
                Audiovisual, eventos, campanhas, produtos criativos e projetos especiais.
              </p>
              <span
                className="inline-flex items-center gap-2 text-[#7ad1e4] font-semibold hover:gap-3 transition-all cursor-pointer"
                data-i18n="vert_prod_cta"
                onClick={() => navigateTo('/producoes')}
              >
                Ver Produções
                <ArrowRight className="h-5 w-5" />
              </span>
            </CardContent>
          </Card>

          <Card className="bg-white border border-[rgba(0,0,0,0.08)] border-l-4 border-l-[#000000] flex flex-col" data-testid="card-vert-imp">
            <CardContent className="p-8 flex-1 flex flex-col">
              <div className="mb-6">
                <p className="text-sm font-semibold uppercase tracking-widest text-[#7ad1e4] mb-2" data-i18n="vert_imp_label">
                  Social, Cultural & ESG
                </p>
                <h3 className="text-2xl font-bold text-black" data-i18n="vert_imp_title">
                  Creation Impacto
                </h3>
              </div>
              <p className="text-[#6b7280] mb-8 flex-1" data-i18n="vert_imp_text">
                Projetos que redefinem territórios, comunidades e narrativas sociais.
              </p>
              <span
                className="inline-flex items-center gap-2 text-[#7ad1e4] font-semibold hover:gap-3 transition-all cursor-pointer"
                data-i18n="vert_imp_cta"
                onClick={() => navigateTo('/impacto')}
              >
                Ver Impacto
                <ArrowRight className="h-5 w-5" />
              </span>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
