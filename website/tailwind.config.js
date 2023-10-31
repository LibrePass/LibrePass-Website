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
                    primary: '#9b4600',
                    'primary-content': '#ffffff',
                    // secondary: '#9a4500',
                    // accent: '#9a4500',
                    // neutral: '#2b3440',
                    'base-100': '#fffbff',
                    'base-200': '#f4ded4',
                    info: '#3abff8',
                    success: '#36d399',
                    warning: '#fbbd23',
                    error: '#f87272'
                },
                dark: {
                    primary: '#ffb68d',
                    // secondary: '#52443c',
                    // accent: '#fdb58c',
                    // neutral: '#e5e7eb',
                    'base-100': '#201a17',
                    'base-200': '#52443c',
                    info: '#3abff8',
                    success: '#36d399',
                    warning: '#fbbd23',
                    error: '#f87272'
                }
            }
        ]
    }
};
