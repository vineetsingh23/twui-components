
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({ 
      insertTypesEntry: true, 
      tsConfigFilePath: './tsconfig.json' 
    })
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'MyUILibrary', // PascalCase name for UMD global
      formats: ['es', 'umd'],
      // Output file names will be my-ui-library.es.js and my-ui-library.umd.js
      fileName: (format) => `my-ui-library.${format}.js`, 
    },
    rollupOptions: {
      // Ensure React and ReactDOM are treated as external dependencies
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        globals: {
          'react': 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'jsxRuntime', 
        },
        // Asset file names, e.g., for CSS. Default is fine (style.css)
        // assetFileNames: (assetInfo) => {
        //   if (assetInfo.name === 'style.css') return 'my-ui-library.css';
        //   return assetInfo.name;
        // },
      },
    },
    sourcemap: true,
    emptyOutDir: true, 
  },
});
