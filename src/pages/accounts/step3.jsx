import React, {useState} from 'react';
import {useForm} from 'react-hook-form';

const PasswordForm = ({onNext, updateFormData}) => {
    const {
        register
        , handleSubmit
        , watch
        , formState: {errors}
    } = useForm({
        mode: 'onSubmit'
    });
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$])[A-Za-z\d!@#$]{8,15}$/;
    const password = watch('password');
    const confirmPassword = watch('confirmPassword');

    const onSubmit = (data) => {
        updateFormData({password: data.password});
        onNext();
    };

    return (<div id="signup-3" className="signup">
        <form onSubmit={handleSubmit(onSubmit)} style={{width: "100%"}}>
            <div className="progress-bar progress-bar--3">
                <div className="pagenation">3/4</div>
            </div>
            <div className="signup__title mb-60">
                로그인에 사용할
                <br/>
                비밀번호를 입력해주세요
            </div>
            <div className="ss-form">
                <input
                    className="ss-input --full --error mb-10"
                    type="password"
                    placeholder="비밀번호 입력"
                    {...register('password', {
                        required: '패스워드를 입력해주세요.'
                        , pattern: {
                            value: passwordPattern
                            , message: '영문, 숫자, 특수문자(!@#$) 각 1자 이상 포함하여 8~15자 이내'
                        }
                    })}
                />
                {!errors.password &&<div className="notification">영문, 숫자, 특수문자(!@#$) 각 1자 이상 포함하여 8~15자 이내</div>}
                {errors.password &&
                    <div className="notification notification--caution">
                        {errors.password.message}
                    </div>
                }

                <input
                    className="ss-input --full mb-10"
                    type="password"
                    placeholder="비밀번호 확인"
                    {...register('confirmPassword', {
                        validate: value =>
                            value === password || "비밀번호가 일치하지 않습니다."
                    })}
                />

                {errors.confirmPassword && (
                    <div className="notification notification--caution">
                        {errors.confirmPassword.message}
                    </div>
                )}

                {/*<div className="notification notification--success">비밀번호가 일치합니다.</div>*/}

                <button className="ss-button --lg --full" type="submit">
                    다음
                </button>
            </div>
        </form>
    </div>)
}
export default PasswordForm;