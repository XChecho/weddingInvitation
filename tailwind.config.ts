import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        almostBlack: "#1A1A1A",
        almostWhite: "#F1F1F1",
        lightBrown: "#B69987",
        midleBrown: "#939487",
        whiteBrown: "#FDF9F7",
      },
      fontFamily: {
        koh: ['var(--font-koh-santepheap)'],
        itali: ['var(--font-italianno)'],
        tangerine: ['var(--font-tangerine)'],
        noto: ['var(--font-noto-serif)'],
      },
      boxShadow: {
        cardShadow: "0px 4px 8px 0px rgba(0, 0, 0, 0.5)"
      },
      backgroundImage: {
        bgAlliance: "url('src/assets/background/allianceBg.webp')",
      }
    },
  },
  plugins: [],
} satisfies Config;
