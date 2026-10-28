import { Archivo, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const archivo = Archivo({
  subsets: ["latin"],
  display: "swap",
  axes: ["wdth"],
  variable: "--font-archivo",
});

const siteUrl = "https://www.blinkautomotiva.com.br";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: "Lanternagem e Pintura na Barra da Tijuca | Blink Estética Automotiva",
  description:
    "Lanternagem, pintura, polimento e cristalização, vitrificação e revitalização de plásticos na Barra da Tijuca (RJ). Atendemos sinistros de seguradora. Orçamento pelo WhatsApp.",
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
      "Lanternagem, pintura, polimento, vitrificação e estética automotiva na Barra da Tijuca. Atendimento para sinistros de seguradora.",
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
  logo: `${siteUrl}/logo-marca.png`,
  telephone: "+55-21-98279-5747",
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
    <html lang="pt-BR" className={`${inter.variable} ${archivo.variable}`}>
      <body className="font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
