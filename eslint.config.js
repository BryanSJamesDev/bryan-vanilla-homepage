// eslint.config.js: flat config (ESLint 9+).
// If the course provides its own shared eslint config package/file, replace
// this file's contents with that one, per the assignment instructions.
export default [
  {
    files: ["js/**/*.js"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        window: "readonly",
        document: "readonly",
        localStorage: "readonly",
      },
    },
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "error",
      eqeqeq: "error",
      "prefer-const": "warn",
    },
  },
];
