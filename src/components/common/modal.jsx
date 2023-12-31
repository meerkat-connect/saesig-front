import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Modal = ({ type, children }) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  if (!isOpen)
    return (
      <div className="ss-modal">
        {type === 'normal' && (
          <div className="ss-modal__normal">
            <div className="ss-modal__header">
              <img onClick={() => toggle()} src="/src/assets/icons/2424/close.svg" alt="" />
            </div>

            <div>
              <p className="mt-40 mb-60">{children}</p>
            </div>

            <div className="ss-modal__button-group">
              <button onClick={() => toggle()} className="ss-button --md --negative mr-10">
                아니요
              </button>

              <button onClick={() => navigate(-1)} className="ss-button --md">
                네, 나갈래요
              </button>
            </div>
          </div>
        )}
        {type === 'notification' && (
          <div className="ss-modal__normal">
            <div className="ss-modal__header">
              <img onClick={() => toggle()} src="/src/assets/icons/2424/close.svg" alt="" />
            </div>

            <div>
              <p className="mt-40 mb-60">{children}</p>
            </div>

            <div className="ss-modal__button-group">
              <button onClick={() => toggle()} className="ss-button --md">
                확인
              </button>
            </div>
          </div>
        )}
        {type === 'complete' && (
          <div className="ss-modal__normal">
            <img className="ss-modal__family" src="/src/assets/pictograms/family_modal.svg" alt="식구등록 완료" />
            <div className="ss-modal__header">
              <img onClick={() => toggle()} src="/src/assets/icons/2424/close.svg" alt="" />
            </div>

            <div>
              <p className="mt-40 mb-60">{children}</p>
            </div>

            <div className="ss-modal__button-group">
              <button onClick={() => toggle()} className="ss-button --md">
                확인
              </button>
            </div>
          </div>
        )}
        {type === 'password' && (
          <div className="ss-modal__imformation">
            <div className="ss-modal__header">
              <img onClick={() => toggle()} src="/src/assets/icons/2424/close.svg" alt="" />
            </div>

            <div className="ss-modal__body mb-40">
              <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="40" cy="40" r="40" fill="#F9F7F2" />
                <g mask="url(#mask0_2408_58734)">
                  <path
                    d="M34.797 34.2905H45.203V30.688C45.203 29.2079 44.699 27.961 43.6912 26.9475C42.6834 25.934 41.453 25.4272 40 25.4272C38.547 25.4272 37.3165 25.934 36.3087 26.9475C35.3009 27.961 34.797 29.2079 34.797 30.688V34.2905ZM42.1282 55.8331H30.1068C29.4003 55.8331 28.7892 55.5753 28.2735 55.0596C27.7578 54.5439 27.5 53.9328 27.5 53.2263V36.8973C27.5 36.1907 27.7578 35.5796 28.2735 35.064C28.7892 34.5483 29.4003 34.2905 30.1068 34.2905H32.703V30.6922C32.703 28.6333 33.4092 26.892 34.8216 25.4685C36.234 24.045 37.9601 23.3333 40 23.3333C42.0398 23.3333 43.7659 24.045 45.1783 25.4685C46.5907 26.892 47.2969 28.6333 47.2969 30.6922V34.2905H49.8931C50.5996 34.2905 51.2107 34.5483 51.7264 35.064C52.2421 35.5796 52.4999 36.1907 52.4999 36.8973V39.6729C52.21 39.5974 51.8933 39.5401 51.5496 39.5009C51.206 39.4617 50.8247 39.4421 50.406 39.4421V36.8973C50.406 36.7477 50.3579 36.6248 50.2617 36.5287C50.1655 36.4325 50.0427 36.3844 49.8931 36.3844H30.1068C29.9572 36.3844 29.8344 36.4325 29.7382 36.5287C29.642 36.6248 29.594 36.7477 29.594 36.8973V53.2263C29.594 53.3758 29.642 53.4987 29.7382 53.5949C29.8344 53.691 29.9572 53.7391 30.1068 53.7391H40.9423C41.0819 54.1371 41.2415 54.4976 41.421 54.8207C41.6004 55.1438 41.8362 55.4812 42.1282 55.8331ZM50.3504 57.0553C48.3219 57.0553 46.5883 56.3359 45.1495 54.8972C43.7108 53.4584 42.9915 51.7266 42.9915 49.7017C42.9915 47.6768 43.7108 45.9432 45.1495 44.5009C46.5883 43.0586 48.3219 42.3374 50.3504 42.3374C52.3788 42.3374 54.1124 43.0584 55.5512 44.5005C56.9899 45.9425 57.7093 47.6745 57.7093 49.6963C57.7093 51.7248 56.9899 53.4584 55.5512 54.8972C54.1124 56.3359 52.3788 57.0553 50.3504 57.0553ZM51.0256 49.519V45.4354C51.0256 45.2219 50.9537 45.0407 50.8099 44.8919C50.6661 44.743 50.4856 44.6686 50.2682 44.6686C50.0509 44.6686 49.8696 44.743 49.7243 44.8919C49.579 45.0407 49.5064 45.222 49.5064 45.4356V49.4934C49.5064 49.6656 49.5416 49.8329 49.6121 49.9952C49.6826 50.1575 49.7866 50.3033 49.9241 50.4325L52.767 53.1515C52.8958 53.2854 53.0592 53.3504 53.2572 53.3465C53.4554 53.3425 53.6232 53.2711 53.7606 53.1321C53.9166 52.9746 53.99 52.7997 53.9807 52.6075C53.9714 52.4153 53.8911 52.2511 53.7396 52.115L51.0256 49.519Z"
                    fill="#FF8031"
                  />
                </g>
              </svg>
              <h4 className="mt-40 mb-20">비밀번호 변경 안내</h4>
              <p>
                회원님께서는 <span>90일동안</span> 비밀번호를 변경하지 않으셨습니다.
                <br />
                개인정보 보호를 위해 90일마다 비밀번호를 변경해주세요
              </p>
            </div>

            <div className="ss-modal__button-group">
              <button onClick={() => toggle()} className="ss-button --md --negative mr-10">
                다음에 하기
              </button>

              <button onClick={() => navigate(-1)} className="ss-button --md">
                허용하기
              </button>
            </div>
          </div>
        )}
        {type === 'geolocation' && (
          <div className="ss-modal__imformation">
            <div className="ss-modal__header">
              <img onClick={() => toggle()} src="/src/assets/icons/2424/close.svg" alt="" />
            </div>

            <div className="ss-modal__body mb-40">
              <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="40" cy="40" r="40" fill="#F9F7F2" />
                <g mask="url(#mask0_2410_59062)">
                  <path
                    d="M40.0001 46.4963C42.9522 44.1759 45.1824 41.9462 46.6907 39.8073C48.199 37.6684 48.9531 35.6327 48.9531 33.7001C48.9531 32.052 48.6476 30.6523 48.0364 29.501C47.4253 28.3497 46.6704 27.4143 45.7718 26.6948C44.8731 25.9754 43.9025 25.4535 42.8602 25.1293C41.8178 24.805 40.8648 24.6428 40.0011 24.6428C39.1374 24.6428 38.1841 24.805 37.141 25.1293C36.098 25.4535 35.1271 25.9754 34.2284 26.6948C33.3298 27.4143 32.5749 28.3497 31.9637 29.501C31.3526 30.6523 31.047 32.052 31.047 33.7001C31.047 35.6327 31.8012 37.6684 33.3095 39.8073C34.8178 41.9462 37.048 44.1759 40.0001 46.4963ZM40.0001 48.6034C39.7862 48.6034 39.5748 48.5678 39.3659 48.4967C39.1569 48.4255 38.9645 48.3188 38.7885 48.1765C36.6027 46.4928 34.4169 44.4035 32.2314 41.9088C30.0459 39.414 28.9531 36.6778 28.9531 33.7001C28.9531 31.8673 29.2864 30.2604 29.9531 28.8794C30.6197 27.4983 31.4816 26.3389 32.5385 25.401C33.5955 24.4631 34.7824 23.7588 36.0991 23.2881C37.4158 22.8174 38.716 22.582 39.9995 22.582C41.2831 22.582 42.5834 22.8174 43.9005 23.2881C45.2176 23.7588 46.4047 24.4631 47.4616 25.401C48.5186 26.3389 49.3804 27.4983 50.0471 28.8794C50.7137 30.2604 51.047 31.8673 51.047 33.7001C51.047 36.6778 49.9543 39.414 47.7688 41.9088C45.5832 44.4035 43.3975 46.4928 41.2116 48.1765C41.0357 48.3188 40.8432 48.4255 40.6343 48.4967C40.4253 48.5678 40.2139 48.6034 40.0001 48.6034ZM40.0034 36.1247C40.7583 36.1247 41.3988 35.8648 41.9248 35.345C42.4507 34.8251 42.7137 34.1937 42.7137 33.4508C42.7137 32.7078 42.4496 32.0775 41.9214 31.5599C41.3932 31.0422 40.7517 30.7834 39.9968 30.7834C39.2419 30.7834 38.6014 31.0433 38.0754 31.5631C37.5494 32.083 37.2865 32.7144 37.2865 33.4573C37.2865 34.2003 37.5506 34.8306 38.0788 35.3482C38.6069 35.8659 39.2485 36.1247 40.0034 36.1247ZM30.0001 54.5672C29.7034 54.5672 29.4548 54.468 29.2541 54.2694C29.0535 54.0709 28.9531 53.8248 28.9531 53.5313C28.9531 53.2378 29.0535 52.9936 29.2541 52.7987C29.4548 52.6039 29.7034 52.5065 30.0001 52.5065H50.0001C50.2967 52.5065 50.5454 52.6057 50.746 52.8043C50.9467 53.0028 51.047 53.2489 51.047 53.5424C51.047 53.8359 50.9467 54.0801 50.746 54.2749C50.5454 54.4698 50.2967 54.5673 50.0001 54.5673L30.0001 54.5672Z"
                    fill="#FF8031"
                  />
                </g>
              </svg>

              <h4 className="mt-40 mb-20">위치권한 설정</h4>
              <p>
                내 위치 기반 날씨정보 안내 서비스를 이용하기 위한
                <br />
                <span>위치 권한</span>을 허용하시겠습니까?
              </p>
            </div>

            <hr />

            <div className="geolocation mb-40">
              선택 접근 권한은 동의하지 않아도 서비스를 이용할 수 있으며,
              <br /> 해당 기능 사용시 접근 허용 여부를 묻습니다.
            </div>

            <div className="ss-modal__button-group">
              <button onClick={() => toggle()} className="ss-button --md --negative mr-10">
                다음에 하기
              </button>

              <button onClick={() => navigate(-1)} className="ss-button --md">
                허용하기
              </button>
            </div>
          </div>
        )}
        {type === 'accountRecovery' && (
          <div className="ss-modal__imformation">
            <div className="ss-modal__header">
              <img onClick={() => toggle()} src="/src/assets/icons/2424/close.svg" alt="" />
            </div>

            <div className="ss-modal__body">
              {/* svg 수정 필요 */}
              <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="40" cy="40" r="40" fill="#F9F7F2" />
                <g mask="url(#mask0_2408_58622)">
                  <path
                    d="M21.2247 27.6561H23.7805C23.9923 27.6561 24.1811 27.5637 24.3471 27.3789C24.5131 27.1941 24.5688 26.994 24.5144 26.7787L23.554 21.3677C24.1526 21.1248 24.6324 20.7475 24.9934 20.2356C25.3543 19.7237 25.5348 19.1523 25.5348 18.5214C25.5348 17.6868 25.2371 16.9724 24.6417 16.3781C24.0463 15.7838 23.3306 15.4867 22.4945 15.4867C21.6584 15.4867 20.9445 15.7838 20.3527 16.3781C19.761 16.9724 19.4651 17.6868 19.4651 18.5214C19.4651 19.1523 19.6456 19.7237 20.0065 20.2356C20.3675 20.7475 20.8473 21.1248 21.4459 21.3677L20.4855 26.7787C20.4311 26.994 20.4864 27.1941 20.6514 27.3789C20.8165 27.5637 21.0076 27.6561 21.2247 27.6561ZM22.5 40.0707C22.3242 40.0707 22.1549 40.0551 21.9921 40.0239C21.8293 39.9926 21.6723 39.9457 21.5212 39.8832C17.4999 38.4513 14.3139 35.9431 11.9633 32.3586C9.61278 28.7741 8.4375 24.8707 8.4375 20.6484V12.0504C8.4375 11.4253 8.61458 10.8628 8.96873 10.3628C9.32286 9.8627 9.7808 9.50017 10.3425 9.27517L21.4723 5.13217C21.8273 5.00076 22.1698 4.93506 22.5 4.93506C22.8301 4.93506 23.1726 5.00076 23.5276 5.13217L34.6574 9.27517C35.2191 9.50017 35.677 9.8627 36.0312 10.3628C36.3853 10.8628 36.5624 11.4253 36.5624 12.0504V20.6484C36.5624 24.8707 35.3871 28.7741 33.0366 32.3586C30.686 35.9431 27.5 38.4513 23.4787 39.8832C23.3276 39.9457 23.1706 39.9926 23.0078 40.0239C22.845 40.0551 22.6757 40.0707 22.5 40.0707ZM22.5 37.7883C25.915 36.685 28.7199 34.5367 30.9146 31.3436C33.1093 28.1505 34.2067 24.5872 34.2067 20.6537V12.0324C34.2067 11.9121 34.1736 11.8039 34.1075 11.7078C34.0414 11.6116 33.9483 11.5395 33.8281 11.4915L22.6983 7.3172C22.6382 7.29314 22.5721 7.28111 22.5 7.28111C22.4278 7.28111 22.3617 7.29314 22.3016 7.3172L11.1719 11.4915C11.0516 11.5395 10.9585 11.6116 10.8924 11.7078C10.8263 11.8039 10.7932 11.9121 10.7932 12.0324V20.6537C10.7932 24.5872 11.8906 28.1505 14.0853 31.3436C16.28 34.5367 19.0849 36.685 22.5 37.7883Z"
                    fill="#FF8031"
                  />
                </g>
              </svg>

              <h4 className="mt-40 mb-20">계정 복구안내</h4>
              <p>
                회원님의 계정은 회원탈퇴 처리 진행중입니다.
                <br />
                회원탈퇴를 취소 하시겠어요?
              </p>
            </div>

            <hr />

            <div className="account-recovery mb-40">회원탈퇴 완료일자 : 2023.05.25</div>

            <div className="ss-modal__button-group">
              <button onClick={() => toggle()} className="ss-button --md --negative mr-10">
                나가기
              </button>

              <button onClick={() => navigate(-1)} className="ss-button --md">
                회원탈퇴 취소하기
              </button>
            </div>
          </div>
        )}
        {type === 'AccountInactive' && (
          <div className="ss-modal__imformation">
            <div className="ss-modal__header">
              <img onClick={() => toggle()} src="/src/assets/icons/2424/close.svg" alt="" />
            </div>

            <div className="ss-modal__body">
              <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="40" cy="40" r="40" fill="#F9F7F2" />
                <g mask="url(#mask0_2410_59220)">
                  <path
                    d="M30.1068 55.8333C29.3928 55.8333 28.7798 55.5774 28.2679 55.0654C27.756 54.5535 27.5 53.9405 27.5 53.2265V36.8975C27.5 36.178 27.756 35.5636 28.2679 35.0545C28.7798 34.5453 29.3928 34.2907 30.1068 34.2907H45.203V30.6305C45.203 29.1852 44.6971 27.9567 43.6854 26.945C42.6737 25.9333 41.4452 25.4275 40 25.4275C38.7153 25.4275 37.594 25.8375 36.6358 26.6577C35.6777 27.4778 35.0893 28.5037 34.8707 29.7352C34.8227 29.9959 34.6938 30.2103 34.4838 30.3783C34.2738 30.5464 34.0306 30.6305 33.7541 30.6305C33.4494 30.6305 33.2008 30.5199 33.0085 30.2987C32.8163 30.0776 32.7454 29.8181 32.796 29.5204C33.0545 27.7619 33.8604 26.2911 35.2137 25.108C36.5669 23.925 38.1624 23.3335 40 23.3335C42.025 23.3335 43.7474 24.0434 45.1672 25.4632C46.587 26.883 47.2969 28.6054 47.2969 30.6305V34.2907H49.8931C50.6071 34.2907 51.2201 34.5453 51.732 35.0545C52.2439 35.5636 52.4999 36.178 52.4999 36.8975V53.2265C52.4999 53.9405 52.2439 54.5535 51.732 55.0654C51.2201 55.5774 50.6071 55.8333 49.8931 55.8333H30.1068ZM30.1068 53.7394H49.8931C50.0427 53.7394 50.1655 53.6913 50.2617 53.5951C50.3579 53.499 50.406 53.3761 50.406 53.2265V36.8975C50.406 36.7479 50.3579 36.6251 50.2617 36.5289C50.1655 36.4327 50.0427 36.3847 49.8931 36.3847H30.1068C29.9572 36.3847 29.8344 36.4327 29.7382 36.5289C29.642 36.6251 29.594 36.7479 29.594 36.8975V53.2265C29.594 53.3761 29.642 53.499 29.7382 53.5951C29.8344 53.6913 29.9572 53.7394 30.1068 53.7394ZM40.0046 47.9167C40.7928 47.9167 41.4649 47.6413 42.0208 47.0905C42.5767 46.5397 42.8546 45.875 42.8546 45.0962C42.8546 44.3348 42.5751 43.663 42.0161 43.0807C41.4571 42.4985 40.7835 42.2073 39.9953 42.2073C39.2071 42.2073 38.5351 42.4985 37.9792 43.0807C37.4233 43.663 37.1453 44.3394 37.1453 45.1101C37.1453 45.8807 37.4248 46.5411 37.9838 47.0914C38.5428 47.6416 39.2164 47.9167 40.0046 47.9167Z"
                    fill="#FF8031"
                  />
                </g>
              </svg>

              <h4 className="mt-40 mb-20">휴면 전환 안내</h4>
              <p>
                1년 이상 새식일기 서비스 미사용 회원님으로
                <br />
                회원님의 아이디는 현재 휴면 상태입니다.
              </p>
            </div>

            <hr />

            <div className="account-inactive mb-40">
              <span>휴면 전환 일자 : 2023.05.25</span>
              <div className="mt-30">
                <h6>
                  개인정보 유효기간<span>*</span>
                </h6>
                <p className="mt-12 mb-30">
                  선택된 유효기간 동안 새식일기 이용 내역이 없어도 개인정보 분리 보관
                  <br /> 및 휴면회원으로 전환되지 않습니다.
                </p>
                <div className="radio-group">
                  <input className="ss-input" type="radio" name="radio" id="ss-radio1" />
                  <label htmlFor="ss-radio1">1년</label>
                  <input className="ss-input" type="radio" name="radio" id="ss-radio2" />
                  <label htmlFor="ss-radio2">5년</label>
                  <input className="ss-input" type="radio" name="radio" id="ss-radio3" />
                  <label htmlFor="ss-radio3">회원탈퇴 시</label>
                </div>
              </div>
              <p className="mt-20">
                [휴면 해제] 버튼을 눌러 분리 보관된 개인정보에 대한 복원이 진행됩니다.
                <br />
                개인정보 복원 후에는 정상적인 서비스 이용을 위하여 다시 로그인을 진행해주세요
              </p>
            </div>

            <div className="ss-modal__button-group">
              <button onClick={() => navigate(-1)} className="ss-button w-245 --md">
                휴면 해제
              </button>
            </div>
          </div>
        )}
      </div>
    );
};

export default Modal;
