import React from 'react';
import styleCSS from './Login.module.css';
import {Field, reduxForm} from "redux-form";
import {required} from "../../../utils/validators/validators";
import {Input} from "../../Common/FormsControls/FormsControls";
import {connect} from "react-redux";
import {login} from "../../../redux/auth-reducer";

const LoginForm = (props) => {
    return (
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field type="text" placeholder="Login" component={Input} name={"login"}
                           validate={[required]}/>
                </div>
                <div>
                    <Field placeholder="Password" component={Input} name={"password"} type={"password"}
                           validate={[required]}/>
                </div>
                <div className={styleCSS.checkbox}>
                    <Field component={Input} type="checkbox" name={"rememberMe"}/>
                    <label htmlFor="myCheckbox">remember me</label>
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
        // alert(formData.password);
        props.login(formData.login, formData.password, formData.rememberMe)
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

export default connect (null, {login})(Login)