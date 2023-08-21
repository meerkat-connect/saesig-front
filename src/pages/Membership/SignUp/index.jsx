import React from 'react'
import '../../../scss/pages/Membership/signup.scss';
import saesigFamilyPath from '../../../assets/images/saesig_family.svg';

const SignUp = () => {

    const goNextStep = (step) => {
        document.querySelector(`#signUp${step - 1}`).style.display = 'none';
        document.querySelector(`#signUp${step}`).style.display = 'block';
    }


  return (
    <div className="middle-wrap">
        <div className="inner md">

            {/* 추후 상태관리 라이브러리 도입해서 개발 예정 */}
            {/* 회원가입 1 */}
            <div id="signUp1">
                <div className="signup-top-con">
                    <div className="title">새식일기 서비스 이용약관에<br/>동의해주세요</div>
                </div>
                <div className="signup-bottom-con">
                    <div className="radio-box">
                        <input type="checkbox" id='agreeTOSAll' />
                        <label htmlFor="agreeTOSAll">모두동의 (선택 정보 포함)</label>
                    </div>

                    <hr />

                    <ul className="term-list">
                        <li>
                            <div className="radio-box">
                                <input type="checkbox" id='agreeTOS' />
                                <label htmlFor="agreeTOS">서비스 이용약관 <span className='text--primary'>(필수)</span></label>
                            </div>
                            <button type="button" className='btn btn--text btn--gray btn--underline'>보기</button>
                        </li>
                        <li>
                            <div className="radio-box">
                                <input type="checkbox" id='agreePrivacy' />
                                <label htmlFor="agreePrivacy">개인정보 수집 및 이용동의 <span className="text--primary">(필수)</span></label>
                            </div>
                            <button type="button" className='btn btn--text btn--gray btn--underline'>보기</button>
                        </li>
                        <li>
                            <div className="radio-box">
                                <input type="checkbox" id='agreeGeo' />
                                <label htmlFor="agreeGeo">위치 기반 서비스 이용동의 <span className="text--green">(선택)</span></label>
                            </div>
                            <button type="button" className='btn btn--text btn--gray btn--underline'>보기</button>
                        </li>
                        <li>
                            <div className="radio-box">
                                <input type="checkbox" id='agreeMarketing' />
                                <label htmlFor="agreeMarketing">마케팅 서비스 이용동의 <span className="text--green">(선택)</span></label>
                            </div>
                            <button type="button" className='btn btn--text btn--gray btn--underline'>보기</button>
                        </li>
                    </ul>

                    <button type='button' className="btn btn--filled btn--lg btn--full btn--round btn--gray" onClick={() => goNextStep(2)}>
                        <span>동의하고 가입하기</span>
                    </button>
                </div>
            </div>

            <div id="signUp2" style={{display:'none'}}>
                <div className="signup-top-con">
                    <div className="title">로그인에 사용할<br/>아이디(이메일)을 입력해주세요</div>
                </div>

                <div className="signup-bottom-con">
                    <div className="input-box">
                        <input type="text" placeholder='아이디(이메일) 입력' />
                        <div className="input__text text--caution">
                            <span>이메일 형식이 올바르지 않습니다.</span>
                        </div>
                        <div className="input__text text--caution">
                            <span>이미 사용중인 이메일입니다.</span>
                        </div>
                        <div className="input__text text--caution">
                            <span>간편회원가입으로 가입된 이력이 있습니다.</span>
                        </div>
                        <div className="input__text text--confirm">
                            <span>사용 가능한 이메일 입니다</span>
                        </div>
                    </div>

                    <div className="easy-login-box">
                        <input type="text" value={'간편로그인: Kakao'} readOnly/>
                        <button type="button" className='btn btn--text btn--gray btn--underline'>간편로그인 화면으로 이동</button>
                    </div>


                    <button type='button' className="btn btn--filled btn--lg btn--full btn--round btn--gray" onClick={() => goNextStep(3)}>
                        <span>다음</span>
                    </button>
                </div>
            </div>

            <div id="signUp3" style={{display:'none'}}>
                <div className="signup-top-con">
                    <div className="title">로그인에 사용할<br/>비밀번호를 입력해주세요</div>
                </div>

                <div className="signup-bottom-con">
                    <div className="input-box">
                        <input type="password" placeholder='비밀번호 입력' />
                        <div className="input__text text--desc">
                            <span>영문, 숫자, 특수문자(!@#$) 각 1자 이상 포함하여 8~15자 이내</span>
                        </div>
                        <div className="input__text text--confirm">
                            <span>영문, 숫자, 특수문자(!@#$) 각 1자 이상 포함하여 8~15자 이내</span>
                        </div>
                        <input type="password" placeholder='비밀번호 입력' className='caution' />
                        <div className="input__text text--caution">
                            <span>영문, 숫자, 특수문자(!@#$) 각 1자 이상 포함하여 8~15자 이내</span>
                        </div>
                    </div>

                    <div className="input-box">
                        <input type="password" placeholder='비밀번호 확인' />
                        <div className="input__text text--confirm">
                            <span>비밀번호가 일치합니다.</span>
                        </div>
                        <input type="password" placeholder='비밀번호 확인' className='caution' />
                        <div className="input__text text--caution">
                            <span>비밀번호가 일치하지 않습니다.</span>
                        </div>
                    </div>

                    <button type='button' className="btn btn--filled btn--lg btn--full btn--round btn--gray" onClick={() => goNextStep(4)}>
                        <span>다음</span>
                    </button>
                </div>
            </div>

            <div id="signUp4" style={{display:'none'}}>
                <div className="signup-top-con">
                    <div className="title">새식일기에서 활동할<br/>닉네임을 입력해주세요</div>
                </div>

                <div className="signup-bottom-con">
                    <div className="input-box">
                        <input type="text" placeholder='닉네임 입력' />
                        <div className="input__text text--desc">
                            <span>한글 또는 영문 8자 이내로 입력 (비속어 또는 특수문자는 사용할 수 없습니다)</span>
                        </div>
                        <div className="input__text text--confirm">
                            <span>사용 가능한 닉네임 입니다</span>
                        </div>
                        <input type="password" placeholder='닉네임 입력' className='caution' />
                        <div className="input__text text--caution">
                            <span>이미 사용중인 닉네임 입니다. 다른 닉네임을 입력해주세요</span>
                        </div>
                        <div className="input__text text--caution">
                            <span>비속어, 특수문자가 포함되어 사용할 수 없는 닉네임 입니다.</span>
                        </div>
                    </div>
                    <button type='button' className="btn btn--filled btn--lg btn--full btn--round" onClick={() => goNextStep(5)}>
                        <span>다음</span>
                    </button>
                </div>
            </div>

            <div id="signUp5" style={{display:'none'}}>
                <div className="signup-top-con">
                    <div className="title">새식이 님<br/>새식일기의 가족이 되신 것을 환영합니다 :D</div>
                </div>

                <div className="signup-complete-con">
                    <img src={saesigFamilyPath} alt="새식일기 캐릭터들" />
                </div>

                <button type='button' className="btn btn--filled btn--lg btn--full btn--round">
                    <span>새식일기 시작하기</span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default SignUp