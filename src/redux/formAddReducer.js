import { reducer as formReducer } from 'redux-form';

const formAddReducer = formReducer.plugin({
    addUser: (state, action) => {
        return state;
    }
});

export default formAddReducer;
