module.exports = {
  // TIP: You need to re specify all your prettier options here once you add a prettier.config.js or prettierrc.json file in your project root ↓
  tabWidth: 2,
  semi: false,
  // arrowParens: "avoid",
  bracketSpacing: true,
  singleQuote: true,
  jsxSingleQuote: true,

  // Plugins
  plugins: [require('prettier-plugin-tailwindcss')],
}
