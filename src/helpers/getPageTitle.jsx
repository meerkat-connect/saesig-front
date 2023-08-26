/**
 * 페이지명 설정 함수(임시)
 * @param {*} pathname
 * @returns
 */
const getPageTitle = (pathname) => {
  let title = 'Default Title';

  switch (pathname) {
    case '/':
      title = '홈';
      break;
    case '/login':
      title = '로그인';
      break;
    case '/signup':
      title = '회원가입';
      break;
    case '/about':
      title = 'About';
      break;
    case '/components':
      title = '퍼블리시 컴포넌트';
      break;
    case '/family/register':
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
