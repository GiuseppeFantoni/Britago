# Britago — Site Institucional

Site institucional da **Britago Mineração**, empresa fornecedora de agregados britados de alta qualidade em Goiás (Santa Bárbara de Goiás — GO).

🌐 **Produção:** [britago.com.br](https://britago.com.br)

---

## Stack

| Tecnologia                                                                                           | Versão | Papel                        |
| ---------------------------------------------------------------------------------------------------- | ------ | ---------------------------- |
| [Next.js](https://nextjs.org)                                                                        | 16     | Framework React (App Router) |
| [React](https://react.dev)                                                                           | 19     | UI                           |
| [Tailwind CSS](https://tailwindcss.com)                                                              | v4     | Estilização                  |
| [TypeScript](https://typescriptlang.org)                                                             | 5      | Tipagem estática             |
| [Framer Motion](https://www.framer.com/motion/)                                                      | 12     | Animações                    |
| [React Icons](https://react-icons.github.io/react-icons/)                                            | 5      | Ícones                       |
| [clsx](https://github.com/lukeed/clsx) + [tailwind-merge](https://github.com/dcastil/tailwind-merge) | —      | Merge de classes utilitário  |

---

## Pré-requisitos

- **Node.js 22** (versão definida em `.nvmrc` — use `nvm use` para ativar automaticamente)
- **npm ≥ 10** ou equivalente

---

## Instalação e desenvolvimento local

```bash
# 1. Clone o repositório
git clone https://github.com/seu-usuario/britago-site.git
cd britago-site/estudo

# 2. Ative a versão correta do Node.js (requer nvm)
nvm use

# 3. Instale as dependências
npm install

# 4. Configure as variáveis de ambiente
cp .env.example .env.local
# Edite .env.local com os valores reais (ver seção abaixo)

# 5. Inicie o servidor de desenvolvimento
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

---

## Variáveis de ambiente

Copie `.env.example` para `.env.local` e preencha os valores:

| Variável                | Obrigatória | Descrição                                          |
| ----------------------- | ----------- | -------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL`  | Sim         | URL pública do site (ex: `https://britago.com.br`) |
| `NEXT_PUBLIC_GA_ID`     | Não         | ID do Google Analytics 4 (ex: `G-XXXXXXXXXX`)      |
| `NEXT_PUBLIC_GSC_TOKEN` | Não         | Token de verificação do Google Search Console      |

> **Nunca commite o arquivo `.env.local`** — ele já está no `.gitignore`.

---

## Scripts disponíveis

```bash
npm run dev          # Servidor de desenvolvimento (http://localhost:3000)
npm run build        # Build de produção
npm run start        # Serve o build de produção localmente
npm run lint         # Verifica erros de ESLint
npm run lint:fix     # Corrige erros de ESLint automaticamente
npm run format       # Formata todos os arquivos com Prettier
npm run format:check # Verifica formatação sem alterar arquivos (útil em CI)
npm run type-check   # Verifica tipos com tsc --noEmit
npm run validate     # type-check + lint + format:check (rodar antes de commitar)
```

---

## Estrutura do projeto

Cada componente vive na própria pasta, com conteúdo separado por tipo de arquivo (`index.tsx`, `types.ts`, `constants.ts`, `hooks/`) — ver [`CLAUDE.md`](CLAUDE.md) para a convenção completa.

```
britago/
├── app/
│   ├── layout.tsx          # Root layout: metadata base, fontes, JSON-LD
│   ├── page.tsx             # Home (única rota — site one-page)
│   ├── globals.css           # Design tokens Tailwind v4 + estilos globais
│   ├── sitemap.ts              # Gera /sitemap.xml automaticamente
│   ├── robots.ts                 # Gera /robots.txt automaticamente
│   ├── not-found.tsx               # Página 404
│   ├── error.tsx                     # Boundary de erro global
│   └── loading.tsx                     # Skeleton de carregamento global
│
├── components/
│   ├── layout/
│   │   ├── Header/          # Navbar fixa — hooks de scroll e drawer mobile isolados
│   │   └── Footer/           # Rodapé com contatos e redes sociais
│   ├── sections/               # Seções da página (na ordem em que aparecem)
│   │   ├── HeroSection/
│   │   ├── QuemSomosSection/
│   │   ├── ProdutosSection/
│   │   ├── SustentabilidadeSection/
│   │   ├── Cultura/            # Versões desktop (hover) e mobile (stagger) + dados compartilhados
│   │   ├── EquipeSection/
│   │   ├── LaudoSection/
│   │   ├── LocalizacaoSection/
│   │   └── ContatoSection/     # Hook useContatoForm isolado em hooks/
│   ├── seo/
│   │   └── JsonLd/             # Componente OrganizationJsonLd (schema.org)
│   └── ui/                     # Primitivos reutilizáveis
│       ├── SectionEyebrow/     # Linha dourada + label uppercase
│       ├── RevealOnScroll/     # Wrapper de fade-in on scroll (framer-motion)
│       ├── IconBadge/          # Ícone em box arredondado com variantes de cor
│       └── WhatsAppButton/
│
├── lib/
│   ├── config/site.ts          # Dados da empresa, contatos (CONTACT, COMPANY_NAME...)
│   ├── seo/metadata.ts         # Helper createMetadata() + baseMetadata para SEO
│   └── utils.ts                # Função cn() para merge de classes Tailwind
│
├── public/
│   └── assets/                 # Imagens estáticas (hero, produtos, cultura…)
│
├── .env.example                # Template de variáveis de ambiente
├── .prettierrc                 # Config do Prettier (+ plugin Tailwind)
├── .prettierignore
├── eslint.config.mjs           # ESLint com Next.js + Prettier
├── next.config.ts              # Config do Next.js (imagens, compressão)
└── tsconfig.json                # TypeScript strict mode
```

---

## Deploy na Vercel

### Opção 1 — Deploy pelo painel (recomendado para primeiro deploy)

1. Acesse [vercel.com/new](https://vercel.com/new)
2. Importe o repositório do GitHub
3. **Framework Preset:** Next.js (detectado automaticamente)
4. **Root Directory:** `estudo` (se o projeto estiver dentro de uma pasta)
5. Adicione as variáveis de ambiente na aba **Environment Variables**:
   - `NEXT_PUBLIC_SITE_URL` → `https://britago.com.br`
   - `NEXT_PUBLIC_GA_ID` → seu ID do GA4 (opcional)
6. Clique em **Deploy**

### Opção 2 — Deploy pela CLI

```bash
# Instalar a Vercel CLI globalmente
npm i -g vercel

# Dentro da pasta do projeto
cd estudo

# Primeiro deploy (configura o projeto interativamente)
vercel

# Deploys subsequentes
vercel --prod
```

### Configuração de domínio customizado

Após o primeiro deploy:

1. No painel da Vercel, vá em **Settings → Domains**
2. Adicione `britago.com.br` e `www.britago.com.br`
3. Siga as instruções para configurar os registros DNS no seu provedor:

| Tipo    | Nome  | Valor                  |
| ------- | ----- | ---------------------- |
| `A`     | `@`   | `76.76.21.21`          |
| `CNAME` | `www` | `cname.vercel-dns.com` |

4. Aguarde a propagação DNS (normalmente < 1h)
5. Atualize a variável `NEXT_PUBLIC_SITE_URL` para `https://britago.com.br` no painel da Vercel e faça um novo deploy

### Variáveis de ambiente na Vercel

No painel: **Settings → Environment Variables**

Configure cada variável para os ambientes desejados:

- **Production** — valores reais do site
- **Preview** — pode usar uma URL de staging
- **Development** — para `vercel dev` local

---

## SEO e performance

- **Sitemap:** gerado automaticamente em `/sitemap.xml`
- **Robots:** gerado automaticamente em `/robots.txt`
- **JSON-LD:** `OrganizationJsonLd` injetado no `<body>` via `app/layout.tsx`
- **Imagens:** servidas em WebP/AVIF pelo Next.js Image Optimization
- **Fontes:** Inter + Montserrat + Roboto via `next/font/google` (sem layout shift)
- **Core Web Vitals:** imagem hero com `priority` (LCP), sem CLS em imagens

---

## Padrões de código

Este projeto segue as regras definidas em [`.cursorrules`](.cursorrules):

- **App Router** exclusivo — sem Pages Router
- **Server Components** por padrão; `"use client"` apenas quando necessário
- **TypeScript strict** — sem `any`, props tipadas com `interface`
- **Tailwind v4** com design tokens em `globals.css`
- **`cn()`** para merge condicional de classes (`lib/utils.ts`)
- **Prettier** com `prettier-plugin-tailwindcss` para ordenação automática de classes
- Componentes com mais de ~150 linhas devem ser quebrados
- Sem `console.log` em produção

---

## Licença

Projeto privado — © Britago. Todos os direitos reservados.
