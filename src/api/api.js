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
        
    },
    follow(userId) {
       return instance.post(`follow/${userId}`)
    },
    unfollow(userId) {
       return instance.delete(`follow/${userId}`)
    },
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
    }
};
 export const authAPI = {
    me() {
        return instance.get(`auth/me`, {
			withCredentials: true
		})
    }
 }
