import React, { useState } from 'react';
import '@/scss/pages/_family-register.scss';

const Register = () => {
  const [step, setStep] = useState(0);
  const nextPage = () => {
    if (step < 5) {
      setStep((currentStep) => currentStep + 1);
    }
  };

  const display = () => {
    if (step === 0) {
      return <Step0 />;
    } else if (step === 1) {
      return <Step1 />;
    } else if (step === 2) {
      return <Step2 />;
    } else if (step === 3) {
      return <Step3 />;
    } else if (step === 4) {
      return <Step4 />;
    } else if (step === 5) {
      return <Step5 />;
    }
  };

  return (
    <>
      <div className="register">
        {display()}
        <button className="register__button mt-60" onClick={() => nextPage()}>
          다음
        </button>
      </div>
    </>
  );
};

export default Register;

// Steps
const Step0 = () => {
  return (
    <>
      <div className="register__text-group mb-85">
        <span className="register__stage">기본정보</span>
        <p className="register__writing">
          어떤 새로운 식구를
          <br />
          소개시켜 주실건가요?
        </p>
      </div>
      <div className="register__container">
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
    </>
  );
};
const Step1 = () => {
  return (
    <>
      <div className="register__text-group mb-60">
        <span className="register__stage">기본정보</span>
        <p className="register__writing">
          새로운 식구의 이미지를
          <br />
          등록해주세요
        </p>
      </div>
      <label className="register__upload-large">
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
    </>
  );
};
const Step2 = () => {
  return (
    <>
      <div className="register__text-group mb-60">
        <span className="register__stage">기본정보</span>
        <p className="register__writing">
          새로운 식구의 이미지를
          <br />
          등록해주세요
        </p>
      </div>
      <div className="register__upload-group">
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
    </>
  );
};
const Step3 = () => {
  const breed = [
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
  ];
  const gender = ['수컷', '암컷'];
  return (
    <>
      <div className="register__text-group mb-85">
        <span className="register__stage">기본정보</span>
        <p className="register__writing">
          새로운 식구의 기본정보를
          <br />
          알려주세요
        </p>
      </div>
      <div className="register__basic-input-group">
        <Dropdown label="품종" type="breed" placeholder="품종 선택" options={breed} required />
        <Dropdown label="성별" type="gender" placeholder="성별 선택" options={gender} required />
        <div className="os-input">
          <label className="--required">나이</label>
          <input type="text" placeholder="나이 입력" />
        </div>
        <div className="os-input">
          <label className="--required">책임비</label>
          <input type="text" placeholder="10,000" />
        </div>
        <div className="os-input">
          <label className="--required">제목</label>
          <input type="text" placeholder="제목 입력" />
        </div>
        <div className="os-input">
          <label className="--required">소개</label>
          <textarea cols="30" rows="10" placeholder="내용을 입력해주세요"></textarea>
        </div>
        <Dropdown label="분양 희망 지역" type="city" placeholder="시, 도" required />
        <Dropdown label="" type="region" placeholder="시, 군, 구" />
      </div>
    </>
  );
};
const Step4 = () => {
  const neuter = ['중성화 완료', '중성화 미완료'];

  return (
    <>
      <div className="register__text-group mb-85">
        <span className="register__stage">기본정보</span>
        <p className="register__writing">
          새로운 식구의 기본정보를
          <br />
          알려주세요
        </p>
      </div>
      <div className="register__health-input-group">
        <Dropdown label="중성화 여부" type="neuter" placeholder="선택해주세요" options={neuter} required />
        <div className="os-input">
          <label>백신 접종 여부</label>
          <div className="vaccine-group">
            <div className="vaccine">
              <label>
                <input type="checkbox" />
                <span>고양이 백혈병</span>
              </label>
            </div>
            <div className="vaccine">
              <label>
                <input type="checkbox" />
                <span>고양이 백혈병</span>
              </label>
            </div>
            <div className="vaccine">
              <label>
                <input type="checkbox" />
                <span>고양이 백혈병</span>
              </label>
            </div>
          </div>
        </div>
        <div className="os-input">
          <label className="--required">기타 질병 및 특이사항</label>
          <textarea cols="30" rows="10" placeholder="내용 입력"></textarea>
        </div>
      </div>
    </>
  );
};
const Step5 = () => {
  const neuter = ['중성화 완료', '중성화 미완료'];

  const onModalClick = () => {
    document.querySelector('.modal').classList.remove('--active');
  };

  return (
    <>
      <div className="register__text-group mb-85">
        <span className="register__stage">기본정보</span>
        <p className="register__writing">
          새로운 식구의 기본정보를
          <br />
          알려주세요
        </p>
      </div>
      <div className="register__health-input-group">
        <Dropdown label="중성화 여부" type="neuter" placeholder="선택해주세요" options={neuter} required />
        <div className="os-input">
          <label>백신 접종 여부</label>
          <div className="vaccine-group">
            <div className="vaccine">
              <label>
                <input type="checkbox" />
                <span>고양이 백혈병</span>
              </label>
            </div>
            <div className="vaccine">
              <label>
                <input type="checkbox" />
                <span>고양이 백혈병</span>
              </label>
            </div>
            <div className="vaccine">
              <label>
                <input type="checkbox" />
                <span>고양이 백혈병</span>
              </label>
            </div>
          </div>
        </div>
        <div className="os-input">
          <label className="--required">기타 질병 및 특이사항</label>
          <textarea cols="30" rows="10" placeholder="내용 입력"></textarea>
        </div>
      </div>

      {/* modal */}
      <div className="modal --active" onClick={() => onModalClick()}>
        <div className="modal__window">
          <p className="mt-90">
            지금 작성을 그만두면 내용이 저장되지 않습니다.
            <br />
            정말 나갈까요?
          </p>
          <div className="mt-60">
            <button className="mr-10">아니요</button>
            <button>네, 나갈래요</button>
          </div>
        </div>
      </div>
    </>
  );
};

// Components
// eslint-disable-next-line react/prop-types
const Dropdown = ({ label, type, placeholder, options, required }) => {
  function handleOptionClick(value) {
    const dropdown = document.querySelector(`.--${type}`);
    const input = dropdown.querySelector('.dropdown__input');
    input.value = value;
    dropdown.classList.toggle('--active');
  }

  function handleInputClick() {
    document.querySelector(`.--${type}`).classList.toggle('--active');
  }

  return (
    <div className={`dropdown --${type}`}>
      <label className={required ? '--required' : null}>{label}</label>
      <input
        type="text"
        className={`dropdown__input`}
        value=""
        placeholder={placeholder}
        readOnly
        onClick={() => handleInputClick()}
      />
      <div className="dropdown__option">
        {options
          ? options.map((option, i) => (
              <div key={i} onClick={() => handleOptionClick(`${option}`)}>
                {option}
              </div>
            ))
          : null}
      </div>
    </div>
  );
};
