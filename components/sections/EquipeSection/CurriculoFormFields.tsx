import { Alert, AlertDescription } from "@/components/ui/Alert";
import { Button } from "@/components/ui/Button";
import { Checkbox } from "@/components/ui/Checkbox";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select";
import { Spinner } from "@/components/ui/Spinner";
import { FiAlertCircle, FiSend } from "react-icons/fi";
import { AREAS_INTERESSE } from "./constants";
import { CurriculoFileInput } from "./CurriculoFileInput";
import type { CurriculoFormState } from "./types";

interface CurriculoFormFieldsProps {
  form: CurriculoFormState;
  loading: boolean;
  error: boolean;
  errorMessage?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onAreaChange: (area: string) => void;
  onPretensaoChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onArquivoChange: (file: File | null) => void;
  onConsentimentoChange: (checked: boolean) => void;
  onHoneypotChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.SyntheticEvent<HTMLFormElement>) => void;
}

export function CurriculoFormFields({
  form,
  loading,
  error,
  errorMessage,
  onChange,
  onAreaChange,
  onPretensaoChange,
  onArquivoChange,
  onConsentimentoChange,
  onHoneypotChange,
  onSubmit,
}: CurriculoFormFieldsProps) {
  const canSubmit = Boolean(form.arquivo && form.consentimento);

  return (
    <form onSubmit={onSubmit} noValidate>
      <h3 className="mb-6 font-impact text-xl tracking-wide text-britago-dark uppercase">
        Envie seu currículo
      </h3>

      {/* Honeypot — invisível para humanos, isca para bots */}
      <div className="sr-only" aria-hidden="true">
        <Label htmlFor="website">Não preencher</Label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          onChange={onHoneypotChange}
        />
      </div>

      <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="nome">Nome completo *</Label>
          <Input
            id="nome"
            name="nome"
            type="text"
            required
            autoComplete="name"
            value={form.nome}
            onChange={onChange}
            placeholder="Seu nome completo"
          />
        </div>
        <div>
          <Label htmlFor="email">E-mail *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            value={form.email}
            onChange={onChange}
            placeholder="seu@email.com"
          />
        </div>
      </div>

      <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="telefone">Telefone/WhatsApp *</Label>
          <Input
            id="telefone"
            name="telefone"
            type="tel"
            required
            autoComplete="tel"
            value={form.telefone}
            onChange={onChange}
            placeholder="(62) 00000-0000"
          />
        </div>
        <div>
          <Label htmlFor="area">Área de interesse *</Label>
          <Select value={form.area} onValueChange={onAreaChange} required>
            <SelectTrigger id="area">
              <SelectValue placeholder="Selecione uma área" />
            </SelectTrigger>
            <SelectContent>
              {AREAS_INTERESSE.map(({ value, label }) => (
                <SelectItem key={value} value={value}>
                  {label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="mb-4">
        <Label htmlFor="pretensao">Pretensão salarial</Label>
        <Input
          id="pretensao"
          name="pretensao"
          type="text"
          inputMode="numeric"
          value={form.pretensao}
          onChange={onPretensaoChange}
          placeholder="R$ 0,00 (opcional)"
        />
      </div>

      <div className="mb-4">
        <Label htmlFor="arquivo">Currículo (PDF) *</Label>
        <CurriculoFileInput file={form.arquivo} onChange={onArquivoChange} />
      </div>

      <div className="mb-6 flex items-start gap-2.5">
        <Checkbox
          id="consentimento"
          checked={form.consentimento}
          onCheckedChange={(checked) => onConsentimentoChange(checked === true)}
          className="mt-0.5"
        />
        <Label
          htmlFor="consentimento"
          className="mb-0 font-roboto text-sm leading-relaxed font-normal text-britago-gray normal-case"
        >
          Autorizo o uso dos meus dados para fins de recrutamento e seleção da Britago.
        </Label>
      </div>

      {error && (
        <Alert
          variant="destructive"
          className="mb-4 border-destructive-border bg-destructive-light"
        >
          <FiAlertCircle size={16} className="shrink-0" aria-hidden />
          <AlertDescription className="text-destructive">
            {errorMessage ?? "Não foi possível enviar seu currículo. Tente novamente."}
          </AlertDescription>
        </Alert>
      )}

      <Button
        type="submit"
        disabled={loading || !canSubmit}
        aria-busy={loading}
        className="group flex w-full items-center justify-center gap-2 rounded-lg py-3.5 font-roboto text-base font-medium tracking-normal normal-case disabled:opacity-70"
      >
        {loading ? (
          <>
            <Spinner />
            Enviando...
          </>
        ) : (
          <>
            Enviar currículo
            <FiSend
              size={16}
              className="transition-transform duration-200 group-hover:translate-x-0.5"
              aria-hidden
            />
          </>
        )}
      </Button>
    </form>
  );
}
