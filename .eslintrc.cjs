module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', "unused-imports"],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    '@typescript-eslint/no-unused-vars': "warn", // 沒用到的變數
    // 沒用到的引用，加了這個 plugin 之後就可以自動 fix
    // https://www.npmjs.com/package/eslint-plugin-unused-imports
    "unused-imports/no-unused-imports-ts": "warn"
  },
}
