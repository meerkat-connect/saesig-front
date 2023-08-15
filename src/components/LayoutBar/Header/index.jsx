import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import getPageTitle from '../../../helpers/getPageTitle'

const Header = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const goToPrevPage = () => navigate(-1);

    const pageTitle = getPageTitle(location.pathname);
    
    return (
        <header className="header">
            <div className="header-container">
                <button className="header-back-button" onClick={goToPrevPage}></button>
                <h1 className="header-title">{pageTitle}</h1>
            </div>
        </header>
    )
}

export default Header