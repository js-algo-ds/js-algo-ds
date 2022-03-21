module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
    commonjs: true,
    amd: true,
  },
  extends: ['eslint:recommended'],
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
  },
  ignorePatterns: ['node_modules/', 'dist'],
  rules: {
    'no-var': 0,
  },
};
