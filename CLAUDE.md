@AGENTS.md

# Britago — Guia do Projeto

Site institucional/comercial da Britago Mineração. Stack: Next.js 16 (App Router) · React 19 · TypeScript · Tailwind v4.

Regras detalhadas de Next.js, React, Tailwind, SEO, imagens, performance e a11y estão em `.cursorrules` — este arquivo resume as convenções estruturais específicas deste projeto e não deve ser lido como substituto daquele documento.

## Comandos

```bash
npm run dev           # servidor de desenvolvimento
npm run build          # build de produção
npm run lint            # eslint --max-warnings=0
npm run lint:fix         # eslint --fix
npm run format             # prettier --write .
npm run format:check        # prettier --check .
npm run type-check            # tsc --noEmit
npm run validate               # type-check + lint + format:check (rodar antes de considerar uma tarefa concluída)
```

Git hooks são gerenciados via [Lefthook](https://lefthook.dev) (não husky — husky foi removido por instabilidade no Windows do time; Lefthook é um binário Go sem scripts shell, evitando o mesmo problema). `npm install` já roda `lefthook install` automaticamente via script `prepare`.

- **pre-commit**: roda `lint-staged` (prettier + eslint --fix nos arquivos staged).
- **commit-msg**: valida a mensagem via `commitlint` no padrão [Conventional Commits](https://www.conventionalcommits.org/) (`feat:`, `fix:`, `chore:`, `docs:`, `refactor:`, `test:`, `style:`, `perf:`, `ci:`, `build:`). Commit com mensagem fora do padrão é bloqueado.

Configuração em `lefthook.yml` e `commitlint.config.js`. Há também CI no GitHub Actions (`.github/workflows/ci.yml`) rodando `type-check`, `lint`, `format:check` e `build` em push/PR para `main` — os hooks locais são a primeira barreira, o CI é a garantia final (não pode ser pulado com `--no-verify`).

## Estrutura de pastas

```
lib/
  seo/metadata.ts      # createMetadata(), baseMetadata
  config/site.ts         # COMPANY_NAME, SITE_URL, CONTACT, FOUNDING_YEAR...
  utils.ts                 # cn() — helper de classes Tailwind (clsx + twMerge)

components/
  ui/         # primitivos genéricos reutilizáveis (Button, SectionEyebrow, RevealOnScroll, IconBadge...)
  layout/     # Header, Footer
  sections/   # seções de página (HeroSection, ProdutosSection...)
  seo/        # JsonLd e afins
```

### Convenção de pasta por componente

Cada componente vive na sua própria pasta, com conteúdo separado por tipo de arquivo:

```
ComponentName/
  index.tsx           # JSX do componente
  types.ts             # tipos locais — só se o componente tiver algum
  constants.ts          # dados estáticos locais (arrays de cards, links...) — só se houver
  hooks/
    useAlgumaCoisa.ts    # lógica de estado/efeito extraída — só se houver
  __tests__/               # reservado para testes futuros (ainda não usado no projeto)
```

Regras:

- Não criar arquivo ou pasta vazia "por padrão" — `types.ts`, `constants.ts` e `hooks/` só existem quando o componente realmente tem conteúdo para eles.
- Dados de negócio globais (telefone, endereço, nome da empresa) ficam em `lib/config/site.ts`, nunca duplicados dentro de `constants.ts` de um componente.
- Lógica de estado/efeito não-trivial (formulários, listeners de scroll, drawers) vai para um hook em `hooks/` — o `index.tsx` fica só com JSX chamando o hook.
- Import de fora do componente aponta para a pasta (`@/components/sections/ContatoSection`), que resolve para `index.tsx` automaticamente — não criar um segundo arquivo de re-export.
- Isto substitui a diretriz antiga do `.cursorrules` de centralizar tudo em `types/index.ts` — esse arquivo foi removido por estar morto (nada importava dele na prática).

## Design tokens — Tailwind

Cores da marca estão definidas em `app/globals.css` via `@theme inline` como `--color-britago-*` (primary, primary-dark, secondary, dark, dark-mid, light, gray, gray-light) mais tokens auxiliares (`success`, `whatsapp`).

**Nunca usar hex arbitrário em className** (`text-[#0F4C9F]`, `bg-[#0A0E1A]`). Sempre usar a classe do token: `text-britago-primary`, `bg-britago-dark`, etc. Se uma cor nova for necessária, adicionar o token em `globals.css` antes de usá-la — não hardcodar.

## Server vs Client Components

Server Component é o padrão — só adicionar `"use client"` quando o componente precisa de estado, efeitos, handlers de evento ou APIs de browser (a maioria das seções desta home usa `framer-motion` + `useInView`, por isso são client components). Ver `.cursorrules` seção 1.1 para exemplos.

## Componentes de UI — usar shadcn/ui

O projeto usa [shadcn/ui](https://ui.shadcn.com) como base para todo componente de UI genérico (botão, input, card, modal, badge, alert, etc.). `components.json` já está configurado (aliases apontando para `@/components`, `@/lib/utils`, `@/components/ui`).

- Para adicionar um novo primitivo, rodar `npx shadcn add <componente>` — isso gera o arquivo em `components/ui/<componente>.tsx`. Em seguida, mover o arquivo gerado para dentro de uma pasta seguindo a convenção do projeto (`components/ui/ComponentName/index.tsx`, ver seção "Convenção de pasta por componente" acima).
- Customizar o componente gerado para usar os tokens de marca já existentes em `app/globals.css` (`--color-britago-*`, `--color-destructive*`, fontes `font-impact`/`font-roboto`/`font-display`/`font-sans`) em vez das cores neutras padrão do shadcn — nunca deixar um componente novo com a paleta cinza/zinc default.
- Não rodar `npx shadcn init` novamente — ele sobrescreve o bloco `@theme inline` em `app/globals.css` e apagaria os tokens de marca. Os tokens semânticos que os componentes shadcn esperam (`--color-primary`, `--color-border`, `--color-card` etc.) já foram mapeados manualmente para as cores Britago nesse arquivo.
- `iconLibrary` está configurado como `react-icons` (não `lucide-react`) para manter consistência com o resto do projeto — se um componente gerado vier com import de `lucide-react`, trocar pelo ícone equivalente em `react-icons`.
- Não escrever primitivos de UI do zero (botão, input, card...) quando o shadcn já resolve — evita duplicar lógica e reinventar componentes com estado/acessibilidade complexos (ex.: `Sheet` para drawers/modais já traz focus-trap, Esc para fechar e scroll-lock de graça via Radix).

## Skill de boas práticas React/Next.js

Este projeto tem a skill `react-best-practices` instalada em `.claude/skills/react-best-practices/` (70 regras de performance da Vercel Engineering, cobrindo waterfalls, bundle size, re-renders, data fetching server/client). Aplicar automaticamente ao escrever ou revisar componentes React/Next.js — ver `SKILL.md` para a lista priorizada e `REFERENCE.md` para exemplos completos de código.
