import { reducer as formReducer } from 'redux-form';

const formFindReducer = formReducer.plugin({
    findUser: (state, action) => {
        return state;
    }
});

export default formFindReducer;
