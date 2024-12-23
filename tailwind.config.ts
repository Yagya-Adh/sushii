import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: "var(--font-poppins)",
      },
      borderRadius: {
        "3xl": "52px",
        "4xl": "62px",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        sushii: {
          coral: { 10: "#f52293" },
          pink: { 10: "#ffb7ff" },
          deliveroo: { 10: "#00ccbc" },
        },
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(25px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.3s ease-in",
        fadeOut: "fadeOut 0.3s ease-out",
        fadeInUp: "fadeInUp .8s ease-in",
      },
    },
  },
  plugins: [],
} satisfies Config;
