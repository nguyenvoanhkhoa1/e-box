import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          default: "#FE7B20",
        },
        secondary: {
          default: "#4AAC25",
        },
      },
      fontFamily: {
        openSans: ["var(--font-open-sans)"],
      },
    },
  },
  plugins: [],
}
export default config
