import React from 'react';
import { Route, Routes, Outlet } from 'react-router-dom';
import TopBar from '@/components/LayoutBar/TopBar';
import NavBar from '@/components/LayoutBar/NavBar';
import Home from '@/pages/Home';
import Components from '@/pages/Components';
import Login from '@/pages/Membership/Login';
import AdoptionRecord from '@/pages/Mypage/AdoptionRecord';
import SignUp from '@/pages/Membership/SignUp';

const Layout = () => {
  return (
    <>
      <TopBar />
      <main>
        <Outlet />
      </main>
      <NavBar />
    </>
  );
};

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/components" element={<Components />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/adoption_record" element={<AdoptionRecord />} />
        </Route>
      </Routes>
    </React.Fragment>
  );
}

export default App;
