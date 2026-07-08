import { Link } from "wouter";
import { ArrowRight, Globe, MapPin, Clock, FileCheck } from "lucide-react";

import locationImg1 from "@assets/museu-do-amanha_1767542875268.jpg";
import locationImg2 from "@assets/paraty_1767542875270.jpg";
import locationImg3 from "@assets/praias-barra-da-tijuca_1767542875271.webp";
import locationImg4 from "@assets/ceu-na-terra.jpg";

const features = [
  { icon: Globe, labelKey: "cop_feature_1", label: "Equipe Trilíngue (PT/EN/ES)" },
  { icon: MapPin, labelKey: "cop_feature_2", label: "150+ Locações Premium" },
  { icon: Clock, labelKey: "cop_feature_3", label: "Operação 24/7" },
  { icon: FileCheck, labelKey: "cop_feature_4", label: "0% Burocracia" },
];

export default function CreatorOpsPreview() {
  return (
    <section className="py-20 md:py-28 bg-[#000000]" id="creator-ops-preview">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span 
              className="inline-block px-4 py-1.5 text-xs font-bold uppercase tracking-widest bg-[#FFD700] text-black mb-6"
              data-i18n="cop_badge"
            >
              Novo Serviço
            </span>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Creator Ops Rio
            </h2>
            
            <p 
              className="text-xl md:text-2xl text-[#7ad1e4] italic mb-6"
              data-i18n="cop_tagline"
            >
              Você Cria. Nós Executamos.
            </p>
            
            <p 
              className="text-white/70 text-lg leading-relaxed mb-8"
              data-i18n="cop_description"
            >
              Produção executiva completa para creators e marcas internacionais no Rio de Janeiro. Da consultoria estratégica à execução impecável — sem stress logístico.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-10">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 text-white/80"
                >
                  <feature.icon className="h-5 w-5 text-[#7ad1e4] flex-shrink-0" />
                  <span className="text-sm" data-i18n={feature.labelKey}>{feature.label}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/producoes/creator-ops-rio">
                <span 
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#00D98E] text-black font-semibold hover:bg-[#00D98E]/90 transition-colors cursor-pointer"
                  data-testid="button-creator-ops-cta"
                  data-i18n="cop_cta_primary"
                >
                  Conhecer Creator Ops
                  <ArrowRight className="h-5 w-5" />
                </span>
              </Link>
              <Link href="/contato">
                <span 
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-[#7ad1e4] text-[#7ad1e4] font-semibold hover:bg-[#7ad1e4]/10 transition-colors cursor-pointer"
                  data-testid="button-creator-ops-contact"
                  data-i18n="cop_cta_secondary"
                >
                  Agendar Consultoria
                  <ArrowRight className="h-5 w-5" />
                </span>
              </Link>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-square relative overflow-hidden group">
              <img src={locationImg1} alt="Museu do Amanhã" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-[#003c64]/40 group-hover:bg-[#003c64]/20 transition-colors flex items-center justify-center">
                <MapPin className="h-12 w-12 text-[#FFD700] drop-shadow-lg" />
              </div>
            </div>
            <div className="aspect-square relative overflow-hidden group">
              <img src={locationImg2} alt="Paraty" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-[#003c64]/40 group-hover:bg-[#003c64]/20 transition-colors flex items-center justify-center">
                <MapPin className="h-12 w-12 text-[#7ad1e4] drop-shadow-lg" />
              </div>
            </div>
            <div className="aspect-square relative overflow-hidden group">
              <img src={locationImg3} alt="Praias da Barra" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-[#003c64]/40 group-hover:bg-[#003c64]/20 transition-colors flex items-center justify-center">
                <MapPin className="h-12 w-12 text-[#7ad1e4] drop-shadow-lg" />
              </div>
            </div>
            <div className="aspect-square relative overflow-hidden group">
              <img src={locationImg4} alt="Carnaval" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-[#003c64]/40 group-hover:bg-[#003c64]/20 transition-colors flex items-center justify-center">
                <MapPin className="h-12 w-12 text-[#FFD700] drop-shadow-lg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
