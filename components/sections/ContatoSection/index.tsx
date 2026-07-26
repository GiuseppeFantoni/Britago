"use client";

import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { FiAlertCircle, FiCheckCircle, FiSend } from "react-icons/fi";
import { useContatoForm } from "./hooks/useContatoForm";

const BENEFITS = [
  "Orçamento sem compromisso",
  "Atendimento especializado",
  "Laudo técnico incluso",
  "Frota própria",
  "Entrega em todo o estado de GO",
];

const INPUT_CLASS =
  "w-full px-4 py-3 rounded-lg bg-britago-light border border-britago-gray-light text-britago-dark font-roboto text-sm placeholder-britago-gray focus:outline-none focus:border-britago-primary focus:bg-white focus:ring-2 focus:ring-britago-primary/15 transition-all duration-200";

export function ContatoSection() {
  const { form, submitted, loading, error, handleChange, handleSubmit, handleReset } =
    useContatoForm();

  return (
    <section
      id="contato"
      className="bg-britago-light py-16 lg:py-20"
      aria-labelledby="contato-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left — headline + info */}
          <RevealOnScroll>
            <div className="mb-5">
              <SectionEyebrow>Fale conosco</SectionEyebrow>
            </div>
            <h2
              id="contato-heading"
              className="mb-6 font-impact leading-tight text-britago-primary uppercase"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
            >
              Solicite seu orçamento
            </h2>
            <p className="mb-8 max-w-md font-roboto text-base leading-relaxed font-light text-britago-gray">
              Preencha o formulário e nossa equipe comercial entrará em contato com a proposta
              personalizada para sua obra.
            </p>

            <div className="mb-10 space-y-3">
              {BENEFITS.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-britago-primary/10">
                    <div className="h-2 w-2 rounded-full bg-britago-primary" aria-hidden />
                  </div>
                  <span className="font-roboto text-sm text-britago-gray">{item}</span>
                </div>
              ))}
            </div>
          </RevealOnScroll>

          {/* Right — form */}
          <RevealOnScroll delay={0.15}>
            <div className="rounded-2xl border border-britago-gray-light bg-white p-6 shadow-sm sm:p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center gap-4 py-10 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-britago-primary/10">
                    <FiCheckCircle size={32} className="text-britago-primary" aria-hidden />
                  </div>
                  <h3 className="font-impact text-2xl text-britago-dark uppercase">
                    Mensagem enviada!
                  </h3>
                  <p className="max-w-xs font-roboto text-sm leading-relaxed font-light text-britago-gray">
                    Recebemos seu pedido. Nossa equipe entrará em contato em breve.
                  </p>
                  <button
                    onClick={handleReset}
                    className="mt-2 rounded-lg border border-britago-primary px-6 py-2.5 font-roboto text-sm font-medium text-britago-primary transition-all duration-200 hover:bg-britago-primary hover:text-white"
                  >
                    Enviar outra mensagem
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <h3 className="mb-6 font-impact text-xl tracking-wide text-britago-dark uppercase">
                    Dados do orçamento
                  </h3>

                  <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="nome"
                        className="mb-1.5 block font-roboto text-xs font-medium text-britago-dark"
                      >
                        Nome *
                      </label>
                      <input
                        id="nome"
                        name="nome"
                        type="text"
                        required
                        autoComplete="name"
                        value={form.nome}
                        onChange={handleChange}
                        placeholder="Seu nome"
                        className={INPUT_CLASS}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="empresa"
                        className="mb-1.5 block font-roboto text-xs font-medium text-britago-dark"
                      >
                        Empresa
                      </label>
                      <input
                        id="empresa"
                        name="empresa"
                        type="text"
                        autoComplete="organization"
                        value={form.empresa}
                        onChange={handleChange}
                        placeholder="Nome da empresa"
                        className={INPUT_CLASS}
                      />
                    </div>
                  </div>

                  <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="telefone"
                        className="mb-1.5 block font-roboto text-xs font-medium text-britago-dark"
                      >
                        Telefone *
                      </label>
                      <input
                        id="telefone"
                        name="telefone"
                        type="tel"
                        required
                        autoComplete="tel"
                        value={form.telefone}
                        onChange={handleChange}
                        placeholder="(81) 00000-0000"
                        className={INPUT_CLASS}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-1.5 block font-roboto text-xs font-medium text-britago-dark"
                      >
                        E-mail *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="seu@email.com"
                        className={INPUT_CLASS}
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="mensagem"
                      className="mb-1.5 block font-roboto text-xs font-medium text-britago-dark"
                    >
                      Mensagem
                    </label>
                    <textarea
                      id="mensagem"
                      name="mensagem"
                      rows={4}
                      value={form.mensagem}
                      onChange={handleChange}
                      placeholder="Descreva sua necessidade, volume estimado, prazo..."
                      className={`${INPUT_CLASS} resize-none`}
                    />
                  </div>

                  {error && (
                    <div
                      role="alert"
                      className="mb-4 flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 px-4 py-3 font-roboto text-sm text-red-700"
                    >
                      <FiAlertCircle size={16} className="shrink-0" aria-hidden />
                      Não foi possível enviar sua mensagem. Tente novamente.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    aria-busy={loading}
                    className="group flex w-full items-center justify-center gap-2 rounded-lg bg-britago-primary px-6 py-3.5 font-roboto text-base font-medium text-white transition-all duration-200 hover:bg-britago-primary-dark disabled:opacity-70"
                  >
                    {loading ? (
                      <>
                        <span
                          className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white"
                          aria-hidden
                        />
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
                  </button>
                </form>
              )}
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
