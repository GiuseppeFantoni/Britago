"use client";

import { useEffect, useRef, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { ApiError } from "@/lib/api/errors";
import type { CurriculoFormState } from "../types";

const INITIAL_FORM: CurriculoFormState = {
  nome: "",
  email: "",
  telefone: "",
  area: "",
  pretensao: "",
  arquivo: null,
  consentimento: false,
};

interface CurriculoResponse {
  success: boolean;
}

function formatSalaryInput(rawValue: string) {
  const digits = rawValue.replace(/\D/g, "");
  const amount = Number(digits) / 100;
  if (!amount) return "";
  return `R$ ${amount.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

async function submitCurriculo(form: CurriculoFormState, honeypot: string, startedAt: number) {
  const formData = new FormData();
  formData.append("nome", form.nome);
  formData.append("email", form.email);
  formData.append("telefone", form.telefone);
  formData.append("area", form.area);
  formData.append("pretensao", form.pretensao);
  formData.append("consentimento", String(form.consentimento));
  formData.append("website", honeypot);
  formData.append("startedAt", String(startedAt));
  if (form.arquivo) formData.append("arquivo", form.arquivo);

  const response = await fetch("/api/curriculo", { method: "POST", body: formData });
  const data = await response.json().catch(() => null);

  if (!response.ok) {
    throw new ApiError(data?.error ?? "Falha ao enviar currículo.", response.status);
  }

  return data as CurriculoResponse;
}

export function useCurriculoForm() {
  const [form, setForm] = useState<CurriculoFormState>(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);
  const honeypotRef = useRef("");
  const startedAtRef = useRef(0);

  useEffect(() => {
    startedAtRef.current = Date.now();
  }, []);

  const mutation = useMutation<CurriculoResponse, ApiError>({
    mutationFn: () => submitCurriculo(form, honeypotRef.current, startedAtRef.current),
    onSuccess: () => setSubmitted(true),
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleAreaChange = (area: string) => {
    setForm((prev) => ({ ...prev, area }));
  };

  const handlePretensaoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, pretensao: formatSalaryInput(e.target.value) }));
  };

  const handleArquivoChange = (arquivo: File | null) => {
    setForm((prev) => ({ ...prev, arquivo }));
  };

  const handleConsentimentoChange = (consentimento: boolean) => {
    setForm((prev) => ({ ...prev, consentimento }));
  };

  const handleHoneypotChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    honeypotRef.current = e.target.value;
  };

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutation.mutate();
  };

  const handleReset = () => {
    setSubmitted(false);
    mutation.reset();
    setForm(INITIAL_FORM);
    startedAtRef.current = Date.now();
  };

  return {
    form,
    submitted,
    loading: mutation.isPending,
    error: mutation.isError,
    errorMessage: mutation.error?.message,
    handleChange,
    handleAreaChange,
    handlePretensaoChange,
    handleArquivoChange,
    handleConsentimentoChange,
    handleHoneypotChange,
    handleSubmit,
    handleReset,
  };
}
