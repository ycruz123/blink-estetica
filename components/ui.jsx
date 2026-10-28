export const btnPrimary =
  "inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-brand-dark px-5 text-base font-semibold md:min-h-[52px] md:px-6 md:text-lg text-white transition-colors hover:bg-brand-darker";
export const btnSecondary =
  "inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl border-2 border-ink/15 bg-white px-5 text-base font-semibold md:min-h-[52px] md:px-6 md:text-lg text-ink transition-colors hover:border-ink/40";

export function Eyebrow({ children, className = "" }) {
  return (
    <p
      className={`flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.1em] text-brand-dark md:tracking-[0.14em] ${className}`}
    >
      <span className="h-0.5 w-8 bg-brand" aria-hidden="true" />
      {children}
    </p>
  );
}

export function TituloSecao({ eyebrow, titulo, texto, as: Tag = "h2" }) {
  return (
    <div className="max-w-3xl">
      <Eyebrow>{eyebrow}</Eyebrow>

      <Tag className="mt-3 font-display text-[1.75rem] font-extrabold leading-tight md:mt-4 md:text-5xl">
        {titulo}
      </Tag>

      {texto && <p className="mt-5 text-lg text-muted">{texto}</p>}
    </div>
  );
}

export function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
