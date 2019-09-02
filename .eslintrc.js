// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    sourceType: 'module'
  },
  parser: "vue-eslint-parser",
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  rules: {
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // react 规则
    'no-console': 'off',
    'space-before-function-paren': 0
  },
}
