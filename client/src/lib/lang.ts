export const supportedLangs = ['en', 'es', 'pt'] as const;
export type SupportedLang = typeof supportedLangs[number];
export const defaultLang: SupportedLang = 'en';

export function isValidLang(lang: string): lang is SupportedLang {
  return supportedLangs.includes(lang as SupportedLang);
}

export function getLangFromPath(path: string): SupportedLang | null {
  const match = path.match(/^\/(en|es|pt)(\/|$)/);
  return match ? (match[1] as SupportedLang) : null;
}

export function getPathWithoutLang(path: string): string {
  return path.replace(/^\/(en|es|pt)/, '') || '/';
}

export function getPathWithLang(path: string, lang: SupportedLang): string {
  const cleanPath = getPathWithoutLang(path);
  return `/${lang}${cleanPath === '/' ? '' : cleanPath}`;
}

export function normalizePath(path: string): { lang: SupportedLang; cleanPath: string } {
  const lang = getLangFromPath(path);
  if (lang) {
    return { lang, cleanPath: getPathWithoutLang(path) };
  }
  return { lang: defaultLang, cleanPath: path };
}
