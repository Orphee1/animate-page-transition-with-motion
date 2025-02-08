import type { Config } from 'tailwindcss'

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        beige: '#FEF5EC',
        black: '#111',
      },
      fontFamily: {
        serif: ['var(--font-lora)'],
      },
      minHeight: {
        screenHeightWithoutHeader: 'calc(100vh - 101px)',
      },
      height: {
        screenHeightWithoutHeader: 'calc(100vh - 101px)',
      },
    },
  },
  plugins: [],
} satisfies Config
