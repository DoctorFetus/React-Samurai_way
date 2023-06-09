import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "eff1be30-b0ed-4584-99a5-dd6cc7dded9f"
    }
})

export const usersAPI = {
    getUsers(currentPage: number = 0, pageSize: number = 4) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    unfollowUser(userID: number) {
        return instance.delete(`follow/${userID}`)
            .then(response => response.data)
    },
    followUser(userID: number) {
        return instance.post(`follow/${userID}`)
            .then(response => response.data)
    },
    getProfile(userID: string) {
        return instance.get(`profile/${userID}`)
    }
}

export const authAPI = {
    authMe() {
        return instance.get(`auth/me`)
            .then(response => response.data)
    }
}