import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Directorio de salida para archivos generados durante la construcción
  },
  base: '/', // Ruta base si tu aplicación se sirve desde un subdirectorio
  server: {
    port: 3000, // Puerto para el servidor de desarrollo (Vite seleccionará automáticamente uno disponible)
  },
})
