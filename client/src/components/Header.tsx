import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X, ChevronDown } from "lucide-react";
import { content } from "@/lib/content";
import logoWhite from "@assets/site_logo_creation.png";
import { getCurrentLang } from "@/i18n";
import { getLangFromPath, getPathWithoutLang, supportedLangs, defaultLang, type SupportedLang } from "@/lib/lang";

const navLinks = [
  { href: "/", label: content.nav.home, i18nKey: "nav_início" },
  { href: "/quem-somos", label: content.nav.about, i18nKey: "nav_quem_somos" },
  { 
    label: content.nav.services,
    href: "/servicos",
    i18nKey: "nav_serviços",
    submenu: [
      { href: "/metodo", label: content.nav.method, i18nKey: "nav_método" }
    ]
  },
  { 
    href: "/producoes", 
    label: content.nav.productions, 
    i18nKey: "nav_producoes",
    submenu: [
      { href: "/producoes", label: "Visão Geral", i18nKey: "nav_producoes_visao" },
      { href: "/producoes/creator-ops-rio", label: "Creator Ops Rio 🎬", i18nKey: "nav_creator_ops" }
    ]
  },
  { href: "/impacto", label: content.nav.impact, i18nKey: "nav_impacto" },
  { href: "/contato", label: content.nav.contact, i18nKey: "nav_contato" },
];

function getLocalizedHref(href: string, lang: SupportedLang): string {
  if (href === "/") {
    return `/${lang}`;
  }
  return `/${lang}${href}`;
}

function getCurrentCleanPath(location: string): string {
  return getPathWithoutLang(location) || "/";
}

export default function Header() {
  const [location, setLocation] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const [currentLang, setCurrentLang] = useState<SupportedLang>('en');

  useEffect(() => {
    const checkLang = () => {
      const urlLang = getLangFromPath(location);
      if (urlLang) {
        setCurrentLang(urlLang);
      } else {
        const lang = getCurrentLang() as SupportedLang;
        if (supportedLangs.includes(lang)) {
          setCurrentLang(lang);
        }
      }
    };
    checkLang();
  }, [location]);

  const showCreationProfile = currentLang === 'en' || currentLang === 'es';

  const switchLanguage = (targetLang: SupportedLang) => {
    const cleanPath = getCurrentCleanPath(location);
    const newPath = cleanPath === "/" ? `/${targetLang}` : `/${targetLang}${cleanPath}`;
    setLocation(newPath);
  };

  const isCurrentPath = (href: string): boolean => {
    const cleanLocation = getCurrentCleanPath(location);
    if (href === "/") {
      return cleanLocation === "/";
    }
    return cleanLocation === href;
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#000000]" data-testid="header">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link href={getLocalizedHref("/", currentLang)} data-testid="link-logo">
            <img 
              src={logoWhite} 
              alt="Creation Pro" 
              className="h-16 w-auto"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-1" data-testid="nav-desktop">
            {navLinks.map((link) => (
              <div key={link.href || link.label} className="relative group">
                <Link href={getLocalizedHref(link.href || "/", currentLang)}>
                  <span
                    className={`px-3 py-2 text-sm font-medium transition-colors flex items-center gap-1 ${
                      isCurrentPath(link.href || "/")
                        ? "text-[#7ad1e4]"
                        : "text-white/80 hover:text-white"
                    }`}
                    data-testid={`link-nav-${link.label.toLowerCase().replace(/\s/g, "-")}`}
                    data-i18n={(link as any).i18nKey}
                  >
                    {link.label}
                    {(link as any).submenu && <ChevronDown className="h-4 w-4" />}
                  </span>
                </Link>
                {(link as any).submenu && (
                  <div className="absolute left-0 mt-0 w-56 border border-white/20 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 bg-[#000000]" data-testid={`submenu-${link.label.toLowerCase().replace(/\s/g, "-")}`}>
                    {(link as any).submenu.map((sublink: any) => (
                      <Link key={sublink.href} href={getLocalizedHref(sublink.href, currentLang)}>
                        <span
                          onClick={() => setOpenSubmenu(null)}
                          className={`block px-4 py-2 text-sm font-medium transition-colors ${
                            isCurrentPath(sublink.href)
                              ? "text-[#7ad1e4] bg-white/5"
                              : "text-white/80 hover:text-white hover:bg-white/5"
                          }`}
                          data-testid={`link-submenu-${sublink.label.toLowerCase().replace(/\s/g, "-")}`}
                          data-i18n={sublink.i18nKey}
                        >
                          {sublink.label}
                        </span>
                      </Link>
                    ))}
                    {showCreationProfile && (link as any).i18nKey === "nav_serviços" && (
                      <Link href={getLocalizedHref("/profile", currentLang)}>
                        <span
                          onClick={() => setOpenSubmenu(null)}
                          className={`block px-4 py-2 text-sm font-medium transition-colors ${
                            isCurrentPath("/profile")
                              ? "text-[#7ad1e4] bg-white/5"
                              : "text-white/80 hover:text-white hover:bg-white/5"
                          }`}
                          data-testid="link-submenu-creation-profile"
                          data-i18n="nav_creation_profile"
                        >
                          Creation Profile
                        </span>
                      </Link>
                    )}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <div className="lang-selector" data-testid="lang-selector">
              <button 
                onClick={() => switchLanguage('pt')}
                className={`lang-btn ${currentLang === 'pt' ? 'active' : ''}`}
                data-testid="button-lang-pt"
              >
                PT
              </button>
              <button 
                onClick={() => switchLanguage('en')}
                className={`lang-btn ${currentLang === 'en' ? 'active' : ''}`}
                data-testid="button-lang-en"
              >
                EN
              </button>
              <button 
                onClick={() => switchLanguage('es')}
                className={`lang-btn ${currentLang === 'es' ? 'active' : ''}`}
                data-testid="button-lang-es"
              >
                ES
              </button>
            </div>
            <Link href={getLocalizedHref("/contato", currentLang)}>
              <span
                className="inline-flex items-center gap-2 text-[#7ad1e4] font-semibold hover:gap-3 transition-all cursor-pointer"
                data-testid="button-header-cta"
                data-i18n="nav_cta"
              >
                {content.nav.cta}
                <span className="text-lg">→</span>
              </span>
            </Link>
          </div>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/10"
                data-testid="button-mobile-menu"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Abrir menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[280px] p-0 border-white/20 bg-[#000000]"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-4 border-b border-white/10">
                  <img 
                    src={logoWhite} 
                    alt="Creation Pro" 
                    className="h-12 w-auto"
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsOpen(false)}
                    className="text-white hover:bg-white/10"
                    data-testid="button-close-menu"
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>
                <nav className="flex flex-col p-4 gap-1" data-testid="nav-mobile">
                  {navLinks.map((link) => (
                    <div key={link.href || link.label}>
                      <div className="flex items-center justify-between">
                        <Link href={getLocalizedHref(link.href || "/", currentLang)} className="flex-1">
                          <span
                            onClick={() => {
                              if (!(link as any).submenu) setIsOpen(false);
                            }}
                            className={`block px-3 py-3 text-base font-medium transition-colors ${
                              isCurrentPath(link.href || "/")
                                ? "text-[#7ad1e4] bg-white/5"
                                : "text-white/80 hover:text-white hover:bg-white/5"
                            }`}
                            data-testid={`link-mobile-${link.label.toLowerCase().replace(/\s/g, "-")}`}
                            data-i18n={(link as any).i18nKey}
                          >
                            {link.label}
                          </span>
                        </Link>
                        {(link as any).submenu && (
                          <button
                            onClick={() => setOpenSubmenu(openSubmenu === link.label ? null : link.label)}
                            className="px-3 py-3 text-white/80"
                            data-testid={`button-toggle-submenu-${link.label.toLowerCase().replace(/\s/g, "-")}`}
                          >
                            <ChevronDown className={`h-4 w-4 transition-transform ${openSubmenu === link.label ? "rotate-180" : ""}`} />
                          </button>
                        )}
                      </div>
                      {(link as any).submenu && openSubmenu === link.label && (
                        <div className="bg-white/5 mt-1" data-testid={`submenu-mobile-${link.label.toLowerCase().replace(/\s/g, "-")}`}>
                          {(link as any).submenu.map((sublink: any) => (
                            <Link key={sublink.href} href={getLocalizedHref(sublink.href, currentLang)}>
                              <span
                                onClick={() => {
                                  setIsOpen(false);
                                  setOpenSubmenu(null);
                                }}
                                className={`block px-4 py-3 text-base font-medium transition-colors ${
                                  isCurrentPath(sublink.href)
                                    ? "text-[#7ad1e4] bg-white/5"
                                    : "text-white/80 hover:text-white hover:bg-white/5"
                                }`}
                                data-testid={`link-mobile-submenu-${sublink.label.toLowerCase().replace(/\s/g, "-")}`}
                                data-i18n={sublink.i18nKey}
                              >
                                {sublink.label}
                              </span>
                            </Link>
                          ))}
                          {showCreationProfile && (link as any).i18nKey === "nav_serviços" && (
                            <Link href={getLocalizedHref("/profile", currentLang)}>
                              <span
                                onClick={() => {
                                  setIsOpen(false);
                                  setOpenSubmenu(null);
                                }}
                                className={`block px-4 py-3 text-base font-medium transition-colors ${
                                  isCurrentPath("/profile")
                                    ? "text-[#7ad1e4] bg-white/5"
                                    : "text-white/80 hover:text-white hover:bg-white/5"
                                }`}
                                data-testid="link-mobile-submenu-creation-profile"
                                data-i18n="nav_creation_profile"
                              >
                                Creation Profile
                              </span>
                            </Link>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </nav>
                <div className="mt-auto p-4 border-t border-white/10">
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <button 
                      onClick={() => {
                        switchLanguage('pt');
                        setIsOpen(false);
                      }}
                      className={`lang-btn ${currentLang === 'pt' ? 'active' : ''}`}
                      data-testid="button-mobile-lang-pt"
                    >
                      PT
                    </button>
                    <button 
                      onClick={() => {
                        switchLanguage('en');
                        setIsOpen(false);
                      }}
                      className={`lang-btn ${currentLang === 'en' ? 'active' : ''}`}
                      data-testid="button-mobile-lang-en"
                    >
                      EN
                    </button>
                    <button 
                      onClick={() => {
                        switchLanguage('es');
                        setIsOpen(false);
                      }}
                      className={`lang-btn ${currentLang === 'es' ? 'active' : ''}`}
                      data-testid="button-mobile-lang-es"
                    >
                      ES
                    </button>
                  </div>
                  <Link href={getLocalizedHref("/contato", currentLang)}>
                    <span
                      onClick={() => setIsOpen(false)}
                      className="inline-flex items-center gap-2 text-[#7ad1e4] font-semibold hover:gap-3 transition-all cursor-pointer"
                      data-testid="button-mobile-cta"
                      data-i18n="nav_cta"
                    >
                      {content.nav.cta}
                      <span className="text-lg">→</span>
                    </span>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
