/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        nabBg: "#E3F2FD",
        naBarBg: "#00bfa6a4",
        titleColor: "#00BFA6",
        aboutBg: "rgb(236, 234, 227)",
      },
      backgroundImage: {
        slider1: "url('./assets/slider1.png')",
        slider2: "url('./assets/slider2.png')",
        banner1: "url('/src/assets/banner1.jpg')",
        banner2: "url('/src/assets/banner2.avif')",
        banner3: "url('/src/assets/banner3.jpg')",
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
};
