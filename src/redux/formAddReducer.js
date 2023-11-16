// import { reducer as formReducer } from 'redux-form';

// const formAddReducer = formReducer.plugin({
//     addUser: (state, action) => {
//         return state;
//     }
// });
export const SUBMIT_FORM = 'SUBMIT_FORM';
const formAddReducer = (state = {}, action) => {
    switch (action.type) {
        case SUBMIT_FORM:
            // Обработка отправки формы, например, вызов API
            console.log('Form submitted with data:', action.payload);
            return state;
        default:
            return state;
    }
};

export default formAddReducer;