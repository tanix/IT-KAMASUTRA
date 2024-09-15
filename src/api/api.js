import Axios from 'axios';

const instance = Axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/"
})
export const UserAPI = {
    getUsersData() {
        return instance.get(`users`)
        .then(response => response.data);
    },
    getChangedUserData (pageNumber, pageSize) {
        return instance.get(`users?page=${pageNumber}&count=${pageSize}`)
        .then(response => response.data);
        
    }
}

