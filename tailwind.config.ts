import { nextui } from '@nextui-org/theme';
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(button|card|ripple|spinner).js"
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      text: '#ebe5eb',
      background: '#060406',
      secondaryBg: '#060406c8',
      myPrimary: '#c0adc2',
      secondary: '#58414d',
      accent: '#a2818d',
    },
    fontFamily: {
      sans: ['Arsenal SC', 'sans-serif'],
    },
    zIndex: {
      '999': '999',
    },
    backgroundImage: {
      'hero-bg': "url('/heroBg.jpg')"
    }
  },
  plugins: [nextui()],
};
export default config;
