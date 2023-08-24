import React, { useState } from 'react';
import '@/scss/pages/_login.scss';
import logoPath from '@/assets/images/saesig_text_logo.svg';
import InfoIcon from '@/components/Tooltips/InfoIcon';

const Login = () => {
  let [isShow, setIsShow] = useState(false);

  const onInfoIconClickHandler = () => {
    if (isShow) setIsShow(false);
    else setIsShow(true);
  };

  return (
    <div className="middle-wrap">
      <div className="inner md">
        <div className="login-top-con">
          <img src={logoPath} alt="새식일기 로고" />
          <div className="desc">새로운 식구와 함께하는 일상 기록</div>
        </div>

        <div className="login-form-con">
          <div className="input-box">
            <input className="input" type="text" placeholder="아이디(이메일) 입력" />
            <div className="text--caution">
              <span>이메일 형식이 올바르지 않습니다</span>
            </div>
          </div>
          <div className="input-box">
            <input className="input" type="password" placeholder="비밀번호 입력" />
          </div>
          <div className="radio-box">
            <input className="input" type="checkbox" id="staySignedIn" />
            <label htmlFor="staySignedIn">로그인 상태 유지</label>
            <InfoIcon
              show={isShow}
              onClick={onInfoIconClickHandler}
              onClickOutside={() => setIsShow(false)}
              position="left-bottom"
              message="개인정보 보호를 위해 개인 PC에서만 사용해주세요."
            />
          </div>

          <button type="submit" className="login-btn btn btn--filled btn--lg btn--full btn--round">
            <span>로그인 하기</span>
          </button>

          <ul className="btn__group btn__group--text btn__group--center">
            <li>
              <button type="button" onClick={() => (location.href = '/find-id')} className="btn btn--text btn--gray">
                아이디 찾기
              </button>
            </li>
            <li>
              <button type="button" onClick={() => (location.href = '/find-pw')} className="btn btn--text btn--gray">
                비밀번호 찾기
              </button>
            </li>
          </ul>
        </div>

        <div className="login-bottom-con">
          <ul className="btn__group btn__group--sns btn__group--center">
            <li>
              <button type="button" className="btn btn--kakao">
                카카오로 회원가입
              </button>
            </li>
            <li>
              <button type="button" className="btn btn--naver">
                네이버로 회원가입
              </button>
            </li>
            <li>
              <button type="button" className="btn btn--google">
                구글로 회원가입
              </button>
            </li>
          </ul>

          <div className="sign-up-btn">
            <button type="button" className="btn btn--arrow btn--arrow--next">
              이메일로 회원가입
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
