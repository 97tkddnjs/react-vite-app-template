import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  esbuild: {
    loader: 'jsx',
    include: [
      'src/**/*.{js,jsx}', // 모든 .js와 .jsx 파일을 포함합니다.
    ],
    exclude: [],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // .js와 .jsx 확장자를 모두 인식하도록 설정
  },
});