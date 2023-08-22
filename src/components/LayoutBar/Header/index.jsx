import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import getPageTitle from '@/helpers/getPageTitle';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const goToPrevPage = () => navigate(-1);

  const pageTitle = getPageTitle(location.pathname);

  //TODO: pathname에 따른 topbar 유형별 구성

  return (
    <header className="topbar">
      <div className="topbar__content">
        <div>
          <button className="topbar__content-back-button" onClick={goToPrevPage} />
        </div>
        <div className="topbar__content-title">{pageTitle}</div>
        <div />
      </div>
    </header>
  );
};

export default Header;
