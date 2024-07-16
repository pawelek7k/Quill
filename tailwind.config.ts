import { nextui } from '@nextui-org/theme';
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(breadcrumbs|button|card|checkbox|dropdown|select|toggle|ripple|spinner|menu|divider|popover|listbox|scroll-shadow).js"
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      text: '#ebe5eb',
      firstBg: '#060406',
      secondaryBg: '#060406c8',
      myPrimary: '#c0adc2',
      secondary: '#58414d',
      accent: '#a2818d',
    },
    fontFamily: {
      sans: ['Arsenal SC', 'sans-serif'],
    },
    zIndex: {
      '998': '998',
      '999': '999',
    },
    backgroundImage: {
      'hero-bg': "linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(255, 255, 255, 0.3)), url('/heroBg.jpg')",
      'primary-gradient': "linear-gradient(to bottom, rgba(0, 0, 0, 1),  rgba(255, 255, 255, 0.3))",
      'bookdetails-bg': "linear-gradient(90deg, rgba(6,4,6,1) 0%, rgba(6,4,6,0.4) 59%, rgba(6,4,6,1) 100%), url('/details-book.jpg')",
    }

  },
  plugins: [nextui()],
};
export default config;
