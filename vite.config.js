import { defineConfig } from 'vite';
export default defineConfig({
 base: 'ProyectoConquer', // Reemplaza con el nombre de tu repositorio en GitHub
 build: {
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          // Si el archivo es CSS, lo llamamos siempre igual
          if (assetInfo.name && assetInfo.name.endsWith('.css')) {
            return 'assets/style.css';
          }
          // Los demás archivos (imágenes, JS, etc.) conservan el formato por defecto
          return 'assets/[name]-[hash][extname]';
        },
      },
    },
  },
});
