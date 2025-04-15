import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import unusedImports from "eslint-plugin-unused-imports";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    // Register the unused-imports plugin
    plugins: {
      "unused-imports": unusedImports,
    },
    // Define rules for unused imports
    rules: {
      // This rule removes unused imports
      "unused-imports/no-unused-imports": "error",

      // This rule flags unused variables, similar to no-unused-vars but optimized for imports
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all", // Check all variables
          varsIgnorePattern: "^_", // Ignore variables that start with _
          args: "after-used", // Only flag unused variables after the last used argument
          argsIgnorePattern: "^_", // Ignore function arguments that start with _
        },
      ],

      "@typescript-eslint/no-explicit-any": "on",
      semi: ["error", "always"],
    },
  },
];
