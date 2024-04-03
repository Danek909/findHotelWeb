import React, { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import styles from "../Login/Login.module.css"
import useAuthStore from './AuthStore';
import { InputOutlined } from "./components/InputOutlined/inputOutLinet";
import { HiMiniExclamationCircle } from "react-icons/hi2";
import { BsExclamationCircle } from "react-icons/bs";

const LoginForm = () => {
    const loginUser = useAuthStore((state) => state.loginUser);
    const currentUser = useAuthStore((state) => state.currentUser);

    const form = useForm({ mode: "onBlur" });
    const { handleSubmit, formState } = form;

    const handleLogin = (values) => {
        loginUser(values.username, values.password);
    };
    const { errors } = formState;
    return (
        <div>
            <h1 className={styles.LoginName}>Login</h1>
            <FormProvider {...form}>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className={styles.divContLoginForm_1}>
                        <InputOutlined name="username" type="text" placeholder="UserName"
                            rules={{
                                required: "This field must be filled in",
                                maxLength: { value: 15, message: "No more than 15 characters" },
                                minLength: { value: 2, message: "At least 2 characters!" 
                                }}} />
                        <p className={styles.divErrors}>{errors?.username?.message} {errors?.username && <BsExclamationCircle />}</p>
                    </div>
                    <div className={styles.divContLoginForm_2}>
                        <InputOutlined name="password" type="password" placeholder="Password"
                        rules={{
                            required: "This field must be filled in",
                            maxLength: { value: 15, message: "No more than 15 characters" },
                            minLength: { value: 2, message: "At least 2 characters!" 
                            }}} /><p className={styles.divErrors}>{errors?.password?.message} {errors?.password && <BsExclamationCircle />}</p>
                    </div>
                    <div className={styles.erorsBlock}>
                        {!currentUser ? (
                            <p>Check the password field and username<HiMiniExclamationCircle /></p>
                        ) : currentUser.username === undefined && currentUser.password === undefined ? (
                            <p></p>
                        ) : (
                            <h1>You are authorized!</h1>
                        )}
                    </div>
                    <div className={styles.divLoginFormContBtn}>
                        <button type="submit">Login</button>
                    </div>
                </form>
            </FormProvider>
        </div >
    )

}

export default LoginForm;