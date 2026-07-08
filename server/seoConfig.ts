export type SupportedLang = 'en' | 'es' | 'pt';

interface SEOConfig {
  title: string;
  description: string;
  image?: string;
  imageWidth?: number;
  imageHeight?: number;
  jsonLd?: object;
}

interface PageSEO {
  [lang: string]: SEOConfig;
}

const baseUrl = 'https://creation-pro.com';
const defaultImage = '/og-image-default.png';

const creatorOpsRioJsonLd = {
  en: {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Creator Ops Rio",
    "provider": {
      "@type": "Organization",
      "name": "Creation Pro",
      "url": baseUrl,
    },
    "description": "Complete executive production for international creators and brands shooting in Rio de Janeiro. Trilingual team, 150+ premium locations, turnkey local operation.",
    "areaServed": {
      "@type": "City",
      "name": "Rio de Janeiro",
    },
    "serviceType": "Executive Production",
    "url": `${baseUrl}/en/producoes/creator-ops-rio`,
    "image": `${baseUrl}/og-creator-ops-rio.png`,
    "offers": {
      "@type": "Offer",
      "priceCurrency": "BRL",
      "availability": "https://schema.org/InStock",
    },
  },
  es: {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Creator Ops Rio",
    "provider": {
      "@type": "Organization",
      "name": "Creation Pro",
      "url": baseUrl,
    },
    "description": "Producción ejecutiva completa para creadores y marcas internacionales que graban en Río de Janeiro. Equipo trilingüe, 150+ ubicaciones premium, operación local llave en mano.",
    "areaServed": {
      "@type": "City",
      "name": "Río de Janeiro",
    },
    "serviceType": "Producción Ejecutiva",
    "url": `${baseUrl}/es/producoes/creator-ops-rio`,
    "image": `${baseUrl}/og-creator-ops-rio.png`,
    "offers": {
      "@type": "Offer",
      "priceCurrency": "BRL",
      "availability": "https://schema.org/InStock",
    },
  },
  pt: {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Creator Ops Rio",
    "provider": {
      "@type": "Organization",
      "name": "Creation Pro",
      "url": baseUrl,
    },
    "description": "Você chega com o roteiro e o core criativo. A gente cuida da operação local no Rio: logística, locações, fornecedores, segurança, equipe e execução ponta a ponta.",
    "areaServed": {
      "@type": "City",
      "name": "Rio de Janeiro",
    },
    "serviceType": "Produção Executiva",
    "url": `${baseUrl}/pt/producoes/creator-ops-rio`,
    "image": `${baseUrl}/og-creator-ops-rio.png`,
    "offers": {
      "@type": "Offer",
      "priceCurrency": "BRL",
      "availability": "https://schema.org/InStock",
    },
  },
};

export const seoConfig: Record<string, PageSEO> = {
  '/': {
    en: {
      title: 'Creation Pro | Clarity and Creativity to Make it Happen',
      description: 'Strategic consulting for Operations, Productions, and Impact. We bring clarity and creativity to help businesses execute with excellence.',
      image: defaultImage,
      imageWidth: 1200,
      imageHeight: 630,
    },
    es: {
      title: 'Creation Pro | Claridad y Creatividad para Hacer que Suceda',
      description: 'Consultoría estratégica para Operaciones, Producciones e Impacto. Aportamos claridad y creatividad para ayudar a las empresas a ejecutar con excelencia.',
      image: defaultImage,
      imageWidth: 1200,
      imageHeight: 630,
    },
    pt: {
      title: 'Creation Pro | Clareza e Criatividade para Fazer Acontecer',
      description: 'Consultoria estratégica para Operações, Produções e Impacto. Trazemos clareza e criatividade para ajudar empresas a executar com excelência.',
      image: defaultImage,
      imageWidth: 1200,
      imageHeight: 630,
    },
  },
  '/quem-somos': {
    en: {
      title: 'About Us | Creation Pro',
      description: 'Learn about our team, values, and mission. We combine strategy and execution to deliver exceptional results.',
      image: defaultImage,
      imageWidth: 1200,
      imageHeight: 630,
    },
    es: {
      title: 'Quiénes Somos | Creation Pro',
      description: 'Conoce nuestro equipo, valores y misión. Combinamos estrategia y ejecución para entregar resultados excepcionales.',
      image: defaultImage,
      imageWidth: 1200,
      imageHeight: 630,
    },
    pt: {
      title: 'Quem Somos | Creation Pro',
      description: 'Conheça nossa equipe, valores e missão. Combinamos estratégia e execução para entregar resultados excepcionais.',
      image: defaultImage,
      imageWidth: 1200,
      imageHeight: 630,
    },
  },
  '/servicos': {
    en: {
      title: 'Services | Creation Pro',
      description: 'Explore our service verticals: OPS, Productions, and Impact. Complete solutions for your business.',
      image: defaultImage,
      imageWidth: 1200,
      imageHeight: 630,
    },
    es: {
      title: 'Servicios | Creation Pro',
      description: 'Explora nuestras verticales de servicio: OPS, Producciones e Impacto. Soluciones completas para tu negocio.',
      image: defaultImage,
      imageWidth: 1200,
      imageHeight: 630,
    },
    pt: {
      title: 'Serviços | Creation Pro',
      description: 'Explore nossas verticais de serviço: OPS, Produções e Impacto. Soluções completas para seu negócio.',
      image: defaultImage,
      imageWidth: 1200,
      imageHeight: 630,
    },
  },
  '/producoes': {
    en: {
      title: 'Productions | Creation Pro',
      description: 'Premium production services for content creators, brands, and agencies. From concept to execution.',
      image: defaultImage,
      imageWidth: 1200,
      imageHeight: 630,
    },
    es: {
      title: 'Producciones | Creation Pro',
      description: 'Servicios de producción premium para creadores de contenido, marcas y agencias. Del concepto a la ejecución.',
      image: defaultImage,
      imageWidth: 1200,
      imageHeight: 630,
    },
    pt: {
      title: 'Produções | Creation Pro',
      description: 'Serviços de produção premium para criadores de conteúdo, marcas e agências. Do conceito à execução.',
      image: defaultImage,
      imageWidth: 1200,
      imageHeight: 630,
    },
  },
  '/producoes/creator-ops-rio': {
    en: {
      title: 'Creator Ops Rio | Executive Production in Rio de Janeiro',
      description: 'Complete executive production for international creators and brands in Rio de Janeiro. Trilingual team, 150+ premium locations, turnkey operation. You Create. We Execute.',
      image: '/og-creator-ops-rio.png',
      imageWidth: 1200,
      imageHeight: 630,
      jsonLd: creatorOpsRioJsonLd.en,
    },
    es: {
      title: 'Creator Ops Rio | Producción Ejecutiva en Río de Janeiro',
      description: 'Producción ejecutiva completa para creadores y marcas internacionales en Río de Janeiro. Equipo trilingüe, 150+ ubicaciones premium, operación llave en mano. Tú Creas. Nosotros Ejecutamos.',
      image: '/og-creator-ops-rio.png',
      imageWidth: 1200,
      imageHeight: 630,
      jsonLd: creatorOpsRioJsonLd.es,
    },
    pt: {
      title: 'Creator Ops Rio | Produção executiva local para creators e marcas no Rio',
      description: 'Você chega com o roteiro e o core criativo. A gente cuida da operação local no Rio: logística, locações, fornecedores, segurança, equipe e execução ponta a ponta.',
      image: '/og-creator-ops-rio.png',
      imageWidth: 1200,
      imageHeight: 630,
      jsonLd: creatorOpsRioJsonLd.pt,
    },
  },
  '/impacto': {
    en: {
      title: 'Impact | Creation Pro',
      description: 'Social impact programs and ESG initiatives. Creating positive change through strategic execution.',
      image: defaultImage,
      imageWidth: 1200,
      imageHeight: 630,
    },
    es: {
      title: 'Impacto | Creation Pro',
      description: 'Programas de impacto social e iniciativas ESG. Creando cambio positivo a través de ejecución estratégica.',
      image: defaultImage,
      imageWidth: 1200,
      imageHeight: 630,
    },
    pt: {
      title: 'Impacto | Creation Pro',
      description: 'Programas de impacto social e iniciativas ESG. Criando mudança positiva através de execução estratégica.',
      image: defaultImage,
      imageWidth: 1200,
      imageHeight: 630,
    },
  },
  '/metodo': {
    en: {
      title: 'Method | Creation Pro',
      description: 'Our proven 6-step methodology for delivering results with clarity and efficiency.',
      image: defaultImage,
      imageWidth: 1200,
      imageHeight: 630,
    },
    es: {
      title: 'Método | Creation Pro',
      description: 'Nuestra metodología probada de 6 pasos para entregar resultados con claridad y eficiencia.',
      image: defaultImage,
      imageWidth: 1200,
      imageHeight: 630,
    },
    pt: {
      title: 'Método | Creation Pro',
      description: 'Nossa metodologia comprovada de 6 etapas para entregar resultados com clareza e eficiência.',
      image: defaultImage,
      imageWidth: 1200,
      imageHeight: 630,
    },
  },
  '/contato': {
    en: {
      title: 'Contact | Creation Pro',
      description: 'Get in touch with our team. Schedule a free consultation and discover how we can help your business.',
      image: defaultImage,
      imageWidth: 1200,
      imageHeight: 630,
    },
    es: {
      title: 'Contacto | Creation Pro',
      description: 'Ponte en contacto con nuestro equipo. Agenda una consulta gratuita y descubre cómo podemos ayudar a tu negocio.',
      image: defaultImage,
      imageWidth: 1200,
      imageHeight: 630,
    },
    pt: {
      title: 'Contato | Creation Pro',
      description: 'Entre em contato com nossa equipe. Agende uma consultoria gratuita e descubra como podemos ajudar seu negócio.',
      image: defaultImage,
      imageWidth: 1200,
      imageHeight: 630,
    },
  },
  '/profile': {
    en: {
      title: 'Creation Profile | Creation Pro',
      description: 'Discover how we help international businesses understand and navigate the Brazilian market.',
      image: defaultImage,
      imageWidth: 1200,
      imageHeight: 630,
    },
    es: {
      title: 'Creation Profile | Creation Pro',
      description: 'Descubre cómo ayudamos a empresas internacionales a entender y navegar el mercado brasileño.',
      image: defaultImage,
      imageWidth: 1200,
      imageHeight: 630,
    },
    pt: {
      title: 'Creation Profile | Creation Pro',
      description: 'Descubra como ajudamos empresas internacionais a entender e navegar o mercado brasileiro.',
      image: defaultImage,
      imageWidth: 1200,
      imageHeight: 630,
    },
  },
};

const defaultSEO: PageSEO = {
  en: {
    title: 'Creation Pro | Clarity and Creativity to Make it Happen',
    description: 'Strategic consulting for Operations, Productions, and Impact.',
    image: defaultImage,
    imageWidth: 1200,
    imageHeight: 630,
  },
  es: {
    title: 'Creation Pro | Claridad y Creatividad para Hacer que Suceda',
    description: 'Consultoría estratégica para Operaciones, Producciones e Impacto.',
    image: defaultImage,
    imageWidth: 1200,
    imageHeight: 630,
  },
  pt: {
    title: 'Creation Pro | Clareza e Criatividade para Fazer Acontecer',
    description: 'Consultoria estratégica para Operações, Produções e Impacto.',
    image: defaultImage,
    imageWidth: 1200,
    imageHeight: 630,
  },
};

export function getSEOForPath(path: string): { lang: SupportedLang; seo: SEOConfig; canonicalUrl: string } {
  const langMatch = path.match(/^\/(en|es|pt)(\/.*)?$/);
  const lang: SupportedLang = langMatch ? (langMatch[1] as SupportedLang) : 'en';
  const cleanPath = langMatch && langMatch[2] ? langMatch[2] : '/';
  
  const pageConfig = seoConfig[cleanPath] || defaultSEO;
  const seo = pageConfig[lang] || pageConfig['en'] || defaultSEO['en'];
  
  const canonicalUrl = `${baseUrl}/${lang}${cleanPath === '/' ? '' : cleanPath}`;
  
  return { lang, seo, canonicalUrl };
}

export function generateOGMetaTags(path: string): string {
  const { lang, seo, canonicalUrl } = getSEOForPath(path);
  const imageUrl = seo.image?.startsWith('http') ? seo.image : `${baseUrl}${seo.image}`;
  const imageWidth = seo.imageWidth || 1200;
  const imageHeight = seo.imageHeight || 630;

  const jsonLdBlock = seo.jsonLd
    ? `<script type="application/ld+json">${JSON.stringify(seo.jsonLd)}</script>`
    : '';
  
  return `
    <meta name="description" content="${escapeHtml(seo.description)}" />
    <link rel="canonical" href="${canonicalUrl}" />
    <title>${escapeHtml(seo.title)}</title>
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Creation Pro" />
    <meta property="og:locale" content="${getLocale(lang)}" />
    <meta property="og:url" content="${canonicalUrl}" />
    <meta property="og:title" content="${escapeHtml(seo.title)}" />
    <meta property="og:description" content="${escapeHtml(seo.description)}" />
    <meta property="og:image" content="${imageUrl}" />
    <meta property="og:image:width" content="${imageWidth}" />
    <meta property="og:image:height" content="${imageHeight}" />
    <meta property="og:image:alt" content="${escapeHtml(seo.title)}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(seo.title)}" />
    <meta name="twitter:description" content="${escapeHtml(seo.description)}" />
    <meta name="twitter:image" content="${imageUrl}" />
    <meta name="twitter:image:alt" content="${escapeHtml(seo.title)}" />
    ${jsonLdBlock}
  `;
}

function getLocale(lang: SupportedLang): string {
  switch (lang) {
    case 'en': return 'en_US';
    case 'es': return 'es_ES';
    case 'pt': return 'pt_BR';
    default: return 'en_US';
  }
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
