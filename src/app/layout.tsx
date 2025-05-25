import type { Metadata } from "next";
import {Koh_Santepheap, Italianno, Tangerine, Noto_Serif } from "next/font/google";
import "./globals.css";

const koh_Santepheap = Koh_Santepheap({
  variable: "--font-koh-santepheap",
  style: "normal",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
  preload: true,
});

const noto_Serif = Noto_Serif({
  variable: "--font-noto-serif",
  style: "normal",
  subsets: ["latin"],
  weight: ["300","400", "500", "700"],
  display: "swap",
  preload: true,
});

const italianno = Italianno({
  variable: "--font-italianno",
  style: "normal",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  preload: true,
})

const tangerine = Tangerine({
  variable: "--font-tangerine",
  style: "normal",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  preload: true,
})

export const metadata: Metadata = {
  title: "Nos casamos, Carolina y Victor",
  description: "Te invitamos al día más especial de nuestra vida, nuestro matrimonio. Separa tu fecha el próximo 26 de Julio del 2025.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${koh_Santepheap.variable} ${italianno.variable} ${tangerine.variable} ${noto_Serif.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
