/** @type {import('@commitlint/types').UserConfig} */
const config = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    // Tipos de commit permitidos
    "type-enum": [
      2,
      "always",
      [
        "feat", // nova funcionalidade
        "fix", // correção de bug
        "docs", // documentação
        "style", // formatação (sem mudança de lógica)
        "refactor", // refatoração
        "perf", // melhoria de performance
        "test", // testes
        "chore", // manutenção, dependências, build
        "ci", // CI/CD
        "revert", // reverte commit anterior
      ],
    ],

    // Assunto em minúsculo
    "subject-case": [2, "always", "lower-case"],

    // Tamanho máximo do assunto
    "subject-max-length": [2, "always", 100],

    // Assunto não pode terminar com ponto
    "subject-full-stop": [2, "never", "."],

    // Assunto obrigatório
    "subject-empty": [2, "never"],

    // Tipo obrigatório
    "type-empty": [2, "never"],

    // Tamanho máximo de linha no body
    "body-max-line-length": [2, "always", 100],
  },
};

export default config;
