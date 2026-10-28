import Image from "next/image";
import Link from "next/link";
import { PhoneIcon, WhatsAppIcon } from "./Icones";
import {
  bairroCidade,
  endereco,
  mapsLink,
  msgOrcamento,
  nomeEmpresa,
  servicos,
  telefoneLigar,
  telefones,
  whatsappLink,
} from "../lib/dados";

const tituloColuna =
  "text-sm font-semibold uppercase tracking-[0.14em] text-brand";

export default function Rodape() {
  return (
    <>
      <footer className="bg-ink text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-2 md:px-6 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Image
              src="/logo-branco.png"
              alt="Logo Blink Estética Automotiva"
              width={640}
              height={426}
              className="h-16 w-auto"
            />
            <p className="mt-4 max-w-sm text-base text-white/70">
              Lanternagem, pintura e estética automotiva na Barra da Tijuca.
              Oficina parceira das seguradoras.
            </p>
          </div>

          <nav aria-label="Serviços">
            <h2 className={tituloColuna}>Serviços</h2>
            <ul className="mt-3 space-y-1 text-base">
              {servicos.map((s) => (
                <li key={s.slug}>
                  <Link href={`/${s.slug}`} className="text-white/85 hover:text-white">
                    {s.nome}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/sinistro" className="text-white/85 hover:text-white">
                  Sinistro e seguradoras
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <h2 className={tituloColuna}>Endereço</h2>
            <a
              href={mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 block text-base text-white/85 hover:text-white"
            >
              {endereco}
              <br />
              {bairroCidade}
            </a>

            <h2 className={`${tituloColuna} mt-6`}>Horário</h2>
            <p className="mt-3 text-base text-white/85">
              Segunda a sexta
              <br />
              Das 8h às 18h
            </p>
          </div>

          <div>
            <h2 className={tituloColuna}>Telefones</h2>
            <ul className="mt-3 space-y-1 text-base">
              {telefones.map((t) => (
                <li key={t.href}>
                  <a href={t.href} className="text-white/85 hover:text-white">
                    {t.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10">
          <p className="mx-auto max-w-7xl px-5 py-6 text-sm text-white/55 md:px-6">
            © {new Date().getFullYear()} {nomeEmpresa}. Todos os direitos
            reservados.
          </p>
        </div>
      </footer>

      {/* BARRA FIXA NO CELULAR */}
      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-3 border-t border-line bg-white/95 p-3 backdrop-blur-md md:hidden">
        <a
          href={telefoneLigar.href}
          className="flex h-12 items-center justify-center gap-2 rounded-xl border-2 border-ink/15 text-lg font-semibold text-ink"
        >
          <PhoneIcon className="h-5 w-5" />
          Ligar
        </a>

        <a
          href={whatsappLink(msgOrcamento)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-12 items-center justify-center gap-2 rounded-xl bg-brand-dark text-lg font-semibold text-white"
        >
          <WhatsAppIcon className="h-5 w-5" />
          WhatsApp
        </a>
      </div>
    </>
  );
}
