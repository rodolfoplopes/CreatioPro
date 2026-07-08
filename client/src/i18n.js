let currentTranslations = {};
let currentLang = 'en';

export async function loadLanguage(lang) {
  try {
    const cacheBuster = Date.now();
    const response = await fetch(`/${lang}.json?v=${cacheBuster}`);
    currentTranslations = await response.json();
    currentLang = lang;
    localStorage.setItem('lang', lang);
    applyTranslations();
  } catch (e) {
    console.warn(`Error loading language ${lang}:`, e);
  }
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (currentTranslations[key]) {
      el.textContent = currentTranslations[key];
    }
  });
  
  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (currentTranslations[key]) {
      el.placeholder = currentTranslations[key];
    }
  });
}

export function detectLanguage() {
  const userLang = navigator.language || navigator.userLanguage;
  if (userLang.startsWith('en')) return 'en';
  if (userLang.startsWith('es')) return 'es';
  if (userLang.startsWith('pt')) return 'pt';
  return 'en';
}

export function setLanguage(lang) {
  localStorage.setItem('lang', lang);
  loadLanguage(lang);
}

export function getCurrentLang() {
  return currentLang;
}

export function getTranslation(key) {
  return currentTranslations[key] || key;
}

export function getTranslations() {
  return currentTranslations;
}

export function initLanguageDetector() {
  const pathLang = window.location.pathname.match(/^\/(en|es|pt)(\/|$)/);
  if (pathLang) {
    loadLanguage(pathLang[1]);
  } else {
    const savedLang = localStorage.getItem('lang');
    const lang = savedLang || detectLanguage();
    loadLanguage(lang);
  }
  
  const observer = new MutationObserver((mutations) => {
    let hasNewI18nElements = false;
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (node.nodeType === 1) {
          if (node.hasAttribute && node.hasAttribute('data-i18n')) {
            hasNewI18nElements = true;
          }
          if (node.querySelectorAll) {
            const i18nElements = node.querySelectorAll('[data-i18n]');
            if (i18nElements.length > 0) {
              hasNewI18nElements = true;
            }
          }
        }
      });
    });
    if (hasNewI18nElements && Object.keys(currentTranslations).length > 0) {
      applyTranslations();
    }
  });
  
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
}

window.setLanguage = setLanguage;

document.addEventListener('DOMContentLoaded', () => {
  initLanguageDetector();
});
