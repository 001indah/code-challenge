import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "orange": "#FF5800",
        "orangeMuda": "#FFDECC",
        "hijauMuda": "#AAEEC4",
        "hijauTua": "#335540",
        "abuMuda": "#F4F4F4",
        "hijauSedang": "#409399",
        "hijauTulisan": "#32B280",
        "abuSedang": "#eeeeee"
      }
    },
  },
  plugins: [],
};
export default config;
