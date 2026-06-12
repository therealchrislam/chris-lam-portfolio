import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    // Strict monochrome palette: black, white, one light gray for
    // subtle background separation only. No other colors exist.
    colors: {
      black: "#000000",
      white: "#ffffff",
      gray: "#f5f5f5",
      yellow: "#FFD700",
      transparent: "transparent",
      current: "currentColor",
    },
    extend: {
      fontFamily: {
        sans: ['"Helvetica Neue"', "Helvetica", "Arial", "sans-serif"],
        display: [
          "var(--font-display)",
          '"Helvetica Neue"',
          "Helvetica",
          "sans-serif",
        ],
        serif: ["var(--font-serif)", "Baskerville", "Georgia", "serif"],
        title: ["var(--font-title)", "Baskerville", "Georgia", "serif"],
        mono: ["var(--font-mono)", "ui-monospace", "Menlo", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
    },
  },
  plugins: [],
};

export default config;
