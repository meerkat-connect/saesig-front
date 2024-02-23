import React, {useState} from 'react';
import {useForm} from 'react-hook-form';

const NicknameForm = ({onNext, updateFormData}) => {
    const {register, handleSubmit, formState: {errors}} = useForm();

    const onSubmit = (data) => {
        // updateFormData({email: data.email});
        onNext();
    };

    return (<div id="signup-4" className="signup">
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="progress-bar progress-bar--4">
                <div className="pagenation">4/4</div>
            </div>
            <div className="signup__title mb-60">
                새식일기에서 활동할
                <br/>
                닉네임을 입력해주세요
            </div>
            <div className="ss-form">
                <input className="ss-input --full --error mb-10" type="text" placeholder="비밀번호 입력"/>
                <div className="notification">한글 또는 영문 8자 이내로 입력 (비속어 또는 특수문자는 사용할 수 없습니다)</div>
                <div className="notification notification--caution">
                    이미 사용중인 닉네임 입니다. 다른 닉네임을 입력해주세요
                </div>
                <div className="notification notification--caution">
                    비속어, 특수문자가 포함되어 사용할 수 없는 닉네임 입니다.
                </div>
                <div className="notification notification--success">사용 가능한 닉네임 입니다</div>
                <button className="ss-button --lg --full">
                    다음
                </button>
            </div>
        </form>
    </div>)
}

export default NicknameForm;