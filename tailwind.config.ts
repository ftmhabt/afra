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
        divider: "url('/waves-2-large.svg')",
      },
      colors: {
        primary: "#1C9593",
        secondary: "#EFEFEF",
      },
      fontFamily: {
        zain: ["Zain", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
