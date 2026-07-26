import { Alert, AlertDescription } from "@/components/ui/Alert";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { Spinner } from "@/components/ui/Spinner";
import { Textarea } from "@/components/ui/Textarea";
import { FiAlertCircle, FiSend } from "react-icons/fi";
import type { FormState } from "./types";

interface ContatoFormFieldsProps {
  form: FormState;
  loading: boolean;
  error: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onSubmit: (e: React.SyntheticEvent<HTMLFormElement>) => void;
}

export function ContatoFormFields({
  form,
  loading,
  error,
  onChange,
  onSubmit,
}: ContatoFormFieldsProps) {
  return (
    <form onSubmit={onSubmit} noValidate>
      <h3 className="mb-6 font-impact text-xl tracking-wide text-britago-dark uppercase">
        Dados do orçamento
      </h3>

      <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="nome">Nome *</Label>
          <Input
            id="nome"
            name="nome"
            type="text"
            required
            autoComplete="name"
            value={form.nome}
            onChange={onChange}
            placeholder="Seu nome"
          />
        </div>
        <div>
          <Label htmlFor="empresa">Empresa</Label>
          <Input
            id="empresa"
            name="empresa"
            type="text"
            autoComplete="organization"
            value={form.empresa}
            onChange={onChange}
            placeholder="Nome da empresa"
          />
        </div>
      </div>

      <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="telefone">Telefone *</Label>
          <Input
            id="telefone"
            name="telefone"
            type="tel"
            required
            autoComplete="tel"
            value={form.telefone}
            onChange={onChange}
            placeholder="(81) 00000-0000"
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

      <div className="mb-6">
        <Label htmlFor="mensagem">Mensagem</Label>
        <Textarea
          id="mensagem"
          name="mensagem"
          rows={8}
          value={form.mensagem}
          onChange={onChange}
          placeholder="Descreva sua necessidade, volume estimado, prazo..."
        />
      </div>

      {error && (
        <Alert
          variant="destructive"
          className="mb-4 border-destructive-border bg-destructive-light"
        >
          <FiAlertCircle size={16} className="shrink-0" aria-hidden />
          <AlertDescription className="text-destructive">
            Não foi possível enviar sua mensagem. Tente novamente.
          </AlertDescription>
        </Alert>
      )}

      <Button
        type="submit"
        disabled={loading}
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
            Enviar mensagem
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
