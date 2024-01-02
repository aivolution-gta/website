import type { Config } from 'tailwindcss'

const config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
            extend: {
                backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            screens: {
                'xs': '250px',
            }
        },
        colors: {
            'dark-purple': '#282153',
            'mid-purple': '#554C89',
            'light-purple': '#6A60A4',
            'beige': '#FFECBC',
            'black': '#000000',
            'white': '#FFFFFF',
        }
    },

    plugins: [],
}
export default config
