import { reducer as formReducer } from 'redux-form';

const formUpdateReducer = formReducer.plugin({
    elementUser: (state, action) => {
        return state;
    }
});

export default formUpdateReducer;
