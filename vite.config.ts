import {defineConfig} from 'vite';
export default defineConfig({optimizeDeps:{exclude:['keenmart-ui-kit'],include:['react','react-dom/client','react/jsx-runtime','react/jsx-dev-runtime']}});
