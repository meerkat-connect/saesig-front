import React from 'react';
import { Routes, Route } from 'react-router-dom';

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

// Publish Temporary
import Components from './pages/temp/components';

function App() {
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
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </React.Fragment>
  );
}

export default App;
