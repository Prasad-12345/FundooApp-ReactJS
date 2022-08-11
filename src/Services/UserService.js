import axios from "axios";
export const signUp =  (signupObj) => {
    let response =  axios.post(" http://127.0.0.1:8000/api/newregister", signupObj);
    return response;
}

export const signIn = (signinObj) => {
    let response =  axios.post(" http://127.0.0.1:8000/api/login", signinObj);
    return response;
}