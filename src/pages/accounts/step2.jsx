import React, {useState, useEffect} from 'react';
import {useForm} from 'react-hook-form';

const EmailForm = ({onNext, updateFormData}) => {
    const {
        register
        , handleSubmit
        , watch
        , formState: {errors}
        , setError
        , clearErrors
    } = useForm({
        mode: 'onSubmit'
    });
    const [submitted, setSubmitted] = useState(false);
    const [backendResponse, setBackendResponse] = useState({});
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const email = watch('email');

    useEffect(() => {
        if (email === '') setSubmitted(false);
    }, [email]);

    const checkEmailDuplication = async (email) => {
        // 예: const response = await fetch('/api/check-email', { method: 'POST', body: JSON.stringify({ email }) });
        //     const data = await response.json();
        const response = {isDuplicate: false, hasSocialSignUp: false, socialInfo: {platform: 'Kakao', signupDate: '2023-01-01'}};
        setBackendResponse(response);
        return response;
    }

    const onSubmit = async (data) => {
        const response = await checkEmailDuplication(data.email);
        setSubmitted(true);

        if (!response.isDuplicate && !response.hasSocialSignUp) {
            updateFormData({email: data.email});
            onNext();
        }
    };

    return (<div id="signup-2" className="signup">
        <form onSubmit={handleSubmit(onSubmit)} style={{width: "100%"}}
        >
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

                {errors.email && (
                    <div className="notification notification--caution">{errors.email.message}</div>
                )}

                {submitted && (backendResponse.isDuplicate || backendResponse.hasSocialSignUp) && (
                    <div className="social mb-10">
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

