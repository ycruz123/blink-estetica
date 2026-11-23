"use client";

import { getImageProps } from "next/image";
import { useEffect, useState } from "react";
import { ArrowRightIcon, WhatsAppIcon } from "./Icones";
import {
  blackFridayNoAr,
  campanhaBlackFriday,
  whatsappLink,
} from "../lib/dados";

const descricao =
  "Black Friday Blink: 15% OFF em serviços particulares, só até 30/11. Não cumulativo com outras promoções.";

// Banner da Black Friday na abertura da página inicial: uma arte de verdade
// (public/black-friday/bf-*.jpg, uma versão para computador e outra
// para celular) com o botão do WhatsApp por cima, no espaço livre da arte.
// Some sozinho depois do fim da campanha.
export default function HeroBlackFriday() {
  const [noAr, setNoAr] = useState(campanhaBlackFriday.ativa);

  useEffect(() => setNoAr(blackFridayNoAr()), []);

  if (!noAr) return null;

  const comum = { alt: descricao, priority: true, quality: 85 };
  const {
    props: { srcSet: srcComputador },
  } = getImageProps({
    ...comum,
    src: "/black-friday/bf-computador-v2.jpg",
    width: 2400,
    height: 1000,
    sizes: "100vw",
  });
  const {
    props: { srcSet: _srcCelular, ...celular },
  } = getImageProps({
    ...comum,
    src: "/black-friday/bf-celular-v2.jpg",
    width: 1080,
    height: 1440,
    sizes: "(min-width: 600px) 560px, 100vw",
  });

  return (
    <section className="bg-ink">
      <h2 className="sr-only">{descricao}</h2>

      <div className="relative mx-auto max-w-[560px] lg:max-w-none">
        <picture>
          <source media="(min-width: 1024px)" srcSet={srcComputador} />
          <img {...celular} srcSet={_srcCelular} className="block h-auto w-full" />
        </picture>

        <a
          href={whatsappLink(campanhaBlackFriday.msgWhatsApp)}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute left-[6.5%] right-[6.5%] top-[84.5%] inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-white px-5 text-base font-bold text-ink transition-colors hover:bg-brand-soft lg:left-[6.25%] lg:right-auto lg:top-[76%] lg:h-14 lg:px-7 lg:text-lg"
        >
          <WhatsAppIcon className="h-5 w-5 text-brand-dark" />
          Garantir meus 15% no WhatsApp
          <ArrowRightIcon className="seta-cta h-5 w-5" />
        </a>
      </div>
    </section>
  );
}
