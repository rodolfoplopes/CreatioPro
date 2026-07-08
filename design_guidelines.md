# Design Guidelines: Creation Pro Website (BlackRock Style)

## Design Approach
**BlackRock-Inspired Corporate Design** - Institutional, premium, asset-management aesthetic. Clean, spacious layouts with strong hierarchy. NO creative/startup vibes.

**REFERÊNCIA:** O site deve parecer o site da BlackRock adaptado para a Creation Pro.

## Visual Principles (MANDATORY)

### 1. Colors (OBRIGATÓRIO)
- **Base Principal:** Preto (#000000) e Branco (#FFFFFF)
- **Cores de Destaque (usar com moderação):**
  - Light Blue (#7ad1e4) - secundário principal para CTAs e highlights
  - Green (#22C55E) - secundário para destaques
  - Light Gray (#F5F5F5) - fundos, divisões e respiros
- **❌ NÃO usar dourado**
- **❌ NÃO usar gradientes como fundo dominante**
- Cores de destaque servem apenas para CTAs, faixas e hierarquia

### 2. Layout & Components
- **ALL boxes are RECTANGULAR** - NO border-radius anywhere (--radius: 0rem)
- Visual corporativo, institucional, sóbrio e editorial
- Grid-based, rigid corporate layout
- Generous spacing ("airy" institutional feel) - muito espaço em branco
- Cards, sections, blocks follow strict grid
- Alternating white/light-gray sections
- Nada de visual "startup", "tech rounded" ou "soft"
- Nada de "cards flutuantes" ou sombras exageradas

### 3. Typography
- **Headlines:** Large, bold, black (#000000), corporate style
- **Body:** Normal weight, easy reading, gray tones (#374151, #6b7280)
- **Kickers:** Uppercase, tracking-widest, Light Blue (#7ad1e4)
- Tipografia forte, com títulos grandes e hierarquia clara
- Asset manager / global consultancy language

### 4. Hero Sections
- **Hero da Home:** Base branca ou preta
- Forte presença tipográfica
- Uso estratégico de imagem editorial (foto grande, estilo consultoria global)
- CTAs no estilo BlackRock: Texto + seta, visual simples, sem botões chamativos

### 5. Images (OBRIGATÓRIO)
- Inserir mais imagens ilustrativas ao longo do site
- Estilo das imagens:
  - Consultorias tradicionais
  - Ambientes corporativos
  - Pessoas em contexto profissional
  - Cidades, infraestrutura, trabalho, estratégia
- Imagens grandes, horizontais, bem integradas ao layout
- Tratar imagens como elemento estrutural do design, não decorativo
- Rectangular frames (no rounded corners)

### 6. Highlight Strips / CTA Sections
- Faixas horizontais full-width
- Blocos em light gray
- Destaques com Light Blue ou Green
- Separações visuais claras entre seções
- Nada de sombras exageradas

## Color System

### Backgrounds
- **Primary:** #FFFFFF (white)
- **Secondary:** #F5F5F5 (light gray for alternating sections)
- **Dark Accent:** #000000 (black for dark sections)
- **Darker:** #1A1A1A (very dark sections)

### Text
- **Primary:** #000000 (headlines)
- **Secondary:** #374151 (body text)
- **Muted:** #6b7280 (supporting text)
- **On Dark:** #FFFFFF and rgba(255,255,255,0.7)

### Borders
- **Hairline:** rgba(0, 0, 0, 0.08)
- **Stronger:** rgba(0, 0, 0, 0.15)
- **Left Accent:** 4px solid #7ad1e4 (light blue) or #000000 (black)

### Accents (Cores de Destaque)
- **Light Blue:** #7ad1e4 (CTAs, kickers, highlights)
- **Green:** #22C55E (secondary highlights)
- **Light Gray:** #F5F5F5 (backgrounds, divisions)
- **❌ NO GOLD**

## Typography

- **Font Family:** Inter (sans-serif)
- **H1:** text-4xl to text-6xl, font-bold, tracking-tight, text-black
- **H2:** text-3xl to text-4xl, font-bold, text-black
- **H3:** text-xl to text-2xl, font-semibold, text-black
- **Body:** text-base to text-lg, text-[#374151] or text-[#6b7280]
- **Kicker:** text-sm, uppercase, tracking-widest, text-[#7ad1e4]

## Layout System

- **No border-radius** - all corners are sharp (0rem)
- **Section padding:** py-20 md:py-28
- **Container:** max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
- **Card padding:** p-8 (generous internal spacing)
- **Grid gaps:** gap-8
- **Generous whitespace** between all sections

## Component Patterns

### Cards
- bg-white, border border-[rgba(0,0,0,0.08)]
- Optional: border-t-4 border-t-[#7ad1e4] or border-t-[#000000]
- Optional: border-l-4 for left accent
- No shadows, no rounded corners

### Buttons / CTAs (Estilo BlackRock)
- **Primary CTA:** Texto + seta (→) simples
- **Link Style:** text-[#7ad1e4] hover:underline inline-flex items-center gap-2
- **Dark Button:** bg-[#000000] text-white font-semibold
- **Outline Button:** border-2 border-black text-black hover:bg-black hover:text-white
- All buttons: rectangular, no border-radius
- Visual simples, sem botões chamativos

### Hero Sections
- White or black background
- Strong typographic presence
- Grid layout: text left, image right
- Black headline, gray body text
- CTA style: Text + arrow (→)

### CTA Strips
- bg-[#000000] or bg-[#7ad1e4], text-white
- Centered content, max-w-2xl
- Simple text + arrow CTAs
- py-20 md:py-28

### Navigation
- bg-[#000000] or bg-white
- Clean links
- Light Blue accent for active/hover states
- Clean, institutional

### Footer
- bg-[#1A1A1A] (very dark)
- White text
- Clean grid layout

## REGRA FINAL
Se alguém abrir o site sem conhecer a Creation Pro, deve pensar:
**"Isso parece o site da BlackRock — só que com outra marca."**
