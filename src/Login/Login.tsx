import React from "react";
import { reduxForm } from "redux-form";
import LoginForm from "./LoginForm";
import RegistrationForm from "./RegistrationForm";


const LoginReduxForm = reduxForm({ form: 'Login' })(RegistrationForm);


type PropsType ={
   username: string, 
   password: string,
}

const Login =  ({ username, password}: PropsType) => {
    return (
        <div>
            <RegistrationForm closeModal={function (): void {} } password={""} PasswordConfirmation={""} username={""} email={""} phoneNumber={""}  />
            <LoginForm username={""} password={""} />
        </div>
    )
}

export default Login;