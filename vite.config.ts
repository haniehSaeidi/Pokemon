import vue from '@vitejs/plugin-vue';
import { viteCommonjs } from '@originjs/vite-plugin-commonjs'
import { defineConfig as defineVitestConfig } from 'vitest/config';

export default defineVitestConfig({
  plugins: [vue(), viteCommonjs()],
  test: {
    environment: 'jsdom'
  },
});