import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, PhoneIcon, WhatsAppIcon } from "../../components/Icones";
import {
  Breadcrumb,
  ListaChecks,
  ListaSeguradoras,
  PassosNumerados,
} from "../../components/Blocos";
import SecaoContato from "../../components/SecaoContato";
import { btnPrimary, btnSecondary, Eyebrow, JsonLd, TituloSecao } from "../../components/ui";
import {
  empresaId,
  msgSinistro,
  ogImagem,
  passosSinistro,
  servicos,
  siteUrl,
  telefoneLigar,
  whatsappLink,
} from "../../lib/dados";

const titulo = "Oficina parceira de seguradoras na Barra da Tijuca";
const descricao =
  "Oficina com parceria direta com as seguradoras na Barra da Tijuca: lanternagem e pintura para sinistros, com acompanhamento de todo o processo.";

export const metadata = {
  title: titulo,
  description: descricao,
  alternates: { canonical: "/sinistro" },
  openGraph: { title: titulo, description: descricao, url: "/sinistro", images: [ogImagem] },
};

const reparoSeguro = servicos.filter((s) => s.sinistro);

export default function PaginaSinistro() {
  const url = `${siteUrl}/sinistro`;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Reparo de sinistro com seguradora",
      serviceType: "Lanternagem e pintura para sinistros de seguradora",
      description: descricao,
      url,
      provider: { "@id": empresaId },
      areaServed: "Barra da Tijuca, Rio de Janeiro",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Início", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "Sinistro e seguradoras", item: url },
      ],
    },
  ];

  return (
    <>
      <JsonLd data={jsonLd} />

      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-5 pt-5 md:px-6 md:pt-10">
          <Breadcrumb
            itens={[{ nome: "Início", href: "/" }, { nome: "Sinistro e seguradoras" }]}
          />
        </div>

        <div className="mx-auto grid max-w-7xl items-center gap-7 px-5 pb-12 pt-5 md:grid-cols-2 md:gap-16 md:px-6 md:pb-24 md:pt-12">
          <div>
            <Eyebrow>Sinistro e seguradoras</Eyebrow>

            <h1 className="mt-4 font-display text-[2.05rem] font-extrabold leading-[1.05] md:mt-5 md:text-6xl">
              {titulo}
            </h1>

            <p className="mt-4 max-w-xl text-lg text-muted md:mt-6 md:text-xl">
              Bateu o carro? A Blink tem parceria direta com as seguradoras e
              cuida do reparo de lanternagem e pintura, acompanhando o
              processo do sinistro do começo ao fim.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row md:mt-8">
              <a
                href={whatsappLink(msgSinistro)}
                target="_blank"
                rel="noopener noreferrer"
                className={btnPrimary}
              >
                <WhatsAppIcon className="h-5 w-5" />
                Falar sobre meu sinistro
              </a>

              <a href={telefoneLigar.href} className={btnSecondary}>
                <PhoneIcon className="h-5 w-5" />
                {telefoneLigar.label}
              </a>
            </div>
          </div>

          <div className="relative order-first mx-auto aspect-[4/3] w-full max-w-[480px] overflow-hidden rounded-2xl bg-mist shadow-[0_30px_60px_-30px_rgba(22,24,27,0.45)] md:order-none md:aspect-[4/5] md:rounded-[28px]">
            <Image
              src="/galeria/3.jpg"
              alt="Reparo de lanternagem em SUV prata na Blink"
              fill
              priority
              sizes="(min-width: 768px) 480px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-mist py-14 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-6">
          <TituloSecao
            eyebrow="Seguradoras parceiras"
            titulo="Parceria direta com as seguradoras"
            texto="Atendimento ágil para sinistros, aprovação rápida e suporte completo durante todo o processo."
          />
          <div className="mt-12">
            <ListaSeguradoras />
          </div>
          <div className="mt-16">
            <PassosNumerados
              passos={passosSinistro}
              titulo="Como funciona o reparo pelo seguro"
              Tag="h2"
            />
          </div>
        </div>
      </section>

      <section className="bg-paper py-14 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-2 md:gap-16 md:px-6">
          <div>
            <h2 className="font-display text-[1.75rem] font-extrabold leading-tight md:text-4xl">
              Por que fazer o reparo na Blink
            </h2>
            <ListaChecks
              className="mt-8"
              itens={[
                "Parceria direta com as seguradoras",
                "Lanternagem e pintura no mesmo lugar",
                "Acompanhamento da vistoria e da aprovação do orçamento",
                "Unidade na Rua Joathur Bueno, 272, na Barra da Tijuca",
              ]}
            />
          </div>

          <div>
            <h2 className="font-display text-[1.75rem] font-extrabold leading-tight md:text-4xl">
              Serviços feitos pelo seguro
            </h2>
            <ul className="mt-8 space-y-4">
              {reparoSeguro.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/${s.slug}`}
                    className="group flex items-center justify-between gap-4 rounded-2xl border border-line bg-white p-6 transition-colors hover:border-brand"
                  >
                    <span>
                      <span className="block text-xl font-bold">{s.nome}</span>
                      <span className="mt-1 block text-base text-muted">
                        {s.resumo}
                      </span>
                    </span>
                    <ArrowRightIcon className="h-5 w-5 shrink-0 text-brand-dark transition-transform group-hover:translate-x-1" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <SecaoContato
        servicoInicial="Sinistro / Seguradora"
        titulo="Fale com a gente sobre o seu sinistro"
        className="bg-mist"
      />
    </>
  );
}
