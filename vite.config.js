import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"], // Custom font
        serif: ["Merriweather", "serif"],
      },
      gridTemplateColumns: {
      "70/30" : "70% 28%",
      },
    },
  },
  server: {
    port: 3000,
  },
});
