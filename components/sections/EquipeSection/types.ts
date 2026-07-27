export interface CurriculoFormState {
  nome: string;
  email: string;
  telefone: string;
  area: string;
  pretensao: string;
  arquivo: File | null;
  consentimento: boolean;
}
