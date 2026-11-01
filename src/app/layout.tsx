import type { Metadata } from "next";
import { Archivo, Gloock } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const gloock = Gloock({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Atelier Aveline — Turnkey interior architecture",
  description:
    "A turnkey residential interior design studio for whole homes. One studio for the design, the making, and the day you move in.",
  openGraph: {
    title: "Atelier Aveline — Turnkey interior architecture",
    description:
      "A turnkey residential interior design studio for whole homes. One studio for the design, the making, and the day you move in.",
    type: "website",
    images: [
      {
        url: "/images/hero-arch.jpg",
        width: 2600,
        height: 3467,
        alt: "Low afternoon sun across a limewash arch and pale stone floor.",
      },
    ],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${archivo.variable} ${gloock.variable}`}>
      <body className="min-h-full bg-paper text-ink">{children}</body>
    </html>
  );
}
