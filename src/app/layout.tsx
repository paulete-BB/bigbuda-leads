import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Misma familia (Inter) que usa el sitio de Bigbuda.
const inter = Inter({
  variable: "--font-inter",
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "¿Te encuentran? — Informe gratuito de visibilidad online",
  description:
    "Descubre cómo te ve Google y cómo te ve la IA cuando alguien busca tu negocio.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${inter.variable} h-full antialiased print:h-auto`}
    >
      <body className="min-h-full flex flex-col print:min-h-0">
        <div className="barra-marca h-1.5 w-full" />
        {children}
      </body>
    </html>
  );
}
