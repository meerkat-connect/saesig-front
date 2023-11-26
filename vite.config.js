import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  // load .env vars
  const env = loadEnv(mode, process.cwd(), '');
  return {
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
        // api 로 시작되는 api 는 아래 주소로 프록시 설정
        '/api': {
          // 프록시 요청을 보낼 서버의 주소
          // .env 파일에 정의되어 있으며 build 시 production 폴더의 변수를 바라봄
          target: env.VITE_APP_API_BASE_URL
        }
      }
    }
  }
});
