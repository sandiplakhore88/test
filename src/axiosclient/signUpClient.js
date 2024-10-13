import axios from "axios";

const signUpClient = axios.create({
    baseURL: 'http://localhost:8080/',
    headers: {
        'Content-Type': 'application/json'
    }
});

signUpClient.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response) {
            return Promise.reject(error.response.data);
        } else if (error.request) {
            return Promise.reject({ message: 'No response from server', success: false });
        } else {
            return Promise.reject({ message: 'Error in setting up request', success: false });
        }
    }
);

export default signUpClient;
