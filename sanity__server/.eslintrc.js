module.exports = {
  env: { browser: true, es2021: true, node: true },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:jsx-a11y/strict',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },

    project: ['./tsconfig.json', './tsconfig.linters.json'],
    sourceType: 'module',
    tsconfigRootDir: __dirname,
  },
  root: true,
  plugins: ['@typescript-eslint', 'html'],
  settings: {
    react: { version: 'detect' },
  },
};
