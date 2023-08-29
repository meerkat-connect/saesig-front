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

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="join" element={<SignUp />} />
          <Route path="family" element={<Family />} />
          <Route path="register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </React.Fragment>
  );
}

export default App;
