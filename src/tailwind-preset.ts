import type { Config } from 'tailwindcss'

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
}

export default config
