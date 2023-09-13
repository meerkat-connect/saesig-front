import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import getPageTitle from '../../helpers/getPageTitle';
import FlyoutMenu from '../common/flyout';

// eslint-disable-next-line react/prop-types
const Topbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const goToPrevPage = () => navigate(-1);

  const prevButtonPaths = ['/login', '/join', '/find-id', '/find-password', '/register'];
  const mainPaths = ['/', '/family'];
  const menuPaths = [''];

  const isMain = mainPaths.includes(location.pathname);
  const isPrevButton = prevButtonPaths.includes(location.pathname);
  const isMenu = menuPaths.includes(location.pathname);
  const isPost =
    (location.pathname.startsWith('/family/') || location.pathname.startsWith('/diary/')) &&
    location.pathname.split('/').length === 3;

  const pageTitle = getPageTitle(location.pathname);

  return (
    <header className="topbar">
      <div className="topbar__wrap">
        <div className="topbar__section-left">
          {isMain && <img src="/src/assets/pictograms/logo_sm.svg" alt="새식일기" />}
          {isPrevButton && (
            <button onClick={goToPrevPage}>
              <img src="/src/assets/icons/2424/chevron_lg_left.svg" alt="뒤로가기" />
            </button>
          )}
          {isPost && (
            <>
              <button onClick={goToPrevPage}>
                <img src="/src/assets/icons/2424/chevron_lg_left.svg" alt="뒤로가기" />
              </button>
              <span>
                {location.pathname.startsWith('/family/') && '식구 찾기'}
                {location.pathname.startsWith('/diary/') && '새식일기'}
              </span>
            </>
          )}
        </div>
        <div className="topbar__section-center">{pageTitle}</div>
        <div className="topbar__section-right">
          {isMain && (
            <div className="topbar__button-group">
              <button>
                <img src="/src/assets/icons/2424/search.svg" alt="" />
              </button>
              <button>
                <img src="/src/assets/icons/2424/alarm_new.svg" alt="" />
              </button>
              <button className="ss-outline-button ml-20">로그아웃</button>
            </div>
          )}

          {(isMenu || isPost) && (
            <div className="topbar__button-group">
              <button>
                <img src="/src/assets/icons/2424/export.svg" alt="" />
              </button>
              <button>
                <img src="/src/assets/icons/2424/like_outline.svg" alt="" />
              </button>
              <FlyoutMenu />
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Topbar;
