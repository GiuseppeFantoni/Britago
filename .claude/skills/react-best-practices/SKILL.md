---
name: react-best-practices
description: React and Next.js performance optimization guidelines from Vercel Engineering. Apply when writing, reviewing, or refactoring React/Next.js code — components, pages, data fetching, bundle size, re-renders, or any performance-sensitive change. Source: vercel-labs/agent-skills (MIT).
license: MIT
metadata:
  author: vercel
  version: "1.0.0"
---

# React & Next.js Best Practices (Vercel)

70 rules across 8 categories, prioritized by impact. Full explanations and
before/after code examples live in `REFERENCE.md` in this skill folder —
read the relevant section there before applying a rule, don't guess from
the name alone.

## When to apply

- Writing new React components or Next.js pages/routes
- Implementing data fetching (server or client)
- Reviewing or refactoring React/Next.js code
- Any bundle-size or performance-sensitive change

## Priority order (fix top-down)

1. **CRITICAL — Eliminating Waterfalls** (`async-*`): parallelize independent
   awaits, defer awaits until the branch that needs them, use `Promise.all`,
   start promises early / await late in route handlers, use Suspense to stream.
2. **CRITICAL — Bundle Size** (`bundle-*`): no barrel-file imports, prefer
   statically analyzable import paths, `next/dynamic` for heavy components,
   defer third-party scripts until after hydration, load modules only when
   the feature is actually activated, preload on hover/focus.
3. **HIGH — Server-Side** (`server-*`): authenticate Server Actions like
   public API endpoints, `React.cache()` for per-request dedup, LRU cache
   cross-request, hoist static I/O to module scope, never mutate shared
   module state in RSC/SSR, minimize props serialized to the client,
   parallelize fetches (including nested per-item fetches), use `after()`
   for non-blocking work.
4. **MEDIUM-HIGH — Client Data Fetching** (`client-*`): SWR for automatic
   dedup, dedupe global event listeners, passive listeners for scroll,
   version/minimize localStorage schemas.
5. **MEDIUM — Re-renders** (`rerender-*`): don't subscribe to state only
   used in callbacks, memoize expensive subtrees (not simple primitives),
   primitive effect dependencies, derive state during render not in effects,
   functional `setState`, lazy `useState` init, split hooks with independent
   deps, move interaction logic into event handlers, `startTransition` /
   `useDeferredValue` for non-urgent updates, refs for high-frequency
   transient values, never define components inside components.
6. **MEDIUM — Rendering** (`rendering-*`): animate a wrapper div not the SVG,
   `content-visibility` for long lists, hoist static JSX, ternary over `&&`
   for conditionals, `useTransition` for loading state, resource hints,
   `defer`/`async` on scripts, suppress only genuinely-expected hydration
   mismatches.
7. **LOW-MEDIUM — JS Perf** (`js-*`): Map/Set for lookups, cache property
   access and function results, early exit, hoist RegExp out of loops,
   combine iteration passes, `toSorted()` for immutability.
8. **LOW — Advanced** (`advanced-*`): keep `useEffectEvent` results out of
   effect deps, store event handlers in refs, init-once patterns, `useLatest`.

## Notes

- With React Compiler enabled, many manual `useMemo`/`useCallback` rules
  become unnecessary — check whether this project has it on before applying
  re-render rules mechanically.
- Server Actions must be treated as public endpoints: always auth-check
  inside the action itself, not just via middleware.
- Rule names above match the `rules/<name>.md` structure in the upstream
  repo; here they're all inlined in `REFERENCE.md` — search that file for
  the rule name/prefix to find the full writeup.
