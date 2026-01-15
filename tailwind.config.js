/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
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
