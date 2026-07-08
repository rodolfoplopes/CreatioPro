import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getCurrentLang } from "@/i18n";
import { 
  Target, 
  MessageSquare, 
  Camera, 
  TrendingUp,
  Users,
  Building2,
  Briefcase,
  Mic,
  ArrowRight,
  Mail,
  Calendar,
  CheckCircle2
} from "lucide-react";

const deliverables = [
  { icon: Target, keyEN: "profile_deliverable_1", keyES: "profile_deliverable_1" },
  { icon: MessageSquare, keyEN: "profile_deliverable_2", keyES: "profile_deliverable_2" },
  { icon: Camera, keyEN: "profile_deliverable_3", keyES: "profile_deliverable_3" },
  { icon: TrendingUp, keyEN: "profile_deliverable_4", keyES: "profile_deliverable_4" },
  { icon: Briefcase, keyEN: "profile_deliverable_5", keyES: "profile_deliverable_5" },
];

const steps = [
  { number: "01", keyEN: "profile_step_1", keyES: "profile_step_1" },
  { number: "02", keyEN: "profile_step_2", keyES: "profile_step_2" },
  { number: "03", keyEN: "profile_step_3", keyES: "profile_step_3" },
  { number: "04", keyEN: "profile_step_4", keyES: "profile_step_4" },
];

const audience = [
  { icon: Briefcase, keyEN: "profile_audience_1", keyES: "profile_audience_1" },
  { icon: Building2, keyEN: "profile_audience_2", keyES: "profile_audience_2" },
  { icon: Building2, keyEN: "profile_audience_3", keyES: "profile_audience_3" },
  { icon: Users, keyEN: "profile_audience_4", keyES: "profile_audience_4" },
  { icon: Mic, keyEN: "profile_audience_5", keyES: "profile_audience_5" },
];

const packages = ["Foundation", "Executive", "Signature"];

export default function CreationProfile() {
  const [, setLocation] = useLocation();
  const [isAllowed, setIsAllowed] = useState(false);

  useEffect(() => {
    const checkLanguage = () => {
      const lang = getCurrentLang();
      if (lang === 'pt') {
        setLocation('/');
      } else {
        setIsAllowed(true);
      }
    };
    
    checkLanguage();
    const interval = setInterval(checkLanguage, 500);
    setTimeout(() => clearInterval(interval), 2000);
    
    return () => clearInterval(interval);
  }, [setLocation]);

  if (!isAllowed) {
    return null;
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center hero-gradient-main overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-ouro/5 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <Badge 
              className="mb-6 bg-ouro/10 text-ouro border-ouro/30 hover:bg-ouro/20"
              data-testid="badge-signature"
            >
              <span data-i18n="profile_badge">Signature Product</span>
            </Badge>
            
            <h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight"
              data-testid="text-profile-title"
            >
              Creation Profile
            </h1>
            
            <p 
              className="text-xl sm:text-2xl text-white/90 mb-4 font-light leading-relaxed"
              data-i18n="profile_hero_subtitle"
              data-testid="text-profile-subtitle"
            >
              Strategic positioning, narrative construction and image architecture for executives and high-impact leaders.
            </p>
            
            <p 
              className="text-lg text-ouro mb-10"
              data-i18n="profile_hero_supporting"
              data-testid="text-profile-supporting"
            >
              We build clarity, authority and presence before execution.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="mailto:profile@creation-pro.com">
                <Button 
                  size="lg" 
                  className="bg-ouro text-petroleo-dark hover:bg-ouro/90 font-semibold px-8"
                  data-testid="button-profile-email"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  <span data-i18n="profile_cta_email">Email us</span>
                </Button>
              </a>
              <a href="/contato">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white/30 text-white hover:bg-white/10 font-semibold px-8"
                  data-testid="button-profile-call"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  <span data-i18n="profile_cta_call">Book a call</span>
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What is Creation Profile */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 
              className="text-3xl sm:text-4xl font-bold text-foreground mb-8"
              data-i18n="profile_what_title"
              data-testid="text-what-title"
            >
              What is Creation Profile
            </h2>
            <p 
              className="text-lg text-muted-foreground leading-relaxed"
              data-i18n="profile_what_text"
              data-testid="text-what-description"
            >
              Creation Profile is a premium strategic product focused on building executive profile, narrative and positioning. We don't start with content. We start with research, diagnosis and strategic intent — then we execute with precision.
            </p>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-20 bg-[#f4f6fa]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 
            className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-12"
            data-i18n="profile_get_title"
            data-testid="text-get-title"
          >
            What you get
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {deliverables.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card 
                  key={index} 
                  className="bg-white border-[rgba(15,23,42,0.12)] hover:border-ouro/40 transition-colors"
                  data-testid={`card-deliverable-${index}`}
                >
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 bg-ouro/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="h-6 w-6 text-ouro" />
                    </div>
                    <p 
                      className="text-foreground font-medium"
                      data-i18n={item.keyEN}
                    >
                      {[
                        "Strategic Positioning Diagnosis",
                        "Executive Narrative System",
                        "Personal Image & Communication Architecture",
                        "Signature Content Direction",
                        "Investor-Ready Profile Assets"
                      ][index]}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works - Timeline Infographic */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 
            className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-16"
            data-i18n="profile_how_title"
            data-testid="text-how-title"
          >
            How it works
          </h2>
          
          {/* Timeline Container */}
          <div className="relative">
            {/* Horizontal Line - Hidden on mobile */}
            <div className="hidden lg:block absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-ouro to-transparent" />
            
            {/* Timeline Steps */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
              {steps.map((step, index) => (
                <div 
                  key={index} 
                  className="relative flex flex-col items-center text-center"
                  data-testid={`step-${index}`}
                >
                  {/* Timeline Node */}
                  <div className="relative z-10 w-16 h-16 rounded-full bg-gradient-to-br from-petroleo to-petroleo-dark flex items-center justify-center mb-6 shadow-lg border-4 border-ouro/30">
                    <span className="text-xl font-bold text-ouro">{step.number}</span>
                  </div>
                  
                  {/* Connector Line - Mobile/Tablet */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden absolute top-16 left-1/2 w-0.5 h-8 bg-ouro/30 -translate-x-1/2" />
                  )}
                  
                  {/* Step Content */}
                  <div className="bg-[#f4f6fa] p-4 w-full border border-ouro/10 hover:border-ouro/30 transition-colors">
                    <p 
                      className="text-base font-semibold text-foreground leading-tight"
                      data-i18n={step.keyEN}
                    >
                      {[
                        "Diagnostic & Research",
                        "Strategy & Narrative",
                        "Production Direction",
                        "Publishing Rhythm & Optimization"
                      ][index]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-20 bg-[#f4f6fa]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 
            className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-12"
            data-i18n="profile_who_title"
            data-testid="text-who-title"
          >
            Who it's for
          </h2>
          
          <div className="max-w-2xl mx-auto">
            <div className="space-y-4">
              {audience.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={index} 
                    className="flex items-center gap-4 p-4 bg-background border border-ouro/10"
                    data-testid={`audience-${index}`}
                  >
                    <CheckCircle2 className="h-5 w-5 text-ouro flex-shrink-0" />
                    <p 
                      className="text-foreground"
                      data-i18n={item.keyEN}
                    >
                      {[
                        "Executives & C-Level",
                        "Founders & Entrepreneurs",
                        "Real Estate Leaders",
                        "Investors & Family Offices",
                        "Public figures and speakers"
                      ][index]}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 
            className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-12"
            data-i18n="profile_packages_title"
            data-testid="text-packages-title"
          >
            Engagement models
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            {packages.map((pkg, index) => (
              <Card 
                key={index} 
                className={`text-center border-2 bg-white ${
                  index === 2 
                    ? 'border-ouro bg-ouro/5' 
                    : 'border-[rgba(15,23,42,0.12)]'
                }`}
                data-testid={`card-package-${index}`}
              >
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-foreground">{pkg}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <a href="mailto:profile@creation-pro.com">
              <Button 
                size="lg" 
                className="bg-ouro text-petroleo-dark hover:bg-ouro/90 font-semibold px-8"
                data-testid="button-request-availability"
              >
                <span data-i18n="profile_packages_cta">Request availability</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 cta-gradient">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 
            className="text-3xl sm:text-4xl font-bold text-white mb-8 max-w-2xl mx-auto leading-tight"
            data-i18n="profile_final_title"
            data-testid="text-final-title"
          >
            Your profile is already speaking. Let's make sure it's saying the right thing.
          </h2>
          
          <a href="mailto:profile@creation-pro.com">
            <Button 
              size="lg" 
              className="bg-ouro text-petroleo-dark hover:bg-ouro/90 font-semibold px-10"
              data-testid="button-final-cta"
            >
              <Mail className="mr-2 h-5 w-5" />
              <span data-i18n="profile_cta_email">Email us</span>
            </Button>
          </a>
        </div>
      </section>
    </Layout>
  );
}
