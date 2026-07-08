import './i18n';
import { Switch, Route, Redirect, useLocation, useRoute } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect } from "react";
import Home from "@/pages/Home";
import QuemSomos from "@/pages/QuemSomos";
import Servicos from "@/pages/Servicos";
import Producoes from "@/pages/Producoes";
import CreatorOpsRio from "@/pages/producoes/CreatorOpsRio";
import Impacto from "@/pages/Impacto";
import Metodo from "@/pages/Metodo";
import Contato from "@/pages/Contato";
import CreationProfile from "@/pages/CreationProfile";
import NotFound from "@/pages/not-found";
import { supportedLangs, defaultLang, getLangFromPath, getPathWithLang, isValidLang } from "@/lib/lang";
import { loadLanguage } from "./i18n";

function LanguageSync({ lang }: { lang: string }) {
  useEffect(() => {
    if (isValidLang(lang)) {
      loadLanguage(lang);
      document.documentElement.lang = lang;
    }
  }, [lang]);
  return null;
}

function HrefLangTags({ currentPath }: { currentPath: string }) {
  useEffect(() => {
    const existingLinks = document.querySelectorAll('link[rel="alternate"][hreflang]');
    existingLinks.forEach(link => link.remove());

    const baseUrl = window.location.origin;
    const pathWithoutLang = currentPath.replace(/^\/(en|es|pt)/, '') || '/';

    supportedLangs.forEach(lang => {
      const link = document.createElement('link');
      link.rel = 'alternate';
      link.hreflang = lang;
      link.href = `${baseUrl}/${lang}${pathWithoutLang === '/' ? '' : pathWithoutLang}`;
      document.head.appendChild(link);
    });

    const defaultLink = document.createElement('link');
    defaultLink.rel = 'alternate';
    defaultLink.hreflang = 'x-default';
    defaultLink.href = `${baseUrl}/${defaultLang}${pathWithoutLang === '/' ? '' : pathWithoutLang}`;
    document.head.appendChild(defaultLink);
  }, [currentPath]);

  return null;
}

function LangRouter({ lang }: { lang: string }) {
  const [location] = useLocation();
  
  return (
    <>
      <LanguageSync lang={lang} />
      <HrefLangTags currentPath={location} />
      <Switch>
        <Route path={`/${lang}`} component={Home} />
        <Route path={`/${lang}/quem-somos`} component={QuemSomos} />
        <Route path={`/${lang}/servicos`} component={Servicos} />
        <Route path={`/${lang}/producoes`} component={Producoes} />
        <Route path={`/${lang}/producoes/creator-ops-rio`} component={CreatorOpsRio} />
        <Route path={`/${lang}/impacto`} component={Impacto} />
        <Route path={`/${lang}/metodo`} component={Metodo} />
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
      const newPath = getPathWithLang(location, defaultLang);
      setLocation(newPath, { replace: true });
    }
  }, [location, setLocation]);
  
  return null;
}

function Router() {
  const [location] = useLocation();
  const lang = getLangFromPath(location);

  if (location === '/') {
    return <Redirect to={`/${defaultLang}`} />;
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
