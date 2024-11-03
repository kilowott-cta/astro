import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import fulldev from 'fulldev-ui/integration';

// https://astro.build/config
export default defineConfig({
  integrations: [
    svelte(), 
    tailwind(), 
    fulldev({
      colors: {
        theme: 'dark',
        dark: {
          background: '#111110',
          base: '#6F6D66',
          brand: '#F50',
        },
        light: {
          background: '#EEEEEC',
          base: '#6F6D66',
          brand: '#F50'
        }
      }
    })
  ]
});