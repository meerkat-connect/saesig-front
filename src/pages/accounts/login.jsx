import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import InfoIcon from '../../components/common/infoicon';

import '../../scss/pages/_login.scss';

const Login = () => {
  const navigate = useNavigate();
  const [isShow, setIsShow] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isSubmitted, errors }
  } = useForm();
  const onSubmit = async (data) => {
    await new Promise((r) => setTimeout(r, 1_000));
    alert(JSON.stringify(data));
  }

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
      <form className="ss-form w-490 mb-30" onSubmit={handleSubmit(onSubmit)}>
        <input
            className="ss-input --full --error mb-6"
            type="text"
            placeholder="아이디(이메일)를 입력해 주세요."
            id="email"
            name="email"
            {...register("email", {
              required:'아이디(이메일)를 입력해 주세요.'
            })}
        />
        {errors.email && <div className="notification notification--caution">{errors.email.message}</div>}
        <input className="ss-input --full"
               type="password"
               id="password"
               name="password"
               placeholder="비밀번호를 입력해 주세요."
               {...register("password",  {
                 required:"비밀번호를 입력해 주세요."
               })}
        />
        {errors.password && <div className="notification notification--caution">{errors.password.message}</div>}

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
        <button type="submit" className="ss-button --lg --full" disabled={isSubmitting}>로그인 하기</button>
      </form>
      <div className="ss-group mb-120">
        <button className="ss-text-button" onClick={() => navigate('/find-id')}>
          아이디 찾기
        </button>
        <div className="separator --vertical ml-12 mr-12" />
        <button className="ss-text-button" onClick={() => navigate('/find-password')}>
          비밀번호 찾기
        </button>
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
      <button className="ss-text-button ss-text-button--icon" onClick={() => navigate('/join')}>
        이메일로 회원가입 <img src="/src/assets/icons/2424/chevron_sm_right.svg" alt="이메일로 회원가입" />
      </button>
    </div>
  );
};

export default Login;
