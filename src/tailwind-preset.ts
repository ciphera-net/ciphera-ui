import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

const config: Omit<Config, 'content'> = {
  theme: {
    extend: {
      backgroundImage: {
        'ciphera-gradient': "radial-gradient(at 0% 0%, hsla(20, 98%, 52%, 0.03) 0px, transparent 50%), radial-gradient(at 100% 100%, hsla(20, 98%, 52%, 0.03) 0px, transparent 50%)",
        'ciphera-gradient-dark': "radial-gradient(at 0% 0%, hsla(20, 98%, 52%, 0.05) 0px, transparent 50%), radial-gradient(at 100% 100%, hsla(20, 98%, 52%, 0.05) 0px, transparent 50%)",
      },
      colors: {
        brand: {
          orange: {
            DEFAULT: '#FD5E0F',
            hover: '#E54E00',
          },
        },
      }
    },
  },
  plugins: [
    plugin(function({ addBase, addComponents }) {
      addBase({
        ':root': {
          '--color-brand-orange': '#FD5E0F',
          '--color-neutral-50': '#fafafa',
          '--color-neutral-100': '#f5f5f5',
          '--color-neutral-200': '#e5e5e5',
          '--color-neutral-300': '#d4d4d4',
          '--color-neutral-400': '#a3a3a3',
          '--color-neutral-500': '#737373',
          '--color-neutral-600': '#525252',
          '--color-neutral-700': '#404040',
          '--color-neutral-800': '#262626',
          '--color-neutral-900': '#171717',
          '--color-bg': '#ffffff',
          '--color-text': '#171717',
        },
        '.dark': {
          '--color-bg': '#0a0a0a',
          '--color-text': '#fafafa',
        },
        '*': {
          '@apply border-neutral-200 dark:border-neutral-800 transition-colors duration-300 ease-in-out': {},
        },
        'body': {
          '@apply bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50 transition-colors duration-300 ease-in-out': {},
          'font-family': 'var(--font-plus-jakarta-sans), system-ui, sans-serif',
        },
      })
      addComponents({
        '.btn-primary': {
          '@apply bg-brand-orange text-white px-5 py-2.5 rounded-xl font-semibold shadow-sm shadow-orange-200 dark:shadow-none hover:shadow-orange-300 dark:hover:shadow-brand-orange/20 hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:ring-offset-2 dark:focus:ring-offset-neutral-900': {},
        },
        '.btn-secondary': {
          '@apply bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-white px-5 py-2.5 rounded-xl font-medium hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-all duration-200 shadow-sm hover:shadow-md dark:shadow-none focus:outline-none focus:ring-2 focus:ring-neutral-200 dark:focus:ring-neutral-700 focus:ring-offset-2 dark:focus:ring-offset-neutral-900': {},
        }
      })
    })
  ]
}

export default config
