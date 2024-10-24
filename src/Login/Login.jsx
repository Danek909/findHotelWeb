import React from "react";
import { reduxForm } from "redux-form";
import LoginForm from "./LoginForm";
import RegistrationForm from "./RegistrationForm";


const LoginReduxForm = reduxForm({ form: 'Login' })(RegistrationForm)

const Login = (props) => {
    return (
        <div>
            <RegistrationForm props={props} />
            <LoginForm />
        </div>
    )
}

export default Login;