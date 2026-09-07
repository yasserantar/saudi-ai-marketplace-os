import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        arabic: ["var(--font-tajawal)", "system-ui", "sans-serif"],
        display: ["var(--font-tajawal)", "system-ui", "sans-serif"],
      },
      colors: {
        sand: {
          50: "#fdfbf7",
          100: "#f9f3e6",
          200: "#f0e3c4",
          300: "#e3cb95",
          400: "#d4ad63",
          500: "#c79446",
          600: "#a87839",
          700: "#825c30",
          800: "#5c4023",
          900: "#3a2814",
        },
        emerald: {
          950: "#003226",
        },
        royal: {
          50: "#f3f6ff",
          100: "#e4eaff",
          500: "#1e3a8a",
          600: "#1e40af",
          700: "#1d3578",
          900: "#0f1e4d",
        },
      },
      boxShadow: {
        luxury: "0 30px 60px -20px rgba(15,30,77,0.35)",
        glow: "0 0 40px rgba(199,148,70,0.25)",
      },
      backgroundImage: {
        "hero-pattern":
          "radial-gradient(circle at 20% 20%, rgba(199,148,70,0.25), transparent 55%), radial-gradient(circle at 80% 0%, rgba(15,30,77,0.55), transparent 50%), linear-gradient(180deg, #0a0f1f 0%, #0a0f1f 50%, #050810 100%)",
        "card-pattern":
          "linear-gradient(135deg, rgba(199,148,70,0.10), rgba(15,30,77,0.10))",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        floaty: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        shimmer: "shimmer 8s linear infinite",
        floaty: "floaty 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
