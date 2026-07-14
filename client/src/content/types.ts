// ============================================================================
// CONTRATO DE CONTEUDO
// pt.ts, en.ts e es.ts implementam este shape.
// Adicionou chave aqui? O TypeScript obriga os 3 idiomas a terem.
// Divergencia entre linguas passa a ser impossivel.
//
// TAXONOMIA OFICIAL:
//   Creation OPS       -> o METODO (framework de 90 dias)
//   Creation Producoes -> vertical de conteudo, eventos, campanhas
//   Creation Impacto   -> vertical social, cultural, ESG
// ============================================================================

export interface Phase {
  number: string;
  label: string;
  title: string;
  description: string;
  deliverables: string[];
}

export interface Vertical {
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  linkLabel: string;
}

export interface ServiceDetail {
  title: string;
  subtitle: string;
  solves: string;
  delivers: string;
  result: string;
}

export interface TitledItem {
  title: string;
  description: string;
}

export interface LinkItem {
  label: string;
  href: string;
}

export interface CaseResult {
  value: string;
  label: string;
}

export interface CaseStudy {
  eyebrow: string;
  title: string;
  client: string;
  problem: string;
  action: string;
  results: CaseResult[];
  image: string;
}

export interface Content {
  brand: {
    name: string;
    microcopy: string;
    footerTagline: string;
    locations: string;
  };
  nav: {
    home: string;
    about: string;
    services: string;
    method: string;
    productions: string;
    impact: string;
    contact: string;
  };
  cta: {
    primary: string;
    secondary: string;
    href: string;
    methodHref: string;
  };
  labels: {
    solves: string;
    delivers: string;
    result: string;
    caseProblem: string;
    caseAction: string;
  };
  hero: {
    headline: string;
    subheadline: string;
    proof: string;
  };
  whatWeDo: {
    title: string;
    description: string;
    subtext: string;
    pillars: TitledItem[];
  };
  verticals: {
    title: string;
    subtitle: string;
    items: Vertical[];
  };
  method: {
    badge: string;
    title: string;
    subtitle: string;
    description: string;
    phases: Phase[];
    result: string;
    howWeWork: { title: string; items: string[] };
  };
  targetAudience: {
    title: string;
    subtitle: string;
    audiences: TitledItem[];
  };
  about: {
    hero: { title: string; subtitle: string };
    mission: { title: string; text: string };
    vision: { title: string; text: string };
    values: { title: string; subtitle: string; items: TitledItem[] };
    whatWeDontDo: { title: string; items: string[]; conclusion: string };
    niche: { title: string; text: string };
    differentiator: { title: string; text: string };
    partnersTitle: string;
    manifesto: {
      title: string;
      paragraphs: string[];
      closing: string;
      signature: string;
    };
  };
  services: {
    title: string;
    subtitle: string;
    methodNote: string;
    opsLinkLabel: string;
    items: ServiceDetail[];
    doubt: { title: string; description: string };
  };
  productions: {
    hero: { title: string; subtitle: string };
    servicesTitle: string;
    mediaTitle: string;
    services: TitledItem[];
    creatorOps: {
      eyebrow: string;
      title: string;
      description: string;
      linkLabel: string;
      href: string;
    };
  };
  impact: {
    hero: { title: string; subtitle: string };
    approach: { title: string; subtitle: string; items: TitledItem[] };
    offerings: TitledItem[];
    cases: { title: string; items: CaseStudy[] };
    audience: { title: string; items: TitledItem[] };
    territoryPolicy: { title: string; items: string[] };
    finalCta: { title: string; subtitle: string };
  };
  contact: {
    title: string;
    description: string;
    form: {
      name: string;
      namePlaceholder: string;
      email: string;
      emailPlaceholder: string;
      organization: string;
      organizationPlaceholder: string;
      projectType: string;
      projectTypePlaceholder: string;
      projectTypes: string[];
      message: string;
      messagePlaceholder: string;
      submit: string;
      sending: string;
    };
    aside: {
      title: string;
      subtitle: string;
      alternativesTitle: string;
      email: string;
      whatsapp: string;
      whatsappNumber: string;
      note: string;
    };
  };
  footer: {
    description: string;
    locations: string;
    companyTitle: string;
    companyLinks: LinkItem[];
    solutionsTitle: string;
    solutionsLinks: LinkItem[];
    copyright: string;
  };
}
