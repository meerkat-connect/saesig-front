import React, {useState} from 'react';
import {useForm} from 'react-hook-form';

const TermsForm = ({onNext, formData, updateFormData}) => {
    const {register, handleSubmit, formState: {errors}} = useForm({
        defaultValues: formData.terms
    });

    const onSubmit = (data) => {

        onNext()
        /*updateFormData({terms: data});
        if (data.term1 && data.term2) { // 필수 조건 확인
            onNext();
        } else {
            alert('필수 이용약관에 동의해주세요.');
        }*/
    };
    const [showModal, setShowModal] = useState(false);

    // const { register, handleSubmit, watch } = useForm();
    // const requiredTerms = watch(['term1', 'term2']); // 필수 약관 체크 여부 확인

    /*const onSubmit = data => {
        if (!data.term1 || !data.term2) {
            setShowModal(true); // 필수 약관을 모두 동의하지 않은 경우 모달 표시
        } else {
            setShowModal(false);
            onNext(); // 다음 단계로 이동
        }
    };*/

    return (
        <div id="signup-1" className="signup">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="progress-bar progress-bar--1">
                    <div className="pagenation">1/4</div>
                </div>

                {/* tooltip */}
                {showModal && <div className="ss-notification">필수 항목을 동의해야 회원가입이 가능합니다</div>}

                {/* modal */}
                <div className="modal" style={{display: 'none'}}>
                    <div className="modal__window">
                        <button className="close">
                            <img src="/src/assets/icons/2424/close.svg" alt="닫기"/>
                        </button>
                        <span className="modal__title pt-60 pb-40">서비스 이용약관</span>
                        <p className="mb-40">
                            <b>제1조. 목적</b>
                            <br/>
                            이 약관은 새식일기(이하 &ldquo;사이트&ldquo;)에서 제공하는 제반 서비스(이하 &ldquo;서비스&ldquo;)에 접속과
                            사용자에 의해서 업로드 및 다운로드 되어 표시되는 모든 정보, 텍스트, 이미지 및 기타 자료를 이용하는
                            이용자(이하 &ldquo;회원&ldquo;)와 서비스 이용에 관한 권리 및 의무와 책임사항, 기타 필요한 사항을 규정하는
                            것을 목적으로 합니다.
                            <br/>
                            <br/>
                            <b>제2조. 약관의 게시와 효력, 개정</b>
                            <br/>
                            1. 사이트는 서비스의 가입 과정에 본 약관을 게시합니다.
                            <br/>
                            2. 사이트는 관련법에 위배되지 않는 범위에서 본 약관을 변경할 수 있습니다.
                            <br/>
                            3. 회원은 사이트가 전항에 따라 변경하는 약관에 동의하지 않을 권리가 있으며, 이 경우 회원은 사이트에서
                            제공하는 서비스 이용 중단 및 탈퇴 의사를 표시하고 서비스 이용 종료를 요청할 수 있습니다. 다만, 사이트가
                            회원에게 변경된 약관의 내용을 통보하면서 회원에게 &ldquo;7일 이내 의사 표시를 하지 않을 경우 의사 표시가
                            표명된 것으로 본다는 뜻&ldquo;을 명확히 통지하였음에도 불구하고, 거부의 의사표시를 하지 아니한 경우 회원이
                            변경된 약관에 동의하는 것으로 봅니다.
                            <br/>
                            <br/>
                            <b>제3조. 약관의 해석과 예외 준칙</b>
                            <br/>
                            1. 사이트는 제공하는 개별 서비스에 대해서 별도의 이용약관 및 정책을 둘 수 있으며, 해당 내용이 이 약관과
                            상충할 경우 개별 서비스의 이용약관을 우선하여 적용합니다.
                            <br/>
                            2. 본 약관에 명시되지 않은 사항이 관계법령에 규정되어 있을 경우에는 그 규정에 따릅니다.
                        </p>
                        <button className="ss-button --md mb-40">확인</button>
                    </div>
                </div>

                <div className="signup__title mb-60">
                    새식일기 서비스 이용약관에
                    <br/>
                    동의해주세요
                </div>
                <div className="ss-form">
                    <ul className="ss-form__col-container mb-60">
                        <input className="ss-input" type="checkbox" id="agreeTOSAll"/>
                        <label htmlFor="agreeTOSAll">모두 동의 (선택 항목 포함)</label>
                        <div className="separator --horizontal mt-20 mb-20"/>
                        <li className="between">
                            <input
                                className="ss-input"
                                type="checkbox"
                                id="agreeTOS"
                                name="agreeTOS"
                            />
                            <label className="required mb-12" htmlFor="agreeTOS">
                                서비스 이용약관
                            </label>
                            <button className="ss-text-button --underline">보기</button>
                        </li>
                        <li className="between">
                            <input
                                className="ss-input"
                                type="checkbox"
                                id="agreePrivacy"
                                name="agreePrivacy"
                            />
                            <label className="required mb-12" htmlFor="agreePrivacy">
                                개인정보 수집 및 이용동의
                            </label>
                            <button className="ss-text-button --underline">보기</button>
                        </li>
                        <li className="between">
                            <input className="ss-input"
                                   type="checkbox"
                                   id="agreeGeo"
                                   name="agreeGeo"
                            />
                            <label className="optional mb-12" htmlFor="agreeGeo">
                                위치 기반 서비스 이용동의
                            </label>
                            <button className="ss-text-button --underline">보기</button>
                        </li>
                        <li className="between">
                            <input className="ss-input"
                                   type="checkbox"
                                   id="agreeMarketing"
                                   name="agreeMarketing"
                            />
                            <label className="optional mb-12" htmlFor="agreeMarketing">
                                마케팅 서비스 이용동의
                            </label>
                            <button className="ss-text-button --underline">보기</button>
                        </li>
                    </ul>
                    <button className="ss-button --lg --full" type="submit">동의하고 가입하기</button>
                </div>
            </form>
        </div>
    );
};

export default TermsForm;