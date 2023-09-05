/**
 * 페이지명 설정 함수(임시)
 * @param {*} pathname
 * @returns
 */
const getPageTitle = (pathname) => {
  let title;

  switch (pathname) {
    case '/':
      title = '홈';
      break;
    case '/login':
      title = '로그인';
      break;
    case '/join':
      title = '회원가입';
      break;
    case '/find-id':
      title = '아이디 찾기';
      break;
    case '/find-password':
      title = '비밀번호 찾기';
      break;
    case '/about':
      title = 'About';
      break;
    case '/components':
      title = '퍼블리시 컴포넌트';
      break;
    case '/register':
      title = '식구 등록';
      break;
    case '/adoption_record':
      title = '분양 기록';
      break;
    // Add more cases for other routes
    default:
      break;
  }

  return title;
};

export default getPageTitle;
