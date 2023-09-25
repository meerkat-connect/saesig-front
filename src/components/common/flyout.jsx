import React, { useState, useRef, useEffect } from 'react';

const FlyoutMenu = ({ isPost }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isReportOpen, setIsReportOpen] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
        setIsReportOpen(false);
        setIsShareOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  const handleMenuClick = () => {
    if (isReportOpen || isShareOpen === true) {
      setIsReportOpen(false);
      setIsShareOpen(false);
    }
    setIsOpen(!isOpen);
  };

  const handleReportClick = () => {
    setIsOpen(!isOpen);
    setIsReportOpen(!isReportOpen);
  };

  const handleShareClick = () => {
    setIsOpen(!isOpen);
    setIsShareOpen(!isShareOpen);
  };

  const handleCloseClick = () => {
    setIsReportOpen(false);
    setIsShareOpen(false);
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
          <defs></defs>
        </svg>
      </button>
      {isOpen && (
        <div className={`${isPost && 'ss-flyout__menu --post'} ss-flyout__menu`} onClick={handleMenuClick}>
          <button className="ss-flyout__item" onClick={handleShareClick}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12.9166 7.04047L10.6755 4.79936V12.135C10.6755 12.1532 10.6746 12.1712 10.6728 12.1889C10.6458 12.4546 10.4214 12.662 10.1485 12.662C9.85745 12.662 9.62149 12.4261 9.62149 12.135V4.79937L7.38032 7.04052C7.17451 7.24633 6.84081 7.24633 6.635 7.04052C6.42918 6.8347 6.42918 6.50101 6.635 6.2952L9.7758 3.15436C9.87467 3.05553 10.0087 3 10.1485 3C10.2883 3 10.4223 3.05553 10.5211 3.15436L13.6619 6.29515C13.8677 6.50097 13.8677 6.83465 13.6619 7.04047C13.4561 7.24628 13.1224 7.24628 12.9166 7.04047Z"
                fill="currentColor"
              />
              <path
                d="M4.52702 11.2568C4.81808 11.2568 5.05404 11.4928 5.05404 11.7838V14.7703C5.05404 14.8673 5.13269 14.946 5.22971 14.946H15.0674C15.1644 14.946 15.2431 14.8673 15.2431 14.7703V11.7838C15.2431 11.4928 15.4791 11.2568 15.7701 11.2568C16.0612 11.2568 16.2971 11.4928 16.2971 11.7838V14.7703C16.2971 15.4494 15.7466 16 15.0674 16H5.22971C4.55056 16 4 15.4494 4 14.7703V11.7838C4 11.4928 4.23595 11.2568 4.52702 11.2568Z"
                fill="currentColor"
              />
            </svg>

            <span className="ml-4">공유하기</span>
          </button>
          <button className="ss-flyout__item" onClick={handleReportClick}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M14.1857 8.09287C14.0886 7.9892 14.0886 7.82721 14.1857 7.72354L16.784 4.89201C17.0886 4.55508 17.1663 4.08855 16.9849 3.67387C16.8035 3.25918 16.4082 3 15.9546 3H5.58747C4.71274 3 4 3.71274 4 4.58747V17.4298C4 17.7408 4.2527 18 4.57019 18C4.88769 18 5.14039 17.7473 5.14039 17.4298V12.8164H15.9546C16.4082 12.8164 16.8035 12.5572 16.9849 12.1425C17.1663 11.7279 17.0886 11.2613 16.784 10.9244L14.1857 8.09287ZM5.13391 6.80994V4.59395C5.13391 4.34125 5.33477 4.14039 5.58747 4.14039L15.9482 4.12743L13.3499 6.95896C12.851 7.50324 12.851 8.31965 13.3499 8.86393L15.9482 11.6825H5.13391V6.80994Z"
                fill="currentColor"
              />
            </svg>

            <span className="ml-4">신고하기</span>
          </button>
          {isPost && (
            <>
              <button className="ss-flyout__item">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M4.37821 15.7492H5.47115L13 8.22032L11.9071 7.12736L4.37821 14.6563V15.7492ZM15.8189 7.31648L12.8189 4.30051L13.7677 3.3518C14.0347 3.08471 14.3504 2.95117 14.7148 2.95117C15.0791 2.95117 15.3948 3.08471 15.6618 3.3518L16.7756 4.46557C17.0288 4.71876 17.1527 5.03713 17.1474 5.42067C17.1421 5.80421 17.0128 6.12258 16.7596 6.37578L15.8189 7.31648ZM3.83978 17.0825C3.62504 17.0825 3.43888 17.0037 3.2813 16.8461C3.12371 16.6885 3.04492 16.5024 3.04492 16.2876V14.3967C3.04492 14.2962 3.06308 14.2006 3.0994 14.1098C3.13572 14.019 3.19288 13.9346 3.27088 13.8566L11.8943 5.23317L14.8942 8.23313L6.27082 16.8565C6.19283 16.9345 6.10844 16.9917 6.01763 17.028C5.92681 17.0643 5.83119 17.0825 5.73075 17.0825H3.83978Z"
                    fill="currentColor"
                  />
                </svg>
                <span className="ml-4">수정하기</span>
              </button>
              <button className="ss-flyout__item">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none">
                  <path
                    fill="currentColor"
                    d="M6.208 10.542h7.584V9.458H6.208v1.084Zm3.8 7.041a7.407 7.407 0 0 1-2.948-.592 7.645 7.645 0 0 1-2.42-1.63 7.645 7.645 0 0 1-1.63-2.418 7.408 7.408 0 0 1-.593-2.951c0-1.047.197-2.028.592-2.943a7.644 7.644 0 0 1 4.048-4.04 7.408 7.408 0 0 1 2.951-.592c1.047 0 2.028.197 2.943.592a7.66 7.66 0 0 1 4.04 4.043 7.36 7.36 0 0 1 .592 2.94 7.409 7.409 0 0 1-.592 2.948 7.645 7.645 0 0 1-4.043 4.051 7.36 7.36 0 0 1-2.94.592ZM10 16.5c1.806 0 3.34-.632 4.604-1.896C15.868 13.34 16.5 11.806 16.5 10s-.632-3.34-1.896-4.604C13.34 4.132 11.806 3.5 10 3.5s-3.34.632-4.604 1.896C4.132 6.66 3.5 8.194 3.5 10s.632 3.34 1.896 4.604C6.66 15.868 8.194 16.5 10 16.5Z"
                  />
                </svg>
                <span className="ml-4">삭제하기</span>
              </button>
            </>
          )}
        </div>
      )}
      {isReportOpen && isPost && (
        <div className="ss-flyout__menu --post">
          <div className="menu__content">
            <section className="menu__title">
              <h1>신고하기</h1>
              <button onClick={handleCloseClick}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M18.3 5.71C17.91 5.32 17.28 5.32 16.89 5.71L12 10.59L7.10997 5.7C6.71997 5.31 6.08997 5.31 5.69997 5.7C5.30997 6.09 5.30997 6.72 5.69997 7.11L10.59 12L5.69997 16.89C5.30997 17.28 5.30997 17.91 5.69997 18.3C6.08997 18.69 6.71997 18.69 7.10997 18.3L12 13.41L16.89 18.3C17.28 18.69 17.91 18.69 18.3 18.3C18.69 17.91 18.69 17.28 18.3 16.89L13.41 12L18.3 7.11C18.68 6.73 18.68 6.09 18.3 5.71Z"
                    fill="#D9D9D9"
                  />
                </svg>
              </button>
            </section>
            <section>
              <input id="reportOption1" className="ss-input" type="checkbox" />
              <label htmlFor="reportOption1" className="mb-10">
                광고성 게시글 같아요
              </label>
              <input id="reportOption2" className="ss-input" type="checkbox" />
              <label htmlFor="reportOption2" className="mb-10">
                불쾌한 내용이 포함되어 있어요
              </label>
              <input id="reportOption3" className="ss-input" type="checkbox" />
              <label htmlFor="reportOption3" className="mb-10">
                불법 분양업자가 아닌지 의심돼요
              </label>
              <input id="reportOption4" className="ss-input" type="checkbox" />
              <label htmlFor="reportOption4" className="mb-10">
                무리한 요구를 해요
              </label>
              <input id="reportOption5" className="ss-input" type="checkbox" />
              <label htmlFor="reportOption5" className="mb-20">
                기타
              </label>
              <div className="ss-textarea mb-30">
                <textarea cols="30" rows="5" placeholder="내용을 입력해주세요" required></textarea>
                <div className="pt-10">0/1,000자</div>
              </div>
              <button className="ss-button --lg --full">새식일기 팀에게 보내기</button>
            </section>
          </div>
        </div>
      )}

      {isShareOpen && isPost && (
        <div className="ss-flyout__menu --post">
          <div className="menu__content">
            <section className="menu__title">
              <h1>공유하기</h1>
              <button onClick={handleCloseClick}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M18.3 5.71C17.91 5.32 17.28 5.32 16.89 5.71L12 10.59L7.10997 5.7C6.71997 5.31 6.08997 5.31 5.69997 5.7C5.30997 6.09 5.30997 6.72 5.69997 7.11L10.59 12L5.69997 16.89C5.30997 17.28 5.30997 17.91 5.69997 18.3C6.08997 18.69 6.71997 18.69 7.10997 18.3L12 13.41L16.89 18.3C17.28 18.69 17.91 18.69 18.3 18.3C18.69 17.91 18.69 17.28 18.3 16.89L13.41 12L18.3 7.11C18.68 6.73 18.68 6.09 18.3 5.71Z"
                    fill="#D9D9D9"
                  />
                </svg>
              </button>
            </section>
            <section>
              <div>
                <h3 className="mb-20">소셜 공유</h3>
                <div className="menu__social-buttons mb-40">
                  <button>
                    <img src="/src/assets/icons/4848/social_kakao.svg" alt="" />
                    <span>Kakao</span>
                  </button>
                  <button>
                    <img src="/src/assets/icons/4848/social_messenger.png" alt="" />
                    <span>Messenger</span>
                  </button>
                  <button>
                    <img src="/src/assets/icons/4848/social_facebook.svg" alt="" />
                    <span>Facebook</span>
                  </button>
                  <button>
                    <img src="/src/assets/icons/4848/social_twitter.svg" alt="" />
                    <span>Twitter</span>
                  </button>
                  <button>
                    <img src="/src/assets/icons/4848/social_email.svg" alt="" />
                    <span>E-mail</span>
                  </button>
                </div>
              </div>
              <div>
                <h3 className="mb-20">링크공유</h3>
                <div className="ss-button-input">
                  <input className="ss-input" type="text" placeholder="https://sasig.com/..." readOnly />
                  <div>
                    <button className="ss-button --sm">복사</button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      )}
    </div>
  );
};

export default FlyoutMenu;
