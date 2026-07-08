import { Card, CardContent } from "@/components/ui/card";
import { Layers, Target, Cog } from "lucide-react";
import { content } from "@/lib/content";

export default function WhatWeDoSection() {
  return (
    <section className="py-20 md:py-28 bg-white" data-testid="section-what-we-do" data-first-content="true">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6 tracking-tight" data-i18n="what_we_do_title">
            {content.whatWeDo.title}
          </h2>
          <p className="text-xl text-[#374151] font-medium mb-4" data-i18n="what_we_do_description">
            {content.whatWeDo.description}
          </p>
          <p className="text-lg text-[#6b7280]" data-i18n="what_we_do_subtext">
            {content.whatWeDo.subtext}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="text-center bg-white border border-[rgba(0,0,0,0.08)] border-l-4 border-l-[#000000]" data-testid="card-what-we-do-1">
            <CardContent className="p-8 md:p-10">
              <div className="w-14 h-14 mx-auto bg-[#000000]/10 flex items-center justify-center mb-6">
                <Layers className="h-7 w-7 text-[#000000]" />
              </div>
              <h3 className="text-xl font-semibold text-black mb-3" data-i18n="what_we_do_card_1_title">
                Estrutura
              </h3>
              <p className="text-[#6b7280]" data-i18n="what_we_do_card_1_text">
                Criamos processos claros, papéis definidos e fluxos que funcionam.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center bg-white border border-[rgba(0,0,0,0.08)] border-l-4 border-l-[#7ad1e4]" data-testid="card-what-we-do-2">
            <CardContent className="p-8 md:p-10">
              <div className="w-14 h-14 mx-auto bg-[#7ad1e4]/10 flex items-center justify-center mb-6">
                <Target className="h-7 w-7 text-[#7ad1e4]" />
              </div>
              <h3 className="text-xl font-semibold text-black mb-3" data-i18n="what_we_do_card_2_title">
                Clareza
              </h3>
              <p className="text-[#6b7280]" data-i18n="what_we_do_card_2_text">
                Transformamos confusão em direção. Cada um sabe o que fazer.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center bg-white border border-[rgba(0,0,0,0.08)] border-l-4 border-l-[#000000]" data-testid="card-what-we-do-3">
            <CardContent className="p-8 md:p-10">
              <div className="w-14 h-14 mx-auto bg-[#000000]/10 flex items-center justify-center mb-6">
                <Cog className="h-7 w-7 text-[#000000]" />
              </div>
              <h3 className="text-xl font-semibold text-black mb-3" data-i18n="what_we_do_card_3_title">
                Ritmo
              </h3>
              <p className="text-[#6b7280]" data-i18n="what_we_do_card_3_text">
                Instalamos cadência de trabalho. Entregas acontecem com previsibilidade.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
