import { ArrowRightIcon } from "./Icones";
import { campanhaBlackFriday, whatsappLink } from "../lib/dados";

// Faixa da Black Friday no topo do site. É texto de verdade (não imagem),
// para ficar nítida em qualquer tela e o Google conseguir ler.
export default function BannerBlackFriday() {
  if (!campanhaBlackFriday.ativa) return null;

  const {
    selo,
    destaque,
    texto,
    chamada,
    chamadaCurta,
    prazo,
    regra,
    msgWhatsApp,
  } = campanhaBlackFriday;

  return (
    <a
      href={whatsappLink(msgWhatsApp)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${selo}: ${destaque} ${texto}, ${prazo}, ${regra}. ${chamada} pelo WhatsApp`}
      className="group relative block border-b-4 border-brand bg-ink text-white"
    >
      <span className="relative mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2.5 md:h-16 md:px-6 md:py-0">
        <span className="flex min-w-0 flex-col md:flex-row md:items-center md:gap-4">
          <span className="flex items-center gap-2">
            <span className="w-fit whitespace-nowrap rounded-full border border-brand px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-[0.12em] text-brand md:px-3 md:text-xs md:tracking-[0.16em]">
              {selo}
            </span>
            <span className="whitespace-nowrap text-xs font-semibold text-white md:hidden">
              {prazo}
            </span>
          </span>
          <span className="mt-1 font-display text-lg font-extrabold leading-tight [font-stretch:115%] md:mt-0 md:text-2xl">
            <span className="text-brand">{destaque}</span>{" "}
            <span className="text-sm font-semibold text-white/90 [font-stretch:100%] md:text-lg">
              {texto}
            </span>
          </span>
          <span className="mt-0.5 text-[11px] text-white/60 md:hidden">
            Não cumulativo com outras promoções
          </span>
          <span className="hidden text-sm text-white/65 md:inline">
            {prazo} · {regra}
          </span>
        </span>

        <span className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-bold text-ink transition-colors group-hover:bg-brand-soft md:px-5 md:text-base">
          <span className="md:hidden">{chamadaCurta}</span>
          <span className="hidden md:inline">{chamada}</span>
          <ArrowRightIcon className="seta-cta h-4 w-4 md:h-5 md:w-5" />
        </span>
      </span>
    </a>
  );
}
