// vite.config.js
import { defineConfig } from 'vite';
// https://vitejs.dev/config/
export default defineConfig({
    base: '',
    build: {
        rollupOptions: {
            output: {
        assetFileNames: (assetInfo) => {
            let extType = assetInfo.name.split('.').at(1);
            if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
                extType = 'img';
            }
            return `assets/${extType}/[name]-[hash][extname]`;
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
},
},
},
});