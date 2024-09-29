module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-namespace':'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto', // Ensure Unix-style line endings (LF)
        semi: true,      // Always add semicolons
        singleQuote: true, // Use single quotes instead of double quotes
        trailingComma: 'es5', // Add trailing commas where valid in ES5
        printWidth: 80,    // Wrap lines that exceed 80 characters
        tabWidth: 2,      // Set the number of spaces per indentation-level
      },
    ],
  },

};
