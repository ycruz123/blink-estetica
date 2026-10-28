import Image from "next/image";
import Link from "next/link";
import {
  ArrowRightIcon,
  PhoneIcon,
  PinIcon,
  WhatsAppIcon,
} from "../components/Icones";
import {
  CardsServicos,
  ListaChecks,
  ListaSeguradoras,
  PassosNumerados,
} from "../components/Blocos";
import HeroCarrossel from "../components/HeroCarrossel";
import SecaoContato from "../components/SecaoContato";
import { btnPrimary, btnSecondary, Eyebrow, TituloSecao } from "../components/ui";
import {
  endereco,
  galeria,
  mapsLink,
  msgFoto,
  msgOrcamento,
  msgSinistro,
  passosSinistro,
  telefoneLigar,
  whatsappLink,
} from "../lib/dados";

export default function Home() {
  return (
    <>
      {/* INÍCIO */}
      <section id="inicio" className="bg-paper">
        <div className="mx-auto grid max-w-7xl items-center gap-7 px-5 pb-12 pt-4 md:grid-cols-2 md:gap-16 md:px-6 md:py-24">
          <div>
            <Eyebrow>Barra da Tijuca · RJ</Eyebrow>

            <h1 className="mt-4 font-display text-[2.15rem] font-extrabold leading-[1.05] md:mt-5 md:text-6xl">
              Lanternagem e pintura na{" "}
              <span className="text-brand-dark">Barra da Tijuca</span>
            </h1>

            <p className="mt-4 max-w-xl text-lg text-muted md:mt-6 md:text-xl">
              Lanternagem, pintura, polimento, vitrificação e estética
              automotiva em um só lugar, com atendimento para sinistros de
              seguradora.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row md:mt-8">
              <a
                href={whatsappLink(msgOrcamento)}
                target="_blank"
                rel="noopener noreferrer"
                className={btnPrimary}
              >
                <WhatsAppIcon className="h-5 w-5" />
                Pedir orçamento no WhatsApp
              </a>

              <a href={telefoneLigar.href} className={btnSecondary}>
                <PhoneIcon className="h-5 w-5" />
                {telefoneLigar.label}
              </a>
            </div>

            <ListaChecks
              className="mt-8 md:mt-10"
              itens={[
                "Oficina parceira das seguradoras",
                "Segunda a sexta, das 8h às 18h",
                `${endereco} – fácil de chegar`,
              ]}
            />
          </div>

          <div className="relative order-first mx-auto w-full max-w-[520px] md:order-none">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-mist shadow-[0_30px_60px_-30px_rgba(22,24,27,0.45)] md:aspect-square md:rounded-[28px]">
              <HeroCarrossel
                sizes="(min-width: 768px) 520px, 100vw"
                fotos={[
                  {
                    src: "/hero.jpg",
                    alt: "Fachada da Blink Estética Automotiva na Rua Joathur Bueno, 272",
                  },
                  { src: "/galeria/5.jpg", alt: "Mercedes preta com pintura polida na Blink" },
                  { src: "/galeria/3.jpg", alt: "Reparo de lanternagem em SUV prata na Blink" },
                ]}
              />
            </div>

            <a
              href={mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute -bottom-5 right-6 hidden items-center gap-4 rounded-2xl border border-line bg-white p-4 shadow-lg md:flex"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-brand-dark">
                <PinIcon className="h-5 w-5" />
              </span>
              <span className="leading-tight">
                <span className="block text-sm text-muted">Nossa unidade</span>
                <span className="block text-base font-semibold">{endereco}</span>
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* SEGURADORAS */}
      <section id="seguradoras" className="scroll-mt-20 bg-mist py-14 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-6">
          <TituloSecao
            eyebrow="Oficina parceira das seguradoras"
            titulo="Bateu o carro? A gente resolve com a sua seguradora."
            texto="A Blink tem parceria direta com as seguradoras: atendimento ágil para sinistros, aprovação rápida e suporte completo durante todo o processo."
          />

          <div className="mt-8 md:mt-12">
            <ListaSeguradoras />
          </div>

          <div className="mt-12 md:mt-16">
            <PassosNumerados passos={passosSinistro} />
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappLink(msgSinistro)}
              target="_blank"
              rel="noopener noreferrer"
              className={btnPrimary}
            >
              Falar sobre meu sinistro
              <ArrowRightIcon className="h-5 w-5" />
            </a>
            <Link href="/sinistro" className={btnSecondary}>
              Como funciona o reparo pelo seguro
            </Link>
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="scroll-mt-20 bg-paper py-14 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-6">
          <TituloSecao
            eyebrow="Serviços"
            titulo="Da lanternagem ao brilho final"
            texto="Todo o reparo e a estética do seu carro em um só lugar."
          />

          <div className="mt-8 md:mt-12">
            <CardsServicos>
              <li className="flex flex-col justify-between rounded-2xl bg-ink p-5 text-white md:col-span-2 md:p-7">
                <div>
                  <p className="font-display text-2xl font-bold [font-stretch:112%]">
                    Não sabe qual serviço precisa?
                  </p>
                  <p className="mt-3 text-base text-white/75 md:text-lg">
                    Mande uma foto do carro pelo WhatsApp e a gente avalia para
                    você.
                  </p>
                </div>
                <a
                  href={whatsappLink(msgFoto)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-white px-5 text-base font-semibold md:min-h-[52px] md:px-6 md:text-lg text-ink transition-colors hover:bg-brand-soft md:self-start"
                >
                  <WhatsAppIcon className="h-5 w-5 text-brand-dark" />
                  Enviar foto
                </a>
              </li>
            </CardsServicos>
          </div>
        </div>
      </section>

      {/* GALERIA */}
      <section id="galeria" className="scroll-mt-20 bg-mist py-14 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-6">
          <TituloSecao
            eyebrow="Galeria"
            titulo="Trabalhos feitos aqui na oficina"
            texto="Fotos reais da nossa equipe e de carros atendidos na Blink."
          />

          <ul className="mt-8 grid grid-cols-2 gap-3 md:mt-12 md:grid-cols-3 md:gap-5">
            {galeria.map((g) => (
              <li
                key={g.src}
                className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-line"
              >
                <Image
                  src={g.src}
                  alt={g.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 50vw"
                  className="object-cover"
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <SecaoContato />
    </>
  );
}
