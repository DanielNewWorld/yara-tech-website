const TOGGLE_IS_MOBILE = 'TOGGLE_IS_MOBILE';

let initialState = {
    name: "YARA TECH LLC",
    telephone: "503-933-4923",
    email: "yaratechsoftware@gmail.com",
}

const firmReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_IS_MOBILE:
            return {
                ...state,
            }

        default:
            return state;
    }
}

export const toggleIsMobile = (isMobile) => {
    return {
        type: TOGGLE_IS_MOBILE,
        isMobile
    }
}

export default firmReducer;