import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: "#5052FF",
          DEFAULT: "#5052FF",
        },
        success: {
          green: "#21A604",
          DEFAULT: "#21A604",
        },
        warning: {
          yellow: "#FFEF99",
          DEFAULT: "#FFEF99",
        },
        neutral: {
          gray: "#92929D",
          DEFAULT: "#92929D",
        },
        background: "#FAFAFA",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        logo: ["var(--font-jakarta)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
