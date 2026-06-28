export const COMPANY_NAME = "Britago" as const;
export const COMPANY_FULL_NAME = "Britago Mineração" as const;
export const SITE_URL = "https://britago.com.br" as const;
export const SITE_DESCRIPTION =
  "Britago — fornecedora de agregados britados de alta qualidade em Goiás. Brita, pó de brita, areia e muito mais. Laboratório próprio, frota especializada e 27 anos de mercado.";

export const CONTACT = {
  phones: {
    commercial: [
      { display: "(62) 99958-3612", wa: "5562999583612" },
      { display: "(62) 99695-3859", wa: "5562996953859" },
      { display: "(62) 99990-0876", wa: "5562999900876" },
    ],
    administrative: { display: "(62) 99679-2640", wa: "5562996792640" },
  },
  emails: {
    commercial: "comercial@britago.com.br",
    hr: "rh@britago.com.br",
  },
  address: {
    street: "Rodovia GO-060, Km 34,9 — Zona Rural",
    city: "Santa Bárbara de Goiás",
    state: "GO",
    zip: "75398-000",
    full: "Rodovia GO-060, Km 34,9 — Zona Rural, Santa Bárbara de Goiás — GO, CEP 75398-000",
  },
  hours: [
    { day: "Segunda – Quinta", hours: "7h às 17h30" },
    { day: "Sexta-feira", hours: "7h às 16h30" },
    { day: "Sábado – Domingo", hours: "Fechado" },
  ],
  mapsEmbed:
    "https://maps.google.com/maps?q=Rodovia+GO-060,+Km+34.9,+Santa+B%C3%A1rbara+de+Goi%C3%A1s+-+GO,+75398-000&t=&z=12&ie=UTF8&iwloc=&output=embed",
} as const;

export const FOUNDING_YEAR = 1999 as const;
export const YEARS_IN_MARKET = new Date().getFullYear() - FOUNDING_YEAR;

export const WHATSAPP_PRIMARY = CONTACT.phones.commercial[2].wa;

export const CULTURA_CARDS = [
  {
    title: "Jovem Aprendiz",
    desc: "Formamos jovens talentos e investimos em quem está começando.",
    image: "/assets/jovem.jpeg",
  },
  {
    title: "Festa Junina",
    desc: "Tradição, alegria e muito forró. Todo mundo junto para celebrar!",
    image: "/assets/junina.jpeg",
  },
  {
    title: "Minerando Ideias",
    desc: "Nosso programa de aprendizado coletivo, onde todos ensinam e todos aprendem.",
    image: "/assets/estudo.jpeg",
  },
  {
    title: "Caminhada da Fé",
    desc: "Unidos em fé e propósito, fortalecendo vínculos além do trabalho.",
    image: "/assets/caminhada.jpeg",
  },
  {
    title: "Festa Final de Ano",
    desc: "Celebrando conquistas e agradecendo a dedicação de cada um.",
    image: "/assets/natal.jpeg",
  },
  {
    title: "Pedra & Prosa",
    desc: "O jornal interno com novidades e histórias de quem faz tudo acontecer.",
    image: "/assets/prosa.jpeg",
  },
  {
    title: "Dia das Crianças",
    desc: "Celebramos com as famílias dos nossos colaboradores. Quem é da empresa, é família!",
    image: "/assets/empresa.jpeg",
  },
  {
    title: "Cursos",
    desc: "Investimento contínuo no desenvolvimento profissional da equipe.",
    image: "/assets/curso.jpeg",
  },
] as const;
