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
      {...props}
    >
      <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
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

const whatsappNumber = "5521969187827";

const whatsappLink = (msg) =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`;

const telefones = [
  { label: "(21) 96918-7827", href: "tel:+5521969187827" },
  { label: "(21) 98222-7699", href: "tel:+5521982227699" },
];

const telefoneFixo = { label: "(21) 2439-4259", href: "tel:+552124394259" };

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
    nome: "Polimento Técnico",
    descricao:
      "Correção de riscos superficiais, manchas e marcas de lavagem, recuperando o brilho e a profundidade da pintura.",
  },
  {
    nome: "Detalhamento",
    descricao:
      "Limpeza minuciosa de interior e exterior: bancos, painel, plásticos, rodas e acabamentos.",
  },
  {
    nome: "Acabamento",
    descricao:
      "Revisão final depois do reparo, para o carro ser entregue sem marcas do serviço.",
  },
];

const seguradoras = [
  { nome: "Porto Seguro", img: "/porto.png" },
  { nome: "Azul Seguros", img: "/azul.png" },
  { nome: "Itaú Seguros", img: "/itau.png" },
  { nome: "Demais Seguradoras", img: "/demais.png" },
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
  { src: "/galeria/1.jpg", alt: "Hyundai HB20 preto finalizado na oficina Blink" },
  { src: "/galeria/2.jpg", alt: "Profissional da Blink fazendo acabamento em SUV prata" },
  { src: "/galeria/3.jpg", alt: "Reparo de lanternagem na porta de SUV prata" },
  { src: "/galeria/4.jpg", alt: "Traseira de carro preparada e mascarada para pintura" },
  { src: "/galeria/5.jpg", alt: "Mercedes preta com pintura polida na Blink" },
  { src: "/galeria/6.jpg", alt: "Interior em couro caramelo após detalhamento" },
];

const msgOrcamento = "Olá! Vim pelo site e quero um orçamento.";
const msgSinistro =
  "Olá! Vim pelo site e preciso de atendimento para um sinistro com a seguradora.";

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
    <main className="bg-black text-white overflow-x-hidden pb-16 md:pb-0">
      <header className="sticky top-0 z-50 border-b border-cyan-500/20 bg-black/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <nav className="flex items-center justify-between h-16 md:h-20">
            <button
              type="button"
              className="flex items-center gap-3 text-left"
              onClick={() => scrollToId("hero")}
            >
              <div className="relative w-11 h-11 md:w-12 md:h-12 rounded-xl overflow-hidden bg-white/10 border border-white/10">
                <Image
                  src="/logo.png"
                  alt="Logo Blink Estética Automotiva"
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </div>

              <div className="text-lg md:text-2xl font-bold text-white leading-tight">
                BLINK{" "}
                <span className="text-cyan-400">ESTÉTICA AUTOMOTIVA</span>
              </div>
            </button>

            <ul className="hidden md:flex items-center gap-8">
              {navItems.map(([id, label]) => (
                <li key={id}>
                  <button
                    type="button"
                    onClick={() => scrollToId(id)}
                    className="text-gray-300 hover:text-cyan-400 font-medium transition-colors"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              aria-expanded={open}
              className="md:hidden flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white"
            >
              <MenuIcon open={open} className="h-6 w-6" />
            </button>
          </nav>
        </div>

        {open && (
          <ul className="md:hidden border-t border-white/10 bg-black px-4 py-2">
            {navItems.map(([id, label]) => (
              <li key={id}>
                <button
                  type="button"
                  onClick={() => scrollToId(id)}
                  className="w-full py-3 text-left text-lg font-medium text-gray-200"
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        )}
      </header>

      <section
        id="hero"
        className="relative min-h-[85vh] md:min-h-screen flex items-center justify-center px-6 text-center"
      >
        <Image
          src="/hero.jpg"
          alt="Fachada da Blink Estética Automotiva na Barra da Tijuca"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 max-w-5xl">
          <h1 className="text-4xl md:text-7xl font-extrabold leading-tight">
            Lanternagem e pintura na
            <span className="text-cyan-400"> Barra da Tijuca</span>
          </h1>

          <p className="text-gray-300 text-lg mt-6 max-w-3xl mx-auto">
            Lanternagem, pintura, polimento técnico e detalhamento, com
            atendimento para sinistros de seguradora. Rua Joathur Bueno, 272.
          </p>

          <div className="flex gap-4 justify-center flex-wrap mt-10">
            <a
              href={whatsappLink(msgOrcamento)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-500 text-black font-bold py-3 px-6 transition-colors hover:bg-cyan-400"
            >
              Pedir orçamento no WhatsApp
            </a>

            <button
              type="button"
              onClick={() => scrollToId("seguradoras")}
              className="border border-cyan-400 text-cyan-400 px-6 py-3 rounded-xl hover:bg-cyan-400/10 transition"
            >
              Tenho sinistro com seguradora
            </button>
          </div>
        </div>
      </section>

      {/* SEGURADORAS */}
      <section id="seguradoras" className="bg-[#050b14] py-20 scroll-mt-16">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="mb-3 text-3xl font-extrabold md:text-4xl">
            Bateu o carro? A gente resolve com a sua seguradora.
          </h2>

          <p className="mx-auto mb-12 max-w-2xl text-gray-400">
            Atendimento ágil para sinistros, aprovação rápida e suporte
            completo durante todo o processo.
          </p>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {seguradoras.map((s) => (
              <div
                key={s.nome}
                className="rounded-2xl border border-white/10 bg-[#0b1627]/70 p-5"
              >
                <div className="relative mx-auto h-20 w-20 overflow-hidden rounded-2xl bg-black/30">
                  <Image
                    src={s.img}
                    alt={s.nome}
                    fill
                    sizes="80px"
                    className="object-contain p-2"
                  />
                </div>

                <h3 className="mt-4 text-base font-bold text-white">
                  {s.nome}
                </h3>
              </div>
            ))}
          </div>

          <ol className="mt-14 grid gap-6 text-left md:grid-cols-4">
            {passosSinistro.map((p, i) => (
              <li
                key={p.titulo}
                className="rounded-2xl border border-white/10 bg-[#0b1627]/70 p-6"
              >
                <span className="text-sm font-bold text-cyan-400">
                  Passo {i + 1}
                </span>
                <h3 className="mt-2 text-lg font-bold">{p.titulo}</h3>
                <p className="mt-2 text-sm text-gray-400">{p.texto}</p>
              </li>
            ))}
          </ol>

          <a
            href={whatsappLink(msgSinistro)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-500 text-black font-bold py-3 px-6 transition-colors hover:bg-cyan-400"
          >
            Falar sobre meu sinistro
            <ArrowRightIcon className="w-5 h-5" />
          </a>
        </div>
      </section>

      <section id="servicos" className="py-20 bg-[#050b14] scroll-mt-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center">
            Da lanternagem ao brilho final
          </h2>

          <p className="mx-auto mt-3 mb-12 max-w-2xl text-center text-gray-400">
            Todo o reparo e a estética do seu carro em um só lugar.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {servicos.map((s) => (
              <div
                key={s.nome}
                className="rounded-2xl bg-[#0b1627] border border-cyan-500/15 p-6"
              >
                <h3 className="text-xl font-bold">{s.nome}</h3>

                <p className="text-gray-400 mt-3">{s.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="galeria" className="py-20 bg-black scroll-mt-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 px-6">
          Trabalhos feitos aqui na oficina
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 max-w-6xl mx-auto px-4 md:px-6">
          {galeria.map((g) => (
            <div
              key={g.src}
              className="relative h-44 md:h-64 rounded-2xl overflow-hidden border border-white/10 bg-[#0b1627]/40"
            >
              <Image
                src={g.src}
                alt={g.alt}
                fill
                sizes="(min-width: 768px) 33vw, 50vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="py-20 bg-[#0a1220] scroll-mt-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-extrabold text-center">
            Venha conhecer a oficina
          </h2>

          <p className="text-center text-gray-400 mt-3">
            Atendimento rápido pelo WhatsApp ou por telefone.
          </p>

          <div className="mt-12 grid md:grid-cols-2 gap-8">
            {/* ESQUERDA */}
            <div className="rounded-2xl bg-black/40 border border-white/10 p-6 md:p-8">
              <h3 className="text-2xl font-extrabold text-cyan-400">
                Unidade Barra da Tijuca
              </h3>

              <div className="mt-6 rounded-xl bg-[#0b1627] border border-cyan-500/15 p-6">
                <p className="text-gray-300">Rua Joathur Bueno, 272</p>

                <p className="text-gray-300">Barra da Tijuca, Rio de Janeiro - RJ</p>

                <div className="mt-4 space-y-2 font-semibold">
                  {[...telefones, telefoneFixo].map((t) => (
                    <a
                      key={t.href}
                      href={t.href}
                      className="flex items-center gap-2 text-cyan-300 hover:text-cyan-200"
                    >
                      <PhoneIcon className="w-4 h-4" />
                      {t.label}
                    </a>
                  ))}
                </div>
              </div>

              <div className="mt-6 rounded-xl bg-[#0b1627] border border-cyan-500/15 p-6">
                <p className="text-cyan-300 font-bold">
                  Horário de Funcionamento
                </p>

                <p className="text-gray-200 mt-2 font-semibold">
                  Segunda a Sexta: 08:00–18:00
                </p>
              </div>

              {/* MAPA */}
              <div className="mt-6 overflow-hidden rounded-2xl border border-white/10">
                <iframe
                  src="https://www.google.com/maps?q=Rua+Joathur+Bueno,+272+Barra+da+Tijuca+RJ&output=embed"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa da Blink Estética Automotiva"
                  className="w-full"
                ></iframe>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <a
                  href={whatsappLink(msgOrcamento)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-500 text-black font-bold py-3 hover:bg-cyan-400 transition-colors"
                >
                  <PhoneIcon className="w-5 h-5" />
                  WhatsApp
                </a>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=Rua+Joathur+Bueno,+272+Barra+da+Tijuca+RJ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-cyan-700 font-bold py-3 hover:opacity-90 transition-opacity"
                >
                  <PinIcon className="w-5 h-5" />
                  Como Chegar
                </a>
              </div>
            </div>

            {/* DIREITA */}
            <div className="rounded-2xl bg-white/5 border border-white/10 p-6 md:p-8">
              <h3 className="text-2xl font-extrabold">Pedir orçamento</h3>

              <p className="mt-2 text-sm text-gray-400">
                Preencha e envie direto para o nosso WhatsApp. Se puder,
                mande fotos do carro na conversa.
              </p>

              <div className="mt-6 space-y-5">
                <div>
                  <label
                    htmlFor="nome"
                    className="text-sm font-semibold text-gray-200"
                  >
                    Seu nome
                  </label>

                  <input
                    id="nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    placeholder="Como podemos te chamar?"
                    autoComplete="name"
                    className="mt-2 w-full rounded-xl bg-[#0b1627] border border-white/10 px-4 py-3 text-gray-100 placeholder:text-gray-500 outline-none focus:border-cyan-400/60"
                  />
                </div>

                <div>
                  <label
                    htmlFor="servico"
                    className="text-sm font-semibold text-gray-200"
                  >
                    Serviço
                  </label>

                  <select
                    id="servico"
                    value={servico}
                    onChange={(e) => setServico(e.target.value)}
                    className="mt-2 w-full rounded-xl bg-[#0b1627] border border-white/10 px-4 py-3 text-gray-200 outline-none focus:border-cyan-400/60"
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
                  <label
                    htmlFor="descricao"
                    className="text-sm font-semibold text-gray-200"
                  >
                    O que aconteceu com o carro?
                  </label>

                  <textarea
                    id="descricao"
                    value={descricao}
                    onChange={(e) => setDescricao(e.target.value)}
                    placeholder="Ex.: amassado na porta traseira, risco no para-choque..."
                    rows={4}
                    className="mt-2 w-full rounded-xl bg-[#0b1627] border border-white/10 px-4 py-3 text-gray-100 placeholder:text-gray-500 outline-none focus:border-cyan-400/60 resize-none"
                  />
                </div>

                <button
                  type="button"
                  onClick={enviarWhatsApp}
                  className="w-full rounded-xl bg-cyan-500 text-black font-extrabold py-3 hover:bg-cyan-400 transition-colors inline-flex items-center justify-center gap-2"
                >
                  Enviar pelo WhatsApp
                  <ArrowRightIcon className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-cyan-500/10 bg-[#050b14] py-8">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="text-sm tracking-wide text-gray-500">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-cyan-400">
              Blink Estética Automotiva
            </span>
            . Rua Joathur Bueno, 272 – Barra da Tijuca, Rio de Janeiro - RJ.
          </p>
        </div>
      </footer>

      {/* BARRA FIXA NO CELULAR */}
      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 border-t border-white/10 bg-black/95 backdrop-blur-md md:hidden">
        <a
          href={telefoneFixo.href}
          className="flex items-center justify-center gap-2 py-4 font-bold text-white"
        >
          <PhoneIcon className="w-5 h-5" />
          Ligar
        </a>

        <a
          href={whatsappLink(msgOrcamento)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-cyan-500 py-4 font-bold text-black"
        >
          WhatsApp
        </a>
      </div>
    </main>
  );
}
