import React from 'react';
import { Route, Routes, Outlet } from 'react-router-dom';
import Header from './components/LayoutBar/Header';
import MenuBar from './components/LayoutBar/MenuBar';
import Home from './pages/Home';
import Components from './pages/Components';
import Login from './pages/Membership/Login';
import AdoptionRecord from './pages/Mypage/AdoptionRecord';

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <MenuBar />
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
          <Route path="/adoption_record" element={<AdoptionRecord />} />
        </Route>
      </Routes>
    </React.Fragment >
  )
}

export default App
