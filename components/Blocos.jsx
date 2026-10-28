import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, CheckIcon } from "./Icones";
import { seguradoras, servicos } from "../lib/dados";

export function ListaSeguradoras() {
  return (
    <ul className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
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
          <p className="mt-4 text-center text-base font-semibold">{s.nome}</p>
        </li>
      ))}
    </ul>
  );
}

export function PassosNumerados({ passos, titulo = "Como funciona", Tag = "h3" }) {
  return (
    <>
      <Tag className="font-display text-2xl font-bold">{titulo}</Tag>

      <ol className="mt-6 grid gap-4 md:grid-cols-4 md:gap-6">
        {passos.map((p, i) => (
          <li
            key={p.titulo}
            className="rounded-2xl border border-line bg-white p-5 md:p-6"
          >
            <span className="font-display text-3xl font-extrabold text-brand [font-stretch:125%] md:text-4xl">
              {String(i + 1).padStart(2, "0")}
            </span>
            <p className="mt-3 text-xl font-bold">{p.titulo}</p>
            <p className="mt-2 text-base text-muted">{p.texto}</p>
          </li>
        ))}
      </ol>
    </>
  );
}

export function ListaChecks({ itens, className = "" }) {
  return (
    <ul className={`space-y-3 text-base text-ink/85 md:text-lg ${className}`}>
      {itens.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand-dark">
            <CheckIcon className="h-4 w-4" />
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}

export function CardsServicos({
  excluir,
  Tag = "h3",
  colunas = "lg:grid-cols-4",
  children,
}) {
  const lista = servicos.filter((s) => s.slug !== excluir);

  return (
    <ul className={`grid gap-4 md:grid-cols-2 md:gap-6 ${colunas}`}>
      {lista.map((s) => (
        <li key={s.slug}>
          <Link
            href={`/${s.slug}`}
            className="group flex h-full flex-col rounded-2xl border border-line bg-white p-7 transition-colors hover:border-brand"
          >
            <span className="text-sm font-semibold text-brand-dark">
              {String(servicos.indexOf(s) + 1).padStart(2, "0")}
            </span>
            <Tag className="mt-2 text-2xl font-bold">{s.nome}</Tag>
            <p className="mt-3 flex-1 text-base text-muted md:text-lg">
              {s.resumo}
            </p>
            <span className="mt-5 inline-flex items-center gap-2 text-base font-semibold text-brand-dark">
              Saiba mais
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        </li>
      ))}
      {children}
    </ul>
  );
}

export function Breadcrumb({ itens }) {
  return (
    <nav aria-label="Você está em" className="text-sm text-muted">
      <ol className="flex flex-wrap items-center gap-2">
        {itens.map((item, i) => (
          <li key={item.nome} className="flex items-center gap-2">
            {i > 0 && <span aria-hidden="true">›</span>}
            {item.href ? (
              <Link href={item.href} className="hover:text-brand-dark">
                {item.nome}
              </Link>
            ) : (
              <span aria-current="page" className="text-ink">
                {item.nome}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
