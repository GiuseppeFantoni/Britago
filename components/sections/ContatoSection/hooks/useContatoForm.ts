"use client";

import { useRequestMutation } from "@/lib/api/useRequest";
import { useState } from "react";
import type { FormState } from "../types";

const INITIAL_FORM: FormState = {
  nome: "",
  empresa: "",
  telefone: "",
  email: "",
  mensagem: "",
};

interface ContatoResponse {
  success: boolean;
}

export function useContatoForm() {
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);

  const mutation = useRequestMutation<ContatoResponse, FormState>({
    endpoint: "/contato",
    onSuccess: () => setSubmitted(true),
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutation.mutate(form);
  };

  const handleReset = () => {
    setSubmitted(false);
    mutation.reset();
    setForm(INITIAL_FORM);
  };

  return {
    form,
    submitted,
    loading: mutation.isPending,
    error: mutation.isError,
    handleChange,
    handleSubmit,
    handleReset,
  };
}
