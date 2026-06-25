import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        surface: "#0f172a",
        panel: "#111827",
        line: "rgba(148, 163, 184, 0.22)"
      },
      boxShadow: {
        soft: "0 18px 70px rgba(0, 0, 0, 0.32)"
      }
    }
  },
  plugins: []
};

export default config;
