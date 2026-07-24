// eslint.config.js
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import playwright from 'eslint-plugin-playwright';
import prettier from 'eslint-config-prettier';

export default [
  js.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  {
    files: ['tests/**/*.ts', 'steps/**/*.ts'],
    ...playwright.configs['flat/recommended'],
    rules: {
      'playwright/no-wait-for-timeout': 'error',
      'playwright/no-conditional-in-test': 'error',
      'playwright/expect-expect': 'error',
      'playwright/no-focused-test': 'error',
      '@typescript-eslint/no-floating-promises': 'error',
    },
  },
  prettier,   // siempre último
];