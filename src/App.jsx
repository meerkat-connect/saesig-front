import React from 'react';
import { Route, Routes, Outlet } from 'react-router-dom';
import TopBar from '@/components/LayoutBar/TopBar';
import NavBar from '@/components/LayoutBar/NavBar';
import Home from './pages/Home';
import Components from './pages/Components';
import Login from './pages/Membership/Login';
import AdoptionRecord from './pages/Mypage/AdoptionRecord';
import SignUp from './pages/Membership/SignUp';
import NewFamily from './pages/NewFamily';
import FamilyRegister from './pages/NewFamily/FamilyRegister';

// 디바이스별 1vh 계산하여 스타일로 추가하는 함수
function setScreenSize() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}
window.addEventListener('resize', () => setScreenSize());

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
          <Route path="/new-family" element={<NewFamily />} />
          <Route path="/family-register" element={<FamilyRegister />} />
          <Route path="/adoption_record" element={<AdoptionRecord />} />
        </Route>
      </Routes>
    </React.Fragment>
  );
}

export default App;
