import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            // '@styles': path.resolve(__dirname, './src/styles'), <-- Example
        },
    },
    plugins: [react()],
});
