/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {}
    },
    plugins: [require('daisyui')],
    daisyui: {
        themes: [
            {
                light: {
                    primary: '#fdb58c',
                    // secondary: '#9a4500',
                    // accent: '#9a4500',
                    // neutral: '#2b3440',
                    'base-100': '#fffbff',
                    info: '#3abff8',
                    success: '#36d399',
                    warning: '#fbbd23',
                    error: '#f87272'
                },
                dark: {
                    primary: '#9a4500',
                    // secondary: '#9a4500',
                    // accent: '#fdb58c',
                    // neutral: '#e5e7eb',
                    'base-100': '#201a17',
                    info: '#3abff8',
                    success: '#36d399',
                    warning: '#fbbd23',
                    error: '#f87272'
                }
            }
        ]
    }
};
