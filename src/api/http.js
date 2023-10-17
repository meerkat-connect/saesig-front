import axios from "axios";

const backendApi =  axios.create({
    // axios 설정값들이 선언되는 곳

});

backendApi.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        return Promise.reject(error)
    }
);

export { backendApi };
