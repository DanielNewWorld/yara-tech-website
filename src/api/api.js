import axios from "axios";

export const username = 'admin';
export const password = 'qwerty';
const basicAuthCredentials = btoa(`${username}:${password}`);

export type UserCreateModel = {
    firstname: string
}

const baseURL = 'https://main--warm-phoenix-949f5d.netlify.app/api';
let endpoint = "/"

const instance = axios.create({
    withCredentials: true,
    baseURL: baseURL,
    headers: {
        'Authorization': `Basic ${basicAuthCredentials}`,
    },
})

export const authAPI = {
    async me() {
        return await axios.get(`${baseURL}/auth/me`,
            {withCredentials: true});
    }
}

export const usersAPI = {
    async getUsers(currentPage = 1, pageSize = 10, firstname = '') {
        const find = 'firstname=' + firstname
        try {
            const response = await instance.get(`?page=${currentPage}&pageSize=${pageSize}&${find}`)
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
    },

    async deleteUsers(currentPage = 1, pageSize = 10, firstname: string, id: string) {
        endpoint = id;
        try {
            const response = await instance.delete(`${endpoint}?page=${currentPage}&pageSize=${pageSize}`);
            return response.data;
        } catch (error) {
            console.error('Error:', error);
        }
    },

    async updateUsers(currentPage = 1, pageSize = 10, firstname: string, id: string) {
        endpoint = endpoint + id;
        const dataUpdate = {
            firstname: firstname,
        };

        // console.log(currentPage + "   " + pageSize + "   " + firstname + "   " + id)
        try {
            const response = await instance.put(`${endpoint}?page=${currentPage}&pageSize=${pageSize}`,
                dataUpdate);
            return response.data;
        } catch (error) {
            console.error('Error:', error);
        }
    }
}