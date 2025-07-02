import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});
// Vite Config
// import { defineConfig } from 'vite';
// import reactRefresh from '@vitejs/plugin-react-refresh';
// import dotenv from 'dotenv';

// // Load environment variables from .env
// dotenv.config();

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [reactRefresh()],
// });
