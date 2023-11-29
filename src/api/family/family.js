import {backendApi} from "@/api/http";

const api_path = '/api/v1';

// ex. 메일주소 중복 검사
// http://localhost:8080//api/v1/sign/duplicate/email/메일주소
function getAdoptList() {
    const searchData = {
        searchKeyword : '',
        searchType : '',
        searchTitle : '',
        searchStatus : '',
        searchAnimalDivision1Category : '',
        searchAnimalDivision2Category : '',
        searchGender : '',
        searchReportCnt : '',
        searchIsDeleted : ''
    }
    return backendApi.get(api_path + "/adopt/selectAdoptList", {params : searchData});
}

function insertAdopt() {
    const postData = {
        title : "test",
        content : "test",
        gender : "MAN",
        age : 13,
        ageCategory : "ASD",
        isCastrated : "N",
        responsibilityCost : 580000,
        etcContent : "test",
        animalDivision1Id : 1,
        animalDivision2Id : 1,
        sido : "test",
        sigungu : "test",
        vaccineList : [1,2,3]
    }
    return backendApi.post(api_path + "/adopt/insertAdopt", postData);
}


function deleteAdopt(data) {
    const deleteParam = {
        id : data.id
    }
    return backendApi.delete(api_path + "/adopt/deleteAdopt", {params : deleteParam});
}

function chageLikeInfo(data) {
    const id = data.id;
    const likeParam = {
        id : id
    }
    return backendApi.post(api_path+"/adopt/changLikeInfo", likeParam)
}

function reportAdopt(data){
    const postData = {
        adoptId : data.id,
        category : "TYPE_A",
        content : "test사유로 신고합니다."
    }
    return backendApi.post(api_path+"/adopt/reportAdoptPost", postData)
}

export {
    getAdoptList,
    insertAdopt,
    deleteAdopt,
    chageLikeInfo,
    reportAdopt,
}
