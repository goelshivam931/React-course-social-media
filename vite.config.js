import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/React-course-social-media/", // use your repo name here
  plugins: [react()],
});
