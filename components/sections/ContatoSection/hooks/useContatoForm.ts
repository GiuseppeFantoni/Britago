"use client";

import { useState } from "react";
import type { FormState } from "../types";

const INITIAL_FORM: FormState = {
  nome: "",
  empresa: "",
  telefone: "",
  email: "",
  produto: "",
  mensagem: "",
};

export function useContatoForm() {
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  const handleReset = () => {
    setSubmitted(false);
    setForm(INITIAL_FORM);
  };

  return { form, submitted, loading, handleChange, handleSubmit, handleReset };
}
