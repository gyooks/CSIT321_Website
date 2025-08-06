import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/CSIT321_Website/',
  plugins: [react()],
})
