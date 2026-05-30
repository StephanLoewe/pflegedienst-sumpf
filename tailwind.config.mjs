/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        petrol: {
          DEFAULT: '#1297a3',
          accessible: '#0f838e',
          dark: '#1a5c6b',
          tint: '#e6f3f4',
        },
        sweet: {
          DEFAULT: '#e06b2a',
          dark: '#5e2c10',
          tint: '#fdf0e8',
          accessible: '#e06b2a',
        },
        text: {
          DEFAULT: '#030712',
          muted: '#314158',
          inverted: '#f8fafc',
        },
        bg: {
          DEFAULT: '#fcfcfc',
          shade: '#eaf3f4',
          sweet: '#f4f0ea',
          component: '#ffffff',
        },
        border: {
          DEFAULT: '#e2e8f0',
        },
      },
      fontFamily: {
        headline: ['Manrope', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      fontSize: {
        'h1': ['52px', { lineHeight: '1.15', fontWeight: '800' }],
        'h2': ['39px', { lineHeight: '1.2', fontWeight: '800' }],
        'h3': ['34px', { lineHeight: '1.3', fontWeight: '700' }],
        'h4': ['22px', { lineHeight: '1.48', fontWeight: '700' }],
        'h5': ['20px', { lineHeight: '1.4', fontWeight: '700' }],
        'large': ['17px', { lineHeight: '1.7', fontWeight: '400' }],
        'medium': ['15px', { lineHeight: '1.6', fontWeight: '400' }],
        'small': ['14px', { lineHeight: '1.6', fontWeight: '400' }],
        'xsmall': ['12px', { lineHeight: '1.4', fontWeight: '400' }],
        'label': ['11px', { lineHeight: '1.4', fontWeight: '600' }],
      },
      borderRadius: {
        'pill': '1000px',
        'section': '48px',
        'card': '24px',
        'component': '8px',
      },
      maxWidth: {
        'content': '1360px',
      },
      spacing: {
        '18': '72px',
        '22': '88px',
        '25': '100px',
        '30': '120px',
      },
      boxShadow: {
        'stat': '0px 8px 32px 0px rgba(26,92,107,0.12)',
      },
    },
  },
  plugins: [],
};
