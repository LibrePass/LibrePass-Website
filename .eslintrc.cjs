module.exports = {
    root: true,
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:svelte/recommended', 'prettier'],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'simple-import-sort'],
    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2020,
        extraFileExtensions: ['.svelte']
    },
    env: {
        browser: true,
        es2017: true,
        node: true
    },
    overrides: [
        {
            files: ['*.svelte'],
            parser: 'svelte-eslint-parser',
            parserOptions: {
                parser: '@typescript-eslint/parser'
            }
        }
    ],
    rules: {
        // Sort imports
        'simple-import-sort/imports': [
            'error',
            {
                groups: [
                    // Packages. `svelte` related packages come first.
                    ['^svelte', '^@?\\w'],
                    // Internal packages.
                    [
                        // Components
                        '^\\$components',
                        // Other
                        '^\\$'
                    ],
                    // Side effect imports.
                    ['^\\u0000']
                ]
            }
        ],
        // Allow using any type (e.g. const foo: any)
        '@typescript-eslint/no-explicit-any': 'off',
        // Allow using non-null assertion operator (e.g. foo!.bar())
        '@typescript-eslint/no-non-null-assertion': 'off',
        // Require type imports for type only imports
        '@typescript-eslint/consistent-type-imports': 'error',
        // Allow using @ts-ignore
        '@typescript-eslint/ban-ts-comment': 'off',
        // Allow using {@html}
        'svelte/no-at-html-tags': 'off'
    }
};
