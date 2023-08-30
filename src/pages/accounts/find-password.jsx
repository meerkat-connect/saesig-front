import React from 'react';
import '../../scss/pages/_find.scss';

const FindPassword = () => {
  const goNextStep = (step) => {
    document.querySelector(`#find-password-${step - 1}`).style.display = 'none';
    document.querySelector(`#find-password-${step}`).style.display = 'flex';
  };

  return (
    <>
      {/* step 1 */}
      <div id="find-password-1" className="find">
        <div className="find__title w-490 mb-60">
          <div>비밀번호 찾기</div>
          <div>
            가입된 아이디(이메일)와
            <br />
            인증번호를 입력해주세요
          </div>
        </div>
        <div className="ss-form w-490">
          <input className="ss-input mb-10" type="text" placeholder="아이디(이메일) 입력" />
          <span className="notification notification--caution">존재하지 않는 아이디(이메일) 입니다.</span>
          <span className="notification notification--caution">간편로그인 사용자입니다.</span>
          <div className="ss-input__with-button mb-10">
            <input className="ss-input" type="text" placeholder="000000" />
            <div>
              <span>00:00</span>
              <button className="ss-button ss-button--sm">재전송</button>
            </div>
          </div>
          <span className="notification notification--caution">인증번호가 일치하지 않습니다.</span>
          <button className="ss-button ss-button--lg" onClick={() => goNextStep(2)}>
            다음
          </button>
        </div>
        <div className="ss-notification">인증메일이 발송 되었습니다.</div>
      </div>

      {/* step 2 */}
      <div id="find-password-2" className="find" style={{ display: 'none' }}>
        <div className="find__title w-490 mb-60">
          <div>비밀번호 찾기</div>
          <div>
            로그인에 사용할 새로운
            <br />
            비밀번호를 입력해주세요
          </div>
        </div>
        <div className="ss-form w-490">
          <input className="ss-input --error" type="password" placeholder="비밀번호 입력" />
          <span className="notification">영문, 숫자, 특수문자(!@#$) 각 1자 이상 포함하여 8~15자 이내</span>
          <span className="notification notification--caution">
            영문, 숫자, 특수문자(!@#$) 각 1자 이상 포함하여 8~15자 이내
          </span>
          <span className="notification notification--success">
            영문, 숫자, 특수문자(!@#$) 각 1자 이상 포함하여 8~15자 이내
          </span>
          <input className="ss-input mb-10" type="password" placeholder="비밀번호 확인" />
          <span className="notification notification--caution">비밀번호가 일치하지 않습니다.</span>
          <span className="notification notification--success">비밀번호가 일치합니다.</span>
          <button className="ss-button ss-button--lg" disabled>
            비밀번호 재설정 완료
          </button>
        </div>
      </div>
    </>
  );
};

export default FindPassword;
