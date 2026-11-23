"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowRightIcon, WhatsAppIcon } from "./Icones";
import {
  blackFridayNoAr,
  campanhaBlackFriday,
  servicos,
  whatsappLink,
} from "../lib/dados";

const doisDigitos = (n) => String(n).padStart(2, "0");

function tempoRestante() {
  const ms = Math.max(0, Date.parse(campanhaBlackFriday.fim) - Date.now());
  const min = Math.floor(ms / 60000);
  return {
    dias: Math.floor(min / 1440),
    horas: Math.floor((min % 1440) / 60),
    minutos: min % 60,
  };
}

function Contador() {
  const [t, setT] = useState(null);

  useEffect(() => {
    const atualizar = () => setT(tempoRestante());
    atualizar();
    const id = setInterval(atualizar, 30000);
    return () => clearInterval(id);
  }, []);

  const caixas = [
    ["dias", t?.dias],
    ["horas", t?.horas],
    ["min", t?.minutos],
  ];

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm font-semibold uppercase tracking-[0.12em] text-white/70">
        Termina em
      </span>
      <div className="flex gap-1.5" aria-live="off">
        {caixas.map(([rotulo, valor]) => (
          <span
            key={rotulo}
            className="flex min-w-[52px] flex-col items-center rounded-lg border border-white/15 bg-white/5 px-2 py-1.5 backdrop-blur"
          >
            <span className="font-display text-xl font-extrabold leading-none tabular-nums [font-stretch:110%]">
              {valor === undefined ? "--" : doisDigitos(valor)}
            </span>
            <span className="mt-0.5 text-[10px] uppercase tracking-wider text-white/60">
              {rotulo}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}

// Banner grande da Black Friday na abertura da página inicial.
// Feito em código (texto de verdade sobre foto real), então fica nítido em
// qualquer tela. Some sozinho depois do fim da campanha.
export default function HeroBlackFriday() {
  const [noAr, setNoAr] = useState(campanhaBlackFriday.ativa);

  useEffect(() => setNoAr(blackFridayNoAr()), []);

  if (!noAr) return null;

  const { destaque, texto, prazo, msgWhatsApp } = campanhaBlackFriday;

  return (
    <section
      aria-label="Black Friday Blink: 15% de desconto em serviços particulares"
      className="relative isolate overflow-hidden bg-ink text-white"
    >
      {/* foto real da Blink */}
      <Image
        src="/galeria/5.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-[38%_75%] opacity-70 md:object-[center_40%]"
      />
      {/* escurece a foto: de baixo para cima no celular, da esquerda no computador */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/85 to-ink/10 md:bg-gradient-to-r md:from-ink md:via-ink/80 md:to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute -left-32 top-1/3 -z-10 h-96 w-96 rounded-full bg-brand/30 blur-[120px]"
      />

      <div className="mx-auto flex min-h-[calc(100svh-64px)] max-w-7xl flex-col justify-end px-5 pb-24 pt-16 md:min-h-[640px] md:justify-center md:px-6 md:py-20">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand/70 bg-brand/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-brand md:text-sm">
            <span className="h-2 w-2 animate-pulse rounded-full bg-brand" />
            Black Week Blink · {prazo}
          </span>

          <p className="mt-4 font-display text-[3.4rem] font-black uppercase leading-[0.9] tracking-tight [font-stretch:125%] md:text-[7.5rem]">
            Black
            <br />
            Friday
          </p>

          <div className="mt-4 flex items-end gap-3 md:gap-5">
            <span className="brilho-bf font-display text-[5.2rem] font-black leading-[0.85] text-brand [font-stretch:125%] md:text-[9rem]">
              {destaque.replace(" OFF", "")}
            </span>
            <span className="pb-2 md:pb-4">
              <span className="block font-display text-4xl font-black leading-none text-brand [font-stretch:125%] md:text-6xl">
                OFF
              </span>
              <span className="mt-1 block text-base font-semibold leading-snug text-white md:text-xl">
                {texto}
              </span>
            </span>
          </div>

          <p className="mt-4 max-w-xl text-sm text-white/75 md:mt-5 md:text-lg">
            {servicos
              .slice(0, 4)
              .map((s) => s.nome)
              .join(" · ")}{" "}
            e mais.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center md:mt-7">
            <a
              href={whatsappLink(msgWhatsApp)}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex min-h-[56px] items-center justify-center gap-3 rounded-xl bg-white px-6 text-lg font-bold text-ink shadow-[0_10px_40px_-10px_rgba(1,166,188,0.8)] transition-colors hover:bg-brand-soft"
            >
              <WhatsAppIcon className="h-5 w-5 text-brand-dark" />
              <span className="sm:hidden">Garantir meus 15%</span>
              <span className="hidden sm:inline">Garantir meus 15% no WhatsApp</span>
              <ArrowRightIcon className="seta-cta h-5 w-5" />
            </a>
            <a
              href="#servicos"
              className="hidden min-h-[56px] items-center justify-center rounded-xl border-2 border-white/25 sm:inline-flex px-6 text-lg font-semibold text-white transition-colors hover:border-white/60"
            >
              Ver serviços
            </a>
          </div>

          <div className="mt-5 flex flex-col gap-2 md:mt-7 md:flex-row md:items-center md:gap-6">
            <Contador />
            <span className="text-xs text-white/55 md:text-sm">
              Válido {prazo} · não cumulativo com outras promoções
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
