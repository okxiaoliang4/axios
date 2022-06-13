import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: './lib/axios.js',
      name: 'axios'
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['form-data'],
    }
  },
})