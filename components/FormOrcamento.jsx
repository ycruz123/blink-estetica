"use client";

import { useState } from "react";
import { WhatsAppIcon } from "./Icones";
import { btnPrimary } from "./ui";
import { servicos, whatsappLink } from "../lib/dados";

const campo =
  "mt-2 w-full rounded-xl border-2 border-line bg-white px-4 text-lg text-ink outline-none placeholder:text-ink/45 focus:border-brand";

export default function FormOrcamento({ servicoInicial = "" }) {
  const [nome, setNome] = useState("");
  const [servico, setServico] = useState(servicoInicial);
  const [descricao, setDescricao] = useState("");

  const enviarWhatsApp = () => {
    const msg =
      `Olá! Vim pelo site e quero um orçamento.\n\n` +
      `Nome: ${nome || "-"}\n` +
      `Serviço: ${servico || "-"}\n\n` +
      `Descrição: ${descricao || "-"}`;

    window.open(whatsappLink(msg), "_blank", "noopener,noreferrer");
  };

  return (
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
          className={`${campo} h-14`}
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
          className={`${campo} h-14`}
        >
          <option value="">Selecione o serviço...</option>
          <option value="Sinistro / Seguradora">Sinistro / Seguradora</option>
          {servicos.map((s) => (
            <option key={s.slug} value={s.nome}>
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
          className={`${campo} resize-none py-3`}
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
  );
}
