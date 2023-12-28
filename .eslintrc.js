module.exports = {
  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
  ],
  rules: {
    'vue/array-bracket-spacing': ['error', 'always'],
    'vue/multi-word-component-names': ['error', {
      ignores: ['Home', 'About', 'Members', 'Schedule', 'Benda'], // Add your component names
    }],
    'vue/no-v-text-v-html-on-component': 'off', // Disable or adjust this rule based on your preference
  },
  env: {
    node: true,
  },
  globals: {
    require: true,
  },
};
