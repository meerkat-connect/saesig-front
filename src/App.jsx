import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ReactGA from 'react-ga';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

// Publish Temporary
import Components from './pages/temp/components';

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
import DiaryPost from './pages/diary/post';
import Write from './pages/diary/write';
import PublishList from './pages/home/publishList';
import Chats from './pages/chats';
import Settings from './pages/settings';
import Deactivate from './pages/settings/deactivate';
import Landing from './pages/landing/landing.jsx';

import { WebSocketProvider } from './WebSocketContext.jsx';

function App() {
  React.useEffect(() => {
    ReactGA.initialize(import.meta.env.VITE_APP_GA_TRACKING_ID, { debug: false });
    ReactGA.set({ page: location.pathname });
    ReactGA.pageview(window.location.pathname); // Record a pageview for the given page
  }, []);

  return (
    <React.Fragment>
      <SplashScreen />
      <WebSocketProvider>
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
            <Route path="diary/:id" element={<DiaryPost />} />
            <Route path="write" element={<Write />} />
            <Route path="chats" element={<Chats />} />
            <Route path="settings" element={<Settings />} />
            <Route path="settings/deactivate" element={<Deactivate />} />
            <Route path="publish" element={<PublishList />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route path="/landing" element={<Landing />} />
        </Routes>
      </WebSocketProvider>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </React.Fragment>
  );
}

export default App;
