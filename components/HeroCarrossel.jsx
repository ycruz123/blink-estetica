import Image from "next/image";

// No celular as fotos se alternam com uma transição suave (CSS puro, em
// globals.css). No computador, e para quem prefere menos movimento, fica
// só a primeira foto.
export default function HeroCarrossel({ fotos, sizes }) {
  return (
    <>
      {fotos.map((f, i) => (
        <div key={f.src} className="hero-slide absolute inset-0">
          <Image
            src={f.src}
            alt={f.alt}
            fill
            priority={i === 0}
            sizes={sizes}
            className="object-cover"
          />
        </div>
      ))}
    </>
  );
}
