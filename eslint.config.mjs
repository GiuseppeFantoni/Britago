import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import prettier from "eslint-config-prettier";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  prettier,

  {
    rules: {
      // ─── Console ──────────────────────────────────────────────────────────
      // Proibido console.log — apenas console.warn e console.error permitidos
      "no-console": ["error", { allow: ["warn", "error"] }],

      // ─── TypeScript ───────────────────────────────────────────────────────
      // Proibido 'any' — usar unknown + type guard
      "@typescript-eslint/no-explicit-any": "error",

      // Variáveis declaradas devem ser usadas (prefixo _ para ignorar)
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],

      // Sempre usar 'as Type' em vez de <Type> para type assertions
      "@typescript-eslint/consistent-type-assertions": ["error", { assertionStyle: "as" }],

      // Usar 'import type' para imports de tipo puro
      "@typescript-eslint/consistent-type-imports": [
        "warn",
        { prefer: "type-imports", fixStyle: "inline-type-imports" },
      ],

      // ─── React ────────────────────────────────────────────────────────────
      // Componentes devem ser function declarations (não class components)
      "react/function-component-definition": [
        "error",
        {
          namedComponents: "function-declaration",
          unnamedComponents: "arrow-function",
        },
      ],

      // Self-close componentes sem filhos: <Foo /> em vez de <Foo></Foo>
      "react/self-closing-comp": ["error", { component: true, html: false }],

      // Proibido usar index como key em listas dinâmicas
      "react/no-array-index-key": "warn",

      // Proibido passar target="_blank" sem rel="noopener noreferrer"
      "react/jsx-no-target-blank": "error",

      // Props booleanas não precisam de ={true}
      "react/jsx-boolean-value": ["error", "never"],
    },
  },

  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
]);

export default eslintConfig;
