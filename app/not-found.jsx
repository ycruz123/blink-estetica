import Link from "next/link";
import { btnPrimary } from "../components/ui";

export const metadata = {
  title: "Página não encontrada",
  robots: { index: false },
};

export default function NaoEncontrada() {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-3xl px-5 py-24 text-center md:py-32">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-dark">
          Erro 404
        </p>
        <h1 className="mt-4 font-display text-4xl font-extrabold md:text-5xl">
          Página não encontrada
        </h1>
        <p className="mt-5 text-lg text-muted">
          O endereço que você abriu não existe ou mudou de lugar.
        </p>
        <Link href="/" className={`${btnPrimary} mt-8`}>
          Voltar para o início
        </Link>
      </div>
    </section>
  );
}
