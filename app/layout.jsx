import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

const siteUrl = "https://www.blinkautomotiva.com.br";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: "Lanternagem e Pintura na Barra da Tijuca | Blink Estética Automotiva",
  description:
    "Oficina de lanternagem, pintura automotiva e polimento técnico na Barra da Tijuca (RJ). Atendemos sinistros de seguradora. Peça seu orçamento pelo WhatsApp.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "Blink Estética Automotiva",
    title: "Lanternagem e Pintura na Barra da Tijuca | Blink Estética Automotiva",
    description:
      "Lanternagem, pintura e polimento técnico na Barra da Tijuca. Atendimento para sinistros de seguradora.",
    images: [{ url: "/hero.jpg", alt: "Fachada da Blink Estética Automotiva" }],
  },
  icons: {
    icon: "/icon.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoBodyShop",
  name: "Blink Estética Automotiva",
  url: siteUrl,
  image: `${siteUrl}/hero.jpg`,
  logo: `${siteUrl}/logo.png`,
  telephone: "+55-21-2439-4259",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua Joathur Bueno, 272",
    addressLocality: "Rio de Janeiro",
    addressRegion: "RJ",
    addressCountry: "BR",
  },
  areaServed: "Barra da Tijuca, Rio de Janeiro",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+55-21-96918-7827",
      contactType: "customer service",
      availableLanguage: "Portuguese",
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={inter.className}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
