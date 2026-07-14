export type Lang = "en" | "pt" | "es";

const SUPPORTED: Lang[] = ["en", "pt", "es"];
const STORAGE_KEY = "creation:lang";

export function getStoredLang(): Lang | null {
  try {
    const v = localStorage.getItem(STORAGE_KEY);
    return SUPPORTED.includes(v as Lang) ? (v as Lang) : null;
  } catch {
    return null;
  }
}

export function storeLang(lang: Lang): void {
  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch {
    return;
  }
}

function baseTag(tag: string): string {
  const lower = tag.toLowerCase();
  const dash = lower.indexOf("-");
  return dash === -1 ? lower : lower.slice(0, dash);
}

export function detectBrowserLang(): Lang {
  const list = navigator.languages;
  const candidates = list && list.length ? list : [navigator.language];

  for (const tag of candidates) {
    const base = baseTag(tag);
    if (SUPPORTED.includes(base as Lang)) return base as Lang;
  }
  return "en";
}

export function resolveInitialLang(): Lang {
  return getStoredLang() ?? detectBrowserLang();
}
