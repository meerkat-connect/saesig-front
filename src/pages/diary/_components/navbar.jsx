import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

function classNames(...classNames) {
  return classNames.join(' ');
}

const Navbar = () => {
  const location = useLocation();
  const navMenus = [
    {
      to: '/',
      text: '홈',
      activeUrl: ['/', '/login', '/join'],
      active: '/src/assets/icons/2424/home_solid.svg',
      inactive: '/src/assets/icons/2424/home_outline.svg',
    },
    {
      to: '/family',
      text: '새로운식구',
      activeUrl: ['/family', '/register'],
      active: '/src/assets/icons/2424/family_solid.svg',
      inactive: '/src/assets/icons/2424/family_outline.svg',
    },
    {
      to: '/diary',
      text: '일상기록',
      activeUrl: ['/diary', '/write'],
      active: '/src/assets/icons/2424/diary_solid.svg',
      inactive: '/src/assets/icons/2424/diary_outline.svg',
    },
    {
      to: '/chats',
      text: '채팅',
      activeUrl: ['/chats'],
      active: '/src/assets/icons/2424/chat_solid.svg',
      inactive: '/src/assets/icons/2424/chat_outline.svg',
    },
    {
      to: '/mypage',
      text: '마이페이지',
      activeUrl: ['/mypage'],
      active: '/src/assets/icons/2424/mypage_solid.svg',
      inactive: '/src/assets/icons/2424/mypage_outline.svg',
    },
  ];

  const getPathWithoutId = (path) => {
    const segments = path.split('/');
    segments.pop();
    return segments.join('/');
  };

  const PathWithoutId = getPathWithoutId(location.pathname);

  return (
    <footer className="navbar">
      <nav className="navbar__wrap">
        {navMenus.map((menu) => (
          <NavLink key={menu.text} to={menu.to} className="navbar__menu">
            <div>
              {menu.activeUrl.includes(PathWithoutId || location.pathname) ? (
                <img src={menu.active} alt={menu.text} />
              ) : (
                <img src={menu.inactive} alt={menu.text} />
              )}
              <span
                className={classNames(
                  menu.activeUrl.includes(PathWithoutId || location.pathname) ? 'navbar__text--active' : '',
                  'navbar__text'
                )}
              >
                {menu.text}
              </span>
            </div>
          </NavLink>
        ))}
      </nav>
    </footer>
  );
};

export default Navbar;
