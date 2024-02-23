import React, {useState} from 'react';
import {useForm} from 'react-hook-form';

const EmailForm = ({onNext, updateFormData}) => {
    const {register, handleSubmit, formState: {errors}} = useForm();

    const onSubmit = (data) => {
        updateFormData({email: data.email});
        onNext();
    };

    return (<div id="signup-2" className="signup">
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="progress-bar progress-bar--2">
                <div className="pagenation">2/4</div>
            </div>
            <div className="signup__title mb-60">
                로그인에 사용할
                <br/>
                아이디(이메일)를 입력해주세요
            </div>
            <div className="ss-form">
                <input className="ss-input --full mb-10"
                       type="text"
                       placeholder="아이디(이메일) 입력"
                       id="email"
                       name="email"
                       {...register('email', {required: true})}
                />
                {errors.email && <div className="notification notification--caution">이메일을 입력해 주세요.</div>}
                {/*  <div className="notification notification--caution">이메일 형식이 올바르지 않습니다.</div>
                            <div className="notification notification--success">사용 가능한 이메일 입니다.</div>*/}
                <div className="social mb-10">
                    <span>간편로그인 : Kakao</span>
                    <button className="ss-text-button --underline">간편로그인 화면으로 이동</button>
                </div>
                <button className="ss-button --lg --full">
                    다음
                </button>
            </div>
        </form>
    </div>)
}

export default EmailForm;

