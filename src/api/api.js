import axios from "axios";

export const username = 'Daniel';
export const password = 'danielTOVARKA';
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
    async me(login, password) {
        const basicAuthCredentials = btoa(`${login}:${password}`);
        return await axios.get(`${baseURL}/auth/me`, {
                withCredentials: true,
                headers: {
                    'Authorization': `Basic ${basicAuthCredentials}`,
                }
            }
        );
    },

    async login(login: string, password: string, rememberMe: boolean = false) {
        const data = {
            login: login,
            password: password,
            rememberMe: false
        };

        return await axios.post(`${baseURL}/auth/login`, data,
            {withCredentials: true});
    },

    async logout() {
        return await axios.delete(`${baseURL}/auth/logout`,
            {withCredentials: true});
    }
}

export const usersAPI = {
    async getUsers(login, password, currentPage = 1, pageSize = 10, firstname = '') {
        // login = 'Daniel';
        // password = 'danielTOVARKA';

        const basicAuthCredentials = btoa(`${login}:${password}`);
        console.log("login-pass: " + login + "  " + password)
        const find = 'firstname=' + firstname

        const instance = axios.create({
            withCredentials: true,
            baseURL: baseURL,
            headers: {
                'Authorization': `Basic ${basicAuthCredentials}`,
            },
        })

        try {
            const response = await instance.get(`?page=${currentPage}&pageSize=${pageSize}&${find}`)
            return response.data;
        } catch (error) {
            console.error('Error:', error);
        }
    },

    async addUsers(currentPage = 1, pageSize = 10, firstname: string) {
        // const basicAuthCredentials = btoa(`${login}:${password}`);

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
        // const basicAuthCredentials = btoa(`${login}:${password}`);

        endpoint = id;
        try {
            const response = await instance.delete(`${endpoint}?page=${currentPage}&pageSize=${pageSize}`);
            return response.data;
        } catch (error) {
            console.error('Error:', error);
        }
    },

    async updateUsers(currentPage = 1, pageSize = 10, firstname: string, id: string) {
        // const basicAuthCredentials = btoa(`${login}:${password}`);

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