import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/index.html", "./client/src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "0.5rem", /* 8px - corporate BlackRock style */
        md: "0.375rem", /* 6px */
        sm: "0.25rem", /* 4px */
      },
      colors: {
        // ========================================================
        // CREATION — Manual de Marca v3
        // Pares texto/fundo validados em WCAG 2.1 (manual, pag. W1)
        //
        //   Fundo claro (bone):
        //     corpo       text-abyss                12.47:1
        //     secundario  text-abyss/70              5.15:1
        //     link        text-abyss + underline
        //     PROIBIDO    text-signal  (2.20:1)
        //     PROIBIDO    text-slate   (3.78:1)
        //
        //   Fundo escuro (abyss / ink):
        //     corpo       text-bone                 12.47:1
        //     secundario  text-bone/70               6.84:1
        //     link/acento text-signal                5.67:1
        //
        //   Slate: bordas e icones apenas. NUNCA texto.
        //   Ember e Lichen NAO existem no site.
        // ========================================================
        abyss: "#0A2E3B",
        signal: "#1EB3C6",
        bone: "#F2EFE9",
        ink: "#061C24",
        slate: "#6E7B85",

        // Flat / base colors (regular buttons)
        background: "hsl(var(--background) / <alpha-value>)",
        foreground: "hsl(var(--foreground) / <alpha-value>)",
        border: "hsl(var(--border) / <alpha-value>)",
        input: "hsl(var(--input) / <alpha-value>)",
        card: {
          DEFAULT: "hsl(var(--card) / <alpha-value>)",
          foreground: "hsl(var(--card-foreground) / <alpha-value>)",
          border: "hsl(var(--card-border) / <alpha-value>)",
        },
        popover: {
          DEFAULT: "hsl(var(--popover) / <alpha-value>)",
          foreground: "hsl(var(--popover-foreground) / <alpha-value>)",
          border: "hsl(var(--popover-border) / <alpha-value>)",
        },
        primary: {
          DEFAULT: "hsl(var(--primary) / <alpha-value>)",
          foreground: "hsl(var(--primary-foreground) / <alpha-value>)",
          border: "var(--primary-border)",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary) / <alpha-value>)",
          foreground: "hsl(var(--secondary-foreground) / <alpha-value>)",
          border: "var(--secondary-border)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted) / <alpha-value>)",
          foreground: "hsl(var(--muted-foreground) / <alpha-value>)",
          border: "var(--muted-border)",
        },
        accent: {
          DEFAULT: "hsl(var(--accent) / <alpha-value>)",
          foreground: "hsl(var(--accent-foreground) / <alpha-value>)",
          border: "var(--accent-border)",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
          border: "var(--destructive-border)",
        },
        ring: "hsl(var(--ring) / <alpha-value>)",
        chart: {
          "1": "hsl(var(--chart-1) / <alpha-value>)",
          "2": "hsl(var(--chart-2) / <alpha-value>)",
          "3": "hsl(var(--chart-3) / <alpha-value>)",
          "4": "hsl(var(--chart-4) / <alpha-value>)",
          "5": "hsl(var(--chart-5) / <alpha-value>)",
        },
        sidebar: {
          ring: "hsl(var(--sidebar-ring) / <alpha-value>)",
          DEFAULT: "hsl(var(--sidebar) / <alpha-value>)",
          foreground: "hsl(var(--sidebar-foreground) / <alpha-value>)",
          border: "hsl(var(--sidebar-border) / <alpha-value>)",
        },
        "sidebar-primary": {
          DEFAULT: "hsl(var(--sidebar-primary) / <alpha-value>)",
          foreground: "hsl(var(--sidebar-primary-foreground) / <alpha-value>)",
          border: "var(--sidebar-primary-border)",
        },
        "sidebar-accent": {
          DEFAULT: "hsl(var(--sidebar-accent) / <alpha-value>)",
          foreground: "hsl(var(--sidebar-accent-foreground) / <alpha-value>)",
          border: "var(--sidebar-accent-border)"
        },
        status: {
          online: "rgb(34 197 94)",
          away: "rgb(245 158 11)",
          busy: "rgb(239 68 68)",
          offline: "rgb(156 163 175)",
        },
        petroleo: {
          DEFAULT: "hsl(var(--petroleo) / <alpha-value>)",
          dark: "hsl(var(--petroleo-dark) / <alpha-value>)",
        },
        ouro: {
          DEFAULT: "hsl(var(--ouro) / <alpha-value>)",
        },
      },
      // ========================================================
      // TIPOGRAFIA — Manual v3, pagina W2
      //   display : Newsreader 700  (H1, H2, citacao)
      //   sans    : Inter 400/600   (corpo, interface, legenda)
      //   Newsreader NUNCA em corpo. Inter NUNCA em titulo principal.
      //   Base 16px. Nunca menor. Medida de linha 60-75 caracteres.
      // ========================================================
      fontFamily: {
        display: ["Newsreader", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["Newsreader", "Georgia", "serif"],
        mono: ["var(--font-mono)"],
      },
      fontSize: {
        display: ["39px", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        h1: ["31px", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        h2: ["25px", { lineHeight: "1.2" }],
        h3: ["20px", { lineHeight: "1.35" }],
        body: ["16px", { lineHeight: "1.6" }],
        small: ["13px", { lineHeight: "1.5" }],
        caption: ["11px", { lineHeight: "1.4" }],
      },
      maxWidth: {
        measure: "68ch",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        marquee: "marquee 45s linear infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;
