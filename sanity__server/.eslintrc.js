module.exports = {
  env: { browser: true, es2021: true, node: true },
  extends: ['standard', '@sanity/eslint-config-studio', 'prettier'],
  parserOptions: {
    sourceType: 'module',
  },
  root: true,
};
