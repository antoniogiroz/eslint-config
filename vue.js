const { isPackageExists } = require('local-pkg');

const TS = isPackageExists('typescript');

if (!TS) {
  console.warn('[@antoniogiroz/eslint-config] TypeScript is not installed, fallback to JS only.');
}

module.exports = {
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
      rules: {
        'no-unused-vars': 'off',
        'no-undef': 'off',
        ...(TS ? { '@typescript-eslint/no-unused-vars': 'off' } : null),
      },
    },
    {
      files: ['**/views/**/*.vue'],
      rules: {
        'vue/multi-word-component-names': 'off',
      },
    },
  ],
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    TS ? '@vue/eslint-config-typescript/recommended' : null,
    '@vue/eslint-config-prettier',
    TS ? './typescript' : './base',
  ],
  rules: {
    'vue/component-name-in-template-casing': ['error', 'PascalCase'],
    'vue/component-options-name-casing': ['error', 'PascalCase'],
    'vue/custom-event-name-casing': ['error', 'camelCase'],
    'vue/component-tags-order': [
      'error',
      {
        order: ['script', 'template', 'style'],
      },
    ],
    'vue/block-tag-newline': [
      'error',
      {
        singleline: 'always',
        multiline: 'always',
      },
    ],
    'vue/no-useless-v-bind': 'error',
  },
};
