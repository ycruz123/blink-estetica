"use client";

import Image from "next/image";
import { useState } from "react";

function PhoneIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
      {...props}
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3.08 4.18 2 2 0 0 1 5.06 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.77.62 2.6a2 2 0 0 1-.45 2.11L9.1 9.91a16 16 0 0 0 5 5l1.48-1.13a2 2 0 0 1 2.11-.45c.83.29 1.7.5 2.6.62A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function PinIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
      {...props}
    >
      <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function ClockIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function CheckIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      aria-hidden="true"
      {...props}
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function WhatsAppIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35zM12.04 21.5h-.01a9.4 9.4 0 0 1-4.8-1.32l-.34-.2-3.57.94.95-3.48-.22-.36a9.4 9.4 0 0 1-1.44-5.01c0-5.2 4.23-9.43 9.44-9.43a9.38 9.38 0 0 1 9.43 9.44c0 5.2-4.24 9.43-9.44 9.43zm8.03-17.46A11.27 11.27 0 0 0 12.04.7C5.78.7.7 5.78.7 12.04c0 2 .52 3.95 1.52 5.67L.6 23.6l6.03-1.58a11.33 11.33 0 0 0 5.41 1.38h.01c6.25 0 11.34-5.09 11.34-11.34 0-3.03-1.18-5.88-3.32-8.02z" />
    </svg>
  );
}

function ArrowRightIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
      {...props}
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

function MenuIcon({ open, ...props }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
      {...props}
    >
      {open ? (
        <>
          <line x1="6" y1="6" x2="18" y2="18" />
          <line x1="18" y1="6" x2="6" y2="18" />
        </>
      ) : (
        <>
          <line x1="4" y1="7" x2="20" y2="7" />
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="4" y1="17" x2="20" y2="17" />
        </>
      )}
    </svg>
  );
}

function Eyebrow({ children, className = "" }) {
  return (
    <p
      className={`flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.14em] text-brand-dark ${className}`}
    >
      <span className="h-0.5 w-8 bg-brand" aria-hidden="true" />
      {children}
    </p>
  );
}

const whatsappNumber = "5521969187827";

const whatsappLink = (msg) =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`;

const telefones = [
  { label: "(21) 2439-4259", tipo: "Telefone fixo", href: "tel:+552124394259" },
  { label: "(21) 96918-7827", tipo: "Celular e WhatsApp", href: "tel:+5521969187827" },
  { label: "(21) 98222-7699", tipo: "Celular", href: "tel:+5521982227699" },
];

const telefoneFixo = telefones[0];

const endereco = "Rua Joathur Bueno, 272";
const mapsLink =
  "https://www.google.com/maps/search/?api=1&query=Rua+Joathur+Bueno,+272+Barra+da+Tijuca+RJ";

const navItems = [
  ["servicos", "Serviços"],
  ["seguradoras", "Seguradoras"],
  ["galeria", "Galeria"],
  ["contato", "Contato"],
];

const servicos = [
  {
    nome: "Lanternagem",
    descricao:
      "Recuperação de amassados e reparo de peças da carroceria, devolvendo o formato original do veículo.",
  },
  {
    nome: "Pintura Automotiva",
    descricao:
      "Pintura parcial ou completa, com preparo da superfície e acerto de cor para igualar ao restante do carro.",
  },
  {
    nome: "Polimento e Cristalização",
    descricao:
      "Polimento técnico para corrigir riscos superficiais e manchas, seguido de cristalização para realçar o brilho da pintura.",
  },
  {
    nome: "Vitrificação",
    descricao:
      "Camada de proteção sobre a pintura que facilita a limpeza e ajuda a manter o brilho por mais tempo.",
  },
  {
    nome: "Revitalização de Plásticos",
    descricao:
      "Recupera a cor e o aspecto de plásticos internos e externos ressecados ou desbotados pelo sol.",
  },
  {
    nome: "Higienização Interna",
    descricao:
      "Limpeza profunda de bancos, carpetes, teto e painel, removendo sujeira, manchas e odores.",
  },
  {
    nome: "Detalhamento Automotivo",
    descricao:
      "Cuidado minucioso de interior e exterior, com atenção a rodas, frisos e acabamentos que a limpeza comum não alcança.",
  },
];

const seguradoras = [
  { nome: "Porto Seguro", img: "/porto.png" },
  { nome: "Azul Seguros", img: "/azul.png" },
  { nome: "Itaú Seguros", img: "/itau.png" },
  { nome: "Demais seguradoras", img: "/demais.png" },
];

const passosSinistro = [
  {
    titulo: "Abra o sinistro",
    texto: "Comunique o ocorrido à sua seguradora e informe que o reparo será na Blink.",
  },
  {
    titulo: "Traga o carro",
    texto: "Receba o veículo na nossa unidade da Barra da Tijuca para avaliação.",
  },
  {
    titulo: "Acompanhamos tudo",
    texto: "Cuidamos do contato com a seguradora durante vistoria e aprovação do orçamento.",
  },
  {
    titulo: "Retire pronto",
    texto: "Seu carro é entregue reparado, revisado e com o acabamento conferido.",
  },
];

const galeria = [
  { src: "/galeria/5.jpg", alt: "Mercedes preta com pintura polida na Blink" },
  { src: "/galeria/3.jpg", alt: "Reparo de lanternagem na porta de SUV prata" },
  { src: "/galeria/2.jpg", alt: "Profissional da Blink fazendo acabamento em SUV prata" },
  { src: "/galeria/4.jpg", alt: "Traseira de carro preparada e mascarada para pintura" },
  { src: "/galeria/6.jpg", alt: "Interior em couro caramelo após detalhamento" },
  { src: "/galeria/1.jpg", alt: "Hyundai HB20 preto finalizado na oficina Blink" },
];

const msgOrcamento = "Olá! Vim pelo site e quero um orçamento.";
const msgSinistro =
  "Olá! Vim pelo site e preciso de atendimento para um sinistro com a seguradora.";
const msgFoto =
  "Olá! Vim pelo site. Vou mandar uma foto do carro para vocês avaliarem.";

const btnPrimary =
  "inline-flex min-h-[52px] items-center justify-center gap-2 rounded-xl bg-brand-dark px-6 text-lg font-semibold text-white transition-colors hover:bg-brand-darker";
const btnSecondary =
  "inline-flex min-h-[52px] items-center justify-center gap-2 rounded-xl border-2 border-ink/15 bg-white px-6 text-lg font-semibold text-ink transition-colors hover:border-ink/40";

export default function Home() {
  const [open, setOpen] = useState(false);

  const [nome, setNome] = useState("");
  const [servico, setServico] = useState("");
  const [descricao, setDescricao] = useState("");

  const scrollToId = (id) => {
    setOpen(false);

    const el = document.getElementById(id);

    if (!el) return;

    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const enviarWhatsApp = () => {
    const msg =
      `Olá! Vim pelo site e quero um orçamento.\n\n` +
      `Nome: ${nome || "-"}\n` +
      `Serviço: ${servico || "-"}\n\n` +
      `Descrição: ${descricao || "-"}`;

    window.open(whatsappLink(msg), "_blank", "noopener,noreferrer");
  };

  return (
    <main className="overflow-x-hidden bg-paper pb-[72px] text-ink md:pb-0">
      {/* FAIXA SUPERIOR */}
      <div className="hidden bg-ink text-white/85 md:block">
        <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-6 text-sm">
          <span className="flex items-center gap-2">
            <PinIcon className="h-4 w-4" />
            {endereco} – Barra da Tijuca, Rio de Janeiro
          </span>
          <span className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <ClockIcon className="h-4 w-4" />
              Segunda a sexta, das 8h às 18h
            </span>
            <a
              href={telefoneFixo.href}
              className="flex items-center gap-2 font-semibold text-white hover:text-brand"
            >
              <PhoneIcon className="h-4 w-4" />
              {telefoneFixo.label}
            </a>
          </span>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <nav className="flex h-[72px] items-center justify-between md:h-20">
            <button
              type="button"
              className="flex items-center gap-3 text-left"
              onClick={() => scrollToId("inicio")}
                          >
              <Image
                src="/logo-marca.png"
                alt="Blink Estética Automotiva"
                width={640}
                height={426}
                className="h-12 w-auto md:h-16"
                priority
              />
            </button>

            <ul className="hidden items-center gap-8 md:flex">
              {navItems.map(([id, label]) => (
                <li key={id}>
                  <button
                    type="button"
                    onClick={() => scrollToId(id)}
                    className="text-base font-medium text-ink/80 transition-colors hover:text-brand-dark"
                  >
                    {label}
                  </button>
                </li>
              ))}
              <li>
                <a
                  href={whatsappLink(msgOrcamento)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 items-center gap-2 rounded-xl bg-brand-dark px-5 text-base font-semibold text-white transition-colors hover:bg-brand-darker"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  Orçamento
                </a>
              </li>
            </ul>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              aria-expanded={open}
              className="flex h-12 w-12 items-center justify-center rounded-xl border border-line text-ink md:hidden"
            >
              <MenuIcon open={open} className="h-6 w-6" />
            </button>
          </nav>
        </div>

        {open && (
          <ul className="border-t border-line bg-white px-4 pb-4 pt-2 md:hidden">
            {navItems.map(([id, label]) => (
              <li key={id}>
                <button
                  type="button"
                  onClick={() => scrollToId(id)}
                  className="w-full border-b border-line py-4 text-left text-lg font-medium text-ink"
                >
                  {label}
                </button>
              </li>
            ))}
            <li className="pt-4 text-base text-muted">
              Segunda a sexta, das 8h às 18h
            </li>
          </ul>
        )}
      </header>

      {/* INÍCIO */}
      <section id="inicio" className="scroll-mt-24 bg-paper">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-12 md:grid-cols-2 md:gap-16 md:px-6 md:py-24">
          <div>
            <Eyebrow>Barra da Tijuca · RJ</Eyebrow>

            <h1 className="mt-5 font-display text-[2.6rem] font-extrabold leading-[1.05] md:text-6xl">
              Lanternagem e pintura na{" "}
              <span className="text-brand-dark">Barra da Tijuca</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg text-muted md:text-xl">
              Lanternagem, pintura, polimento, vitrificação e estética
              automotiva em um só lugar, com atendimento para sinistros de
              seguradora.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappLink(msgOrcamento)}
                target="_blank"
                rel="noopener noreferrer"
                className={btnPrimary}
              >
                <WhatsAppIcon className="h-5 w-5" />
                Pedir orçamento no WhatsApp
              </a>

              <a href={telefoneFixo.href} className={btnSecondary}>
                <PhoneIcon className="h-5 w-5" />
                {telefoneFixo.label}
              </a>
            </div>

            <ul className="mt-10 space-y-3 text-base text-ink/85 md:text-lg">
              {[
                "Atendimento para sinistros de seguradora",
                "Segunda a sexta, das 8h às 18h",
                `${endereco} – fácil de chegar`,
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand-dark">
                    <CheckIcon className="h-4 w-4" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative mx-auto w-full max-w-[520px]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] bg-mist shadow-[0_30px_60px_-30px_rgba(22,24,27,0.45)] md:aspect-square">
              <Image
                src="/hero.jpg"
                alt="Fachada da Blink Estética Automotiva na Rua Joathur Bueno, 272"
                fill
                priority
                sizes="(min-width: 768px) 520px, 100vw"
                className="object-cover"
              />
            </div>

            <a
              href={mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute -bottom-5 left-4 right-4 flex items-center gap-4 rounded-2xl border border-line bg-white p-4 shadow-lg sm:left-auto sm:right-6 sm:w-auto"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-brand-dark">
                <PinIcon className="h-5 w-5" />
              </span>
              <span className="leading-tight">
                <span className="block text-sm text-muted">Nossa unidade</span>
                <span className="block text-base font-semibold">
                  {endereco}
                </span>
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* SEGURADORAS */}
      <section id="seguradoras" className="scroll-mt-20 bg-mist py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-6">
          <div className="max-w-3xl">
            <Eyebrow>Sinistro e seguradoras</Eyebrow>

            <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight md:text-5xl">
              Bateu o carro? A gente resolve com a sua seguradora.
            </h2>

            <p className="mt-5 text-lg text-muted">
              Atendimento ágil para sinistros, aprovação rápida e suporte
              completo durante todo o processo.
            </p>
          </div>

          <ul className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {seguradoras.map((s) => (
              <li
                key={s.nome}
                className="flex flex-col items-center rounded-2xl border border-line bg-white p-5"
              >
                <div className="relative h-20 w-full">
                  <Image
                    src={s.img}
                    alt={s.nome}
                    fill
                    sizes="160px"
                    className="object-contain"
                  />
                </div>
                <p className="mt-4 text-center text-base font-semibold">
                  {s.nome}
                </p>
              </li>
            ))}
          </ul>

          <h3 className="mt-16 font-display text-2xl font-bold">
            Como funciona
          </h3>

          <ol className="mt-6 grid gap-4 md:grid-cols-4 md:gap-6">
            {passosSinistro.map((p, i) => (
              <li
                key={p.titulo}
                className="rounded-2xl border border-line bg-white p-5 md:p-6"
              >
                <span className="font-display text-3xl md:text-4xl font-extrabold text-brand [font-stretch:125%]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h4 className="mt-3 text-xl font-bold">{p.titulo}</h4>
                <p className="mt-2 text-base text-muted">{p.texto}</p>
              </li>
            ))}
          </ol>

          <a
            href={whatsappLink(msgSinistro)}
            target="_blank"
            rel="noopener noreferrer"
            className={`${btnPrimary} mt-10 w-full sm:w-auto`}
          >
            Falar sobre meu sinistro
            <ArrowRightIcon className="h-5 w-5" />
          </a>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="scroll-mt-20 bg-paper py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-6">
          <div className="max-w-3xl">
            <Eyebrow>Serviços</Eyebrow>

            <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight md:text-5xl">
              Da lanternagem ao brilho final
            </h2>

            <p className="mt-5 text-lg text-muted">
              Todo o reparo e a estética do seu carro em um só lugar.
            </p>
          </div>

          <ul className="mt-12 grid gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-4">
            {servicos.map((s, i) => (
              <li
                key={s.nome}
                className="rounded-2xl border border-line bg-white p-7"
              >
                <span className="text-sm font-semibold text-brand-dark">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 text-2xl font-bold">{s.nome}</h3>
                <p className="mt-3 text-base text-muted md:text-lg">
                  {s.descricao}
                </p>
              </li>
            ))}

            <li className="flex flex-col justify-between rounded-2xl bg-ink p-7 text-white">
              <div>
                <h3 className="text-2xl font-bold">
                  Não sabe qual serviço precisa?
                </h3>
                <p className="mt-3 text-base text-white/75 md:text-lg">
                  Mande uma foto do carro pelo WhatsApp e a gente avalia para
                  você.
                </p>
              </div>
              <a
                href={whatsappLink(msgFoto)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex min-h-[52px] items-center justify-center gap-2 rounded-xl bg-white px-6 text-lg font-semibold text-ink transition-colors hover:bg-brand-soft"
              >
                <WhatsAppIcon className="h-5 w-5 text-brand-dark" />
                Enviar foto
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* GALERIA */}
      <section id="galeria" className="scroll-mt-20 bg-mist py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-6">
          <div className="max-w-3xl">
            <Eyebrow>Galeria</Eyebrow>

            <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight md:text-5xl">
              Trabalhos feitos aqui na oficina
            </h2>

            <p className="mt-5 text-lg text-muted">
              Fotos reais da nossa equipe e de carros atendidos na Blink.
            </p>
          </div>

          <ul className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">
            {galeria.map((g) => (
              <li
                key={g.src}
                className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-line"
              >
                <Image
                  src={g.src}
                  alt={g.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 50vw"
                  className="object-cover"
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="scroll-mt-20 bg-paper py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-6">
          <div className="max-w-3xl">
            <Eyebrow>Contato</Eyebrow>

            <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight md:text-5xl">
              Venha conhecer a oficina
            </h2>

            <p className="mt-5 text-lg text-muted">
              Atendimento pelo telefone, pelo WhatsApp ou pessoalmente.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 md:gap-8">
            <div className="rounded-3xl border border-line bg-white p-6 md:p-8">
              <h3 className="text-2xl font-bold">Unidade Barra da Tijuca</h3>

              <div className="mt-6 flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-brand-dark">
                  <PinIcon className="h-5 w-5" />
                </span>
                <p className="text-lg">
                  {endereco}
                  <br />
                  <span className="text-muted">
                    Barra da Tijuca, Rio de Janeiro - RJ
                  </span>
                </p>
              </div>

              <div className="mt-5 flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-brand-dark">
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
                        <span className="block text-sm text-muted">
                          {t.tipo}
                        </span>
                        <span className="block text-xl font-semibold">
                          {t.label}
                        </span>
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
                  src="https://www.google.com/maps?q=Rua+Joathur+Bueno,+272+Barra+da+Tijuca+RJ&output=embed"
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

              <div className="mt-6 space-y-5">
                <div>
                  <label htmlFor="nome" className="text-base font-semibold">
                    Seu nome
                  </label>

                  <input
                    id="nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    placeholder="Como podemos te chamar?"
                    autoComplete="name"
                    className="mt-2 h-14 w-full rounded-xl border-2 border-line bg-white px-4 text-lg text-ink outline-none placeholder:text-ink/45 focus:border-brand"
                  />
                </div>

                <div>
                  <label htmlFor="servico" className="text-base font-semibold">
                    Serviço
                  </label>

                  <select
                    id="servico"
                    value={servico}
                    onChange={(e) => setServico(e.target.value)}
                    className="mt-2 h-14 w-full rounded-xl border-2 border-line bg-white px-4 text-lg text-ink outline-none focus:border-brand"
                  >
                    <option value="">Selecione o serviço...</option>
                    <option value="Sinistro / Seguradora">
                      Sinistro / Seguradora
                    </option>
                    {servicos.map((s) => (
                      <option key={s.nome} value={s.nome}>
                        {s.nome}
                      </option>
                    ))}
                    <option value="Outro">Outro</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="descricao" className="text-base font-semibold">
                    O que aconteceu com o carro?
                  </label>

                  <textarea
                    id="descricao"
                    value={descricao}
                    onChange={(e) => setDescricao(e.target.value)}
                    placeholder="Ex.: amassado na porta traseira, risco no para-choque..."
                    rows={4}
                    className="mt-2 w-full resize-none rounded-xl border-2 border-line bg-white px-4 py-3 text-lg text-ink outline-none placeholder:text-ink/45 focus:border-brand"
                  />
                </div>

                <button
                  type="button"
                  onClick={enviarWhatsApp}
                  className={`${btnPrimary} w-full`}
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  Enviar pelo WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-ink text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-4 md:px-6">
          <div className="md:col-span-1">
            <Image
              src="/logo-branco.png"
              alt="Logo Blink Estética Automotiva"
              width={640}
              height={426}
              className="h-16 w-auto"
            />
            <p className="mt-4 text-base text-white/70">
              Lanternagem, pintura e estética automotiva na Barra da Tijuca.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-brand">
              Endereço
            </h3>
            <a
              href={mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 block text-base text-white/85 hover:text-white"
            >
              {endereco}
              <br />
              Barra da Tijuca, Rio de Janeiro - RJ
            </a>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-brand">
              Telefones
            </h3>
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

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-brand">
              Horário
            </h3>
            <p className="mt-3 text-base text-white/85">
              Segunda a sexta
              <br />
              Das 8h às 18h
            </p>
          </div>
        </div>

        <div className="border-t border-white/10">
          <p className="mx-auto max-w-7xl px-5 py-6 text-sm text-white/55 md:px-6">
            © {new Date().getFullYear()} Blink Estética Automotiva. Todos os
            direitos reservados.
          </p>
        </div>
      </footer>

      {/* BARRA FIXA NO CELULAR */}
      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-3 border-t border-line bg-white/95 p-3 backdrop-blur-md md:hidden">
        <a
          href={telefoneFixo.href}
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
    </main>
  );
}
