import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      text: '#ebe5eb',
      background: '#060406',
      secondaryBg: '#060406c8',
      primary: '#c0adc2',
      secondary: '#58414d',
      accent: '#a2818d',
    },
    fontFamily: {
      sans: ['Arsenal SC', 'sans-serif'],
    },
    zIndex: {
      '999': '999',
    }
  },
  plugins: [],
};
export default config;
