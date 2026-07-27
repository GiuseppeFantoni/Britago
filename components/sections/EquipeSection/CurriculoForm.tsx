"use client";

import { Card } from "@/components/ui/Card";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { useCurriculoForm } from "./hooks/useCurriculoForm";
import { CurriculoFormFields } from "./CurriculoFormFields";
import { CurriculoFormSuccess } from "./CurriculoFormSuccess";

export function CurriculoForm() {
  const {
    form,
    submitted,
    loading,
    error,
    errorMessage,
    handleChange,
    handleAreaChange,
    handlePretensaoChange,
    handleArquivoChange,
    handleConsentimentoChange,
    handleHoneypotChange,
    handleSubmit,
    handleReset,
  } = useCurriculoForm();

  return (
    <RevealOnScroll delay={0.15}>
      <Card className="gap-0 rounded-2xl border-britago-gray-light bg-white p-7 shadow-sm sm:p-9">
        {submitted ? (
          <CurriculoFormSuccess onReset={handleReset} />
        ) : (
          <CurriculoFormFields
            form={form}
            loading={loading}
            error={error}
            errorMessage={errorMessage}
            onChange={handleChange}
            onAreaChange={handleAreaChange}
            onPretensaoChange={handlePretensaoChange}
            onArquivoChange={handleArquivoChange}
            onConsentimentoChange={handleConsentimentoChange}
            onHoneypotChange={handleHoneypotChange}
            onSubmit={handleSubmit}
          />
        )}
      </Card>
    </RevealOnScroll>
  );
}
