export const AREAS_INTERESSE = [
  { value: "operacao", label: "Operação" },
  { value: "manutencao", label: "Manutenção" },
  { value: "administrativo", label: "Administrativo" },
  { value: "comercial", label: "Comercial" },
  { value: "logistica", label: "Logística" },
  { value: "outros", label: "Outros" },
] as const;

export const CURRICULO_MAX_FILE_SIZE_BYTES = 5 * 1024 * 1024;
export const CURRICULO_ACCEPTED_MIME_TYPE = "application/pdf";

export const CURRICULO_BENEFICIOS = [
  {
    icon: "shield",
    title: "Time unido",
    description: "Uma equipe que trabalha junto há anos e cresce cada dia mais forte.",
  },
  {
    icon: "trending",
    title: "Estrutura sólida",
    description: "27 anos de mercado com equipamentos modernos e operação consolidada.",
  },
] as const;
