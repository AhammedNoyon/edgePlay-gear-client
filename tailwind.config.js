/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        nabBg: "#E3F2FD",
        naBarBg: "#00bfa6a4",
        titleColor: "#00BFA6",
        aboutBg: "rgb(236, 234, 227)",
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
};
