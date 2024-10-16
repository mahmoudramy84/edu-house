import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        customPurple: "#5E199A",
        lightGray: "#EEF2F6",
      },
      container: {
        center: true,
        padding: "4rem",
      },
    },
  },

  plugins: [],
  darkMode: "class",
};
export default config;
