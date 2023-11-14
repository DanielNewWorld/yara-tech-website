import axios from "axios";

export const username = 'admin';
export const password = 'qwerty';
const basicAuthCredentials = btoa(`${username}:${password}`);

export type UserCreateModel = {
    firstname: string
}

let endpoint = "/"

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://main--warm-phoenix-949f5d.netlify.app/api',
    headers: {
        'Authorization': `Basic ${basicAuthCredentials}`,
    },
})

export const usersAPI = {
    async getUsers(currentPage = 1, pageSize = 10) {
        try {
            const response = await instance.get(`?page=${currentPage}&pageSize=${pageSize}`)
            return response.data;
        } catch (error) {
            console.error('Error:', error);
        }
    },

    async addUsers(currentPage = 1, pageSize = 10, firstname: string) {
        try {
            const response = await instance.post(`${endpoint}?page=${currentPage}&pageSize=${pageSize}`, {
                firstname: firstname
            });
            return response.data;
        } catch (error) {
            console.error('Error:', error);
        }
    }
}

// export const authAPI = {
//     me() {
//         return instance.get(`auth/me`);
//     }
// }