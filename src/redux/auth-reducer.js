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
                ...action.data,
                isAuth: true
            }

        default:
            return state;
    }
}

export const setAuthAdminData = (adminID, login, password) => {
    return {
        type: SET_ADMIN_DATA,
        data: {adminID, login, password}
    }
}

// export const requestAuth = (page, pageSize, firstname) => {
//     return (dispatch) => {
//         try {
//             usersAPI.getUsers(page, pageSize, firstname).then(data => {
//                 dispatch(setAuthAdminData(data.items));
//                 // console.log("items: " + data.items[0].id)
//             })
//         } catch (error) {
//             console.log(error);
//         }
//     }
// }

export default authReducer;