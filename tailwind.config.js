export default {
  content: ["./index.htm l", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slidein: {
          from: {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      bounce: {
        from: {
          transform: "translateY(-25px)",
        },
        to: {
          transform: "translateY(0)",
        },
        to: {
          transform: "translateY(-50px)",
        },
      },
      animation: {
        slidein300: "slidein 1s ease 300ms forwards",
        slidein500: "slidein 1s ease 500ms forwards",
        slidein700: "slidein 1s ease 700ms forwards",
        bounce1: "bounce 1s ease 200ms",
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
