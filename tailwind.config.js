/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{ts,tsx,jsx,js}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["[data-theme=light]"],
          primary: "#f0abfc",

          secondary: "#90e048",

          accent: "#e0f2fe",

          neutral: "#04010f",

          "base-100": "#defdff",

          info: "#00adff",

          success: "#26e48a",

          warning: "#a27200",

          error: "#ff1f4a",
        },
        dark: {
          ...require("daisyui/src/theming/themes")["[data-theme=dark]"],
          primary: "#f0abfc",

          secondary: "#90e048",

          accent: "#e0f2fe",

          neutral: "#04010f",

          "base-100": "#1b263b",

          info: "#00adff",

          success: "#26e48a",

          warning: "#a27200",

          error: "#ff1f4a",
        },
      },
    ],
  },
};
