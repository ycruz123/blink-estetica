export const siteUrl = "https://www.blinkautomotiva.com.br";
export const nomeEmpresa = "Blink Estética Automotiva";

export const whatsappNumber = "5521969187827";

export const whatsappLink = (msg) =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`;

export const telefones = [
  { label: "(21) 98279-5747", tipo: "Atendimento por telefone", href: "tel:+5521982795747" },
  { label: "(21) 2439-4259", tipo: "Telefone fixo", href: "tel:+552124394259" },
  { label: "(21) 96918-7827", tipo: "Celular e WhatsApp", href: "tel:+5521969187827" },
  { label: "(21) 98222-7699", tipo: "Celular", href: "tel:+5521982227699" },
];

export const telefoneLigar = telefones[0];

export const endereco = "Rua Joathur Bueno, 272";
export const bairroCidade = "Barra da Tijuca, Rio de Janeiro - RJ";
export const cep = "22631-160";
export const instagram = {
  usuario: "@blinkesteticaauto",
  url: "https://www.instagram.com/blinkesteticaauto/",
};
export const horario = "Segunda a sexta, das 8h às 18h";
export const mapsLink =
  "https://www.google.com/maps/search/?api=1&query=Rua+Joathur+Bueno,+272+Barra+da+Tijuca+RJ";
export const mapsEmbed =
  "https://www.google.com/maps?q=Rua+Joathur+Bueno,+272+Barra+da+Tijuca+RJ&output=embed";

// Campanha do Instagram. Para desligar, troque "ativa" para false.
export const campanhaInstagram = {
  ativa: true,
  // Mude a versão quando a campanha mudar, para o aviso aparecer de novo
  // para quem já tinha fechado.
  versao: "seguidores-10",
  titulo: "Ganhe 10% de desconto",
  texto:
    "Siga a Blink no Instagram e ganhe 10% de desconto em serviços particulares.",
  regra: "Mostre no atendimento que você segue @blinkesteticaauto.",
  msgWhatsApp:
    "Olá! Vim pelo site, sigo a Blink no Instagram e quero um orçamento com os 10% de desconto.",
};

export const msgOrcamento = "Olá! Vim pelo site e quero um orçamento.";
export const msgSinistro =
  "Olá! Vim pelo site e preciso de atendimento para um sinistro com a seguradora.";
export const msgFoto =
  "Olá! Vim pelo site. Vou mandar uma foto do carro para vocês avaliarem.";
export const msgServico = (nome) =>
  `Olá! Vim pelo site e quero um orçamento de ${nome.toLowerCase()}.`;

export const navItems = [
  { href: "/#servicos", label: "Serviços" },
  { href: "/sinistro", label: "Seguradoras" },
  { href: "/#galeria", label: "Galeria" },
  { href: "/#contato", label: "Contato" },
];

// Cada serviço tem uma página própria em /<slug>. Os textos descrevem o
// serviço de forma geral: nada de prazos, garantias ou marcas de produto
// sem confirmação da Blink.
export const servicos = [
  {
    slug: "lanternagem",
    nome: "Lanternagem",
    resumo:
      "Recuperação de amassados e reparo de peças da carroceria, devolvendo o formato original do veículo.",
    titulo: "Lanternagem na Barra da Tijuca",
    metaDescricao:
      "Lanternagem na Barra da Tijuca: recuperação de amassados e reparo de carroceria, com atendimento particular e por seguradora. Orçamento pelo WhatsApp.",
    intro:
      "A lanternagem recupera a carroceria depois de batidas, amassados e arranhões profundos, devolvendo o formato original das peças antes da pintura. Na Blink, o reparo pode ser particular ou pelo seu seguro.",
    quando: [
      "Amassados em portas, capô, para-lamas ou teto",
      "Para-choque deslocado, trincado ou solto",
      "Peças desalinhadas depois de uma batida",
      "Reparos que vão precisar de pintura em seguida",
    ],
    detalhes: [
      "O trabalho começa com a avaliação do dano, para decidir se a peça pode ser recuperada ou se precisa ser substituída. Depois vêm o desamassamento, o alinhamento e a preparação da superfície, que deixam tudo pronto para a pintura.",
      "Como lanternagem e pintura são feitas no mesmo lugar, o carro não precisa passar por outra oficina para ficar pronto.",
    ],
    sinistro: true,
    imagem: { src: "/galeria/3.jpg", alt: "Reparo de lanternagem na porta de SUV prata na Blink" },
  },
  {
    slug: "pintura-automotiva",
    nome: "Pintura Automotiva",
    resumo:
      "Pintura parcial ou completa, com preparo da superfície e acerto de cor para igualar ao restante do carro.",
    titulo: "Pintura automotiva na Barra da Tijuca",
    metaDescricao:
      "Pintura automotiva parcial ou completa na Barra da Tijuca, com preparo da superfície e acerto de cor. Atendimento particular e por seguradora.",
    intro:
      "A pintura automotiva recupera a aparência do carro depois de um reparo, de arranhões profundos ou do desgaste do verniz. Ela pode ser feita só na peça danificada ou no veículo inteiro.",
    quando: [
      "Arranhões que chegaram à tinta ou ao primer",
      "Verniz descascando ou queimado pelo sol",
      "Peças recuperadas na lanternagem",
      "Diferença de cor entre peças do carro",
    ],
    detalhes: [
      "Uma boa pintura depende do preparo: lixamento, correção de imperfeições e aplicação de fundo antes da cor. O acerto de cor é feito para a peça pintada igualar ao restante do carro.",
      "O verniz finaliza o serviço e protege a cor. Depois da secagem, o carro passa por uma revisão do acabamento antes da entrega.",
    ],
    sinistro: true,
    imagem: { src: "/galeria/4.jpg", alt: "Traseira de carro preparada e mascarada para pintura na Blink" },
  },
  {
    slug: "polimento-e-cristalizacao",
    nome: "Polimento e Cristalização",
    resumo:
      "Polimento técnico para corrigir riscos superficiais e manchas, seguido de cristalização para realçar o brilho da pintura.",
    titulo: "Polimento e cristalização na Barra da Tijuca",
    metaDescricao:
      "Polimento técnico e cristalização na Barra da Tijuca: correção de riscos superficiais, manchas e marcas de lavagem, com mais brilho na pintura.",
    intro:
      "O polimento técnico corrige riscos superficiais, manchas e marcas de lavagem no verniz. A cristalização vem em seguida para realçar o brilho e deixar a pintura mais lisa ao toque.",
    quando: [
      "Pintura opaca ou sem brilho",
      "Riscos finos e marcas circulares de lavagem",
      "Manchas de chuva, resina ou água",
      "Preparar o carro para venda ou para vitrificação",
    ],
    detalhes: [
      "Antes de polir, a pintura é avaliada para definir o nível de correção necessário. Riscos que atravessaram o verniz não saem só com polimento e podem precisar de retoque de pintura; isso é explicado na avaliação.",
      "Depois do polimento, a cristalização ajuda a manter o resultado. Para uma proteção mais duradoura, o polimento pode ser seguido de vitrificação.",
    ],
    sinistro: false,
    imagem: { src: "/galeria/5.jpg", alt: "Mercedes preta com pintura polida na Blink" },
  },
  {
    slug: "vitrificacao",
    nome: "Vitrificação",
    resumo:
      "Camada de proteção sobre a pintura que facilita a limpeza e ajuda a manter o brilho por mais tempo.",
    titulo: "Vitrificação automotiva na Barra da Tijuca",
    metaDescricao:
      "Vitrificação de pintura na Barra da Tijuca: camada de proteção que facilita a limpeza e ajuda a manter o brilho do carro por mais tempo.",
    intro:
      "A vitrificação aplica sobre a pintura uma camada de proteção que repele água e sujeira, facilita a limpeza e ajuda a preservar o brilho por mais tempo.",
    quando: [
      "Carro novo ou com pintura recém-recuperada",
      "Carro que fica exposto ao sol, à chuva ou à maresia",
      "Quem quer lavar o carro com mais facilidade",
      "Depois de um polimento, para conservar o resultado",
    ],
    detalhes: [
      "Para a vitrificação funcionar bem, a pintura precisa estar limpa e corrigida. Por isso o serviço normalmente começa com descontaminação e polimento, e só depois a proteção é aplicada.",
      "A vitrificação protege, mas não deixa a pintura imune a riscos de batidas ou atrito forte. Na avaliação a gente explica os cuidados para conservar a proteção.",
    ],
    sinistro: false,
    imagem: { src: "/galeria/1.jpg", alt: "Hyundai HB20 preto com pintura brilhando na oficina Blink" },
  },
  {
    slug: "revitalizacao-de-plasticos",
    nome: "Revitalização de Plásticos",
    resumo:
      "Recupera a cor e o aspecto de plásticos internos e externos ressecados ou desbotados pelo sol.",
    titulo: "Revitalização de plásticos na Barra da Tijuca",
    metaDescricao:
      "Revitalização de plásticos automotivos na Barra da Tijuca: recupera a cor de para-choques, frisos e acabamentos ressecados ou desbotados pelo sol.",
    intro:
      "Com o tempo, o sol e o calor deixam os plásticos do carro esbranquiçados, ressecados e sem cor. A revitalização recupera o aspecto dessas peças sem precisar trocá-las.",
    quando: [
      "Para-choques e frisos esbranquiçados",
      "Molduras de para-lama e retrovisores desbotados",
      "Acabamentos internos ressecados",
      "Carro que vai ser vendido e precisa de melhor aparência",
    ],
    detalhes: [
      "As peças são limpas e preparadas antes da aplicação do produto, para que o resultado fique uniforme.",
      "Peças trincadas ou quebradas não se recuperam com revitalização. Nesses casos, indicamos o reparo ou a substituição.",
    ],
    sinistro: false,
    imagem: { src: "/galeria/6.jpg", alt: "Interior de veículo atendido na Blink" },
  },
  {
    slug: "detalhamento-automotivo",
    nome: "Detalhamento Automotivo",
    resumo:
      "Cuidado minucioso com a aparência do carro, com atenção a rodas, frisos e acabamentos que a limpeza comum não alcança.",
    titulo: "Detalhamento automotivo na Barra da Tijuca",
    metaDescricao:
      "Detalhamento automotivo na Barra da Tijuca: cuidado minucioso com rodas, frisos, acabamentos e pintura para valorizar a aparência do carro.",
    intro:
      "O detalhamento é o cuidado minucioso com a aparência do carro, peça por peça. Ele alcança rodas, frisos, emblemas, vãos e acabamentos que uma limpeza comum deixa passar.",
    quando: [
      "Antes de vender ou devolver um carro",
      "Depois de um reparo, para o carro sair impecável",
      "Para manter o carro sempre bem cuidado",
      "Como preparação para polimento ou vitrificação",
    ],
    detalhes: [
      "Cada superfície (pintura, plástico, borracha ou metal) recebe o cuidado adequado, para limpar sem agredir.",
      "O detalhamento combina bem com polimento, vitrificação e revitalização de plásticos. Na avaliação, a gente monta o que faz sentido para o seu carro.",
    ],
    sinistro: false,
    imagem: { src: "/galeria/2.jpg", alt: "Profissional da Blink fazendo acabamento em SUV prata" },
  },
];

export const passosServico = [
  { titulo: "Avaliação", texto: "Traga o carro ou mande fotos pelo WhatsApp para uma primeira análise." },
  { titulo: "Orçamento", texto: "Você recebe o orçamento com o que precisa ser feito antes de qualquer serviço." },
  { titulo: "Execução", texto: "O serviço é feito na nossa oficina da Barra da Tijuca." },
  { titulo: "Entrega", texto: "Revisamos o acabamento e entregamos o carro pronto." },
];

export const seguradoras = [
  { nome: "Porto Seguro", img: "/porto.png" },
  { nome: "Azul Seguros", img: "/azul.png" },
  { nome: "Itaú Seguros", img: "/itau.png" },
  { nome: "Demais seguradoras", img: "/demais.png" },
];

export const passosSinistro = [
  {
    titulo: "Abra o sinistro",
    texto: "Comunique o ocorrido à sua seguradora e informe que o reparo será na Blink.",
  },
  {
    titulo: "Carro na oficina",
    texto:
      "Traga o carro até a Blink ou, se ele não puder rodar, peça o guincho da seguradora (conforme a sua apólice) direto para a nossa unidade.",
  },
  {
    titulo: "Acompanhamos tudo",
    texto: "Cuidamos do contato com a seguradora durante vistoria e aprovação do orçamento.",
  },
  {
    titulo: "Retire pronto",
    texto: "Seu carro é entregue reparado, revisado e com o acabamento conferido.",
  },
];

export const galeria = [
  { src: "/galeria/5.jpg", alt: "Mercedes preta com pintura polida na Blink" },
  { src: "/galeria/3.jpg", alt: "Reparo de lanternagem na porta de SUV prata" },
  { src: "/galeria/2.jpg", alt: "Profissional da Blink fazendo acabamento em SUV prata" },
  { src: "/galeria/4.jpg", alt: "Traseira de carro preparada e mascarada para pintura" },
  { src: "/galeria/6.jpg", alt: "Interior em couro caramelo de veículo atendido na Blink" },
  { src: "/galeria/1.jpg", alt: "Hyundai HB20 preto finalizado na oficina Blink" },
];

export const ogImagem = {
  url: "/og-blink.png",
  width: 1200,
  height: 630,
  alt: "Blink Estética Automotiva – lanternagem e pintura na Barra da Tijuca",
};

export const empresaId = `${siteUrl}/#empresa`;

export const empresaJsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoBodyShop",
  "@id": empresaId,
  name: nomeEmpresa,
  url: siteUrl,
  image: `${siteUrl}/hero.jpg`,
  logo: `${siteUrl}/logo-marca.png`,
  telephone: "+55-21-98279-5747",
  address: {
    "@type": "PostalAddress",
    streetAddress: endereco,
    addressLocality: "Rio de Janeiro",
    postalCode: cep,
    addressRegion: "RJ",
    addressCountry: "BR",
  },
  sameAs: [instagram.url],
  areaServed: "Barra da Tijuca, Rio de Janeiro",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+55-21-96918-7827",
      contactType: "customer service",
      availableLanguage: "Portuguese",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Serviços",
    itemListElement: servicos.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s.nome, url: `${siteUrl}/${s.slug}` },
    })),
  },
};
