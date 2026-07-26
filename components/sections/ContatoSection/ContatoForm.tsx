"use client";

import { Card } from "@/components/ui/Card";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { useContatoForm } from "./hooks/useContatoForm";
import { ContatoFormFields } from "./ContatoFormFields";
import { ContatoFormSuccess } from "./ContatoFormSuccess";

export function ContatoForm() {
  const { form, submitted, loading, error, handleChange, handleSubmit, handleReset } =
    useContatoForm();

  return (
    <RevealOnScroll delay={0.15}>
      <Card className="gap-0 rounded-2xl border-britago-gray-light bg-white p-7 shadow-sm sm:p-9">
        {submitted ? (
          <ContatoFormSuccess onReset={handleReset} />
        ) : (
          <ContatoFormFields
            form={form}
            loading={loading}
            error={error}
            onChange={handleChange}
            onSubmit={handleSubmit}
          />
        )}
      </Card>
    </RevealOnScroll>
  );
}
