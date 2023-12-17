/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}', '../node_modules/@medzik/svelte-utils/**/*.{js,svelte,ts}'],
    theme: {
        container: {
            center: true,
            padding: '2rem'
        },
        extend: {}
    },
    plugins: [require('daisyui')],
    daisyui: {
        themes: [
            {
                light: {
                    primary: '#ff8c5c',
                    secondary: '#5d8e9f',
                    accent: '#b0b0b0',
                    neutral: '#cfd4d8',
                    'base-100': '#f4f4f4',
                    'base-200': '#ffffff',
                    'base-300': '#eaeaea',
                    info: '#3abff8',
                    success: '#36d399',
                    warning: '#fbbd23',
                    error: '#f87272'
                },
                dark: {
                    primary: '#ffb68d',
                    secondary: '#507c8b',
                    accent: '#8a8a8a',
                    neutral: '#cfd4d8',
                    'base-100': '#201a17',
                    'base-200': '#332d28',
                    'base-300': '#4f4740',
                    info: '#3abff8',
                    success: '#36d399',
                    warning: '#fbbd23',
                    error: '#f87272'
                }
            }
        ]
    }
};
