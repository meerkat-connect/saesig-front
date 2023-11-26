import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ReactGA from 'react-ga';

// pages
import Layout from './components/layout/layout';
import Home from './pages/home';
import Login from './pages/accounts/login';
import SignUp from './pages/accounts/join';
import NotFound from './pages/error/404';
import Family from './pages/family';
import Register from './pages/family/register';
import FamilyPost from './pages/family/post';
import FindId from './pages/accounts/find-id';
import FindPassword from './pages/accounts/find-password';
import SplashScreen from './pages/home/splash';
import Diary from './pages/diary';
import Write from './pages/diary/write';

// Publish Temporary
import Components from './pages/temp/components';
function App() {
  React.useEffect(() => {
    ReactGA.initialize(import.meta.env.VITE_APP_GA_TRACKING_ID, { debug: true })
    ReactGA.set({ page: location.pathname })
    ReactGA.pageview(window.location.pathname) // Record a pageview for the given page
  }, [])

  return (
    <React.Fragment>
      <SplashScreen />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="components" element={<Components />} />
          <Route path="login" element={<Login />} />
          <Route path="join" element={<SignUp />} />
          <Route path="find-id" element={<FindId />} />
          <Route path="find-password" element={<FindPassword />} />
          <Route path="family" element={<Family />} />
          <Route path="family/:id" element={<FamilyPost />} />
          <Route path="register" element={<Register />} />
          <Route path="diary" element={<Diary />} />
          <Route path="write" element={<Write />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </React.Fragment>
  );
}

export default App;
