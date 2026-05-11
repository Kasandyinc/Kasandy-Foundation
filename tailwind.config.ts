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
        "brown-deep":  "#50260E",
        "brown":       "#7A4028",
        "brown-soft":  "#C4956A",
        "brown-pale":  "#F5EDE2",
        "cream":       "#FAFAF8",
        "sand":        "#FFF3EA",
        "kf-red":      "#C8352A",
        "red-pale":    "#FFF0EE",
        "kf-green":    "#4A7C62",
        "green-deep":  "#2E5240",
        "green-pale":  "#EBF5EF",
        "kf-text":     "#2D1A0E",
        "text-body":   "#4A3020",
        "text-muted":  "#8B6B55",
        "kf-border":   "#E8DDD5",
      },
      fontFamily: {
        montserrat: ["var(--font-montserrat)", "Montserrat", "sans-serif"],
        "dm-sans":  ["var(--font-dm-sans)", "DM Sans", "system-ui", "sans-serif"],
        vibes:      ["var(--font-great-vibes)", "Great Vibes", "cursive"],
      },
      boxShadow: {
        kf:    "0 4px 24px rgba(80,38,14,0.10)",
        "kf-lg": "0 12px 48px rgba(80,38,14,0.14)",
      },
    },
  },
  plugins: [],
};
export default config;
