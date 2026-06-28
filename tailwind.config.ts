import type { Config } from 'tailwindcss';
import tailwindcssAnimate from 'tailwindcss-animate';

export default {
  darkMode: ['class'],
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#3b82f6',
          green: '#22c55e',
          slate: '#0b1220'
        }
      },
      boxShadow: {
        premium: '0 20px 60px rgba(0,0,0,0.35)'
      },
      transitionDuration: {
        250: '250ms'
      }
    }
  },
  plugins: [tailwindcssAnimate]
} satisfies Config;
