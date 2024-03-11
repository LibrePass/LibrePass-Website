import ViteYaml from '@modyfi/vite-plugin-yaml';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import { purgeCss } from 'vite-plugin-tailwind-purgecss';

export default defineConfig({
    plugins: [
        sveltekit(),
        purgeCss(),
        // Required for cryptography
        nodePolyfills({
            // Whether to polyfill `node:` protocol imports.
            protocolImports: true
        }),
        // Image Optimizer
        ViteImageOptimizer(),
        // Yaml to JS object
        ViteYaml()
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
