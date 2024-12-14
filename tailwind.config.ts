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
        /* 
     navbar bg:    rgba(152, 152, 152, 0.596)    
    */
      },
    },
  },
  plugins: [],
} satisfies Config;
