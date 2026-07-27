import { Resend } from "resend";
import { NextResponse } from "next/server";
import { CONTACT } from "@/lib/config/site";

const MAX_FILE_SIZE_BYTES = 5 * 1024 * 1024;
const PDF_SIGNATURE = "%PDF-";
const MIN_SUBMIT_TIME_MS = 3000;
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[\d\s()+-]{8,20}$/;

const rateLimitHits = new Map<string, number[]>();

function isRateLimited(ip: string) {
  const now = Date.now();
  const hits = (rateLimitHits.get(ip) ?? []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  hits.push(now);
  rateLimitHits.set(ip, hits);
  return hits.length > RATE_LIMIT_MAX_REQUESTS;
}

async function isPdfSignatureValid(file: File) {
  const header = new Uint8Array(await file.slice(0, 5).arrayBuffer());
  return new TextDecoder().decode(header) === PDF_SIGNATURE;
}

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Muitas tentativas. Tente novamente mais tarde." },
      { status: 429 },
    );
  }

  const formData = await request.formData();

  const nome = formData.get("nome");
  const email = formData.get("email");
  const telefone = formData.get("telefone");
  const area = formData.get("area");
  const pretensao = formData.get("pretensao");
  const consentimento = formData.get("consentimento");
  const website = formData.get("website");
  const startedAt = formData.get("startedAt");
  const arquivo = formData.get("arquivo");

  if (typeof website === "string" && website.trim() !== "") {
    return NextResponse.json({ error: "Requisição inválida." }, { status: 400 });
  }

  if (typeof startedAt === "string" && Date.now() - Number(startedAt) < MIN_SUBMIT_TIME_MS) {
    return NextResponse.json({ error: "Requisição inválida." }, { status: 400 });
  }

  if (
    typeof nome !== "string" ||
    nome.trim() === "" ||
    typeof email !== "string" ||
    !EMAIL_REGEX.test(email) ||
    typeof telefone !== "string" ||
    !PHONE_REGEX.test(telefone) ||
    typeof area !== "string" ||
    area.trim() === "" ||
    consentimento !== "true"
  ) {
    return NextResponse.json({ error: "Dados inválidos." }, { status: 400 });
  }

  if (!(arquivo instanceof File) || formData.getAll("arquivo").length > 1) {
    return NextResponse.json({ error: "Envie um único arquivo em PDF." }, { status: 400 });
  }

  if (arquivo.size === 0 || arquivo.size > MAX_FILE_SIZE_BYTES) {
    return NextResponse.json({ error: "O arquivo deve ter no máximo 5MB." }, { status: 400 });
  }

  if (arquivo.type !== "application/pdf" || !(await isPdfSignatureValid(arquivo))) {
    return NextResponse.json({ error: "O arquivo deve ser um PDF válido." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Envio de e-mail não configurado." }, { status: 500 });
  }

  const resend = new Resend(apiKey);
  const attachmentBuffer = Buffer.from(await arquivo.arrayBuffer());

  const { error } = await resend.emails.send({
    from: "Site Britago <onboarding@resend.dev>",
    to: CONTACT.emails.hr,
    replyTo: email,
    subject: `Novo currículo — ${nome} (${area})`,
    text: [
      `Nome: ${nome}`,
      `E-mail: ${email}`,
      `Telefone: ${telefone}`,
      `Área de interesse: ${area}`,
      typeof pretensao === "string" && pretensao.trim() !== ""
        ? `Pretensão salarial: ${pretensao}`
        : null,
    ]
      .filter(Boolean)
      .join("\n"),
    attachments: [{ filename: "curriculo.pdf", content: attachmentBuffer }],
  });

  if (error) {
    return NextResponse.json({ error: "Falha ao enviar currículo." }, { status: 502 });
  }

  return NextResponse.json({ success: true });
}
