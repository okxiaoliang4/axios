import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    target: 'es2015',
    lib: {
      entry: './lib/axios.js',
      name: 'axios',
      formats: ['es', 'cjs', 'umd', 'iife'],
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: [
        'form-data',
        'stream',
        'proxy-from-env',
        'http',
        'https',
        'url',
        'zlib',
      ],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          'form-data': 'FormData'
        }
      },
    }
  },
})