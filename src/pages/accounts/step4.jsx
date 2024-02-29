import React, {useState} from 'react';
import {useForm} from 'react-hook-form';

const NicknameForm = ({onNext, updateFormData}) => {
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
    const [backendResponse, setBackendResponse] = useState({});
    const nicknamePattern = /^[A-Za-z0-9_ ]+$/;
    const badWords = ['example1', 'example2', 'example3'];
    const nickname = watch('nickname');

    const validateNickname = (value) => {
        return !badWords.includes(value.toLowerCase()) || '비속어를 사용할 수 없습니다.'; // 서버단에서 검증 필요
    }

    const checkNicknameDuplication = async(nickname) => {
        const response = {isDuplicate: false};
        setBackendResponse(response);
        return response;
    }

    const onSubmit = async (data) => {
        const response = await checkNicknameDuplication(data.nickname);

        if(response.isDuplicate) {
            console.log(response.isDuplicate);
            setError('nickname', {
                type: 'nicknameDuplicated'
                , message: '이미 사용중인 닉네임 입니다. 다른 닉네임을 입력해주세요.'
            })
        } else{
            updateFormData({nickname: data.nickname});
            onNext();
        }
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
                <input
                    className="ss-input --full --error mb-10"
                    type="text"
                    placeholder="닉네임을 입력해주세요."
                    {...register('nickname', {
                        required: '닉네임을 입력해주세요.'
                        , pattern: {
                            value: nicknamePattern
                            , message: '한글 또는 영문 8자 이내로 입력 (비속어 또는 특수문자는 사용할 수 없습니다)'
                        },
                        validate: validateNickname
                    })}
                />
                <div className="notification">한글 또는 영문 8자 이내로 입력 (비속어 또는 특수문자는 사용할 수 없습니다)</div>

                {errors.nickname && <div className="notification notification--caution">
                    {errors.nickname.message}
                </div>}
                {/*<div className="notification notification--success">사용 가능한 닉네임 입니다</div>*/}
                <button className="ss-button --lg --full">
                    다음
                </button>
            </div>
        </form>
    </div>)
}

export default NicknameForm;