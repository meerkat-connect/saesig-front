import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './scss/main.scss';
import ReactGA from "react-ga";

// // Google Analytics
// const gaTrackingId = import.meta.env.VITE_APP_GA_TRACKING_ID;
// console.log(gaTrackingId)
// ReactGA.initialize(gaTrackingId, { debug: true }); // react-ga 초기화 및 debug 사용
// ReactGA.pageview(window.location.pathname); // 추적하려는 page 설정;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
