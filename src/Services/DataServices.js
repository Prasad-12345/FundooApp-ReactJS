import axios from "axios";
const headerConfig = {
    headers : {
        Authorization : localStorage.getItem('token')
    }
}

export const addNote = (takeNote2Obj) => {
    let response = axios.post('http://127.0.0.1:8000/api/addToNotes', takeNote2Obj, headerConfig);
    return response;
}

export const getNotes = () => {
    let response = axios.get(' http://127.0.0.1:8000/api/joinTable', headerConfig);
    return response;
}

export const updateNotes = (updateNotesObj) => {
    let response = axios.post(' http://127.0.0.1:8000/api/updateNotes', updateNotesObj, headerConfig);
    return response;
}