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
                    "primary": "#9a4500",
                    "secondary": "#fdb58c",
                    "accent": "#9a4500",
                    "neutral": "#2b3440",
                    "base-100": "#ffffff",
                    "info": "#3abff8",
                    "success": "#36d399",
                    "warning": "#fbbd23",
                    "error": "#f87272",
                },
                dark: {
                    "primary": "#fdb58c",
                    "secondary": "#9a4500",
                    "accent": "#fdb58c",
                    "neutral": "#e5e7eb",
                    "base-100": "#1e1e1e",
                    "info": "#3abff8",
                    "success": "#36d399",
                    "warning": "#fbbd23",
                    "error": "#f87272",
                }
            }
        ],
    },
};
