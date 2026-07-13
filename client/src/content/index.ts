import { useLocation } from "wouter";
import { getLangFromPath, defaultLang, type SupportedLang } from "@/lib/lang";
import type { Content } from "./types";
import { pt } from "./pt";
import { en } from "./en";
import { es } from "./es";

export type { Content } from "./types";

const dictionaries: Record<SupportedLang, Content> = { pt, en, es };

/**
 * Substitui o antigo i18n.js.
 *
 * O sistema anterior fazia fetch de /pt.json, varria o DOM com
 * querySelectorAll('[data-i18n]') e sobrescrevia textContent POR CIMA do React.
 * Havia um MutationObserver so para recolar a traducao toda vez que o React
 * re-renderizava e apagava o trabalho dele. Guerra de escrita no DOM.
 *
 * Isso causava:
 *   - Conteudo em 4 arquivos (content.ts + 3 JSON) -> divergiram
 *   - client/public/pt.json != public/pt.json -> dev servia diferente de prod
 *   - Chaves faltando vazavam fallback ("Titulo do Projeto" em producao)
 *
 * Agora: um objeto tipado por idioma. O TypeScript garante que nenhuma chave
 * falte em nenhuma lingua.
 */
export function useContent(): Content {
  const [location] = useLocation();
  const lang = getLangFromPath(location) ?? defaultLang;
  return dictionaries[lang] ?? dictionaries[defaultLang];
}

export function useLang(): SupportedLang {
  const [location] = useLocation();
  return getLangFromPath(location) ?? defaultLang;
}

/** Prefixa um href com o idioma atual. "/contato" -> "/en/contato" */
export function useLocalizedHref(): (href: string) => string {
  const lang = useLang();
  return (href: string) => (href === "/" ? `/${lang}` : `/${lang}${href}`);
}

export { pt, en, es, dictionaries };
