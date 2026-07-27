# Plano — Página `/carreiras` (envio de currículo)

Status: **planejamento**, não implementado. Substitui os links `mailto:${CONTACT.emails.hr}` hoje usados em `EquipeSection/index.tsx:60`, `Footer/index.tsx:104` e `LocalizacaoInfoCard.tsx:67` (manter o `mailto` como fallback só no rodapé, se fizer sentido).

## 1. Objetivo

Trocar o `mailto:` (que depende do cliente de e-mail do visitante estar configurado) por um formulário na própria página que envia o currículo direto pro RH via Resend, com anexo.

## 2. Rota e estrutura de arquivos

- URL: `/carreiras` → `app/carreiras/page.tsx`
- Server Component para a página (SEO, `createMetadata()` de `lib/seo/metadata.ts`, título tipo "Trabalhe Conosco | Britago").
- Formulário é interativo (estado, upload, submit) → client component isolado, seguindo a convenção do projeto:

```
components/sections/CarreirasSection/
  index.tsx              # JSX (Server ou re-export do client form)
  CurriculoForm.tsx        # "use client" — o form em si
  types.ts                  # tipo do payload (nome, email, telefone, área, pretensão, arquivo)
  constants.ts                # lista de áreas/setores (select), limites de arquivo
  hooks/
    useCurriculoForm.ts        # estado do form, validação client-side, chamada à API

app/api/curriculo/route.ts   # Route Handler, POST — recebe FormData, valida, envia via Resend
```

- Textos de apoio (o que a empresa aceita, prazo de retorno etc.) — página deve ter espaço pra isso, não só o form cru.

## 3. Campos do formulário (a confirmar com a empresa)

Base mínima que você já teria certeza de precisar:

- Nome completo (obrigatório)
- E-mail (obrigatório, validado)
- Telefone/WhatsApp (obrigatório)
- Área de interesse (select — Operação, Manutenção, Administrativo, Comercial, Logística... perguntar pro RH a lista real)
- Pretensão salarial (texto ou número — decidir se é obrigatório, gente costuma preferir opcional ou faixa)
- Upload do currículo (obrigatório, **apenas PDF, um único arquivo, máx. 5MB** — ver seção 6)
- Checkbox de consentimento LGPD (obrigatório — ver seção 6)
- Campo honeypot invisível (anti-spam, ver seção 5)

Campos que podem entrar dependendo do que a empresa pedir: cidade/disponibilidade pra mudança, tempo de experiência, disponibilidade de horário, "como conheceu a vaga".

## 4. Componentes shadcn a usar

Tudo já deve nascer em `components/ui/<nome>/index.tsx` conforme a convenção do projeto, com os tokens `--color-britago-*` (nunca cinza/zinc default do shadcn):

- `Form` (wrapper com `react-hook-form` + `zod`, é o padrão recomendado pelo shadcn pra formulários)
- `Input` — nome, e-mail, telefone
- `Select` — área de interesse
- `Textarea` ou `Input` — pretensão salarial
- `Checkbox` — consentimento LGPD
- `Button` — submit (com estado de loading)
- Componente de upload: shadcn não tem um "file input" pronto — construir em cima do `Input` (`type="file"`) estilizado com os tokens da marca, mostrando nome do arquivo selecionado, tamanho e um botão de remover.
- `Toast`/`Sonner` (já no ecossistema shadcn) pra feedback de sucesso/erro do envio, em vez de `alert()`.

Rodar `npx shadcn add form select checkbox textarea sonner` (não `input`/`button` se já existirem) e mover pra pastas próprias, como já é feito no projeto.

## 5. Envio por e-mail — Resend

- Já é usado no projeto? Confirmar se existe `lib/resend.ts` ou similar; se não, criar client do Resend a partir de `RESEND_API_KEY` em variável de ambiente (nunca hardcoded — regra do `.claude/rules/appsec-rules.md`).
- Free tier do Resend cobre o volume esperado (100 e-mails/dia / 3.000/mês) e aceita anexos via campo `attachments` (base64), sem custo adicional dentro do limite de payload (~40MB).
- Fluxo no Route Handler (`app/api/curriculo/route.ts`):
  1. Recebe `FormData` (não JSON, por causa do arquivo).
  2. Valida todos os campos (zod) e o arquivo (seção 6).
  3. Converte o arquivo pra `Buffer`/base64.
  4. Chama `resend.emails.send()` com `to: CONTACT.emails.hr`, `reply_to` = e-mail do candidato, assunto com nome + área, corpo com os dados do form, `attachments: [{ filename, content }]`.
  5. Opcional: e-mail de confirmação automático pro candidato ("recebemos seu currículo").
- Rate limiting básico no Route Handler (ex.: limitar por IP com um contador simples em memória/edge config, ou usar `@upstash/ratelimit` se já tiver Redis) pra evitar flood de envios.

## 6. Segurança — validação de arquivo

Ponto crítico, porque upload de arquivo é a superfície de ataque mais óbvia aqui. Regra decidida: **somente PDF, um único arquivo, limite de 5MB.**

- **Por que 5MB:** currículo em PDF de texto (mesmo com foto pequena e formatação) raramente passa de 500KB–1.5MB; 5MB já é folga generosa pra um PDF "pesado" (design mais elaborado, várias páginas) sem abrir espaço pra abuso (payload gigante ocupando a cota diária do Resend ou custando tempo/banda). Se aparecer caso legítimo maior que isso na prática, é fácil subir o teto depois — começar restritivo é mais seguro que começar frouxo.
- **Um único arquivo:** o input não deve ter `multiple`; e o servidor deve rejeitar a request se vier mais de um arquivo no `FormData`, não só confiar no client.
- **Nunca confiar só na extensão do nome do arquivo nem no `Content-Type` enviado pelo navegador** — ambos são facilmente forjáveis (um `.exe` renomeado pra `.pdf` passa pela checagem ingênua).
- Validar o **magic number / assinatura binária** do arquivo no servidor (primeiros bytes devem ser `%PDF-`). Usar uma lib de detecção de tipo por conteúdo (ex. `file-type`) em vez de confiar em string/extensão — só aceitar se a lib confirmar `mime === "application/pdf"` a partir do conteúdo real.
- Limitar tamanho a **5MB** tanto no client (`accept="application/pdf"`, sem `multiple`, checagem de `file.size` antes de habilitar o submit — só UX, feedback rápido) quanto **obrigatoriamente no servidor** (client-side nunca é garantia; validar `Content-Length` da request e o tamanho real do buffer recebido).
- Restringir a **apenas PDF** — nada de DOC/DOCX/HTML/SVG/executáveis. Reduz a superfície: PDF é o único formato que passa pela checagem de assinatura.
- **PDF com script embutido**: PDFs podem carregar JavaScript (`/JavaScript`, `/JS`, `/OpenAction`) ou ser usados pra phishing/exploits em leitores vulneráveis. Como o arquivo só é _enviado por e-mail_ (não é executado ou renderizado no servidor/no site), o risco principal não é execução no seu ambiente, mas sim:
  - Não gerar preview/thumbnail do PDF no servidor com uma lib vulnerável (evitar rodar parsing pesado nele além da checagem de assinatura).
  - Se algum dia quiser mostrar preview no painel administrativo, usar sandbox (iframe com CSP restritiva, ou serviço externo) — não renderizar direto.
  - Considerar rodar o anexo por um scanner de malware (ex. ClamAV via serviço, ou integração paga tipo VirusTotal API) antes de reenviar, se o volume justificar — pode ficar como "fase 2", não bloqueante pro MVP.
- Nunca salvar o arquivo com o nome original em disco/S3 se algum dia adicionar storage — sanitizar o nome (remover path traversal `../`, caracteres especiais) e gerar um nome novo (uuid) mantendo só a extensão validada.
- Sanitizar todos os campos de texto antes de colocar no corpo do e-mail (evitar header injection — `\r\n` em campos como "nome" ou "e-mail" podem injetar headers SMTP adicionais se o corpo for montado por concatenação manual; o SDK do Resend já mitiga isso ao usar os campos estruturados da API em vez de montar a mensagem raw, então usar sempre os campos tipados, nunca template string pro payload inteiro).
- Validar e-mail e telefone com regex/zod antes de aceitar.
- Honeypot (campo invisível via CSS que só bot preenche) + checagem de tempo mínimo entre carregar o form e enviar, como anti-spam leve sem precisar de captcha visível. Se spam for problema real depois, evoluir pra hCaptcha/Turnstile.
- HTTPS já é padrão (Vercel/Next), então TLS não é um ponto extra aqui.

## 7. LGPD

- Checkbox de consentimento obrigatório antes do submit, com texto curto tipo: "Autorizo o uso dos meus dados para fins de recrutamento e seleção da Britago." + link pra uma política de privacidade (se ainda não existir uma página `/privacidade`, provavelmente vale criar em paralelo).
- Definir por quanto tempo o currículo/e-mail fica retido (isso é decisão da empresa/RH, não técnica) e documentar.
- Não logar o conteúdo do currículo nem dados pessoais em logs de aplicação/observability por padrão.

## 8. UX — página vs modal, mobile

- Página dedicada (`/carreiras`), não modal — já discutido: melhor pra upload + teclado no mobile, e ganha URL indexável no Google.
- Mobile: `<input type="file">` nativo abre o seletor do sistema; layout do form em coluna única, `Select` do shadcn já é touch-friendly via Radix.
- Estado de loading claro no botão de submit (upload pode levar alguns segundos em conexão ruim) + desabilitar duplo clique.
- Mensagem de sucesso clara pós-envio (toast + talvez redirecionar pra uma seção "obrigado" ou trocar o form por uma mensagem de confirmação).
- Tratar erro de rede/timeout com mensagem específica (não só "erro genérico"), já que upload é mais propenso a falhar que um form de texto.

## 9. Pendências antes de implementar

- [ ] Lista definitiva de campos e áreas com o RH da empresa.
- [ ] Confirmar se `RESEND_API_KEY` já está configurado no projeto/Vercel ou precisa ser criado.
- [ ] Decidir política de retenção de dados (LGPD) com o RH.
- [ ] Decidir se quer e-mail de confirmação automático pro candidato.
- [ ] Decidir se scanner de malware entra no MVP ou fica pra depois.
