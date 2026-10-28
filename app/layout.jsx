import { Archivo, Inter } from "next/font/google";
import Cabecalho from "../components/Cabecalho";
import CampanhaInstagram from "../components/CampanhaInstagram";
import Rodape from "../components/Rodape";
import { JsonLd } from "../components/ui";
import { empresaJsonLd, nomeEmpresa, ogImagem, siteUrl } from "../lib/dados";
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

const descricao =
  "Lanternagem, pintura, polimento, vitrificação e revitalização de plásticos na Barra da Tijuca (RJ). Oficina parceira das seguradoras. Orçamento pelo WhatsApp.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `Lanternagem e Pintura na Barra da Tijuca | ${nomeEmpresa}`,
    template: `%s | ${nomeEmpresa}`,
  },
  description: descricao,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: nomeEmpresa,
    title: `Lanternagem e Pintura na Barra da Tijuca | ${nomeEmpresa}`,
    description: descricao,
    images: [ogImagem],
  },
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${archivo.variable}`}>
      <body className="font-sans pb-16 md:pb-0">
        <JsonLd data={empresaJsonLd} />
        <Cabecalho />
        <main className="overflow-x-hidden bg-paper text-ink">
          {children}
        </main>
        <Rodape />
        <CampanhaInstagram />
      </body>
    </html>
  );
}
