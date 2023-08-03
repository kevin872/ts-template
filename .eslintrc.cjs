/* eslint-env node */
module.exports = {
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/strict'],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    parserOptions: {
        sourceType: 'module',
    },
    root: true,
    env: {
        browser: true,
        node: true,
    },
    rules: {
        '@typescript-eslint/explicit-function-return-type': 'error',
    },
}
