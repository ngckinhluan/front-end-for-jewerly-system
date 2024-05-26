/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "colors-white-100": "#fff",
        "primary-primary-50": "#f0ebff",
        "primary-primary-500": "#7341fb",
        "neutral-neutral-800": "#363c45",
        "neutral-neutral-500": "#737982",
        "neutral-neutral-25": "#fbfcfe",
        "neutral-neutral-100": "#eff2f5",
        "neutral-neutral-50": "#f5f7fa",
        "neutral-neutral-200": "#e2e5e9",
        whitesmoke: "#eee",
        "primary-primary-400": "#895ffc",
        "colors-neutral-200": "#e8eaed",
        "colors-neutral-25": "#fbfcfd",
        gainsboro: "#e0e3e3",
        lightgray: "#cfd1d4",
      },
      spacing: {},
      fontFamily: {
        "d8-semibold": "Inter",
      },
      borderRadius: {
        "border-radius-br4": "4px",
      },
    },
    fontSize: {
      base: "16px",
      "5xl": "24px",
      lgi: "19px",
      xs: "12px",
      sm: "14px",
      lg: "18px",
      xl: "20px",
      "13xl": "32px",
      inherit: "inherit",
    },
    screens: {
      mq1000: {
        raw: "screen and (max-width: 1000px)",
      },
      mq975: {
        raw: "screen and (max-width: 975px)",
      },
      mq725: {
        raw: "screen and (max-width: 725px)",
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
