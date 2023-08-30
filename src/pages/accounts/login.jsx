import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import InfoIcon from '../../components/common/infoicon';
import '../../scss/pages/_login.scss';

const Login = () => {
  const [isShow, setIsShow] = useState(false);

  const onInfoIconClickHandler = () => {
    if (isShow) setIsShow(false);
    else setIsShow(true);
  };

  return (
    <div className="login">
      <div className="login__title pb-60">
        <img className="pb-12" src="/src/assets/pictograms/logo_lg.svg" alt="새식일기" />
        <span>새로운 식구와 함께하는 일상 기록</span>
      </div>
      <form className="ss-form w-490 mb-30">
        <input className="ss-input mb-6 --error" type="text" placeholder="아이디(이메일)입력" />
        <div className="notification notification--caution">이메일 형식이 올바르지 않습니다.</div>
        <input className="ss-input" type="password" placeholder="비밀번호 입력" />
        <div className="ss-form__row-container mt-20 mb-30">
          <input className="ss-input" type="checkbox" id="staySignedIn" />
          <label className="mr-8" htmlFor="staySignedIn">
            로그인 상태 유지
          </label>
          <InfoIcon
            show={isShow}
            onClick={onInfoIconClickHandler}
            onClickOutside={() => setIsShow(false)}
            position="left-bottom"
            message="개인정보 보호를 위해 개인 PC에서만 사용해주세요."
          />
        </div>
        <button className="ss-button ss-button--lg">로그인 하기</button>
      </form>
      <div className="ss-group mb-120">
        <button className="ss-text-button">아이디 찾기</button>
        <div className="separator --vertical ml-12 mr-12" />
        <button className="ss-text-button">비밀번호 찾기</button>
      </div>
      <div className="ss-group mb-20">
        <button className="mr-20">
          <img src="/src/assets/icons/4848/social_kakao.svg" alt="카카오로 로그인" />
        </button>
        <button className="mr-20">
          <img src="/src/assets/icons/4848/social_naver.svg" alt="네이버로 로그인" />
        </button>
        <button>
          <img src="/src/assets/icons/4848/social_google.svg" alt="구글로 로그인" />
        </button>
      </div>
      <NavLink to="/signup">
        <button className="ss-text-button ss-text-button--icon">
          이메일로 회원가입 <img src="/src/assets/icons/2424/chevron_sm_right.svg" alt="이메일로 회원가입" />
        </button>
      </NavLink>
    </div>
  );
};

export default Login;
