import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    base: '/'
  },
  resolve: {
    alias: [
      { find: /@\//, replacement: '/src/' },
      { find: /\.gltf$/, replacement: '.gltf' },
    ]
  }
})
