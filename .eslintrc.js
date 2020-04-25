module.exports = {
  "root": true,
  "env": {
    "node": true,
    "browser": true,
    "es6": true
  },
  "parser": "vue-eslint-parser",
  "parserOptions": {
    "sourceType": "module",
    "parser": "babel-eslint",
    "allowImportExportEverywhere": true
  },
  "extends": ['plugin:vue/recommended', "eslint:recommended"],
  "plugins": [
    "vue"
  ],
  "rules": {
    "vue/max-attributes-per-line": ["error", {
      "singleline": 100
    }],
    "vue/html-self-closing": "off",
    "vue/singleline-html-element-content-newline": "off",
    "vue/no-v-html": "off",
    "vue/multiline-html-element-content-newline": "off",
    "no-unused-vars": "off",
    "semi": ["error", "never"],
    "no-async-promise-executor": "off",
    "no-useless-escape": "off",
    "no-prototype-builtins": "off",
    "no-undef": "off"
  }
}
