import {usersAPI} from "../api/api";

const ADD_ITEM = 'ADD-ITEM';
const SET_BD = 'SET-BD';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
    items: [],
    pageSize: 10,
    totalCount: 0,
    currentPage: 1,
    isFetching: true
}

const userItemReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM:
            let newItem = {
                id: 3,
                imgSrc: "images/3.jpg",
                nameItem: "service 3",
                description: "description 3"
            }

            return {
                ...state,
                items: [...state.items, newItem]
            };

        case SET_BD:
            return {
                ...state,
                items: [...action.items]
            }

        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }

        case SET_TOTAL_COUNT:
            return {
                ...state,
                totalCount: action.count
            }

        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }

        default:
            return state;
    }
}

export const addItem = () => {
    return {
        type: ADD_ITEM
    }
}

const setBD = (items) => {
    return {
        type: SET_BD,
        items
    }
}

const setCurrentPage = (currentPage) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    }
}

const setTotalUserCount = (totalCount) => {
    return {
        type: SET_TOTAL_COUNT,
        count: totalCount
    }
}

const toggleIsFetching = (isFetching) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching
    }
}

export const requestUsers = (page, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(page));
try {
        usersAPI.getUsers(page, pageSize).then(data => {
            dispatch(toggleIsFetching(false));
            dispatch(setBD(data.items));
            dispatch(setTotalUserCount(data.totalCount));
        })
} catch (error) {
    console.log(error);
}
    }
}

export default userItemReducer;