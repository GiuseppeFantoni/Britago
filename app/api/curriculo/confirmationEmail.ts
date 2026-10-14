import { COMPANY_NAME } from "@/lib/config/site";

export const CONFIRMATION_SUBJECT = `Recebemos seu currículo — ${COMPANY_NAME}`;

const PARAGRAPHS = [
  "Olá! Que bom ter você por aqui! 💙",
  `Agradecemos pelo seu interesse em fazer parte do nosso time e por escolher a ${COMPANY_NAME} para construir sua trajetória profissional.`,
  "Recebemos seu currículo e ele será analisado pela nossa equipe. Caso seu perfil seja compatível com alguma oportunidade em aberto, entraremos em contato.",
  "Se, neste momento, não houver uma vaga compatível, seu currículo ficará em nosso Banco de Talentos para futuras oportunidades.",
  "Desejamos sucesso na sua jornada e esperamos ter a oportunidade de contar com você em nosso time! 💙",
  `Equipe ${COMPANY_NAME}`,
];

export const CONFIRMATION_TEXT = PARAGRAPHS.join("\n\n");

export const CONFIRMATION_HTML = `<!doctype html>
<html lang="pt-BR">
  <body style="margin:0;padding:24px;background:#f4f6f9;font-family:Arial,Helvetica,sans-serif;color:#0a0e1a;">
    <div style="max-width:560px;margin:0 auto;background:#ffffff;border-radius:8px;padding:32px;border-top:4px solid #0f4c9f;">
      ${PARAGRAPHS.map(
        (p, i) =>
          `<p style="margin:0 0 16px;font-size:15px;line-height:1.6;${
            i === PARAGRAPHS.length - 1 ? "font-weight:bold;color:#0f4c9f;" : ""
          }">${p}</p>`,
      ).join("\n      ")}
    </div>
  </body>
</html>`;
