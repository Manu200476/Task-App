module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 12,
  },
  extends: [
    'airbnb-base',
    'plugin:vue/essential',
  ],
  plugins: ['vue'],
  rules: {
    semi: ['error', 'never'],
    'max-len': ['error', { code: 120, ignoreUrls: true }],
  },
}
