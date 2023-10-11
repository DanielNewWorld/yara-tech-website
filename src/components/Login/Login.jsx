import React from 'react';
import styleCSS from './Login.module.css';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {Input} from "../Common/FormsControls/FormsControls";

const LoginForm = (props) => {
    return (
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field type="text" placeholder="Login" component={Input} name={"login"} validate={[required, maxLengthCreator(10)]}/>
                </div>
                <div>
                    <Field type="text" placeholder="Password" component={Input} name={"password"} validate={[required, maxLengthCreator(10)]}/>
                </div>
                <div>
                    <Field component={Input} type="checkbox" name={"rememberMe"}/> remember me
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>
    );
};

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
        alert(formData.login);
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

export default Login