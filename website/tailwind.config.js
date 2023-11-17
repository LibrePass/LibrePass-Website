/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
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
                    primary: '#ffb68d',
                    secondary: '#335c67',
                    accent: '#8a8a8a',
                    neutral: '#e5e7eb',
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
                    secondary: '#335c67',
                    accent: '#8a8a8a',
                    neutral: '#e5e7eb',
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
