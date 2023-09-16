
// // vite.config.js
// import { defineConfig } from 'vitest/config'
// import { transformWithEsbuild } from 'vite';
// import react from '@vitejs/plugin-react'
// export default defineConfig({
//   plugins: [
//     react(),
//     {
//       name: 'treat-js-files-as-jsx',
//       async transform(code, id) {
//         if (!id.match(/src\/.*\.js$/)) return null
//         return transformWithEsbuild(code, id, {
//           loader: 'jsx',
//           jsx: 'automatic',
//         })
//       },
//     },
//   ],
//   optimizeDeps: {
//     force: true,
//     esbuildOptions: {
//       loader: {
//         '.js': 'jsx',
//       },
//     },
//   },
// })



// vite.config.js
import { defineConfig } from 'vitest/config'

import react from '@vitejs/plugin-react-swc'

export default defineConfig({
    base: '/',
    plugins: [react()],
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: './src/setupTests.ts',
      css: true,
      reporters: ['verbose'],
      coverage: {
        reporter: ['text', 'json', 'html'],
        include: ['src/**/*' , 'src*.js'],
        exclude: [],
      }
    },
  })




// export default defineConfig({
//   plugins: [
//     react(),
//     {
//       name: 'treat-js-files-as-jsx',
//       async transform(code, id) {
//         if (!id.endsWith('.js')) return null
//         return {
//           code,
//           map: null,
//           loader: 'jsx'
//         }
//       },
//     },
//   ],
//   optimizeDeps: {
//     force: true,
//     esbuildOptions: {
//       loader: {
//         '.js': 'jsx',
//       },
//     },
//   },
// })




























// import { defineConfig } from 'vitest/config'
// import react from '@vitejs/plugin-react-swc'

// // https://vitest.dev/config/
// export default defineConfig({
//   plugins: [react()],




  

//   test: {
//     // Globals are set by default, no need to specify "globals: true"
//     environment: 'jsdom',
//     setupFiles: ['./src/setupTests.ts'], // Use an array to specify the setup file
//     css: true,
//     reporters: ['verbose'],
//     coverage: {
//       reporter: ['text', 'json', 'html'],
//       include: ['src/**/*' ,   "src/**/*.js",
//       "node_modules/**/*.js",
      
//       // Add these lines to allow all .js files to contain JSX
//       "src/**/*.js",
//       "node_modules/**/*.js"] ,
//       exclude: [],
//     },
//   },

//   // The following section is for Vite configuration
//   server: {
//     proxy: {
//       "/": {
//         target: "http://localhost:8000/",
//         changeOrigin: true,
//         secure: false,
//         rewrite: (path) => path.replace(/^\//, ""),
//       },
//     },
//   },
  
//   esbuild: {
//     jsxFactory: 'React.createElement', // Modify this to match your JSX pragma
//     jsxFragment: 'React.Fragment', // Modify this to match your JSX pragma
//     jsxInject: `import React from 'react';`, // Import React for JSX
//   },
// })


