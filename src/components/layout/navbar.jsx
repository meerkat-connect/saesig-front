import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import ChatBox from '../common/chats';

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
      activeUrl: ['/mypage', '/settings'],
      active: '/src/assets/icons/2424/mypage_solid.svg',
      inactive: '/src/assets/icons/2424/mypage_outline.svg',
    },
    {
      // ymg - 퍼블리시 메뉴 임시추가
      to: '/publish',
      text: '퍼블목록',
      activeUrl: ['/publish'],
      active: '/src/assets/icons/2424/mypage_solid.svg',
      inactive: '/src/assets/icons/2424/mypage_outline.svg',
    },
  ];

  const isRehome = location.pathname.startsWith('/family/') && location.pathname.split('/').length === 3;
  const isActive = (menu) => {
    const baseRoute = '/' + location.pathname.split('/')[1];
    return menu.activeUrl.includes(location.pathname) || menu.activeUrl.includes(baseRoute);
  };

  // 채팅 토글 상태 관리
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [selectedChat, setSelectedChat] = useState(null);
  const handleButtonClick = () => {
    setIsChatOpen(!isChatOpen);
    setSelectedChat(null);
  };

  return (
    <footer className="navbar">
      <nav className="navbar__wrap">
        {!isRehome &&
          navMenus.map((menu) => (
            <NavLink key={menu.text} to={menu.to} className="navbar__menu">
              <div>
                {isActive(menu) ? (
                  <img src={menu.active} alt={menu.text} />
                ) : (
                  <img src={menu.inactive} alt={menu.text} />
                )}
                <span className={classNames(isActive(menu) ? 'navbar__text--active' : '', 'navbar__text')}>
                  {menu.text}
                </span>
              </div>
            </NavLink>
          ))}
        {isRehome && (
          <div className="navbar__rehome">
            <span>책임비 50,000원</span>
            <button className="ss-button --md ignore-click-outside" onClick={handleButtonClick}>
              채팅하기
            </button>
            <ChatBox
              isChatOpen={isChatOpen}
              selectedChat={selectedChat}
              setIsChatOpen={setIsChatOpen}
              setSelectedChat={setSelectedChat}
            />
          </div>
        )}
      </nav>
    </footer>
  );
};

export default Navbar;
