import React from "react";
import { reduxForm } from "redux-form";
import Modal from "../Modal/Modal";
import LoginForm from "./LoginForm";
import RegistrationForm from "./RegistrationForm";


const LoginReduxForm = reduxForm({ form: 'Login' })(RegistrationForm)

const Login = () => {
    return (
        <div>
            <RegistrationForm /> 
            <LoginForm/>
        </div>
    )
}

export default Login;