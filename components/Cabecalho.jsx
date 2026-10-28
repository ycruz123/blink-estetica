"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ClockIcon,
  MenuIcon,
  PhoneIcon,
  PinIcon,
  WhatsAppIcon,
} from "./Icones";
import {
  endereco,
  horario,
  msgOrcamento,
  navItems,
  telefoneLigar,
  whatsappLink,
} from "../lib/dados";

export default function Cabecalho() {
  const [open, setOpen] = useState(false);

  return (
    <>
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
              {horario}
            </span>
            <a
              href={telefoneLigar.href}
              className="flex items-center gap-2 font-semibold text-white hover:text-brand"
            >
              <PhoneIcon className="h-4 w-4" />
              {telefoneLigar.label}
            </a>
          </span>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <nav className="flex h-16 items-center justify-between md:h-20">
            <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
              <Image
                src="/logo-marca.png"
                alt="Blink Estética Automotiva"
                width={640}
                height={426}
                className="h-10 w-auto md:h-16"
                priority
              />
            </Link>

            <ul className="hidden items-center gap-8 md:flex">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-base font-medium text-ink/80 transition-colors hover:text-brand-dark"
                  >
                    {item.label}
                  </Link>
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
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-line text-ink md:hidden"
            >
              <MenuIcon open={open} className="h-6 w-6" />
            </button>
          </nav>
        </div>

        {open && (
          <ul className="border-t border-line bg-white px-4 pb-4 pt-2 md:hidden">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block w-full border-b border-line py-4 text-lg font-medium text-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-4 text-base text-muted">{horario}</li>
          </ul>
        )}
      </header>
    </>
  );
}
