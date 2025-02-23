// @ts-check
import { defineConfig } from 'astro/config';
// import { visualizer } from "rollup-plugin-visualizer";


import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [
      tailwindcss(),
    //   visualizer({
    //     emitFile: false,
    //     filename: "stats.html",
    // })
]
  },
  site: 'https://darpserj.github.io',
  base: 'tf2-server-motds',
  
});