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
        background: "#0a0a0a",
        foreground: "#ffffff",
        primary: {
          DEFAULT: "#7c3aed",
          dark: "#6d28d9",
          light: "#a855f7",
        },
        accent: "#a855f7",
        card: {
          DEFAULT: "#111111",
          light: "#1a1a1a",
        },
        muted: "#9ca3af",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        serif: ["var(--font-dm-serif)", "serif"],
      },
      boxShadow: {
        glow: "0 0 20px rgba(124, 58, 237, 0.15)",
        "glow-lg": "0 0 30px rgba(124, 58, 237, 0.3)",
      },
      animation: {
        "pulse-slow": "pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "orb-float": "float 10s ease-in-out infinite",
        "noise-move": "noise 0.5s steps(10) infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) scale(1)" },
          "50%": { transform: "translateY(-20px) scale(1.05)" },
        },
        noise: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "10%": { transform: "translate(-1%, -1%)" },
          "20%": { transform: "translate(-2%, 1%)" },
          "30%": { transform: "translate(1%, -2%)" },
          "40%": { transform: "translate(-1%, 3%)" },
          "50%": { transform: "translate(-2%, 1%)" },
          "60%": { transform: "translate(3%, -1%)" },
          "70%": { transform: "translate(2%, 1%)" },
          "80%": { transform: "translate(-3%, -2%)" },
          "90%": { transform: "translate(1%, 3%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;

