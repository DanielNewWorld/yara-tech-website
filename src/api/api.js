import axios from "axios";

export const username = 'admin';
export const password = 'qwerty';
const basicAuthCredentials = btoa(`${username}:${password}`);

// const id = 1699833018020;
// const data = {
//     firstname: 'user8',
// };

// const instance = axios.create({
//     // withCredentials: true,
//     baseURL: 'https://main--warm-phoenix-949f5d.netlify.app/api',
// })

const baseURL = 'https://main--warm-phoenix-949f5d.netlify.app/api';

export const usersAPI = {
    async getUsers(currentPage = 1, pageSize = 10) {
        try {
            const response = await axios.get(`${baseURL}/`,
                {
                    headers: {
                        // 'Content-Type': 'application/json',
                        Authorization: `Basic ${basicAuthCredentials}`
                    },
                })
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