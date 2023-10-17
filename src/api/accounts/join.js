import {backendApi} from "@/api/http";

const api_path = '/api/v1/sign';

// ex. 메일주소 중복 검사
// http://localhost:8080//api/v1/sign/duplicate/email/메일주소
function getEmailDuplicate(value) {
    return backendApi.get(api_path + "/duplicate/email/"+ value);
}

export {
    getEmailDuplicate,
}

