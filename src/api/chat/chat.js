import {backendApi} from "@/api/http";

const api_path = '/api/v1';

// ex. 메일주소 중복 검사
// http://localhost:8080//api/v1/sign/duplicate/email/메일주소
function getChatList() {
    return backendApi.get("http://127.0.0.1:8080/chat/getChatList")
        .then(response => response.data)
        .catch(error => {
            console.error("Error while fetching chat list:", error);
            throw error; // Propagate the error
        });
}

function getChatDataList(chatId) {
    // const param = {
    //     chatId : chatId
    // }
    return backendApi.get("http://127.0.0.1:8080/chat/getChatDataList/"+chatId)
        .then(response => response.data)
        .catch(error => {
            console.error("Error while fetching chatData list:", error);
            throw error; // Propagate the error
        });
}


export {
    getChatList,
    getChatDataList,
}
