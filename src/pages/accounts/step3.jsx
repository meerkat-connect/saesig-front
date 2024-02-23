import React, {useState} from 'react';
import {useForm} from 'react-hook-form';

const PasswordForm = ({onNext, updateFormData}) => {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const onSubmit = (data) => {
        onNext()
        /*updateFormData({terms: data});
        if (data.term1 && data.term2) { // 필수 조건 확인
            onNext();
        } else {
            alert('필수 이용약관에 동의해주세요.');
        }*/
    };

    return (<div id="signup-3" className="signup">
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="progress-bar progress-bar--3">
                <div className="pagenation">3/4</div>
            </div>
            <div className="signup__title mb-60">
                로그인에 사용할
                <br/>
                비밀번호를 입력해주세요
            </div>
            <div className="ss-form">
                <input className="ss-input --full --error mb-10" type="password" placeholder="비밀번호 입력"/>
                <div className="notification">영문, 숫자, 특수문자(!@#$) 각 1자 이상 포함하여 8~15자 이내</div>
                <div className="notification notification--caution">
                    영문, 숫자, 특수문자(!@#$) 각 1자 이상 포함하여 8~15자 이내
                </div>
                <input className="ss-input --full mb-10" type="password" placeholder="비밀번호 확인"/>
                <div className="notification notification--success">비밀번호가 일치합니다.</div>
                <button className="ss-button --lg --full">
                    다음
                </button>
            </div>
        </form>
    </div>)
}
export default PasswordForm;