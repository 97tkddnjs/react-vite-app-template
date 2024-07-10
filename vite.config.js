import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  optimizeDeps: {
    include: ['react', 'react-dom']
  },

  
  esbuild: {
    loader: 'jsx',
    include: /src\/.*\.js$/, // 정규 표현식을 사용하여 src 폴더 내의 모든 .js 파일을 포함합니다.
    exclude: [],
    jsxFactory: 'jsx',
    jsxFragment: 'Fragment'
  },
})
