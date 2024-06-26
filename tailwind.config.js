/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primaryColor: "#EBEEF6",
      secondaryColor: "#525E85",
      tertiaryColor: "#8fabff",
      white: "#ffffff",
      slate: {
        100: "#f1f5f9",
        200: "#e2e8f0",
        300: "#cbd5e1",
        400: "#94a3b8",
      },
    },
    extend: {
      spacing: {
        0.5: "4px",
        1: "8px",
        2: "12px",
        3: "16px",
        3.5: "20px",
        4: "24px",
        5: "32px",
        6: "48px",
        7: "56px",
        8: "60px",
        9: "68px",
        10: "76px",
        11: "80px",
        12: "88px",
        13: "92px",
        14: "100px",
        16: "104px",
        18: "120px",
        20: "144px",
        24: "220px",
      },
    },
    screens: {
      xs: { min: "300px", max: "559px" },
      sm: { min: "560px", max: "799px" },
      md: { min: "800px", max: "1100px" },
      lg: { min: "1101px", max: "1399px" },
      xl: { min: "1400px", max: "1600px" },
      "2xl": { min: "1601px", max: "1800px" },
      "3xl": { min: "1801px", max: "2000px" },
      "4xl": { min: "2001px" },
    },
  },
  plugins: [],
};
