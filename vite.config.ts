import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    plugins: [react()],

    server: {
      watch: {
        usePolling: true,
      },
      host: true, // needed for the Docker Container port mapping to work
      strictPort: true,
      port: parseInt(process.env.VITE_PORT),
    },
  });
};

// export default defineConfig({
//   plugins: [react()],
//   server: {
//     watch: {
//       usePolling: true,
//     },
//     host: true, // needed for the Docker Container port mapping to work
//     strictPort: true,
//     port: 3000, // you can replace this port with any port
//   },
// });
