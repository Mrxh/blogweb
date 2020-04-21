module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  // add your custom rules here
  rules: {
    "no-console":"off",
    "vue/no-parsing-error": [2, { "x-invalid-end-tag": false }],
    'generator-star-spacing': 'off',
    "vue/html-self-closing": ["error",{
      "html": {
        "void": "never",
        "normal": "any",
        "component": "any"
      },
      "svg": "always",
      "math": "always"
    }],
    "no-extend-native": ["error", { 
      "exceptions": ["Array"] 
    }]
  }
}
