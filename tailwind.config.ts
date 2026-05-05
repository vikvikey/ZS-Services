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
        primary: "#1E3A8A",
        sky: {
          accent: "#0EA5E9",
        },
        success: "#22C55E",
        danger: "#EF4444",
        warn: "#F59E0B",
        surface: "#FFFFFF",
        muted: "#F8FAFC",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 4px 14px -4px rgb(30 58 138 / 0.12)",
        "soft-lg": "0 12px 40px -12px rgb(30 58 138 / 0.15)",
      },
    },
  },
  plugins: [],
};

export default config;
