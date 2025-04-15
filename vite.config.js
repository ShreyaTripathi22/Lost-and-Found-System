import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  
  plugins: [react(),
    tailwindcss(),
  ],
})
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,html}'],
  theme: {
    extend: {
      fontFamily: {
        gothic: ['"Special Gothic Expanded One"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}