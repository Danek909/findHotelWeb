import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import styles from "../Login/Login.module.css"
import { InputOutlined } from "./components/InputOutlined/inputOutLinet";
import { BsExclamationCircle } from "react-icons/bs";
import { useCookies } from 'react-cookie';
import { useTranslation } from "react-i18next";

type PropsType = {
    message?: string,
    username: string,
    password: string,
    errorsMessageLoginForm?: string,
}

const LoginForm: React.FC<PropsType> = (props: PropsType) => {
    const [cookies, setCookie] = useCookies(['userData']);
    const [userData, setUserData] = useState(cookies.userData);
    const form = useForm<PropsType>({ mode: "onBlur" });
    const { register, handleSubmit, formState, setError, clearErrors } = form;
    const { errors } = formState;
    const { t, i18n } = useTranslation();

    const changeLanguage = (language: string) => {
        i18n.changeLanguage(language);
    };

    const resetErrors = () => {
        clearErrors("errorsMessageLoginForm");
    }
    const handleLogin = (values: PropsType) => {
        if (userData.username === values.username && userData.password === values.password) {
            const cookieUserData = cookies.userData;
            cookieUserData.isLogined = 'authorized';
            console.log(cookieUserData, 'cookieUserData');
            setCookie("userData", cookieUserData);
            window.location.reload();
        } else {
            setError("errorsMessageLoginForm", { type: "manual", message: (t('LoginForm.setError_message')) });
        }
        console.log(userData, "UserData LoginForm");
    };

    return (
        <div>
            <h1 className={styles.LoginName}>Login</h1>
            <FormProvider {...form}>
                <form onSubmit={handleSubmit(handleLogin)} onChange={resetErrors}>
                    <div className={styles.divContLoginForm_1}>
                        <InputOutlined {...register("username")} type="text" placeholder={t('LoginForm.placeholder_UserName')}
                            rules={{
                                required: (t('LoginForm.required')),
                                minLength: {
                                    value: 2, message:  (t('LoginForm.MinLenght'))
                                }}} />
                        <p className={styles.divErrors}>{errors?.username?.message} {errors?.username && <BsExclamationCircle />}</p>
                    </div>
                    <div className={styles.divContLoginForm_2}>
                        <InputOutlined {...register("password")} type="password" placeholder={t('LoginForm.placeholder_password')}
                            rules={{
                                required: (t('LoginForm.required')),
                                minLength: {
                                    value: 2, message: (t('LoginForm.MinLenght'))
                                }
                            }} />
                        <p className={styles.divErrors}>{errors?.password?.message} {errors?.password && <BsExclamationCircle />}</p>
                    </div>
                    <div className={styles.erorsBlock}>
                        <p>{errors?.errorsMessageLoginForm?.message} {errors?.errorsMessageLoginForm && <BsExclamationCircle />} </p>
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