import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { useContent, useLang } from "@/content";
import { getPathWithoutLang, type SupportedLang } from "@/lib/lang";
import { storeLang } from "@/lib/detectLang";


/**
 * MUDANCAS:
 * 1. getCurrentLang() do i18n.js -> useLang() (le da rota, sem estado duplicado)
 * 2. content estatico -> useContent(). O navLinks era construido FORA do
 *    componente, congelando o idioma no primeiro import.
 * 3. Os data-i18n sumiram. Nao ha mais ninguem para le-los.
 * 4. CREATOR OPS RIO SAIU DO MENU. Tinha submenu proprio com emoji, competindo
 *    em destaque com as verticais institucionais. Publico diferente, moeda
 *    diferente, identidade diferente. Vira spin-off. Continua acessivel pela
 *    pagina Producoes.
 */
export default function Header() {
  const [location, setLocation] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const c = useContent();
  const currentLang = useLang();

  const showCreationProfile = currentLang === "en" || currentLang === "es";

  const navLinks = [
    { href: "/", label: c.nav.home, submenu: undefined as { href: string; label: string }[] | undefined },
    { href: "/quem-somos", label: c.nav.about, submenu: undefined },
    {
      href: "/servicos",
      label: c.nav.services,
      submenu: [{ href: "/servicos/ops", label: "Creation OPS" }],
    },
    { href: "/producoes", label: c.nav.productions, submenu: undefined },
    { href: "/impacto", label: c.nav.impact, submenu: undefined },
    { href: "/contato", label: c.nav.contact, submenu: undefined },
  ];

  const localize = (href: string) =>
    href === "/" ? `/${currentLang}` : `/${currentLang}${href}`;

  const cleanPath = getPathWithoutLang(location) || "/";
  const isCurrentPath = (href: string) => cleanPath === href;

  const switchLanguage = (targetLang: SupportedLang) => {
    storeLang(targetLang);
    setLocation(cleanPath === "/" ? `/${targetLang}` : `/${targetLang}${cleanPath}`);
  };

  const langButtons: SupportedLang[] = ["pt", "en", "es"];

  return (
    <header className="sticky top-0 z-50 w-full bg-abyss" data-testid="header">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link href={localize("/")} data-testid="link-logo">
            <img src="/brand/lockup_bone_transp.svg" alt={c.brand.name} className="h-16 w-auto cursor-pointer" />
          </Link>

          <nav className="hidden md:flex items-center gap-1" data-testid="nav-desktop">
            {navLinks.map((link) => (
              <div key={link.href} className="relative group">
                <Link href={localize(link.href)}>
                  <span
                    className={`px-3 py-2 text-sm font-medium transition-colors flex items-center gap-1 cursor-pointer ${
                      isCurrentPath(link.href)
                        ? "text-signal"
                        : "text-bone/80 hover:text-bone"
                    }`}
                  >
                    {link.label}
                    {link.submenu && <ChevronDown className="h-4 w-4" />}
                  </span>
                </Link>

                {link.submenu && (
                  <div className="absolute left-0 w-56 border border-bone/20 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 bg-abyss">
                    {link.submenu.map((sublink) => (
                      <Link key={sublink.href} href={localize(sublink.href)}>
                        <span
                          className={`block px-4 py-2 text-sm font-medium transition-colors cursor-pointer ${
                            isCurrentPath(sublink.href)
                              ? "text-signal bg-bone/5"
                              : "text-bone/80 hover:text-bone hover:bg-bone/5"
                          }`}
                        >
                          {sublink.label}
                        </span>
                      </Link>
                    ))}

                    {showCreationProfile && link.href === "/servicos" && (
                      <Link href={localize("/profile")}>
                        <span
                          className={`block px-4 py-2 text-sm font-medium transition-colors cursor-pointer ${
                            isCurrentPath("/profile")
                              ? "text-signal bg-bone/5"
                              : "text-bone/80 hover:text-bone hover:bg-bone/5"
                          }`}
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

          <div className="hidden md:flex items-center gap-4">
            <div className="lang-selector" data-testid="lang-selector">
              {langButtons.map((lang) => (
                <button
                  key={lang}
                  onClick={() => switchLanguage(lang)}
                  className={`lang-btn ${currentLang === lang ? "active" : ""}`}
                  data-testid={`button-lang-${lang}`}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>

            <Link href={localize(c.cta.href)}>
              <span
                className="inline-flex items-center gap-2 text-signal font-semibold hover:gap-3 transition-all cursor-pointer"
                data-testid="button-header-cta"
              >
                {c.cta.primary}
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          </div>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="text-bone hover:bg-bone/10"
                data-testid="button-mobile-menu"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-[280px] p-0 border-bone/20 bg-abyss">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-4 border-b border-bone/14">
                  <img src="/brand/lockup_bone_transp.svg" alt={c.brand.name} className="h-12 w-auto" />
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsOpen(false)}
                    className="text-bone hover:bg-bone/10"
                    data-testid="button-close-menu"
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>

                <nav className="flex flex-col p-4 gap-1" data-testid="nav-mobile">
                  {navLinks.map((link) => (
                    <div key={link.href}>
                      <div className="flex items-center justify-between">
                        <Link href={localize(link.href)} className="flex-1">
                          <span
                            onClick={() => {
                              if (!link.submenu) setIsOpen(false);
                            }}
                            className={`block px-3 py-3 text-base font-medium transition-colors cursor-pointer ${
                              isCurrentPath(link.href)
                                ? "text-signal bg-bone/5"
                                : "text-bone/80 hover:text-bone hover:bg-bone/5"
                            }`}
                          >
                            {link.label}
                          </span>
                        </Link>

                        {link.submenu && (
                          <button
                            onClick={() =>
                              setOpenSubmenu(openSubmenu === link.href ? null : link.href)
                            }
                            className="px-3 py-3 text-bone/80"
                          >
                            <ChevronDown
                              className={`h-4 w-4 transition-transform ${
                                openSubmenu === link.href ? "rotate-180" : ""
                              }`}
                            />
                          </button>
                        )}
                      </div>

                      {link.submenu && openSubmenu === link.href && (
                        <div className="bg-bone/5 mt-1">
                          {link.submenu.map((sublink) => (
                            <Link key={sublink.href} href={localize(sublink.href)}>
                              <span
                                onClick={() => {
                                  setIsOpen(false);
                                  setOpenSubmenu(null);
                                }}
                                className="block px-4 py-3 text-base font-medium text-bone/80 hover:text-bone hover:bg-bone/5 transition-colors cursor-pointer"
                              >
                                {sublink.label}
                              </span>
                            </Link>
                          ))}

                          {showCreationProfile && link.href === "/servicos" && (
                            <Link href={localize("/profile")}>
                              <span
                                onClick={() => {
                                  setIsOpen(false);
                                  setOpenSubmenu(null);
                                }}
                                className="block px-4 py-3 text-base font-medium text-bone/80 hover:text-bone hover:bg-bone/5 transition-colors cursor-pointer"
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

                <div className="mt-auto p-4 border-t border-bone/14">
                  <div className="flex items-center justify-center gap-2 mb-6">
                    {langButtons.map((lang) => (
                      <button
                        key={lang}
                        onClick={() => {
                          switchLanguage(lang);
                          setIsOpen(false);
                        }}
                        className={`lang-btn ${currentLang === lang ? "active" : ""}`}
                        data-testid={`button-mobile-lang-${lang}`}
                      >
                        {lang.toUpperCase()}
                      </button>
                    ))}
                  </div>

                  <Link href={localize(c.cta.href)}>
                    <span
                      onClick={() => setIsOpen(false)}
                      className="inline-flex items-center gap-2 text-signal font-semibold hover:gap-3 transition-all cursor-pointer"
                      data-testid="button-mobile-cta"
                    >
                      {c.cta.primary}
                      <ArrowRight className="h-4 w-4" />
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
