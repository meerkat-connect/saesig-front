import React from 'react';
import '../../scss/pages/_find.scss';
import { useNavigate } from 'react-router-dom';

const FindId = () => {
  const navigate = useNavigate();
  const goNextStep = (step) => {
    document.querySelector(`#find-id-${step - 1}`).style.display = 'none';
    document.querySelector(`#find-id-${step}`).style.display = 'flex';
  };

  return (
    <>
      {/* step 1 */}
      <div id="find-id-1" className="find">
        <div className="find__title mb-60">
          <div>아이디 찾기</div>
          <div>
            찾으시는 아이디의 닉네임을
            <br />
            입력해주세요.
          </div>
        </div>
        <div className="ss-form">
          <input className="ss-input --full mb-10" type="text" placeholder="닉네임 입력" />
          <span className="notification notification--caution">존재하지 않는 닉네임 입니다.</span>
          <button className="ss-button --lg --full" onClick={() => goNextStep(2)}>
            다음
          </button>
        </div>
      </div>

      {/* step 2 */}
      <div id="find-id-2" className="find" style={{ display: 'none' }}>
        <div className="find__title mb-60">
          <div>아이디 찾기</div>
          <div>
            입력하신 정보로 확인된
            <br />
            아이디 정보는 아래와 같습니다.
          </div>
        </div>
        <div className="ss-form">
          <hr className="mb-12" />
          <div className="ss-flex justify-between w-full mb-60">
            <div className="find__id">MEKC***@gmail.com</div>
            <div className="find__joined">가입일 : 2023.02.25</div>
          </div>
          <button className="ss-button --lg --full mb-10" onClick={() => navigate('/login')}>
            로그인 하기
          </button>
          <button className="ss-button --lg --full" onClick={() => navigate('/find-password')}>
            비밀번호 찾기
          </button>
        </div>
      </div>
    </>
  );
};

export default FindId;
