import { ClockIcon, PhoneIcon, PinIcon } from "./Icones";
import FormOrcamento from "./FormOrcamento";
import { btnSecondary, TituloSecao } from "./ui";
import {
  bairroCidade,
  endereco,
  mapsEmbed,
  mapsLink,
  telefones,
} from "../lib/dados";

const iconeCaixa =
  "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-brand-dark";

export default function SecaoContato({
  servicoInicial,
  titulo = "Venha conhecer a oficina",
  className = "bg-paper",
}) {
  return (
    <section id="contato" className={`scroll-mt-20 py-14 md:py-28 ${className}`}>
      <div className="mx-auto max-w-7xl px-5 md:px-6">
        <TituloSecao
          eyebrow="Contato"
          titulo={titulo}
          texto="Atendimento pelo telefone, pelo WhatsApp ou pessoalmente."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 md:gap-8">
          <div className="rounded-3xl border border-line bg-white p-6 md:p-8">
            <h3 className="text-2xl font-bold">Unidade Barra da Tijuca</h3>

            <div className="mt-6 flex gap-4">
              <span className={iconeCaixa}>
                <PinIcon className="h-5 w-5" />
              </span>
              <p className="text-lg">
                {endereco}
                <br />
                <span className="text-muted">{bairroCidade}</span>
              </p>
            </div>

            <div className="mt-5 flex gap-4">
              <span className={iconeCaixa}>
                <ClockIcon className="h-5 w-5" />
              </span>
              <p className="text-lg">
                Segunda a sexta
                <br />
                <span className="text-muted">Das 8h às 18h</span>
              </p>
            </div>

            <ul className="mt-6 divide-y divide-line border-y border-line">
              {telefones.map((t) => (
                <li key={t.href}>
                  <a
                    href={t.href}
                    className="flex items-center justify-between gap-4 py-4 hover:text-brand-dark"
                  >
                    <span>
                      <span className="block text-sm text-muted">{t.tipo}</span>
                      <span className="block text-xl font-semibold">{t.label}</span>
                    </span>
                    <span className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-brand-dark">
                      <PhoneIcon className="h-5 w-5" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-6 overflow-hidden rounded-2xl border border-line">
              <iframe
                src={mapsEmbed}
                width="100%"
                height="280"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa da Blink Estética Automotiva"
                className="w-full"
              ></iframe>
            </div>

            <a
              href={mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`${btnSecondary} mt-6 w-full`}
            >
              <PinIcon className="h-5 w-5" />
              Como chegar
            </a>
          </div>

          <div className="rounded-3xl border border-line bg-white p-6 md:self-start md:p-8">
            <h3 className="text-2xl font-bold">Pedir orçamento</h3>

            <p className="mt-2 text-base text-muted">
              Preencha e envie direto para o nosso WhatsApp. Se puder, mande
              fotos do carro na conversa.
            </p>

            <FormOrcamento servicoInicial={servicoInicial} />
          </div>
        </div>
      </div>
    </section>
  );
}
