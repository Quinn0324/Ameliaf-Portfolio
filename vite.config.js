import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base is injected by the GitHub Pages workflow (VITE_BASE=/<repo-name>/).
// Locally it defaults to '/', so `npm run dev` / `npm run build` work unchanged.
// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.VITE_BASE || '/',
  plugins: [react()],
})
