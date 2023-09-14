import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { nodePolyfills } from 'vite-plugin-node-polyfills';

export default defineConfig({
    plugins: [
        sveltekit(),
        // Required for cryptography
        nodePolyfills({
            // Whether to polyfill `node:` protocol imports.
            protocolImports: true
        })
    ],
    optimizeDeps: {
        esbuildOptions: {
            // Node.js global to browser globalThis
            // https://github.com/vitejs/vite/discussions/5912#discussioncomment-3895047
            define: {
                global: 'globalThis'
            }
        }
    }
});
