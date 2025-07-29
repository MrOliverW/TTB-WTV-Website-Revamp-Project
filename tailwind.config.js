/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './*html',
    ],
    theme: {
        extend: {
            fontSize: {
                'headings': '1.75rem',
                'body1': '1.375rem',
                'body2': '1.5rem',
            },
            fontFamily: {
                sans: ['Roboto', 'sans-serif'],
            },
            colors: {
                'grassgreen': '#2A7A1B',
                'softgrey': '#F6F4F4',
            },
        },
    },
    plugins: [],
}