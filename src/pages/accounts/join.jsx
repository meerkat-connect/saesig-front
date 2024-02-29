import React, {useState, useEffect} from 'react';
import '../../scss/pages/_join.scss';
import * as joinApi from '../../api/accounts/join.js'
import TermsForm from "./step1.jsx";
import EmailForm from "./step2.jsx";
import PasswordForm from "./step3.jsx";
import NicknameForm from "./step4.jsx";
import SignComplete from "./step5.jsx";

const SignUp = () => {
    const initialStep = Number(localStorage.getItem('currentStep')) || 1;
    const [currentStep, setCurrentStep] = useState(1);

    useEffect(() => {
        // localStorage.setItem('currentStep', currentStep);
    }, [currentStep]);

    const nextStep = () => {
        const nextStep = currentStep + 1;
        setCurrentStep(nextStep);
        window.history.pushState({step: nextStep}, `Step ${nextStep}`, window.location.pathname)
    }

    useEffect(() => {
        const handlePopState = (e) => {
            const step = e.state?.step;
            if (step) {
                setCurrentStep(step);
            }
        };

        window.addEventListener('popstate', handlePopState);

        return () => {
            window.removeEventListener('popstate', handlePopState);
        }
    }, []);


    const [formData, setFormData] = useState({
        email: '',
        nickname: '',
        password: '',
        terms: {
            term1: false,
            term2: false,
            term3: false,
            term4: false,
        }
    })
    const updateFormData = (newData) => {
        setFormData({...formData, ...newData});
    }

    const handleSubmit = () => {
        alert(formData);
        setCurrentStep(currentStep + 1); // 성공시 회원가입 완료페이지로 이동
    }

    return (
        <>
            {currentStep == 1 && <TermsForm onNext={nextStep} formData={formData} updateFormData={updateFormData}/>}
            {currentStep == 2 && <EmailForm onNext={nextStep} updateFormData={updateFormData}/>}
            {currentStep == 3 && <PasswordForm onNext={nextStep} updateFormData={updateFormData}/>}
            {currentStep == 4 && <NicknameForm onNext={handleSubmit} updateFormData={updateFormData}/>}
            {currentStep == 5 && <SignComplete/>}
        </>
    );
};

export default SignUp;
