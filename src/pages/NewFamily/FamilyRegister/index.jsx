import React from 'react';
import '@/scss/pages/_family-register.scss';

const FamilyRegister = () => {
  const goNextStep = (step) => {
    document.querySelector(`#register${step - 1}`).style.display = 'none';
    document.querySelector(`#register${step}`).style.display = 'flex';
  };

  return (
    <>
      {/* step1 */}
      <div id="register1" className="register">
        <div className="register__text-group mb-85">
          <span className="register__stage">기본정보</span>
          <p className="register__writing">
            어떤 새로운 식구를
            <br />
            소개시켜 주실건가요?
          </p>
        </div>
        <div className="register__container mb-70">
          <div className="register__type-selector mr-60">
            <img src="src/assets/images/saesig_family_saesig_inactive.svg" alt="" />
            <div className="tag">
              <span>강아지</span>
            </div>
          </div>
          <div className="register__type-selector">
            <img src="src/assets/images/saesig_family_dal_active.svg" alt="" />
            <div className="tag --active">
              <span>고양이</span>
            </div>
          </div>
        </div>
        <button className="register__button" onClick={() => goNextStep(2)}>
          다음
        </button>
      </div>
      {/* step2 */}
      <div id="register2" className="register" style={{ display: 'none' }}>
        <div className="register__text-group mb-60">
          <span className="register__stage">기본정보</span>
          <p className="register__writing">
            새로운 식구의 이미지를
            <br />
            등록해주세요
          </p>
        </div>
        <label className="register__upload-large mb-60">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 17.8523C14.7338 17.8523 16.95 15.648 16.95 12.929C16.95 10.2099 14.7338 8.00565 12 8.00565C9.26619 8.00565 7.05 10.2099 7.05 12.929C7.05 15.648 9.26619 17.8523 12 17.8523ZM12 16.2112C13.8226 16.2112 15.3 14.7417 15.3 12.929C15.3 11.1162 13.8226 9.64676 12 9.64676C10.1774 9.64676 8.7 11.1162 8.7 12.929C8.7 14.7417 10.1774 16.2112 12 16.2112Z"
              fill="black"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.45259 3.08237L6.5 4.72345H3.2C1.98497 4.72345 1 5.70311 1 6.91159V20.0404C1 21.2489 1.98497 22.2285 3.2 22.2285H20.8C22.0151 22.2285 23 21.2489 23 20.0404V6.91159C23 5.70311 22.0151 4.72345 20.8 4.72345H17.5L16.5474 3.08237C16.1545 2.40535 15.4282 1.98828 14.6422 1.98828H9.35785C8.57186 1.98828 7.84558 2.40535 7.45259 3.08237ZM6.5 6.36455C7.0895 6.36455 7.63421 6.05176 7.92896 5.54399L8.88154 3.90291C8.97979 3.73365 9.16136 3.62938 9.35785 3.62938H14.6422C14.8387 3.62938 15.0203 3.73365 15.1185 3.90291L16.0711 5.54399C16.3658 6.05176 16.9105 6.36455 17.5 6.36455H20.8C21.1037 6.36455 21.35 6.60947 21.35 6.91159V20.0404C21.35 20.3425 21.1037 20.5874 20.8 20.5874H3.2C2.89625 20.5874 2.65 20.3425 2.65 20.0404V6.91159C2.65 6.60947 2.89625 6.36455 3.2 6.36455H6.5Z"
              fill="black"
            />
          </svg>
          <h4>이미지를 등록해주세요 (최대 6장)</h4>
          <p>
            이미지 파일당 최대 10MB의 용량제한이 있습니다.
            <br />
            가로사이즈가 660pixel을 초과하는 경우 자동으로 660pixel로 조정됩니다.
          </p>
          <input type="file" accept="image/*" />
        </label>
        <button className="register__button --disabled" onClick={() => goNextStep(3)}>
          다음
        </button>
      </div>
      {/* step3 */}
      <div id="register3" className="register" style={{ display: 'none' }}>
        <div className="register__text-group mb-60">
          <span className="register__stage">기본정보</span>
          <p className="register__writing">
            새로운 식구의 이미지를
            <br />
            등록해주세요
          </p>
        </div>
        <div className="register__upload-group mb-60">
          <div className="register__photo">
            <div className="delete-button" />
            <img src="src/assets/images/sample/sample1.webp" alt="" />
            <div className="thumbnail">대표이미지</div>
          </div>
          <div className="register__photo">
            <div className="delete-button" />
            <img src="src/assets/images/sample/sample2.jpg" alt="" />
          </div>
          <label className="register__upload-small">
            <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_2733_3035)">
                <path
                  d="M21.2178 15.7214C20.8581 15.7214 20.5675 16.0119 20.5675 16.3716L20.5629 20.8771L16.0528 20.8771C15.6931 20.8771 15.4026 21.1676 15.4026 21.5273C15.4026 21.887 15.6931 22.1776 16.0528 22.1776L20.5629 22.1776L20.5629 26.6877C20.5629 27.0474 20.8535 27.3379 21.2132 27.3379C21.5729 27.3379 21.8634 27.0474 21.8634 26.6877L21.8634 22.1776H26.3735C26.7332 22.1776 27.0237 21.887 27.0237 21.5273C27.0237 21.1676 26.7332 20.8771 26.3735 20.8771H21.8634L21.8634 16.367C21.8634 16.0165 21.5683 15.7214 21.2178 15.7214Z"
                  fill="#D9D9D9"
                />
              </g>
              <circle cx="21.2132" cy="21.5273" r="14.5" transform="rotate(-45 21.2132 21.5273)" stroke="#D9D9D9" />
              <defs>
                <clipPath id="clip0_2733_3035">
                  <rect
                    width="15.6522"
                    height="15.6522"
                    fill="white"
                    transform="translate(10.1455 21.5273) rotate(-45)"
                  />
                </clipPath>
              </defs>
            </svg>

            <h4>이미지를 등록해주세요</h4>

            <input type="file" accept="image/*" />
          </label>
          <label className="register__upload-small">
            <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_2733_3035)">
                <path
                  d="M21.2178 15.7214C20.8581 15.7214 20.5675 16.0119 20.5675 16.3716L20.5629 20.8771L16.0528 20.8771C15.6931 20.8771 15.4026 21.1676 15.4026 21.5273C15.4026 21.887 15.6931 22.1776 16.0528 22.1776L20.5629 22.1776L20.5629 26.6877C20.5629 27.0474 20.8535 27.3379 21.2132 27.3379C21.5729 27.3379 21.8634 27.0474 21.8634 26.6877L21.8634 22.1776H26.3735C26.7332 22.1776 27.0237 21.887 27.0237 21.5273C27.0237 21.1676 26.7332 20.8771 26.3735 20.8771H21.8634L21.8634 16.367C21.8634 16.0165 21.5683 15.7214 21.2178 15.7214Z"
                  fill="#D9D9D9"
                />
              </g>
              <circle cx="21.2132" cy="21.5273" r="14.5" transform="rotate(-45 21.2132 21.5273)" stroke="#D9D9D9" />
              <defs>
                <clipPath id="clip0_2733_3035">
                  <rect
                    width="15.6522"
                    height="15.6522"
                    fill="white"
                    transform="translate(10.1455 21.5273) rotate(-45)"
                  />
                </clipPath>
              </defs>
            </svg>

            <h4>이미지를 등록해주세요</h4>

            <input type="file" accept="image/*" />
          </label>
          <label className="register__upload-small">
            <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_2733_3035)">
                <path
                  d="M21.2178 15.7214C20.8581 15.7214 20.5675 16.0119 20.5675 16.3716L20.5629 20.8771L16.0528 20.8771C15.6931 20.8771 15.4026 21.1676 15.4026 21.5273C15.4026 21.887 15.6931 22.1776 16.0528 22.1776L20.5629 22.1776L20.5629 26.6877C20.5629 27.0474 20.8535 27.3379 21.2132 27.3379C21.5729 27.3379 21.8634 27.0474 21.8634 26.6877L21.8634 22.1776H26.3735C26.7332 22.1776 27.0237 21.887 27.0237 21.5273C27.0237 21.1676 26.7332 20.8771 26.3735 20.8771H21.8634L21.8634 16.367C21.8634 16.0165 21.5683 15.7214 21.2178 15.7214Z"
                  fill="#D9D9D9"
                />
              </g>
              <circle cx="21.2132" cy="21.5273" r="14.5" transform="rotate(-45 21.2132 21.5273)" stroke="#D9D9D9" />
              <defs>
                <clipPath id="clip0_2733_3035">
                  <rect
                    width="15.6522"
                    height="15.6522"
                    fill="white"
                    transform="translate(10.1455 21.5273) rotate(-45)"
                  />
                </clipPath>
              </defs>
            </svg>

            <h4>이미지를 등록해주세요</h4>

            <input type="file" accept="image/*" />
          </label>
          <label className="register__upload-small">
            <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_2733_3035)">
                <path
                  d="M21.2178 15.7214C20.8581 15.7214 20.5675 16.0119 20.5675 16.3716L20.5629 20.8771L16.0528 20.8771C15.6931 20.8771 15.4026 21.1676 15.4026 21.5273C15.4026 21.887 15.6931 22.1776 16.0528 22.1776L20.5629 22.1776L20.5629 26.6877C20.5629 27.0474 20.8535 27.3379 21.2132 27.3379C21.5729 27.3379 21.8634 27.0474 21.8634 26.6877L21.8634 22.1776H26.3735C26.7332 22.1776 27.0237 21.887 27.0237 21.5273C27.0237 21.1676 26.7332 20.8771 26.3735 20.8771H21.8634L21.8634 16.367C21.8634 16.0165 21.5683 15.7214 21.2178 15.7214Z"
                  fill="#D9D9D9"
                />
              </g>
              <circle cx="21.2132" cy="21.5273" r="14.5" transform="rotate(-45 21.2132 21.5273)" stroke="#D9D9D9" />
              <defs>
                <clipPath id="clip0_2733_3035">
                  <rect
                    width="15.6522"
                    height="15.6522"
                    fill="white"
                    transform="translate(10.1455 21.5273) rotate(-45)"
                  />
                </clipPath>
              </defs>
            </svg>

            <h4>이미지를 등록해주세요</h4>

            <input type="file" accept="image/*" />
          </label>
        </div>

        <button className="register__button" onClick={() => goNextStep(4)}>
          다음
        </button>
      </div>
    </>
  );
};

export default FamilyRegister;
