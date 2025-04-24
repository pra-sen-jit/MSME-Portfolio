import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
<<<<<<< HEAD
=======

>>>>>>> b908e3add2acd3e74f375514f08365f7cc8548a0

// https://vite.dev/config/
export default defineConfig({
  plugins: [
<<<<<<< HEAD
    react(),
    tailwindcss(),
=======
    tailwindcss(),
    react()
>>>>>>> b908e3add2acd3e74f375514f08365f7cc8548a0
  ],
})
