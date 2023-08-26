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
      active: 'src/assets/icons/2424/home_solid.svg',
      inactive: 'src/assets/icons/2424/home_outline.svg',
    },
    {
      to: '/family',
      text: '새로운식구',
      active: 'src/assets/icons/2424/family_solid.svg',
      inactive: 'src/assets/icons/2424/family_outline.svg',
    },
    {
      to: '/diary',
      text: '일상기록',
      active: 'src/assets/icons/2424/diary_solid.svg',
      inactive: 'src/assets/icons/2424/diary_outline.svg',
    },
    {
      to: '/chats',
      text: '채팅',
      active: 'src/assets/icons/2424/chat_solid.svg',
      inactive: 'src/assets/icons/2424/chat_outline.svg',
    },
    {
      to: '/mypage',
      text: '마이페이지',
      active: 'src/assets/icons/2424/mypage_solid.svg',
      inactive: 'src/assets/icons/2424/mypage_outline.svg',
    },
  ];

  return (
    <footer className="navbar">
      <nav className="navbar__wrap">
        {navMenus.map((menu) => (
          <NavLink key={menu.text} to={menu.to} className="navbar__menu">
            <div>
              {location.pathname === menu.to ? (
                <img src={menu.active} alt={menu.text} />
              ) : (
                <img src={menu.inactive} alt={menu.text} />
              )}
              <span className={classNames(location.pathname === menu.to ? 'navbar__text--active' : '', 'navbar__text')}>
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
