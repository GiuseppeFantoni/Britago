"use client";

import { useState, useRef } from "react";
import { useInView } from "framer-motion";
import { FiSend, FiCheckCircle } from "react-icons/fi";

interface FormState {
  nome: string;
  empresa: string;
  telefone: string;
  email: string;
  produto: string;
  mensagem: string;
}

const INITIAL_FORM: FormState = {
  nome: "",
  empresa: "",
  telefone: "",
  email: "",
  produto: "",
  mensagem: "",
};

export function ContatoSection() {
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

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

  const inputClass =
    "w-full px-4 py-3 rounded-lg bg-[#F8F9FA] border border-[#DFE0E1] text-[#0A0E1A] font-roboto text-sm placeholder-[#6C6F72] focus:outline-none focus:border-[#0F4C9F] focus:bg-white focus:ring-2 focus:ring-[#0F4C9F]/15 transition-all duration-200";

  return (
    <section
      id="contato"
      ref={ref}
      className="bg-[#F8F9FA] py-16 lg:py-20"
      aria-labelledby="contato-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left — headline + info */}
          <div
            className={`transition-all duration-700 ease-out ${
              isInView ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
            }`}
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-[#C4922A]" aria-hidden />
              <span className="font-roboto text-sm font-medium tracking-widest text-[#C4922A] uppercase">
                Fale conosco
              </span>
            </div>
            <h2
              id="contato-heading"
              className="mb-6 font-impact leading-tight text-[#0F4C9F] uppercase"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
            >
              Solicite seu orçamento
            </h2>
            <p className="mb-8 max-w-md font-roboto text-base leading-relaxed font-light text-[#6C6F72]">
              Preencha o formulário e nossa equipe comercial entrará em contato em até 1 dia útil
              com a proposta personalizada para sua obra.
            </p>

            <div className="mb-10 space-y-3">
              {[
                "Resposta em até 1 dia útil",
                "Orçamento sem compromisso",
                "Laudo técnico incluso",
                "Entrega em todo o estado de GO",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0F4C9F]/10">
                    <div className="h-2 w-2 rounded-full bg-[#0F4C9F]" aria-hidden />
                  </div>
                  <span className="font-roboto text-sm text-[#6C6F72]">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div
            className={`transition-all delay-150 duration-700 ease-out ${
              isInView ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
            }`}
          >
            <div className="rounded-2xl border border-[#DFE0E1] bg-white p-6 shadow-sm sm:p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center gap-4 py-10 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0F4C9F]/10">
                    <FiCheckCircle size={32} className="text-[#0F4C9F]" aria-hidden />
                  </div>
                  <h3 className="font-impact text-2xl text-[#0A0E1A] uppercase">
                    Mensagem enviada!
                  </h3>
                  <p className="max-w-xs font-roboto text-sm leading-relaxed font-light text-[#6C6F72]">
                    Recebemos seu pedido. Nossa equipe entrará em contato em breve.
                  </p>
                  <button
                    onClick={handleReset}
                    className="mt-2 rounded-lg border border-[#0F4C9F] px-6 py-2.5 font-roboto text-sm font-medium text-[#0F4C9F] transition-all duration-200 hover:bg-[#0F4C9F] hover:text-white"
                  >
                    Enviar outra mensagem
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <h3 className="mb-6 font-impact text-xl tracking-wide text-[#0A0E1A] uppercase">
                    Dados do orçamento
                  </h3>

                  <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="nome"
                        className="mb-1.5 block font-roboto text-xs font-medium text-[#0A0E1A]"
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
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="empresa"
                        className="mb-1.5 block font-roboto text-xs font-medium text-[#0A0E1A]"
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
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="telefone"
                        className="mb-1.5 block font-roboto text-xs font-medium text-[#0A0E1A]"
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
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-1.5 block font-roboto text-xs font-medium text-[#0A0E1A]"
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
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="mensagem"
                      className="mb-1.5 block font-roboto text-xs font-medium text-[#0A0E1A]"
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
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    aria-busy={loading}
                    className="group flex w-full items-center justify-center gap-2 rounded-lg bg-[#0F4C9F] px-6 py-3.5 font-roboto text-base font-medium text-white transition-all duration-200 hover:bg-[#0A3575] disabled:opacity-70"
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
          </div>
        </div>
      </div>
    </section>
  );
}
