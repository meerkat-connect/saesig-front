import React, {useState, useEffect} from 'react';
import {useForm} from 'react-hook-form';

const EmailForm = ({onNext, updateFormData}) => {
    const { register, handleSubmit, watch, formState: { errors }, setError, clearErrors } = useForm({
        mode: 'onSubmit' // 또는 'onChange', 'onBlur' 등 다른 모드를 사용할 수 있습니다.
    });
    const [backendResponse, setBackendResponse] = useState({});
    const [formSubmitted, setFormSubmitted] = useState(false); // 폼 제출 상태 추적
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const email = watch('email');

    useEffect(() => {
        if (!formSubmitted) return;
        setFormSubmitted(false);
    }, [email]);

    const checkEmailDuplication = async (email) => {
        // 예: const response = await fetch('/api/check-email', { method: 'POST', body: JSON.stringify({ email }) });
        //     const data = await response.json();
        const response = { isDuplicate: false, hasSocialSignUp: true, socialInfo: { platform: 'Kakao', signupDate: '2023-01-01' } };
        setBackendResponse(response);
        return response;
    }

    const onSubmit = async (data) => {
        setFormSubmitted(true);
        const response = await checkEmailDuplication(data.email);

        if (response.isDuplicate) {
            setError('email', { type: 'duplicate', message: '이미 사용중인 이메일입니다.' });
        } else if (response.hasSocialSignUp) {
            setError('email', { type: 'socialSignUp', message: '간편 가입한 이력이 존재합니다.' });
        } else {
            updateFormData({ email: data.email });
            onNext();
        }
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
                       {...register('email', {
                           required: '이메일을 입력해 주세요.',
                           pattern: {
                               value: emailPattern,
                               message: '이메일 형식이 올바르지 않습니다.'
                           }
                       })}
                />

                {formSubmitted && errors.email && errors.email.type !== 'socialSignUp' && (
                    <div className="notification notification--caution">{errors.email.message}</div>
                )}

                {formSubmitted && errors.email && errors.email.type === 'socialSignUp' && (
                    <div className="social mb-10">
                        <span>간편 가입한 이력이 있습니다. ({backendResponse.socialInfo.platform})</span>
                        <button className="ss-text-button --underline">간편로그인 화면으로 이동</button>
                    </div>
                )}

                <button className="ss-button --lg --full" type="submit">
                    다음
                </button>
            </div>
        </form>
    </div>)
}

export default EmailForm;

