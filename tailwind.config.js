/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#EA7C69",
        midnight: "#1F1D2B",
        dark: "#252836",
        "base-dark": "#2D303E",
        base: "#676a7e",
        lighter: "#ABBBC2",
        "base-dark-line": "#393C49",
        "accent-red": "#FF7CA3",
        "base-color": "#393C49",
        rgba: "rgba(0, 0, 0, 0.70)",
        "accent-green": "#50D1AA",
        "accent-purple": "#9290FE",
        "accent-brown": "#FFB572",
        body: "#252836",
        "base-border-color": "#393C49",
        "hover-color": "#1c1a25",
        "button-bg-green": "rgba(107, 226, 190, 0.24)",
        "button-bg-purple": "rgba(146, 144, 254, 0.20)",
        "button-bg-brown": "rgba(255, 181, 114, 0.20)",
      },
      boxShadow: {
        "primary-shadow": "0px 8px 24px 0px rgba(234, 124, 105, 0.32)",
        "card-shadow": "0px 8px 15px 0px #1A1A24",
      },
      fontFamily: {
        barlow: "Barlow, sans-serif",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
        ".no-scrollbar": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
