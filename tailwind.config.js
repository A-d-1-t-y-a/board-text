/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      mobile: "330px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      mainScreen: "1440px",
      xl: "1280px",
      xll:"1536px",
      pieChartWidth:"385px"
    },
    extend: {
      fontFamily: {
        montserrat: ["Montserrat"],
        lato: ["Lato"],
      },
      colors: {
        backgroundColor: "#DDDDDD",
        placeholderColor: "#B0B0B0",
        tCardBg: "#DDEFE0",
        tCardBg2: "#F4ECDD",
        tCardBg3: "#EFDADA",
        tCardBg4: "#DEE0EF",
        subTitle: "#858585",
        meetScheduleTitle: "#666666",
        meetScheduleSubTitle: "#999999",
        linkText: "#346BD4",
        emailPlaceholder: "#f5f5f5",
      },
    },
    plugins: [],
  },
};
