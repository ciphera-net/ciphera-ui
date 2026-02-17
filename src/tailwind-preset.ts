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
    plugin(function({ addBase, addComponents, addUtilities }) {
      addBase({
        /* * Selection styling - consistent across all Ciphera products */
        '::selection': {
          '@apply bg-brand-orange/20 text-neutral-900 dark:text-white': {},
        },
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
          'font-feature-settings': '"cv02", "cv03", "cv04", "cv11"',
        },
      })
      addComponents({
        '.btn-primary': {
          '@apply bg-brand-orange text-white px-5 py-2.5 rounded-xl font-semibold shadow-sm shadow-orange-200 dark:shadow-none hover:shadow-orange-300 dark:hover:shadow-brand-orange/20 hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:ring-offset-2 dark:focus:ring-offset-neutral-900': {},
        },
        '.btn-secondary': {
          '@apply bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-white px-5 py-2.5 rounded-xl font-medium hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-all duration-200 shadow-sm hover:shadow-md dark:shadow-none focus:outline-none focus:ring-2 focus:ring-neutral-200 dark:focus:ring-neutral-700 focus:ring-offset-2 dark:focus:ring-offset-neutral-900': {},
        },
        /* * Glass card effect - shared across Pulse, Website, marketing pages */
        '.card-glass': {
          '@apply bg-white/80 dark:bg-neutral-900/80 backdrop-blur-xl border border-neutral-200/50 dark:border-neutral-800/50 rounded-2xl transition-all duration-300 ease-out': {},
        },
        /* * Gradient text for headlines */
        '.gradient-text': {
          '@apply bg-gradient-to-r from-brand-orange to-brand-orange-hover bg-clip-text text-transparent': {},
        },
        /* * Primary badge style */
        '.badge-primary': {
          '@apply inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-orange/10 text-brand-orange border border-brand-orange/20': {},
        },
        /* * Tier 2 - Shared marketing layout components (aligned with Pulse design system) */
        '.section-container': {
          '@apply max-w-6xl mx-auto px-4 sm:px-6 lg:px-8': {},
        },
        '.section-padding': {
          '@apply py-12 sm:py-16 md:py-24 lg:py-32': {},
        },
        '.card': {
          '@apply bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl transition-all duration-300 ease-out': {},
        },
        '.card-hover': {
          '@apply hover:border-neutral-300 dark:hover:border-neutral-700 hover:shadow-xl hover:shadow-neutral-200/50 dark:hover:shadow-black/50 hover:-translate-y-1': {},
        },
        '.btn-ghost': {
          '@apply inline-flex items-center justify-center gap-2 bg-transparent text-neutral-600 dark:text-neutral-400 font-medium px-4 py-2 rounded-lg transition-all duration-200 ease-out hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:ring-offset-2 dark:focus:ring-offset-neutral-950': {},
        },
        /* * Tier 3 - Design system page containers */
        '.page-container-app': {
          '@apply w-full max-w-6xl mx-auto px-4 sm:px-6 py-8': {},
        },
        '.page-container-marketing': {
          '@apply w-full max-w-4xl mx-auto px-4 pt-20 pb-10': {},
        },
      })
      addUtilities({
        /* * Dot grid background for marketing pages */
        '.bg-grid-pattern': {
          backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)',
          backgroundSize: '32px 32px',
        },
        /* * Orange glow effect */
        '.glow-orange': {
          boxShadow: '0 0 40px -10px rgba(253, 94, 15, 0.5)',
        },
      })
    })
  ]
}

export default config
