import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";

const SignComplete = () => {
    const navigate = useNavigate();

    return (
        <div id="signup-5" className="signup">
            <div className="progress-bar progress-bar--5"></div>
            <div className="signup__title mb-60">
                새식이 님
                <br/>
                새식일기의 가족이 되신 것을 환영합니다 :D
            </div>
            <img src="/src/assets/pictograms/family_all.svg" alt="손인사하는 식구들"/>
            <button className="ss-button --lg --full mt-60" onClick={() => navigate('/')}>
                새식일기 시작하기
            </button>
        </div>
    )
}

export default SignComplete;