import {applyMiddleware, combineReducers, compose, legacy_createStore as createStore} from "redux";
import servicesItemReducer from './servicesItem-reducer';
import firmReducer from './firm-reducer';
import userReducer from './userItem-reducer';
import thunkMiddleware from "redux-thunk";
import formAddReducer from "./formAddReducer";
import formFindReducer from "./formFindReducer";
import formDeleteReducer from "./formDeleteReducer";
import formUpdateReducer from "./formUpdateReducer";
import {reducer as formReducer} from "redux-form";

let reducers = combineReducers({
    servicesData: servicesItemReducer,
    firmData: firmReducer,
    userData: userReducer,
    form: formReducer,
    // addUser: formReducer,
    // findUser: formReducer,
    // deleteUser: formReducer,
    // elementUser: formReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(
    applyMiddleware(thunkMiddleware)
));

//let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.__store__ = store;

export default store;