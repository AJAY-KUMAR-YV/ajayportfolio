import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// base './' lets the build work under a GitHub Pages sub-path (username.github.io/repo-name/)
export default defineConfig({
  base: './',
  plugins: [react()]
})
