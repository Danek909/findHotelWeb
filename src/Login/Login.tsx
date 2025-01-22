import React from 'react';
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';


type PropsType ={
   username: string, 
   password: string,
}

const Login: React.FC<PropsType> =  (props) => {
    return (
        <div>
            <RegistrationForm closeModal={function (): void {} } password={""} PasswordConfirmation={""} username={""} email={""} phoneNumber={""}  />
            <LoginForm username={""} password={""} />
        </div>
    )
}

export default Login;