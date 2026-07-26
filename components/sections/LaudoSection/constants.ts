import { FiFileText, FiCheckSquare, FiBook } from "react-icons/fi";

export const CARDS = [
  {
    icon: FiFileText,
    title: "Laudos Técnicos",
    desc: "Documentação geológica completa da jazida, com análise granulométrica, resistência e composição mineralógica.",
  },
  {
    icon: FiCheckSquare,
    title: "Garantia de Qualidade",
    desc: "Cada lote passa por análise laboratorial antes de sair. Você recebe o produto com rastreabilidade total.",
  },
  {
    icon: FiBook,
    title: "Normas ABNT",
    desc: "Todos os agregados produzidos seguem as normas ABNT NBR 7211, NBR 6118 e demais normas aplicáveis.",
  },
] as const;
