/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        git: ["Space Mono", "monospace"],
      },
      colors: {
        "git-b-1": "#141D30",
        "git-b-2": "#1F2A48",
        "pass-b-1": "#18171F",
        "pass-b-2": "#24232C",
        "pass-green": "#A4FFAF",
      },
    },
  },
  plugins: [],
};
