/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Instrument Serif", "serif"],
        "serif-instrument": ["Instrument Serif", "serif"],
        mono: ["Space Mono", "monospace"],
        syne: ["Syne", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        accent: "#0047BB",
      },
    },
  },
  plugins: [],
}
