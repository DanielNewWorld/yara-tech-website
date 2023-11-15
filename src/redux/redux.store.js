import {combineReducers, legacy_createStore as createStore} from "redux";
// import {applyMiddleware, combineReducers, compose, legacy_createStore as createStore} from "redux";
import servicesItemReducer from './servicesItem-reducer';
import firmReducer from './firm-reducer';
import userReducer from './userItem-reducer';
// import thunkMiddleware from "redux-thunk";
// import formFindReducer from "./formFindReducer";
import { reducer as formReducer } from 'redux-form';
// import formFindReducer from "./formFindReducer";
// import formAddReducer from "./formAddReducer";
// import formDeleteReducer from "./formDeleteReducer";
// import formUpdateReducer from "./formUpdateReducer";

let reducers = combineReducers({
    servicesData: servicesItemReducer,
    firmData: firmReducer,
    userData: userReducer,
    form: formReducer
    // addUser: formReducer,
    // findUser: formReducer,
    // deleteUser: formDeleteReducer,
    // elementUser: formUpdateReducer
});

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(reducers, composeEnhancers(
//     applyMiddleware(thunkMiddleware)
// ));

//let store = createStore(reducers, applyMiddleware(thunkMiddleware));

const store = createStore(reducers);
window.__store__ = store;

export default store;