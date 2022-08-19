/** @type {import('tailwindcss').Config} */
module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            borderWidth: {
                '0.5': '1px'
            }
        },
        colors: {
            transparent: 'transparent',
            black: '#222831',
            secondary: '#4A1AD4',
            darkgray: '#4E596F',
            main: '#6833FF',
            gray: '#C5D1D3',
            white: '#F1F1F1',
        },
        fontFamily: {
            'nunito': ['Nunito', 'sans-serif'],
            'rubik': ['Rubik', 'sans-serif']
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
    corePlugins: {

    }
}
