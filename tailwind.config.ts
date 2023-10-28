import { Config } from "tailwindcss";

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      snek: '#9cd398',
      boop: '#191b20',
      step: '#e9e3db',
      primary: {
        light: 'rgb(var(--primary-light) / <alpha-value>)',
        dark: 'rgb(var(--primary-dark) / <alpha-value>)',
      },
      texture: {
        light: 'rgb(var(--texture-light) / <alpha-value>)',
        dark: 'rgb(var(--texture-dark) / <alpha-value>)',
      },
      contrast: {
        light: 'rgb(var(--contrast-light) / <alpha-value>)',
        dark: 'rgb(var(--contrast-dark) / <alpha-value>)',
      },
      danger: {
        light: 'rgb(var(--danger-light) / <alpha-value>)',
        dark: 'rgb(var(--danger-dark) / <alpha-value>)',
      },
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/container-queries'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
} satisfies Config

