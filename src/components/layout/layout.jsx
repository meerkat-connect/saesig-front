import React from 'react';

import { Outlet, useLocation } from 'react-router-dom';
import Topbar from './topbar';
import Navbar from './navbar';

const Layout = () => {
  const location = useLocation();

  const hiddenTopbarPaths = [];
  const hideTopbar = hiddenTopbarPaths.includes(location.pathname);

  const hiddenNavbarPaths = ['/join', '/find-id', '/find-password'];
  const hideNavbar = hiddenNavbarPaths.includes(location.pathname);

  return (
    <>
      {!hideTopbar && <Topbar />}
      <main>
        <Outlet />
      </main>
      {!hideNavbar && <Navbar />}
    </>
  );
};

export default Layout;
