import React, { useState, useRef, useEffect } from 'react';

const FlyoutMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="ss-flyout" ref={dropdownRef}>
      <button onClick={handleMenuClick} className={`ss-flyout__button ${isOpen ? '--active' : ''}`}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_704_2256)">
            <path
              d="M6 10C4.9 10 4 10.9 4 12C4 13.1 4.9 14 6 14C7.1 14 8 13.1 8 12C8 10.9 7.1 10 6 10ZM18 10C16.9 10 16 10.9 16 12C16 13.1 16.9 14 18 14C19.1 14 20 13.1 20 12C20 10.9 19.1 10 18 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z"
              fill="currentColor"
            />
          </g>
          <defs>
            <clipPath id="clip0_704_2256">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </button>
      {isOpen && (
        <div className="ss-flyout__menu" onClick={handleMenuClick}>
          <button className="ss-flyout__item">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M15.1514 9.59998L12.5999 7.04853V15.4C12.5999 15.4207 12.5989 15.4412 12.5968 15.4613C12.5661 15.7639 12.3106 16 11.9999 16C11.6686 16 11.3999 15.7314 11.3999 15.4V7.04853L8.84841 9.60003C8.6141 9.83434 8.23419 9.83434 7.99988 9.60003C7.76556 9.36571 7.76556 8.98581 7.99988 8.7515L11.5756 5.17574C11.6882 5.06322 11.8408 5 11.9999 5C12.159 5 12.3116 5.06322 12.4242 5.17574L15.9998 8.75145C16.2342 8.98576 16.2342 9.36566 15.9998 9.59998C15.7655 9.83429 15.3857 9.83429 15.1514 9.59998Z"
                fill="currentColor"
              />
              <path
                d="M5.6 14.4002C5.93137 14.4002 6.2 14.6688 6.2 15.0002V18.4002C6.2 18.5107 6.28954 18.6002 6.4 18.6002H17.6C17.7104 18.6002 17.8 18.5107 17.8 18.4002V15.0002C17.8 14.6688 18.0686 14.4002 18.4 14.4002C18.7314 14.4002 19 14.6688 19 15.0002V18.4002C19 19.1734 18.3732 19.8002 17.6 19.8002H6.4C5.6268 19.8002 5 19.1734 5 18.4002V15.0002C5 14.6688 5.26862 14.4002 5.6 14.4002Z"
                fill="currentColor"
              />
            </svg>
            <span>공유하기</span>
          </button>
          <button className="ss-flyout__item">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_1015_15152)">
                <path
                  d="M16.1218 10.0609C16.0253 9.9579 16.0253 9.79693 16.1218 9.69391L18.7038 6.88014C19.0064 6.54532 19.0837 6.08172 18.9034 5.66964C18.7231 5.25755 18.3304 5 17.8796 5H7.57751C6.70827 5 6 5.70827 6 6.57751V19.3393C6 19.6483 6.25111 19.9059 6.56662 19.9059C6.88212 19.9059 7.13323 19.6548 7.13323 19.3393V14.7548H17.8796C18.3304 14.7548 18.7231 14.4973 18.9034 14.0852C19.0837 13.6731 19.0064 13.2095 18.7038 12.8747L16.1218 10.0609ZM7.1268 8.78603V6.58395C7.1268 6.33284 7.3264 6.13323 7.57751 6.13323L17.8732 6.12036L15.2912 8.93413C14.7954 9.47499 14.7954 10.2863 15.2912 10.8271L17.8732 13.628H7.1268V8.78603Z"
                  fill="currentColor"
                />
              </g>
              <defs>
                <clipPath id="clip0_1015_15152">
                  <rect width="13" height="14.8995" fill="white" transform="translate(6 5)" />
                </clipPath>
              </defs>
            </svg>
            <span>신고하기</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default FlyoutMenu;
