// {
//   "extends": "next/core-web-vitals"
// }
module.exports = {
  plugins: ["@stylexjs"],
  rules: {
    "@stylexjs/valid-styles": ["error", { ...options }],
  },
};
