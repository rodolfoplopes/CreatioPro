import { Link } from "wouter";
import Layout from "@/components/Layout";
import { ArrowRight, Camera, Briefcase, Crown, MessageSquare, MapPin, Video, CheckCircle, Check, X, Star, Globe, Users, Zap, Lock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

import panoramicImg from "@assets/muhammed-ballan-oO_uKmr_biQ-unsplash_1767535860509.jpg";
import galleryImg1 from "@assets/agustin-diaz-gargiulo-GTLJklnjn-E-unsplash_1767535792240.jpg";
import galleryImg2 from "@assets/davi-costa-cG2JQnPfmAw-unsplash_1767535792241.jpg";
import galleryImg3 from "@assets/guilherme-gabrielli-5Dzv5A0xKpk-unsplash_1767535792243.jpg";
import galleryImg4 from "@assets/marco-bicca-K4zlB5tSqtw-unsplash_1767535792246.jpg";
import galleryImg5 from "@assets/thales-botelho-de-sousa-9e0dAX1bUsA-unsplash_1767535792247.jpg";
import galleryImg6 from "@assets/johannes-mandle-FlVMi4RtHzI-unsplash_1767535792249.jpg";
import galleryImg7 from "@assets/jean-carlos-5C136TdzRO4-unsplash_1767535792251.jpg";
import galleryImg8 from "@assets/samuel-wesley-silva-KptMOrGBpHA-unsplash_1767536447214.jpg";

export default function CreatorOpsRio() {
  return (
    <Layout>
      <section className="relative min-h-[70vh] flex items-center bg-abyss">
        <div className="absolute inset-0 bg-gradient-to-r from-[#003c64]/90 to-[#000000]/80" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <nav className="mb-8">
            <span className="text-[#7ad1e4] text-sm">
              <Link href="/" className="hover:underline" data-i18n="nav_início">Início</Link>
              <span className="mx-2">&gt;</span>
              <Link href="/producoes" className="hover:underline" data-i18n="nav_producoes">Produções</Link>
              <span className="mx-2">&gt;</span>
              <span className="text-bone">Creator Ops Rio</span>
            </span>
          </nav>
          
          <span className="inline-block px-4 py-1.5 text-xs font-bold uppercase tracking-widest bg-[#FFD700] text-abyss mb-6" data-i18n="cop_hero_overline">
            Produção Executiva no Rio
          </span>
          
          <h1 className="text-5xl md:text-7xl font-bold text-bone mb-4">
            Creator Ops Rio
          </h1>
          
          <p className="text-2xl md:text-3xl text-[#7ad1e4] italic mb-6" data-i18n="cop_tagline">
            Você Cria. Nós Executamos.
          </p>
          
          <p className="text-bone/70 text-lg max-w-2xl mb-10 leading-relaxed" data-i18n="cop_hero_desc">
            Produção executiva completa para creators e marcas internacionais no Rio de Janeiro. Da consultoria estratégica à execução impecável.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact-form" data-testid="link-cop-hero-cta1">
              <span className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#00D98E] text-abyss font-semibold hover:bg-[#00D98E]/90 transition-colors cursor-pointer" data-i18n="cop_hero_cta1">
                Agendar Consultoria Gratuita
                <ArrowRight className="h-5 w-5" />
              </span>
            </a>
            <a href="#services" data-testid="link-cop-hero-cta2">
              <span className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-signal text-[#7ad1e4] font-semibold hover:bg-signal/10 transition-colors cursor-pointer" data-i18n="cop_hero_cta2">
                Ver Serviços
                <ArrowRight className="h-5 w-5" />
              </span>
            </a>
          </div>
        </div>
      </section>

      <section className="w-full h-[40vh] md:h-[50vh] relative overflow-hidden">
        <img 
          src={panoramicImg} 
          alt="Rio de Janeiro panoramic view" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/40 to-transparent" />
      </section>

      <section className="py-6 bg-[#003c64]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-bone/90 font-medium" data-i18n="cop_social_proof">
            Confiado por 150+ creators de 25 países
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-bone">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-[#003c64] p-8 md:p-12">
              <h3 className="text-2xl font-bold text-bone mb-8" data-i18n="cop_before_title">Antes</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <X className="h-5 w-5 text-[#FFD700] flex-shrink-0" />
                  <span className="text-bone/80" data-i18n="cop_problem_1">Barreira linguística e cultural</span>
                </div>
                <div className="flex items-center gap-3">
                  <X className="h-5 w-5 text-[#FFD700] flex-shrink-0" />
                  <span className="text-bone/80" data-i18n="cop_problem_2">Burocracia para autorizações</span>
                </div>
                <div className="flex items-center gap-3">
                  <X className="h-5 w-5 text-[#FFD700] flex-shrink-0" />
                  <span className="text-bone/80" data-i18n="cop_problem_3">Desconhecimento de locações</span>
                </div>
                <div className="flex items-center gap-3">
                  <X className="h-5 w-5 text-[#FFD700] flex-shrink-0" />
                  <span className="text-bone/80" data-i18n="cop_problem_4">Fornecedores não confiáveis</span>
                </div>
                <div className="flex items-center gap-3">
                  <X className="h-5 w-5 text-[#FFD700] flex-shrink-0" />
                  <span className="text-bone/80" data-i18n="cop_problem_5">Logística complexa</span>
                </div>
                <div className="flex items-center gap-3">
                  <X className="h-5 w-5 text-[#FFD700] flex-shrink-0" />
                  <span className="text-bone/80" data-i18n="cop_problem_6">Preocupações com segurança</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-[#00D98E] to-[#7ad1e4] p-8 md:p-12">
              <h3 className="text-2xl font-bold text-abyss mb-8" data-i18n="cop_after_title">Depois</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-[#003c64] flex-shrink-0" />
                  <span className="text-abyss/80" data-i18n="cop_solution_1">Equipe 100% trilíngue</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-[#003c64] flex-shrink-0" />
                  <span className="text-abyss/80" data-i18n="cop_solution_2">Todas autorizações resolvidas</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-[#003c64] flex-shrink-0" />
                  <span className="text-abyss/80" data-i18n="cop_solution_3">150+ locações mapeadas</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-[#003c64] flex-shrink-0" />
                  <span className="text-abyss/80" data-i18n="cop_solution_4">Network premium verificado</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-[#003c64] flex-shrink-0" />
                  <span className="text-abyss/80" data-i18n="cop_solution_5">Operação turnkey</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-[#003c64] flex-shrink-0" />
                  <span className="text-abyss/80" data-i18n="cop_solution_6">Segurança garantida</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 md:py-28 bg-bone">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-abyss mb-4" data-i18n="cop_packages_title">Pacotes de Serviço</h2>
            <p className="text-abyss/70" data-i18n="cop_packages_sub">Escolha o pacote ideal para seu projeto</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="relative bg-bone border border-abyss/14 overflow-hidden">
              <span className="absolute top-0 right-0 px-4 py-1 bg-[#FFD700] text-abyss text-xs font-bold uppercase" data-i18n="cop_popular">Mais Popular</span>
              <CardContent className="p-8">
                <Camera className="h-10 w-10 text-[#00D98E] mb-4" />
                <h3 className="text-2xl font-bold text-abyss mb-2">Content Sprint</h3>
                <p className="text-abyss/70 mb-1" data-i18n="cop_sprint_duration">3-5 dias</p>
                <p className="text-sm text-[#7ad1e4] mb-6" data-i18n="cop_sprint_ideal">Ideal: Creators & Influenciadores</p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-[#7ad1e4]" />
                    <span className="text-sm text-abyss/70" data-i18n="cop_sprint_inc_1">Consultoria pré-produção</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-[#7ad1e4]" />
                    <span className="text-sm text-abyss/70" data-i18n="cop_sprint_inc_2">Scout de locações</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-[#7ad1e4]" />
                    <span className="text-sm text-abyss/70" data-i18n="cop_sprint_inc_3">Equipe local completa</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-[#7ad1e4]" />
                    <span className="text-sm text-abyss/70" data-i18n="cop_sprint_inc_4">Transporte e logística</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-[#7ad1e4]" />
                    <span className="text-sm text-abyss/70" data-i18n="cop_sprint_inc_5">Autorizações e permissões</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-[#7ad1e4]" />
                    <span className="text-sm text-abyss/70" data-i18n="cop_sprint_inc_6">Suporte 24/7</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-[#7ad1e4]" />
                    <span className="text-sm text-abyss/70" data-i18n="cop_sprint_inc_7">Edição básica opcional</span>
                  </div>
                </div>
                                <a href="#contact-form" data-testid="link-cop-sprint-cta">
                  <span className="inline-flex w-full items-center justify-center gap-2 px-6 py-3 bg-[#00D98E] text-abyss font-semibold hover:bg-[#00D98E]/90 transition-colors cursor-pointer" data-i18n="cop_sprint_cta">
                    Solicitar Proposta
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </a>
              </CardContent>
            </Card>

            <Card className="bg-bone border border-abyss/14">
              <CardContent className="p-8">
                <Briefcase className="h-10 w-10 text-[#FFD700] mb-4" />
                <h3 className="text-2xl font-bold text-abyss mb-2">Brand Campaign</h3>
                <p className="text-abyss/70 mb-1" data-i18n="cop_brand_duration">1-2 semanas</p>
                <p className="text-sm text-[#7ad1e4] mb-6" data-i18n="cop_brand_ideal">Ideal: Marcas & Agências</p>
                <p className="text-sm text-[#7ad1e4] italic mb-4" data-i18n="cop_brand_plus">Tudo do Content Sprint +</p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-[#7ad1e4]" />
                    <span className="text-sm text-abyss/70" data-i18n="cop_brand_inc_1">Direção de arte</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-[#7ad1e4]" />
                    <span className="text-sm text-abyss/70" data-i18n="cop_brand_inc_2">Casting local</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-[#7ad1e4]" />
                    <span className="text-sm text-abyss/70" data-i18n="cop_brand_inc_3">Equipamento premium</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-[#7ad1e4]" />
                    <span className="text-sm text-abyss/70" data-i18n="cop_brand_inc_4">Pós-produção completa</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-[#7ad1e4]" />
                    <span className="text-sm text-abyss/70" data-i18n="cop_brand_inc_5">Relatório de entrega</span>
                  </div>
                </div>
                                <a href="#contact-form" data-testid="link-cop-brand-cta">
                  <span className="inline-flex w-full items-center justify-center gap-2 px-6 py-3 bg-[#003c64] text-bone font-semibold hover:bg-[#003c64]/90 transition-colors cursor-pointer" data-i18n="cop_brand_cta">
                    Falar com Especialista
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </a>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-[#003c64] to-[#000000] border border-signal">
              <CardContent className="p-8">
                <Crown className="h-10 w-10 text-[#FFD700] mb-4" />
                <h3 className="text-2xl font-bold text-bone mb-2">Business Tourism VIP</h3>
                <p className="text-bone/70 mb-1" data-i18n="cop_vip_duration">Personalizada</p>
                <p className="text-sm text-[#7ad1e4] mb-6" data-i18n="cop_vip_ideal">Ideal: Executivos & Investidores</p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-[#FFD700]" />
                    <span className="text-sm text-bone/80" data-i18n="cop_vip_inc_1">Concierge executivo dedicado</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-[#FFD700]" />
                    <span className="text-sm text-bone/80" data-i18n="cop_vip_inc_2">Transfers VIP aeroporto</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-[#FFD700]" />
                    <span className="text-sm text-bone/80" data-i18n="cop_vip_inc_3">Reservas restaurantes premium</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-[#FFD700]" />
                    <span className="text-sm text-bone/80" data-i18n="cop_vip_inc_4">Agenda de reuniões</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-[#FFD700]" />
                    <span className="text-sm text-bone/80" data-i18n="cop_vip_inc_5">Networking local</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-[#FFD700]" />
                    <span className="text-sm text-bone/80" data-i18n="cop_vip_inc_6">Suporte multilíngue 24/7</span>
                  </div>
                </div>
                                <a href="#contact-form" data-testid="link-cop-vip-cta">
                  <span className="inline-flex w-full items-center justify-center gap-2 px-6 py-3 bg-[#FFD700] text-abyss font-semibold hover:bg-[#FFD700]/90 transition-colors cursor-pointer" data-i18n="cop_vip_cta">
                    Agendar Conversa
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-bone">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-abyss mb-4" data-i18n="cop_process_title">Como Funciona</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="relative text-center">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-8xl font-bold text-[#FFD700]/20">1</div>
              <div className="relative z-10 pt-12">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#00D98E]/10 mb-4">
                  <MessageSquare className="h-8 w-8 text-[#00D98E]" />
                </div>
                <h3 className="text-lg font-bold text-abyss mb-2" data-i18n="cop_step_1_title">Briefing Estratégico</h3>
                <p className="text-abyss/70 text-sm" data-i18n="cop_step_1_desc">Entendemos seus objetivos e necessidades</p>
              </div>
            </div>
            <div className="relative text-center">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-8xl font-bold text-[#FFD700]/20">2</div>
              <div className="relative z-10 pt-12">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#00D98E]/10 mb-4">
                  <MapPin className="h-8 w-8 text-[#00D98E]" />
                </div>
                <h3 className="text-lg font-bold text-abyss mb-2" data-i18n="cop_step_2_title">Planejamento Detalhado</h3>
                <p className="text-abyss/70 text-sm" data-i18n="cop_step_2_desc">Roteiro, locações e cronograma</p>
              </div>
            </div>
            <div className="relative text-center">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-8xl font-bold text-[#FFD700]/20">3</div>
              <div className="relative z-10 pt-12">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#00D98E]/10 mb-4">
                  <Video className="h-8 w-8 text-[#00D98E]" />
                </div>
                <h3 className="text-lg font-bold text-abyss mb-2" data-i18n="cop_step_3_title">Execução Impecável</h3>
                <p className="text-abyss/70 text-sm" data-i18n="cop_step_3_desc">Produção profissional no Rio</p>
              </div>
            </div>
            <div className="relative text-center">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-8xl font-bold text-[#FFD700]/20">4</div>
              <div className="relative z-10 pt-12">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#00D98E]/10 mb-4">
                  <CheckCircle className="h-8 w-8 text-[#00D98E]" />
                </div>
                <h3 className="text-lg font-bold text-abyss mb-2" data-i18n="cop_step_4_title">Resultado Premium</h3>
                <p className="text-abyss/70 text-sm" data-i18n="cop_step_4_desc">Entrega com excelência</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#003c64]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-bone mb-4" data-i18n="cop_locations_title">Locações Exclusivas</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative group bg-abyss/30 p-6 border border-bone/14 hover:border-signal/50 transition-colors">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="text-xl font-semibold text-bone mb-2" data-i18n="cop_loc_1_name">Cristo Redentor</h3>
                  <span className="inline-block px-2 py-1 text-xs font-medium bg-[#FFD700] text-abyss" data-i18n="cop_loc_1_badge">Acesso VIP</span>
                </div>
                <MapPin className="h-6 w-6 text-[#00D98E]" />
              </div>
            </div>
            <div className="relative group bg-abyss/30 p-6 border border-bone/14 hover:border-signal/50 transition-colors">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="text-xl font-semibold text-bone mb-2" data-i18n="cop_loc_2_name">Praias Secretas</h3>
                  <span className="inline-block px-2 py-1 text-xs font-medium bg-[#FFD700] text-abyss" data-i18n="cop_loc_2_badge">Exclusivo</span>
                </div>
                <MapPin className="h-6 w-6 text-[#00D98E]" />
              </div>
            </div>
            <div className="relative group bg-abyss/30 p-6 border border-bone/14 hover:border-signal/50 transition-colors">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="text-xl font-semibold text-bone mb-2" data-i18n="cop_loc_3_name">Favelas Autênticas</h3>
                  <span className="inline-block px-2 py-1 text-xs font-medium bg-[#FFD700] text-abyss" data-i18n="cop_loc_3_badge">Segurança Garantida</span>
                </div>
                <MapPin className="h-6 w-6 text-[#00D98E]" />
              </div>
            </div>
            <div className="relative group bg-abyss/30 p-6 border border-bone/14 hover:border-signal/50 transition-colors">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="text-xl font-semibold text-bone mb-2" data-i18n="cop_loc_4_name">Arquitetura Colonial</h3>
                  <span className="inline-block px-2 py-1 text-xs font-medium bg-[#FFD700] text-abyss" data-i18n="cop_loc_4_badge">Histórico</span>
                </div>
                <MapPin className="h-6 w-6 text-[#00D98E]" />
              </div>
            </div>
            <div className="relative group bg-abyss/30 p-6 border border-bone/14 hover:border-signal/50 transition-colors">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="text-xl font-semibold text-bone mb-2" data-i18n="cop_loc_5_name">Natureza Tropical</h3>
                  <span className="inline-block px-2 py-1 text-xs font-medium bg-[#FFD700] text-abyss" data-i18n="cop_loc_5_badge">Preservado</span>
                </div>
                <MapPin className="h-6 w-6 text-[#00D98E]" />
              </div>
            </div>
            <div className="relative group bg-abyss/30 p-6 border border-bone/14 hover:border-signal/50 transition-colors">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="text-xl font-semibold text-bone mb-2" data-i18n="cop_loc_6_name">Rooftops Premium</h3>
                  <span className="inline-block px-2 py-1 text-xs font-medium bg-[#FFD700] text-abyss" data-i18n="cop_loc_6_badge">Vista 360°</span>
                </div>
                <MapPin className="h-6 w-6 text-[#00D98E]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-[#003c64]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-12 gap-2 md:gap-3">
            <div className="col-span-6 md:col-span-4 row-span-2">
              <img src={galleryImg1} alt="Cristo Redentor" className="w-full h-full object-cover" style={{ aspectRatio: '3/4' }} />
            </div>
            <div className="col-span-6 md:col-span-4">
              <img src={galleryImg2} alt="Bondinho" className="w-full h-full object-cover" style={{ aspectRatio: '4/3' }} />
            </div>
            <div className="col-span-6 md:col-span-4">
              <img src={galleryImg3} alt="Paraty" className="w-full h-full object-cover" style={{ aspectRatio: '4/3' }} />
            </div>
            <div className="col-span-6 md:col-span-4">
              <img src={galleryImg8} alt="Parque Lage" className="w-full h-full object-cover" style={{ aspectRatio: '4/3' }} />
            </div>
            <div className="col-span-6 md:col-span-4">
              <img src={galleryImg4} alt="Igreja Colonial" className="w-full h-full object-cover" style={{ aspectRatio: '4/3' }} />
            </div>
            <div className="col-span-6 md:col-span-4">
              <img src={galleryImg5} alt="Escadaria Selarón" className="w-full h-full object-cover" style={{ aspectRatio: '1/1' }} />
            </div>
            <div className="col-span-6 md:col-span-4">
              <img src={galleryImg6} alt="Praia de Ipanema" className="w-full h-full object-cover" style={{ aspectRatio: '16/9' }} />
            </div>
            <div className="col-span-6 md:col-span-4">
              <img src={galleryImg7} alt="Costa Verde" className="w-full h-full object-cover" style={{ aspectRatio: '16/9' }} />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-bone">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-abyss mb-4" data-i18n="cop_why_title">Por Que Escolher</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-[#FFD700]/20 flex items-center justify-center">
                <Camera className="h-6 w-6 text-[#FFD700]" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-abyss mb-1" data-i18n="cop_why_1_title">Especialização em Content Creators</h3>
                <p className="text-abyss/70 text-sm" data-i18n="cop_why_1_desc">Entendemos as necessidades únicas de creators digitais</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-[#FFD700]/20 flex items-center justify-center">
                <Globe className="h-6 w-6 text-[#FFD700]" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-abyss mb-1" data-i18n="cop_why_2_title">Equipe 100% Trilíngue</h3>
                <p className="text-abyss/70 text-sm" data-i18n="cop_why_2_desc">Comunicação fluente em português, inglês e espanhol</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-[#FFD700]/20 flex items-center justify-center">
                <MapPin className="h-6 w-6 text-[#FFD700]" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-abyss mb-1" data-i18n="cop_why_3_title">Conhecimento Local Profundo</h3>
                <p className="text-abyss/70 text-sm" data-i18n="cop_why_3_desc">Anos de experiência no mercado carioca</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-[#FFD700]/20 flex items-center justify-center">
                <Zap className="h-6 w-6 text-[#FFD700]" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-abyss mb-1" data-i18n="cop_why_4_title">Operação Ágil Sem Burocracia</h3>
                <p className="text-abyss/70 text-sm" data-i18n="cop_why_4_desc">Resolvemos todas as autorizações e permissões</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-[#FFD700]/20 flex items-center justify-center">
                <Users className="h-6 w-6 text-[#FFD700]" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-abyss mb-1" data-i18n="cop_why_5_title">Network Fornecedores Premium</h3>
                <p className="text-abyss/70 text-sm" data-i18n="cop_why_5_desc">Parceiros verificados e confiáveis</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-[#FFD700]/20 flex items-center justify-center">
                <Lock className="h-6 w-6 text-[#FFD700]" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-abyss mb-1" data-i18n="cop_why_6_title">Segurança e Discrição Garantidas</h3>
                <p className="text-abyss/70 text-sm" data-i18n="cop_why_6_desc">Protocolos rigorosos de segurança</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-abyss">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <Card className="bg-gradient-to-br from-[#003c64] to-[#000000] border border-signal/30 shadow-[0_0_30px_rgba(122,209,228,0.2)]">
              <CardContent className="p-8 md:p-12 text-center">
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-[#FFD700] fill-[#FFD700]" />
                  ))}
                </div>
                <blockquote className="text-xl md:text-2xl text-bone italic mb-8 leading-relaxed" data-i18n="cop_testimonial_quote">
                  "A Creator Ops transformou completamente nossa produção no Rio. Equipe incrível, locações perfeitas e zero stress."
                </blockquote>
                <div className="flex items-center justify-center gap-4 mb-8">
                  <div className="w-16 h-16 bg-[#00D98E] flex items-center justify-center">
                    <Users className="h-8 w-8 text-abyss" />
                  </div>
                  <div className="text-left">
                    <p className="text-bone font-semibold" data-i18n="cop_testimonial_author">Creator Internacional</p>
                    <p className="text-bone/60 text-sm">@creator.example</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-bone/14">
                  <div>
                    <p className="text-2xl font-bold text-[#7ad1e4]">15</p>
                    <p className="text-bone/60 text-sm" data-i18n="cop_stat_1">locações em 5 dias</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-[#7ad1e4]">50+</p>
                    <p className="text-bone/60 text-sm" data-i18n="cop_stat_2">peças de conteúdo</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-[#7ad1e4]">0</p>
                    <p className="text-bone/60 text-sm" data-i18n="cop_stat_3">imprevistos</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-[#7ad1e4]">100%</p>
                    <p className="text-bone/60 text-sm" data-i18n="cop_stat_4">satisfação</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact-form" className="py-20 md:py-28 bg-[#003c64]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-bone mb-6" data-i18n="cop_form_title">
                Pronto para Criar Conteúdo Premium no Rio?
              </h2>
              <p className="text-bone/70 text-lg mb-8" data-i18n="cop_form_sub">
                Preencha o formulário e nossa equipe entrará em contato em até 24 horas.
              </p>
            </div>
            
            <Card className="bg-bone/95">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-abyss mb-2" data-i18n="cop_form_name">Nome</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 border border-[rgba(0,0,0,0.12)] focus:border-signal focus:outline-none transition-colors"
                        data-testid="input-cop-name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-abyss mb-2">Email</label>
                      <input 
                        type="email" 
                        className="w-full px-4 py-3 border border-[rgba(0,0,0,0.12)] focus:border-signal focus:outline-none transition-colors"
                        data-testid="input-cop-email"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-abyss mb-2" data-i18n="cop_form_project_type">Tipo de Projeto</label>
                      <select 
                        className="w-full px-4 py-3 border border-[rgba(0,0,0,0.12)] focus:border-signal focus:outline-none transition-colors bg-bone"
                        data-testid="select-cop-project-type"
                      >
                        <option value="content-sprint">Content Sprint</option>
                        <option value="brand-campaign">Brand Campaign</option>
                        <option value="business-vip">Business Tourism VIP</option>
                        <option value="other" data-i18n="cop_form_other">Outro</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-abyss mb-2" data-i18n="cop_form_dates">Datas Planejadas</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 border border-[rgba(0,0,0,0.12)] focus:border-signal focus:outline-none transition-colors"
                        data-testid="input-cop-dates"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-abyss mb-2" data-i18n="cop_form_budget">Orçamento Estimado</label>
                    <select 
                      className="w-full px-4 py-3 border border-[rgba(0,0,0,0.12)] focus:border-signal focus:outline-none transition-colors bg-bone"
                      data-testid="select-cop-budget"
                    >
                      <option value="3-5k">$3,000 - $5,000 USD</option>
                      <option value="5-10k">$5,000 - $10,000 USD</option>
                      <option value="10-20k">$10,000 - $20,000 USD</option>
                      <option value="20k+">$20,000+ USD</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-abyss mb-2" data-i18n="cop_form_message">Mensagem</label>
                    <textarea 
                      rows={4}
                      className="w-full px-4 py-3 border border-[rgba(0,0,0,0.12)] focus:border-signal focus:outline-none transition-colors resize-none"
                      data-testid="textarea-cop-message"
                    />
                  </div>
                  
                  <button 
                    type="submit"
                    className="w-full px-6 py-4 bg-[#00D98E] text-abyss font-semibold hover:bg-[#00D98E]/90 transition-colors"
                    data-testid="button-cop-submit"
                    data-i18n="cop_form_submit"
                  >
                    Enviar Solicitação
                  </button>
                  
                  <p className="text-center text-abyss/70 text-sm" data-i18n="cop_form_response_time">
                    Resposta em até 24 horas
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
}
