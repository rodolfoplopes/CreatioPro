# CREATION PRO — Project Documentation

## Overview
Creation Pro is a fully operational, multilingual website offering services in Operations (OPS), Productions, and Impact. The project aims to provide clarity and creativity to businesses, with a focus on structured execution. It supports Portuguese (PT), English (EN), and Spanish (ES) with automatic language detection and manual selection. The website is live at www.creation-pro.com and features a minimalist, modern design.

## User Preferences
- Create or update the Creation Pro website keeping the layout exactly as it is.
- Do not alter HTML, CSS, components, structure, or layout.
- Only replace content using the existing i18n system (`data-i18n`).
- The brand is Creation Pro with the tagline: "Clareza e criatividade para fazer acontecer".
- Verticals are: OPS, Impacto, Produções.
- Support for PT-BR, EN, ES with auto-detection and a PT/EN/ES selector in the header.
- Reference files are `/public/{pt|en|es}.json` (containing 350+ translation keys).
- Follow the content in the JSONs exactly—do not rewrite, add, or remove sections.
- When updating content, locate the key in `/public/pt.json`, update its value, then copy the same key and update `/public/en.json` and `/public/es.json`.
- Do NOT alter any key, only values.
- Keep all three languages synchronized.
- Do not make changes to any `data-i18n` attribute in the HTML.
- When adding new content with the same structure, create a new HTML element with `data-i18n="new_section_element"` and add the key to all three JSONs, ensuring consistency across languages.
- When modifying layout/design (only if necessary), update React components in `/client/src/components/` and styles in `/client/src/index.css`. Do NOT remove `data-i18n` attributes. Do NOT alter the routing structure.
- Use clear commit messages like "feat(i18n): adicionar nova seção em PT/EN/ES".

## System Architecture
The project is built with React, Vite, and TypeScript for the frontend, and an Express backend for API and static serving. Styling is handled with Tailwind CSS. Routing is managed by Wouter.

### UI/UX Decisions
- **Color Palette**: Petróleo (`#0F3D3E`), Petróleo Dark (`#0C2426`), Ouro/Ocre (`#D4A373`).
- **Typography**: Inter (sans-serif), minimalist, modern, and consultative style. Responsive (mobile-first) font sizing.
- **Components**: Buttons with hover-elevate effects, subtle-bordered cards, minimal badges, and a language selector with three buttons (PT/EN/ES) aligned to the right in the header.

### Technical Implementations
- **Internationalization (i18n)**:
    - Implemented via `/client/src/i18n.js` and imported in `App.tsx`.
    - Automatic language detection on `DOMContentLoaded` via `navigator.language` (falls back to `pt/es/en/pt`).
    - Manual language selection is available via `window.setLanguage('langCode')`.
    - Selected language persists in `localStorage` (`key: 'lang'`).
    - Translation keys follow `section_element_type` pattern (e.g., `hero_headline`, `services_vertical_0_title`).
    - Translation JSONs are served statically from `/public/{lang}.json`.
- **Frontend**: Single-page application (SPA) with defined routes for Home, About Us, Services, Method, Contact, Impact, and Productions.
- **Backend**: Express server serves static files from the `/public` directory and handles API routes.
- **Build Process**: Uses Vite for client builds and esbuild for server bundling, ensuring CJS compatibility for production.
- **Project Structure**:
    - `client/src/`: Frontend source code, including i18n logic, main App component, UI components, and pages.
    - `public/`: Statically served files, primarily the language JSONs.
    - `server/`: Backend Express application.
    - `dist/`: Production build output.

### Feature Specifications
- **Multilingual System**: Detects browser language, stores preference in `localStorage`, and allows manual switching via header buttons.
- **Pages**:
    - **Home**: Hero section, services overview, verticals, target audience, value proposition, CTA.
    - **Quem Somos**: Company identity, differentiators, team, values.
    - **Serviços**: Consolidated page for OPS, Produções, and Impact verticals.
    - **Impacto**: Detailed page on approaches, deliverables, programs, and case studies.
    - **Método**: Outlines the 6-step methodology, its benefits, and expected results.
    - **Contato**: Introduction, contact form, WhatsApp, Email, Calendly, office locations, social media.

## External Dependencies
- **React**: Frontend library.
- **Vite**: Build tool for frontend.
- **TypeScript**: Language for type-safe code.
- **Express**: Node.js web application framework for the backend.
- **Tailwind CSS**: Utility-first CSS framework.
- **Wouter**: React hook-based router.
- **Replit**: Hosting platform.
- **Let's Encrypt**: SSL certificate provider (via Replit).