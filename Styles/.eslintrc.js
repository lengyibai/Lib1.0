module.exports = {
  root: true,
  env: {
    es6: true, //启用 ES6 语法支持以及新的 ES6 全局变量或类型
    node: true, //Node.js 全局变量和 Node.js 作用域
    browser: true, //浏览器全局变量
  },
  extends: [
    "plugin:vue/essential",
    "eslint:recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    "no-unused-vars": "warn",
    "vue/multi-word-component-names": "off",
    "vue/no-multiple-template-root": "warn",
    "vue/no-mutating-props": "warn",
    "vue/no-parsing-error": "warn",
    "vue/no-unused-components": "warn",
    "vue/no-unused-vars": "warn",
    "vue/valid-v-slot": "warn",
    "vue/require-prop-type-constructor": "off",
  },
};
