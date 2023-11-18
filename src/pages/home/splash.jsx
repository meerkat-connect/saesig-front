import React, { useState, useEffect } from 'react';

const SplashScreen = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const splashDisplayed = localStorage.getItem('splashDisplayed');
    if (!splashDisplayed) {
      const timer = setTimeout(() => {
        setShowSplash(false);
        localStorage.setItem('splashDisplayed', 'true');
      }, 1500);

      return () => clearTimeout(timer);
    } else {
      setShowSplash(false);
    }
  }, []);

  if (!showSplash) return null;

  return (
    <div className="ss-splash">
      <div className="ss-splash__area">
        <div className="ss-splash__title">
          <svg width="235" height="65" viewBox="0 0 235 65" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M6.12685 8.24491C78.8717 5.47404 151.702 4.85261 224.491 6.382"
              stroke="#171A19"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6.52499 14.9294C34.2482 11.3403 62.3264 11.4918 90.2967 11.6488C136.372 11.9065 182.446 12.1642 228.517 12.4256"
              stroke="#171A19"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2.91176 49.1093C79.5812 52.8766 156.381 54.0515 233.128 52.6342"
              stroke="#171A19"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M1.63954 59.232C16.9702 59.753 32.3113 59.7316 47.6486 59.71C109.071 59.6216 170.489 59.533 231.912 59.4407"
              stroke="#171A19"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M19.9396 7.29199C19.6032 24.7392 19.2668 42.1864 18.9305 59.6336"
              stroke="#171A19"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M67.8066 6.17383L68.3591 57.529"
              stroke="#171A19"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M119.496 5.52734C119.443 22.8119 119.387 40.0963 119.335 57.377"
              stroke="#171A19"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M171.469 5.12707C170.617 22.5605 170.154 40.0091 170.079 57.4614"
              stroke="#171A19"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M215.62 6.00488C216.658 23.6085 217.168 41.2402 217.151 58.8732"
              stroke="#171A19"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <defs>
              <clipPath id="clip0_921_15217">
                <rect
                  width="233.241"
                  height="59.3552"
                  fill="white"
                  transform="translate(1.8024 0.900391) rotate(1.10445)"
                />
              </clipPath>
            </defs>
          </svg>
          <h1>새식일기</h1>
        </div>
        <h2 className="ss-splash__subtitle">새로운 식구와 함께하는 일상 기록</h2>
        <img src="/src/assets/images/splash.png" alt="" />
      </div>
    </div>
  );
};

export default SplashScreen;
