import React, { useState } from "react";
import styles from "../Login/Login.module.css"
import "../Modal/Modal.css"
import LoginForm from "./LoginForm";
import { Modal } from 'antd';
import useAuthStore from './AuthStore';
import { FormProvider, useForm } from 'react-hook-form';
import { InputOutlined } from "./components/InputOutlined/inputOutLinet";
import { BsExclamationCircle } from "react-icons/bs";
import ModalHappyWindow from "./ModalHappyWindow";
import { useCookies } from 'react-cookie';

const RegistrationForm = (props) => {
    const [password, setPassword] = useState("");
    const [registerState, setRegisterState] = useState('');
    const [loginModalIsOpen, setLoginModalIsOpen] = useState(false);
    const [happyModalWindow, setHappyModalWindow] = useState(false);
    const updateUsers = useAuthStore((state) => state.updateUsers);
    const currentUser = useAuthStore((state) => state.currentUser);
    const users = useAuthStore((state) => state.users);
    const form = useForm({ mode: "onBlur" });
    const [cookies, setCookie] = useCookies(['username']);

    const { handleSubmit, formState, setError } = form;

    const registerUser = (values) => {
        setCookie('userData', { username: values.username, password: values.password, isLogined: "no_autarized" });

        const { password, PasswordConfirmation } = values;
        if (password === PasswordConfirmation) {
            updateUsers({
                username: values.username, email: values.email, password: values.password,
                PasswordConfirmation: values.PasswordConfirmation
            });
            const userExsist = users.find(obj => obj.username === values.username);
            if (userExsist) {
                setHappyModalWindow(true);
            } else {
                setRegisterState("Щось пішло не так!");
            }
        } else {
            setError("PasswordConfirmation", { type: "manual", passwordMes: "Passwords do not match" });
        }
    };

    const { errors } = formState;

    const openLoginModal = () => {
        setLoginModalIsOpen(true);
    };
    const closeLoginModal = () => {
        setLoginModalIsOpen(false);
        props.closeModal();
    };

    const closeHappyModal = () => {
        setHappyModalWindow(false);
        props.closeModal();
    };

    return (
        <section className={styles.SectionLogin}>
            <h1>Registration</h1>
            <FormProvider {...form}>
                <form onSubmit={handleSubmit(registerUser)} className={styles.RegForm}>
                    <div>
                        <div className={styles.divContainerRegForm_1}>
                            <InputOutlined style={errors.username ? { borderColor: 'red' } : null}
                                name="username" type="text" placeholder="User Name" rules={{
                                    required: "This field must be filled in",
                                    maxLength: { value: 15, message: "No more than 15 characters" },
                                    minLength: { value: 2, message: "At least 2 characters!" }
                                }} /><p className={styles.divErrors}>{errors?.username?.message}{errors?.username && <BsExclamationCircle />}</p>
                        </div>

                        <div className={styles.divContainerRegForm_2}>
                            <InputOutlined style={errors.email ? { borderColor: 'red' } : null} className={errors?.email ? 'erorr_Input_RegForm' : ' '} name="email" type="email" placeholder="Email" rules={{
                                required: "This field must be filled in",
                                maxLength: { value: 55, message: "No more than 55 characters" },
                                minLength: { value: 2, message: "At least 2 characters!" },
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: 'The email address must contain the "@." sign',
                                },

                            }} /><p className={styles.divErrors}>{errors?.email?.message}{errors?.email && <BsExclamationCircle />}</p>
                        </div>

                        <div className={styles.divContainerRegForm_3}>
                            <InputOutlined style={errors.password ? { borderColor: 'red', } : null} name="password" type="password"
                                onChange={e => setPassword(e.target.value)} placeholder="Password"
                                rules={{
                                    required: "This field must be filled in",
                                    maxLength: { value: 15, message: "No more than 15 characters" },
                                    minLength: { value: 4, message: "At least 2 characters!" },
                                    pattern: {
                                        value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_-])[A-Za-z\d!@#$%^&*()_-]{8,}$/,
                                        message: "Password must contain at least one letter, one number, and one special character"
                                    }
                                }} />
                            <p className={styles.divErrors_Password}>{errors?.password?.message} {errors?.password && <BsExclamationCircle />}</p>
                        </div>

                        <div className={styles.divContainerRegForm_4}>
                            <InputOutlined style={errors.PasswordConfirmation ? { borderColor: 'red' } : null} name="PasswordConfirmation" type="password" placeholder="Password Confirmation" rules={{
                                required: "This field must be filled in",
                                maxLength: { value: 15, message: "No more than 15 characters" },
                                minLength: { value: 2, message: "At least 2 characters!" },
                            }} />
                            {<p className={styles.divErrorsPsConfirm}>{errors?.PasswordConfirmation?.message} {errors?.PasswordConfirmation?.message && <BsExclamationCircle />}</p>}
                            {errors.PasswordConfirmation && <p className={styles.errorsPasword}>{errors?.PasswordConfirmation?.passwordMes} {errors?.PasswordConfirmation?.passwordMes && <BsExclamationCircle />} </p>}
                        </div>

                        <div className={styles.divContainerRegForm_5}>
                            <InputOutlined style={errors.phoneNumber ? { borderColor: 'red' } : null} name="phoneNumber" type="tel" placeholder="Phone Number"
                                rules={{
                                    required: "This field must be filled in",
                                    maxLength: { value: 15, message: "No more than 15 characters" },
                                    minLength: { value: 2, message: "At least 2 characters!" },
                                    pattern: {
                                        value: /^[0-9]{10}$/,
                                        message: 'Invalid phone number',
                                    },
                                }} />
                            <p className={styles.divErrors}>{errors?.phoneNumber?.message} {errors?.phoneNumber && <BsExclamationCircle />}</p>

                        </div>

                    </div>
                    <div className={styles.RegistrationDivBtn}>
                        <button type="submit">Registration</button>
                    </div>
                    {registerState.length > 0 && <div>{registerState}</div>}
                    <Modal open={happyModalWindow} onCancel={closeHappyModal} footer={null}><ModalHappyWindow openLoginModal={openLoginModal} users={users} /></Modal>
                </form>
            </FormProvider>
            <div className={styles.AcauntMesage}>
                <span> Already have an account?<h3 onClick={openLoginModal}>Enter</h3></span>
            </div>
            <Modal open={loginModalIsOpen} onCancel={closeLoginModal} className={styles.ModalLoginWindow} footer={null}>
                <LoginForm />
            </Modal>
        </section >
    )
}

export default RegistrationForm;