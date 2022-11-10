const OFF = 'off';
const ERROR = 'error';
const WARN = 'warn';

module.exports = {
    parser: '@typescript-eslint/parser',  // Specifies the ESLint parser
    plugins: ['@typescript-eslint'],
    extends: [
        './node_modules/@kunstmaan/eslint-typescript-config/index.js',
    ],
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    parserOptions: {
        ecmaVersion: 2018,  // Allows for the parsing of modern ECMAScript features
        sourceType: 'module',  // Allows for the use of imports
    },
    rules: {
        camelcase: [OFF],
        '@typescript-eslint/camelcase': ['OFF'],
        '@typescript-eslint/no-explicit-any': [OFF],
        '@typescript-eslint/typedef': [ERROR], /* To specify specific options
            https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/typedef.md */
    }
};
