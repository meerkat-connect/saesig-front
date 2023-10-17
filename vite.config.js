import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  // 개발 서버 설정
  server: {
    // 프록시 설정
    proxy: {
      // api 로 시작되는 api 는 아래 주소로 프록시 설정해서 쏴라
      '/api': {
        // 프록시 요청을 보낼 서버의 주소
        // TODO 로컬/배포 환경 실행환경 분리
        target: 'http://localhost:8080'
      }
    }
  }
});
