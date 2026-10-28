import {defineConfig} from 'vite';
// Preserve import.meta.url asset paths in the component package during development.
export default defineConfig({optimizeDeps:{exclude:['keenmart-ui-kit']}});
