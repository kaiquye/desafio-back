module.exports = {
    env: {
        node: true,
        browser: false,
        commonjs: true,
        es2021: true,
    },
    extends: 'eslint:recommended',
    parserOptions: {
        ecmaVersion: 'latest',
    },
    rules: {
        semi: ['error', 'always'],
        quotes: ['error', 'single'],
        indent: ['error', 4],
        'comma-spacing': ['error', { before: false, after: true }],
    },

};