import React from "react";
import { reduxForm } from "redux-form";
import styles from "../Login/Login.module.css"

const LoginForm = () => {
    return (
        <section className={styles.SectionLogin}>
             <h1>
                Registration
            </h1>
            <form>
                <div className={styles.Div_1}>
                    <p>Username or Email Address</p>
                    <input placeholder="Username or Email Address" type="email" />
                </div>
                <div className={styles.Div_2}>
                    <p>Password</p>
                    <input placeholder="Password" type="Password" />
                </div>
                <div className={styles.Div_2}>
                    <p>Password confirmation</p>
                    <input placeholder="Password confirmation" type="Password" />
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>
        </section>
    )
}

const LoginReduxForm = reduxForm ({ form:'Login' })(LoginForm)

const Login = () => {
    return (
        <div>
            <LoginForm />
        </div>
        )
}
export default Login;