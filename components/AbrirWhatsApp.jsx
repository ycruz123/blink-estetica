"use client";

import { useEffect } from "react";
import { WhatsAppIcon } from "./Icones";
import { btnPrimary } from "./ui";

// Espera o Vercel Analytics registrar a visita (ou no máximo 2,5 segundos)
// e então abre o WhatsApp.
export default function AbrirWhatsApp({ destino }) {
  useEffect(() => {
    const inicio = Date.now();
    let feito = false;

    const abrir = () => {
      if (feito) return;
      feito = true;
      window.location.replace(destino);
    };

    const id = setInterval(() => {
      const registrou = performance
        .getEntriesByType("resource")
        .some((r) => /\/view(\?|$)/.test(r.name));
      if (registrou || Date.now() - inicio > 2500) {
        clearInterval(id);
        abrir();
      }
    }, 150);

    return () => clearInterval(id);
  }, [destino]);

  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-xl px-5 py-24 text-center md:py-32">
        <p className="font-display text-3xl font-extrabold [font-stretch:112%]">
          Abrindo o WhatsApp da Blink…
        </p>
        <p className="mt-4 text-lg text-muted">
          Se não abrir sozinho, toque no botão abaixo.
        </p>
        <a href={destino} className={`${btnPrimary} mt-8`}>
          <WhatsAppIcon className="h-5 w-5" />
          Abrir o WhatsApp
        </a>
      </div>
    </section>
  );
}
