import { Resend } from "resend";
import { NextResponse } from "next/server";

const CONTATO_DESTINATION_EMAIL = "comercial@britago.com.br";

interface ContatoPayload {
  nome: string;
  empresa?: string;
  telefone: string;
  email: string;
  mensagem?: string;
}

function isValidPayload(body: unknown): body is ContatoPayload {
  if (typeof body !== "object" || body === null) return false;
  const { nome, telefone, email } = body as Record<string, unknown>;
  return (
    typeof nome === "string" &&
    nome.trim() !== "" &&
    typeof telefone === "string" &&
    telefone.trim() !== "" &&
    typeof email === "string" &&
    email.trim() !== ""
  );
}

export async function POST(request: Request) {
  const body = await request.json();

  if (!isValidPayload(body)) {
    return NextResponse.json({ error: "Dados inválidos." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Envio de e-mail não configurado." }, { status: 500 });
  }

  const resend = new Resend(apiKey);
  const { nome, empresa, telefone, email, mensagem } = body;

  const { error } = await resend.emails.send({
    from: "Site Britago <onboarding@resend.dev>",
    to: CONTATO_DESTINATION_EMAIL,
    replyTo: email,
    subject: `Novo pedido de orçamento — ${nome}`,
    text: [
      `Nome: ${nome}`,
      empresa ? `Empresa: ${empresa}` : null,
      `Telefone: ${telefone}`,
      `E-mail: ${email}`,
      mensagem ? `Mensagem:\n${mensagem}` : null,
    ]
      .filter(Boolean)
      .join("\n"),
  });

  if (error) {
    return NextResponse.json({ error: "Falha ao enviar e-mail." }, { status: 502 });
  }

  return NextResponse.json({ success: true });
}
