import React, {useState} from 'react';
import '../../scss/pages/_join.scss';
import * as joinApi from '../../api/accounts/join.js'
import TermsForm from "./step1.jsx";
import EmailForm from "./step2.jsx";
import PasswordForm from "./step3.jsx";
import NicknameForm from "./step4.jsx";
import SignComplete from "./step5.jsx";

const SignUp = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const nextStep = () => {
        setCurrentStep(currentStep + 1);
    }
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
        // 여기에서 formData를 사용하여 최종 제출 로직을 구현합니다.
        alert(formData);
        // 예: 서버에 데이터 제출
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
