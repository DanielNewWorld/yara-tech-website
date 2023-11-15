import { reducer as formReducer } from 'redux-form';

const formDeleteReducer = formReducer.plugin({
    deleteUser: (state, action) => {
        return state;
    }
});

export default formDeleteReducer;
