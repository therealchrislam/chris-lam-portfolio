import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    // Near-black + off-white, monochrome. No accent color.
    colors: {
      ink: "#0a0a09", // page background
      panel: "#151513", // raised surface (hero / gallery / portrait plates)
      cream: "#f2f0eb", // primary text, on ink
      white: "#ffffff",
      black: "#000000",
      transparent: "transparent",
      current: "currentColor",
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-body)", '"Space Grotesk"', "sans-serif"],
        mono: ["var(--font-mono)", '"Space Mono"', "monospace"],
        display: ["var(--font-display)", '"Archivo"', "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
    },
  },
  plugins: [],
};

export default config;
