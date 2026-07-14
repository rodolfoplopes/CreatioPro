import { Switch, Route, Redirect, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect } from "react";
import Home from "@/pages/Home";
import QuemSomos from "@/pages/QuemSomos";
import Servicos from "@/pages/Servicos";
import CreationOps from "@/pages/servicos/CreationOps";
import Producoes from "@/pages/Producoes";
import CreatorOpsRio from "@/pages/producoes/CreatorOpsRio";
import Impacto from "@/pages/Impacto";
import Contato from "@/pages/Contato";
import CreationProfile from "@/pages/CreationProfile";
import NotFound from "@/pages/not-found";
import {
  supportedLangs,
  defaultLang,
  getLangFromPath,
  getPathWithLang,
  isValidLang,
} from "@/lib/lang";
import { resolveInitialLang } from "@/lib/detectLang";

/**
 * `import './i18n'` REMOVIDO.
 * O i18n.js sobrescrevia o DOM por cima do React via textContent, com um
 * MutationObserver para recolar a traducao a cada re-render. Agora o idioma
 * vem da rota e o conteudo do useContent(). React puro.
 */

function LanguageSync({ lang }: { lang: string }) {
  useEffect(() => {
    if (isValidLang(lang)) {
      document.documentElement.lang = lang;
    }
  }, [lang]);
  return null;
}

function HrefLangTags({ currentPath }: { currentPath: string }) {
  useEffect(() => {
    const existingLinks = document.querySelectorAll(
      'link[rel="alternate"][hreflang]',
    );
    existingLinks.forEach((link) => link.remove());

    const baseUrl = window.location.origin;
    const pathWithoutLang = currentPath.replace(/^\/(en|es|pt)/, "") || "/";
    const suffix = pathWithoutLang === "/" ? "" : pathWithoutLang;

    supportedLangs.forEach((lang) => {
      const link = document.createElement("link");
      link.rel = "alternate";
      link.hreflang = lang;
      link.href = `${baseUrl}/${lang}${suffix}`;
      document.head.appendChild(link);
    });

    const defaultLink = document.createElement("link");
    defaultLink.rel = "alternate";
    defaultLink.hreflang = "x-default";
    defaultLink.href = `${baseUrl}/${defaultLang}${suffix}`;
    document.head.appendChild(defaultLink);
  }, [currentPath]);

  return null;
}

/**
 * O Wouter nao faz scroll restoration. Ao trocar de pagina, o navegador
 * mantinha a posicao do scroll anterior — voce clicava em "Impacto" no menu
 * e caia no meio da pagina.
 */
function ScrollToTop({ path }: { path: string }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [path]);
  return null;
}

function LangRouter({ lang }: { lang: string }) {
  const [location] = useLocation();

  return (
    <>
      <ScrollToTop path={location} />
      <LanguageSync lang={lang} />
      <HrefLangTags currentPath={location} />
      <Switch>
        <Route path={`/${lang}`} component={Home} />
        <Route path={`/${lang}/quem-somos`} component={QuemSomos} />
        <Route path={`/${lang}/servicos`} component={Servicos} />
        <Route path={`/${lang}/servicos/ops`} component={CreationOps} />
        <Route path={`/${lang}/producoes`} component={Producoes} />
        <Route path={`/${lang}/producoes/creator-ops-rio`} component={CreatorOpsRio} />
        <Route path={`/${lang}/impacto`} component={Impacto} />
        {/* /metodo foi absorvido por /servicos. Redirect preserva SEO e links externos. */}
        <Route path={`/${lang}/metodo`}>
          <Redirect to={`/${lang}/servicos`} />
        </Route>
        <Route path={`/${lang}/contato`} component={Contato} />
        <Route path={`/${lang}/profile`} component={CreationProfile} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function RedirectHandler() {
  const [location, setLocation] = useLocation();

  useEffect(() => {
    const lang = getLangFromPath(location);
    if (!lang) {
      setLocation(getPathWithLang(location, resolveInitialLang()), { replace: true });
    }
  }, [location, setLocation]);

  return null;
}

function Router() {
  const [location] = useLocation();
  const lang = getLangFromPath(location);

  if (location === "/") {
    return <Redirect to={`/${resolveInitialLang()}`} />;
  }

  if (!lang) {
    return <RedirectHandler />;
  }

  if (!isValidLang(lang)) {
    return <Redirect to={getPathWithLang(location, defaultLang)} />;
  }

  return <LangRouter lang={lang} />;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
