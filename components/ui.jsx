export const btnPrimary =
  "inline-flex min-h-[52px] items-center justify-center gap-2 rounded-xl bg-brand-dark px-6 text-lg font-semibold text-white transition-colors hover:bg-brand-darker";
export const btnSecondary =
  "inline-flex min-h-[52px] items-center justify-center gap-2 rounded-xl border-2 border-ink/15 bg-white px-6 text-lg font-semibold text-ink transition-colors hover:border-ink/40";

export function Eyebrow({ children, className = "" }) {
  return (
    <p
      className={`flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.14em] text-brand-dark ${className}`}
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

      <Tag className="mt-4 font-display text-3xl font-extrabold leading-tight md:text-5xl">
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
