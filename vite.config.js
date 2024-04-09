import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv';

dotenv.config();
console.log('Environment Variables:', import.meta.env);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
