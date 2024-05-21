import { backendApi } from '@/api/http';

const api_path = `${import.meta.env.VITE_API_BASE_PATH}/diaries`;

// ex. 메일주소 중복 검사
// http://localhost:8080//api/v1/sign/duplicate/email/메일주소
function getDiaries() {
  return backendApi
    .get(api_path)
    .then((res) => res.diarys)
    .catch((err) => console.log(err));
}

export { getDiaries };
