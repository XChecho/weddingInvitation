import type { Metadata } from "next";
import { Italianno, Cormorant_Garamond, Koh_Santepheap, Allura } from "next/font/google";
import "./globals.css";

const cormorant_Garamond = Cormorant_Garamond({
  variable: "--font-cormorant-garamond",
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

const koh_Santepheap = Koh_Santepheap({
  variable: "--font-koh-santepheap",
  style: "normal",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
  preload: true,
})

const allura = Allura({
  variable: "--font-allura",
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
        className={`${italianno.variable} ${cormorant_Garamond.variable} ${koh_Santepheap.variable} ${allura.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
