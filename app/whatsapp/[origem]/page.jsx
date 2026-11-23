import { notFound } from "next/navigation";
import AbrirWhatsApp from "../../../components/AbrirWhatsApp";
import { msgOrcamento, whatsappLink } from "../../../lib/dados";

// Página de passagem: conta o clique (Vercel Analytics) e abre o WhatsApp.
export const metadata = {
  title: "Abrindo o WhatsApp",
  robots: { index: false, follow: false },
};

export default function PaginaWhatsApp({ params, searchParams }) {
  if (!/^[a-z0-9-]{1,60}$/.test(params.origem)) notFound();

  const texto =
    typeof searchParams.texto === "string" && searchParams.texto.trim()
      ? searchParams.texto.slice(0, 1000)
      : msgOrcamento;

  return <AbrirWhatsApp destino={whatsappLink(texto)} />;
}
