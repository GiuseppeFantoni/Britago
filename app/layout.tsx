import type { Metadata } from "next";
import { Inter, Montserrat, Roboto } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { OrganizationJsonLd } from "@/components/seo/JsonLd";
import { baseMetadata } from "@/lib/seo/metadata";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter-next",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat-next",
  display: "swap",
  weight: ["600", "700", "800"],
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto-next",
  display: "swap",
});

export const metadata: Metadata = {
  ...baseMetadata,
  keywords: [
    "brita",
    "mineração",
    "agregados",
    "Goiás",
    "Santa Bárbara de Goiás",
    "construção civil",
    "brita 1",
    "brita 2",
    "pó de brita",
    "areia",
    "Britago",
  ],
  authors: [{ name: "Britago Mineração" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`h-full ${inter.variable} ${montserrat.variable} ${roboto.variable}`}
    >
      <body className="min-h-full font-roboto antialiased">
        {children}
        <OrganizationJsonLd />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
