import { useLocation, useNavigate } from 'react-router-dom';
import getPageTitle from '../../helpers/getPageTitle';

// eslint-disable-next-line react/prop-types
const Topbar = ({ isLogo, isPrevButton = true }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const goToPrevPage = () => navigate(-1);

  const pageTitle = getPageTitle(location.pathname);

  return (
    <header className="topbar">
      <div className="topbar__wrap">
        <div className="topbar__section-left">
          {isLogo && <img src="src/assets/pictograms/logo_sm.svg" alt="새식일기" />}
          {isPrevButton && (
            <button onClick={goToPrevPage}>
              <img src="src/assets/icons/2424/chevron_lg_left.svg" alt="뒤로가기" />
            </button>
          )}
        </div>
        <div className="topbar__section-center">{pageTitle}</div>
        <div className="topbar__section-right"></div>
      </div>
    </header>
  );
};

export default Topbar;
