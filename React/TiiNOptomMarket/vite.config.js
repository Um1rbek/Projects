import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  theme: {
  extend: {
    colors: {
      primary: "#348C44",
      secondary: "#FFDC4A",
      alert: "#D72638", // Qizil rang
    },
  },
}

})
