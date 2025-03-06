// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    vite: {
        build: {
          charset: "utf-8", // Fuerza UTF-8 en la salida
        },
      },

});
