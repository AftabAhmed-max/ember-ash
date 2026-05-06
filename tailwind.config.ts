import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: "#0E0E0E",
          mid: "#161616",
          light: "#1E1D1B",
        },
        ember: {
          DEFAULT: "#C8552A",
          bright: "#E06B3A",
          deep: "#8C3A1A",
        },
        gold: {
          DEFAULT: "#B8964A",
          light: "#D4AF6A",
          pale: "#F0DFA8",
        },
        ash: {
          DEFAULT: "#3A3530",
          light: "#6B6358",
        },
        cream: {
          DEFAULT: "#F5EED8",
          muted: "#D4C9A8",
        },
        "off-white": "#FDFAF4",
      },
      fontFamily: {
        display: ["'Cormorant Garamond'", "Georgia", "serif"],
        body: ["'Outfit'", "sans-serif"],
      },
      fontSize: {
        "10xl": "10rem",
        "12xl": "12rem",
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "128": "32rem",
        "144": "36rem",
      },
      borderRadius: {
        none: "0",
      },
      transitionDuration: {
        "400": "400ms",
        "600": "600ms",
        "800": "800ms",
      },
      backgroundImage: {
        "ember-gradient": "linear-gradient(135deg, #8C3A1A 0%, #C8552A 50%, #B8964A 100%)",
        "dark-gradient": "linear-gradient(to bottom, transparent, #0E0E0E)",
        "overlay-gradient": "linear-gradient(to bottom, transparent 40%, rgba(14,14,14,0.95) 100%)",
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease forwards",
        "slide-up": "slideUp 0.8s ease forwards",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
