import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        'vp-blue': 'var(--vp-blue)',
        'vp-blue-hover': 'var(--vp-blue-hover)',
        'vp-dark': 'var(--vp-dark)',
        'vp-dark-soft': 'var(--vp-dark-soft)',
        'vp-purple': 'var(--vp-purple)',
        'vp-purple-hover': 'var(--vp-purple-hover)',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100%',
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

export default config
