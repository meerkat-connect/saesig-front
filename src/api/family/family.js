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

function getBreedOptions(animalDivision1Id){
    const param = {
        animalDivision1Id : animalDivision1Id
    }
    return backendApi.get(api_path + "/adopt/getBreedOptions", {params : param});
}

function getVaccineList(animalDivision1Id){
    const param = {
        animalDivision1Id : animalDivision1Id
    }
    return backendApi.get(api_path + "/adopt/getVaccineList", {params : param});
}

function insertAdopt(data) {
    return backendApi.post(api_path + "/adopt/insertAdopt", data);
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

function getAdoptViewData(id) {
    const searchData = {
     id : id
    }
    return backendApi.get(api_path + "/adopt/selectAdoptView", {params: searchData});
}

export {
    getAdoptList,
    insertAdopt,
    deleteAdopt,
    chageLikeInfo,
    reportAdopt,
    getBreedOptions,
    getVaccineList,
    getAdoptViewData,
}
