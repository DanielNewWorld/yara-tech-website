import {authAPI} from "../api/api";

const SET_ADMIN_DATA = 'SET_ADMIN_DATA';

let initialState = {
    adminID: null,
    login: null,
    password: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ADMIN_DATA:
            return {
                ...state,
                ...action.payload,
                isAuth: true
            }

        default:
            return state;
    }
}

export const setAuthAdminData = (adminID, login, password, isAuth) => {
    return {
        type: SET_ADMIN_DATA,
        payload: {adminID, login, password, isAuth}
    }
}

export const getAuthAdminData = () => async (dispatch) => {
    const response = await authAPI.me();
    console.log(response.data)
    if (response.data.resultCode === 0) {
        let {_id, login, password} = response.data.data;
        dispatch(setAuthAdminData(_id, login, password, true))
    }
}

export const login = (login, password, rememberMe) => {
    return (dispatch) => {
        try {
            const response = authAPI.login(login, password, rememberMe).then(data => {
                // console.log("items: " + data.items[0].id)
                if (response.data.resultCode === 0) {
                    dispatch(getAuthAdminData());
                }
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export const logout = () => {
    return (dispatch) => {
        try {
            const response = authAPI.logout().then(data => {
                // console.log("items: " + data.items[0].id)
                if (response.data.resultCode === 0) {
                    dispatch(setAuthAdminData(null, null, null, false))
                }
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export default authReducer;