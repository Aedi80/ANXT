import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        calmBg: '#f2f6f7',
        calmCard: '#ffffff',
        accent: '#3d7a81',
        accentSoft: '#d8ecef',
        textMain: '#1e2930'
      }
    }
  },
  plugins: []
};

export default config;
