/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        dimgray: {
          "100": "#666",
          "200": "rgba(102, 102, 102, 0.8)",
          "300": "rgba(102, 102, 102, 0.35)",
          "400": "rgba(102, 102, 102, 0.25)",
        },
        gray: "#111",
        darkslategray: "#333",
        crimson: "#ee1d52",
      },
      spacing: {},
      fontFamily: {
        avenir: "Avenir",
        poppins: "Poppins",
      },
    },
    fontSize: {
      base: "16px",
      lg: "18px",
      sm: "14px",
      inherit: "inherit",
    },
    screens: {
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
