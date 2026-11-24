"use client";

import { useEffect, useState } from "react";
import { WhatsAppIcon } from "./Icones";
import { btnPrimary, Eyebrow } from "./ui";
import {
  linkWhatsApp,
  versaoVideoRicardo,
  videoRicardo,
} from "../lib/dados";

// Seção "Recado do Ricardo": vídeo falado, então só toca quando a pessoa
// aperta o play (com legenda). Troca de versão e some sozinha pela data.
export default function VideoRicardo({ origem, className = "bg-paper" }) {
  const [versao, setVersao] = useState(videoRicardo.novembro);

  useEffect(() => setVersao(versaoVideoRicardo()), []);

  if (!versao) return null;

  return (
    <section className={`py-14 md:py-20 ${className}`}>
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-5 md:grid-cols-2 md:gap-14 md:px-6">
        <div>
          <Eyebrow>Recado do Ricardo</Eyebrow>
          <h2 className="mt-3 font-display text-[1.75rem] font-extrabold leading-tight md:mt-4 md:text-4xl">
            {videoRicardo.titulo}
          </h2>
          <p className="mt-4 text-lg text-muted">{videoRicardo.texto}</p>
          <a
            href={linkWhatsApp(origem, videoRicardo.msgWhatsApp)}
            target="_blank"
            rel="noopener noreferrer"
            className={`${btnPrimary} mt-7 w-full sm:w-auto`}
          >
            <WhatsAppIcon className="h-5 w-5" />
            Quero o polimento de cortesia
          </a>
        </div>

        <div className="order-first overflow-hidden rounded-2xl border-4 border-ink bg-ink md:order-none">
          <video
            key={versao.src}
            className="block aspect-video w-full bg-ink"
            controls
            playsInline
            preload="none"
            poster={videoRicardo.capa}
          >
            <source src={versao.src} type="video/mp4" />
            <track
              kind="captions"
              src={versao.legenda}
              srcLang="pt-BR"
              label="Português"
              default
            />
          </video>
        </div>
      </div>
    </section>
  );
}
