import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Remove the default colors when finished
        foreground: "var(--foreground)",
        // Main colors
        background: "var(--background)",
        primary: {
          DEFAULT: "#6C79D1",
          100: "#EDEEF3",
          200: "#7A86D3",
        },
        black: {
          DEFAULT: "#1E2329",
        },
        white: {
          DEFAULT: "#F9F9FB",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
