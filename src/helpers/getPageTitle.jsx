/**
 * 페이지명 설정 함수(임시)
 * @param {string} pathname
 * @returns {string}
 */

const pageTitles = {
  '/': '홈',
  '/login': '로그인',
  '/join': '회원가입',
  '/find-id': '아이디 찾기',
  '/find-password': '비밀번호 찾기',
  '/about': 'About',
  '/components': '퍼블리시 컴포넌트',
  '/register': '식구 등록',
  '/adoption_record': '분양 기록',
};

const getPageTitle = (pathname) => {
  return pageTitles[pathname] || '';
};

export default getPageTitle;
