/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        darkslategray: "#333",
        dimgray: {
          "100": "#666",
          "200": "rgba(102, 102, 102, 0.8)",
          "300": "rgba(102, 102, 102, 0.6)",
          "400": "rgba(102, 102, 102, 0.35)",
        },
        gray: "#111",
        crimson: "#ee1d52",
        silver: "#c4c4c4",
      },
      spacing: {},
      fontFamily: {
        avenir: "Avenir",
        poppins: "Poppins",
      },
      borderRadius: {
        "21xl": "40px",
      },
    },
    fontSize: {
      "3xl": "22px",
      lg: "18px",
      lgi: "19px",
      base: "16px",
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
