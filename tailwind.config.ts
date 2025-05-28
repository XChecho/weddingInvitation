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
        lightBrown: "#926B07",
        midleBrown: "#939487",
        whiteBrown: "#F6F3F0",
      },
      fontFamily: {
        allura: ['var(--font-allura)'],
        itali: ['var(--font-italianno)'],
        koh: ['var(--font-koh-santepheap)'],
        cormorant: ['var(--font-cormorant-garamond)'],
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
