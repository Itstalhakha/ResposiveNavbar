import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        '2xl': { 'max': '9999px' },
        'xl': { 'max': '1535px' },
        'lg': { 'max': '1023px' },
        'mdd': { 'min': '827px' }, // Fixed: added 'min' for consistency in screen definition
        'sm': { 'min': '639px' },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' }, // Fixed: Corrected syntax by using single quotes
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        slideDown: 'slideDown 1s ease-out',
      },
    },
  },
  plugins: [],
};

export default config;
