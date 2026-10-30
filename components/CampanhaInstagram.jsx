"use client";

import { useEffect, useRef, useState } from "react";
import { InstagramIcon, WhatsAppIcon } from "./Icones";
import { campanhaInstagram, instagram, whatsappLink } from "../lib/dados";

// Aviso discreto no canto da tela (não cobre o conteúdo, para não ser
// penalizado pelo Google como pop-up intrusivo). Fica só na página inicial:
// aparece cada vez que a pessoa entra ou volta para ela, depois de rolar a
// página ou passar alguns segundos. Se for fechado, não volta enquanto a
// pessoa estiver na página; ao ir para outra página e voltar, aparece de novo.
export default function CampanhaInstagram() {
  const [visivel, setVisivel] = useState(false);
  const jaApareceu = useRef(false);

  useEffect(() => {
    if (!campanhaInstagram.ativa) return;

    let timer;

    const parar = () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", aoRolar);
    };

    const mostrar = () => {
      if (jaApareceu.current) return;
      jaApareceu.current = true;
      setVisivel(true);
      parar();
    };

    function aoRolar() {
      if (window.scrollY > 600) mostrar();
    }

    timer = setTimeout(mostrar, 8000);
    window.addEventListener("scroll", aoRolar, { passive: true });

    return parar;
  }, []);

  const fechar = () => setVisivel(false);

  if (!visivel) return null;

  return (
    <aside
      aria-label="Campanha para seguidores do Instagram"
      className="fixed inset-x-3 bottom-[76px] z-40 rounded-2xl border border-line bg-white p-4 shadow-[0_20px_50px_-15px_rgba(22,24,27,0.35)] md:inset-x-auto md:bottom-6 md:right-6 md:w-[380px] md:p-5"
    >
      <button
        type="button"
        onClick={fechar}
        aria-label="Fechar aviso"
        className="absolute right-2 top-2 flex h-10 w-10 items-center justify-center rounded-full text-2xl leading-none text-muted hover:bg-mist"
      >
        ×
      </button>

      <div className="flex items-start gap-3 pr-8">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white">
          <InstagramIcon className="h-6 w-6" />
        </span>
        <div>
          <p className="font-display text-lg font-bold leading-tight [font-stretch:112%]">
            {campanhaInstagram.titulo}
          </p>
          <p className="mt-1 text-sm text-muted md:text-base">
            {campanhaInstagram.texto}
          </p>
        </div>
      </div>

      <div className="mt-3 grid grid-cols-2 gap-2 md:mt-4">
        <a
          href={instagram.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl bg-ink px-3 text-base font-semibold text-white hover:bg-ink/90"
        >
          <InstagramIcon className="h-5 w-5" />
          Seguir
        </a>
        <a
          href={whatsappLink(campanhaInstagram.msgWhatsApp)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl bg-brand-dark px-3 text-base font-semibold text-white hover:bg-brand-darker"
        >
          <WhatsAppIcon className="h-5 w-5" />
          Orçamento
        </a>
      </div>

      <p className="mt-2 text-xs text-muted md:mt-3 md:text-sm">
        {campanhaInstagram.regra}
      </p>
    </aside>
  );
}
