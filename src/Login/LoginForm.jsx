import React, { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import styles from "../Login/Login.module.css"
import { InputOutlined } from "./components/InputOutlined/inputOutLinet";
import { BsExclamationCircle } from "react-icons/bs";
import { useCookies } from 'react-cookie';
import { Navigate } from "react-router-dom";

const LoginForm = (props) => {
    const [cookies, setCookie] = useCookies(['userData']);
    const [userData, setUserData] = useState(cookies.userData);
    const form = useForm({ mode: "onBlur" });
    const { handleSubmit, formState, setError } = form;

    const handleLogin = (values) => {
        if (userData.username === values.username && userData.password === values.password) {

            setCookie("userData", userData.isLogined = "test");
            alert("good");
            // return <Navigate to={'/homePage'}/>
        } else {
            alert("Problem");
            setError("errorsMessageLoginForm", { type: "manual", passwordMesage: "Check the password field and username" });
        }
        console.log(userData, "UserData LoginForm");
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
                                minLength: {
                                    value: 2, message: "At least 2 characters!"
                                }
                            }} />
                        <p className={styles.divErrors}>{errors?.username?.message} {errors?.username && <BsExclamationCircle />}</p>
                    </div>
                    <div className={styles.divContLoginForm_2}>
                        <InputOutlined name="password" type="password" placeholder="Password"
                            rules={{
                                required: "This field must be filled in",
                                maxLength: { value: 15, message: "No more than 15 characters" },
                                minLength: {
                                    value: 2, message: "At least 2 characters!"
                                }
                            }} />
                        <p className={styles.divErrors}>{errors?.password?.message} {errors?.password && <BsExclamationCircle />}</p>
                    </div>
                    <div className={styles.erorsBlock}>

                        <p>{errors?.errorsMessageLoginForm?.passwordMesage} {errors?.errorsMessageLoginForm && <BsExclamationCircle />} </p>
                        {/* {values.username === cookies.username || values.password === cookies.password ? (
                            <h1>You are authorized!</h1>
                        ) : (
                            <p>Check the password field and username<HiMiniExclamationCircle /></p>
                        )} */}

                        {/* {!currentUser ? (
                            <p>Check the password field and username<HiMiniExclamationCircle /></p>
                        ) : currentUser.username === undefined && currentUser.password === undefined ? (
                            <p></p>
                        ) : (
                            <h1>You are authorized!</h1>
                        )} */}


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