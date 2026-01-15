/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["var(--font-instrument-serif)", "serif"],
        "serif-instrument": ["var(--font-instrument-serif)", "serif"],
        mono: ["var(--font-space-mono)", "monospace"],
        syne: ["var(--font-syne)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      colors: {
        accent: "#0047BB",
      },
    },
  },
  plugins: [],
}