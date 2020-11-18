const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  darkMode: 'media',
  experimental: {
    darkModeVariant: true,
  },
  variants: {},
  plugins: [
    require('@tailwindcss/ui'),
    require('tailwindcss/lib/flagged/darkModeVariantPlugin').default,
  ],
}
