import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        viva: {
          dark: "#070C0B",
          forest: "#122A23",
          emerald: "#1A3D33",
          gold: "#C5A059",
          "gold-light": "#E2C07D",
          sand: "#FAF8F5",
          ivory: "#F3EFEA",
          muted: "#5A6E67",
        },
      },
      fontFamily: {
        serif: ["Playfair Display", "Cinzel", "Georgia", "serif"],
        sans: ["Plus Jakarta Sans", "Outfit", "Inter", "system-ui", "sans-serif"],
        cinzel: ["Cinzel", "serif"],
        outfit: ["Outfit", "sans-serif"],
      },
      backgroundImage: {
        "radial-gradient": "radial-gradient(var(--tw-gradient-stops))",
        "glass-gradient": "linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
