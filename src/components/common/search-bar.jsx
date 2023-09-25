import React, { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { AgeInput, Dropdown } from './inputs';

const SearchBar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isToggle, setIsToggle] = useState(false);
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

  const handleWindowClick = (e) => {
    if (!e.target.closest('.flyout__container')) {
      setIsOpen(false);
    }
  };

  const handleContainerClick = (e) => {
    e.stopPropagation();
  };

  const handleToggleClick = (e) => {
    setIsToggle(!isToggle);
  };

  const options = {
    type: ['전체', '강아지', '고양이'],
    breed: [
      '전체',
      '골든 리트리버',
      '치와와',
      '불독',
      '시베리안 허스키',
      '보더 콜리',
      '빠삐용',
      '요크셔 테리어',
      '닥스훈트',
      '푸들',
      '불마스티프',
      '로트와일러',
      '프렌치 불도그',
      '잭 러셀 테리어',
      '세인트 버나드',
      '비글',
    ],
    gender: ['전체', '여아', '남아'],
    fee: ['전체', '유료', '무료'],
    neuter: ['전체', '중성화', '안 함'],
    region: ['전체', '서울시', '경기도'],
    city: ['전체', '마포구', '강남구'],
  };

  return (
    <div className="ss-search-bar" ref={dropdownRef}>
      <button onClick={handleMenuClick}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M15.2 15.2L20 20M16.8 10.4C16.8 13.9346 13.9346 16.8 10.4 16.8C6.86538 16.8 4 13.9346 4 10.4C4 6.86538 6.86538 4 10.4 4C13.9346 4 16.8 6.86538 16.8 10.4Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {isOpen && location.pathname === '/family' && (
        <div className="ss-search-bar__flyout" onClick={handleWindowClick}>
          <div className="flyout__window" onClick={handleContainerClick}>
            <div className="flyout__container">
              <div className="ss-search-input --full">
                <input type="text" placeholder="키워드를 입력해주세요" />
                <button>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M15.2 15.2L20 20M16.8 10.4C16.8 13.9346 13.9346 16.8 10.4 16.8C6.86538 16.8 4 13.9346 4 10.4C4 6.86538 6.86538 4 10.4 4C13.9346 4 16.8 6.86538 16.8 10.4Z"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <section className="flyout__group">
                <div>
                  <h3>
                    <span>최근</span>
                    <span>검색어</span>
                  </h3>
                  <div>
                    <button className="ss-text-button --primary">
                      모두 지우기
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M10.6749 3.33076C10.4474 3.10326 10.0799 3.10326 9.85242 3.33076L6.99992 6.17742L4.14742 3.32492C3.91992 3.09742 3.55242 3.09742 3.32492 3.32492C3.09742 3.55242 3.09742 3.91992 3.32492 4.14742L6.17742 6.99992L3.32492 9.85242C3.09742 10.0799 3.09742 10.4474 3.32492 10.6749C3.55242 10.9024 3.91992 10.9024 4.14742 10.6749L6.99992 7.82242L9.85242 10.6749C10.0799 10.9024 10.4474 10.9024 10.6749 10.6749C10.9024 10.4474 10.9024 10.0799 10.6749 9.85242L7.82242 6.99992L10.6749 4.14742C10.8966 3.92576 10.8966 3.55242 10.6749 3.33076Z"
                          fill="currentColor"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div>
                  <label className="ss-search-tag">
                    <input type="checkbox" />
                    <div>
                      <span>강아지</span>
                      <button>
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M10.6749 3.33076C10.4474 3.10326 10.0799 3.10326 9.85242 3.33076L6.99992 6.17742L4.14742 3.32492C3.91992 3.09742 3.55242 3.09742 3.32492 3.32492C3.09742 3.55242 3.09742 3.91992 3.32492 4.14742L6.17742 6.99992L3.32492 9.85242C3.09742 10.0799 3.09742 10.4474 3.32492 10.6749C3.55242 10.9024 3.91992 10.9024 4.14742 10.6749L6.99992 7.82242L9.85242 10.6749C10.0799 10.9024 10.4474 10.9024 10.6749 10.6749C10.9024 10.4474 10.9024 10.0799 10.6749 9.85242L7.82242 6.99992L10.6749 4.14742C10.8966 3.92576 10.8966 3.55242 10.6749 3.33076Z"
                            fill="currentColor"
                          />
                        </svg>
                      </button>
                    </div>
                  </label>
                </div>
              </section>
              <section className="flyout__group">
                <div>
                  <h3>
                    <span>새식일기</span>
                    <span>추천 검색어</span>
                  </h3>
                </div>
                <div>
                  <label className="ss-search-tag">
                    <input type="checkbox" />
                    <div>
                      <span>강아지</span>
                    </div>
                  </label>
                  <label className="ss-search-tag">
                    <input type="checkbox" />
                    <div>
                      <span>고양이</span>
                    </div>
                  </label>
                  <label className="ss-search-tag">
                    <input type="checkbox" />
                    <div>
                      <span>믹스견</span>
                    </div>
                  </label>
                </div>
              </section>
              <section className="flyout__group">
                <div>
                  <h3>
                    <span>태그</span>
                    <span>검색</span>
                    <button className={`${isToggle ? '--active' : ''}`} onClick={handleToggleClick}>
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="10" cy="9.99935" r="9.16667" transform="rotate(-180 10 9.99935)" fill="#171A19" />
                        <path
                          d="M13.5462 8.51906C13.2994 8.27229 12.9008 8.27229 12.654 8.51906L10.199 10.9741L7.74389 8.51906C7.49711 8.27229 7.09848 8.27229 6.85171 8.51906C6.60493 8.76584 6.60493 9.16447 6.85171 9.41124L9.75604 12.3156C10.0028 12.5623 10.4014 12.5623 10.6482 12.3156L13.5525 9.41124C13.793 9.1708 13.793 8.76584 13.5462 8.51906Z"
                          fill="white"
                        />
                      </svg>
                    </button>
                  </h3>
                </div>
                {isToggle && (
                  <div>
                    <div className="ss-form">
                      <div className="ss-grid cols-repeat-2 col-gap-10 row-gap-30">
                        <div>
                          <label className="ss-label">반려동물</label>
                          <Dropdown options={options.type} placeholder="전체" />
                        </div>
                        <div>
                          <label className="ss-label">품종</label>
                          <Dropdown options={options.breed} placeholder="전체" />
                        </div>
                        <div>
                          <label className="ss-label">성별</label>
                          <Dropdown options={options.gender} placeholder="전체" />
                        </div>
                        <div>
                          <label className="ss-label">나이</label>
                          <AgeInput placeholder="선택" />
                        </div>
                        <div>
                          <label className="ss-label">책임비</label>
                          <Dropdown options={options.fee} placeholder="전체" />
                        </div>
                        <div>
                          <label className="ss-label">중성화 여부</label>
                          <Dropdown options={options.neuter} placeholder="전체" />
                        </div>
                        <div>
                          <label className="ss-label">분양 희망 지역</label>
                          <Dropdown options={options.region} placeholder="시, 도" />
                        </div>
                        <div>
                          <label className="ss-label">&nbsp;</label>
                          <Dropdown options={options.city} placeholder="시, 군, 구" />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </section>
              <button className="ss-button --md --full w-200 mt-40">검색</button>
            </div>
          </div>
        </div>
      )}

      {isOpen && location.pathname === '/diary' && (
        <div className="ss-search-bar__flyout" onClick={handleWindowClick}>
          <div className="flyout__window" onClick={handleContainerClick}>
            <div className="flyout__container">
              <div className="ss-search-input --full">
                <input type="text" placeholder="키워드를 입력해주세요" />
                <button>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M15.2 15.2L20 20M16.8 10.4C16.8 13.9346 13.9346 16.8 10.4 16.8C6.86538 16.8 4 13.9346 4 10.4C4 6.86538 6.86538 4 10.4 4C13.9346 4 16.8 6.86538 16.8 10.4Z"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <section className="flyout__group">
                <div>
                  <h3>
                    <span>최근</span>
                    <span>검색어</span>
                  </h3>
                  <div>
                    <button className="ss-text-button --primary">
                      모두 지우기
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M10.6749 3.33076C10.4474 3.10326 10.0799 3.10326 9.85242 3.33076L6.99992 6.17742L4.14742 3.32492C3.91992 3.09742 3.55242 3.09742 3.32492 3.32492C3.09742 3.55242 3.09742 3.91992 3.32492 4.14742L6.17742 6.99992L3.32492 9.85242C3.09742 10.0799 3.09742 10.4474 3.32492 10.6749C3.55242 10.9024 3.91992 10.9024 4.14742 10.6749L6.99992 7.82242L9.85242 10.6749C10.0799 10.9024 10.4474 10.9024 10.6749 10.6749C10.9024 10.4474 10.9024 10.0799 10.6749 9.85242L7.82242 6.99992L10.6749 4.14742C10.8966 3.92576 10.8966 3.55242 10.6749 3.33076Z"
                          fill="currentColor"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div>
                  <label className="ss-search-tag">
                    <input type="checkbox" />
                    <div>
                      <span>강아지</span>
                      <button>
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M10.6749 3.33076C10.4474 3.10326 10.0799 3.10326 9.85242 3.33076L6.99992 6.17742L4.14742 3.32492C3.91992 3.09742 3.55242 3.09742 3.32492 3.32492C3.09742 3.55242 3.09742 3.91992 3.32492 4.14742L6.17742 6.99992L3.32492 9.85242C3.09742 10.0799 3.09742 10.4474 3.32492 10.6749C3.55242 10.9024 3.91992 10.9024 4.14742 10.6749L6.99992 7.82242L9.85242 10.6749C10.0799 10.9024 10.4474 10.9024 10.6749 10.6749C10.9024 10.4474 10.9024 10.0799 10.6749 9.85242L7.82242 6.99992L10.6749 4.14742C10.8966 3.92576 10.8966 3.55242 10.6749 3.33076Z"
                            fill="currentColor"
                          />
                        </svg>
                      </button>
                    </div>
                  </label>
                </div>
              </section>
              <section className="flyout__group">
                <div>
                  <h3>
                    <span>새식일기</span>
                    <span>추천 검색어</span>
                  </h3>
                </div>
                <div>
                  <label className="ss-search-tag">
                    <input type="checkbox" />
                    <div>
                      <span>강아지</span>
                    </div>
                  </label>
                  <label className="ss-search-tag">
                    <input type="checkbox" />
                    <div>
                      <span>고양이</span>
                    </div>
                  </label>
                  <label className="ss-search-tag">
                    <input type="checkbox" />
                    <div>
                      <span>믹스견</span>
                    </div>
                  </label>
                </div>
              </section>
              <section className="flyout__group">
                <div>
                  <h3>
                    <span>태그</span>
                    <span>검색</span>
                    <button className={`${isToggle ? '--active' : ''}`} onClick={handleToggleClick}>
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="10" cy="9.99935" r="9.16667" transform="rotate(-180 10 9.99935)" fill="#171A19" />
                        <path
                          d="M13.5462 8.51906C13.2994 8.27229 12.9008 8.27229 12.654 8.51906L10.199 10.9741L7.74389 8.51906C7.49711 8.27229 7.09848 8.27229 6.85171 8.51906C6.60493 8.76584 6.60493 9.16447 6.85171 9.41124L9.75604 12.3156C10.0028 12.5623 10.4014 12.5623 10.6482 12.3156L13.5525 9.41124C13.793 9.1708 13.793 8.76584 13.5462 8.51906Z"
                          fill="white"
                        />
                      </svg>
                    </button>
                  </h3>
                </div>
                {isToggle && (
                  <div>
                    <label className="ss-search-tag">
                      <input type="checkbox" />
                      <div>
                        <span>💭 오늘의 일기</span>
                      </div>
                    </label>
                    <label className="ss-search-tag">
                      <input type="checkbox" />
                      <div>
                        <span>🕶 친구해요</span>
                      </div>
                    </label>
                    <label className="ss-search-tag">
                      <input type="checkbox" />
                      <div>
                        <span>👍 추천해요</span>
                      </div>
                    </label>
                    <label className="ss-search-tag">
                      <input type="checkbox" />
                      <div>
                        <span>🧡 함께해요</span>
                      </div>
                    </label>
                    <label className="ss-search-tag">
                      <input type="checkbox" />
                      <div>
                        <span>😆 재밌어요</span>
                      </div>
                    </label>
                  </div>
                )}
              </section>
              <button className="ss-button --md --full w-200 mt-40">검색</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
