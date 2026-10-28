import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRightIcon, PhoneIcon, WhatsAppIcon } from "../../components/Icones";
import {
  Breadcrumb,
  CardsServicos,
  ListaChecks,
  PassosNumerados,
} from "../../components/Blocos";
import SecaoContato from "../../components/SecaoContato";
import { btnPrimary, btnSecondary, Eyebrow, JsonLd, TituloSecao } from "../../components/ui";
import {
  empresaId,
  msgServico,
  ogImagem,
  passosServico,
  servicos,
  siteUrl,
  telefoneLigar,
  whatsappLink,
} from "../../lib/dados";

export const dynamicParams = false;

export function generateStaticParams() {
  return servicos.map((s) => ({ slug: s.slug }));
}

const buscarServico = (slug) => servicos.find((s) => s.slug === slug);

export function generateMetadata({ params }) {
  const servico = buscarServico(params.slug);

  if (!servico) return {};

  return {
    title: servico.titulo,
    description: servico.metaDescricao,
    alternates: { canonical: `/${servico.slug}` },
    openGraph: {
      title: servico.titulo,
      description: servico.metaDescricao,
      url: `/${servico.slug}`,
      images: [ogImagem],
    },
  };
}

export default function PaginaServico({ params }) {
  const servico = buscarServico(params.slug);

  if (!servico) notFound();

  const url = `${siteUrl}/${servico.slug}`;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: servico.nome,
      serviceType: servico.nome,
      description: servico.metaDescricao,
      url,
      provider: { "@id": empresaId },
      areaServed: "Barra da Tijuca, Rio de Janeiro",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Início", item: siteUrl },
        { "@type": "ListItem", position: 2, name: servico.nome, item: url },
      ],
    },
  ];

  return (
    <>
      <JsonLd data={jsonLd} />

      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-5 pt-5 md:px-6 md:pt-10">
          <Breadcrumb
            itens={[
              { nome: "Início", href: "/" },
              { nome: "Serviços", href: "/#servicos" },
              { nome: servico.nome },
            ]}
          />
        </div>

        <div className="mx-auto grid max-w-7xl items-center gap-7 px-5 pb-12 pt-5 md:grid-cols-2 md:gap-16 md:px-6 md:pb-24 md:pt-12">
          <div>
            <Eyebrow>Serviço · Barra da Tijuca</Eyebrow>

            <h1 className="mt-4 font-display text-[2.05rem] font-extrabold leading-[1.05] md:mt-5 md:text-6xl">
              {servico.titulo}
            </h1>

            <p className="mt-4 max-w-xl text-lg text-muted md:mt-6 md:text-xl">
              {servico.intro}
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row md:mt-8">
              <a
                href={whatsappLink(msgServico(servico.nome))}
                target="_blank"
                rel="noopener noreferrer"
                className={btnPrimary}
              >
                <WhatsAppIcon className="h-5 w-5" />
                Pedir orçamento no WhatsApp
              </a>

              <a href={telefoneLigar.href} className={btnSecondary}>
                <PhoneIcon className="h-5 w-5" />
                {telefoneLigar.label}
              </a>
            </div>
          </div>

          <div className="relative order-first mx-auto aspect-[4/3] w-full max-w-[480px] overflow-hidden rounded-2xl bg-mist shadow-[0_30px_60px_-30px_rgba(22,24,27,0.45)] md:order-none md:aspect-[4/5] md:rounded-[28px]">
            <Image
              src={servico.imagem.src}
              alt={servico.imagem.alt}
              fill
              priority
              sizes="(min-width: 768px) 480px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-mist py-14 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-2 md:gap-16 md:px-6">
          <div>
            <h2 className="font-display text-[1.75rem] font-extrabold leading-tight md:text-4xl">
              Quando fazer {servico.nome.toLowerCase()}
            </h2>
            <ListaChecks className="mt-8" itens={servico.quando} />
          </div>

          <div>
            <h2 className="font-display text-[1.75rem] font-extrabold leading-tight md:text-4xl">
              Como é feito
            </h2>
            {servico.detalhes.map((p) => (
              <p key={p} className="mt-6 text-lg text-muted">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper py-14 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-6">
          <PassosNumerados
            passos={passosServico}
            titulo="Como funciona na Blink"
            Tag="h2"
          />

          {servico.sinistro && (
            <div className="mt-12 flex flex-col gap-6 rounded-3xl bg-ink p-6 text-white md:flex-row md:items-center md:justify-between md:p-10">
              <div>
                <p className="font-display text-2xl font-bold [font-stretch:112%]">
                  Foi batida? Dá para fazer pelo seguro.
                </p>
                <p className="mt-2 text-base text-white/75 md:text-lg">
                  A Blink tem parceria direta com as seguradoras e acompanha o
                  processo do sinistro do começo ao fim.
                </p>
              </div>
              <Link
                href="/sinistro"
                className="inline-flex min-h-[48px] shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-5 text-base font-semibold md:min-h-[52px] md:px-6 md:text-lg text-ink transition-colors hover:bg-brand-soft"
              >
                Como funciona
                <ArrowRightIcon className="h-5 w-5" />
              </Link>
            </div>
          )}
        </div>
      </section>

      <section className="bg-mist py-14 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-6">
          <TituloSecao eyebrow="Outros serviços" titulo="Tudo para o seu carro em um só lugar" />
          <div className="mt-12">
            <CardsServicos excluir={servico.slug} colunas="lg:grid-cols-3" />
          </div>
        </div>
      </section>

      <SecaoContato
        servicoInicial={servico.nome}
        titulo={`Peça seu orçamento de ${servico.nome.toLowerCase()}`}
      />
    </>
  );
}
